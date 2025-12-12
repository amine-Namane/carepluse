'use client'
import React, { useState } from 'react';
import {
    TrendingUp,
    TrendingDown,
    Users,
    Stethoscope,
    Calendar,
    DollarSign,
    Activity,
    Clock,
    ChevronDown,
    Download,
    RefreshCw,
    ArrowUpDown,
    Eye,
    CheckCircle,
    XCircle,
    AlertCircle,
    Star,
    BarChart3,
    PieChart as PieChartIcon
} from 'lucide-react';

const AdminAnalyticsPage = () => {
    const [timeRange, setTimeRange] = useState('month');
    const [loading, setLoading] = useState(false);

    // Mock analytics data
    const stats = [
        {
            label: 'Total Revenue',
            value: 'DZD 485,200',
            change: '+12.5%',
            trend: 'up',
            icon: <DollarSign className="w-6 h-6" />,
            color: 'from-green-500 to-emerald-500',
            detail: 'vs last month'
        },
        {
            label: 'New Patients',
            value: '284',
            change: '+8.2%',
            trend: 'up',
            icon: <Users className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500',
            detail: 'this month'
        },
        {
            label: 'Appointments',
            value: '1,284',
            change: '+15.3%',
            trend: 'up',
            icon: <Calendar className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-500',
            detail: 'completed'
        },
        {
            label: 'Active Doctors',
            value: '156',
            change: '-2.4%',
            trend: 'down',
            icon: <Stethoscope className="w-6 h-6" />,
            color: 'from-orange-500 to-red-500',
            detail: 'on platform'
        }
    ];

    const revenueData = [
        { month: 'Jan', revenue: 32000, appointments: 95 },
        { month: 'Feb', revenue: 38000, appointments: 110 },
        { month: 'Mar', revenue: 42000, appointments: 128 },
        { month: 'Apr', revenue: 35000, appointments: 102 },
        { month: 'May', revenue: 48000, appointments: 145 },
        { month: 'Jun', revenue: 52000, appointments: 158 }
    ];

    const topDoctors = [
        {
            id: 1,
            name: 'Dr. Sarah Johnson',
            specialty: 'Cardiology',
            appointments: 245,
            revenue: 'DZD 73,500',
            rating: 4.9,
            growth: '+15%',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100'
        },
        {
            id: 2,
            name: 'Dr. Michael Chen',
            specialty: 'Dentist',
            appointments: 198,
            revenue: 'DZD 49,500',
            rating: 4.8,
            growth: '+12%',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100'
        },
        {
            id: 3,
            name: 'Dr. Emily Rodriguez',
            specialty: 'Orthopedic',
            appointments: 167,
            revenue: 'DZD 58,450',
            rating: 4.9,
            growth: '+18%',
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100'
        },
        {
            id: 4,
            name: 'Dr. Lisa Thompson',
            specialty: 'Dentist',
            appointments: 189,
            revenue: 'DZD 49,140',
            rating: 4.8,
            growth: '+10%',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100'
        }
    ];

    const appointmentStatus = [
        { status: 'Completed', count: 856, percentage: 67, color: 'bg-green-500' },
        { status: 'Confirmed', count: 245, percentage: 19, color: 'bg-blue-500' },
        { status: 'Pending', count: 134, percentage: 10, color: 'bg-yellow-500' },
        { status: 'Cancelled', count: 49, percentage: 4, color: 'bg-red-500' }
    ];

    const specialtyDistribution = [
        { specialty: 'Cardiology', count: 34, percentage: 22 },
        { specialty: 'Dentist', count: 28, percentage: 18 },
        { specialty: 'Orthopedic', count: 25, percentage: 16 },
        { specialty: 'Otology', count: 22, percentage: 14 },
        { specialty: 'Neurology', count: 20, percentage: 13 },
        { specialty: 'Others', count: 27, percentage: 17 }
    ];

    const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
                            <p className="text-lg text-gray-600">Track performance and insights across the platform</p>
                        </div>

                        <div className="flex gap-3">
                            <div className="relative">
                                <select
                                    value={timeRange}
                                    onChange={(e) => setTimeRange(e.target.value)}
                                    className="appearance-none px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white font-medium cursor-pointer"
                                >
                                    <option value="week">Last 7 Days</option>
                                    <option value="month">Last 30 Days</option>
                                    <option value="quarter">Last Quarter</option>
                                    <option value="year">Last Year</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>

                            <button
                                onClick={() => setLoading(!loading)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                            </button>

                            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                Export Report
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl text-white`}>
                                    {stat.icon}
                                </div>
                                <span className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-full ${
                                    stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                  {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                    {stat.change}
                </span>
                            </div>
                            <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="text-xs text-gray-500 mt-2">{stat.detail}</p>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    {/* Revenue Chart */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-blue-600" />
                                    Revenue & Appointments Overview
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">Monthly performance metrics</p>
                            </div>
                        </div>

                        {/* Simple Bar Chart */}
                        <div className="space-y-4">
                            {revenueData.map((data, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium text-gray-700">{data.month}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-green-600 font-semibold">DZD {(data.revenue / 1000).toFixed(0)}K</span>
                                            <span className="text-blue-600 font-semibold">{data.appointments} apt</span>
                                        </div>
                                    </div>
                                    <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
                                        <div
                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg transition-all duration-500"
                                            style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                                        ></div>
                                        <div
                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-50 rounded-lg transition-all duration-500"
                                            style={{ width: `${(data.appointments / 158) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded"></div>
                                <span className="text-sm text-gray-600">Revenue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                                <span className="text-sm text-gray-600">Appointments</span>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Status */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <PieChartIcon className="w-5 h-5 text-purple-600" />
                            <h3 className="text-xl font-bold text-gray-800">Appointment Status</h3>
                        </div>

                        <div className="space-y-4">
                            {appointmentStatus.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                                            <span className="text-sm font-medium text-gray-700">{item.status}</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-800">{item.count}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${item.color} transition-all duration-500`}
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>{item.percentage}% of total</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-gray-700">Total Appointments</span>
                                <span className="text-2xl font-bold text-gray-800">
                  {appointmentStatus.reduce((sum, item) => sum + item.count, 0)}
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-6">
                    {/* Top Performing Doctors */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <Stethoscope className="w-5 h-5 text-purple-600" />
                                Top Performing Doctors
                            </h3>
                            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                                View All
                                <ArrowUpDown className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {topDoctors.map((doctor, index) => (
                                <div key={doctor.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img
                                                src={doctor.image}
                                                alt={doctor.name}
                                                className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-500"
                                            />
                                            <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{doctor.name}</p>
                                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                                            <div className="flex items-center gap-1 mt-1">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold text-green-600">{doctor.revenue}</p>
                                        <p className="text-sm text-gray-600">{doctor.appointments} appointments</p>
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 mt-1">
                      <TrendingUp className="w-3 h-3" />
                                            {doctor.growth}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specialty Distribution */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                        <div className="flex items-center gap-2 mb-6">
                            <Activity className="w-5 h-5 text-orange-600" />
                            <h3 className="text-xl font-bold text-gray-800">Specialty Distribution</h3>
                        </div>

                        <div className="space-y-4">
                            {specialtyDistribution.map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700">{item.specialty}</span>
                                        <span className="text-sm font-bold text-gray-800">{item.count}</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500"
                                            style={{ width: `${item.percentage}%` }}
                                        ></div>
                                    </div>
                                    <div className="text-xs text-gray-500">{item.percentage}%</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quick Insights */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl p-6 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Success Rate</h3>
                        </div>
                        <p className="text-4xl font-bold mb-2">96.8%</p>
                        <p className="text-blue-100">Completed appointments</p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Avg. Wait Time</h3>
                        </div>
                        <p className="text-4xl font-bold mb-2">12 min</p>
                        <p className="text-purple-100">Patient waiting time</p>
                    </div>

                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-xl p-6 text-white">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                <Star className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold">Avg. Rating</h3>
                        </div>
                        <p className="text-4xl font-bold mb-2">4.8</p>
                        <p className="text-green-100">Platform satisfaction</p>
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
      `}</style>
        </div>
    );
};

export default AdminAnalyticsPage;