"use client";

import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        title: "EcoVision",
        industry: "Sustainability",
        line: "A new era of digital footprints.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        featured: true,
    },
    {
        title: "Quantum UX",
        industry: "FinTech",
        line: "Banking redefined for tomorrow.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
        featured: false,
    },
    {
        title: "Aurora",
        industry: "E-Commerce",
        line: "Immersive shopping experiences.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
        featured: false,
    },
    {
        title: "Nexus",
        industry: "Logistics",
        line: "Global precision at scale.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        featured: false,
    },
];

function ProjectCard({ project, className = "" }: { project: typeof PROJECTS[0]; className?: string }) {
    return (
        <div className={`group relative overflow-hidden rounded-3xl cursor-pointer border border-white/10 ${className}`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {project.industry}
                </p>
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/60 text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                            {project.line}
                        </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 origin-center flex-shrink-0 ml-4">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [featured, ...rest] = PROJECTS;

    return (
        <section className="py-32 px-6 md:px-12 bg-black text-white w-full">
            <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Selected Works</h2>
                    <div className="w-20 h-[2px] bg-blue-600" />
                </div>
                <button className="hidden md:flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                    View All <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="max-w-7xl mx-auto space-y-6">
                {/* Row 1: Large featured card */}
                <ProjectCard project={featured} className="w-full h-[420px] md:h-[520px]" />

                {/* Row 2: Three equal cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rest.map((project, i) => (
                        <ProjectCard key={i} project={project} className="h-[280px] md:h-[320px]" />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 flex justify-center md:hidden">
                <button className="rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black">
                    View All Projects
                </button>
            </div>
        </section>
    );
}
