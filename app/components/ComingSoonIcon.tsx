type IconName =
  | "camera"
  | "map"
  | "bell"
  | "sports"
  | "barcode"
  | "analytics"
  | "payment"
  | "loyalty"
  | "sparkles"
  | "sportstack";

const base = "h-7 w-7 shrink-0 text-primary-600";

export default function ComingSoonIcon({ name }: { name: IconName }) {
  switch (name) {
    case "camera":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h3l1.5-2h7L17 7h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z"
          />
          <circle cx="12" cy="13" r="3.25" />
        </svg>
      );
    case "map":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-4-2V6l4 2 6-3 4 2v12l-4-2-6 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 10l6-3M9 14l6-3" />
        </svg>
      );
    case "bell":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 20a2 2 0 01-4 0M6 8a6 6 0 1112 0c0 5 2 5 2 7H4c0-2 2-2 2-7z"
          />
        </svg>
      );
    case "sports":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a15 15 0 000 18M12 3a15 15 0 010 18" />
        </svg>
      );
    case "barcode":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M5 7v10M8 7v10M10 7v10M14 7v10M17 7v10M19 7v10" />
        </svg>
      );
    case "analytics":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16M8 17V9m4 8V7m4 10v-6" />
        </svg>
      );
    case "payment":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path strokeLinecap="round" d="M2 10h20" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 15h4M14 15h2" />
        </svg>
      );
    case "loyalty":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.2 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z"
          />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.6l2.1-2.1" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "sportstack":
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7v3c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 13v3c0 1.7 3.1 3 7 3s7-1.3 7-3v-3" />
        </svg>
      );
    default:
      return null;
  }
}
