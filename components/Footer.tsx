"use client";

import { Twitter, Instagram, Linkedin, Dribbble } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-24 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-3xl font-black tracking-tight mb-4">Bluestone<span className="text-blue-500">98</span></h3>
                        <p className="text-zinc-500 font-medium">Elevating digital standards since 1998.</p>
                    </div>
                    <p className="text-zinc-700 text-sm mt-12 md:mt-0">
                        © {new Date().getFullYear()} Bluestone98. All rights reserved.
                    </p>
                </div>

                {/* Links Column */}
                <div className="col-span-1">
                    <h4 className="text-lg font-bold mb-6">Explore</h4>
                    <ul className="space-y-4 text-zinc-400 font-medium list-none p-0">
                        <li className="hover:text-blue-400 cursor-pointer transition-colors w-fit">Work</li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors w-fit">Agency</li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors w-fit">Capabilities</li>
                        <li className="hover:text-blue-400 cursor-pointer transition-colors w-fit">Insights</li>
                    </ul>
                </div>

                {/* Studios Column */}
                <div className="col-span-1">
                    <h4 className="text-lg font-bold mb-6">Studios</h4>
                    <ul className="space-y-4 text-zinc-400 font-medium list-none p-0">
                        <li className="w-fit">
                            <span className="block text-white mb-1">London</span>
                            123 Design Avenue, LDN 4XW
                        </li>
                        <li className="w-fit">
                            <span className="block text-white mb-1">New York</span>
                            456 Creative St, NY 10012
                        </li>
                    </ul>
                </div>

                {/* Socials Column */}
                <div className="col-span-1">
                    <h4 className="text-lg font-bold mb-6">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
                            <Dribbble className="w-5 h-5" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
