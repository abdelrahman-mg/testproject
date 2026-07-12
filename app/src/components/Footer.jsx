const VENUE_QUERY = "Police Officers Club, Zamalek, Cairo";

export default function Footer() {
  return (
    <footer className="bg-blush-dark text-center py-14 px-6">
      <div className="script text-4xl text-ink mb-2">Mahmoud &amp; Merna</div>
      <div className="text-ink-soft">
        11 · 08 · 2026 &nbsp;&middot;&nbsp; Police Officers Club, Zamalek, Cairo
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VENUE_QUERY)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 font-display text-xs tracking-[0.16em] uppercase text-gold-dark border-b border-gold-dark/50 pb-0.5 hover:text-olive-dark hover:border-olive-dark transition-colors"
      >
        Itinéraire Google Maps
      </a>
      <p className="text-ink-soft mt-8 text-sm">Made with 🤍 for our special day</p>
    </footer>
  );
}
