// app/Booking/layout.jsx
// Next.js layout — stays mounted across all /Booking/* route changes.
// This is why Sidebar state (filters, dark mode) persists between pages.

import { BookingProvider } from '@/utils/BookingContext';
import Sidebar from '@/components/newcomponents/booking/Sidebar';
// import BookingModal from '@/components/newcomponents/booking/BookingModal';
import { Calendar } from 'lucide-react';

export const metadata = {
    title: 'Book a Doctor',
    description: 'Find and book appointments with top doctors near you.',
};

export default function BookingLayout({ children }) {
    return (
        <BookingProvider>
            <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
                {/* Sidebar — always visible, never remounts on navigation */}
                <Sidebar />

                {/* Page content — swaps per route */}
                <main className="flex-1 min-w-0 p-4 lg:p-8">
                    <div className="max-w-5xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            {/* Modal lives here so it works on every page */}
            {/* <BookingModal /> */}

            {/* Floating calendar FAB */}
            <button
                className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-40 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
                aria-label="Open calendar"
            >
                <Calendar className="w-6 h-6" />
            </button>
        </BookingProvider>
    );
}