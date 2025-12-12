// import Doctorlist from '@/components/ui/Listeofdoctors'
// import { notFound } from 'next/navigation'

// const validSpecialties = ['otology', 'cardiology', 'neurology']

// export default function Page({ params }) {
//   return (
//     <Doctorlist doctortype={params.recordtype 
//       ? params.recordtype.charAt(0).toUpperCase() + params.recordtype.slice(1)
//       : ""} />
//   )
// }
// "use client";
// import Doctorlist from "@/components/Listeofdoctors";
// import { supabase } from "@/lib/supabaseclient";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, use } from "react";
//
// export default function DoctorsPage({ params: paramsPromise }) {
//   const router = useRouter();
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);
//
//   // Unwrap params using use()
//   const params = use(paramsPromise);
//
//   useEffect(() => {
//     async function fetchData() {
//       const { data: { user } } = await supabase.auth.getUser();
//
//       if (!user) {
//         router.push("/Patient"); // Redirect if not logged in
//         return;
//       }
//
//       // Fetch doctors data
//       const { data: doctors, error } = await supabase.from("doctor").select("*");
//       if (error) {
//         console.error("Error fetching doctors:", error);
//       } else {
//         setDoctors(doctors);
//       }
//
//       setLoading(false);
//     }
//
//     fetchData();
//   }, [router]);
//
//   if (loading) return <p>Loading doctors...</p>;
//
//   return (
//     <Doctorlist
//       doctortype={params?.recordtype ? params.recordtype.charAt(0).toUpperCase() + params.recordtype.slice(1) : ""}
//       doctors={doctors}
//     />
//   );
// }
'use client'

import React, { useState, useEffect } from "react";
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
import Sidebar from "@/components/newcomponents/booking/Sidebar.jsx";
import DoctorCard from "@/components/newcomponents/booking/DoctorCard.jsx";
import Header from "@/app/Booking/Header.js";
import { useParams } from "next/navigation";

// Import the mockDoctors data (your long array)

export default function DoctorsBySlugPage() {
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
  const params = useParams();
  const slug = params.slug; // dentist, cardiologist, etc.

  const [selectedCategory, setSelectedCategory] = useState(slug || "all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);
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
  const handleBookDoctor = (doctor) => {
    setBookDoctor(doctor);
    // You can add modal or navigation logic here
    alert(`Booking appointment with ${doctor.name}`);
  };
  useEffect(() => {
    applyFilters(searchQuery, selectedCategory, filters);
  }, [selectedCategory, searchQuery, filters]);

  // -----------------------------
  // FILTERING LOGIC
  // -----------------------------
  const applyFilters = (query, category, filters) => {
    let results = [...mockDoctors];

    if (category !== "all") {
      results = results.filter(doc =>
          doc.specialization.toLowerCase() === category.toLowerCase()
      );
    }

    if (query.trim() !== "") {
      results = results.filter(doc =>
          doc.name.toLowerCase().includes(query.toLowerCase()) ||
          doc.specialization.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters.rating > 0) {
      results = results.filter(doc => doc.rating >= filters.rating);
    }

    if (filters.experience.length > 0) {
      results = results.filter(doc => {
        const years = parseInt(doc.experience);
        return filters.experience.some(exp => years >= exp);
      });
    }

    if (filters.availableToday) {
      results = results.filter(doc =>
          doc.available.some(a => a.date.toLowerCase() === "today")
      );
    }

    if (filters.videoAvailable) {
      results = results.filter(doc =>
          doc.available.some(a => a.type === "video")
      );
    }

    if (filters.insurance.length > 0) {
      results = results.filter(doc =>
          filters.insurance.some(i => doc.insurance.includes(i))
      );
    }

    results = results.filter(
        doc =>
            doc.price >= filters.priceRange[0] &&
            doc.price <= filters.priceRange[1]
    );

    setFilteredDoctors(results);
  };

  // -----------------------------
  // FILTER HANDLER
  // -----------------------------
  const handleFilterChange = (type, value, checked) => {
    setFilters(prev => {
      if (type === "clear") {
        return {
          experience: [],
          rating: 0,
          availableToday: false,
          videoAvailable: false,
          insurance: [],
          priceRange: [50, 300],
          languages: []
        };
      }

      if (Array.isArray(prev[type])) {
        if (checked) {
          return { ...prev, [type]: [...prev[type], value] };
        } else {
          return {
            ...prev,
            [type]: prev[type].filter(v => v !== value)
          };
        }
      }

      return { ...prev, [type]: value };
    });
  };

  const [showFilters, setShowFilters] = useState(false);



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




  //
  //   // Category filter
  //   if (selectedCategory !== 'all' && selectedCategory !== 'foryou') {
  //     result = result.filter(doctor =>
  //         doctor.specialization.toLowerCase() === selectedCategory.toLowerCase()
  //     );
  //   }
  //
  //   // Experience filter
  //   if (filterState.experience.length > 0) {
  //     result = result.filter(doctor => {
  //       const expYears = parseInt(doctor.experience);
  //       return filterState.experience.some(minExp => expYears >= minExp);
  //     });
  //   }
  //
  //   // Rating filter
  //   if (filterState.rating > 0) {
  //     result = result.filter(doctor => doctor.rating >= filterState.rating);
  //   }
  //
  //   // Availability filters
  //   if (filterState.availableToday) {
  //     result = result.filter(doctor =>
  //         doctor.available.some(slot => slot.date === 'Today')
  //     );
  //   }
  //
  //   if (filterState.videoAvailable) {
  //     result = result.filter(doctor =>
  //         doctor.available.some(slot => slot.type === 'video')
  //     );
  //   }
  //
  //   // Insurance filter
  //   if (filterState.insurance.length > 0) {
  //     result = result.filter(doctor =>
  //         filterState.insurance.some(ins => doctor.insurance.includes(ins))
  //     );
  //   }
  //
  //   // Price filter
  //   result = result.filter(doctor =>
  //       doctor.price >= filterState.priceRange[0] &&
  //       doctor.price <= filterState.priceRange[1]
  //   );
  //
  //   setFilteredDoctors(result);
  // };



  const categoryName = specializations.find(s => s.slug === selectedCategory)?.name || 'All Doctors';

  return (
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
            mockDoctors={mockDoctors}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            filters={filters}
            onFilterChange={handleFilterChange}
            specializations={specializations}
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Header searchQuery={searchQuery}             onFilterChange={handleFilterChange}
                  handleSearch={handleSearch} setViewMode={setViewMode} setShowFilters={setShowFilters} showFilters={showFilters} filteredDoctors={filteredDoctors} categoryName={categoryName} mockDoctors={mockDoctors} viewMode={viewMode} f filters={filters}
          />

          <h1 className="text-3xl font-bold capitalize mb-6">
            {selectedCategory === "all"
                ? "All Doctors"
                : selectedCategory.replace("-", " ")}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    onBook={handleBookDoctor}
                    viewMode={viewMode}
                />
            ))}
          </div>
        </main>
      </div>
  );
}


 