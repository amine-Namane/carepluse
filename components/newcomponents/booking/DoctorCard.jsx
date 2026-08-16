// // 'use client'
// // import React, {useState} from "react";
// // import {
// //     Activity,
// //     Award,
// //     Award as AwardIcon,
// //     BadgeCheck, Bookmark, Calendar, ChevronRight,
// //     Clock,
// //     Crown, ExternalLink,
// //     Heart, Home, Share2,
// //     Sparkles,
// //     Star,
// //     Users, Video, X
// // } from "lucide-react";
// // import { useMutation, useQueryClient } from '@tanstack/react-query';
// // import { createAppointment } from '@/services/appointment';
// // export default function DoctorCard({ doctor }) {
// //     const [isFavorite, setIsFavorite] = useState(false);
// //     const [selectedTime, setSelectedTime] = useState(null);

// //     // Booking Modal states
// //     const [showBooking, setShowBooking] = useState(false);
// //     const [selectedType, setSelectedType] = useState(null);
// //     const [selectedSlot, setSelectedSlot] = useState(null);
// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const queryClient = useQueryClient();
// //     //
// //     const { mutate, isPending } = useMutation({
// //         mutationFn: createAppointment,
    
// //         onSuccess: () => {
// //             alert('Appointment booked ✅');
// //             setShowBooking(false);
    
// //             // refresh data if needed
// //             queryClient.invalidateQueries({ queryKey: ['appointments'] });
// //         },
    
// //         onError: (error) => {
// //             console.error(error);
// //             alert('Booking failed ❌');
// //         },
// //     });
// //     // Handle final confirmation
// //     // const confirmBooking = () => {
// //     //     alert(
// //     //         `Booked ${selectedType} appointment
// //     //          with ${doctor.name} on ${selectedSlot.date} at ${selectedSlot.time}`
// //     //     );
// //     //     setShowBooking(false);
// //     //     setSelectedType(null);
// //     //     setSelectedSlot(null);
// //     // };
// //      const formatDateTime = (date, time) => {
// //   const formattedDate = date.toISOString().split('T')[0];
// //   return `${formattedDate} ${time}`;
// // };
// //     const confirmBooking = () => {
// //         if (!selectedSlot || !selectedType) return;
// //  const [month, day, year] = selectedSlot.date.split('/');
// //   const formattedDate = formatDateTime(selectedDate, selectedSlot.time);   
// //         const data = {
// //             doctor_id: doctor.id,
// //             patient_id: 1, // ⚠️ replace with logged user later
// //             appointment_date: formattedDate,
// //             type: selectedType,
// //         };

// //         mutate(data);
// //     };
// //     const getNextDateFromDay = (targetDay) => {
// //   const today = new Date();
// //   const currentDay = today.getDay();

// //   let diff = targetDay - currentDay;

// //   if (diff <= 0) diff += 7; // next week

// //   const nextDate = new Date(today);
// //   nextDate.setDate(today.getDate() + diff);

// //   return nextDate;
// // };
// // const getNextDatesForDay = (day, count = 4) => {
// //   const dates = [];
// //   let base = getNextDateFromDay(day);

// //   for (let i = 0; i < count; i++) {
// //     const newDate = new Date(base);
// //     newDate.setDate(base.getDate() + i * 7);
// //     dates.push(newDate);
// //   }

// //   return dates;
// // };

// //     return (
// //         <>
// //             {/* ------------------- MAIN CARD ------------------- */}
// //             <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

// //                 {/* Doctor Header */}
// //                 <div className="relative h-64 overflow-hidden">
// //                     <img
// //                         src={doctor.image}
// //                         alt={doctor.name}
// //                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

// //                     {/* Top Badges */}
// //                     <div className="absolute top-4 left-4 flex flex-wrap gap-2">
// //                         {doctor.featured && (
// //                             <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
// //                                 <Crown className="w-3 h-3" />
// //                                 Featured
// //                             </div>
// //                         )}
// //                         <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
// //                             <BadgeCheck className="w-3 h-3" />
// //                             Verified
// //                         </div>
// //                         {doctor.awards.length > 0 && (
// //                             <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
// //                                 <AwardIcon className="w-3 h-3" />
// //                                 {doctor.awards.length} Awards
// //                             </div>
// //                         )}
// //                     </div>

// //                     {/* Action Buttons */}
// //                     <div className="absolute top-4 right-4 flex flex-col gap-2">
// //                         <button
// //                             onClick={() => setIsFavorite(!isFavorite)}
// //                             className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
// //                         >
// //                             <Heart
// //                                 className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
// //                             />
// //                         </button>
// //                         <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110">
// //                             <Sparkles className="w-5 h-5 text-gray-600" />
// //                         </button>
// //                     </div>

