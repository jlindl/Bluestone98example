"use client";

import { Layout, PenTool, Code2 } from "lucide-react";

const PANELS = [
    {
        num: "01",
        label: "Strategy",
        title: "Defining the Blueprint",
        body: "Brainstorming, brand workshops, and deep UX research pave the path to digital excellence. We don't just build — we architect solutions.",
        accentColor: "text-blue-400",
        bgImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
        Icon: Layout,
        align: "left",
    },
    {
        num: "02",
        label: "Design",
        title: "Visual Storytelling",
        body: "Crafting premium typography systems, large full-screen imagery, and a deep contrast aesthetic that commands authority and inspires.",
        accentColor: "text-indigo-400",
        bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        Icon: PenTool,
        align: "right",
    },
    {
        num: "03",
        label: "Engineering",
        title: "Performance Meets Motion",
        body: "UI components building themselves, seamless layered assembly, and meticulously crafted micro-interactions. Built for the modern web.",
        accentColor: "text-emerald-400",
        bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
        Icon: Code2,
        align: "left",
    },
];

export default function StoryScroll() {
    return (
        // The outer section must be exactly n * 100vh tall for n sticky panels.
        // Each panel is h-screen and sticky top-0, so they stack on scroll.
        <section
            className="relative bg-black"
            style={{ height: `${PANELS.length * 100}vh` }}
        >
            {PANELS.map(({ num, label, title, body, accentColor, bgImage, Icon, align }, i) => (
                <div
                    key={i}
                    className="sticky top-0 h-screen w-full overflow-hidden text-white"
                >
                    {/* Full-bleed background image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${bgImage}')` }}
                    />
                    {/* Dark overlay — progressively darker per panel */}
                    <div
                        className="absolute inset-0"
                        style={{ background: `rgba(0,0,0,${0.55 + i * 0.1})` }}
                    />

                    {/* Step indicator top-left */}
                    <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 flex items-center gap-2 opacity-50">
                        <span className="font-mono text-xs tracking-widest uppercase">{num} / 03</span>
                    </div>

                    {/* Centered content */}
                    <div
                        className={`absolute inset-0 z-20 flex items-center px-8 md:px-24 ${align === "right" ? "justify-end" : "justify-start"
                            }`}
                    >
                        <div className={`max-w-2xl space-y-6 ${align === "right" ? "text-right" : "text-left"}`}>
                            <div className={`flex items-center gap-3 ${accentColor} ${align === "right" ? "justify-end" : ""}`}>
                                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-semibold tracking-widest uppercase">{num} / {label}</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
                                {title}
                            </h2>
                            <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                                {body}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
