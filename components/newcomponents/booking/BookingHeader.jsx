'use client'
import React from 'react';
import {
    Search,
    X,
    Sliders,
    Bell,
    Grid,
    List,
    TrendingUp,
    ChevronRight,
    Menu,
    User,
    Filter,
    Settings
} from 'lucide-react';

const BookingHeader = ({
                           sidebarOpen,
                           setSidebarOpen,
                           searchQuery,
                           setSearchQuery,
                           onSearch,
                           viewMode,
                           setViewMode,
                           filteredDoctors,
                           filters = {}, // Added filters prop with default
                           onOpenFilters
                       }) => {

    const quickStats = [
        { label: 'Total Doctors', value: filteredDoctors.length, icon: <User className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
        { label: 'Average Rating', value: '4.8/5', icon: <TrendingUp className="w-4 h-4" />, color: 'from-yellow-500 to-orange-500' },
        { label: 'Response Time', value: '< 20 min', icon: <ChevronRight className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
        { label: 'Satisfaction', value: '98%', icon: <Bell className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
    ];

    // Safe filters with defaults
    const safeFilters = {
        experience: filters?.experience || [],
        rating: filters?.rating || 0,
        availableToday: filters?.availableToday || false,
        videoAvailable: filters?.videoAvailable || false,
        insurance: filters?.insurance || [],
        priceRange: filters?.priceRange || [50, 300],
        languages: filters?.languages || []
    };

    // Active filter count
    const activeFilterCount = [
        ...(safeFilters.experience || []),
        safeFilters.rating > 0 ? 1 : 0,
        safeFilters.availableToday ? 1 : 0,
        safeFilters.videoAvailable ? 1 : 0,
        ...(safeFilters.insurance || []),
        ...(safeFilters.languages || [])
    ].filter(Boolean).length;

    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <div className="p-4 lg:p-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-4">
                    {/* Left: Menu Toggle */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Center: Title */}
                    <div className="flex-1 text-center lg:text-left px-2">
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doctor</span>
                        </h1>
                        <p className="text-sm text-gray-500 hidden lg:block">Browse through our qualified healthcare professionals</p>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto lg:mx-0 mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search doctors, specializations, or symptoms..."
                        value={searchQuery}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full pl-12 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none bg-white shadow-sm"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => onSearch('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-4 h-4 text-gray-400" />
                        </button>
                    )}
                </div>

                {/* Quick Stats & Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {quickStats.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                                        {stat.icon}
                                    </div>
                                    <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                                </div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* View & Filter Controls */}
                    <div className="flex items-center gap-3">
                        {/* View Toggle */}
                        <div className="flex bg-gray-100 rounded-xl p-1">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`px-3 py-2 rounded-lg transition-all ${
                                    viewMode === 'grid'
                                        ? 'bg-white shadow-sm'
                                        : 'hover:bg-gray-200'
                                }`}
                                title="Grid View"
                            >
                                <Grid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-2 rounded-lg transition-all ${
                                    viewMode === 'list'
                                        ? 'bg-white shadow-sm'
                                        : 'hover:bg-gray-200'
                                }`}
                                title="List View"
                            >
                                <List className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={onOpenFilters}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors relative group"
                        >
                            <Filter className="w-4 h-4" />
                            <span className="font-medium hidden lg:inline">Filters</span>
                            {activeFilterCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
                            )}
                        </button>

                        {/* Sort Button */}
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <Settings className="w-4 h-4" />
                            <span className="font-medium hidden lg:inline">Sort</span>
                        </button>
                    </div>
                </div>

                {/* Filter Chips (Mobile) */}
                {activeFilterCount > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 lg:hidden">
                        <span className="text-sm text-gray-600">Active filters:</span>
                        {safeFilters.experience.map(exp => (
                            <span key={exp} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {exp}+ years
              </span>
                        ))}
                        {safeFilters.rating > 0 && (
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                {safeFilters.rating}+ rating
              </span>
                        )}
                        {safeFilters.availableToday && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                Available Today
              </span>
                        )}
                        {safeFilters.videoAvailable && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                Video Available
              </span>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default BookingHeader;