// //                     {/* Doctor Info Overlay */}
// //                     <div className="absolute bottom-4 left-4 right-4">
// //                         <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
// //                         <div className="flex items-center justify-between">
// //                             <p className="text-sm text-blue-100 font-medium">{doctor.specialization}</p>
// //                             <div className="flex items-center gap-1 text-yellow-300">
// //                                 <Star className="w-4 h-4 fill-current" />
// //                                 <span className="text-sm font-bold">{doctor.rating}</span>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Doctor Details */}
// //                 <div className="p-6 space-y-4">

// //                     {/* Expertise Tags */}
// //                     <div className="flex flex-wrap gap-2">
// //                         {doctor.expertise.slice(0, 3).map((skill, idx) => (
// //                             <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
// //                                 {skill}
// //                             </span>
// //                         ))}
// //                         {doctor.expertise.length > 3 && (
// //                             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
// //                                 +{doctor.expertise.length - 3} more
// //                             </span>
// //                         )}
// //                     </div>

// //                     {/* Stats Grid */}
// //                     <div className="grid grid-cols-2 gap-3">
// //                         <div className="flex items-center gap-2">
// //                             <Users className="w-4 h-4 text-blue-500" />
// //                             <div>
// //                                 <div className="text-sm font-medium text-gray-800">{doctor.patients}+</div>
// //                                 <div className="text-xs text-gray-500">Patients</div>
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Award className="w-4 h-4 text-green-500" />
// //                             <div>
// //                                 <div className="text-sm font-medium text-gray-800">{doctor.experience}</div>
// //                                 <div className="text-xs text-gray-500">Experience</div>
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Clock className="w-4 h-4 text-purple-500" />
// //                             <div>
// //                                 <div className="text-sm font-medium text-gray-800">{doctor.responseTime}</div>
// //                                 <div className="text-xs text-gray-500">Response</div>
// //                             </div>
// //                         </div>
// //                         <div className="flex items-center gap-2">
// //                             <Activity className="w-4 h-4 text-orange-500" />
// //                             <div>
// //                                 <div className="text-sm font-medium text-gray-800">{doctor.waitTime}</div>
// //                                 <div className="text-xs text-gray-500">Wait Time</div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Price & Book Button */}
// //                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
// //                         <div>
// //                             <div className="text-2xl font-bold text-gray-800">${doctor.price}</div>
// //                             <div className="text-xs text-gray-500">per consultation</div>
// //                         </div>
// //                         <div className="flex gap-2">
// //                             <button
// //                                 onClick={() => setShowBooking(true)}
// //                                 className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
// //                             >
// //                                 Book Now
// //                                 <ChevronRight className="w-4 h-4" />
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Footer */}
// //                 <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">
// //                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
// //                         <ExternalLink className="w-4 h-4" /> Profile
// //                     </button>
// //                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
// //                         <Share2 className="w-4 h-4" /> Share
// //                     </button>
// //                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
// //                         <Bookmark className="w-4 h-4" /> Save
// //                     </button>
// //                 </div>
// //             </div>

// //             {/* ------------------- BOOKING MODAL ------------------- */}
// //             {showBooking && (
// //                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
// //                     <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fadeIn">

// //                         {/* Modal Header */}
// //                         <div className="flex justify-between items-center mb-4">
// //                             <h2 className="text-xl font-bold text-gray-800">
// //                                 Book Appointment with {doctor.name}
// //                             </h2>
// //                             <button onClick={() => setShowBooking(false)}>
// //                                 <X className="w-6 h-6 text-gray-600 hover:text-red-600" />
// //                             </button>
// //                         </div>

// //                         {/* Appointment Type */}
// //                         <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Appointment Type</h3>
// //                         <div className="flex gap-3 mb-6">
// //                             <button
// //                                 onClick={() => setSelectedType("video")}
// //                                 className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition 
// //                                     ${selectedType === "video" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
// //                             >
// //                                 <Video className="w-4 h-4" /> Video
// //                             </button>

// //                             <button
// //                                 onClick={() => setSelectedType("cabinet")}
// //                                 className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition 
// //                                     ${selectedType === "in-person" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
// //                             >
// //                                 <Home className="w-4 h-4" /> In-person
// //                             </button>
// //                         </div>

// //                         {/* Time Selection */}
// //                         <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Time</h3>
// //                         <div className="grid grid-cols-1 gap-3 max-h-40 overflow-y-auto">
// //                             {doctor.available
// //                                 .filter(s => !selectedType || s.type === selectedType)
// //                                 .map((slot, idx) => (
// //                                     <button
// //                                         key={idx}
// //                                         onClick={() => setSelectedSlot(slot)}
// //                                         className={`flex items-center justify-between border rounded-xl py-3 px-4 transition
// //                                             ${selectedSlot === slot ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
// //                                     >
// //                                         <div className="flex items-center gap-2">
// //                                             <Calendar className="w-4 h-4" />
// //                                             {slot.date} - {slot.time}
// //                                         </div>
// //                                         <span className="capitalize text-xs opacity-80">{slot.type}</span>
// //                                     </button>
// //                                 ))}
// //                         </div>

