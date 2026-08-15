'use client';
// components/booking/SpecializationNav.jsx
// The list of specialization buttons in the sidebar.
// Uses Next.js router for navigation so the URL updates when category changes.

import { useRouter, usePathname } from 'next/navigation';
import { ChevronRight, Stethoscope } from 'lucide-react';
import { specializations } from '@/data/specializations';

export default function SpecializationNav() {
    const router = useRouter();
    const pathname = usePathname();

    // Derive active slug from the current URL
    // /Booking            → 'all'
    // /Booking/cardiologist → 'cardiologist'
    const segments = pathname.split('/').filter(Boolean);
    const activeSlug = segments.length >= 2 ? segments[segments.length - 1] : 'all';

    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                Specializations
            </h2>
            <nav className="space-y-2">
                {specializations.map((spec) => {
                    const isActive = activeSlug === spec.slug;
                    return (
                        <button
                            key={spec.slug}
                            onClick={() => router.push(spec.href)}
                            className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                isActive
                                    ? `bg-gradient-to-r ${spec.color} text-white shadow-lg`
                                    : 'hover:bg-gray-50 text-gray-700'
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`p-1.5 rounded-lg ${
                                        isActive
                                            ? 'bg-white/20'
                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                    }`}
                                >
                                    {spec.icon}
                                </div>
                                <span className="font-medium">{spec.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform ${
                                        isActive
                                            ? ''
                                            : 'text-gray-400 group-hover:translate-x-1'
                                    }`}
                                />
                            </div>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
}