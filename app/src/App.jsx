import { useState } from "react";
import SealReveal from "./components/SealReveal";
import Hero from "./components/Hero";
import InvitationArabic from "./components/InvitationArabic";
import CountdownVenue from "./components/CountdownVenue";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";

function App() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }, 700);
  }

  return (
    <>
      <SealReveal open={open} onOpen={handleOpen} />
      <MusicToggle shouldPlay={open} />
      <main>
        <Hero />
        <InvitationArabic />
        <CountdownVenue />
        <RSVP />
        <Footer />
      </main>
    </>
  );
}

export default App;
