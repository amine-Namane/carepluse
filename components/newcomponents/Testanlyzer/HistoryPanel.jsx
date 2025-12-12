import React from 'react';
import { History, Beaker, Calculator, ChevronRight } from 'lucide-react';

const HistoryPanel = ({ history, setActiveTab }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                    <History className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Analysis History</h2>
                    <p className="text-sm text-gray-500">Track your past test analyses and results</p>
                </div>
            </div>

            {history.length === 0 ? (
                <div className="text-center py-12">
                    <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">No Analysis History</h3>
                    <p className="text-gray-500 mb-6">Your completed analyses will appear here</p>
                    <button
                        onClick={() => setActiveTab('input')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                    >
                        Start New Analysis
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <HistoryItem key={item.id} item={item} />
                    ))}
                </div>
            )}

            {history.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
                        Load More History
                    </button>
                </div>
            )}
        </div>
    );
};

const HistoryItem = ({ item }) => (
    <div className="group p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-md">
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                    <Beaker className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{item.category}</h4>
                    <p className="text-xs text-gray-500">
                        {new Date(item.timestamp).toLocaleDateString()} • {new Date(item.timestamp).toLocaleTimeString()}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
          Completed
        </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
            </div>
        </div>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.result}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
      <span className="flex items-center gap-1">
        <Calculator className="w-3 h-3" />
          {Object.keys(item.values).filter(k => item.values[k] !== '').length} parameters
      </span>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Full Report
            </button>
        </div>
    </div>
);

export default HistoryPanel;