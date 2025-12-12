// import React from 'react';
// import {
//   Heart,
//   Shield,
//   Users,
//   Zap,
//   Award,
//   CheckCircle,
//   Stethoscope,
//   Brain,
//   Clock,
//   TrendingUp,
//   Lock,
//   Globe,
//   Target,
//   Sparkles
// } from 'lucide-react';
//
// const ModernAboutPage = () => {
//   const features = [
//     {
//       title: 'For Patients',
//       icon: <Users className="w-6 h-6" />,
//       color: 'from-blue-500 to-cyan-500',
//       items: [
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Easy appointment scheduling with verified specialists' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Secure access to medical records and test results' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'AI-powered health insights and trend analysis' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Real-time health monitoring and alerts' },
//       ]
//     },
//     {
//       title: 'For Professionals',
//       icon: <Stethoscope className="w-6 h-6" />,
//       color: 'from-purple-500 to-pink-500',
//       items: [
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Comprehensive patient management system' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Integrated diagnostic tools and collaboration features' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Secure messaging and telehealth capabilities' },
//         { icon: <CheckCircle className="w-5 h-5" />, text: 'Advanced analytics and reporting tools' },
//       ]
//     }
//   ];
//
//   const values = [
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: 'Patient-Centered Care',
//       description: 'Every decision we make prioritizes patient wellbeing and accessibility to quality healthcare.',
//       color: 'from-red-500 to-pink-500'
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: 'Security & Privacy',
//       description: 'HIPAA-compliant infrastructure with end-to-end encryption protecting your sensitive data.',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: 'AI Innovation',
//       description: 'Cutting-edge AI technology providing intelligent insights and personalized healthcare recommendations.',
//       color: 'from-purple-500 to-indigo-500'
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: 'Seamless Experience',
//       description: 'Intuitive interfaces and streamlined workflows making healthcare management effortless.',
//       color: 'from-yellow-500 to-orange-500'
//     }
//   ];
//
//   const stats = [
//     { number: '10K+', label: 'Active Patients', icon: <Users className="w-6 h-6" /> },
//     { number: '500+', label: 'Healthcare Providers', icon: <Stethoscope className="w-6 h-6" /> },
//     { number: '50K+', label: 'Appointments Booked', icon: <Clock className="w-6 h-6" /> },
//     { number: '99.9%', label: 'Uptime Guarantee', icon: <TrendingUp className="w-6 h-6" /> },
//   ];
//
//   return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-20 lg:py-32">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl"></div>
//
//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="inline-block mb-6">
//             <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
//               about Us
//             </span>
//             </div>
//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Transforming Healthcare
//               <br />
//               <span className="text-blue-200">Through Technology</span>
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               Bridging the gap between patients and healthcare providers through innovative technology and compassionate care
//             </p>
//           </div>
//         </section>
//
//         {/* Stats Section */}
//         <section className="py-12 -mt-16 relative z-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               {stats.map((stat, index) => (
//                   <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow border border-gray-100">
//                     <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white mb-4">
//                       {stat.icon}
//                     </div>
//                     <div className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
//                     <div className="text-sm text-gray-600">{stat.label}</div>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </section>
//
//         {/* Mission Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white">
//                   <Target className="w-8 h-8" />
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
//                   <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
//                 </div>
//               </div>
//               <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                 At HealthCare, we're committed to transforming healthcare delivery by creating seamless connections
//                 between patients and medical professionals. Our platform combines cutting-edge technology with
//                 user-centric design to enhance medical communication, streamline processes, and improve health outcomes.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We believe that access to quality healthcare should be effortless, transparent, and personalized.
//                 By leveraging AI, data analytics, and intuitive design, we empower both patients and healthcare
//                 providers to make informed decisions and deliver exceptional care.
//               </p>
//             </div>
//           </div>
//         </section>
//
//         {/* Features Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Everyone</span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Comprehensive solutions tailored for patients and healthcare professionals
//               </p>
//             </div>
//
//             <div className="grid md:grid-cols-2 gap-8">
//               {features.map((feature, index) => (
//                   <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
//                     <div className="flex items-center gap-4 mb-6">
//                       <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl text-white`}>
//                         {feature.icon}
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
//                     </div>
//                     <ul className="space-y-4">
//                       {feature.items.map((item, idx) => (
//                           <li key={idx} className="flex items-start gap-3 group">
//                             <div className="p-1 bg-green-100 rounded-lg text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
//                               {item.icon}
//                             </div>
//                             <span className="text-gray-600 leading-relaxed">{item.text}</span>
//                           </li>
//                       ))}
//                     </ul>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </section>
//
//         {/* Values Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 The principles that guide everything we do
//               </p>
//             </div>
//
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {values.map((value, index) => (
//                   <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//                     <div className={`inline-block p-4 bg-gradient-to-br ${value.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
//                       {value.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </section>
//
//         {/* Commitment Section */}
//         <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-12 text-white relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>
//
//               <div className="relative z-10">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
//                     <Award className="w-8 h-8" />
//                   </div>
//                   <h2 className="text-3xl font-bold">Our Commitment</h2>
//                 </div>
//                 <p className="text-lg text-blue-100 leading-relaxed mb-6">
//                   We prioritize security, compliance, and user experience in everything we build. HealthCare
//                   meets rigorous healthcare standards (HIPAA compliant) while maintaining intuitive interfaces
//                   for all users. Our intelligent systems learn and adapt to provide personalized care pathways
//                   and predictive health analytics.
//                 </p>
//                 <div className="grid md:grid-cols-3 gap-6 mt-8">
//                   {[
//                     { icon: <Lock className="w-6 h-6" />, text: 'HIPAA Compliant' },
//                     { icon: <Globe className="w-6 h-6" />, text: '24/7 Support' },
//                     { icon: <Sparkles className="w-6 h-6" />, text: 'AI-Powered' },
//                   ].map((item, index) => (
//                       <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
//                         <div className="p-2 bg-white/20 rounded-lg">
//                           {item.icon}
//                         </div>
//                         <span className="font-semibold">{item.text}</span>
//                       </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//
//         {/* CTA Section */}
//         <section className="py-20">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-4xl font-bold text-gray-800 mb-6">
//               Ready to Transform Your Healthcare Experience?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8">
//               Join thousands of patients and healthcare providers who trust our platform
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 Get Started Today
//               </button>
//               <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200">
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//   );
// };
//
// export default ModernAboutPage;
'use client'
import React, { useState } from 'react';
import {
  Heart,
  Shield,
  Users,
  Zap,
  Award,
  CheckCircle,
  Stethoscope,
  Brain,
  Clock,
  TrendingUp,
  Lock,
  Globe,
  Target,
  Sparkles,
  Star,
  Building,
  MapPin,
  Mail,
  Phone,
  Calendar,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  History,
  Code,
  UsersRound,
  Globe2,
  BarChart3,
  Bot,
  Activity,
  FileCheck,
  ShieldCheck,
  Cpu,
  Rocket,
  Leaf,
  HandHeart,
  Eye
} from 'lucide-react';
import Herosection from "@/components/newcomponents/about/HeroSection.jsx";
import Missionvision from "@/components/newcomponents/about/Missionvision.jsx";
import Timeline from "@/components/newcomponents/about/Timeline.jsx";
import Features from "@/components/newcomponents/about/Features.jsx";
import Valuesection from "@/components/newcomponents/about/Value.jsx";
const ModernAboutPage = () => {
  const [activeTimeline, setActiveTimeline] = useState('all');
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
<Herosection />
<Missionvision />
<Timeline />
<Features />
        <Valuesection />
      </div>
  );
};

export default ModernAboutPage;