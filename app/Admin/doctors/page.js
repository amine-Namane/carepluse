'use client'
import React, { useState } from 'react';
import {
    Search,
    Filter,
    Download,
    Plus,
    Eye,
    Edit,
    Trash2,
    MoreVertical,
    ChevronDown,
    Calendar,
    Phone,
    Mail,
    MapPin,
    Stethoscope,
    Award,
    Users,
    CheckCircle,
    XCircle,
    Clock,
    RefreshCw,
    ArrowUpDown,
    Star,
    DollarSign,
    Shield,
    AlertCircle
} from 'lucide-react';

const AdminDoctorsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [loading, setLoading] = useState(false);
    const [selectedDoctors, setSelectedDoctors] = useState([]);

    // Mock doctors data
    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            email: "sarah.johnson@hospital.com",
            phone: "+213 561 234 567",
            specialty: "Cardiology",
            experience: "15 years",
            education: "MD in Cardiology",
            hospital: "Algiers Central Hospital",
            consultationFee: "3000 DZD",
            rating: 4.9,
            totalPatients: 245,
            totalAppointments: 1200,
            joinDate: "2020-01-15",
            status: "Active",
            verified: true,
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100"
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            email: "michael.chen@hospital.com",
            phone: "+213 562 345 678",
            specialty: "Dentist",
            experience: "12 years",
            education: "DDS",
            hospital: "Oran Dental Center",
            consultationFee: "2500 DZD",
            rating: 4.8,
            totalPatients: 198,
            totalAppointments: 950,
            joinDate: "2020-03-20",
            status: "Active",
            verified: true,
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100"
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            email: "emily.rodriguez@hospital.com",
            phone: "+213 563 456 789",
            specialty: "Orthopedic",
            experience: "18 years",
            education: "MD in Orthopedics",
            hospital: "Constantine Medical Center",
            consultationFee: "3500 DZD",
            rating: 4.9,
            totalPatients: 167,
            totalAppointments: 850,
            joinDate: "2019-06-10",
            status: "Active",
            verified: true,
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100"
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            email: "james.wilson@hospital.com",
            phone: "+213 564 567 890",
            specialty: "Otology",
            experience: "10 years",
            education: "MD in ENT",
            hospital: "Blida ENT Clinic",
            consultationFee: "2800 DZD",
            rating: 4.7,
            totalPatients: 134,
            totalAppointments: 680,
            joinDate: "2021-02-15",
            status: "Inactive",
            verified: true,
            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100"
        },
        {
            id: 5,
            name: "Dr. Lisa Thompson",
            email: "lisa.thompson@hospital.com",
            phone: "+213 565 678 901",
            specialty: "Dentist",
            experience: "14 years",
            education: "DDS",
            hospital: "Annaba Dental Care",
            consultationFee: "2600 DZD",
            rating: 4.8,
            totalPatients: 189,
            totalAppointments: 920,
            joinDate: "2020-08-22",
            status: "Active",
            verified: true,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"
        },
        {
            id: 6,
            name: "Dr. Ahmed Mansour",
            email: "ahmed.mansour@hospital.com",
            phone: "+213 566 789 012",
            specialty: "Neurology",
            experience: "8 years",
            education: "MD in Neurology",
            hospital: "Tlemcen Medical Center",
            consultationFee: "3200 DZD",
            rating: 0,
            totalPatients: 0,
            totalAppointments: 0,
            joinDate: "2024-03-15",
            status: "Pending",
            verified: false,
            image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100"
        }
    ];

    const stats = [
        { label: "Total Doctors", value: doctors.length, icon: <Stethoscope className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
        { label: "Active Doctors", value: doctors.filter(d => d.status === "Active").length, icon: <CheckCircle className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
        { label: "Pending Approval", value: doctors.filter(d => d.status === "Pending").length, icon: <Clock className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
        { label: "Verified Doctors", value: doctors.filter(d => d.verified).length, icon: <Shield className="w-5 h-5" />, color: "from-purple-500 to-pink-500" }
    ];

    const specialties = ['All Specialties', 'Cardiology', 'Dentist', 'Orthopedic', 'Otology', 'Neurology'];

    const getStatusBadge = (status) => {
        const colors = {
            Active: 'bg-green-100 text-green-700 border-green-200',
            Inactive: 'bg-gray-100 text-gray-700 border-gray-200',
            Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200'
        };
        return colors[status] || colors.Inactive;
    };

    const handleSelectDoctor = (id) => {
        setSelectedDoctors(prev =>
            prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedDoctors.length === doctors.length) {
            setSelectedDoctors([]);
        } else {
            setSelectedDoctors(doctors.map(d => d.id));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Doctors Management</h1>
                            <p className="text-lg text-gray-600">Manage and approve medical professionals</p>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Export
                            </button>
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                Add Doctor
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

                {/* Filters and Search */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, email, or specialty..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            />
                        </div>

                        <div className="flex gap-3">
                            <div className="relative">
                                <select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="appearance-none px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white font-medium cursor-pointer"
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={specialtyFilter}
                                    onChange={(e) => setSpecialtyFilter(e.target.value)}
                                    className="appearance-none px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white font-medium cursor-pointer"
                                >
                                    {specialties.map((spec, idx) => (
                                        <option key={idx} value={spec.toLowerCase().replace(' ', '-')}>{spec}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            <button
                                onClick={() => setLoading(!loading)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bulk Actions */}
                {selectedDoctors.length > 0 && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6 flex items-center justify-between">
                        <p className="text-blue-800 font-semibold">
                            {selectedDoctors.length} doctor{selectedDoctors.length > 1 ? 's' : ''} selected
                        </p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors">
                                Export Selected
                            </button>
                            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">
                                Delete Selected
                            </button>
                        </div>
                    </div>
                )}

                {/* Doctors Table */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left">
                                    <input
                                        type="checkbox"
                                        checked={selectedDoctors.length === doctors.length}
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                                    <button className="flex items-center gap-2 hover:text-blue-600">
                                        Doctor
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Specialty & Experience</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Performance</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Fee & Rating</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Actions</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                // Loading Skeleton
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                                                    <div className="h-3 w-40 bg-gray-200 rounded animate-pulse"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="h-3 w-28 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-3 w-28 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-7 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center gap-2">
                                                <div className="h-8 w-8 bg-gray-200 rounded-lg animate-pulse"></div>
                                                <div className="h-8 w-8 bg-gray-200 rounded-lg animate-pulse"></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                // Actual Data
                                doctors.map((doctor) => (
                                    <tr key={doctor.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedDoctors.includes(doctor.id)}
                                                onChange={() => handleSelectDoctor(doctor.id)}
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="relative">
                                                    <img
                                                        src={doctor.image}
                                                        alt={doctor.name}
                                                        className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500"
                                                    />
                                                    {doctor.verified && (
                                                        <div className="absolute -bottom-1 -right-1 p-1 bg-blue-500 rounded-full">
                                                            <Shield className="w-3 h-3 text-white" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-800">{doctor.name}</p>
                                                    <p className="text-sm text-gray-500">{doctor.email}</p>
                                                    <p className="text-xs text-gray-400">{doctor.hospital}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <Stethoscope className="w-4 h-4 text-purple-500" />
                                                    <span className="font-medium text-gray-700">{doctor.specialty}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Award className="w-4 h-4 text-orange-500" />
                                                    <span>{doctor.experience}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <Users className="w-4 h-4 text-blue-500" />
                                                    <span>{doctor.totalPatients} patients</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Calendar className="w-4 h-4 text-green-500" />
                                                    <span>{doctor.totalAppointments} appointments</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                    <DollarSign className="w-4 h-4 text-green-500" />
                                                    <span>{doctor.consultationFee}</span>
                                                </div>
                                                {doctor.rating > 0 ? (
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-xs text-gray-400">No rating</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-2">
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border-2 ${getStatusBadge(doctor.status)}`}>
                            {doctor.status}
                          </span>
                                                {doctor.status === 'Pending' && (
                                                    <span className="text-xs text-orange-600 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              Needs Approval
                            </span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {doctor.status === 'Pending' ? (
                                                <div className="flex justify-center gap-2">
                                                    <button className="px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm flex items-center gap-1 transition-colors">
                                                        <CheckCircle className="w-4 h-4" />
                                                        Approve
                                                    </button>
                                                    <button className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium text-sm flex items-center gap-1 transition-colors">
                                                        <XCircle className="w-4 h-4" />
                                                        Reject
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="View Details">
                                                        <Eye className="w-5 h-5" />
                                                    </button>
                                                    <button className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors" title="Edit">
                                                        <Edit className="w-5 h-5" />
                                                    </button>
                                                    <button className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Delete">
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                    <button className="p-2 text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                                        <MoreVertical className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                Showing <span className="font-semibold">1-{doctors.length}</span> of <span className="font-semibold">{doctors.length}</span> doctors
                            </p>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-white transition-colors font-medium text-gray-700">
                                    Previous
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
        </div>
    );
};

export default AdminDoctorsPage;