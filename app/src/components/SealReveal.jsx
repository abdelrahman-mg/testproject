import { motion, AnimatePresence } from "framer-motion";
import envelopeImg from "../assets/envelope-seal.jpg";

const EASE = [0.43, 0.13, 0.23, 0.96];

export default function SealReveal({ open, onOpen }) {
  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-8 cursor-pointer bg-blush-dark"
          onClick={onOpen}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: EASE, delay: 0.5 } }}
        >
          <motion.div
            className="relative w-[min(72vw,300px)] aspect-[4/3] rounded-md overflow-hidden shadow-[0_26px_60px_rgba(60,40,55,0.35)]"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <img src={envelopeImg} alt="Sealed envelope" className="absolute inset-0 w-full h-full object-cover" />
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
              animate={
                open
                  ? {}
                  : {
                      boxShadow: [
                        "0 0 0 0 rgba(217,180,111,0.0)",
                        "0 0 22px 6px rgba(217,180,111,0.55)",
                        "0 0 0 0 rgba(217,180,111,0.0)",
                      ],
                    }
              }
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          >
            <div className="script text-4xl sm:text-5xl text-ink">Mahmoud &amp; Merna</div>
            <div className="font-display text-[0.65rem] tracking-[0.28em] uppercase text-olive-dark mt-2">
              Tap To Open
            </div>
            <div className="ar-title text-lg text-ink-soft mt-1">انقر للفتح</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
