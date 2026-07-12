import { motion } from "framer-motion";
import Flourish from "./Flourish";

const EASE = [0.43, 0.13, 0.23, 0.96];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18 },
  },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function InvitationArabic() {
  return (
    <section className="paper-grain bg-[#f6efe4] py-20 px-5">
      <motion.div
        className="max-w-[420px] mx-auto bg-[#faf3ec] paper-grain rounded-[50%_50%_8px_8px/90px_90px_8px_8px] pt-14 pb-12 px-8 text-center shadow-[0_18px_44px_rgba(90,60,40,0.16)] border border-gold/30"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={item} className="ar-title text-2xl sm:text-3xl text-gold-dark mb-2">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.div>
        <motion.div variants={item}>
          <svg viewBox="0 0 24 24" className="w-5 h-5 mx-auto my-2 text-gold" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="2.2" />
            <path d="M12 2c2 3-1 6-2 6s-4-3-2-6zM12 22c2-3-1-6-2-6s-4 3-2 6zM2 12c3-2 6 1 6 2s-3 4-6 2zM22 12c-3-2-6 1-6 2s3 4 6 2z" />
          </svg>
        </motion.div>
        <motion.p variants={item} className="ar text-lg leading-loose text-ink mb-6">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>
        <motion.p variants={item} className="italic text-ink-soft text-[0.98rem] mb-7">
          "And among His signs is that He created for you mates from among yourselves, that you
          may dwell in tranquility with them, and He has put love and mercy between you."
        </motion.p>
        <motion.p variants={item} className="ar text-[1.1rem] leading-loose text-ink mb-2">
          يسعدنا ويشرفنا دعوتكم لمشاركتنا أجمل لحظات حياتنا بحضوركم حفل زفافنا محمود ومرنا
        </motion.p>
        <motion.div variants={item}>
          <Flourish />
        </motion.div>
        <motion.p variants={item} className="text-ink-soft text-[1.02rem] leading-relaxed">
          With hearts full of joy, we invite you to celebrate our wedding as we begin our new
          life together.
        </motion.p>
      </motion.div>
    </section>
  );
}
