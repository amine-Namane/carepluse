// data/specializations.jsx
import React from 'react';
import {
    UserRound,
    Stethoscope,
    Heart,
    Bone,
    Ear,
    Eye,
    TrendingUp,
} from 'lucide-react';
import { mockDoctors } from './doctors';


// Case-insensitive count so it works whether doctors.specialization
// is 'Cardiologist' or 'cardiologist'
const count = (slug) =>
    slug === 'all'
        ? mockDoctors.length
        : mockDoctors.filter(
              (d) => d.specialization.toLowerCase() === slug.toLowerCase()
          ).length;

export const specializations = [
    {
        name: 'All Doctors',
        slug: 'all',
        icon: <UserRound className="w-5 h-5" />,
        color: 'from-blue-500 to-cyan-500',
        href: '/Booking',
    },
    {
        name: 'Dentist',
        slug: 'dentist',
        icon: <Stethoscope className="w-5 h-5" />,
        color: 'from-blue-500 to-indigo-500',
        href: '/Booking/dentist',
    },
    {
        name: 'Cardiologist',
        slug: 'cardiologist',
        icon: <Heart className="w-5 h-5" />,
        color: 'from-red-500 to-pink-500',
        href: '/Booking/cardiologist',
    },
    {
        name: 'Orthopedic',
        slug: 'orthopedic',
        icon: <Bone className="w-5 h-5" />,
        color: 'from-green-500 to-emerald-500',
        href: '/Booking/orthopedic',
    },
    {
        name: 'Otology',
        slug: 'otology',
        icon: <Ear className="w-5 h-5" />,
        color: 'from-purple-500 to-indigo-500',
        href: '/Booking/otology',
    },
    {
        name: 'Eye Doctor',
        slug: 'eyedoctor',
        icon: <Eye className="w-5 h-5" />,
        color: 'from-amber-500 to-orange-500',
        href: '/Booking/eyedoctor',
    },
    {
        name: 'For You',
        slug: 'foryou',
        icon: <TrendingUp className="w-5 h-5" />,
        color: 'from-pink-500 to-rose-500',
        href: '/Booking/foryou',
    },
];