// //                         {/* Confirm */}
// //                         <button
// //                             disabled={!selectedType || !selectedSlot || isPending}
// //                             onClick={confirmBooking}
// //                             className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
// //     text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
// //                         >
// //                             {isPending ? 'Booking...' : 'Confirm Booking'}
// //                         </button>
// //                         {getNextDatesForDay(slot.day).map((date, i) => (
  
// // ))}
// //                     </div>
// //                 </div>
// //             )}
// //         </>
// //     );
// // }
// 'use client'
// import React, {useState} from "react";
// import {
//     Activity,
//     Award,
//     Award as AwardIcon,
//     BadgeCheck, Bookmark, Calendar, ChevronRight,
//     Clock,
//     Crown, ExternalLink,
//     Heart, Home, Share2,
//     Sparkles,
//     Star,
//     Users, Video, X
// } from "lucide-react";
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { createAppointment } from '@/services/appointment';

// export default function DoctorCard({ doctor }) {
//     const [isFavorite, setIsFavorite] = useState(false);

//     // Booking states
//     const [showBooking, setShowBooking] = useState(false);
//     const [selectedType, setSelectedType] = useState(null);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//     const [selectedDate, setSelectedDate] = useState(null);

//     const queryClient = useQueryClient();

//     const { mutate, isPending } = useMutation({
//         mutationFn: createAppointment,
//         onSuccess: () => {
//             alert('Appointment booked ✅');
//             setShowBooking(false);
//             setSelectedType(null);
//             setSelectedSlot(null);
//             setSelectedDate(null);
//             queryClient.invalidateQueries({ queryKey: ['appointments'] });
//         },
//         onError: (error) => {
//             console.error(error);
//             alert('Booking failed ❌');
//         },
//     });

//     // 🔥 Helpers
//     const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//     const getNextDatesForDay = (targetDay, count = 4) => {
//         const today = new Date();
//         const currentDay = today.getDay();

//         let diff = targetDay - currentDay;
//         if (diff <= 0) diff += 7;

//         const base = new Date(today);
//         base.setDate(today.getDate() + diff);

//         const dates = [];
//         for (let i = 0; i < count; i++) {
//             const d = new Date(base);
//             d.setDate(base.getDate() + i * 7);
//             dates.push(d);
//         }

//         return dates;
//     };

//     const formatDateTime = (date, time) => {
//         const d = new Date(date);
//         const formattedDate = d.toISOString().split('T')[0];
//         return `${formattedDate} ${time}`;
//     };

//     const confirmBooking = () => {
//         if (!selectedSlot || !selectedType || !selectedDate) return;

//         const formattedDate = formatDateTime(selectedDate, selectedSlot.time);

//         const data = {
//             doctor_id: doctor.id,
//             patient_id: 1,
//             appointment_date: formattedDate,
//             type: selectedType,
//         };

//         mutate(data);
//     };

//     return (
//         <>
//             {/* ------------------- MAIN CARD ------------------- */}
//             <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src={doctor.image}
//                         alt={doctor.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

//                     <div className="absolute top-4 left-4 flex flex-wrap gap-2">
//                         {doctor.featured && (
//                             <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
//                                 <Crown className="w-3 h-3" />
//                                 Featured
//                             </div>
//                         )}
//                         <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
//                             <BadgeCheck className="w-3 h-3" />
//                             Verified
//                         </div>
//                         {doctor.length > 0 && (
//                             <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
//                                 <AwardIcon className="w-3 h-3" />
//                                 {doctor.awards.length} Awards
//                             </div>
//                         )}
//                     </div>

//                     <div className="absolute top-4 right-4 flex flex-col gap-2">
//                         <button
//                             onClick={() => setIsFavorite(!isFavorite)}
//                             className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
//                         >
//                             <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
//                         </button>
//                         <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110">
//                             <Sparkles className="w-5 h-5 text-gray-600" />
//                         </button>
//                     </div>

//                     <div className="absolute bottom-4 left-4 right-4">
//                         <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
//                         <div className="flex items-center justify-between">
//                             <p className="text-sm text-blue-100 font-medium">{doctor.specialization}</p>
//                             <div className="flex items-center gap-1 text-yellow-300">
//                                 <Star className="w-4 h-4 fill-current" />
//                                 <span className="text-sm font-bold">{doctor.rating}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="p-6 space-y-4">

//                     <div className="flex flex-wrap gap-2">
//                         {doctor?.expertise?.slice(0, 3).map((skill, idx) => (
//                             <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
//                                 {skill}
//                             </span>
//                         ))}
//                     </div>

