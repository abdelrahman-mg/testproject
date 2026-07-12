import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flourish from "./Flourish";

const EASE = [0.43, 0.13, 0.23, 0.96];

// Paste your Google Apps Script Web App URL here to make RSVP submissions save to a Google Sheet
const RSVP_URL = "APPS_SCRIPT_URL_HERE";

export default function RSVP() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attend, setAttend] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please enter your name / الاسم");
    if (!attend) return setError("Please let us know if you will attend / هل ستحضر؟");

    setStatus("sending");
    if (RSVP_URL === "APPS_SCRIPT_URL_HERE") {
      setTimeout(() => setStatus("done"), 500);
      return;
    }
    try {
      await fetch(RSVP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          guests,
          attending: attend === "yes" ? "Yes" : "No",
          message,
        }),
        mode: "no-cors",
      });
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="paper-grain bg-[#f6efe4] py-20 px-5">
      <motion.div
        className="max-w-[420px] mx-auto text-center"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="script text-3xl sm:text-4xl text-gold-dark">Confirmez Votre Présence</h2>
        <Flourish />

        <AnimatePresence mode="wait">
          {status !== "done" ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-left mt-8 space-y-6"
            >
              <div>
                <label className="block text-[0.95rem] mb-1.5">Nom</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded border border-gold-dark/40 bg-white/70 outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(184,147,90,0.25)] focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-[0.95rem] mb-1.5">Nombre de personnes</label>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2.5 rounded border border-gold-dark/40 bg-white/70 outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(184,147,90,0.25)] focus:border-gold"
                />
              </div>
              <div>
                <div className="italic text-[0.98rem] mb-2">Serez-vous present?</div>
                <div className="space-y-2.5">
                  {[
                    { v: "yes", label: "Oui, je serai present(e)" },
                    { v: "no", label: "Desole(e), je ne pourrai pas etre present(e)" },
                  ].map((opt) => (
                    <label
                      key={opt.v}
                      className="flex items-center gap-2.5 cursor-pointer select-none"
                      onClick={() => setAttend(opt.v)}
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
                          attend === opt.v ? "border-olive" : "border-ink-soft"
                        }`}
                      >
                        {attend === opt.v && <span className="w-2 h-2 rounded-full bg-olive" />}
                      </span>
                      <span className={attend === opt.v ? "text-ink font-medium" : ""}>
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[0.95rem] mb-1.5">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded border border-gold-dark/40 bg-white/70 outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(184,147,90,0.25)] focus:border-gold resize-y"
                />
              </div>

              {error && <p className="text-red-700/80 text-sm text-center">{error}</p>}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.95 }}
                whileHover={{ boxShadow: "0 0 22px rgba(111,107,69,0.55)" }}
                transition={{ duration: 0.25 }}
                className="w-full py-3.5 rounded bg-olive text-white font-display text-xs tracking-[0.18em] uppercase disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Soumettre"}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-10"
            >
              <div className="text-4xl mb-3">{attend === "no" ? "💌" : "🎉"}</div>
              <h3 className="script text-3xl text-ink">
                {attend === "no" ? "We will miss you" : "Thank You"}
              </h3>
              <p className="text-ink-soft mt-2 leading-relaxed">
                {attend === "no"
                  ? "Thank you for letting us know. Your kind message means the world to us."
                  : "We have received your RSVP and we cannot wait to celebrate with you!"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
