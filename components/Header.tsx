"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-black text-white tracking-tight">
                        Bluestone<span className="text-blue-500">98</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link key={label} href={href} className="hover:text-white transition-colors duration-200">
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Toggle — only visible on mobile */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Full-screen Menu — rendered outside header so it doesn't affect desktop layout */}
            <div
                className={`fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 md:hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {NAV_LINKS.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="text-4xl font-bold text-white hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </>
    );
}
