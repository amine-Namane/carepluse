import React from 'react';
import { RotateCcw, X, Sparkles, ChevronRight, Eye } from 'lucide-react';
import TestInputField from './TestInputField';
import { testCategories } from '@/utils/testCategories';

const TestInputForm = ({
                           selectedTestCategory,
                           values,
                           handleChange,
                           analyze,
                           clearAll,
                           fillSampleData,
                           loading,
                           hasValidValues
                       }) => {
    const filledValuesCount = Object.keys(values).filter(k => values[k] !== '').length;
    const totalTestsCount = selectedTestCategory ? Object.keys(testCategories[selectedTestCategory].tests).length : 0;

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                    <div className={`p-2 bg-gradient-to-br ${testCategories[selectedTestCategory].color} rounded-xl text-white`}>
                        {testCategories[selectedTestCategory].icon}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">
                            {testCategories[selectedTestCategory].name}
                        </h2>
                        <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500">
                {filledValuesCount}/{totalTestsCount} values entered
              </span>
                            {filledValuesCount > 0 && (
                                <span className="text-sm font-medium text-green-600">
                  Ready to analyze
                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={fillSampleData}
                        className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Fill Sample
                    </button>
                    <button
                        onClick={clearAll}
                        className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                    >
                        <X className="w-4 h-4" />
                        Clear All
                    </button>
                </div>
            </div>

            {filledValuesCount > 0 && (
                <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Completion: {Math.round((filledValuesCount / totalTestsCount) * 100)}%</span>
                        <span>{filledValuesCount} of {totalTestsCount} values</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
                            style={{ width: `${(filledValuesCount / totalTestsCount) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className="grid gap-4 md:grid-cols-2">
                {Object.keys(testCategories[selectedTestCategory].tests).map((key) => {
                    const test = testCategories[selectedTestCategory].tests[key];
                    return (
                        <TestInputField
                            key={key}
                            testKey={key}
                            test={test}
                            value={values[key]}
                            handleChange={handleChange}
                        />
                    );
                })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                    onClick={analyze}
                    disabled={loading || !hasValidValues}
                    className={`flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                        loading || !hasValidValues
                            ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                    }`}
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Analyzing with AI...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5" />
                            Analyze Test Results
                            <ChevronRight className="w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default TestInputForm;