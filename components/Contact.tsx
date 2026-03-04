"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Slow gradient motion with light particles simulation
        if (!bgRef.current) return;

        gsap.to(bgRef.current, {
            backgroundPosition: "200% 50%",
            duration: 20,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center p-6 overflow-hidden">
            {/* Animated gradient background */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-[linear-gradient(45deg,#000000,#000000,#0a192f,#000000,#000000)] bg-[length:400%_400%]"
            />

            {/* Light particles placeholder via CSS overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen mix-blend-color-dodge animate-pulse" />

            <div className="relative z-10 w-full max-w-3xl glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-2xl bg-black/40">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
                    Let’s Build Something <span className="text-blue-500 italic">Exceptional</span>
                </h2>
                <p className="text-zinc-400 text-center mb-12 text-lg">
                    Partner with us to transform your digital landscape.
                </p>

                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-4 text-white placeholder-zinc-700 outline-none transition-colors"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@company.com"
                                className="bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-4 text-white placeholder-zinc-700 outline-none transition-colors"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="brief" className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Project Brief</label>
                        <textarea
                            id="brief"
                            placeholder="Tell us about your ambition..."
                            rows={4}
                            className="bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-4 text-white placeholder-zinc-700 outline-none transition-colors resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="group relative overflow-hidden rounded-xl bg-white px-8 py-5 font-bold text-black transition-transform hover:scale-[1.02] mt-4"
                    >
                        <span className="relative z-10">Initiate Contact</span>
                        <div className="absolute inset-0 z-0 bg-blue-500 transition-transform duration-300 translate-y-full group-hover:translate-y-0" />
                    </button>
                </form>
            </div>
        </section>
    );
}
