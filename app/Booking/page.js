// 'use client'
// import React, { useEffect,useState } from 'react';
// import Custemsidebar from '@/components/ui/types';  // Ensure the correct import path
// import { supabase } from "@/lib/supabaseclient";
// import { redirect } from "next/navigation";
// import { useRouter } from 'next/navigation';
// import Doctorlist from '@/components/Listeofdoctors';
// export default  function Booking() {
//   const router = useRouter();
//     const [doctors, setDoctors] = useState([]);
//     const [loading, setLoading] = useState(true);
// useEffect(() => {
//   const checkAuthAndFetchAppointments = async () => {
//     const { data: { user } } = await supabase.auth.getUser();
//     if (!user) {
//       router.push("/Patient"); // Redirect if not logged in
//       return;
//     }
//
//
// const { data: doctors, error } = await supabase.from("doctor").select("*");
//       if (error) {
//         console.error("Error fetching doctors:", error);
//       } else {
//         setDoctors(doctors);
//       }
//
//       setLoading(false);
// }
//     checkAuthAndFetchAppointments();
//   }, [router]);
//
//       if (loading) return <p>Loading doctors...</p>;
//
//       return (
//         <Doctorlist
//           doctortype={'Dentist'}
//           doctors={doctors}
//         />
//       );
//     }
//
//
'use client'
// import React, { useState } from 'react';
// import {
//     Search,
//     Filter,
//     Star,
//     MapPin,
//     Clock,
//     Calendar,
//     Heart,
//     Stethoscope,
//     Brain,
//     Bone,
//     Ear,
//     Eye,
//     UserRound,
//     Users,
//     Award,
//     ChevronRight,
//     BadgeCheck,
//     TrendingUp
// } from 'lucide-react';
//
// // Mock data
// const mockDoctors = [
//     {
//         id: 1,
//         name: 'Dr. Sarah Johnson',
//         specialization: 'Cardiologist',
//         image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
//         rating: 4.9,
//         reviews: 156,
//         patients: 1200,
//         experience: '15 years',
//         location: 'New York Medical Center',
//         available: 'Today at 2:00 PM',
//         price: '$150'
//     },
//     {
//         id: 2,
//         name: 'Dr. Michael Chen',
//         specialization: 'Dentist',
//         image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
//         rating: 4.8,
//         reviews: 132,
//         patients: 980,
//         experience: '12 years',
//         location: 'Downtown Dental Clinic',
//         available: 'Tomorrow at 10:00 AM',
//         price: '$120'
//     },
//     {
//         id: 3,
//         name: 'Dr. Emily Rodriguez',
//         specialization: 'Orthopedic',
//         image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
//         rating: 4.9,
//         reviews: 189,
//         patients: 1100,
//         experience: '18 years',
//         location: 'City Orthopedic Hospital',
//         available: 'Today at 4:00 PM',
//         price: '$180'
//     },
//     {
//         id: 4,
//         name: 'Dr. James Wilson',
//         specialization: 'Otology',
//         image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
//         rating: 4.7,
//         reviews: 98,
//         patients: 850,
//         experience: '10 years',
//         location: 'ENT Specialists Center',
//         available: 'Monday at 9:00 AM',
//         price: '$140'
//     },
//     {
//         id: 5,
//         name: 'Dr. Lisa Thompson',
//         specialization: 'Dentist',
//         image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
//         rating: 4.8,
//         reviews: 145,
//         patients: 920,
//         experience: '14 years',
//         location: 'Smile Dental Care',
//         available: 'Today at 11:00 AM',
//         price: '$130'
//     },
//     {
//         id: 6,
//         name: 'Dr. Robert Martinez',
//         specialization: 'Cardiologist',
//         image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
//         rating: 4.9,
//         reviews: 203,
//         patients: 1350,
//         experience: '20 years',
//         location: 'Heart Health Institute',
//         available: 'Tomorrow at 3:00 PM',
//         price: '$200'
//     },
// ];
//
// const specializations = [
//     { name: 'All Doctors', icon: <UserRound className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', slug: 'all' },
//     { name: 'Dentist', icon: <Stethoscope className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500', slug: 'dentist' },
//     { name: 'Cardiologist', icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500', slug: 'cardiologist' },
//     { name: 'Orthopedic', icon: <Bone className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', slug: 'orthopedic' },
//     { name: 'Otology', icon: <Ear className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500', slug: 'otology' },
//     { name: 'Eye Doctor', icon: <Eye className="w-5 h-5" />, color: 'from-amber-500 to-orange-500', slug: 'eyedoctor' },
//     { name: 'For You', icon: <TrendingUp className="w-5 h-5" />, color: 'from-pink-500 to-rose-500', slug: 'foryou' },
// ];
//
// function DoctorCard({ doctor }) {
//     const [isFavorite, setIsFavorite] = useState(false);
//
//     return (
//         <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
//             <div className="relative h-64 overflow-hidden">
//                 <img
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
//
//                 {/* Favorite Button */}
//                 <button
//                     onClick={() => setIsFavorite(!isFavorite)}
//                     className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
//                 >
//                     <Heart
//                         className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
//                     />
//                 </button>
//
//                 {/* Verified Badge */}
//                 <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
//                     <BadgeCheck className="w-3 h-3" />
//                     Verified
//                 </div>
//
//                 {/* Doctor Info Overlay */}
//                 <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
//                     <p className="text-sm text-blue-100 font-medium">{doctor.specialization}</p>
//                 </div>
//             </div>
//
//             <div className="p-6 space-y-4">
//                 {/* Rating & Stats */}
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 rounded-lg">
//                             <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                             <span className="text-sm font-bold text-gray-800">{doctor.rating}</span>
//                         </div>
//                         <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-600">
//                         <Users className="w-4 h-4" />
//                         <span className="text-sm font-medium">{doctor.patients}+</span>
//                     </div>
//                 </div>
//
//                 {/* Details */}
//                 <div className="space-y-2">
//                     <div className="flex items-center gap-2 text-gray-600">
//                         <Award className="w-4 h-4 text-blue-500" />
//                         <span className="text-sm">{doctor.experience} experience</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600">
//                         <MapPin className="w-4 h-4 text-blue-500" />
//                         <span className="text-sm truncate">{doctor.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600">
//                         <Clock className="w-4 h-4 text-green-500" />
//                         <span className="text-sm">{doctor.available}</span>
//                     </div>
//                 </div>
//
//                 {/* Price & Book Button */}
//                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                     <div>
//                         <span className="text-2xl font-bold text-gray-800">{doctor.price}</span>
//                         <span className="text-sm text-gray-500">/visit</span>
//                     </div>
//                     <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
//                         Book Now
//                         <ChevronRight className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// function Sidebar({ selectedCategory, onCategoryChange }) {
//     return (
//         <aside className="w-80 bg-white shadow-xl border-r border-gray-100 h-screen sticky top-20 overflow-y-auto">
//             <div className="p-6">
//                 {/* Header */}
//                 <div className="mb-8">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Specializations</h2>
//                     <p className="text-sm text-gray-500">Find the right specialist for you</p>
//                 </div>
//
//                 {/* Categories */}
//                 <nav className="space-y-2">
//                     {specializations.map((spec, index) => (
//                         <button
//                             key={index}
//                             onClick={() => onCategoryChange(spec.slug)}
//                             className={`w-full group flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
//                                 selectedCategory === spec.slug
//                                     ? 'bg-gradient-to-r ' + spec.color + ' text-white shadow-lg scale-105'
//                                     : 'hover:bg-gray-50 text-gray-700'
//                             }`}
//                         >
//                             <div className={`p-2 rounded-lg transition-all ${
//                                 selectedCategory === spec.slug
//                                     ? 'bg-white/20'
//                                     : 'bg-gray-100 group-hover:bg-gray-200'
//                             }`}>
//                                 {spec.icon}
//                             </div>
//                             <span className="font-semibold flex-1 text-left">{spec.name}</span>
//                             <ChevronRight className={`w-5 h-5 transition-transform ${
//                                 selectedCategory === spec.slug ? '' : 'text-gray-400 group-hover:translate-x-1'
//                             }`} />
//                         </button>
//                     ))}
//                 </nav>
//
//                 {/* Filter Section */}
//                 <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
//                     <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                         <Filter className="w-4 h-4" />
//                         Quick Filters
//                     </h3>
//                     <div className="space-y-2">
//                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                             <input type="checkbox" className="rounded border-gray-300" />
//                             Available Today
//                         </label>
//                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                             <input type="checkbox" className="rounded border-gray-300" />
//                             Top Rated (4.5+)
//                         </label>
//                         <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
//                             <input type="checkbox" className="rounded border-gray-300" />
//                             Accepting New Patients
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// }
//
// export default function ModernBookingPage() {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('all');
//     const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);
//
//     const handleSearch = (query) => {
//         setSearchQuery(query);
//         if (query.trim() === '') {
//             setFilteredDoctors(mockDoctors);
//         } else {
//             const filtered = mockDoctors.filter(doctor =>
//                 doctor.name.toLowerCase().includes(query.toLowerCase()) ||
//                 doctor.specialization.toLowerCase().includes(query.toLowerCase())
//             );
//             setFilteredDoctors(filtered);
//         }
//     };
//
//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category);
//         if (category === 'all' || category === 'foryou') {
//             setFilteredDoctors(mockDoctors);
//         } else {
//             const filtered = mockDoctors.filter(doctor =>
//                 doctor.specialization.toLowerCase() === category.toLowerCase()
//             );
//             setFilteredDoctors(filtered);
//         }
//     };
//
//     const categoryName = specializations.find(s => s.slug === selectedCategory)?.name || 'All Doctors';
//
//     return (
//         <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//             {/* Sidebar */}
//             <Sidebar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
//
//             {/* Main Content */}
//             <main className="flex-1 p-8">
//                 <div className="max-w-7xl mx-auto">
//                     {/* Header */}
//                     <div className="mb-8">
//                         <div className="flex items-center gap-3 mb-4">
//                             <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
//                                 <Calendar className="w-6 h-6 text-white" />
//                             </div>
//                             <div>
//                                 <h1 className="text-4xl font-bold text-gray-800">
//                                     Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Doctor</span>
//                                 </h1>
//                                 <p className="text-gray-600 mt-1">Browse through our qualified healthcare professionals</p>
//                             </div>
//                         </div>
//
//                         {/* Search Bar */}
//                         <div className="relative max-w-2xl">
//                             <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search by doctor name or specialization..."
//                                 value={searchQuery}
//                                 onChange={(e) => handleSearch(e.target.value)}
//                                 className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg bg-white"
//                             />
//                         </div>
//                     </div>
//
//                     {/* Category Title & Count */}
//                     <div className="flex items-center justify-between mb-6">
//                         <div>
//                             <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
//                             <p className="text-gray-500 mt-1">{filteredDoctors.length} doctors available</p>
//                         </div>
//                         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
//                             <Filter className="w-4 h-4" />
//                             <span className="font-medium">More Filters</span>
//                         </button>
//                     </div>
//
//                     {/* Doctors Grid */}
//                     {filteredDoctors.length > 0 ? (
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {filteredDoctors.map((doctor) => (
//                                 <DoctorCard key={doctor.id} doctor={doctor} />
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="text-center py-20">
//                             <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
//                                 <Search className="w-12 h-12 text-gray-400" />
//                             </div>
//                             <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
//                             <p className="text-gray-500">Try adjusting your search or filters</p>
//                         </div>
//                     )}
//
//                     {/* Load More */}
//                     {filteredDoctors.length > 0 && (
//                         <div className="text-center mt-12">
//                             <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
//                                 Load More Doctors
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }
'use client'
import React, { useState, useEffect } from 'react';
import {
    Search,
    Filter,
    Star,
    MapPin,
    Clock,
    Calendar,
    Heart,
    Stethoscope,
    Brain,
    Bone,
    Ear,
    Eye,
    UserRound,
    Users,
    Award,
    ChevronRight,
    BadgeCheck,
    TrendingUp,
    Phone,
    Video,
    MessageSquare,
    Shield,
    Sparkles,
    Zap,
    Crown,
    TrendingDown,
    CheckCircle,
    X,
    Sliders,
    Home,
    Navigation,
    DollarSign,
    ThumbsUp,
    Award as AwardIcon,
    Bookmark,
    Share2,
    ExternalLink,
    Battery,
    Wifi,
    BatteryCharging,
    Globe,
    Moon,
    Sun,
    Settings,
    Bell,
    Activity
} from 'lucide-react';
import Header from "@/app/Booking/Header.js";
// Mock data
const mockDoctors = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialization: 'Cardiologist',
        expertise: ['Heart Disease', 'Hypertension', 'Arrhythmia', 'Heart Failure'],
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
        rating: 4.9,
        reviews: 156,
        patients: 1200,
        experience: '15 years',
        location: 'New York Medical Center',
        distance: '2.3 miles',
        available: [
            { date: 'Today', time: '2:00 PM', type: 'in-person' },
            { date: 'Today', time: '4:30 PM', type: 'video' },
            { date: 'Tomorrow', time: '10:00 AM', type: 'in-person' },
        ],
        price: 150,
        insurance: ['Aetna', 'Blue Cross', 'UnitedHealth'],
        languages: ['English', 'Spanish', 'French'],
        availabilityScore: 95,
        responseTime: '15 min',
        verified: true,
        featured: true,
        awards: ['Best Cardiologist 2023', 'Top Doctor Award'],
        waitTime: '5 min'
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialization: 'Dentist',
        expertise: ['Cosmetic Dentistry', 'Implants', 'Orthodontics', 'Root Canal'],
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
        rating: 4.8,
        reviews: 132,
        patients: 980,
        experience: '12 years',
        location: 'Downtown Dental Clinic',
        distance: '1.5 miles',
        available: [
            { date: 'Today', time: '11:00 AM', type: 'in-person' },
            { date: 'Tomorrow', time: '9:00 AM', type: 'video' },
        ],
        price: 120,
        insurance: ['Cigna', 'Delta Dental', 'MetLife'],
        languages: ['English', 'Mandarin'],
        availabilityScore: 88,
        responseTime: '20 min',
        verified: true,
        featured: false,
        awards: ['Dental Excellence Award'],
        waitTime: '10 min'
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialization: 'Orthopedic',
        expertise: ['Sports Injury', 'Joint Replacement', 'Arthritis', 'Fracture Care'],
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
        rating: 4.9,
        reviews: 189,
        patients: 1100,
        experience: '18 years',
        location: 'City Orthopedic Hospital',
        distance: '3.1 miles',
        available: [
            { date: 'Today', time: '4:00 PM', type: 'in-person' },
            { date: 'Friday', time: '11:30 AM', type: 'video' },
        ],
        price: 180,
        insurance: ['Aetna', 'Blue Cross', 'Cigna', 'Medicare'],
        languages: ['English', 'Spanish'],
        availabilityScore: 92,
        responseTime: '10 min',
        verified: true,
        featured: true,
        awards: ['Orthopedic Surgeon of the Year'],
        waitTime: '15 min'
    },
    {
        id: 4,
        name: 'Dr. James Wilson',
        specialization: 'Otology',
        expertise: ['Hearing Loss', 'Tinnitus', 'Ear Infections', 'Balance Disorders'],
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
        rating: 4.7,
        reviews: 98,
        patients: 850,
        experience: '10 years',
        location: 'ENT Specialists Center',
        distance: '4.5 miles',
        available: [
            { date: 'Monday', time: '9:00 AM', type: 'in-person' },
            { date: 'Tuesday', time: '2:00 PM', type: 'video' },
        ],
        price: 140,
        insurance: ['UnitedHealth', 'Aetna'],
        languages: ['English'],
        availabilityScore: 85,
        responseTime: '25 min',
        verified: true,
        featured: false,
        awards: [],
        waitTime: '20 min'
    },
    {
        id: 5,
        name: 'Dr. Lisa Thompson',
        specialization: 'Dentist',
        expertise: ['Pediatric Dentistry', 'Preventive Care', 'Teeth Whitening'],
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        rating: 4.8,
        reviews: 145,
        patients: 920,
        experience: '14 years',
        location: 'Smile Dental Care',
        distance: '2.8 miles',
        available: [
            { date: 'Today', time: '1:00 PM', type: 'in-person' },
            { date: 'Today', time: '3:30 PM', type: 'video' },
        ],
        price: 130,
        insurance: ['Delta Dental', 'Cigna', 'Guardian'],
        languages: ['English', 'Arabic'],
        availabilityScore: 90,
        responseTime: '18 min',
        verified: true,
        featured: true,
        awards: ['Best Family Dentist'],
        waitTime: '8 min'
    },
    {
        id: 6,
        name: 'Dr. Robert Martinez',
        specialization: 'Cardiologist',
        expertise: ['Cardiac Surgery', 'Angioplasty', 'Heart Transplant', 'Preventive Cardiology'],
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
        rating: 4.9,
        reviews: 203,
        patients: 1350,
        experience: '20 years',
        location: 'Heart Health Institute',
        distance: '5.2 miles',
        available: [
            { date: 'Tomorrow', time: '3:00 PM', type: 'in-person' },
            { date: 'Thursday', time: '10:00 AM', type: 'video' },
        ],
        price: 200,
        insurance: ['Blue Cross', 'UnitedHealth', 'Medicare', 'Aetna'],
        languages: ['English', 'Spanish', 'Portuguese'],
        availabilityScore: 80,
        responseTime: '30 min',
        verified: true,
        featured: true,
        awards: ['Lifetime Achievement Award', 'Top Cardiologist 5 Years'],
        waitTime: '25 min'
    },
];

