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
    Clock,
    User,
    Stethoscope,
    CheckCircle,
    XCircle,
    AlertCircle,
    RefreshCw,
    ArrowUpDown,
    MapPin,
    DollarSign,
    FileText,
    Phone
} from 'lucide-react';

const AdminAppointmentsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');
    const [loading, setLoading] = useState(false);
    const [selectedAppointments, setSelectedAppointments] = useState([]);

    // Mock appointments data
    const appointments = [
        {
            id: 1,
            appointmentId: "APT-2024-001",
            patientName: "Ahmed Hassan",
            patientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
            patientPhone: "+213 562 645 998",
            doctorName: "Dr. Sarah Johnson",
            doctorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100",
            specialty: "Cardiology",
            date: "2024-03-20",
            time: "09:00 AM",
            duration: "30 min",
            reason: "Regular Checkup",
            status: "Confirmed",
            location: "Algiers Central Hospital",
            fee: "3000 DZD",
            paymentStatus: "Paid"
        },
        {
            id: 2,
            appointmentId: "APT-2024-002",
            patientName: "Sara Ahmed",
            patientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
            patientPhone: "+213 551 234 567",
            doctorName: "Dr. Michael Chen",
            doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100",
            specialty: "Dentist",
            date: "2024-03-20",
            time: "10:30 AM",
            duration: "45 min",
            reason: "Dental Cleaning",
            status: "Pending",
            location: "Oran Dental Center",
            fee: "2500 DZD",
            paymentStatus: "Pending"
        },
        {
            id: 3,
            appointmentId: "APT-2024-003",
            patientName: "Mohamed Ali",
            patientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
            patientPhone: "+213 569 876 543",
            doctorName: "Dr. Emily Rodriguez",
            doctorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100",
            specialty: "Orthopedic",
            date: "2024-03-21",
            time: "11:00 AM",
            duration: "60 min",
            reason: "Knee Pain Consultation",
            status: "Confirmed",
            location: "Constantine Medical Center",
            fee: "3500 DZD",
            paymentStatus: "Paid"
        },
        {
            id: 4,
            appointmentId: "APT-2024-004",
            patientName: "Fatima Ibrahim",
            patientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
            patientPhone: "+213 543 216 789",
            doctorName: "Dr. James Wilson",
            doctorImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100",
            specialty: "Otology",
            date: "2024-03-21",
            time: "02:00 PM",
            duration: "30 min",
            reason: "Ear Infection Follow-up",
            status: "Cancelled",
            location: "Blida ENT Clinic",
            fee: "2800 DZD",
            paymentStatus: "Refunded"
        },
        {
            id: 5,
            appointmentId: "APT-2024-005",
            patientName: "Karim Rashid",
            patientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
            patientPhone: "+213 598 765 432",
            doctorName: "Dr. Lisa Thompson",
            doctorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
            specialty: "Dentist",
            date: "2024-03-22",
            time: "03:30 PM",
            duration: "45 min",
            reason: "Cavity Treatment",
            status: "Pending",
            location: "Annaba Dental Care",
            fee: "2600 DZD",
            paymentStatus: "Pending"
        },
        {
            id: 6,
            appointmentId: "APT-2024-006",
            patientName: "Layla Mustafa",
            patientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
            patientPhone: "+213 512 345 678",
            doctorName: "Dr. Sarah Johnson",
            doctorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100",
            specialty: "Cardiology",
            date: "2024-03-19",
            time: "04:00 PM",
            duration: "30 min",
            reason: "Heart Checkup",
            status: "Completed",
            location: "Algiers Central Hospital",
            fee: "3000 DZD",
            paymentStatus: "Paid"
        }
    ];

    const stats = [
        { label: "Total Appointments", value: appointments.length, icon: <Calendar className="w-5 h-5" />, color: "from-blue-500 to-cyan-500" },
        { label: "Confirmed", value: appointments.filter(a => a.status === "Confirmed").length, icon: <CheckCircle className="w-5 h-5" />, color: "from-green-500 to-emerald-500" },
        { label: "Pending", value: appointments.filter(a => a.status === "Pending").length, icon: <Clock className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
        { label: "Completed", value: appointments.filter(a => a.status === "Completed").length, icon: <CheckCircle className="w-5 h-5" />, color: "from-purple-500 to-pink-500" }
    ];

    const getStatusBadge = (status) => {
        const colors = {
            Confirmed: 'bg-green-100 text-green-700 border-green-200',
            Pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
            Cancelled: 'bg-red-100 text-red-700 border-red-200',
            Completed: 'bg-blue-100 text-blue-700 border-blue-200'
        };
        return colors[status] || colors.Pending;
    };

    const getPaymentBadge = (status) => {
        const colors = {
            Paid: 'bg-green-100 text-green-700',
            Pending: 'bg-yellow-100 text-yellow-700',
            Refunded: 'bg-gray-100 text-gray-700'
        };
        return colors[status] || colors.Pending;
    };

    const handleSelectAppointment = (id) => {
        setSelectedAppointments(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        if (selectedAppointments.length === appointments.length) {
            setSelectedAppointments([]);
        } else {
            setSelectedAppointments(appointments.map(a => a.id));
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Appointments Management</h1>
                            <p className="text-lg text-gray-600">Monitor and manage all medical appointments</p>
                        </div>

                        <div className="flex gap-3">
                            <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Export
                            </button>
                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                <Plus className="w-5 h-5" />
                                New Appointment
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
                                placeholder="Search by patient, doctor, or appointment ID..."
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
                                    <option value="confirmed">Confirmed</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            <div className="relative">
                                <select
                                    value={dateFilter}
                                    onChange={(e) => setDateFilter(e.target.value)}
                                    className="appearance-none px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white font-medium cursor-pointer"
                                >
                                    <option value="all">All Dates</option>
                                    <option value="today">Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="week">This Week</option>
                                    <option value="month">This Month</option>
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
                {selectedAppointments.length > 0 && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6 flex items-center justify-between">
                        <p className="text-blue-800 font-semibold">
                            {selectedAppointments.length} appointment{selectedAppointments.length > 1 ? 's' : ''} selected
                        </p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors">
                                Export Selected
                            </button>
                            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors">
                                Confirm Selected
                            </button>
                            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">
                                Cancel Selected
                            </button>
                        </div>
                    </div>
                )}

                {/* Appointments Table */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left">
                                    <input
                                        type="checkbox"
                                        checked={selectedAppointments.length === appointments.length}
                                        onChange={handleSelectAll}
                                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">
                                    <button className="flex items-center gap-2 hover:text-blue-600">
                                        Appointment
                                        <ArrowUpDown className="w-4 h-4" />
                                    </button>
                                </th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Patient</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Doctor</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Date & Time</th>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Payment</th>
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
                                            <div className="space-y-2">
                                                <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                                    <div className="h-3 w-28 bg-gray-200 rounded animate-pulse"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                                                <div className="space-y-2">
                                                    <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                                                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                                                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-7 w-24 bg-gray-200 rounded-full animate-pulse"></div>
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
                                appointments.map((appointment) => (
                                    <tr key={appointment.id} className="hover:bg-gray-50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedAppointments.includes(appointment.id)}
                                                onChange={() => handleSelectAppointment(appointment.id)}
                                                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-gray-800">{appointment.appointmentId}</p>
                                                <p className="text-sm text-gray-500">{appointment.reason}</p>
                                                <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                                    <Clock className="w-3 h-3" />
                                                    {appointment.duration}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={appointment.patientImage}
                                                    alt={appointment.patientName}
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{appointment.patientName}</p>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Phone className="w-3 h-3" />
                                                        {appointment.patientPhone}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={appointment.doctorImage}
                                                    alt={appointment.doctorName}
                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500"
                                                />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{appointment.doctorName}</p>
                                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                                        <Stethoscope className="w-3 h-3" />
                                                        {appointment.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                    <Calendar className="w-4 h-4 text-blue-500" />
                                                    {appointment.date}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Clock className="w-4 h-4 text-purple-500" />
                                                    {appointment.time}
                                                </div>
                                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" />
                                                    {appointment.location}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                    <DollarSign className="w-4 h-4 text-green-500" />
                                                    {appointment.fee}
                                                </div>
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getPaymentBadge(appointment.paymentStatus)}`}>
                            {appointment.paymentStatus}
                          </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border-2 ${getStatusBadge(appointment.status)}`}>
                          {appointment.status}
                        </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="View Details">
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                                <button className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors" title="Edit">
                                                    <Edit className="w-5 h-5" />
                                                </button>
                                                <button className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors" title="Cancel">
                                                    <XCircle className="w-5 h-5" />
                                                </button>
                                                <button className="p-2 text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                                    <MoreVertical className="w-5 h-5" />
                                                </button>
                                            </div>
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
                                Showing <span className="font-semibold">1-{appointments.length}</span> of <span className="font-semibold">{appointments.length}</span> appointments
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

export default AdminAppointmentsPage;