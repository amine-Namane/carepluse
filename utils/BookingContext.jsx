'use client';
// context/BookingContext.jsx
// Holds filter state and search query.
// Lives in layout.jsx so it persists across route changes (Sidebar stays mounted).

import React, { createContext, useCallback, useContext, useState } from 'react';
import { DEFAULT_FILTERS } from '../data/doctors';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState(DEFAULT_FILTERS);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
    const [bookDoctor, setBookDoctor] = useState(null); // doctor to confirm booking

    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    const handleFilterChange = useCallback((type, value, checked) => {
        setFilters((prev) => {
            switch (type) {
                case 'experience':
                    return {
                        ...prev,
                        experience: checked
                            ? [...prev.experience, value]
                            : prev.experience.filter((v) => v !== value),
                    };
                case 'rating':
                    return { ...prev, rating: value };
                case 'availableToday':
                    return { ...prev, availableToday: value };
                case 'videoAvailable':
                    return { ...prev, videoAvailable: value };
                case 'insurance':
                    return {
                        ...prev,
                        insurance: checked
                            ? [...prev.insurance, value]
                            : prev.insurance.filter((v) => v !== value),
                    };
                case 'priceRange':
                    return { ...prev, priceRange: value };
                case 'clear':
                    return { ...DEFAULT_FILTERS };
                default:
                    return prev;
            }
        });
    }, []);

    const clearAll = useCallback(() => {
        setSearchQuery('');
        setFilters({ ...DEFAULT_FILTERS });
    }, []);

    return (
        <BookingContext.Provider
            value={{
                searchQuery,
                handleSearch,
                filters,
                handleFilterChange,
                clearAll,
                viewMode,
                setViewMode,
                bookDoctor,
                setBookDoctor,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
}

// Convenience hook — throws if used outside provider
export function useBooking() {
    const ctx = useContext(BookingContext);
    if (!ctx) throw new Error('useBooking must be used inside <BookingProvider>');
    return ctx;
}