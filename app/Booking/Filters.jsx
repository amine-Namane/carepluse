'use client'
import React from "react";
import { Filter, Star } from "lucide-react";

export default function Filters({ filters, onFilterChange }) {

    const insuranceOptions = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Delta Dental'];
    const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Arabic'];

    const experienceOptions = [
        { label: '5+ years', value: 5 },
        { label: '10+ years', value: 10 },
        { label: '15+ years', value: 15 },
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">

            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
            </h3>

            {/* Experience */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <div className="space-y-2">
                    {experienceOptions.map(exp => (
                        <label key={exp.value} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.experience.includes(exp.value)}
                                onChange={(e) => onFilterChange('experience', exp.value, e.target.checked)}
                                className="rounded border-gray-300 text-blue-600"
                            />
                            {exp.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <div className="flex items-center gap-2">
                    {[4, 4.5, 5].map(rating => (
                        <button
                            key={rating}
                            onClick={() => onFilterChange('rating', rating)}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                                filters.rating === rating
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-gray-100 text-gray-600'
                            }`}
                        >
                            <Star className="w-3 h-3" />
                            {rating}+
                        </button>
                    ))}
                </div>
            </div>

            {/* Availability */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.availableToday}
                            onChange={(e) => onFilterChange('availableToday', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600"
                        />
                        Available Today
                    </label>

                    <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={filters.videoAvailable}
                            onChange={(e) => onFilterChange('videoAvailable', e.target.checked)}
                            className="rounded border-gray-300 text-blue-600"
                        />
                        Video Consultation
                    </label>
                </div>
            </div>

            {/* Insurance */}
            <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
                <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                    {insuranceOptions.map(insurance => (
                        <label key={insurance} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={filters.insurance.includes(insurance)}
                                onChange={(e) => onFilterChange('insurance', insurance, e.target.checked)}
                                className="rounded border-gray-300 text-blue-600"
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

            {/* Clear Filters */}
            {Object.values(filters).some(arr => Array.isArray(arr) ? arr.length > 0 : arr) && (
                <button
                    onClick={() => onFilterChange('clear')}
                    className="w-full mt-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                >
                    Clear All Filters
                </button>
            )}
        </div>
    );
}
