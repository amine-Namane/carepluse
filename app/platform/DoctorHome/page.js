// 'use client'
// import { Input } from "@/components/ui/input"
// import React, { useEffect, useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { supabase } from '@/lib/supabaseclient';
// import { redirect } from 'next/navigation';
// import { useRouter } from "next/navigation"
// import { getAuthenticatedUser } from "@/lib/auth"; // Import auth function
//
// // async function getDoctorlist() {
// //   const res = await fetch('http://localhost:3000/api/doctors-list');
// //   if (!res.ok) {
// //     throw new Error(`Failed to fetch doctor types (HTTP ${res.status})`);
// //   }
// //   return res.json();
// // }
//
// export default  function DoctorHome() {
//   // const doctors = await getDoctorlist()
//   // const { data: { user } } = await supabase.auth.getUser();
//   // if (!user) {
//   //   redirect('/Admin'); // Redirect if not logged in
//   // }
//   // const { data: userInfo, error } = await supabase
//   //   .from("users")
//   //   .select("role")
//   //   .eq("id", user.id)
//   //   .single();
//   //   if (error || !userInfo || userInfo.role !== "doctor") {
//   //     redirect('/unauthorized'); // Redirect unauthorized users
//   //   }
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);
//   const router = useRouter();
//   useEffect(() => {
//     async function checkAuth() {
//     const user = await getAuthenticatedUser(); // Use the server function
//          if (!user) {
//            router.push("/DoctorHome"); // Redirect if not authenticated
//            return;
//          }
//          setUser(user);
//          setLoading(false);
//
//
//
//       // Check if the user is a doctor
//       const { data: userInfo, error: roleError } = await supabase
//         .from("doctors")
//         .select("*")
//         .eq("user_id", user.id) // Change 'id' to correct column name
//         .single();
//
//       if (roleError || !userInfo || userInfo.role !== "doctor") {
//         router.push("/Admin"); // Redirect unauthorized users
//         return;
//       }
//       console.log(userInfo)
//       setUser(userInfo);
//       setLoading(false);
//     }
//
//     checkAuth();
//   }, [router]);
// console.log(user)
//   if (loading) return <p>Loading...</p>;
//
//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       {/* Header Section */}
//       <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 max-w-7xl mx-auto">
//         <div className="mb-4 md:mb-0">
//           <h1 className='text-3xl font-semibold'>
//             Welcome, <span className="text-[#0089FF]">{user.name}</span>
//           </h1>
//           <p className="text-gray-600 mt-1">Today's schedule overview</p>
//         </div>
//
//         <div className="flex gap-2 w-full md:w-auto">
//           <Input
//             type="text"
//             placeholder="Search patients..."
//             className='rounded-full bg-white shadow-sm w-full md:w-64'
//           />
//           <Button className="rounded-full bg-[#0089FF] hover:bg-[#0075e0] shadow-sm">
//             Search
//           </Button>
//         </div>
//       </header>
//
//       {/* Main Content Grid */}
//       <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
//         {/* Appointment Requests */}
//         <section className="bg-white rounded-xl p-6 shadow-sm border">
//           <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Appointment Requests</h2>
//           <ScrollArea className="h-[400px] pr-4">
//             {/* {doctors.map((doct) => (
//               <div key={doct.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors mb-2">
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={doct.img}
//                     className="w-10 h-10 rounded-full object-cover border-2 border-[#0089FF]"
//                     alt={doct.name}
//                   />
//                   <div>
//                     <p className="font-medium">{doct.name}</p>
//                     <p className="text-sm text-gray-500">Cardiology • 09:00 AM</p>
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     className="text-green-600 border-green-200 hover:bg-green-50 h-8 w-8"
//                   >
//                     ✓
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="icon"
//                     className="text-red-600 border-red-200 hover:bg-red-50 h-8 w-8"
//                   >
//                     ✕
//                   </Button>
//                 </div>
//               </div>
//             ))} */}
//           </ScrollArea>
//         </section>
//
//         {/* My Patients */}
//         <section className="bg-white rounded-xl p-6 shadow-sm border">
//           <h2 className="text-xl font-semibold mb-4 pb-2 border-b">My Patients</h2>
//           <ScrollArea className="h-[400px] pr-4">
//             {/* {doctors.map((doct) => (
//               <div key={doct.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors mb-2">
//                 <img
//                   src={doct.img}
//                   className="w-10 h-10 rounded-full object-cover border-2 border-[#0089FF]"
//                   alt={doct.name}
//                 />
//                 <div>
//                   <p className="font-medium">{doct.name}</p>
//                   <p className="text-sm text-gray-500">Last visit: 2 days ago</p>
//                 </div>
//               </div>
//             ))} */}
//           </ScrollArea>
//         </section>
//
//         {/* Announcements */}
//         <section className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border">
//           <h2 className="text-xl font-semibold mb-4 pb-2 border-b">Announcements</h2>
//           <ScrollArea className="h-[300px] pr-4">
//             {/* {doctors.map((doct) => (
//               <div key={doct.id} className="p-4 mb-3 rounded-lg bg-blue-50 border-l-4 border-[#0089FF]">
//                 <div className="flex items-center gap-3">
//                   <div className="flex-1">
//                     <h3 className="font-medium">{doct.specialty} Meeting</h3>
//                     <p className="text-sm text-gray-600">Scheduled for Friday, 3:00 PM</p>
//                   </div>
//                   <span className="text-sm text-[#0089FF]">New</span>
//                 </div>
//               </div>
//             ))} */}
//           </ScrollArea>
//         </section>
//       </div>
//     </div>
//   )
// }
'use client'
import React, { useState } from 'react';
import {
  Search,
  Calendar,
  Users,
  Bell,
  CheckCircle,
  XCircle,
  Clock,
  Activity,
  TrendingUp,
  UserPlus,
  Eye,
  MessageCircle,
  Home,
  User,
  LogOut,
  ChevronRight,
  MessageSquare,
  Settings
} from 'lucide-react';


