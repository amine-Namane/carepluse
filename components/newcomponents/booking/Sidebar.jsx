'use client'
import React, {useState} from "react";
import {Calendar, ChevronRight, Filter, Moon, Star, Stethoscope, Sun} from "lucide-react";

export default function Sidebar({ selectedCategory, onCategoryChange, filters, onFilterChange ,mockDoctors, specializations }) {
    const [darkMode, setDarkMode] = useState(false);

    const insuranceOptions = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Delta Dental'];
    const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Arabic'];
    const experienceOptions = [
        { label: '5+ years', value: 5 },
        { label: '10+ years', value: 10 },
        { label: '15+ years', value: 15 },
    ];

    return (
        <aside className="w-80 bg-white shadow-xl border-r border-gray-100 h-screen sticky top-0 overflow-y-auto">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
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
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Search Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Active Filters</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {Object.values(filters).flat().length} active
                        </span>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {mockDoctors.length} doctors in your area
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Stethoscope className="w-5 h-5" />
                        Specializations
                    </h2>
                    <nav className="space-y-2">
                        {specializations.map((spec, index) => (
                            <button
                                key={index}
                                onClick={() => onCategoryChange(spec.slug)}
                                className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                    selectedCategory === spec.slug
                                        ? 'bg-gradient-to-r ' + spec.color + ' text-white shadow-lg'
                                        : 'hover:bg-gray-50 text-gray-700'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-lg ${
                                        selectedCategory === spec.slug
                                            ? 'bg-white/20'
                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                    }`}>
                                        {spec.icon}
                                    </div>
                                    <span className="font-medium">{spec.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        selectedCategory === spec.slug
                                            ? 'bg-white/30'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {spec.count}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 ${
                                        selectedCategory === spec.slug ? '' : 'text-gray-400 group-hover:translate-x-1'
                                    }`} />
                                </div>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Advanced Filters */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </h3>

                        {/* Experience */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                            <div className="space-y-2">
                                {experienceOptions.map(exp => (
                                    <label key={exp.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                        <input
                                            type="checkbox"
                                            checked={filters.experience.includes(exp.value)}
                                            onChange={(e) => onFilterChange('experience', exp.value, e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        {exp.label}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                            <div className="flex items-center gap-2">
                                {[4, 4.5, 5].map(rating => (
                                    <button
                                        key={rating}
                                        onClick={() => onFilterChange('rating', rating)}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                                            filters.rating === rating
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        <Star className="w-3 h-3" />
                                        {rating}+
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={filters.availableToday}
                                        onChange={(e) => onFilterChange('availableToday', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    Available Today
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={filters.videoAvailable}
                                        onChange={(e) => onFilterChange('videoAvailable', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    Video Consultation
                                </label>
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
                            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                                {insuranceOptions.map(insurance => (
                                    <label key={insurance} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                        <input
                                            type="checkbox"
                                            checked={filters.insurance.includes(insurance)}
                                            onChange={(e) => onFilterChange('insurance', insurance, e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        {insurance}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                            </label>
                            <div className="space-y-2">
                                <input
                                    type="range"
                                    min="50"
                                    max="300"
                                    step="10"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>$50</span>
                                    <span>$300</span>
                                </div>
                            </div>
                        </div>

                        {/* Clear Filters */}
                        {Object.values(filters).some(arr => Array.isArray(arr) ? arr.length > 0 : arr)} && (
                        <button
                            onClick={() => onFilterChange('clear')}
                            className="w-full mt-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Clear All Filters
                        </button>
                        )
                    </div>
                </div>
            </div>
        </aside>
    );
}
// 'use client'
// import React, { useState } from 'react';
// import {
//     Calendar,
//     Stethoscope,
//     Heart,
//     Bone,
//     Ear,
//     Eye,
//     UserRound,
//     TrendingUp,
//     Filter,
//     Moon,
//     Sun,
//     ChevronLeft,
//     ChevronRight,
//     Users,
//     Award,
//     Star,
//     Clock,
//     Activity
// } from 'lucide-react';
//
// const BookingSidebar = ({
//                             sidebarOpen,
//                             setSidebarOpen,
//                             selectedCategory,
//                             onCategoryChange,
//                             filters = {},
//                             onFilterChange = () => {}
//                         }) => {
//     const [darkMode, setDarkMode] = useState(false);
//
//     // Default filters if undefined
//     const safeFilters = {
//         experience: filters?.experience || [],
//         rating: filters?.rating || 0,
//         availableToday: filters?.availableToday || false,
//         videoAvailable: filters?.videoAvailable || false,
//         insurance: filters?.insurance || [],
//         priceRange: filters?.priceRange || [50, 300],
//         languages: filters?.languages || []
//     };
//
//     const specializations = [
//         { name: 'All Doctors', icon: <UserRound className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', slug: 'all', count: 6 },
//         { name: 'Dentist', icon: <Stethoscope className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500', slug: 'dentist', count: 2 },
//         { name: 'Cardiologist', icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500', slug: 'cardiologist', count: 2 },
//         { name: 'Orthopedic', icon: <Bone className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', slug: 'orthopedic', count: 1 },
//         { name: 'Otology', icon: <Ear className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500', slug: 'otology', count: 1 },
//         { name: 'Eye Doctor', icon: <Eye className="w-5 h-5" />, color: 'from-amber-500 to-orange-500', slug: 'eyedoctor', count: 0 },
//         { name: 'For You', icon: <TrendingUp className="w-5 h-5" />, color: 'from-pink-500 to-rose-500', slug: 'foryou', count: 3 },
//     ];
//
//     const experienceOptions = [
//         { label: '5+ years', value: 5 },
//         { label: '10+ years', value: 10 },
//         { label: '15+ years', value: 15 },
//     ];
//
//     // Calculate active filter count safely
//     const activeFilterCount = [
//         ...(safeFilters.experience || []),
//         safeFilters.rating > 0 ? 1 : 0,
//         safeFilters.availableToday ? 1 : 0,
//         safeFilters.videoAvailable ? 1 : 0,
//         ...(safeFilters.insurance || []),
//         ...(safeFilters.languages || [])
//     ].filter(Boolean).length;
//
//     if (!sidebarOpen) {
//         return (
//             <button
//                 onClick={() => setSidebarOpen(true)}
//                 className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
//             >
//                 <ChevronRight className="w-5 h-5" />
//             </button>
//         );
//     }
//
//     return (
//         <aside className="w-80 bg-white shadow-xl border-r border-gray-100 h-screen sticky top-0 overflow-y-auto">
//             <div className="p-6">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-8">
//                     <div className="flex items-center gap-3">
//                         <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
//                             <Calendar className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                             <h1 className="text-xl font-bold text-gray-800">Find Doctors</h1>
//                             <p className="text-sm text-gray-500">Book appointments easily</p>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                         <button
//                             onClick={() => setDarkMode(!darkMode)}
//                             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                         >
//                             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//                         </button>
//                         <button
//                             onClick={() => setSidebarOpen(false)}
//                             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                         >
//                             <ChevronLeft className="w-5 h-5" />
//                         </button>
//                     </div>
//                 </div>
//
//                 {/* Search Stats */}
//                 <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
//                     <div className="flex items-center justify-between mb-2">
//                         <span className="text-sm font-medium text-gray-700">Active Filters</span>
//                         <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
//               {activeFilterCount} active
//             </span>
//                     </div>
//                     <div className="text-sm text-gray-600">
//                         Showing 6 doctors in your area
//                     </div>
//                 </div>
//
//                 {/* Categories */}
//                 <div className="mb-8">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                         <Stethoscope className="w-5 h-5" />
//                         Specializations
//                     </h2>
//                     <nav className="space-y-2">
//                         {specializations.map((spec, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => onCategoryChange(spec.slug)}
//                                 className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
//                                     selectedCategory === spec.slug
//                                         ? 'bg-gradient-to-r ' + spec.color + ' text-white shadow-lg'
//                                         : 'hover:bg-gray-50 text-gray-700'
//                                 }`}
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <div className={`p-1.5 rounded-lg ${
//                                         selectedCategory === spec.slug
//                                             ? 'bg-white/20'
//                                             : 'bg-gray-100 group-hover:bg-gray-200'
//                                     }`}>
//                                         {spec.icon}
//                                     </div>
//                                     <span className="font-medium">{spec.name}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                   <span className={`text-xs px-2 py-1 rounded-full ${
//                       selectedCategory === spec.slug
//                           ? 'bg-white/30'
//                           : 'bg-gray-100 text-gray-600'
//                   }`}>
//                     {spec.count}
//                   </span>
//                                 </div>
//                             </button>
//                         ))}
//                     </nav>
//                 </div>
//
//                 {/* Advanced Filters */}
//                 <div className="space-y-6">
//                     <div>
//                         <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                             <Filter className="w-4 h-4" />
//                             Filters
//                         </h3>
//
//                         {/* Experience */}
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
//                             <div className="space-y-2">
//                                 {experienceOptions.map(exp => (
//                                     <label key={exp.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                         <input
//                                             type="checkbox"
//                                             checked={safeFilters.experience.includes(exp.value)}
//                                             onChange={(e) => onFilterChange('experience', exp.value, e.target.checked)}
//                                             className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                         />
//                                         {exp.label}
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Price Range */}
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Price Range: ${safeFilters.priceRange[0]} - ${safeFilters.priceRange[1]}
//                             </label>
//                             <div className="space-y-2">
//                                 <input
//                                     type="range"
//                                     min="50"
//                                     max="300"
//                                     step="10"
//                                     value={safeFilters.priceRange[1]}
//                                     onChange={(e) => onFilterChange('priceRange', [safeFilters.priceRange[0], parseInt(e.target.value)])}
//                                     className="w-full"
//                                 />
//                                 <div className="flex justify-between text-xs text-gray-500">
//                                     <span>$50</span>
//                                     <span>$300</span>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Availability */}
//                         <div className="mb-4">
//                             <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
//                             <div className="space-y-2">
//                                 <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                     <input
//                                         type="checkbox"
//                                         checked={safeFilters.availableToday}
//                                         onChange={(e) => onFilterChange('availableToday', e.target.checked)}
//                                         className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                     />
//                                     Available Today
//                                 </label>
//                                 <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                                     <input
//                                         type="checkbox"
//                                         checked={safeFilters.videoAvailable}
//                                         onChange={(e) => onFilterChange('videoAvailable', e.target.checked)}
//                                         className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                                     />
//                                     Video Consultation
//                                 </label>
//                             </div>
//                         </div>
//
//                         {/* Clear Filters Button */}
//                         {activeFilterCount > 0 && (
//                             <button
//                                 onClick={() => onFilterChange('clear')}
//                                 className="w-full mt-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
//                             >
//                                 Clear All Filters
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };
//
// export default BookingSidebar;