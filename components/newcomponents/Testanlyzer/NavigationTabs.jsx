import React from 'react';
import { FileText, TrendingUp, History, ChartBar } from 'lucide-react';

const NavigationTabs = ({ activeTab, setActiveTab, result }) => {
    const tabs = [
        { id: 'input', label: 'Test Input', icon: <FileText className="w-4 h-4" /> },
        { id: 'results', label: 'Results', icon: <TrendingUp className="w-4 h-4" />, disabled: !result },
        { id: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
        { id: 'compare', label: 'Compare', icon: <ChartBar className="w-4 h-4" />, disabled: true },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
            <div className="flex space-x-1">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        disabled={tab.disabled}
                        className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                            activeTab === tab.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'text-gray-600 hover:bg-gray-50'
                        } ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NavigationTabs;