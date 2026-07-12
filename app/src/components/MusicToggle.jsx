import { useEffect, useRef, useState } from "react";

export default function MusicToggle({ shouldPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("music.mp3");
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [shouldPlay]);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <button
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border font-display text-[0.62rem] tracking-[0.12em] uppercase backdrop-blur transition-colors ${
        playing
          ? "bg-olive text-white border-olive"
          : "bg-cream/90 text-olive-dark border-gold"
      }`}
    >
      <span>{playing ? "◼" : "♫"}</span>
      <span>{playing ? "Stop" : "Music"}</span>
    </button>
  );
}
