'use client'
import React, { useState } from 'react';
import {
    X,
    Filter,
    Star,
    Clock,
    Video,
    Home,
    DollarSign,
    Users,
    Award,
    Globe,
    Check,
    Sliders,
    ChevronDown,
    ChevronUp,
    Calendar,
    Zap,
    Shield,
    Sparkles
} from 'lucide-react';

const FilterModal = ({
                         isOpen,
                         onClose,
                         filters,
                         onFilterChange,
                         selectedCategory,
                         onCategoryChange
                     }) => {
    const [activeTab, setActiveTab] = useState('filters');
    const [expandedSections, setExpandedSections] = useState({
        experience: true,
        rating: true,
        availability: true,
        price: true,
        insurance: true,
        languages: false
    });

    const experienceOptions = [
        { label: '5+ years', value: 5 },
        { label: '10+ years', value: 10 },
        { label: '15+ years', value: 15 },
        { label: '20+ years', value: 20 },
    ];

    const ratingOptions = [
        { label: '4.0+', value: 4.0 },
        { label: '4.5+', value: 4.5 },
        { label: '5.0', value: 5.0 },
    ];

    const insuranceOptions = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Delta Dental', 'MetLife', 'Humana'];
    const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Arabic', 'Hindi', 'Russian', 'Portuguese'];

    const categoryOptions = [
        { name: 'All Doctors', icon: <Users className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', slug: 'all' },
        { name: 'Dentist', icon: <Shield className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500', slug: 'dentist' },
        { name: 'Cardiologist', icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500', slug: 'cardiologist' },
        { name: 'Orthopedic', icon: <Bone className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', slug: 'orthopedic' },
        { name: 'Otology', icon: <Ear className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500', slug: 'otology' },
        { name: 'Eye Doctor', icon: <Eye className="w-5 h-5" />, color: 'from-amber-500 to-orange-500', slug: 'eyedoctor' },
    ];

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const handleFilterChange = (type, value, checked) => {
        onFilterChange(type, value, checked);
    };

    const clearAllFilters = () => {
        onFilterChange('clear');
    };

    const activeFilterCount = Object.values({
        experience: filters.experience.length,
        rating: filters.rating > 0 ? 1 : 0,
        availableToday: filters.availableToday ? 1 : 0,
        videoAvailable: filters.videoAvailable ? 1 : 0,
        insurance: filters.insurance.length,
        languages: filters.languages.length
    }).reduce((a, b) => a + b, 0);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto lg:hidden">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                                <Filter className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Filters & Categories</h2>
                                <p className="text-sm text-gray-500">Refine your search results</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-200 px-6">
                        <button
                            onClick={() => setActiveTab('filters')}
                            className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                                activeTab === 'filters'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Sliders className="w-4 h-4" />
                                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('categories')}
                            className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${
                                activeTab === 'categories'
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Users className="w-4 h-4" />
                                Categories
                            </div>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    {activeTab === 'filters' ? (
                        <>
                            {/* Active Filters Summary */}
                            {activeFilterCount > 0 && (
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-800">Active Filters</span>
                                        <button
                                            onClick={clearAllFilters}
                                            className="text-sm text-red-600 hover:text-red-700"
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {filters.experience.map(exp => (
                                            <span key={exp} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {exp}+ years
                      </span>
                                        ))}
                                        {filters.rating > 0 && (
                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        {filters.rating}+ rating
                      </span>
                                        )}
                                        {filters.availableToday && (
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                        Today
                      </span>
                                        )}
                                        {filters.videoAvailable && (
                                            <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                        Video
                      </span>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Experience Section */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('experience')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-blue-500" />
                                        <span className="font-medium text-gray-800">Experience</span>
                                    </div>
                                    {expandedSections.experience ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {expandedSections.experience && (
                                    <div className="p-4 space-y-2">
                                        {experienceOptions.map(exp => (
                                            <label key={exp.value} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                                <span className="text-gray-700">{exp.label}</span>
                                                <input
                                                    type="checkbox"
                                                    checked={filters.experience.includes(exp.value)}
                                                    onChange={(e) => handleFilterChange('experience', exp.value, e.target.checked)}
                                                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                />
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Rating Section */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('rating')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                        <span className="font-medium text-gray-800">Rating</span>
                                    </div>
                                    {expandedSections.rating ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {expandedSections.rating && (
                                    <div className="p-4">
                                        <div className="flex flex-wrap gap-2">
                                            {ratingOptions.map(rating => (
                                                <button
                                                    key={rating.value}
                                                    onClick={() => handleFilterChange('rating', rating.value)}
                                                    className={`px-4 py-2 rounded-lg transition-all ${
                                                        filters.rating === rating.value
                                                            ? 'bg-yellow-100 text-yellow-800 border-2 border-yellow-300'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Star className="w-4 h-4" />
                                                        {rating.label}
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Availability Section */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('availability')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-800">Availability</span>
                                    </div>
                                    {expandedSections.availability ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {expandedSections.availability && (
                                    <div className="p-4 space-y-3">
                                        <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5 text-blue-500" />
                                                <div>
                                                    <div className="font-medium text-gray-800">Available Today</div>
                                                    <div className="text-sm text-gray-500">See doctors with same-day appointments</div>
                                                </div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={filters.availableToday}
                                                onChange={(e) => handleFilterChange('availableToday', e.target.checked)}
                                                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </label>
                                        <label className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <Video className="w-5 h-5 text-purple-500" />
                                                <div>
                                                    <div className="font-medium text-gray-800">Video Consultation</div>
                                                    <div className="text-sm text-gray-500">Doctors offering virtual visits</div>
                                                </div>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={filters.videoAvailable}
                                                onChange={(e) => handleFilterChange('videoAvailable', e.target.checked)}
                                                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>

                            {/* Price Section */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('price')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <DollarSign className="w-5 h-5 text-green-500" />
                                        <span className="font-medium text-gray-800">Price Range</span>
                                    </div>
                                    {expandedSections.price ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {expandedSections.price && (
                                    <div className="p-4">
                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                                <span>${filters.priceRange[0]}</span>
                                                <span>${filters.priceRange[1]}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="50"
                                                max="300"
                                                step="10"
                                                value={filters.priceRange[1]}
                                                onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[100, 150, 200].map(price => (
                                                <button
                                                    key={price}
                                                    onClick={() => handleFilterChange('priceRange', [50, price])}
                                                    className={`py-2 rounded-lg text-sm font-medium ${
                                                        filters.priceRange[1] === price
                                                            ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                                >
                                                    Under ${price}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Insurance Section */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleSection('insurance')}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-blue-500" />
                                        <span className="font-medium text-gray-800">Insurance</span>
                                    </div>
                                    {expandedSections.insurance ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                {expandedSections.insurance && (
                                    <div className="p-4 max-h-64 overflow-y-auto">
                                        <div className="space-y-2">
                                            {insuranceOptions.map(insurance => (
                                                <label key={insurance} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                                                    <span className="text-gray-700">{insurance}</span>
                                                    <input
                                                        type="checkbox"
                                                        checked={filters.insurance.includes(insurance)}
                                                        onChange={(e) => handleFilterChange('insurance', insurance, e.target.checked)}
                                                        className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                    />
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        /* Categories Tab */
                        <div className="space-y-4">
                            {categoryOptions.map((category) => (
                                <button
                                    key={category.slug}
                                    onClick={() => {
                                        onCategoryChange(category.slug);
                                        onClose(); // Close modal after selecting category
                                    }}
                                    className={`w-full group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                                        selectedCategory === category.slug
                                            ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                                            : 'hover:bg-gray-50 text-gray-700 border border-gray-200'
                                    }`}
                                >
                                    <div className={`p-2 rounded-lg ${
                                        selectedCategory === category.slug
                                            ? 'bg-white/20'
                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                    }`}>
                                        {category.icon}
                                    </div>
                                    <span className="font-semibold flex-1 text-left">{category.name}</span>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${
                                        selectedCategory === category.slug ? '' : 'text-gray-400 group-hover:translate-x-1'
                                    }`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                    <div className="flex gap-3">
                        <button
                            onClick={clearAllFilters}
                            className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Clear All
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Import missing icons
const Heart = ({ className }) => <div className={className}>❤️</div>;
const Bone = ({ className }) => <div className={className}>🦴</div>;
const Eye = ({ className }) => <div className={className}>👁️</div>;
const Ear = ({ className }) => <div className={className}>👂</div>;

export default FilterModal;