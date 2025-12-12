import React from 'react';
import { Copy, FileDown, Printer } from 'lucide-react';

const ExportOptions = ({ exportFormat, setExportFormat, copyResults, exportResults }) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl mb-6">
            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Export as:</span>
                <div className="flex gap-2">
                    {['pdf', 'doc', 'txt'].map(format => (
                        <button
                            key={format}
                            onClick={() => setExportFormat(format)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                exportFormat === format
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                            }`}
                        >
                            {format.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-2">
                <button
                    onClick={copyResults}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
                >
                    <Copy className="w-4 h-4" />
                    Copy
                </button>
                <button
                    onClick={exportResults}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
                >
                    <FileDown className="w-4 h-4" />
                    Export {exportFormat.toUpperCase()}
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm">
                    <Printer className="w-4 h-4" />
                    Print
                </button>
            </div>
        </div>
    );
};

export default ExportOptions;