const specializations = [
    { name: 'All Doctors', icon: <UserRound className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', slug: 'all', count: mockDoctors.length },
    { name: 'Dentist', icon: <Stethoscope className="w-5 h-5" />, color: 'from-blue-500 to-indigo-500', slug: 'dentist', count: mockDoctors.filter(d => d.specialization === 'Dentist').length },
    { name: 'Cardiologist', icon: <Heart className="w-5 h-5" />, color: 'from-red-500 to-pink-500', slug: 'cardiologist', count: mockDoctors.filter(d => d.specialization === 'Cardiologist').length },
    { name: 'Orthopedic', icon: <Bone className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', slug: 'orthopedic', count: mockDoctors.filter(d => d.specialization === 'Orthopedic').length },
    { name: 'Otology', icon: <Ear className="w-5 h-5" />, color: 'from-purple-500 to-indigo-500', slug: 'otology', count: mockDoctors.filter(d => d.specialization === 'Otology').length },
    { name: 'Eye Doctor', icon: <Eye className="w-5 h-5" />, color: 'from-amber-500 to-orange-500', slug: 'eyedoctor', count: 0 },
    { name: 'For You', icon: <TrendingUp className="w-5 h-5" />, color: 'from-pink-500 to-rose-500', slug: 'foryou', count: 3 },
];




//  function DoctorCard({ doctor }) {
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [selectedTime, setSelectedTime] = useState(null);
//
//     // Booking Modal states
//     const [showBooking, setShowBooking] = useState(false);
//     const [selectedType, setSelectedType] = useState(null);
//     const [selectedSlot, setSelectedSlot] = useState(null);
//
//     // Handle final confirmation
//     const confirmBooking = () => {
//         alert(
//             `Booked ${selectedType} appointment
//              with ${doctor.name} on ${selectedSlot.date} at ${selectedSlot.time}`
//         );
//         setShowBooking(false);
//         setSelectedType(null);
//         setSelectedSlot(null);
//     };
//
//     return (
//         <>
//             {/* ------------------- MAIN CARD ------------------- */}
//             <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
//
//                 {/* Doctor Header */}
//                 <div className="relative h-64 overflow-hidden">
//                     <img
//                         src={doctor.image}
//                         alt={doctor.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
//
//                     {/* Top Badges */}
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
//                         {doctor.awards.length > 0 && (
//                             <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
//                                 <AwardIcon className="w-3 h-3" />
//                                 {doctor.awards.length} Awards
//                             </div>
//                         )}
//                     </div>
//
//                     {/* Action Buttons */}
//                     <div className="absolute top-4 right-4 flex flex-col gap-2">
//                         <button
//                             onClick={() => setIsFavorite(!isFavorite)}
//                             className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
//                         >
//                             <Heart
//                                 className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
//                             />
//                         </button>
//                         <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110">
//                             <Sparkles className="w-5 h-5 text-gray-600" />
//                         </button>
//                     </div>
//
//                     {/* Doctor Info Overlay */}
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
//
//                 {/* Doctor Details */}
//                 <div className="p-6 space-y-4">
//
//                     {/* Expertise Tags */}
//                     <div className="flex flex-wrap gap-2">
//                         {doctor.expertise.slice(0, 3).map((skill, idx) => (
//                             <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
//                                 {skill}
//                             </span>
//                         ))}
//                         {doctor.expertise.length > 3 && (
//                             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
//                                 +{doctor.expertise.length - 3} more
//                             </span>
//                         )}
//                     </div>
//
//                     {/* Stats Grid */}
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
//                         <div className="flex items-center gap-2">
//                             <Clock className="w-4 h-4 text-purple-500" />
//                             <div>
//                                 <div className="text-sm font-medium text-gray-800">{doctor.responseTime}</div>
//                                 <div className="text-xs text-gray-500">Response</div>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <Activity className="w-4 h-4 text-orange-500" />
//                             <div>
//                                 <div className="text-sm font-medium text-gray-800">{doctor.waitTime}</div>
//                                 <div className="text-xs text-gray-500">Wait Time</div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* Price & Book Button */}
//                     <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                         <div>
//                             <div className="text-2xl font-bold text-gray-800">${doctor.price}</div>
//                             <div className="text-xs text-gray-500">per consultation</div>
//                         </div>
//                         <div className="flex gap-2">
//                             <button
//                                 onClick={() => setShowBooking(true)}
//                                 className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
//                             >
//                                 Book Now
//                                 <ChevronRight className="w-4 h-4" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Footer */}
//                 <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">
//                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
//                         <ExternalLink className="w-4 h-4" /> Profile
//                     </button>
//                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
//                         <Share2 className="w-4 h-4" /> Share
//                     </button>
//                     <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
//                         <Bookmark className="w-4 h-4" /> Save
//                     </button>
//                 </div>
//             </div>
//
//             {/* ------------------- BOOKING MODAL ------------------- */}
//             {showBooking && (
//                 <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
//                     <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fadeIn">
//
//                         {/* Modal Header */}
//                         <div className="flex justify-between items-center mb-4">
//                             <h2 className="text-xl font-bold text-gray-800">
//                                 Book Appointment with {doctor.name}
//                             </h2>
//                             <button onClick={() => setShowBooking(false)}>
//                                 <X className="w-6 h-6 text-gray-600 hover:text-red-600" />
//                             </button>
//                         </div>
//
//                         {/* Appointment Type */}
//                         <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Appointment Type</h3>
//                         <div className="flex gap-3 mb-6">
//                             <button
//                                 onClick={() => setSelectedType("video")}
//                                 className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition
//                                     ${selectedType === "video" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                             >
//                                 <Video className="w-4 h-4" /> Video
//                             </button>
//
//                             <button
//                                 onClick={() => setSelectedType("in-person")}
//                                 className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition
//                                     ${selectedType === "in-person" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                             >
//                                 <Home className="w-4 h-4" /> In-person
//                             </button>
//                         </div>
//
//                         {/* Time Selection */}
//                         <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Time</h3>
//                         <div className="grid grid-cols-1 gap-3 max-h-40 overflow-y-auto">
//                             {doctor.available
//                                 .filter(s => !selectedType || s.type === selectedType)
//                                 .map((slot, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setSelectedSlot(slot)}
//                                         className={`flex items-center justify-between border rounded-xl py-3 px-4 transition
//                                             ${selectedSlot === slot ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
//                                     >
//                                         <div className="flex items-center gap-2">
//                                             <Calendar className="w-4 h-4" />
//                                             {slot.date} - {slot.time}
//                                         </div>
//                                         <span className="capitalize text-xs opacity-80">{slot.type}</span>
//                                     </button>
//                                 ))}
//                         </div>
//
//                         {/* Confirm */}
//                         <button
//                             disabled={!selectedType || !selectedSlot}
//                             onClick={confirmBooking}
//                             className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
//                                 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
//                         >
//                             Confirm Booking
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
import DoctorCard from "@/components/newcomponents/booking/DoctorCard.jsx";

function Sidebar({ selectedCategory, onCategoryChange, filters, onFilterChange }) {
    const [darkMode, setDarkMode] = useState(false);

    const insuranceOptions = ['Aetna', 'Blue Cross', 'Cigna', 'UnitedHealth', 'Medicare', 'Delta Dental'];
    const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Arabic'];
    const experienceOptions = [
        { label: '5+ years', value: 5 },
        { label: '10+ years', value: 10 },
        { label: '15+ years', value: 15 },
    ];

    return (
        <aside className="w-80 bg-white shadow-xl border-r border-gray-100 h-screen sticky top-0 overflow-y-auto">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-800">Find Doctors</h1>
                                <p className="text-sm text-gray-500">Book appointments easily</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Search Stats */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Active Filters</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {Object.values(filters).flat().length} active
                        </span>
                    </div>
                    <div className="text-sm text-gray-600">
                        Showing {mockDoctors.length} doctors in your area
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <Stethoscope className="w-5 h-5" />
                        Specializations
                    </h2>
                    <nav className="space-y-2">
                        {specializations.map((spec, index) => (
                            <button
                                key={index}
                                onClick={() => onCategoryChange(spec.slug)}
                                className={`w-full group flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                                    selectedCategory === spec.slug
                                        ? 'bg-gradient-to-r ' + spec.color + ' text-white shadow-lg'
                                        : 'hover:bg-gray-50 text-gray-700'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-lg ${
                                        selectedCategory === spec.slug
                                            ? 'bg-white/20'
                                            : 'bg-gray-100 group-hover:bg-gray-200'
                                    }`}>
                                        {spec.icon}
                                    </div>
                                    <span className="font-medium">{spec.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-1 rounded-full ${
                                        selectedCategory === spec.slug
                                            ? 'bg-white/30'
                                            : 'bg-gray-100 text-gray-600'
                                    }`}>
                                        {spec.count}
                                    </span>
                                    <ChevronRight className={`w-4 h-4 ${
                                        selectedCategory === spec.slug ? '' : 'text-gray-400 group-hover:translate-x-1'
                                    }`} />
                                </div>
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Advanced Filters */}
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </h3>

                        {/* Experience */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                            <div className="space-y-2">
                                {experienceOptions.map(exp => (
                                    <label key={exp.value} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                        <input
                                            type="checkbox"
                                            checked={filters.experience.includes(exp.value)}
                                            onChange={(e) => onFilterChange('experience', exp.value, e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        {exp.label}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                            <div className="flex items-center gap-2">
                                {[4, 4.5, 5].map(rating => (
                                    <button
                                        key={rating}
                                        onClick={() => onFilterChange('rating', rating)}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                                            filters.rating === rating
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        <Star className="w-3 h-3" />
                                        {rating}+
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={filters.availableToday}
                                        onChange={(e) => onFilterChange('availableToday', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    Available Today
                                </label>
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                    <input
                                        type="checkbox"
                                        checked={filters.videoAvailable}
                                        onChange={(e) => onFilterChange('videoAvailable', e.target.checked)}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    Video Consultation
                                </label>
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
                            <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                                {insuranceOptions.map(insurance => (
                                    <label key={insurance} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-800">
                                        <input
                                            type="checkbox"
                                            checked={filters.insurance.includes(insurance)}
                                            onChange={(e) => onFilterChange('insurance', insurance, e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        {insurance}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                            </label>
                            <div className="space-y-2">
                                <input
                                    type="range"
                                    min="50"
                                    max="300"
                                    step="10"
                                    value={filters.priceRange[1]}
                                    onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>$50</span>
                                    <span>$300</span>
                                </div>
                            </div>
                        </div>

                        {/* Clear Filters */}
                        {Object.values(filters).some(arr => Array.isArray(arr) ? arr.length > 0 : arr)} && (
                        <button
                            onClick={() => onFilterChange('clear')}
                            className="w-full mt-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            Clear All Filters
                        </button>
                        )
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default function ModernBookingPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);
    const [showFilters, setShowFilters] = useState(false);
    const [bookDoctor, setBookDoctor] = useState(null);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

    const [filters, setFilters] = useState({
        experience: [],
        rating: 0,
        availableToday: false,
        videoAvailable: false,
        insurance: [],
        priceRange: [50, 300],
        languages: []
    });

    // Handle search
    const handleSearch = (query) => {
        setSearchQuery(query);
        applyFilters(query);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'all' || category === 'foryou') {
            applyFilters(searchQuery);
        } else {
            const filtered = mockDoctors.filter(doctor =>
                doctor.specialization.toLowerCase() === category.toLowerCase()
            );
            setFilteredDoctors(filtered);
        }
    };

    // Handle filter changes
    const handleFilterChange = (type, value, checked) => {
        const newFilters = { ...filters };

        switch (type) {
            case 'experience':
                if (checked) {
                    newFilters.experience = [...newFilters.experience, value];
                } else {
                    newFilters.experience = newFilters.experience.filter(v => v !== value);
                }
                break;
            case 'rating':
                newFilters.rating = value;
                break;
            case 'availableToday':
                newFilters.availableToday = value;
                break;
            case 'videoAvailable':
                newFilters.videoAvailable = value;
                break;
            case 'insurance':
                if (checked) {
                    newFilters.insurance = [...newFilters.insurance, value];
                } else {
                    newFilters.insurance = newFilters.insurance.filter(v => v !== value);
                }
                break;
            case 'priceRange':
                newFilters.priceRange = value;
                break;
            case 'clear':
                newFilters.experience = [];
                newFilters.rating = 0;
                newFilters.availableToday = false;
                newFilters.videoAvailable = false;
                newFilters.insurance = [];
                newFilters.priceRange = [50, 300];
                newFilters.languages = [];
                break;
            default:
                break;
        }

        setFilters(newFilters);
        applyFilters(searchQuery, newFilters);
    };

    // Apply all filters
    const applyFilters = (query, filterState = filters) => {
        let result = mockDoctors;

        // Text search
        if (query.trim() !== '') {
            result = result.filter(doctor =>
                doctor.name.toLowerCase().includes(query.toLowerCase()) ||
                doctor.specialization.toLowerCase().includes(query.toLowerCase()) ||
                doctor.expertise.some(e => e.toLowerCase().includes(query.toLowerCase()))
            );
        }

        // Category filter
        if (selectedCategory !== 'all' && selectedCategory !== 'foryou') {
            result = result.filter(doctor =>
                doctor.specialization.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Experience filter
        if (filterState.experience.length > 0) {
            result = result.filter(doctor => {
                const expYears = parseInt(doctor.experience);
                return filterState.experience.some(minExp => expYears >= minExp);
            });
        }

        // Rating filter
        if (filterState.rating > 0) {
            result = result.filter(doctor => doctor.rating >= filterState.rating);
        }

        // Availability filters
        if (filterState.availableToday) {
            result = result.filter(doctor =>
                doctor.available.some(slot => slot.date === 'Today')
            );
        }

        if (filterState.videoAvailable) {
            result = result.filter(doctor =>
                doctor.available.some(slot => slot.type === 'video')
            );
        }

        // Insurance filter
        if (filterState.insurance.length > 0) {
            result = result.filter(doctor =>
                filterState.insurance.some(ins => doctor.insurance.includes(ins))
            );
        }

        // Price filter
        result = result.filter(doctor =>
            doctor.price >= filterState.priceRange[0] &&
            doctor.price <= filterState.priceRange[1]
        );

        setFilteredDoctors(result);
    };

    // Handle booking
    const handleBookDoctor = (doctor) => {
        setBookDoctor(doctor);
        // You can add modal or navigation logic here
        alert(`Booking appointment with ${doctor.name}`);
    };

    const categoryName = specializations.find(s => s.slug === selectedCategory)?.name || 'All Doctors';

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Sidebar */}
            <Sidebar
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                filters={filters}
                onFilterChange={handleFilterChange}
            />

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-8">
                <div className="max-w-7xl mx-auto">

                    <Header searchQuery={searchQuery} handleSearch={handleSearch} setViewMode={setViewMode} setShowFilters={setShowFilters} showFilters={showFilters} filteredDoctors={filteredDoctors} categoryName={categoryName} mockDoctors={mockDoctors} viewMode={viewMode} />

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
                            <p className="text-gray-500 mt-1">
                                {filteredDoctors.length} doctors found •
                                <span className="text-green-600 ml-2">Sort by: Recommended</span>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="text-sm text-gray-600">
                                <TrendingUp className="w-4 h-4 inline mr-1" />
                                <span>Top picks for you</span>
                            </div>
                            <button className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-xl hover:bg-blue-100 transition-colors">
                                Sort
                            </button>
                        </div>
                    </div>

                    {/* Doctors Grid/List */}
                    {filteredDoctors.length > 0 ? (
                        <div className={`${
                            viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                                : 'space-y-6'
                        }`}>
                            {filteredDoctors.map((doctor) => (
                                <DoctorCard
                                    key={doctor.id}
                                    doctor={doctor}
                                    onBook={handleBookDoctor}
                                    viewMode={viewMode}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
                            <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mb-4">
                                <Search className="w-12 h-12 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No matching doctors found</h3>
                            <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you're looking for</p>
                            <button
                                onClick={() => {
                                    handleSearch('');
                                    handleFilterChange('clear');
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}

                    {/* Load More & Pagination */}
                    {filteredDoctors.length > 0 && (
                        <div className="mt-12">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <div className="text-sm text-gray-500">
                                    Showing 1-{Math.min(filteredDoctors.length, 6)} of {filteredDoctors.length} doctors
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                        Previous
                                    </button>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                                        1
                                    </button>
                                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                        2
                                    </button>
                                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Quick Booking Modal */}
            {bookDoctor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-800">Confirm Appointment</h3>
                            <button
                                onClick={() => setBookDoctor(null)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                                <img src={bookDoctor.image} alt={bookDoctor.name} className="w-16 h-16 rounded-xl object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-800">{bookDoctor.name}</h4>
                                    <p className="text-sm text-gray-600">{bookDoctor.specialization}</p>
                                </div>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                                Confirm Booking for ${bookDoctor.price}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Action Button */}
            <button className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110">
                <Calendar className="w-6 h-6" />
            </button>
        </div>
    );
}