import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "../assets/hero-arch.jpg";

const EASE = [0.43, 0.13, 0.23, 0.96];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Grand palace archway with chandelier"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y: imgY, scale: imgScale }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-end pb-20 px-6 text-center"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
          className="script text-5xl sm:text-6xl text-[#4a2f16] drop-shadow-[0_2px_10px_rgba(255,245,220,0.5)]"
        >
          Mahmoud &amp; Merna
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="font-display tracking-[0.16em] text-xs sm:text-sm uppercase text-[#4a2f16] mt-3"
        >
          11 August 2026 &middot; 7:00 PM
        </motion.div>
      </motion.div>
    </section>
  );
}
