import React, { useEffect, useRef } from "react";
import Header from "./components/header";
import { Button } from "./components/tailgrids/core/button";
import gsap from "gsap";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/tailgrids/core/card";
import { Badge } from "./components/tailgrids/core/badge";

const skills = [
  { title: "vue", img: null, link: null },
  { title: "nuxt", img: null, link: null },
  { title: "react", img: null, link: null },
  { title: "next js", img: null, link: null },
  { title: "react native", img: null, link: null },
  { title: "next js", img: null, link: null },
  { title: "vite", img: null, link: null },
  { title: "electron js", img: null, link: null },
  { title: "mysql", img: null, link: null },
  { title: "postgress", img: null, link: null },
  { title: "mongodb", img: null, link: null },
  { title: "hono js", img: null, link: null },
  { title: "node js", img: null, link: null },
  { title: "docker", img: null, link: null },
  { title: "git", img: null, link: null },
  { title: "ionic", img: null, link: null },
  { title: "golang", img: null, link: null },
  { title: "python", img: null, link: null },
  { title: "fluter", img: null, link: null },
  { title: "wagmi", img: null, link: null },
  { title: "web3", img: null, link: null },
  { title: "tailwind", img: null, link: null },
];

const type = ["website", "mobile"];

const category = ["web2", "web3"];

const portfolio = [
  {
    title: "san central indah",
    desc: null,
    type: [1, 2],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "adglow pictures",
    desc: null,
    type: [1],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "seven jaya sentosa",
    desc: null,
    type: [1, 2],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "jiwanta thermal springs",
    desc: null,
    type: [1],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "central bangun mandiri",
    desc: null,
    type: [1],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "kopi kamana",
    desc: null,
    type: [1, 2],
    category: [1],
    img: null,
    link: null,
  },
  {
    title: "zkforge",
    desc: null,
    type: [1],
    category: [2],
    img: null,
    link: null,
  },
  {
    title: "zenix launcher",
    desc: null,
    type: [1],
    category: [2],
    img: null,
    link: null,
  },
  {
    title: "entry point",
    desc: null,
    type: [1],
    category: [2],
    img: null,
    link: null,
  },
];

export default function App() {
  const splitRef = useRef<HTMLDivElement>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const xLeft = useTransform(smoothProgress, [1, 0.5], ["10%", "0%"]);
  const xRight = useTransform(smoothProgress, [1, 0.5], ["-10%", "0%"]);
  const opacity = useTransform(smoothProgress, [1, 0.5], [0, 1]);
  const blur = useTransform(
    smoothProgress,
    [1, 0.5],
    ["blur(10px)", "blur(0px)"],
  );

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
      <div className="bg-[url('https://etherscan.io/images/svg/waves-light.svg')] border-b border-dark-2">
        <Header />
        <section>
          <div className="relative overflow-hidden">
            <div className="container grid grid-cols-3 z-20 relative">
              <div className="self-end mb-10 space-y-4">
                <p>
                  Full-stack developer specializing in Web2 and Web3
                  applications, crafting modern, high-performance digital
                  experiences with clean architecture and seamless UX — bridging
                  the gap between traditional and decentralized web ecosystems.
                </p>
              </div>
              <div className="relative">
                <img src="/img/foto.png" className="w-full" alt="" />
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-linear-to-t from-dark from-45% to-dark/0" />
              </div>

              <div className="self-end mb-10 text-end">
                <h2 className="text-xl underline underline-offset-6">
                  Scroll Down
                </h2>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
              <div className="container space-y-2 px-40">
                <h2 className="text-xl font-super text-left">
                  Software Engineer
                </h2>
                <div ref={sectionRef} className="space-y-2">
                  <div>
                    <motion.h1
                      className="text-8xl font-semibold text-start"
                      style={{ x: xLeft, opacity, filter: blur }}
                    >
                      Agung
                    </motion.h1>
                  </div>
                  <motion.h1
                    className="text-8xl font-semibold text-right"
                    style={{ x: xRight, opacity, filter: blur }}
                  >
                    Senjaya
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-20">
        <div className="container space-y-4">
          {/* <h2 className="text-2xl">Information</h2> */}
          <div className="grid grid-cols-4 divide-x divide-dark-2">
            <div className="py-8">
              <p>Education</p>
              <h4>Vocational High School</h4>
            </div>
            <div className="pl-10 py-8">
              <p>Language</p>
              <h4>Indonesia, English</h4>
            </div>
            <div className="pl-10 py-8">
              <p>Born</p>
              <h4>Sukabumi, 30 July 1995</h4>
            </div>
            <div className="pl-10 py-8">
              <p>Living</p>
              <h4 className="capialize">Sukabumi, Jawa Barat indonesia</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[80vh]">
        <div className="container space-y-8">
          <div className="flex justify-between">
            <div className="max-w-md">
              <h1 className="text-5xl font-semibold capitalize">
                Latest project showcase
              </h1>
            </div>
            <div className="max-w-2xl">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                atque earum pariatur maiores error sapiente quaerat repudiandae
                at sed expedita doloribus necessitatibus quisquam fuga, neque
                odit nam numquam. Dolorem, aspernatur?
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Card className="bg-dark-2">
              <div>
                <div className="h-[300px] bg-dark m-2 rounded-xl" />
              </div>
              <CardContent className="pb-2">
                <h2 className="font-semibold text-xl">San Central Indah</h2>
                <ul className="flex gap-2">
                  <li>
                    <Badge>Vite</Badge>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem error mollitia laudantium incidunt sapiente doloribus
                  magni! Magni sed illum ipsa necessitatibus minus saepe ab
                  delectus qui? Enim eligendi quidem eaque!
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button size="sm" type="button">
                  Live Preview
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
