//
//
// import React from 'react';
// import MainHeader from '@/components/ui/MainHeader';
// import Doctorcard from '@/components/ui/Doctorcard';
// import Search from '@/components/ui/Search';
//
// export default function Home() {
//
// return (
//   <div className="min-h-screen bg-gray-50">
//     {/* Hero Section */}
//     <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-12 gap-16 max-w-7xl mx-auto">
//       <MainHeader
//         h1="We Care<br />about Your Health"
//         p="Good health is the state of mental, physical and social well-being and it does not just mean absence of diseases."
//         button="Book an Appointment →"
//         button2="Sign Up"
//       />
//       <Doctorcard />
//     </section>
//
//     {/* Services Section */}
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">
//           Our Medical <span className="text-[#0098ff]">Services</span>
//         </h1>
//         <p className="text-lg text-[#A7A7A7] mb-12">
//           We are dedicated to provide you the best medical services
//         </p>
//
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
//           {['Online appointment', 'Analyse tests', 'Smart health portal'].map((service, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
//               style={{
//                 backgroundColor: index === 1 ? '#0089ff' : 'white',
//                 border: '1px solid #e5e7eb'
//               }}
//             >
//               <h3
//                 className={`text-lg font-semibold ${
//                   index === 1 ? 'text-white' : 'text-[#0089ff]'
//                 }`}
//               >
//                 {service}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//
//     {/* Search Section */}
//     <section className="py-16 max-w-7xl mx-auto px-4">
//       <Search />
//     </section>
//   </div>
// )
// }





