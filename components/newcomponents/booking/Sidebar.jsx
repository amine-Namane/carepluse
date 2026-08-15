// 'use client'
// import React, {useState} from "react";
// import {Calendar, ChevronRight, Filter, Moon, Star, Stethoscope, Sun} from "lucide-react";
// import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet.jsx";
// import {Button} from "@/components/ui/button.jsx";
// import {Badge} from "@/components/ui/badge.jsx";
// import {MobileSidebarContent  } from "./mobilesidebar";
// import {cn} from "@/lib/utils.js";

// export default  function Sidebar({ selectedCategory, onCategoryChange, filters, onFilterChange, showFilters,mockDoctors,specializations }) {
//     const [darkMode, setDarkMode] = useState(false);

//     const insuranceOptions = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Delta Dental'];
//     const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Arabic'];
//     const experienceOptions = [
//         { label: '5+ years', value: 5 },
//         { label: '10+ years', value: 10 },
//         { label: '15+ years', value: 15 },
//     ];

//     const activeFilterCount = Object.values(filters).reduce((count, value) => {
//         if (Array.isArray(value)) {
//             return count + value.length;
//         } else if (typeof value === 'boolean' && value) {
//             return count + 1;
//         } else if (typeof value === 'number' && value > 0) {
//             return count + 1;
//         } else if (Array.isArray(value) && value[0] !== 50 && value[1] !== 300) {
//             return count + 1;
//         }
//         return count;
//     }, 0);

//     return (
//         <>
//             {/* Mobile Filter Button */}
//             <div className="lg:hidden fixed bottom-20 right-4 z-50">
//                 <Sheet>
//                     <SheetTrigger asChild>
//                         <Button className="rounded-full w-14 h-14 shadow-2xl" size="icon">
//                             <Filter className="h-6 w-6" />
//                             {activeFilterCount > 0 && (
//                                 <Badge className="absolute -top-1 -right-1 px-2 min-w-5 h-5 flex items-center justify-center">
//                                     {activeFilterCount}
//                                 </Badge>
//                             )}
//                         </Button>
//                     </SheetTrigger>
//                     <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
//                         <SheetHeader className="mb-6">
//                             <SheetTitle className="flex items-center gap-2">
//                                 <Filter className="h-5 w-5" />
//                                 Filters & Categories
//                             </SheetTitle>
//                         </SheetHeader>
//                         <div className="pb-6">
//                             <MobileSidebarContent
//                                 selectedCategory={selectedCategory}
//                                 onCategoryChange={onCategoryChange}
//                                 filters={filters}
//                                 onFilterChange={onFilterChange}
//                                 darkMode={darkMode}
//                                 setDarkMode={setDarkMode}
//                                 activeFilterCount={activeFilterCount}
//                                 insuranceOptions={insuranceOptions}
//                                 experienceOptions={experienceOptions}
//                             />
//                         </div>
//                     </SheetContent>
//                 </Sheet>
//             </div>

//             {/* Desktop Sidebar */}
//             <aside
//                 className={cn(
//                     "hidden lg:flex flex-col w-80 h-[calc(100vh-2rem)] bg-white shadow-xl rounded-2xl border border-gray-100 overflow-y-auto transition-transform duration-300",
//                     "sticky top-4"
//                 )}
//             >
//                 <div className="p-6">
//                     {/* Header */}
//                     <div className="mb-8">
//                         <div className="flex items-center justify-between mb-4">
//                             <div className="flex items-center gap-3">
//                                 <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
//                                     <Calendar className="w-5 h-5 text-white" />
//                                 </div>
//                                 <div>
//                                     <h1 className="text-xl font-bold text-gray-800">Find Doctors</h1>
//                                     <p className="text-sm text-gray-500">Book appointments easily</p>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => setDarkMode(!darkMode)}
//                                 className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                             >
//                                 {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Search Stats */}
//                     <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
//                         <div className="flex items-center justify-between mb-2">
//                             <span className="text-sm font-medium text-gray-700">Active Filters</span>
//                             <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
//                                 {activeFilterCount} active
//                             </span>
//                         </div>
//                         <div className="text-sm text-gray-600">
//                             Showing {mockDoctors.length} doctors in your area
//                         </div>
//                     </div>

//                     {/* Categories */}
//                     <div className="mb-8">
//                         <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                             <Stethoscope className="w-5 h-5" />
//                             Specializations
//                         </h2>
//                         <nav className="space-y-2">
//                             {specializations.map((spec, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => onCategoryChange(spec.slug)}
//                                     className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
//                                         selectedCategory === spec.slug
//                                             ? 'bg-gradient-to-r ' + spec.color + ' text-white shadow-lg'
//                                             : 'hover:bg-gray-50 text-gray-700'
//                                     }`}
//                                 >
//                                     <div className="flex items-center gap-3">
//                                         <div className={`p-1.5 rounded-lg ${
//                                             selectedCategory === spec.slug
//                                                 ? 'bg-white/20'
//                                                 : 'bg-gray-100 group-hover:bg-gray-200'
//                                         }`}>
//                                             {spec.icon}
//                                         </div>
//                                         <span className="font-medium">{spec.name}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <span className={`text-xs px-2 py-1 rounded-full ${
//                                             selectedCategory === spec.slug
//                                                 ? 'bg-white/30'
//                                                 : 'bg-gray-100 text-gray-600'
//                                         }`}>
//                                             {spec.count}
//                                         </span>
//                                         <ChevronRight className={`w-4 h-4 ${
//                                             selectedCategory === spec.slug ? '' : 'text-gray-400 group-hover:translate-x-1'
//                                         }`} />
//                                     </div>
//                                 </button>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* Advanced Filters */}
//                     <div className="space-y-6">
//                         <div>
//                             <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                                 <Filter className="w-4 h-4" />
//                                 Filters
//                             </h3>

