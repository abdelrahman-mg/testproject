import { motion, AnimatePresence } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import Flourish from "./Flourish";
import venuePhoto from "../assets/venue-photo.jpg";

const EASE = [0.43, 0.13, 0.23, 0.96];
const pad = (n) => String(n).padStart(2, "0");

function Digit({ value, label }) {
  return (
    <div className="min-w-[64px]">
      <div className="relative h-[1.2em] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 14, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -14, opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="block font-serif font-semibold text-3xl sm:text-4xl text-ink"
          >
            {pad(value)}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="block mt-1 text-[0.64rem] tracking-[0.1em] uppercase text-ink-soft">
        {label}
      </span>
    </div>
  );
}

export default function CountdownVenue() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section className="paper-grain bg-blush py-20 px-5">
      {/* Countdown */}
      <motion.div
        className="max-w-[420px] mx-auto text-center mb-24"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="script text-3xl sm:text-4xl text-gold-dark">La Célébration Commence</h2>
        <Flourish />
        <div className="flex items-start justify-center gap-2 mt-4">
          <Digit value={days} label="Days" />
          <span className="text-3xl sm:text-4xl text-gold pt-1 font-serif font-semibold">:</span>
          <Digit value={hours} label="Hours" />
          <span className="text-3xl sm:text-4xl text-gold pt-1 font-serif font-semibold">:</span>
          <Digit value={minutes} label="Minutes" />
          <span className="text-3xl sm:text-4xl text-gold pt-1 font-serif font-semibold">:</span>
          <Digit value={seconds} label="Seconds" />
        </div>
      </motion.div>

      {/* Venue */}
      <motion.div
        className="max-w-[420px] mx-auto text-center"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="script text-3xl sm:text-4xl text-gold-dark">Lieu</h2>
        <Flourish />
        <motion.svg
          viewBox="0 0 24 28"
          className="w-7 h-8 mx-auto text-gold-dark mb-3"
          fill="currentColor"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M12 0C6 0 1.5 4.4 1.5 10c0 7.5 10.5 18 10.5 18s10.5-10.5 10.5-18C22.5 4.4 18 0 12 0zm0 14a4 4 0 110-8 4 4 0 010 8z" />
        </motion.svg>
        <div className="font-serif font-semibold text-xl text-ink">Police Officers Club</div>
        <div className="text-ink-soft mt-1">Zamalek, Cairo, Egypt</div>

        <motion.div
          className="mt-7 rounded-md overflow-hidden shadow-[0_16px_36px_rgba(90,60,40,0.2)]"
          whileHover="zoom"
          initial="rest"
          whileInView={{ opacity: 1 }}
        >
          <motion.img
            src={venuePhoto}
            alt="Venue exterior at dusk"
            className="w-full h-56 object-cover"
            variants={{ rest: { scale: 1 }, zoom: { scale: 1.08 } }}
            transition={{ duration: 6, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
