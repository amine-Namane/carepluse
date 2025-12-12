// import Custemsidebar from "@/components/ui/types";
// import DynamicDoctorDashboard from '@/components/doctor-dashboard'
//  import Sidebar from "@/components/newcomponents/booking/Sidebar.jsx";
// // import React, {useState} from "react";
// import {Bone, Ear, Eye, Heart, Stethoscope, TrendingUp, UserRound} from "lucide-react";
// export default function BookLayout({ children }) {
//
//     return(
//
//     <section>
//     <section className="flex min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//         {/*<Custemsidebar />*/}
//         <main className="flex p-6" >
//         {children}
//       </main>
//
//     </section>
//
//
//     {/* <section>{children}</section> */}
//     </section>
//     )
//   }
'use client'
import React, { useState } from 'react';
import Sidebar from '@/components/newcomponents/booking/Sidebar.jsx';
import BookingHeader from '@/components/newcomponents/booking/BookingHeader';
import FilterModal from '@/components/newcomponents/booking/FilterModal';
import {Bone, Ear, Eye, Heart, Stethoscope, TrendingUp, UserRound} from "lucide-react";

// Default filters
const defaultFilters = {
    experience: [],
    rating: 0,
    availableToday: false,
    videoAvailable: false,
    insurance: [],
    priceRange: [50, 300],
    languages: []
};
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
    }
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
export default function BookingLayout({
                                          children,
                                          onCategoryChange = () => {},
                                          searchQuery = '',
                                          setSearchQuery = () => {},
                                          onSearch = () => {},
                                          viewMode = 'grid',
                                          setViewMode = () => {},
                                          onFilterChange = () => {}
                                      }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);
    const [filters, setFilters] = useState({
        experience: [],
        rating: 0,
        availableToday: false,
        videoAvailable: false,
        insurance: [],
        priceRange: [50, 300],
        languages: []
    });
    // Ensure filters is always an object
    const safeFilters = filters || defaultFilters;

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
        }}
    return (
        <div className=" flex bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Desktop Sidebar */}
            {/*    <Sidebar*/}
            {/*        selectedCategory={selectedCategory}*/}
            {/*        onCategoryChange={handleCategoryChange}*/}
            {/*        filters={filters}*/}
            {/*        onFilterChange={handleFilterChange}*/}
            {/*        mockDoctors={mockDoctors}*/}
            {/*        specializations={specializations}*/}
            {/*    />*/}
                         <main className=" p-6" >
                        {children}
                     </main>
        </div>
    )
}