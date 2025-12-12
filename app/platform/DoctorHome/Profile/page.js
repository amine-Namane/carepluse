// 'use client'
// import React, { useEffect, useState } from "react";
// import { supabase } from '@/lib/supabaseclient';
// import { redirect } from 'next/navigation';
// import { useRouter } from "next/navigation";
// // Updated mock data with medical professional information
// const profileData = {
//   personalInfo: {
//     fullName: "Dr. Mohamed El Amine",
//     specialization: "Cardiologist",
//     experience: "12 years",
//     education: "MD in Cardiology, University of Algiers",
//     affiliation: "Algiers Central Hospital",
//     phoneNumber: "+213 562 645 998",
//     email: "m.amine@centralhospital.dz",
//     consultationFee: "3000 DZD",
//     languages: "Arabic, French, English",
//     photo: "/assets/images/dr-lee.png",
//   }
// };
//
// export default  function DoctorProfile() {
//   const router = useRouter();
// const [doctor, setDoctor] = useState(null);
// const [loading, setLoading] = useState(true);
//
// useEffect(() => {
//   const checkAuthAndFetchAppointments = async () => {
//     const { data: { user } } = await supabase.auth.getUser();
//
//     if (!user) {
//       router.push("/Admin"); // Redirect if not logged in
//       return;
//     }
//
//     try {
//       // Fetch doctor info
//       const { data: userInfo, error: roleError } = await supabase
//         .from("doctors")
//         .select("*")
//         .eq("user_id", user.id) // Ensure 'user_id' is correct
//         .single();
//
//       if (roleError) throw roleError; // Handle error if any
//
//       setDoctor(userInfo);
//     } catch (error) {
//       console.error("Error fetching doctor info:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   checkAuthAndFetchAppointments();
// }, [router]); // Add router dependency
//
// // Log the updated doctor state
// useEffect(() => {
//   if (doctor) {
//     console.log("Updated doctor state:", doctor);
//   }
// }, [doctor]);
//
// if (loading) {
//   return <p>Loading...</p>; // Show a loading message
// }
// if (!doctor) {
//   return <p>No doctor data available.</p>; // Handle case when there's no data
// }
//
//   return (
//     <section className="w-full max-w-4xl mx-auto p-6">
//       {/* Profile Header */}
//       <div className="mb-8 flex items-center gap-6 border-b border-gray-200 pb-8">
//         <img
//           src={profileData.personalInfo.photo}
//           alt="Profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-[#0089FF]"
//         />
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             {doctor.name}
//           </h1>
//           <p className="text-lg text-[#0089FF] font-semibold">
//             {doctor.specialty}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">
//             {profileData.personalInfo.affiliation}
//           </p>
//         </div>
//       </div>
//
//       {/* Information Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Professional Details */}
//         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//           <h2 className="text-2xl font-semibold mb-6 text-[#0089FF]">
//             Professional Details
//           </h2>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Experience</span>
//               <span className="text-gray-900 font-medium">
//                 {doctor.experiance} years
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Education</span>
//               <span className="text-gray-900 text-right">
//                 {profileData.personalInfo.education}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Consultation Fee</span>
//               <span className="text-gray-900 font-medium text-[#0089FF]">
//                 {profileData.personalInfo.consultationFee}
//               </span>
//             </div>
//           </div>
//         </div>
//
//         {/* Contact & Languages */}
//         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//           <h2 className="text-2xl font-semibold mb-6 text-[#0089FF]">
//             Contact Information
//           </h2>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Phone</span>
//               <span className="text-gray-900">
//                 +213{doctor.phone}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Email</span>
//               <span className="text-gray-900 break-all">
//                 {doctor.email}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Languages</span>
//               <span className="text-gray-900">
//                 {profileData.personalInfo.languages}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client'
import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  GraduationCap,
  DollarSign,
  Globe,
  Calendar,
  Star,
  Edit,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Activity
} from 'lucide-react';

const ModernDoctorProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Mock doctor data - replace with your Supabase data
  const doctor = {
    name: "Dr. Mohamed El Amine",
    specialty: "Cardiologist",
    experience: "12",
    education: "MD in Cardiology, University of Algiers",
    affiliation: "Algiers Central Hospital",
    phone: "562645998",
    email: "m.amine@centralhospital.dz",
    consultationFee: "3000 DZD",
    languages: "Arabic, French, English",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    rating: 4.8,
    totalPatients: 1250,
    successRate: "96%",
    availability: "Mon-Fri: 9AM-5PM"
  };

  const stats = [
    { label: "Total Patients", value: doctor.totalPatients, icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { label: "Experience", value: `${doctor.experience} Years`, icon: <Briefcase className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { label: "Success Rate", value: doctor.successRate, icon: <TrendingUp className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { label: "Rating", value: doctor.rating, icon: <Star className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

              {/* Medical Icons Decoration */}
              <div className="absolute top-8 right-8 flex gap-4 opacity-20">
                <Heart className="w-12 h-12 text-white" />
                <Activity className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="relative px-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
                <div className="relative">
                  <img
                      src={doctor.image}
                      alt="Doctor Profile"
                      className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl"
                  />
                  <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left mt-4">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {doctor.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                    {doctor.specialty}
                  </span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                      {doctor.rating} Rating
                  </span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Verified
                  </span>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2 justify-center md:justify-start">
                    <MapPin className="w-4 h-4" />
                    {doctor.affiliation}
                  </p>
                </div>

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <Edit className="w-5 h-5" />
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
            ))}
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Professional Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Professional Details
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Briefcase className="w-5 h-5" />,
                    label: "Experience",
                    value: `${doctor.experience} years`,
                    color: "text-blue-600",
                    bg: "bg-blue-100"
                  },
                  {
                    icon: <GraduationCap className="w-5 h-5" />,
                    label: "Education",
                    value: doctor.education,
                    color: "text-purple-600",
                    bg: "bg-purple-100"
                  },
                  {
                    icon: <DollarSign className="w-5 h-5" />,
                    label: "Consultation Fee",
                    value: doctor.consultationFee,
                    color: "text-green-600",
                    bg: "bg-green-100"
                  },
                  {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Availability",
                    value: doctor.availability,
                    color: "text-orange-600",
                    bg: "bg-orange-100"
                  },
                ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors group">
                      <div className="flex items-start gap-3">
                        <div className={`${item.bg} ${item.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-600 font-medium text-sm block mb-1">{item.label}</span>
                          <span className="text-gray-900 font-semibold">{item.value}</span>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Contact & Languages */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Phone",
                    value: `+213 ${doctor.phone}`,
                    color: "text-green-600",
                    bg: "bg-green-100"
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: doctor.email,
                    color: "text-blue-600",
                    bg: "bg-blue-100"
                  },
                  {
                    icon: <Globe className="w-5 h-5" />,
                    label: "Languages",
                    value: doctor.languages,
                    color: "text-purple-600",
                    bg: "bg-purple-100"
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Hospital",
                    value: doctor.affiliation,
                    color: "text-red-600",
                    bg: "bg-red-100"
                  },
                ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl border-2 border-gray-100 hover:border-purple-200 transition-colors group">
                      <div className="flex items-start gap-3">
                        <div className={`${item.bg} ${item.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-600 font-medium text-sm block mb-1">{item.label}</span>
                          <span className="text-gray-900 font-semibold break-words">{item.value}</span>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specializations & Certifications */}
          <div className="mt-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Specializations & Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Interventional Cardiology",
                "Echocardiography",
                "Cardiac Rehabilitation",
                "Heart Failure Management",
                "Preventive Cardiology",
                "Clinical Cardiology"
              ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-800">{cert}</span>
                  </div>
              ))}
            </div>
          </div>

          {/* about Section */}
          <div className="mt-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                About Dr. {doctor.name.split(' ').pop()}
              </h2>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Mohamed El Amine is a highly experienced cardiologist with over {doctor.experience} years of dedicated service in cardiovascular medicine. Specializing in interventional cardiology and heart failure management, Dr. Amine has helped thousands of patients achieve better heart health.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With a strong educational background from the University of Algiers and continuous professional development, Dr. Amine stays at the forefront of cardiac care innovations. His patient-centered approach combines cutting-edge medical technology with compassionate care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Currently affiliated with Algiers Central Hospital, Dr. Amine is committed to providing exceptional cardiac care and improving patient outcomes through evidence-based medicine and personalized treatment plans.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ModernDoctorProfile;