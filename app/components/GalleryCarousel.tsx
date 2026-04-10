"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY_IMAGE_PATHS } from "./gallery-images";

const n = GALLERY_IMAGE_PATHS.length;

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  return (
    <div>
      <div className="relative mx-auto max-w-[min(100%,320px)] sm:max-w-[360px]">
        <div
          className="relative aspect-[9/19] w-full rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/10 overflow-hidden"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current == null) return;
            const dx = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (dx > 48) goPrev();
            else if (dx < -48) goNext();
          }}
        >
          <Image
            src={GALLERY_IMAGE_PATHS[index]}
            alt={`LootScout app screenshot ${index + 1} of ${n}`}
            fill
            className="object-contain object-top"
            sizes="(max-width: 640px) 100vw, 360px"
            priority={index === 0}
          />
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 rounded-full bg-white/95 p-2.5 text-slate-800 shadow-lg ring-1 ring-slate-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Previous image"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-2 rounded-full bg-white/95 p-2.5 text-slate-800 shadow-lg ring-1 ring-slate-200 hover:bg-primary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="Next image"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-slate-400">
        {index + 1} / {n} — use arrows or swipe
      </p>

      <div className="mt-3 flex max-w-full justify-center gap-1.5 overflow-x-auto px-2 pb-1">
        {GALLERY_IMAGE_PATHS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
              i === index ? "bg-primary-500" : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
