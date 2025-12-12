import React from 'react';
import { FileText, Calculator, Brain, Zap } from 'lucide-react';

const QuickStats = ({ aiConfidence }) => {
    const stats = [
        { label: 'Test Panels', value: '5', icon: <FileText className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', trend: '+2' },
        { label: 'Parameters', value: '50+', icon: <Calculator className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', trend: 'New' },
        { label: 'AI Confidence', value: `${aiConfidence}%`, icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500', trend: '↑ 2%' },
        { label: 'Response Time', value: '< 2s', icon: <Zap className="w-5 h-5" />, color: 'from-orange-500 to-red-500', trend: 'Fast' },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                            {stat.icon}
                        </div>
                        <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {stat.trend}
            </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default QuickStats;