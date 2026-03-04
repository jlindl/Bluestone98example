"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const METRICS = [
    { label: "Years Experience", value: 27, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Global Brands", value: 150, suffix: "+" },
    { label: "Industry Awards", value: 45, suffix: "" }
];

export default function Metrics() {
    const container = useRef<HTMLDivElement>(null);
    const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!container.current) return;

        const ctx = gsap.context(() => {
            countersRef.current.forEach((counter, i) => {
                if (!counter) return;

                const targetValue = METRICS[i].value;

                gsap.to(counter, {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        once: true,
                    },
                    innerHTML: targetValue,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    onUpdate: function () {
                        counter.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)).toString();
                    }
                });
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="relative py-32 bg-black border-y border-white/5 overflow-hidden"
        >
            {/* Background slow gradient motion */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/40 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-indigo-900/30 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
                {METRICS.map((metric, i) => (
                    <div key={i} className="flex flex-col items-center md:items-start">
                        <div className="text-5xl md:text-7xl font-bold text-white mb-2 flex items-baseline">
                            <span
                                ref={(el) => {
                                    countersRef.current[i] = el;
                                }}
                            >
                                0
                            </span>
                            <span className="text-blue-500">{metric.suffix}</span>
                        </div>
                        <p className="text-zinc-400 font-medium tracking-wide uppercase text-sm md:text-base">
                            {metric.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