//                             {/* Experience */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
//                                 <div className="space-y-2">
//                                     {experienceOptions.map(exp => (
//                                         <label key={exp.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={filters.experience.includes(exp.value)}
//                                                 onChange={(e) => onFilterChange('experience', exp.value, e.target.checked)}
//                                                 className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                             />
//                                             {exp.label}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Rating */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
//                                 <div className="flex items-center gap-2">
//                                     {[4, 4.5, 5].map(rating => (
//                                         <button
//                                             key={rating}
//                                             onClick={() => onFilterChange('rating', rating)}
//                                             className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
//                                                 filters.rating === rating
//                                                     ? 'bg-blue-100 text-blue-700'
//                                                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                                             }`}
//                                         >
//                                             <Star className="w-3 h-3" />
//                                             {rating}+
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Availability */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
//                                 <div className="space-y-2">
//                                     <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.availableToday}
//                                             onChange={(e) => onFilterChange('availableToday', e.target.checked)}
//                                             className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                         />
//                                         Available Today
//                                     </label>
//                                     <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                         <input
//                                             type="checkbox"
//                                             checked={filters.videoAvailable}
//                                             onChange={(e) => onFilterChange('videoAvailable', e.target.checked)}
//                                             className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                         />
//                                         Video Consultation
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Insurance */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
//                                 <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
//                                     {insuranceOptions.map(insurance => (
//                                         <label key={insurance} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                             <input
//                                                 type="checkbox"
//                                                 checked={filters.insurance.includes(insurance)}
//                                                 onChange={(e) => onFilterChange('insurance', insurance, e.target.checked)}
//                                                 className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                             />
//                                             {insurance}
//                                         </label>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Price Range */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
//                                 </label>
//                                 <div className="space-y-2">
//                                     <input
//                                         type="range"
//                                         min="50"
//                                         max="300"
//                                         step="10"
//                                         value={filters.priceRange[1]}
//                                         onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
//                                         className="w-full"
//                                     />
//                                     <div className="flex justify-between text-xs text-gray-500">
//                                         <span>$50</span>
//                                         <span>$300</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Clear Filters */}
//                             {activeFilterCount > 0 && (
//                                 <button
//                                     onClick={() => onFilterChange('clear')}
//                                     className="w-full mt-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
//                                 >
//                                     Clear All Filters
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </aside>
//         </>
//     );
// }
'use client';
// components/booking/Sidebar.jsx
// Desktop sticky sidebar + mobile bottom-FAB + Sheet drawer.
// Composes SpecializationNav + FilterPanel — does not hold any state itself.

import { useState } from 'react';
import { Filter, Calendar, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import SpecializationNav from './SpecializationNav';
import FilterPanel from './FilterPanel';
import { useBooking } from '@/utils/BookingContext';
import { DEFAULT_FILTERS } from '@/data/doctors';

function useActiveFilterCount(filters) {
    return Object.entries(filters).reduce((count, [key, value]) => {
        if (key === 'priceRange') return value[0] !== 50 || value[1] !== 300 ? count + 1 : count;
        if (Array.isArray(value)) return count + value.length;
        if (typeof value === 'boolean') return value ? count + 1 : count;
        if (typeof value === 'number') return value > 0 ? count + 1 : count;
        return count;
    }, 0);
}

function SidebarInner() {
    const [darkMode, setDarkMode] = useState(false);
    const { filters } = useBooking();
    const activeFilterCount = useActiveFilterCount(filters);

    return (
        <div className="p-6 flex flex-col gap-6 h-full">
            {/* ── Header ─────────────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                        <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Find Doctors</h1>
                        <p className="text-sm text-gray-500">Book appointments easily</p>
                    </div>
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>

            {/* ── Stats pill ─────────────────────────────────────────────── */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Active Filters</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {activeFilterCount} active
                    </span>
                </div>
                <p className="text-sm text-gray-500">Showing results in your area</p>
            </div>

            {/* ── Navigation ─────────────────────────────────────────────── */}
            <SpecializationNav />

            <Separator />

            {/* ── Filters ────────────────────────────────────────────────── */}
            <FilterPanel />
        </div>
    );
}

export default function Sidebar() {
    const { filters } = useBooking();
    const activeFilterCount = useActiveFilterCount(filters);

    return (
        <>
            {/* ── Mobile FAB + Sheet ─────────────────────────────────────── */}
            <div className="lg:hidden fixed bottom-20 right-4 z-50">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="rounded-full w-14 h-14 shadow-2xl relative" size="icon">
                            <Filter className="h-6 w-6" />
                            {activeFilterCount > 0 && (
                                <Badge className="absolute -top-1 -right-1 px-1.5 min-w-5 h-5 flex items-center justify-center text-xs">
                                    {activeFilterCount}
                                </Badge>
                            )}
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto p-0">
                        <SheetHeader className="p-6 pb-0">
                            <SheetTitle className="flex items-center gap-2">
                                <Filter className="h-5 w-5" />
                                Filters & Categories
                            </SheetTitle>
                        </SheetHeader>
                        <SidebarInner />
                    </SheetContent>
                </Sheet>
            </div>

            {/* ── Desktop sticky sidebar ─────────────────────────────────── */}
            <aside className="hidden lg:flex flex-col w-80 shrink-0 h-[calc(100vh-2rem)] bg-white shadow-xl rounded-2xl border border-gray-100 overflow-y-auto sticky top-4 self-start">
                <SidebarInner />
            </aside>
        </>
    );
}