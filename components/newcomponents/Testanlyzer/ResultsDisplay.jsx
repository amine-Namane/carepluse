import React, { useState } from 'react';
import { TrendingUp, Copy, FileDown, Printer, AlertTriangle, ThumbsUp, Calendar } from 'lucide-react';
import ExportOptions from './ExportOptions';

const ResultsDisplay = ({ result, analysisDetails, aiConfidence, error, resultsRef }) => {
    const [exportFormat, setExportFormat] = useState('pdf');

    const copyResults = () => {
        if (result) {
            navigator.clipboard.writeText(result);
        }
    };

    const exportResults = () => {
        alert(`Exporting results as ${exportFormat.toUpperCase()}`);
    };

    return (
        <div ref={resultsRef} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Clinical Analysis Report</h2>
                            <p className="text-sm text-gray-500">Generated {new Date().toLocaleDateString()} • AI Confidence: {aiConfidence}%</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">Normal</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">Warning</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <span className="text-xs text-gray-600">Critical</span>
                        </div>
                    </div>
                </div>

                <ExportOptions
                    exportFormat={exportFormat}
                    setExportFormat={setExportFormat}
                    copyResults={copyResults}
                    exportResults={exportResults}
                />

                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">AI Confidence Level</span>
                        <span className="text-sm font-bold text-blue-600">{aiConfidence}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-1000"
                            style={{ width: `${aiConfidence}%` }}
                        ></div>
                    </div>
                </div>

                <div className="prose max-w-none">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 whitespace-pre-wrap text-gray-700 leading-relaxed border border-blue-100 shadow-inner">
                        {result}
                    </div>
                </div>

                {analysisDetails && (
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                <h4 className="font-semibold text-red-800">Risk Level</h4>
                            </div>
                            <div className="text-2xl font-bold text-red-600 mb-1">{analysisDetails.riskScore}/10</div>
                            <p className="text-sm text-red-700">Low Risk - Routine monitoring recommended</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <ThumbsUp className="w-5 h-5 text-green-600" />
                                <h4 className="font-semibold text-green-800">Next Steps</h4>
                            </div>
                            <div className="space-y-1">
                                {analysisDetails.nextSteps?.map((step, idx) => (
                                    <div key={idx} className="text-sm text-green-700">
                                        {step.step} - <span className="font-medium">{step.timeline}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <h4 className="font-semibold text-blue-800">Follow-up Timeline</h4>
                            </div>
                            <div className="text-lg font-bold text-blue-600 mb-1">2-4 Weeks</div>
                            <p className="text-sm text-blue-700">Recommended retest period</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResultsDisplay;