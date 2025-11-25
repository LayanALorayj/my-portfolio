"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Vimeo: {
      Player: new (element: HTMLElement | string) => {
        setLoop: (loop: boolean) => Promise<void>;
        setMuted: (muted: boolean) => Promise<void>;
      };
    };
  }
}

export default function HomeSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function adjustVideoHeight() {
      if (sectionRef.current) {
        if (window.innerWidth < 768) {
          sectionRef.current.style.height = `${window.innerHeight * 0.85}px`;
        } else {
          sectionRef.current.style.height = "";
        }
      }
    }

    window.addEventListener("resize", adjustVideoHeight);
    adjustVideoHeight();

    return () => {
      window.removeEventListener("resize", adjustVideoHeight);
    };
  }, []);

  return (
    <>
      <Script
        src="https://player.vimeo.com/api/player.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (iframeRef.current && window.Vimeo) {
            const player = new window.Vimeo.Player(iframeRef.current);
            playerRef.current = player;
            player.setLoop(true);
            player.setMuted(true);
          }
        }}
      />
      <section
        ref={sectionRef}
        id="home"
        className="hero-video-section min-h-screen flex items-center justify-center relative overflow-hidden p-0 m-0 w-screen max-w-none"
      >
        {/* الفيديو */}
        <div className="absolute inset-0 z-0 w-screen h-full">
          <iframe
            ref={iframeRef}
            id="acpHeroVimeo"
            src="https://player.vimeo.com/video/1138426682?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="vimeo-video-iframe"
          />
        </div>

        {/* للموبايل: النص فوق وتحت الفيديو */}
        <div className="block md:hidden w-full h-full flex flex-col justify-between relative z-20">
          {/* النص فوق الفيديو - مع padding-top لتجنب النافبار */}
          <div className="w-full text-center pt-20 px-6"> {/* 🔥 غيرت pt-8 إلى pt-20 */}
            <h1 className="text-4xl font-bold text-white mb-3 leading-tight font-pixelify drop-shadow-lg">
              Hi, I'm Layan
            </h1>
            <p className="text-white text-lg leading-relaxed word-spacing-wide letter-spacing-wide font-Roboto Mono drop-shadow-lg">
              a <span className="text-[--color-primary] font-semibold">Frontend Developer</span>
            </p>
          </div>

          {/* النص تحت الفيديو */}
          <div className="w-full text-center pb-8 px-6">
            <div className="bg-blackdeep/70 backdrop-blur-sm rounded-2xl p-6 border border-graydeep/30 max-w-md mx-auto">
              <p className="text-white text-base leading-relaxed word-spacing-wide letter-spacing-wide font-Roboto Mono drop-shadow-lg">
                focused on building fast, modern web apps. Passionate about modern UI, clean code,
                and creating user-friendly experiences.
              </p>
            </div>
          </div>
        </div>

        {/* للديسكتوب: التصميم الأصلي */}
        <div className="hidden md:flex flex-row items-center w-full max-w-6xl gap-12 relative z-20 px-6 mx-auto">
          <div className="flex-1 text-left md:pl-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight font-pixelify drop-shadow-lg">
              Hi, I'm Layan
            </h1>

            <p className="text-white text-xl md:text-2xl leading-relaxed max-w-lg word-spacing-wide letter-spacing-wide font-Roboto Mono drop-shadow-lg">
              a <span className="text-[--color-primary] font-semibold">Frontend Developer</span>
              focused on building fast, modern web apps. Passionate about modern UI, clean code,
              and creating user-friendly experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}