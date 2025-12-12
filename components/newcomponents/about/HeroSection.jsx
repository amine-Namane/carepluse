
'use client'
import React, { useState } from 'react';
import {Calendar, ChevronRight, Clock, Pause, Play, Rocket, Star, Stethoscope, TrendingUp, Users} from "lucide-react";
export default function  Herosection(){
    const [activeTimeline, setActiveTimeline] = useState('all');
    const [videoPlaying, setVideoPlaying] = useState(false);
    const stats = [
        { number: '10K+', label: 'Active Patients', icon: <Users className="w-6 h-6" />, growth: '+45%' },
        { number: '500+', label: 'Healthcare Providers', icon: <Stethoscope className="w-6 h-6" />, growth: '+32%' },
        { number: '50K+', label: 'Appointments Booked', icon: <Calendar className="w-6 h-6" />, growth: '+67%' },
        { number: '99.9%', label: 'Uptime Guarantee', icon: <TrendingUp className="w-6 h-6" />, growth: 'Reliable' },
        { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" />, growth: 'Always On' },
        { number: '4.9/5', label: 'User Satisfaction', icon: <Star className="w-6 h-6" />, growth: 'Excellent' },
    ];
    return(
        <>
     <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-32">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl"></div>

         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <div className="inline-flex items-center gap-2 mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  About Us
                </span>
                         <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  <Rocket className="w-4 h-4 inline mr-1" />
                  Since 2018
                </span>
                     </div>
                     <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                         Transforming Healthcare
                         <br />
                         <span className="text-yellow-300">Through Innovation</span>
                     </h1>
                     <p className="text-xl text-blue-100 leading-relaxed mb-8">
                         Bridging the gap between patients and healthcare providers through cutting-edge technology,
                         compassionate care, and a commitment to excellence in every interaction.
                     </p>
                     <div className="flex flex-wrap gap-4">
                         <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                             Watch Story <Play className="w-5 h-5" />
                         </button>
                         <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                             Meet Our Team <ChevronRight className="w-5 h-5" />
                         </button>
                     </div>
                 </div>

                 {/* Hero Image/Video */}
                 <div className="relative">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                         <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative">
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <button
                                     onClick={() => setVideoPlaying(!videoPlaying)}
                                     className="p-6 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-110"
                                 >
                                     {videoPlaying ?
                                         <Pause className="w-8 h-8 text-white" /> :
                                         <Play className="w-8 h-8 text-white" />
                                     }
                                 </button>
                             </div>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                     </div>
                     <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                         <div className="flex items-center gap-3">
                             <div className="p-2 bg-blue-100 rounded-lg">
                                 <Star className="w-6 h-6 text-blue-600" />
                             </div>
                             <div>
                                 <div className="font-bold text-gray-800">4.9/5 Rating</div>
                                 <div className="text-sm text-gray-600">Trusted by thousands</div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </section>

     {/* Stats Section */}
     <section className="py-12 -mt-8 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                 {stats.map((stat, index) => (
                     <div key={index} className="bg-white rounded-2xl shadow-xl p-4 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                         <div className="flex items-center justify-between mb-3">
                             <div className={`p-2 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-100 to-cyan-100' : 'from-purple-100 to-pink-100'} rounded-lg group-hover:scale-110 transition-transform`}>
                                 <div className={`${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'}`}>
                                     {stat.icon}
                                 </div>
                             </div>
                             <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {stat.growth}
                  </span>
                         </div>
                         <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                         <div className="text-sm text-gray-600">{stat.label}</div>
                     </div>
                 ))}
             </div>
         </div>
     </section>
        </>
)
 }