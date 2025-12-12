'use client'
import React, {useEffect, useState} from "react";
import {ChevronRight, Phone} from "lucide-react";

export  default function FloatingActionButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    className={`p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center gap-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    onClick={() => window.location.href = 'tel:+231562645998'}
                >
                    <Phone className="w-6 h-6" />
                    <span className="font-semibold">Emergency</span>
                </button>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-24 right-8 z-50 p-3 bg-white text-gray-700 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-gray-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                aria-label="Scroll to top"
            >
                <ChevronRight className="w-6 h-6 -rotate-90" />
            </button>
        </>
    );
}