import React from "react";

export default function Header() {
  return (
    <header className="py-4">
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
    </header>
  );
}
