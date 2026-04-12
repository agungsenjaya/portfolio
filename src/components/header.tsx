import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, animate } from "motion/react";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";
import { Button } from "./tailgrids/core/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
  { label: "Github", href: "https://github.com/agungsenjaya" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        animate(window.scrollY, element.offsetTop, {
          onUpdate: (latest) => window.scrollTo(0, latest),
          duration: 0.8,
          ease: "easeInOut",
        });
      }
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 py-4 ${scrolled || menuOpen ? "backdrop-blur-md" : ""} ${menuOpen ? "h-full" : ""}`}
      animate={{
        backgroundColor: scrolled || menuOpen ? "#111928" : "rgba(17, 25, 40, 0)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <a href="/" className="flex gap-2 items-center">
          <div className="animate-spin [animation-duration:3000ms]">
            <img src="/img/icon.png" className="w-[18px]" alt="" />
          </div>
          <h4 className="text-xl font-semibold">Agung Senjaya</h4>
        </a>
        <ul className="hidden md:flex gap-18 text-xl">
          {navLinks.map((link) => (
            <li key={link.label} className="underline underline-offset-8">
              <a 
                href={link.href} 
                target={link.href.startsWith("http") ? "_blank" : undefined}
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          iconOnly
          size="xs"
        >
          {menuOpen ? <RiCloseLine /> : <RiMenu4Fill />}
        </Button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden container mx-auto flex flex-col gap-8 pt-8 pb-2 text-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <li key={link.label} className="underline underline-offset-8 px-8">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
