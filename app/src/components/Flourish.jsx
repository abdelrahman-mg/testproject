export default function Flourish() {
  return (
    <div className="flourish-line flex items-center justify-center gap-3 mx-auto my-3 max-w-[220px]">
      <svg viewBox="0 0 44 16" className="w-11 h-4 text-gold-dark flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="3" cy="8" r="1.6" fill="currentColor" stroke="none" />
        <path d="M22 1l4 7-4 7-4-7z" fill="currentColor" stroke="none" />
        <path d="M9 8c3-3 6-3 9 0M35 8c-3-3-6-3-9 0" strokeWidth="0.9" />
        <circle cx="41" cy="8" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
