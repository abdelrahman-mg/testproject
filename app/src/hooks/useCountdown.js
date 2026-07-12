import { useEffect, useState } from "react";

// Wedding date/time — adjust the timezone offset for the venue's location if needed
const TARGET = new Date("2026-08-11T19:00:00+03:00");

function diffToParts(diff) {
  if (diff < 0) diff = 0;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default function useCountdown() {
  const [parts, setParts] = useState(() => diffToParts(TARGET - new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setParts(diffToParts(TARGET - new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return parts;
}