//                     <div className="grid grid-cols-2 gap-3">
//                         <div className="flex items-center gap-2">
//                             <Users className="w-4 h-4 text-blue-500" />
//                             <div>
//                                 <div className="text-sm font-medium text-gray-800">{doctor.patients}+</div>
//                                 <div className="text-xs text-gray-500">Patients</div>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Award className="w-4 h-4 text-green-500" />
//                             <div>
//                                 <div className="text-sm font-medium text-gray-800">{doctor.experience}</div>
//                                 <div className="text-xs text-gray-500">Experience</div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                         <div>
//                             <div className="text-2xl font-bold text-gray-800">${doctor.price}</div>
//                         </div>
//                         <button
//                             onClick={() => setShowBooking(true)}
//                             className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl"
//                         >
//                             Book Now
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* ------------------- MODAL ------------------- */}
//             {showBooking && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
//                     <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">

//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-bold">
//                                 Book Appointment with {doctor.name}
//                             </h2>
//                             <button onClick={() => setShowBooking(false)}>
//                                 <X />
//                             </button>
//                         </div>

//                         {/* TYPE */}
//                         <div className="flex gap-3 mb-6">
//                             <button
//                                 onClick={() => setSelectedType("video")}
//                                 className={selectedType === "video" ? "bg-blue-600 text-white p-3 rounded-xl flex-1" : "bg-gray-100 p-3 rounded-xl flex-1"}
//                             >
//                                 <Video /> Video
//                             </button>

//                             <button
//                                 onClick={() => setSelectedType("cabinet")}
//                                 className={selectedType === "cabinet" ? "bg-blue-600 text-white p-3 rounded-xl flex-1" : "bg-gray-100 p-3 rounded-xl flex-1"}
//                             >
//                                 <Home /> Cabinet
//                             </button>
//                         </div>

//                         {/* TIME */}
//                         <div className="space-y-3 max-h-40 overflow-y-auto">
//                             {
//                            (doctor?.available || [])
//                                 .filter(s => !selectedType || s.type === selectedType)
//                                 .map((slot, idx) => (
//                                     <div key={idx} className="border rounded-xl p-3 bg-gray-50">

//                                         <div className="text-sm font-semibold mb-2">
//                                             {dayNames[slot.day]}
//                                         </div>

//                                         <div className="flex flex-wrap gap-2">
//                                             {getNextDatesForDay(slot.day).map((date, i) => (
//                                                 <button
//                                                     key={i}
//                                                     onClick={() => {
//                                                         setSelectedSlot(slot);
//                                                         setSelectedDate(date);
//                                                     }}
//                                                     className={`px-3 py-2 rounded-xl border ${
//                                                         selectedDate?.toDateString() === date.toDateString() &&
//                                                         selectedSlot === slot
//                                                             ? "bg-blue-600 text-white"
//                                                             : "bg-gray-100"
//                                                     }`}
//                                                 >
//                                                     {date.toLocaleDateString()} <br />
//                                                     {slot.time}
//                                                 </button>
//                                             ))}
//                                         </div>

//                                     </div>
//                                 ))}
//                         </div>

//                         <button
//                             disabled={!selectedType || !selectedSlot || !selectedDate || isPending}
//                             onClick={confirmBooking}
//                             className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white disabled:opacity-40"
//                         >
//                             {isPending ? 'Booking...' : 'Confirm Booking'}
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
'use client';

import React, { useMemo, useState } from 'react';

import {
    Activity,
    Award,
    Award as AwardIcon,
    BadgeCheck,
    Bookmark,
    Calendar,
    ChevronRight,
    Clock,
    Crown,
    ExternalLink,
    Heart,
    Home,
    Share2,
    Sparkles,
    Star,
    Users,
    Video,
    X,
} from 'lucide-react';

import {
    useMutation,
    useQueryClient,
} from '@tanstack/react-query';

import { createAppointment } from '@/services/appointment';


