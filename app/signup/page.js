'use client'
import { PatientSignup } from '@/components/ui/patientsingup'
import React from 'react'
import {
  HeartPulse,
  Shield,
  Users,
  Sparkles,
  Zap,
  Bell,
  Activity,
  TrendingUp,
  FileText,
  ClipboardCheck,
  Clock,
  Award
} from "lucide-react";

export default function Singup() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Secure Registration", color: "from-blue-500 to-cyan-500" },
    { icon: <FileText className="w-5 h-5" />, text: "Digital Health Records", color: "from-green-500 to-emerald-500" },
    { icon: <ClipboardCheck className="w-5 h-5" />, text: "Easy Appointments", color: "from-purple-500 to-indigo-500" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Access", color: "from-orange-500 to-red-500" },
  ];

  const stats = [
    { label: "Active Patients", value: "10K+", icon: <Users className="w-4 h-4" />, trend: "+15%" },
    { label: "Doctor Response", value: "< 2h", icon: <Activity className="w-4 h-4" />, trend: "Fast" },
    { label: "Satisfaction", value: "98%", icon: <TrendingUp className="w-4 h-4" />, trend: "Excellent" },
  ];

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="px-4 sm:px-6 lg:px-8 pt-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="group flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <HeartPulse className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">Health<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span></h1>
                    <p className="text-sm text-gray-500">Patient Registration Portal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-all">
                    <Bell className="w-4 h-4" />
                    <span className="font-medium">Help Center</span>
                  </button>
                  <a href="/Patient" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all">
                    Already Registered?
                  </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stat.color || 'from-gray-500 to-gray-600'} text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">{stat.label}</div>
                        <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      {stat.trend}
                    </span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Info */}
                <div className="space-y-8">
                  {/* Hero Section */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-6 lg:p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            Join Our Healthcare Community
                          </h2>
                          <p className="text-blue-100">
                            Register for seamless healthcare management
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">5 min</div>
                          <div className="text-sm text-blue-100">Quick Setup</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">Free</div>
                          <div className="text-sm text-blue-100">Registration</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Benefits of Registration</h3>
                        <p className="text-blue-100">Join thousands of satisfied patients</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                              {feature.icon}
                            </div>
                            <span className="text-sm font-medium">{feature.text}</span>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Instant Access</h4>
                          <p className="text-sm text-gray-500">Start immediately</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Get immediate access to your health dashboard upon registration completion.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Data Security</h4>
                          <p className="text-sm text-gray-500">HIPAA compliant</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Your medical information is protected with bank-level security and encryption.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-100">
                    <PatientSignup />
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">Already Registered?</h4>
                    <div className="space-y-3">
                      <a href="/Patient" className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">Patient Login</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a href="/Doctorsingin" className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-emerald-100 rounded-lg">
                            <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">Doctor Portal</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <a href="/Adminlogin" className="w-full flex items-center justify-between p-3 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gray-100 rounded-lg">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <span className="font-medium text-gray-700">Admin Portal</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-4 sm:px-6 lg:px-8 py-8 mt-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">© {new Date().getFullYear()} HealthConnect. Your health, our priority.</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </a>
                    <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </a>
                    <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Add CSS for animations */}
        <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      </main>
  )
}