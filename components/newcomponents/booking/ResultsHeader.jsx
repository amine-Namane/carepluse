'use client';
// components/booking/ResultsHeader.jsx
// Shows result count, category title, view mode toggle, and sort button.

import { TrendingUp, LayoutGrid, List } from 'lucide-react';
import { useBooking } from '@/utils/BookingContext';

export default function ResultsHeader({ categoryName, totalCount }) {
    const { viewMode, setViewMode } = useBooking();

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800">{categoryName}</h2>
                <p className="text-gray-500 mt-1 text-sm lg:text-base">
                    {totalCount} {totalCount === 1 ? 'doctor' : 'doctors'} found ·
                    <span className="text-green-600 ml-1">Sort by: Recommended</span>
                </p>
            </div>

            <div className="flex items-center gap-3">
                {/* View mode toggle */}
                <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">
                    <button
                        onClick={() => setViewMode('grid')}
                        aria-label="Grid view"
                        className={`p-2 rounded-lg transition-colors ${
                            viewMode === 'grid'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        aria-label="List view"
                        className={`p-2 rounded-lg transition-colors ${
                            viewMode === 'list'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <List className="w-4 h-4" />
                    </button>
                </div>

                <div className="text-sm text-gray-600 hidden sm:flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Top picks for you
                </div>

                <button className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-colors text-sm">
                    Sort
                </button>
            </div>
        </div>
    );
}