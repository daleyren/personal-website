"use client";                           // ← we’ll read window.scrollY
import { useEffect, useRef, useState } from "react";
import MinecraftHead from "./components/minecraft-head";

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
  >      {/* Top Badge */}
      <div className="relative flex flex-col items-center justify-center min-h-screen snap-start flex-shrink-0">
        {/* Centered Badge */}
        <div className="flex flex-col items-center gap-2 bg-gray-900 p-12 rounded-4xl">
          <h1 className="text-4xl font-bold text-wrap">
            daleyren
          </h1>
          <MinecraftHead />
        </div>
        {/* Downward Indicator (scroll) */}
        <div
          className="absolute bottom-6 w-full flex justify-center transition-opacity"
          style={{ opacity }}
        >
          <h1 className="text-2xl animate-bounce">(scroll)</h1>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col w-screen h-screen items-center justify-center snap-start flex-shrink-0">
        <h1 className="text-m lg:text-3xl md:text-2xl text-wrap lg:w-1/3 w-3/4 text-left">
          Hi! I&apos;m 
          &nbsp;
          <a className="text-red-700">Dale Ren</a>
          &nbsp;
          - a student at UChicago studying CS + Statistics. I&apos;m interested in all things ML/AI, finance, and sports. You
          can find my past experience on
          &nbsp;
          <a
            href="https://www.linkedin.com/in/daleren/"
            className="text-blue-400 hover:font-bold"
            target="_blank"
          >
            linkedin
          </a>
          , my past projects on
          &nbsp;
          <a
            href="https://github.com/daleyren"
            className="text-gray-500 hover:font-bold"
            target="_blank"
          >
            github
          </a>
          , my shitposts on
          &nbsp;
          <a
            href="https://x.com/DaleRen2"
            className="text-neutral-950 hover:font-bold"
            target="_blank"
          >
            X
          </a>
          &nbsp;
          , and random books I&apos;ve read on
          &nbsp;
          <a
            href="https://www.goodreads.com/user/show/139093493-dale-ren"
            className="text-lime-500 hover:font-bold"
            target="_blank"
          >
            goodreads.
          </a>
        </h1>
        <div className="flex flex-col lg:w-1/3 w-3/4 ">
          <h1 className="text-s lg:text-xl text-wrap text-left mt-20">
            daleyren@uchicago.edu
          </h1>
        </div>
      </div>
    </div>
  );
}