// 'use client'
// import React, { useState, useEffect } from 'react';
// import { Search, Calendar, Activity, Shield, Clock, Phone, Users, Heart, Stethoscope, Brain, Bone, Ear, UserRound, ChevronRight } from 'lucide-react';
// import DoctorCard  from '@/components/newcomponents/DoctorCard.jsx'
// import CategoryCard  from '@/components/newcomponents/CategoryCard.jsx'
// // Mock data for doctors
// const mockDoctors = [
//     { id: 1, name: 'Dr. Sarah Johnson', specialization: 'Cardiologist', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400', rating: 4.9, patients: 1200 },
//     { id: 2, name: 'Dr. Michael Chen', specialization: 'Dentist', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400', rating: 4.8, patients: 980 },
//     { id: 3, name: 'Dr. Emily Rodriguez', specialization: 'Orthopedic', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400', rating: 4.9, patients: 1100 },
//     { id: 4, name: 'Dr. James Wilson', specialization: 'Otology', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400', rating: 4.7, patients: 850 },
// ];
//
// const categories = [
//     { name: 'Dentist', icon: <Stethoscope className="w-8 h-8" />, color: 'from-blue-400 to-blue-600' },
//     { name: 'Cardiologist', icon: <Heart className="w-8 h-8" />, color: 'from-red-400 to-pink-600' },
//     { name: 'Orthopedic', icon: <Bone className="w-8 h-8" />, color: 'from-green-400 to-emerald-600' },
//     { name: 'Otology', icon: <Ear className="w-8 h-8" />, color: 'from-purple-400 to-indigo-600' },
//     { name: 'Doctor', icon: <UserRound className="w-8 h-8" />, color: 'from-orange-400 to-amber-600' },
// ];
//
//
//
//
// export default function ModernMedicalHomePage() {
//     const [searchQuery, setSearchQuery] = useState('');
//
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//             {/* Hero Section */}
//             <section className="relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
//                 <div className="max-w-7xl mx-auto px-4 py-20 relative">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         {/* Left Content */}
//                         <div className="space-y-8 animate-fade-in">
//                             <div className="inline-block">
//                             </div>
//                             <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                                 We Care<br />
//                                 about Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Health</span>
//                             </h1>
//                             <p className="text-xl text-gray-600 leading-relaxed">
//                                 Good health is the state of mental, physical and social well-being and it does not just mean absence of diseases.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
//                                     Book an Appointment
//                                     <ChevronRight className="w-5 h-5" />
//                                 </button>
//                                 <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
//                                     Learn More
//                                 </button>
//                             </div>
//
//                             {/* Stats */}
//                             <div className="grid grid-cols-3 gap-8 pt-8">
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-blue-600">5000+</div>
//                                     <div className="text-sm text-gray-600">Patients</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-blue-600">150+</div>
//                                     <div className="text-sm text-gray-600">Doctors</div>
//                                 </div>
//                                 <div className="text-center">
//                                     <div className="text-3xl font-bold text-blue-600">24/7</div>
//                                     <div className="text-sm text-gray-600">Support</div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Right Content - Doctor Image */}
//                         <div className="relative lg:h-[600px] flex items-center justify-center">
//                             <div className="relative w-96 h-96">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
//                                 <img
//                                     src="https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                     alt="Doctors"
//                                     className="relative w-full h-full object-cover rounded-full shadow-2xl ring-8 ring-white"
//                                 />
//
//                                 {/* Floating Cards */}
//                                 <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs backdrop-blur-sm bg-white/95 hover:scale-105 transition-transform duration-300">
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-3 bg-blue-100 rounded-xl">
//                                             <Shield className="w-6 h-6 text-blue-600" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-semibold text-gray-800">Qualified Doctors</h3>
//                                             <p className="text-sm text-gray-500">Expert care for you</p>
//                                         </div>
//                                     </div>
//                                 </div>
//
//                                 <div className="absolute -top-16 -right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs backdrop-blur-sm bg-white/95 hover:scale-105 transition-transform duration-300">
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-3 bg-green-100 rounded-xl">
//                                             <Clock className="w-6 h-6 text-green-600" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-semibold text-gray-800">24/7 Availability</h3>
//                                             <p className="text-sm text-gray-500">+231562645998</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Services Section */}
//             <section className="py-20 bg-white">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                             Our Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
//                         </h2>
//                         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                             We are dedicated to provide you the best medical services
//                         </p>
//                     </div>
//
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {[
//                             { icon: <Calendar className="w-12 h-12" />, title: 'Online Appointment', desc: 'Schedule your visit easily online', color: 'from-blue-500 to-cyan-500' },
//                             { icon: <Activity className="w-12 h-12" />, title: 'Analyse Tests', desc: 'Get accurate test results quickly', color: 'from-purple-500 to-pink-500' },
//                             { icon: <Shield className="w-12 h-12" />, title: 'Smart Health Portal', desc: 'Access your records anytime', color: 'from-green-500 to-emerald-500' },
//                         ].map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
//                             >
//                                 <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
//                                 <div className="relative">
//                                     <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                                         {service.icon}
//                                     </div>
//                                     <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                                     <p className="text-gray-600">{service.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//
//             {/* Search Section */}
//             <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="text-center mb-12">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-4">
//                             Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doctors</span>
//                         </h2>
//                         <p className="text-xl text-gray-600">
//                             Search your doctor and book an appointment in one click
//                         </p>
//                     </div>
//
//                     {/* Search Bar */}
//                     <div className="max-w-2xl mx-auto mb-16">
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 placeholder="Search for doctors, specializations..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full px-6 py-5 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
//                             />
//                             <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
//                             <button className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
//                                 Search
//                             </button>
//                         </div>
//                     </div>
//
//                     {/* Categories */}
//                     <div className="mb-16">
//                         <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Browse by Specialization</h3>
//                         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                             {categories.map((category, index) => (
//                                 <CategoryCard key={index} category={category} />
//                             ))}
//                         </div>
//                     </div>
//
//                     {/* Popular Doctors */}
//                     <div>
//                         <h3 className="text-3xl font-bold text-gray-800 mb-8">Popular Doctors</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {mockDoctors.map((doctor) => (
//                                 <DoctorCard key={doctor.id} doctor={doctor} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* CTA Section */}
//             <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
//                     <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//                         Join thousands of patients who trust us with their healthcare needs
//                     </p>
//                     <button className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
//                         Book Your Appointment Now
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// }
"use client"
import React, { useState, useEffect } from 'react';
import {
    Search,
    Calendar,
    Activity,
    Shield,
    Clock,
    Phone,
    Users,
    Heart,
    Stethoscope,
    Brain,
    Bone,
    Ear,
    UserRound,
    ChevronRight,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail
} from 'lucide-react';
import DoctorCard from '/components/newcomponents/Doctorcard.jsx'

import CategoryCard from "@/components/newcomponents/CategoryCard.jsx";

import TestimonialsSection from "@/components/newcomponents/Testimoial.jsx";

import BlogSection from '/components/newcomponents/Blogs.jsx'

import FloatingActionButton from "@/components/newcomponents/FloatingActionButton.jsx";

import LoadingSpinner from "@/components/newcomponents/LoadingSpinner.jsx";
import Link from "next/link";


// Mock data for doctors
const mockDoctors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiologist',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
        rating: 4.9,
        patients: 1200
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialization: 'Dentist',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
        rating: 4.8,
        patients: 980
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialization: 'Orthopedic',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
        rating: 4.9,
        patients: 1100
    },
    {
        id: 4,
        name: 'Dr. James Wilson',
        specialization: 'Otology',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
        rating: 4.7,
        patients: 850
    },
];

