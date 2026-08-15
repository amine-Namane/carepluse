'use client';
// components/booking/Pagination.jsx
// Simple pagination bar. Can be wired up to real page state later.

export default function Pagination({ total, pageSize = 6, currentPage = 1, onPageChange }) {
    const showing = Math.min(total, pageSize * currentPage);

    return (
        <div className="mt-8 lg:mt-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                    Showing 1–{showing} of {total} doctors
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                    <button
                        disabled={currentPage === 1}
                        className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-600 text-white rounded-xl text-sm">
                        1
                    </button>
                    <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                        2
                    </button>
                    <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors text-sm">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}