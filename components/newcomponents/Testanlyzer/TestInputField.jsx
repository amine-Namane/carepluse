import React from 'react';
import { getValueStatus } from '@/utils/analysisUtils';

const TestInputField = ({ testKey, test, value, handleChange }) => {
    const status = getValueStatus(value, test.min, test.max);

    return (
        <div className={`p-4 rounded-xl border transition-all duration-300 ${
            status ? status.border : 'border-gray-200'
        } ${status ? status.bg : 'bg-white'} hover:shadow-md`}>
            <div className="flex items-center justify-between mb-3">
                <label className="flex items-center gap-2 font-semibold text-gray-800">
                    <span className="text-lg">{test.icon}</span>
                    <span>{test.name}</span>
                    {test.importance === 'high' && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
              Critical
            </span>
                    )}
                </label>
                {status && (
                    <span className={`text-sm font-medium ${status.color}`}>
            {status.icon} {status.status.replace('-', ' ')}
          </span>
                )}
            </div>

            <div className="relative mb-2">
                <input
                    type="number"
                    step="0.1"
                    min="0"
                    name={testKey}
                    value={value || ''}
                    onChange={handleChange}
                    className={`w-full p-3 pr-16 border-2 rounded-lg focus:outline-none transition-all text-lg ${
                        status ? `${status.border}` : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder={`Enter value...`}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <span className="text-sm font-medium text-gray-600">{test.unit}</span>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm">
                <div className="text-gray-600">
                    Normal: {test.min} - {test.max} {test.unit}
                </div>
                {value !== '' && value !== undefined && (
                    <div className={`px-2 py-1 rounded ${
                        status?.severity === 'critical' ? 'bg-red-100 text-red-800' :
                            status?.severity === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                    }`}>
                        {status?.severity || 'Enter value'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestInputField;