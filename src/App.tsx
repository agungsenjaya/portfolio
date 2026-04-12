import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import Header from "./components/header";
import { Button } from "./components/tailgrids/core/button";
import gsap from "gsap";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiFacebookFill,
  RiFilePdf2Line,
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
import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "./components/tailgrids/core/scroll-area";

const tech = [
  { title: "vue", img: "/img/tech_1.svg" },
  { title: "nuxt", img: "/img/tech_2.svg" },
  { title: "react", img: "/img/tech_3.svg" },
  { title: "redis", img: "/img/tech_4.svg" },
  { title: "react native", img: "/img/tech_5.svg" },
  { title: "next js", img: "/img/tech_6.svg" },
  { title: "vite", img: "/img/tech_7.svg" },
  { title: "electron js", img: "/img/tech_8.svg" },
  { title: "mysql", img: "/img/tech_9.svg" },
  { title: "postgress", img: "/img/tech_10.svg" },
  { title: "mongodb", img: "/img/tech_11.svg" },
  { title: "hono js", img: "/img/tech_12.svg" },
  { title: "node js", img: "/img/tech_13.svg" },
  { title: "docker", img: "/img/tech_14.svg" },
  { title: "git", img: "/img/tech_15.svg" },
  { title: "ionic", img: "/img/tech_16.svg" },
  { title: "golang", img: "/img/tech_17.svg" },
  { title: "python", img: "/img/tech_18.svg" },
  { title: "flutter", img: "/img/tech_19.svg" },
  { title: "wagmi", img: "/img/tech_20.svg" },
  { title: "zustand", img: "/img/tech_21.svg" },
  { title: "tailwind", img: "/img/tech_22.svg" },
  { title: "bootstrap", img: "/img/tech_23.svg" },
  { title: "jquery", img: "/img/tech_24.svg" },
  { title: "laravel", img: "/img/tech_25.svg" },
];

const type = ["website", "mobile"];

const category = ["web2", "web3"];

