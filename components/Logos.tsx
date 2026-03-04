"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LOGOS = [
    "Acme Corp", "GlobalNet", "Stark Industries", "Wayne Enterprises", "Cyberdyne",
    "Umbrella Corp", "Massive Dynamic", "Initech", "Soylent", "Dunder Mifflin"
];

export default function Logos() {
    const container = useRef<HTMLDivElement>(null);
    const track = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!container.current || !track.current) return;

        const ctx = gsap.context(() => {
            gsap.to(track.current, {
                xPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="py-24 bg-black overflow-hidden flex flex-col items-center justify-center"
        >
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-semibold mb-12 text-center">
                Trusted by ambitious brands worldwide
            </p>

            {/* Infinite scrolling track container */}
            <div className="relative w-full flex overflow-hidden mask-fade-edges">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div
                    ref={track}
                    className="flex whitespace-nowrap min-w-max gap-16 px-8 items-center"
                >
                    {/* Duplicate logos to create the illusion of infinite scroll */}
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                        <div
                            key={index}
                            className="text-2xl md:text-3xl font-black text-white/20 transition-colors duration-300 hover:text-white cursor-crosshair select-none"
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
