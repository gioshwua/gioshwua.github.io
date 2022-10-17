import React, { useEffect } from "react";
import Typed from "react-typed";
import Aos from "aos";
import "aos/dist/aos.css";
export default function HomeContent() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="HomeContent">
      <p data-aos="fade-right">HOLA! I AM</p>
      <Typed
        className="type"
        strings={[
          "Kenneth Joshua O Reano",
          "Aspiring FrontEnd Developer",
          "Sir Required po Ba Talaga to?",
        ]}
        typeSpeed={100}
        backSpeed={50}
        loop
      />

      <p className="describe" data-aos="fade-left">
        I am a <span>frontend developer</span> with a particular interest in
        making things simple and automating daily tasks. I try to keep up with
        security and best practices, and am always looking for new things to
        learn.
      </p>
    </section>
  );
}