const portfolio = [
  {
    title: "san central indah",
    desc: "Designed and developed a product website complete with brand color guidelines, alongside a mobile app built to streamline and empower the sales team in their daily selling activities.",
    type: [1, 2],
    category: [1],
    tech: [25, 24, 23, 9, 16],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884085/portfolio/Screenshot_2026-04-11_at_12.07.42_vgppge.png",
    link: "https://sci-paint.com/",
  },
  {
    title: "adglow pictures",
    desc: "Built a cinematic portfolio website to highlight and archive film productions, featuring release histories, synopses, and behind-the-scenes content for movies that have premiered in theaters.",
    type: [1],
    category: [1],
    tech: [1, 2, 11, 22],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884087/portfolio/Screenshot_2026-04-11_at_12.07.33_ywbt86.png",
    link: "https://adglow.co.id/",
  },
  {
    title: "seven jaya sentosa",
    desc: "Built a digital plastic product catalog website, enabling broader product promotion with a clean, accessible display of product variants, specifications, and categories for potential customers and business partners.",
    type: [1, 2],
    category: [1],
    tech: [3, 7, 22],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884370/portfolio/Screenshot_2026-04-11_at_12.12.36_oyrbkw.png",
    link: "https://sevenjayasentosa.com/",
  },
  {
    title: "jiwanta thermal springs",
    desc: "Designed and developed a website for a hot spring resort and hotel, complete with an integrated hotel booking system that allows guests to check availability, select rooms, and make reservations online with ease.",
    type: [1],
    category: [1],
    tech: [3, 6, 10, 14],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775886214/portfolio/Screenshot_2026-04-11_at_12.42.51_y6fgka.png",
    link: "https://app.jiwantathermalsprings.com/",
  },
  {
    title: "central bangun mandiri",
    desc: "Designed and developed a marketing website for a professional painting contractor, showcasing services, past projects, and contact information to attract more clients and expand business reach.",
    type: [1],
    category: [1],
    tech: [25, 24, 23, 9],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884537/portfolio/Screenshot_2026-04-11_at_12.15.23_nllisj.png",
    link: "http://cbm.co.id/",
  },
  {
    title: "kopi kamana",
    desc: "Designed and developed a Point of Sale system across web and mobile platforms, featuring a cashier interface, sales transaction management, and financial reporting tools to support accounting needs.",
    type: [1, 2],
    category: [1],
    tech: [3, 4, 5, 6, 12, 14, 22, 10],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884682/portfolio/Screenshot_2026-04-11_at_12.17.46_q5pwux.png",
    link: null,
  },
  {
    title: "zkforge",
    desc: "Designed and developed a fundraising website on the Solana network, integrated with an autopilot token listing system on Pump.fun to streamline the token launch and fundraising process.",
    type: [1],
    category: [2],
    tech: [3, 6, 10, 14, 20],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884726/portfolio/Screenshot_2026-04-11_at_12.18.33_tv8jgx.png",
    link: "https://zkforge.io/",
  },
  {
    title: "zenix launcher",
    desc: "Designed and developed a fundraising website for an upcoming crypto token launch, providing project information, tokenomics, roadmap, and a contribution mechanism to attract early investors.",
    type: [1],
    category: [2],
    tech: [3, 6, 10, 14, 20],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884797/portfolio/Screenshot_2026-04-11_at_12.19.42_mz15ge.png",
    link: "https://zenixapp.pro/",
  },
  {
    title: "entry point",
    desc: "Designed and developed a crypto token fundraising website built for the Base network, featuring project details, tokenomics, roadmap, and a presale contribution system integrated with Base compatible wallets.",
    type: [1],
    category: [2],
    tech: [3, 6, 10, 14, 20],
    img: "https://res.cloudinary.com/dyylkbigz/image/upload/v1775884835/portfolio/Screenshot_2026-04-11_at_12.20.24_y0luyo.png",
    link: "https://entrypoint.fund/",
  },
];

