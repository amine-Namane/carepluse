import React from 'react';
import { Beaker, Brain, Shield, Sparkles, Clock, Star, Users } from 'lucide-react';

const Header = ({ user }) => {
    return (
        <div className="mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-6 lg:p-8">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                                <Beaker className="w-10 h-10 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                    Advanced Lab Analyzer Pro
                                </h1>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <Brain className="w-4 h-4 text-yellow-300" />
                                        <span className="text-sm text-blue-100">AI-Powered Analysis</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-300" />
                                        <span className="text-sm text-blue-100">HIPAA Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-pink-300" />
                                        <span className="text-sm text-blue-100">Real-time Insights</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {user && (
                            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                    {user.name?.[0] || 'U'}
                                </div>
                                <div className="text-white">
                                    <div className="font-medium">{user.name || 'User'}</div>
                                    <div className="text-xs text-blue-100">Patient ID: {user.id?.slice(-6)}</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
              <Clock className="w-3 h-3 inline mr-1" />
              Last updated: Today
            </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
              <Star className="w-3 h-3 inline mr-1" />
              4.9/5 Accuracy Rating
            </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
              <Users className="w-3 h-3 inline mr-1" />
              10K+ Analyses Completed
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;