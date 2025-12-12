// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/lib/supabaseclient";
// import { getAuthenticatedUser } from "@/lib/auth"; // Import auth function
// export default function Layout({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [activeItem, setActiveItem] = useState("Dashboard");
//   const router = useRouter();
//   useEffect(() => {
//      function checkAuth() {
//       const user =  getAuthenticatedUser(); // Use the server function
//       if (!user) {
//         router.push("/DoctorHome"); // Redirect if not authenticated
//         return;
//       }
//       setUser(user);
//       setLoading(false);
//     }
//
//     checkAuth();
//   }, [router]);
//   if (loading) return <p>Loading...</p>;
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push('/Doctorsingin');
//   };
//   const menuItems = [
//     { name: "Dashboard", icon: "🏠" },
//     { name: "Profile", icon: "👤" },
//     { name: "Appointment", icon: "📅" },
//     { name: "Log out", icon: "🚪" },
//   ];
//
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg border-r border-gray-100">
//         <nav className="p-4">
//           <div className="mb-8 pl-4">
//             <h1 className="text-2xl font-bold text-blue-600">HealthCare</h1>
//             <p className="text-sm text-gray-500">Doctor Portal</p>
//           </div>
//           <ul className="space-y-2">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 href={
//                   item.name === "Dashboard"
//                     ? "/DoctorHome"
//                     : item.name === "Log out"
//                     ? "/"
//                     : `/DoctorHome/${item.name}`
//                 }
//               >
//                 <li
//                   onClick={() => {
//                     if (item.name === "Log out") handleLogout();
//                     setActiveItem(item.name);
//                   }}
//                   className={`group flex items-center px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer
//                     ${
//                       activeItem === item.name
//                         ? "bg-blue-50 border-l-4 border-blue-500"
//                         : "hover:bg-gray-50"
//                     }`}
//                 >
//                   <span className="text-xl mr-3">{item.icon}</span>
//                   <span
//                     className={`text-md font-medium ${
//                       activeItem === item.name
//                         ? "text-blue-600"
//                         : "text-gray-600 group-hover:text-blue-500"
//                     }`}
//                   >
//                     {item.name}
//                   </span>
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </nav>
//       </aside>
//
//       {/* Main Content */}
//       <main className="flex-1 bg-gray-50 p-8">
//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-6">
//           {children}
//         </div>
//       </main>
//     </div>
//   );
// }
'use client'
import React, { useState } from 'react';
import {
    Home,
    User,
    Calendar,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    ChevronRight,
    Activity,
    Menu,
    X,
    Bell,
} from 'lucide-react';

const DashboardLayout= ({ children }) => {
    const [activeItem, setActiveItem] = useState("Dashboard");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Mock doctor data - replace with your Supabase data
    const doctor = {
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
        notifications: 3
    };

    const menuItems = [
        { name: "Dashboard", icon: <Home className="w-5 h-5" />, href: "/DoctorHome" },
        { name: "Profile", icon: <User className="w-5 h-5" />, href: "/DoctorHome/Profile" },
        { name: "Appointments", icon: <Calendar className="w-5 h-5" />, href: "/DoctorHome/Appointment" },
        { name: "Patients", icon: <Users className="w-5 h-5" />, href: "/DoctorHome/Patients" },
        { name: "Messages", icon: <MessageSquare className="w-5 h-5" />, href: "/DoctorHome/Messages", badge: 5 },
        { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/DoctorHome/Settings" },
    ];

    const handleLogout = () => {
        console.log("Logging out...");
        // Add your Supabase logout logic here
    };

    const handleMenuClick = (itemName) => {
        setActiveItem(itemName);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex lg:flex-col w-72 bg-white shadow-2xl border-r border-gray-100 fixed h-screen">
                {/* Logo Section */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50"></div>
                            <div className="relative p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">HealthCare</h1>
                            <p className="text-sm text-gray-500">Doctor Portal</p>
                        </div>
                    </div>
                </div>

                {/* Doctor Profile Section */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-500 shadow-lg"
                            />
                            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white"></div>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-gray-800">{doctor.name}</p>
                            <p className="text-sm text-gray-500">{doctor.specialty}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleMenuClick(item.name)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                                activeItem === item.name
                                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                                    : "text-gray-600 hover:bg-gray-50 hover:scale-102"
                            }`}
                        >
                            <div className={activeItem === item.name ? "" : "group-hover:scale-110 transition-transform"}>
                                {item.icon}
                            </div>
                            <span className="font-medium flex-1 text-left">{item.name}</span>
                            {item.badge && (
                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                    activeItem === item.name
                                        ? "bg-white text-blue-600"
                                        : "bg-blue-100 text-blue-600"
                                }`}>
                  {item.badge}
                </span>
                            )}
                            {activeItem === item.name && <ChevronRight className="w-4 h-4" />}
                        </button>
                    ))}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b border-gray-100">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                            <Activity className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold text-gray-800">HealthCare</h1>
                            <p className="text-xs text-gray-500">Doctor Portal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Bell className="w-5 h-5 text-gray-600" />
                            {doctor.notifications > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {doctor.notifications}
                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 max-h-[calc(100vh-64px)] overflow-y-auto">
                        {/* Doctor Profile */}
                        <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center gap-4">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                                />
                                <div>
                                    <p className="font-bold text-gray-800">{doctor.name}</p>
                                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="p-4 space-y-2">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleMenuClick(item.name)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                        activeItem === item.name
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                                            : "text-gray-600 hover:bg-gray-50"
                                    }`}
                                >
                                    {item.icon}
                                    <span className="font-medium flex-1 text-left">{item.name}</span>
                                    {item.badge && (
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                            activeItem === item.name
                                                ? "bg-white text-blue-600"
                                                : "bg-blue-100 text-blue-600"
                                        }`}>
                      {item.badge}
                    </span>
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Mobile Logout */}
                        <div className="p-4 border-t border-gray-100">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Log Out</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-72">
                {/* Mobile Spacer */}
                <div className="lg:hidden h-16"></div>

                {/* Content */}
                <div className="min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
};
export default DashboardLayout;