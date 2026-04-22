type IconName = "camera" | "map" | "bell" | "sports" | "barcode" | "analytics";

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
    default:
      return null;
  }
}
