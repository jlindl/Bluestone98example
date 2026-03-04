"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const headline = useRef<HTMLHeadingElement>(null);
    const subheadline = useRef<HTMLParagraphElement>(null);
    const ctaGroup = useRef<HTMLDivElement>(null);
    const backgroundElements = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        // Create a master timeline
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Background shapes gentle reveal
        tl.fromTo(
            backgroundElements.current?.children || [],
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 2, stagger: 0.2 },
            0
        );

        // Headline characters (simulated string split for now)
        const chars = headline.current?.querySelectorAll("span") || [];
        tl.fromTo(
            chars,
            { opacity: 0, y: 100, rotateX: -90 },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 1.2,
                stagger: 0.02,
                ease: "power3.out",
            },
            "-=1.5"
        );

        // Subheadline and CTA fade in
        tl.fromTo(
            [subheadline.current, ctaGroup.current],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
            "-=0.8"
        );

        // Setup parallax effect tied to scroll (basic setup, could be expanded with ScrollTrigger)
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (backgroundElements.current) {
                gsap.to(backgroundElements.current, {
                    y: scrollY * 0.3,
                    duration: 0.5,
                    ease: "none"
                });
            }
            if (headline.current) {
                gsap.to(headline.current, {
                    y: scrollY * -0.1,
                    duration: 0.5,
                    ease: "none"
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headlineText = "Designing Digital Experiences That Move Brands Forward";

    return (
        <section
            ref={container}
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6"
        >
            {/* Animated aurora background — no images */}
            <div
                ref={backgroundElements}
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black"
            >
                {/* Orb 1 — deep indigo, top-left drift */}
                <div
                    className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full bg-indigo-600/30 blur-[120px]"
                    style={{ animation: "auroraOrb1 14s ease-in-out infinite alternate" }}
                />
                {/* Orb 2 — blue, centre-right drift */}
                <div
                    className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[100px]"
                    style={{ animation: "auroraOrb2 18s ease-in-out infinite alternate" }}
                />
                {/* Orb 3 — violet, bottom-left drift */}
                <div
                    className="absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[100px]"
                    style={{ animation: "auroraOrb3 22s ease-in-out infinite alternate" }}
                />
                {/* Subtle noise vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

                <style>{`
                    @keyframes auroraOrb1 {
                        0%   { transform: translate(0, 0) scale(1); }
                        100% { transform: translate(120px, 80px) scale(1.15); }
                    }
                    @keyframes auroraOrb2 {
                        0%   { transform: translate(0, 0) scale(1); }
                        100% { transform: translate(-100px, 60px) scale(1.2); }
                    }
                    @keyframes auroraOrb3 {
                        0%   { transform: translate(0, 0) scale(1); }
                        100% { transform: translate(80px, -60px) scale(1.1); }
                    }
                `}</style>
            </div>

            <div className="relative z-10 flex max-w-5xl flex-col items-center text-center">
                {/* Kinetic Typography Headline */}
                <h1
                    ref={headline}
                    className="mb-8 font-sans text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
                    style={{ perspective: "1000px" }}
                >
                    {headlineText.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                            {word.split("").map((char, charIndex) => (
                                <span
                                    key={charIndex}
                                    className="inline-block"
                                    style={{ transformOrigin: "50% 100%" }}
                                >
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                <p
                    ref={subheadline}
                    className="mb-12 max-w-2xl text-lg font-light text-zinc-400 md:text-2xl"
                >
                    Strategic design, engineering and storytelling for ambitious organisations.
                </p>

                <div ref={ctaGroup} className="flex flex-col gap-4 sm:flex-row">
                    <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-black transition-transform hover:scale-105">
                        <span className="relative z-10">Contact Us</span>
                        <div className="absolute inset-0 z-0 bg-blue-100 transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                    </button>

                    <button className="glass-panel group relative overflow-hidden rounded-full px-8 py-4 font-medium text-white transition-all hover:bg-white/10 hover:border-white/20">
                        <span className="relative z-10 inline-flex items-center gap-2">
                            See Our Work
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
