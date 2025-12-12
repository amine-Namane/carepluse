// 'use client'
// import React, { useEffect, useState } from 'react';
// import { redirect } from 'next/navigation';
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseclient";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Skeleton } from "@/components/ui/skeleton";
//
// async function getAppointments() {
//   const res = await fetch('http://localhost:3000/api/doctors-list');
//   if (!res.ok) {
//     throw new Error(`Failed to fetch doctor types (HTTP ${res.status})`);
//   }
//   return res.json();
// }
// export default function Appointment() {
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//
//   useEffect(() => {
//     const checkAuthAndFetchAppointments = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//
//       if (!user) {
//         router.push("/Admin"); // Redirect if not logged in
//         return;
//       }
//
//       try {
//         const data = await getAppointments();
//         setAppointments(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     checkAuthAndFetchAppointments();
//   }, []);
//
//   if (error) {
//     return <div className="p-6 text-red-500">Error loading appointments: {error}</div>;
//   }
//   return (
//     <div className="p-6">
//       <Table className="border rounded-lg">
//         <TableCaption className="text-lg font-medium mb-4">
//           List of Appointments
//         </TableCaption>
//         <TableHeader className="bg-gray-50">
//           <TableRow>
//             <TableHead className="w-[200px]">Patient</TableHead>
//             <TableHead>Date of Birth</TableHead>
//             <TableHead>Appointment Time</TableHead>
//             <TableHead>Status</TableHead>
//             <TableHead className="text-right">Contact</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {loading ? (
//             Array.from({ length: 5 }).map((_, index) => (
//               <TableRow key={index}>
//                 <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
//                 <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
//                 <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
//                 <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
//                 <TableCell className="text-right">
//                   <Skeleton className="h-4 w-[120px] ml-auto" />
//                 </TableCell>
//               </TableRow>
//             ))
//           ) : (
//             appointments.map((appointment) => (
//               <TableRow key={appointment.name} className="hover:bg-gray-50">
//                 <TableCell className="font-medium">
//                   {
//                   <div>
//                     <img src={appointment.img} className='w-10'/>
//                     {appointment.name}
//                   </div>
//                   }
//                 </TableCell>
//                 <TableCell>
//                   {/* {new Date().toLocaleDateString()} */}
//                   08/03/2003
//                 </TableCell>
//                 <TableCell>
//                   {/* {new Date().toLocaleString()} */}
//                   03/07
//                 </TableCell>
//                 <TableCell>
//                   {/* <span className={`px-2 py-1 rounded-full text-sm ${
//                     appointment.status === 'Confirmed'
//                       ? 'bg-green-100 text-green-800'
//                       : 'bg-yellow-100 text-yellow-800'
//                   }`}>
//                     status
//                   </span> */}status
//                 </TableCell>
//                 <TableCell className="text-right">
//                   {/* {appointment.phoneNumber} */}05626455998
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }
'use client'
import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  MapPin,
  Filter,
  Search,
  CheckCircle,
  XCircle,
  MoreVertical,
  User,
  Download,
  RefreshCw,
  ChevronDown,
  Eye
} from 'lucide-react';

const ModernAppointmentsPage = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data - replace with your Supabase data
  const appointments = [
    {
      id: 1,
      name: "Ahmed Hassan",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      dob: "08/03/1990",
      appointmentDate: "03/07/2024",
      appointmentTime: "09:00 AM",
      status: "Confirmed",
      phone: "0562645998",
      email: "ahmed@example.com",
      reason: "Regular Checkup"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      dob: "15/06/1985",
      appointmentDate: "03/07/2024",
      appointmentTime: "10:30 AM",
      status: "Pending",
      phone: "0551234567",
      email: "sara@example.com",
      reason: "Follow-up"
    },
    {
      id: 3,
      name: "Mohamed Ali",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      dob: "22/11/1992",
      appointmentDate: "03/07/2024",
      appointmentTime: "11:00 AM",
      status: "Confirmed",
      phone: "0569876543",
      email: "mohamed@example.com",
      reason: "Consultation"
    },
    {
      id: 4,
      name: "Fatima Ibrahim",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      dob: "10/02/1988",
      appointmentDate: "03/07/2024",
      appointmentTime: "02:00 PM",
      status: "Cancelled",
      phone: "0543216789",
      email: "fatima@example.com",
      reason: "Emergency"
    },
    {
      id: 5,
      name: "Karim Rashid",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      dob: "05/09/1995",
      appointmentDate: "03/07/2024",
      appointmentTime: "03:30 PM",
      status: "Pending",
      phone: "0598765432",
      email: "karim@example.com",
      reason: "Lab Results"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'cancelled':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const stats = [
    { label: "Total Appointments", value: appointments.length, color: "from-blue-500 to-cyan-500", icon: <Calendar className="w-5 h-5" /> },
    { label: "Confirmed", value: appointments.filter(a => a.status === "Confirmed").length, color: "from-green-500 to-emerald-500", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Pending", value: appointments.filter(a => a.status === "Pending").length, color: "from-yellow-500 to-orange-500", icon: <Clock className="w-5 h-5" /> },
    { label: "Cancelled", value: appointments.filter(a => a.status === "Cancelled").length, color: "from-red-500 to-pink-500", icon: <XCircle className="w-5 h-5" /> },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Appointments</h1>
                <p className="text-lg text-gray-600">Manage and track all your patient appointments</p>
              </div>

              <div className="flex gap-3">
                <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
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
                    placeholder="Search by patient name, phone, or email..."
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
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>

                <button className="px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all flex items-center gap-2 font-medium">
                  <Filter className="w-5 h-5" />
                  Filter
                </button>

                <button
                    onClick={() => setLoading(!loading)}
                    className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                >
                  <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Appointments Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Patient</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Date of Birth</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Appointment</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Reason</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Contact</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {loading ? (
                    // Loading Skeleton
                    Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                              <div className="space-y-2">
                                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-2">
                              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="h-7 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-2">
                              <div className="h-3 w-28 bg-gray-200 rounded animate-pulse"></div>
                              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse"></div>
                            </div>
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
                            <div className="flex items-center gap-3">
                              <img
                                  src={appointment.image}
                                  alt={appointment.name}
                                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                              />
                              <div>
                                <p className="font-semibold text-gray-800">{appointment.name}</p>
                                <p className="text-sm text-gray-500">ID: #{appointment.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span>{appointment.dob}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-gray-700 font-medium">
                                <Calendar className="w-4 h-4 text-blue-500" />
                                <span>{appointment.appointmentDate}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <Clock className="w-4 h-4 text-purple-500" />
                                <span>{appointment.appointmentTime}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-gray-700">{appointment.reason}</span>
                          </td>
                          <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border-2 ${getStatusColor(appointment.status)}`}>
                          {getStatusIcon(appointment.status)}
                          {appointment.status}
                        </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-green-500" />
                                <span>{appointment.phone}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4 text-blue-500" />
                                <span className="truncate max-w-[150px]">{appointment.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                                <Eye className="w-5 h-5" />
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

export default ModernAppointmentsPage;