const categories = [
    { name: 'Dentist', icon: <Stethoscope className="w-8 h-8" />, color: 'from-blue-400 to-blue-600',link:'/Booking/dentidt' },
    { name: 'Cardiologist', icon: <Heart className="w-8 h-8" />, color: 'from-red-400 to-pink-600',link:'/Booking/Cardiologist' },
    { name: 'Orthopedic', icon: <Bone className="w-8 h-8" />, color: 'from-green-400 to-emerald-600',link:'/Booking/Orthopedic' },
    { name: 'Otology', icon: <Ear className="w-8 h-8" />, color: 'from-purple-400 to-indigo-600',link:'/Booking/otology' },
    { name: 'Doctor', icon: <UserRound className="w-8 h-8" />, color: 'from-orange-400 to-amber-600',link:'/Booking' },
];

// Testimonials data
const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Patient",
        content: "The best healthcare experience I've ever had. Doctors are professional and caring.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
        id: 2,
        name: "Maria Garcia",
        role: "Patient",
        content: "Quick appointment booking and excellent follow-up care. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400"
    },
    {
        id: 3,
        name: "David Kim",
        role: "Patient",
        content: "24/7 support saved me during an emergency. Thank you for the amazing service!",
        rating: 4,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    },
];

// Blog articles data
const articles = [
    {
        id: 1,
        title: "5 Tips for a Healthy Heart",
        excerpt: "Learn how to maintain cardiovascular health with simple daily habits.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        category: "Cardiology",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Importance of Regular Dental Checkups",
        excerpt: "Why regular dental visits are crucial for overall health.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400",
        category: "Dentistry",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Managing Stress for Better Health",
        excerpt: "Effective techniques to reduce stress and improve wellbeing.",
        image: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=400",
        category: "Wellness",
        readTime: "6 min read"
    },
];





export default function ModernMedicalHomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/*<Navbar />*/}

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div className="max-w-7xl mx-auto px-4 py-20 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in">
                            <div className="inline-block">
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                We Care<br />About Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Health</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Good health is the state of mental, physical and social well-being and it does not just mean absence of diseases.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href={'/Booking'} >
                                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                    Book an Appointment
                                    <ChevronRight className="w-5 h-5" />
                                </button></Link>
                                <Link href={'/contact'}>
                                <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
                                    Learn More
                                </button></Link>
                            </div>
                            <div className="grid grid-cols-3 gap-8 pt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">5000+</div>
                                    <div className="text-sm text-gray-600">Patients</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">150+</div>
                                    <div className="text-sm text-gray-600">Doctors</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                                    <div className="text-sm text-gray-600">Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative lg:h-[600px] flex items-center justify-center">
                            <div className="relative w-96 h-96">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1661492071612-98d26885614a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Doctors"
                                    className="relative w-full h-full object-cover rounded-full shadow-2xl ring-8 ring-white"
                                    loading="lazy"
                                />
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs backdrop-blur-sm bg-white/95 hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-blue-100 rounded-xl">
                                            <Shield className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Qualified Doctors</h3>
                                            <p className="text-sm text-gray-500">Expert care for you</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs backdrop-blur-sm bg-white/95 hover:scale-105 transition-transform duration-300">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-green-100 rounded-xl">
                                            <Clock className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">24/7 Availability</h3>
                                            <p className="text-sm text-gray-500">+231562645998</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We are dedicated to provide you the best medical services
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Calendar className="w-12 h-12" />,
                                title: 'Online Appointment',
                                desc: 'Schedule your visit easily online',
                                color: 'from-blue-500 to-cyan-500',
                                link:'/Booking'
                            },
                            {
                                icon: <Activity className="w-12 h-12" />,
                                title: 'Analyse Tests',
                                desc: 'Get accurate test results quickly',
                                color: 'from-purple-500 to-pink-500',
                                link:'/lab-test'
                            },
                            {
                                icon: <Shield className="w-12 h-12" />,
                                title: 'Smart Health Portal',
                                desc: 'Access your records anytime',
                                color: 'from-green-500 to-emerald-500',
                                link:'/profile'
                            },
                        ].map((service, index) => (
                         <Link href={service.link}>   <div key={index} className="group relative p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative">
                                    <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.desc}</p>
                                </div>
                         </div></Link>
                        ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection  testimonials={testimonials}/>

            {/* Search Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doctors</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Search your doctor and book an appointment in one click
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-16">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for doctors, specializations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-5 pl-14 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Browse by Specialization</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {categories.map((category, index) => (
                                <CategoryCard key={index} category={category} />
                            ))}
                        </div>
                    </div>

                    {/* Popular Doctors */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-8">Popular Doctors</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {mockDoctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <BlogSection />
            <FloatingActionButton />
        </div>
    );
}