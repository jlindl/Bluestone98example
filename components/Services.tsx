"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Monitor, PaintBucket, ShoppingCart, Smartphone, Lightbulb } from "lucide-react";

const SERVICES = [
    {
        title: "Web Design",
        desc: "Cinematic, high-performance websites built for ambitious brands.",
        icon: Monitor,
    },
    {
        title: "Branding",
        desc: "Strategic identity systems that command authority.",
        icon: PaintBucket,
    },
    {
        title: "Ecommerce",
        desc: "Immersive shopping experiences that drive premium conversions.",
        icon: ShoppingCart,
    },
    {
        title: "UX/UI",
        desc: "Intelligent interaction design rooted in human behavior.",
        icon: Smartphone,
    },
    {
        title: "Digital Strategy",
        desc: "Blueprint planning for long-term digital supremacy.",
        icon: Lightbulb,
    },
];

export default function Services() {
    const container = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cleanups: (() => void)[] = [];

        cardsRef.current.forEach((card) => {
            if (!card) return;

            const handleMouseMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(card, {
                    duration: 0.5,
                    rotateX,
                    rotateY,
                    ease: "power2.out",
                    transformPerspective: 1000,
                    transformOrigin: "center"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    duration: 0.5,
                    rotateX: 0,
                    rotateY: 0,
                    ease: "power2.out"
                });
            };

            card.addEventListener("mousemove", handleMouseMove);
            card.addEventListener("mouseleave", handleMouseLeave);

            cleanups.push(() => {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
            });
        });

        return () => cleanups.forEach(fn => fn());
    }, []);

    return (
        <section className="py-32 px-6 bg-black text-white relative flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-60 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-16 text-center">
                    <p className="text-blue-500 font-semibold tracking-widest uppercase mb-4 text-sm">Capabilities</p>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Service Expertise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {SERVICES.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={i}
                                ref={(el) => {
                                    cardsRef.current[i] = el;
                                }}
                                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-transparent overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                                <div className="relative h-full bg-zinc-950/80 backdrop-blur-xl rounded-3xl p-10 flex flex-col justify-start border border-white/5 transition-colors group-hover:border-white/10">
                                    <div className="mb-6 p-4 rounded-full bg-white/5 w-fit text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-500">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {service.desc}
                                    </p>

                                    {/* Expanding description panel hook */}
                                    <div className="mt-8 h-0 overflow-hidden transition-all duration-500 group-hover:h-12 flex items-center text-sm font-semibold text-blue-400">
                                        Explore Framework →
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
