import React, { useEffect, useRef } from "react";
import Header from "./components/header";
import { Button } from "./components/tailgrids/core/button";
import gsap from "gsap";

export default function App() {
  const splitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!splitRef.current) return;

    const chars = splitRef.current.querySelectorAll(".split-char");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 80, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  function splitText(text: string) {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="split-char inline-block"
        style={{ perspective: "400px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }

  return (
    <>
      <Header />
      <section>
        <div className="relative">
          <div className="container grid grid-cols-3 z-20 relative">
            <div className="self-end space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, numquam sed eos quibusdam fugit nostrum cupiditate,
                voluptas nemo ratione necessitatibus dignissimos vitae earum
                atque rem quia iure placeat veritatis consectetur!
              </p>
              <Button>Look at</Button>
            </div>
            <div className="relative">
              <img src="/img/foto.png" className="w-full" alt="" />
              <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-linear-to-t from-dark from-15% to-dark/0" />
            </div>
            <div className="self-end space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, numquam sed eos quibusdam fugit nostrum cupiditate,
                voluptas nemo ratione necessitatibus dignissimos vitae earum
                atque rem quia iure placeat veritatis consectetur!
              </p>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
            <div ref={splitRef} className="space-y-2 w-full container">
              <h2>Since 2017</h2>
              <h1 className="text-8xl font-semibold text-start">
                {splitText("Software")}
              </h1>
              <h1 className="text-8xl font-semibold text-end">
                {splitText("Engineer")}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