export default function App() {
  const splitRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [showInitial, setShowInitial] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Trigger entrance animation on mount regardless of scroll position
  useEffect(() => {
    const timer = setTimeout(() => setShowInitial(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // progress 0 = hero at top of page (on load), progress 1 = fully scrolled out
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // progress 0 (page load, no scroll) → fully visible, no effects
  // progress 0→0.6 (scrolling hero out) → fades, blurs, slides away
  const xRight = useTransform(smoothProgress, [0, 0.6], ["0%", "-10%"]);
  const xLeft = useTransform(smoothProgress, [0, 0.6], ["0%", "10%"]);
  const scrollOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const scrollBlur = useTransform(
    smoothProgress,
    [0, 0.6],
    ["blur(0px)", "blur(10px)"],
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
      <Header />
      <div id="about" className="bg-[url('https://etherscan.io/images/svg/waves-light.svg')] border-b border-dark-2">
        <div className="h-[80px]" />
        <section>
          <div className="relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 z-10 md:z-20 relative px-4 lg:px-0">
              <div className="self-end mb-10 space-y-4 order-2 md:order-1 mt-10 md:mt-0 text-center md:text-left">
                <p>
                  Full-stack developer specializing in Web2 and Web3
                  applications, crafting modern, high-performance digital
                  experiences with clean architecture and seamless UX — bridging
                  the gap between traditional and decentralized web ecosystems.
                </p>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="flex justify-center">
                  <img
                    src="/img/foto.png"
                    className="w-[300px] md:w-full"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-linear-to-t from-dark from-45% to-dark/0" />
              </div>

              <div className="hidden md:block self-end mb-10 text-end order-3">
                <h2 className="text-xl underline underline-offset-6">
                  Scroll Down
                </h2>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-20 md:z-10 pointer-events-none">
              <div className="container mx-auto space-y-2 px-6 md:px-40">
                <h2 className="text-lg md:text-xl font-super text-center md:text-left">
                  Software Engineer
                </h2>
                {/* sectionRef here so scroll tracks the hero section from top */}
                <div ref={sectionRef} className="space-y-2">
                  {/* Scroll-out wrapper for "Agung" — separate from entrance animation */}
                  <motion.div
                    style={{
                      x: xLeft,
                      opacity: scrollOpacity,
                      filter: scrollBlur,
                    }}
                  >
                    <motion.h1
                      className="text-6xl md:text-8xl font-semibold text-start"
                      initial={{ opacity: 0, x: "10%", filter: "blur(10px)" }}
                      animate={
                        showInitial
                          ? { opacity: 1, x: "0%", filter: "blur(0px)" }
                          : { opacity: 0, x: "10%", filter: "blur(10px)" }
                      }
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      Agung
                    </motion.h1>
                  </motion.div>
                  {/* Scroll-out wrapper for "Senjaya" */}
                  <motion.div
                    style={{
                      x: xRight,
                      opacity: scrollOpacity,
                      filter: scrollBlur,
                    }}
                  >
                    <motion.h1
                      className="text-6xl md:text-8xl font-semibold text-right"
                      initial={{ opacity: 0, x: "-10%", filter: "blur(10px)" }}
                      animate={
                        showInitial
                          ? { opacity: 1, x: "0%", filter: "blur(0px)" }
                          : { opacity: 0, x: "-10%", filter: "blur(10px)" }
                      }
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      Senjaya
                    </motion.h1>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="py-10 md:py-20 px-4 lg:px-0">
        <div className="container mx-auto space-y-4">
          {/* <h2 className="text-2xl">Information</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-dark-2">
            <div className="pb-8 md:py-8">
              <p>Education</p>
              <h4>Vocational High School</h4>
            </div>
            <div className="md:pl-10 pt-8 py-8">
              <p>Language</p>
              <h4>Indonesia, English</h4>
            </div>
            <div className="md:pl-10 pt-8 py-8">
              <p>Born</p>
              <h4>Sukabumi, 30 July 1995</h4>
            </div>
            <div className="md:pl-10 pt-8 py-8">
              <p>Living</p>
              <h4 className="capitalize">Sukabumi, Jawa Barat indonesia</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="py-10 md:py-20 px-4 lg:px-0">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="max-w-md">
              <h1 className="text-4xl md:text-5xl font-semibold capitalize">
                Latest project showcase
              </h1>
            </div>
            <div className="max-w-2xl space-y-4 md:space-y-2">
              <p>
                Trusted by clients to bring their ideas to life — from concept
                to deployment, delivering products they're proud to call their
                own.
              </p>
              <div className="flex justify-start gap-4">
                <Button
                  type="button"
                  iconOnly
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <RiArrowLeftLine />
                </Button>
                <Button
                  type="button"
                  iconOnly
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <RiArrowRightLine />
                </Button>
              </div>
            </div>
          </div>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              768: { slidesPerView: 3 },
            }}
          >
            {portfolio.map((item, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-dark border border-dark-2 p-4">
                  {item.img && (
                    <div className="p-2 rounded-xl grayscale hover:grayscale-0 opacity-30 hover:opacity-100">
                      <div className="relative">
                        <img src={item.img} alt="" />
                        <div className="absolute top-0 bottom-0 left-0 right-0">
                          <div className="h-full flex justify-center">
                            <div className="h-full border-x border-dark-2 w-[100px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <CardContent className="pb-2 space-y-4">
                    <h2 className="font-semibold text-xl capitalize">
                      {item.title}
                    </h2>

                    <div className="flex justify-between">
                      <div>
                        <h4>Platform :</h4>
                        <ul className="p-2 flex gap-2">
                          {item.type.map((item, index) => (
                            <li key={index}>
                              <Badge className="badge">{type[item - 1]}</Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>Type :</h4>
                        <ul className="p-2 flex gap-2">
                          {item.category.map((item, index) => (
                            <li key={index}>
                              <Badge className="badge">
                                {category[item - 1]}
                              </Badge>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p>{item.desc.slice(0, 150) ?? "-"}..</p>
                    {item.tech && (
                      <>
                        <h4>Architect :</h4>
                        <ScrollArea className="w-full">
                          <ScrollAreaViewport>
                            <ul className="flex gap-2 pb-2">
                              {item.tech.map((item, index) => (
                                <li key={index} className="shrink-0">
                                  <Badge className="badge">
                                    {tech[item - 1].title}
                                  </Badge>
                                </li>
                              ))}
                            </ul>
                          </ScrollAreaViewport>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                      </>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <a
                      href={item.link ? item.link : "#"}
                      target={item.link ? "_blank" : "_parent"}
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        variant="primary"
                        type="button"
                        disabled={!item.link}
                        className={`w-full ${item.link ? "opacity-100" : "opacity-0"}`}
                      >
                        {item.link ? "Visit Site" : "Private"}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="py-10 md:py-20 px-4 lg:px-0">
        <div className="container mx-auto space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold capitalize">
              Architect skill
            </h1>
            <p className="max-w-3xl mt-4 md:mt-0">
              A curated collection of technologies and frameworks I work with
              across full-stack development from frontend and mobile to backend,
              database, devops, and blockchain.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5">
            {tech.map((item, index) => (
              <div
                key={index}
                className="border-b border-r border-white/20 p-4 max-md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(5n)]:border-r-0 max-md:[&:nth-child(n+25)]:border-b-0 md:[&:nth-child(n+21)]:border-b-0"
              >
                <div className="flex justify-center items-center text-center p-4">
                  <img src={item.img} className={`invert w-[150px]`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 md:py-20 bg-white light px-4 lg:px-0">
        <div className="mx-auto max-w-3xl flex flex-col md:flex-row justify-between items-center gap-8">
          <h4 className="text-3xl md:text-4xl font-super text-dark max-w-sm text-center md:text-left">
            Save my resume for call me in the future
          </h4>
          <div>
            <a href="/pdf/agung_senjaya.pdf" target="_blank" rel="noreferrer">
              <Button
                type="button"
                className="!bg-dark !text-white w-[300px] flex items-center"
              >
                <RiFilePdf2Line />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="py-10 md:py-20 bg-[url('https://etherscan.io/images/svg/waves-light.svg')] px-4 lg:px-0">
        <div className="container mx-auto space-y-8">
          <div>
            <h4 className="text-xl md:text-2xl max-w-lg">
              Contact me if you are interested for partners or build anything
              you want
            </h4>
          </div>
          <ul className="space-y-4 md:space-y-8 divide-y divide-dark-4">
            <li className="flex flex-col sm:flex-row sm:justify-between pb-4 sm:pb-8 pt-4 sm:pt-0 first:pt-0 gap-2">
              <p>Email address</p>
              <a className="underline" href="mailto:agungsenjaya813@gmail.com">
                <h4>agungsenjaya813@gmail.com</h4>
              </a>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between pb-4 sm:pb-8 pt-4 sm:pt-0 gap-2">
              <p>Whatsapp</p>
              <a
                className="underline"
                href="http://wa.me/6285759794605"
                target="_blank"
                rel="noreferrer"
              >
                <h4>+62 857 - 5979 - 4605</h4>
              </a>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between pb-4 sm:pb-8 pt-4 sm:pt-0 gap-2">
              <p>Telegram</p>
              <a
                className="underline"
                href="https://t.me/Agungsenja"
                target="_blank"
                rel="noreferrer"
              >
                <h4>@Agungsenja</h4>
              </a>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 sm:pt-0 text-center sm:text-left">
            <h4 className="text-sm md:text-base">
              © 2026 Agung Senjaya. All rights reserved
            </h4>
            <div className="animate-spin [animation-duration:3000ms]">
              <img src="/img/icon.png" className="w-[18px]" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
