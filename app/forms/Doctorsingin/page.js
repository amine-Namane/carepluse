'use client'
import { DoctorForm } from '@/components/Doctorform'
import React from 'react'
import {
  Stethoscope,
  Shield,
  Clock,
  Users,
  Sparkles,
  Zap,
  Bell,
  Activity,
  TrendingUp,
  Award,
  Brain,
  Microscope
} from "lucide-react";

export default function DoctorLogin() {
  const features = [
    { icon: <Stethoscope className="w-5 h-5" />, text: "Patient Management", color: "from-blue-500 to-cyan-500" },
    { icon: <Brain className="w-5 h-5" />, text: "AI Diagnostics", color: "from-green-500 to-emerald-500" },
    { icon: <Shield className="w-5 h-5" />, text: "HIPAA Compliant", color: "from-red-500 to-pink-500" },
    { icon: <Microscope className="w-5 h-5" />, text: "Lab Integration", color: "from-purple-500 to-indigo-500" },
  ];

  const stats = [
    { label: "Active Doctors", value: "500+", icon: <Users className="w-4 h-4" />, trend: "+8%" },
    { label: "Avg Consultation", value: "15 min", icon: <Clock className="w-4 h-4" />, trend: "Efficient" },
    { label: "Satisfaction", value: "96%", icon: <TrendingUp className="w-4 h-4" />, trend: "Excellent" },
  ];

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="px-4 sm:px-6 lg:px-8 pt-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="group flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Stethoscope className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">Doctor<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Portal</span></h1>
                    <p className="text-sm text-gray-500">Medical Professional Dashboard</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-all">
                    <Bell className="w-4 h-4" />
                    <span className="font-medium">Support Center</span>
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium rounded-xl hover:shadow-lg transition-all">
                    Emergency Protocol
                  </button>
                </div>
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
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-emerald-600 to-cyan-600 rounded-3xl shadow-2xl p-6 lg:p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            Medical Excellence Platform
                          </h2>
                          <p className="text-blue-100">
                            Advanced tools for healthcare professionals
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">AI-Powered</div>
                          <div className="text-sm text-blue-100">Diagnostics</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                          <div className="text-sm text-blue-100">Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-6 text-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Professional Tools</h3>
                        <p className="text-blue-100">Designed for medical experts</p>
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
                          <h4 className="font-bold text-gray-800">Quick Access</h4>
                          <p className="text-sm text-gray-500">Instant patient data</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Access patient records, test results, and medical history within seconds.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl text-white">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Live Monitoring</h4>
                          <p className="text-sm text-gray-500">Real-time updates</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Monitor patient vitals and receive instant notifications for critical changes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-100">
                    <DoctorForm />
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
                    <Stethoscope className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">© {new Date().getFullYear()} DoctorPortal. Medical professionals only.</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <a href="/medical-ethics" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Medical Ethics
                    </a>
                    <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </a>
                    <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Technical Support
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