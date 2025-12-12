import React, { useState } from 'react';
import { BookOpen, Search, X } from 'lucide-react';
import { testCategories } from '@/utils/testCategories';

const TestCategorySelector = ({
                                  selectedTestCategory,
                                  setSelectedTestCategory,
                                  searchTerm,
                                  setSearchTerm,
                                  filteredCategories
                              }) => {
    const [showAdvanced, setShowAdvanced] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                    <BookOpen className="w-5 h-5" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800">Select Test Panel</h2>
                    <p className="text-sm text-gray-500">Choose from our comprehensive diagnostic panels</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowAdvanced(!showAdvanced)}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                        {showAdvanced ? 'Simple View' : 'Advanced View'}
                    </button>
                </div>
            </div>

            <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search test panels (e.g., CBC, Lipid, Thyroid)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                {filteredCategories.length === 0 ? (
                    <div className="col-span-2 text-center py-8">
                        <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500">No test panels found matching "{searchTerm}"</p>
                    </div>
                ) : (
                    filteredCategories.map((key) => {
                        const category = testCategories[key];
                        return (
                            <TestCategoryCard
                                key={key}
                                category={category}
                                categoryKey={key}
                                isSelected={selectedTestCategory === key}
                                onSelect={() => {
                                    setSelectedTestCategory(key);
                                }}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
};

const TestCategoryCard = ({ category, categoryKey, isSelected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
            isSelected
                ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-xl scale-105`
                : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
        }`}
    >
        <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-gray-100'}`}>
                {category.icon}
            </div>
            <div className="flex-1">
                <h3 className={`font-bold text-lg mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {category.name}
                </h3>
                <p className={`text-sm mb-2 ${isSelected ? 'text-white/90' : 'text-gray-500'}`}>
                    {category.description}
                </p>
                <div className="flex items-center gap-3">
          <span className={`text-xs px-2 py-1 rounded-full ${
              isSelected
                  ? 'bg-white/30 text-white'
                  : 'bg-gray-100 text-gray-600'
          }`}>
            {Object.keys(category.tests).length} parameters
          </span>
                    <span className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
            Time: 5-10 min
          </span>
                </div>
            </div>
        </div>
        {isSelected && (
            <div className="absolute top-3 right-3">
                <div className="w-5 h-5 text-white" />
            </div>
        )}
    </button>
);

export default TestCategorySelector;