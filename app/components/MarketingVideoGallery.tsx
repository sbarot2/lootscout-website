"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MARKETING_VIDEOS, marketingVideoUrl, type MarketingVideo } from "./marketing-videos";

export default function MarketingVideoGallery() {
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  const registerVideo = useCallback((index: number, el: HTMLVideoElement | null) => {
    videosRef.current[index] = el;
  }, []);

  /** Only one clip plays at a time. */
  const pauseOthers = useCallback((index: number) => {
    videosRef.current.forEach((el, i) => {
      if (i !== index && el && !el.paused) el.pause();
    });
  }, []);

  return (
    <div>
      <ul className="-mx-4 sm:-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:px-6 pb-4">
        {MARKETING_VIDEOS.map((video, i) => (
          <li
            key={video.slug}
            className="w-[72vw] max-w-[300px] shrink-0 snap-center sm:w-[280px] lg:w-[300px]"
          >
            <VideoCard video={video} index={i} registerVideo={registerVideo} onPlay={pauseOthers} />
          </li>
        ))}
      </ul>

      <p className="mt-1 text-center text-sm text-slate-400">
        {MARKETING_VIDEOS.length > 1 ? "Swipe for more — tap a clip to play with sound" : "Tap the clip to play with sound"}
      </p>
    </div>
  );
}

function VideoCard({
  video,
  index,
  registerVideo,
  onPlay,
}: {
  video: MarketingVideo;
  index: number;
  registerVideo: (index: number, el: HTMLVideoElement | null) => void;
  onPlay: (index: number) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  /** Src is only attached once the card is near the viewport; with preload="none" nothing downloads until play. */
  const [nearViewport, setNearViewport] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          return;
        }
        const player = videoRef.current;
        if (player && !player.paused) player.pause();
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const play = useCallback(async () => {
    const player = videoRef.current;
    if (!player) return;
    onPlay(index);
    player.muted = false;
    setMuted(false);
    setHasPlayed(true);
    try {
      await player.play();
    } catch {
      // Some browsers refuse unmuted playback — fall back to muted rather than doing nothing.
      player.muted = true;
      setMuted(true);
      try {
        await player.play();
      } catch {
        setHasPlayed(false);
      }
    }
  }, [index, onPlay]);

  return (
    <figure className="m-0">
      <div
        ref={cardRef}
        className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10"
      >
        <video
          ref={(el) => {
            videoRef.current = el;
            registerVideo(index, el);
          }}
          className="absolute inset-0 h-full w-full object-cover"
          src={nearViewport ? marketingVideoUrl(video) : undefined}
          poster={video.poster}
          preload="none"
          playsInline
          muted={muted}
          controls={hasPlayed}
          controlsList="nodownload"
          onPlay={() => {
            setPlaying(true);
            setHasPlayed(true);
            onPlay(index);
          }}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        />

        {/* Fallback backdrop while there is no poster and no frame decoded yet. */}
        {!video.poster && !hasPlayed && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-950">
            <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-slate-300">
              {video.title}
            </span>
          </div>
        )}

        {!playing && (
          <button
            type="button"
            onClick={play}
            className="absolute inset-0 flex items-center justify-center bg-slate-950/25 transition-colors hover:bg-slate-950/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-400"
            aria-label={`Play video: ${video.title}`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg ring-1 ring-slate-200">
              <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <figcaption className="mt-3 text-sm font-medium text-slate-200">{video.title}</figcaption>
    </figure>
  );
}
