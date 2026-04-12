import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 py-4 ${scrolled ? "backdrop-blur-md" : ""}`}
      animate={{
        backgroundColor: scrolled ? "#111928" : "rgba(17, 25, 40, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="animate-spin [animation-duration:3000ms]">
            <img src="/img/icon.png" className="w-[18px]" alt="" />
          </div>
          <h4 className="text-xl font-semibold">Agung Senjaya</h4>
        </div>
        <ul className="flex gap-18 text-xl">
          <li className="underline underline-offset-8">
            <a href="#about">About</a>
          </li>
          <li className="underline underline-offset-8">
            <a href="#project">Portfolio</a>
          </li>
          <li className="underline underline-offset-8">
            <a href="">Contact Us</a>
          </li>
          <li className="underline underline-offset-8">
            <a href="https://github.com/agungsenjaya" target="_blank">Github</a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
