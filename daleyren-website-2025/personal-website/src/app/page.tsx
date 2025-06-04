"use client";                           // ← we’ll read window.scrollY
import { useEffect, useRef, useState } from "react";
import MinecraftHead from "./components/minecraft-head";
import ZetamacGame from "./components/zetamac";

export default function Home() {
  const [opacity, setOpacity] = useState(1);
  const snapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = snapRef.current;
    if (!el) return;

    const handleScroll = () => {
      const max = window.innerHeight;
      const alpha = Math.max(0, 1 - (el.scrollTop * 1.7) / max);
      setOpacity(alpha);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={snapRef}
      className="h-screen overflow-y-scroll overflow-x-hidden overscroll-none scroll-smooth snap-y snap-mandatory minecraft-font scrollbar-hide"
    >  
      {/* top section */}
      <div className="relative flex flex-col items-center justify-center min-h-screen snap-start flex-shrink-0">

        {/* left grid */}
        <div className="absolute left-10 top-0 h-full w-1/4 hidden xl:block">
          <div className="relative w-full h-full">
            {/* Rock, Paper, Scissors */}
            <div className="absolute top-8 left-25 bg-yellow-100 text-black p-4 rounded-lg shadow-lg w-75 h-75 -rotate-[1deg] z-10 flex flex-col items-center justify-center border border-black/10 shadow-black/40">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-700 border border-black z-20" />
              <a
                className="text-center text-lg font-medium text-wrap leading-snug"
              >
                Unbeatable Rock, Paper, Scissors
              </a>
              <p className="text-xs mt-3">(upcoming)</p>
            </div>

            {/* Minesweeper Bot */}
            <div className="absolute top-120 left-45 bg-yellow-100 text-black p-4 rounded-lg shadow-lg w-75 h-75 rotate-[4deg] z-10 flex flex-col items-center justify-center border border-black/10 shadow-black/40">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-700 border border-black z-20" />
              <a
                className="text-center text-lg font-medium text-wrap leading-snug"
              >
                Minesweeper Bot via Reinforcement Learning
              </a>
              <p className="text-xs mt-3">(ongoing)</p>
            </div>

            {/* TTIC 31170 Final Paper */}
            <a
              href="TTIC_31170_Final_Paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-65 left-0 bg-yellow-100 text-black p-4 rounded-lg shadow-lg w-75 h-75 -rotate-[2deg] z-10 flex flex-col items-center justify-center border border-black/10 shadow-black/40 hover:font-bold"
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-700 border border-black z-20" />
              <p
                className="text-center text-lg text-wrap leading-snug hover:font-bold"
              >
                Trading with Noise and Doubt: DDQN and Noisy DQN in Financial Markets
              </p>
              <p className="text-xs mt-3">May 29, 2025</p>
              <p className="text-xs mt-3">Click To View Paper :P</p>
            </a>

          </div>
        </div>


        {/* right grid */}
        <div className="absolute right-20 top-0 h-full w-1/4 hidden xl:block">
          <div className="flex flex-col items-center justify-center h-full">
            <ZetamacGame />
          </div>
        </div>

        {/* centered badge */}
        <div className="flex flex-col items-center gap-2 bg-gray-900 p-12 rounded-4xl z-10">
          <h1 className="text-4xl font-bold text-wrap">daleyren</h1>
          <MinecraftHead />
        </div>

        {/* downward indicator */}
        <div
          className="absolute bottom-6 w-full flex justify-center transition-opacity"
          style={{ opacity }}
        >
          <h1 className="text-2xl animate-bounce">(scroll)</h1>
        </div>
      </div>

      {/* bottom section */}
      <div className="flex flex-col w-screen h-screen items-center justify-center snap-start flex-shrink-0">
        <h1 className="text-m lg:text-3xl md:text-2xl text-wrap lg:w-1/2 w-3/4 text-left">
          Hi! I&apos;m 
          &nbsp;
          <a className="text-red-700">Dale Ren</a>
          &nbsp;
          - a student at UChicago studying CS + Statistics. I&apos;m interested in all things ML/AI, finance, and sports. You
          can find my past experience on&nbsp;
          <a
            href="https://www.linkedin.com/in/daleren/"
            className="text-blue-400 hover:font-bold"
            target="_blank"
          >
            linkedin
          </a>
          , my past projects on&nbsp;
          <a
            href="https://github.com/daleyren"
            className="text-gray-500 hover:font-bold"
            target="_blank"
          >
            github
          </a>
          , my shitposts on&nbsp;
          <a
            href="https://x.com/DaleRen2"
            className="text-neutral-950 hover:font-bold"
            target="_blank"
          >
            X
          </a>
          , and random books I&apos;ve read on&nbsp;
          <a
            href="https://www.goodreads.com/user/show/139093493-dale-ren"
            className="text-lime-500 hover:font-bold"
            target="_blank"
          >
            goodreads.
          </a>
        </h1>
        <div className="flex flex-col lg:w-1/2 w-3/4 ">
          <h1 className="text-s lg:text-xl text-wrap text-left mt-20">
            <a
              href="mailto:daleyren@uchicago.edu"
              className="underline"
              target="_blank"
            >
              daleyren@uchicago.edu
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