// Mock data
const mockDoctor = {
  name: "Dr. Sarah Johnson",
  specialty: "Cardiologist",
  image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400"
};

const appointmentRequests = [
  { id: 1, name: "Ahmed Hassan", time: "09:00 AM", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", type: "New Patient" },
  { id: 2, name: "Sara Ahmed", time: "10:30 AM", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", type: "Follow-up" },
  { id: 3, name: "Mohamed Ali", time: "11:00 AM", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", type: "Consultation" },
];

const myPatients = [
  { id: 1, name: "Fatima Ibrahim", lastVisit: "2 days ago", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", condition: "Stable" },
  { id: 2, name: "Karim Rashid", lastVisit: "1 week ago", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", condition: "Improving" },
  { id: 3, name: "Layla Mustafa", lastVisit: "3 days ago", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100", condition: "Monitoring" },
];

const announcements = [
  { id: 1, title: "Cardiology Department Meeting", date: "Friday, 3:00 PM", type: "Meeting", badge: "New" },
  { id: 2, title: "New Medical Guidelines Released", date: "Updated 2 hours ago", type: "Update", badge: "Important" },
  { id: 3, title: "Hospital Workshop on AI Diagnostics", date: "Next Monday, 9:00 AM", type: "Workshop", badge: "New" },
];
const patientList = [
  {
    id: 1,
    name: "Karim Belkacem",
    age: 34,
    lastVisit: "2 days ago",
    condition: "Diabetes",
    phone: "+213 770 123 456",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    id: 2,
    name: "Sara Mahfoud",
    age: 27,
    lastVisit: "1 week ago",
    condition: "Normal",
    phone: "+213 560 555 222",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  }
];


// function DashboardLayout({ children }) {
//   const [activeItem, setActiveItem] = useState("Dashboard");
//
//   const menuItems = [
//     { name: "Dashboard", icon: <Home className="w-5 h-5" />, href: "/DoctorHome" },
//     { name: "Profile", icon: <User className="w-5 h-5" />, href: "/DoctorHome/Profile" },
//     { name: "Appointments", icon: <Calendar className="w-5 h-5" />, href: "/DoctorHome/Appointment" },
//     { name: "Patients", icon: <Users className="w-5 h-5" />, href: "/DoctorHome/Patients" },
//     { name: "Messages", icon: <MessageSquare className="w-5 h-5" />, href: "/DoctorHome/Messages" },
//     { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/DoctorHome/Settings" },
//   ];
//
//   const handleLogout = () => {
//     console.log("Logging out...");
//   };
//
//   return (
//       <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         {/* Sidebar */}
//         <aside className="hidden lg:flex lg:flex-col w-72 bg-white shadow-2xl border-r border-gray-100">
//           {/* Logo */}
//           <div className="p-6 border-b border-gray-100">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
//                 <Activity className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-800">HealthCare</h1>
//                 <p className="text-sm text-gray-500">Doctor Portal</p>
//               </div>
//             </div>
//           </div>
//
//           {/* Doctor Profile */}
//           <div className="p-6 border-b border-gray-100">
//             <div className="flex items-center gap-4">
//               <img
//                   src={mockDoctor.image}
//                   alt={mockDoctor.name}
//                   className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
//               />
//               <div>
//                 <p className="font-semibold text-gray-800">{mockDoctor.name}</p>
//                 <p className="text-sm text-gray-500">{mockDoctor.specialty}</p>
//               </div>
//             </div>
//           </div>
//
//           {/* Navigation */}
//           <nav className="flex-1 p-4 space-y-2">
//             {menuItems.map((item, index) => (
//                 <button
//                     key={index}
//                     onClick={() => setActiveItem(item.name)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//                         activeItem === item.name
//                             ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
//                             : "text-gray-600 hover:bg-gray-50"
//                     }`}
//                 >
//                   {item.icon}
//                   <span className="font-medium">{item.name}</span>
//                   {activeItem === item.name && <ChevronRight className="w-4 h-4 ml-auto" />}
//                 </button>
//             ))}
//           </nav>
//
//           {/* Logout Button */}
//           <div className="p-4 border-t border-gray-100">
//             <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
//             >
//               <LogOut className="w-5 h-5" />
//               <span className="font-medium">Log Out</span>
//             </button>
//           </div>
//         </aside>
//
//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//   );
// }

function DoctorDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: "Today's Appointments", value: "8", icon: <Calendar className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { label: "Total Patients", value: "156", icon: <Users className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    { label: "Pending Requests", value: "3", icon: <Clock className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    { label: "Success Rate", value: "98%", icon: <TrendingUp className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
  ];

  return (
      <div className="p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{mockDoctor.name}</span>
              </h1>
              <p className="text-lg text-gray-600">Here's what's happening with your patients today</p>
            </div>

            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search patients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </header>

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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Appointment Requests */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Appointment Requests</h2>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
              {appointmentRequests.length}
            </span>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {appointmentRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <img
                          src={request.image}
                          alt={request.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{request.name}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{request.time}</span>
                          <span className="px-2 py-0.5 bg-purple-100 text-purple-600 rounded-full text-xs">
                        {request.type}
                      </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                        <CheckCircle className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                        <XCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* My Patients */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">My Patients</h2>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
            </div>

            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {myPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <img
                          src={patient.image}
                          alt={patient.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">{patient.name}</p>
                        <p className="text-sm text-gray-500">Last visit: {patient.lastVisit}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        patient.condition === 'Stable' ? 'bg-green-100 text-green-700' :
                            patient.condition === 'Improving' ? 'bg-blue-100 text-blue-700' :
                                'bg-orange-100 text-orange-700'
                    }`}>
                  {patient.condition}
                </span>
                  </div>
              ))}
            </div>
          </div>
        </div>


        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">All Patients</h2>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All</button>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {patientList.map((patient) => (
                <div
                    key={patient.id}
                    className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-md transition-all"
                >
                  {/* Patient Info */}
                  <div className="flex items-center gap-4">
                    <img
                        src={patient.avatar}
                        alt={patient.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{patient.name}</p>
                      <p className="text-sm text-gray-500">
                        Last visit: {patient.lastVisit} • Age: {patient.age} • Condition: {patient.condition}
                      </p>
                    </div>
                  </div>

                  {/* Action Icons */}
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                      <Eye className="w-5 h-5" /> {/* View Profile */}
                    </button>
                    <button className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                      <UserPlus className="w-5 h-5" /> {/* Add to My Patients */}
                    </button>
                    <button className="p-2 text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <MessageCircle className="w-5 h-5" /> {/* Message */}
                    </button>
                  </div>
                </div>
            ))}
          </div>
        </div>


        {/* Announcements */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
              <Bell className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    announcement.badge === 'New' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                }`}>
                  {announcement.badge}
                </span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{announcement.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{announcement.date}</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

// Export wrapped component
export default function ModernDoctorDashboard() {
  return (
      // <DashboardLayout>
        <DoctorDashboard />
      // </DashboardLayout>
  );
}