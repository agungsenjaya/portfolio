import React from "react";

export default function Header() {
  return (
    <header className="py-4">
      <div className="mx-auto max-w-4xl flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="animate-spin [animation-duration:3000ms]">
            <img src="/img/icon.png" className="w-[18px]" alt="" />
          </div>
          <h4 className="font-bold text-xl">Agung Senjaya</h4>
        </div>
        <ul className="flex gap-18">
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
            <a href="">Github</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
