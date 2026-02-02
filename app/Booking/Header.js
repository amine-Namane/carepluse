import {Bell, Search, Sliders, Star, ThumbsUp, TrendingUp, Users, X, Zap} from "lucide-react";
import DoctorCard from "@/components/newcomponents/booking/DoctorCard.jsx";
import React from "react";
import Filters from "@/app/Booking/Filters.jsx";

export default function Header({searchQuery,handleSearch,setViewMode,setShowFilters,showFilters,filteredDoctors,categoryName,mockDoctors,viewMode,filters,onFilterChange }){

    return(
        <>

            <div className="mb-6 lg:mb-8">
                {/* Search and Controls */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div className="relative flex-1 max-w-2xl">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search doctors, specializations, or symptoms..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-base lg:text-lg shadow-lg bg-white"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => handleSearch('')}
                                className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-4 h-4 text-gray-400" />
                            </button>
                        )}
                    </div>

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
                            >
                                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`rounded ${
                                            viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'
                                        }`}></div>
                                    ))}
                                </div>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`px-3 py-2 rounded-lg transition-all ${
                                    viewMode === 'list'
                                        ? 'bg-white shadow-sm'
                                        : 'hover:bg-gray-200'
                                }`}
                            >
                                <div className="space-y-1 w-5 h-5">
                                    <div className={`h-1 rounded-full ${
                                        viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'
                                    }`}></div>
                                    <div className={`h-1 rounded-full ${
                                        viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'
                                    }`}></div>
                                    <div className={`h-1 rounded-full ${
                                        viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'
                                    }`}></div>
                                </div>
                            </button>
                        </div>

                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                            <Sliders className="w-4 h-4" />
                            <span className="font-medium hidden lg:inline">Filters</span>
                        </button>

                        <button className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                        { label: 'Total Doctors', value: mockDoctors.length, icon: <Users className="w-4 h-4" />, color: 'from-blue-500 to-cyan-500' },
                        { label: 'Average Rating', value: '4.8/5', icon: <Star className="w-4 h-4" />, color: 'from-yellow-500 to-orange-500' },
                        { label: 'Response Time', value: '< 20 min', icon: <Zap className="w-4 h-4" />, color: 'from-green-500 to-emerald-500' },
                        { label: 'Satisfaction', value: '98%', icon: <ThumbsUp className="w-4 h-4" />, color: 'from-purple-500 to-pink-500' },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 mb-2">
                                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                                    {stat.icon}
                                </div>
                                <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                            </div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            {showFilters && (
                <Filters filters={filters} onFilterChange={onFilterChange} />
            )}

        </>
    )
}