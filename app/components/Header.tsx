"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <nav className="flex items-center justify-between gap-6 px-6 py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-3">
                <button
                className="text-rose-600 hover:bg-rose-50/50 active:bg-rose-200 active:scale-95 transition-all p-1 rounded-full flex items-center justify-center md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined" data-icon="menu">menu</span>
                </button>
            
                <h1 className="text-xl font-bold tracking-tight text-rose-600 font-headline">Candy &amp; <span className="text-secondary">Love</span></h1>
            </div>

            {/* Navigation links - hidden on mobile, visible on md+ */}
            <div className="flex justify-between align-items gap-6">
                <div className="hidden md:flex items-center gap-6">
                <Link href="/menu" className="text-rose-600 hover:text-rose-800 transition-colors font-medium" >Catálogo</Link>
                <Link href="/contacto" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">Contacto</Link>
                <Link href="/nosotros" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">Nosotros</Link>
                </div>

                <button className="text-rose-600 hover:bg-rose-50/50 active:bg-rose-200 active:scale-95 transition-all p-2 rounded-full relative flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
                <span className="absolute top-0 right-0 bg-primary text-on-primary text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
                </button>
            </div>
        </nav>
        <div className="display md:hidden">
                {isMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-white/30 p-4 flex flex-col gap-3">
                    <Link href="/menu" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">Catálogo</Link>
                    <Link href="/contacto" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">Contacto</Link>
                    <Link href="/nosotros" className="text-rose-600 hover:text-rose-800 transition-colors font-medium">Nosotros</Link>
                </div>
                )} 
            
            </div>
    </header>
    );
}