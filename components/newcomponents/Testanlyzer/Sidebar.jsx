import React from 'react';
import { Info, Award, Calendar, Download, AlertCircle, Save } from 'lucide-react';

const Sidebar = () => {
    const [autoSave, setAutoSave] = React.useState(true);

    return (
        <div className="space-y-6">
            <QuickInfo />
            <PremiumFeatures />
            <QuickActions />
            <AutoSaveToggle autoSave={autoSave} setAutoSave={setAutoSave} />
        </div>
    );
};

const QuickInfo = () => (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6" />
            <h3 className="text-lg font-bold">How It Works</h3>
        </div>
        <div className="space-y-4">
            {[
                { step: '1️⃣ Select Panel', desc: 'Choose from comprehensive test categories' },
                { step: '2️⃣ Enter Values', desc: 'Input your lab test results accurately' },
                { step: '3️⃣ AI Analysis', desc: 'Get instant AI-powered interpretation' },
                { step: '4️⃣ Get Insights', desc: 'Receive detailed recommendations and next steps' },
            ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.step}</span>
                    <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
);

const PremiumFeatures = () => (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-bold text-gray-800">Premium Features</h3>
        </div>
        <div className="space-y-3">
            {[
                { icon: '🤖', feature: 'AI-Powered Analysis', desc: 'GPT-4 medical interpretation' },
                { icon: '📊', feature: 'Trend Analysis', desc: 'Track changes over time' },
                { icon: '🛡️', feature: 'Data Security', desc: 'HIPAA compliant encryption' },
                { icon: '⏱️', feature: 'Fast Results', desc: 'Under 2 second response time' },
                { icon: '📱', feature: 'Mobile Friendly', desc: 'Access anywhere, anytime' },
            ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                        <div className="font-medium text-gray-800">{item.feature}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const QuickActions = () => (
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="space-y-3">
            <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                <span>Schedule Appointment</span>
                <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                <span>Download Health Report</span>
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                <span>Emergency Contact</span>
                <AlertCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
        </div>
    </div>
);

const AutoSaveToggle = ({ autoSave, setAutoSave }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Save className="w-5 h-5 text-blue-600" />
                <div>
                    <h4 className="font-medium text-gray-800">Auto-save Progress</h4>
                    <p className="text-xs text-gray-500">Automatically save your work</p>
                </div>
            </div>
            <button
                onClick={() => setAutoSave(!autoSave)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    autoSave ? 'bg-green-500' : 'bg-gray-300'
                }`}
            >
        <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoSave ? 'translate-x-6' : 'translate-x-1'
            }`}
        />
            </button>
        </div>
    </div>
);

export default Sidebar;