export default function DoctorCard({ doctor }) {

    const [isFavorite, setIsFavorite] = useState(false);

    // Booking states
    const [showBooking, setShowBooking] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const queryClient = useQueryClient();


    /*
    |--------------------------------------------------------------------------
    | Safe API values
    |--------------------------------------------------------------------------
    */

    const awards = Array.isArray(doctor?.awards)
        ? doctor.awards
        : [];

    const expertise = Array.isArray(doctor?.expertise)
        ? doctor.expertise
        : [];

    const languages = Array.isArray(doctor?.languages)
        ? doctor.languages
        : [];

    const availableSlots = Array.isArray(doctor?.available)
        ? doctor.available
        : [];

    const schedules = Array.isArray(doctor?.schedules)
        ? doctor.schedules
        : [];


    /*
    |--------------------------------------------------------------------------
    | Mutation
    |--------------------------------------------------------------------------
    */

    const {
        mutate,
        isPending,
    } = useMutation({

        mutationFn: createAppointment,

        onSuccess: () => {

            alert('Appointment booked ✅');

            setShowBooking(false);
            setSelectedType(null);
            setSelectedSlot(null);
            setSelectedDate(null);

            queryClient.invalidateQueries({
                queryKey: ['appointments'],
            });
        },

        onError: (error) => {

            console.error('Booking error:', error);

            const message =
                error?.response?.data?.message ||
                error?.message ||
                'Booking failed';

            alert(`Booking failed ❌\n${message}`);
        },
    });


    /*
    |--------------------------------------------------------------------------
    | Days
    |--------------------------------------------------------------------------
    */

    const dayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];


    /*
    |--------------------------------------------------------------------------
    | Get next dates for a specific day
    |--------------------------------------------------------------------------
    */

    const getNextDatesForDay = (
        targetDay,
        count = 4
    ) => {

        const today = new Date();

        const currentDay = today.getDay();

        let diff = targetDay - currentDay;

        if (diff <= 0) {
            diff += 7;
        }

        const base = new Date(today);

        base.setDate(
            today.getDate() + diff
        );

        const dates = [];

        for (let i = 0; i < count; i++) {

            const date = new Date(base);

            date.setDate(
                base.getDate() + i * 7
            );

            dates.push(date);
        }

        return dates;
    };


    /*
    |--------------------------------------------------------------------------
    | Format appointment date
    |--------------------------------------------------------------------------
    */

    const formatDateTime = (
        date,
        time
    ) => {

        if (!date || !time) {
            return null;
        }

        const year = date.getFullYear();

        const month = String(
            date.getMonth() + 1
        ).padStart(2, '0');

        const day = String(
            date.getDate()
        ).padStart(2, '0');

        return `${year}-${month}-${day} ${time}`;
    };


    /*
    |--------------------------------------------------------------------------
    | Consultation types
    |--------------------------------------------------------------------------
    */

    const consultationTypes = useMemo(() => {

        const type = doctor?.consultation_type;

        if (type === 'both') {
            return ['video', 'cabinet'];
        }

        if (type === 'video') {
            return ['video'];
        }

        if (
            type === 'cabinet' ||
            type === 'in-person'
        ) {
            return ['cabinet'];
        }

        /*
         * If API doesn't provide the type,
         * allow both for now.
         */
        return ['video', 'cabinet'];

    }, [doctor?.consultation_type]);


    /*
    |--------------------------------------------------------------------------
    | Available slots
    |--------------------------------------------------------------------------
    */

    const slots = useMemo(() => {

        /*
         * First try doctor.available
         */
        if (availableSlots.length > 0) {
            return availableSlots;
        }

        /*
         * Then try schedules.
         *
         * This keeps the component ready
         * for the backend when schedules are populated.
         */
        if (schedules.length > 0) {
            return schedules;
        }

        return [];

    }, [
        availableSlots,
        schedules,
    ]);


    /*
    |--------------------------------------------------------------------------
    | Filter slots by consultation type
    |--------------------------------------------------------------------------
    */

    const filteredSlots = useMemo(() => {

        if (!selectedType) {
            return slots;
        }

        return slots.filter(
            (slot) => {

                const slotType =
                    slot?.type ||
                    slot?.consultation_type;

                return (
                    !slotType ||
                    slotType === selectedType
                );
            }
        );

    }, [
        slots,
        selectedType,
    ]);


    /*
    |--------------------------------------------------------------------------
    | Confirm booking
    |--------------------------------------------------------------------------
    */

    const confirmBooking = () => {

        if (
            !selectedSlot ||
            !selectedType ||
            !selectedDate
        ) {
            return;
        }

        const appointmentDate =
            formatDateTime(
                selectedDate,
                selectedSlot.time
            );

        if (!appointmentDate) {
            alert('Please select a valid date and time.');
            return;
        }


        /*
         * IMPORTANT:
         *
         * patient_id is currently hardcoded
         * because your previous code used 1.
         *
         * Replace this later with the
         * authenticated user's ID.
         */
        const data = {

            doctor_id: doctor.id,

            patient_id: 1,

            appointment_date:
                appointmentDate,

            type: selectedType,
        };


        console.log(
            'Creating appointment:',
            data
        );

        mutate(data);
    };


    /*
    |--------------------------------------------------------------------------
    | Close modal
    |--------------------------------------------------------------------------
    */

    const closeBooking = () => {

        if (isPending) {
            return;
        }

        setShowBooking(false);
        setSelectedType(null);
        setSelectedSlot(null);
        setSelectedDate(null);
    };


    /*
    |--------------------------------------------------------------------------
    | Doctor image
    |--------------------------------------------------------------------------
    */

    const doctorInitial =
        doctor?.name
            ?.replace(/^Dr\.?\s*/i, '')
            ?.charAt(0)
            ?.toUpperCase() || 'D';


    /*
    |--------------------------------------------------------------------------
    | Render
    |--------------------------------------------------------------------------
    */

    return (
        <>
            {/* =========================================================
                DOCTOR CARD
            ========================================================= */}

            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

                {/* =====================================================
                    DOCTOR HEADER
                ===================================================== */}

                <div className="relative h-64 overflow-hidden">

                    {doctor?.image ? (

                        <img
                            src={doctor.image}
                            alt={doctor?.name || 'Doctor'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                    ) : (

                        <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">

                            <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center">

                                <span className="text-5xl font-bold text-blue-600">
                                    {doctorInitial}
                                </span>

                            </div>

                        </div>

                    )}


                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


                    {/* =================================================
                        TOP BADGES
                    ================================================= */}

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">

                        {/* Featured */}

                        {doctor?.featured && (

                            <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">

                                <Crown className="w-3 h-3" />

                                Featured

                            </div>

                        )}


                        {/* Verified */}

                        {doctor?.verified && (

                            <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full">

                                <BadgeCheck className="w-3 h-3" />

                                Verified

                            </div>

                        )}


                        {/* Awards */}

                        {awards.length > 0 && (

                            <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-full">

                                <AwardIcon className="w-3 h-3" />

                                {awards.length} Awards

                            </div>

                        )}

                    </div>


                    {/* =================================================
                        ACTION BUTTONS
                    ================================================= */}

                    <div className="absolute top-4 right-4 flex flex-col gap-2">

                        {/* Favorite */}

                        <button
                            type="button"
                            onClick={() =>
                                setIsFavorite(
                                    !isFavorite
                                )
                            }
                            aria-label="Favorite doctor"
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
                        >

                            <Heart
                                className={`w-5 h-5 transition-colors ${
                                    isFavorite
                                        ? 'fill-red-500 text-red-500'
                                        : 'text-gray-600'
                                }`}
                            />

                        </button>


                        {/* AI / Sparkles */}

                        <button
                            type="button"
                            aria-label="Doctor highlights"
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
                        >

                            <Sparkles className="w-5 h-5 text-gray-600" />

                        </button>

                    </div>


                    {/* =================================================
                        DOCTOR INFO
                    ================================================= */}

                    <div className="absolute bottom-4 left-4 right-4">

                        <h3 className="text-xl font-bold text-white mb-1">

                            {doctor?.name || 'Unknown Doctor'}

                        </h3>


                        <div className="flex items-center justify-between">

                            <p className="text-sm text-blue-100 font-medium capitalize">

                                {doctor?.specialization ||
                                    'Medical Doctor'}

                            </p>


                            <div className="flex items-center gap-1 text-yellow-300">

                                <Star className="w-4 h-4 fill-current" />

                                <span className="text-sm font-bold">

                                    {doctor?.rating ?? 0}

                                </span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    DOCTOR DETAILS
                ===================================================== */}

                <div className="p-6 space-y-4">


                    {/* =================================================
                        EXPERTISE
                    ================================================= */}

                    {expertise.length > 0 && (

                        <div className="flex flex-wrap gap-2">

                            {expertise
                                .slice(0, 3)
                                .map(
                                    (
                                        skill,
                                        idx
                                    ) => (

                                        <span
                                            key={`${doctor.id}-skill-${idx}`}
                                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
                                        >
                                            {skill}
                                        </span>

                                    )
                                )}


                            {expertise.length > 3 && (

                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">

                                    +
                                    {expertise.length - 3}
                                    {' '}
                                    more

                                </span>

                            )}

                        </div>

                    )}


                    {/* =================================================
                        STATS
                    ================================================= */}

                    <div className="grid grid-cols-2 gap-3">

                        {/* Patients */}

                        <div className="flex items-center gap-2">

                            <Users className="w-4 h-4 text-blue-500" />

                            <div>

                                <div className="text-sm font-medium text-gray-800">

                                    {doctor?.patients ?? 0}+

                                </div>

                                <div className="text-xs text-gray-500">
                                    Patients
                                </div>

                            </div>

                        </div>


                        {/* Experience */}

                        <div className="flex items-center gap-2">

                            <Award className="w-4 h-4 text-green-500" />

                            <div>

                                <div className="text-sm font-medium text-gray-800">

                                    {doctor?.experience_years ??
                                        0}{' '}
                                    years

                                </div>

                                <div className="text-xs text-gray-500">
                                    Experience
                                </div>

                            </div>

                        </div>


                        {/* Response */}

                        <div className="flex items-center gap-2">

                            <Clock className="w-4 h-4 text-purple-500" />

                            <div>

                                <div className="text-sm font-medium text-gray-800">

                                    {doctor?.response_time ||
                                        'N/A'}

                                </div>

                                <div className="text-xs text-gray-500">
                                    Response
                                </div>

                            </div>

                        </div>


                        {/* Wait time */}

                        <div className="flex items-center gap-2">

                            <Activity className="w-4 h-4 text-orange-500" />

                            <div>

                                <div className="text-sm font-medium text-gray-800">

                                    {doctor?.wait_time ||
                                        'N/A'}

                                </div>

                                <div className="text-xs text-gray-500">
                                    Wait Time
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        LOCATION
                    ================================================= */}

                    {doctor?.location && (

                        <div className="flex items-center gap-2 text-sm text-gray-500">

                            <ExternalLink className="w-4 h-4" />

                            <span className="truncate">
                                {doctor.location}
                            </span>

                        </div>

                    )}


                    {/* =================================================
                        LANGUAGES
                    ================================================= */}

                    {languages.length > 0 && (

                        <div className="text-xs text-gray-500">

                            <span className="font-semibold">
                                Languages:
                            </span>{' '}

                            {languages.join(', ')}

                        </div>

                    )}


                    {/* =================================================
                        PRICE & BOOK
                    ================================================= */}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">

                        <div>

                            <div className="text-2xl font-bold text-gray-800">

                                ${Number(
                                    doctor?.price || 0
                                ).toFixed(2)}

                            </div>

                            <div className="text-xs text-gray-500">
                                per consultation
                            </div>

                        </div>


                        <button
                            type="button"
                            onClick={() =>
                                setShowBooking(true)
                            }
                            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >

                            Book Now

                            <ChevronRight className="w-4 h-4" />

                        </button>

                    </div>

                </div>


                {/* =====================================================
                    FOOTER
                ===================================================== */}

                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">

                    <button
                        type="button"
                        className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
                    >

                        <ExternalLink className="w-4 h-4" />

                        Profile

                    </button>


                    <button
                        type="button"
                        onClick={() => {

                            if (
                                typeof navigator !==
                                'undefined' &&
                                navigator.share
                            ) {

                                navigator.share({
                                    title:
                                        doctor?.name ||
                                        'Doctor',
                                    text:
                                        `Check out ${doctor?.name}`,
                                    url:
                                        window.location.href,
                                });

                            }

                        }}
                        className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
                    >

                        <Share2 className="w-4 h-4" />

                        Share

                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            setIsFavorite(
                                !isFavorite
                            )
                        }
                        className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1"
                    >

                        <Bookmark className="w-4 h-4" />

                        Save

                    </button>

                </div>

            </div>


            {/* =========================================================
                BOOKING MODAL
            ========================================================= */}

            {showBooking && (

                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
                    onClick={(event) => {

                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            closeBooking();
                        }

                    }}
                >

                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">


                        {/* =================================================
                            MODAL HEADER
                        ================================================= */}

                        <div className="flex justify-between items-center mb-6">

                            <div>

                                <h2 className="text-xl font-bold text-gray-800">

                                    Book Appointment

                                </h2>

                                <p className="text-sm text-gray-500 mt-1">

                                    with {doctor?.name}

                                </p>

                            </div>


                            <button
                                type="button"
                                onClick={closeBooking}
                                disabled={isPending}
                                className="p-2 rounded-full hover:bg-gray-100 transition"
                            >

                                <X className="w-6 h-6 text-gray-600" />

                            </button>

                        </div>


                        {/* =================================================
                            APPOINTMENT TYPE
                        ================================================= */}

                        <h3 className="text-sm font-semibold text-gray-700 mb-3">

                            Choose Appointment Type

                        </h3>


                        <div className="flex gap-3 mb-6">

                            {/* Video */}

                            {consultationTypes.includes(
                                'video'
                            ) && (

                                <button
                                    type="button"
                                    onClick={() => {

                                        setSelectedType(
                                            'video'
                                        );

                                        setSelectedSlot(
                                            null
                                        );

                                        setSelectedDate(
                                            null
                                        );

                                    }}
                                    className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition ${
                                        selectedType ===
                                        'video'
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                    }`}
                                >

                                    <Video className="w-4 h-4" />

                                    Video

                                </button>

                            )}


                            {/* Cabinet */}

                            {consultationTypes.includes(
                                'cabinet'
                            ) && (

                                <button
                                    type="button"
                                    onClick={() => {

                                        setSelectedType(
                                            'cabinet'
                                        );

                                        setSelectedSlot(
                                            null
                                        );

                                        setSelectedDate(
                                            null
                                        );

                                    }}
                                    className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition ${
                                        selectedType ===
                                        'cabinet'
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                    }`}
                                >

                                    <Home className="w-4 h-4" />

                                    In-person

                                </button>

                            )}

                        </div>


                        {/* =================================================
                            AVAILABILITY
                        ================================================= */}

                        <h3 className="text-sm font-semibold text-gray-700 mb-3">

                            Choose Date & Time

                        </h3>


                        {!selectedType && (

                            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-700 mb-4">

                                Please choose an appointment type first.

                            </div>

                        )}


                        {selectedType &&
                            filteredSlots.length === 0 && (

                                <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-center">

                                    <Calendar className="w-8 h-8 text-gray-400 mx-auto mb-2" />

                                    <p className="text-sm font-medium text-gray-700">

                                        No available slots

                                    </p>

                                    <p className="text-xs text-gray-500 mt-1">

                                        This doctor has not published
                                        availability yet.

                                    </p>

                                </div>

                            )}


                        {selectedType &&
                            filteredSlots.length > 0 && (

                                <div className="space-y-3 max-h-72 overflow-y-auto">

                                    {filteredSlots.map(
                                        (
                                            slot,
                                            idx
                                        ) => {

                                            const targetDay =
                                                typeof slot?.day ===
                                                'number'
                                                    ? slot.day
                                                    : dayNames.findIndex(
                                                          (day) =>
                                                              day.toLowerCase() ===
                                                              String(
                                                                  slot?.day ||
                                                                      ''
                                                              ).toLowerCase()
                                                      );

                                            const validDay =
                                                targetDay >=
                                                    0 &&
                                                targetDay <=
                                                    6;

                                            if (
                                                !validDay
                                            ) {
                                                return null;
                                            }

                                            const dates =
                                                getNextDatesForDay(
                                                    targetDay
                                                );

                                            return (

                                                <div
                                                    key={
                                                        slot?.id ||
                                                        idx
                                                    }
                                                    className="border rounded-xl p-3 bg-gray-50"
                                                >

                                                    <div className="text-sm font-semibold mb-3">

                                                        {
                                                            dayNames[
                                                                targetDay
                                                            ]
                                                        }

                                                    </div>


                                                    <div className="flex flex-wrap gap-2">

                                                        {dates.map(
                                                            (
                                                                date,
                                                                dateIndex
                                                            ) => (

                                                                <button
                                                                    type="button"
                                                                    key={`${idx}-${dateIndex}`}
                                                                    onClick={() => {

                                                                        setSelectedSlot(
                                                                            slot
                                                                        );

                                                                        setSelectedDate(
                                                                            date
                                                                        );

                                                                    }}
                                                                    className={`px-3 py-2 rounded-xl border transition ${
                                                                        selectedDate?.toDateString() ===
                                                                            date.toDateString() &&
                                                                        selectedSlot ===
                                                                            slot
                                                                            ? 'bg-blue-600 text-white border-blue-600'
                                                                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400'
                                                                    }`}
                                                                >

                                                                    <div className="text-xs font-medium">

                                                                        {date.toLocaleDateString(
                                                                            undefined,
                                                                            {
                                                                                month:
                                                                                    'short',
                                                                                day:
                                                                                    'numeric',
                                                                            }
                                                                        )}

                                                                    </div>

                                                                    <div className="text-xs mt-1">

                                                                        {
                                                                            slot.time
                                                                        }

                                                                    </div>

                                                                </button>

                                                            )
                                                        )}

                                                    </div>

                                                </div>

                                            );
                                        }
                                    )}

                                </div>

                            )}


                        {/* =================================================
                            SELECTED APPOINTMENT
                        ================================================= */}

                        {selectedDate &&
                            selectedSlot && (

                                <div className="mt-5 p-4 bg-green-50 border border-green-200 rounded-xl">

                                    <div className="flex items-center gap-2 text-green-700 font-semibold">

                                        <Calendar className="w-4 h-4" />

                                        Selected Appointment

                                    </div>

                                    <p className="text-sm text-green-700 mt-2">

                                        {selectedDate.toLocaleDateString(
                                            undefined,
                                            {
                                                weekday:
                                                    'long',
                                                year:
                                                    'numeric',
                                                month:
                                                    'long',
                                                day:
                                                    'numeric',
                                            }
                                        )}

                                        {' at '}

                                        {selectedSlot.time}

                                    </p>

                                </div>

                            )}


                        {/* =================================================
                            CONFIRM
                        ================================================= */}

                        <button
                            type="button"
                            disabled={
                                !selectedType ||
                                !selectedSlot ||
                                !selectedDate ||
                                isPending
                            }
                            onClick={
                                confirmBooking
                            }
                            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg transition"
                        >

                            {isPending
                                ? 'Booking...'
                                : 'Confirm Booking'}

                        </button>

                    </div>

                </div>

            )}

        </>
    );
}