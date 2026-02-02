// // 'use client'
// // import { useState } from "react";
// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuTrigger,
// //   NavigationMenuList,
// //   NavigationMenuLink,
// // } from "@/components/ui/navigation-menu";
// // import Link from "next/link";
// // import { supabase } from "@/lib/supabaseclient";
// // import { useRouter } from "next/navigation";
//
// // const Header = () => {
// //   const [isPatient, setIsPatient] = useState(false);
// //   const router = useRouter();
//
// //   const handleLogout = async () => {
// //     await supabase.auth.signOut();
// //     router.push("/Patient"); // Redirect after logout
// //   };
//
// //   return (
// //     <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4 shadow-lg">
// //       <div className="max-w-7xl mx-auto flex items-center justify-between">
// //         {/* Logo */}
// //         <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
// //           <img
// //             id="logo-87"
// //             className="text-white"
// //             src="/assets/icons/logo-full.svg"
// //             alt="Healthcare Logo"
// //           />
// //         </Link>
//
// //         {/* Navigation */}
// //         {!isPatient && (
// //           <nav className="hidden lg:flex items-center gap-8">
// //             <Link href="/Patient" className="text-white hover:text-blue-100 transition-colors font-medium">
// //               Home
// //             </Link>
//
// //             <NavigationMenu>
// //               <NavigationMenuList>
// //                 <NavigationMenuItem>
// //                   <NavigationMenuTrigger className="bg-transparent hover:bg-blue-700 text-white">
// //                     Services
// //                   </NavigationMenuTrigger>
// //                   <NavigationMenuContent className="min-w-[200px] p-2 bg-white rounded-lg shadow-xl">
// //                     <div className="flex flex-col gap-2">
// //                       <NavigationMenuLink asChild>
// //                         <Link href="/Booking" className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors">
// //                           Book Appointment
// //                         </Link>
// //                       </NavigationMenuLink>
// //                       <NavigationMenuLink asChild>
// //                         <Link href="/Bloodtest" className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors">
// //                           Analyze Tests
// //                         </Link>
// //                       </NavigationMenuLink>
// //                     </div>
// //                   </NavigationMenuContent>
// //                 </NavigationMenuItem>
// //               </NavigationMenuList>
// //             </NavigationMenu>
//
// //             <Link href="/doctors" className="text-white hover:text-blue-100 transition-colors font-medium">
// //               Doctors
// //             </Link>
// //             <Link href="/contact" className="text-white hover:text-blue-100 transition-colors font-medium">
// //               Contact Us
// //             </Link>
// //           </nav>
// //         )}
//
// //         {/* Profile Dropdown */}
// //         <NavigationMenu>
// //           <NavigationMenuList>
// //             <NavigationMenuItem>
// //               <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0">
// //                 <Avatar className="border-2 border-white hover:border-blue-200 transition-colors">
// //                   <AvatarImage src="https://github.com/shadcn.png" />
// //                   <AvatarFallback className="bg-blue-100 text-blue-800">CN</AvatarFallback>
// //                 </Avatar>
// //               </NavigationMenuTrigger>
// //               <NavigationMenuContent className="min-w-[160px] p-2 bg-white rounded-lg shadow-xl">
// //                 <div className="flex flex-col gap-2">
// //                   <NavigationMenuLink asChild>
// //                     <Link href="/profile" className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors">
// //                       Profile
// //                     </Link>
// //                   </NavigationMenuLink>
// //                   <button
// //                     onClick={handleLogout}
// //                     className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors text-left w-full"
// //                   >
// //                     Log Out
// //                   </button>
// //                 </div>
// //               </NavigationMenuContent>
// //             </NavigationMenuItem>
// //           </NavigationMenuList>
// //         </NavigationMenu>
// //       </div>
// //     </header>
// //   );
// // };
//
// // export default Header;
// "use client";
// import { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuTrigger,
//   NavigationMenuList,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";
// import Link from "next/link";
// import { supabase } from "@/lib/supabaseclient";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button"; // Import Button
//
// const Header = () => {
//   const [user, setUser] = useState(null);
//   const [isPatient, setIsPatient] = useState(false);
//   const router = useRouter();
//   useEffect(() => {
//     const checkPatientStatus = async (userId) => {
//       const { data, error } = await supabase
//         .from('patients')
//         .select('user_id')
//         .eq('user_id', userId)
//         .single();
//
//       return !!data && !error;
//     };
//
//     const fetchUser = async () => {
//       const { data: authData, error } = await supabase.auth.getUser();
//       if (authData?.user) {
//         setUser(authData.user);
//         const patientStatus = await checkPatientStatus(authData.user.id);
//         setIsPatient(patientStatus);
//       } else {
//         setUser(null);
//         setIsPatient(false);
//       }
//     };
//
//     fetchUser();
//
//     const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
//       if (event === "SIGNED_IN" && session?.user) {
//         setUser(session.user);
//         const patientStatus = await checkPatientStatus(session.user.id);
//         setIsPatient(patientStatus);
//       } else if (event === "SIGNED_OUT") {
//         setUser(null);
//         setIsPatient(false);
//         router.push("/");
//       }
//     });
//
//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, [router]);
//
//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     router.push("/Patient"); // Redirect after logout
//   };
//
//   return (
//     <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4 shadow-lg">
// <div className="max-w-7xl mx-auto flex items-center justify-between">
//   {/* Logo */}
//   <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//     <img id="logo-87" className="text-white" src="/assets/icons/logo-full.svg" alt="Healthcare Logo" />
//   </Link>
//
//   {/* Center Navigation */}
//   {user && isPatient && (
//  <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
//  <Link
//    href="/Home"
//    className="text-white hover:text-blue-100 transition-colors font-medium"
//  >
//    Home
//  </Link>
//
//  <NavigationMenu>
//    <NavigationMenuList>
//      <NavigationMenuItem>
//        <NavigationMenuTrigger className="bg-transparent hover:bg-blue-700 text-white">
//          Services
//        </NavigationMenuTrigger>
//        <NavigationMenuContent className="min-w-[200px] p-2 rounded-lg shadow-xl">
//          <div className="flex flex-col gap-2">
//            <NavigationMenuLink asChild>
//              <Link
//                href="/Booking"
//                className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors"
//                legacyBehavior
//              >
//                Book Appointment
//              </Link>
//            </NavigationMenuLink>
//            <NavigationMenuLink asChild>
//              <Link
//                href="/lab-tests"
//                className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors"
//                legacyBehavior
//              >
//                Analyze Tests
//              </Link>
//            </NavigationMenuLink>
//          </div>
//        </NavigationMenuContent>
//      </NavigationMenuItem>
//    </NavigationMenuList>
//  </NavigationMenu>
//
//  <Link
//    href="/about"
//    className="text-white hover:text-blue-100 transition-colors font-medium"
//  >
//    about
//  </Link>
//
//  <Link
//    href="/contact"
//    className="text-white hover:text-blue-100 transition-colors font-medium"
//  >
//    Contact Us
//  </Link>
// </nav>
//   )}
//
//   {/* Right Section */}
//   <div className="flex items-center gap-4">
//     {!user ? (
//       <>
//         <Button asChild variant="outline" className="bg-white text-blue-800 hover:bg-blue-100">
//           <Link href="/Patient">Login</Link>
//         </Button>
//         <Button asChild className="bg-white text-blue-800 hover:bg-blue-100">
//           <Link href="/signup">Sign Up</Link>
//         </Button>
//       </>
//     ) : user && isPatient ? (
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="bg-transparent hover:bg-transparent p-0">
//               <Avatar className="border-2 border-white hover:border-blue-200 transition-colors">
//                 <AvatarImage src="https://github.com/shadcn.png" />
//                 <AvatarFallback className="bg-blue-100 text-blue-800">CN</AvatarFallback>
//               </Avatar>
//             </NavigationMenuTrigger>
//             <NavigationMenuContent className="min-w-[160px] p-2 bg-white rounded-lg shadow-xl">
//               <div className="flex flex-col gap-2">
//                 <NavigationMenuLink asChild>
//                   <Link
//                     href="/profile"
//                     className="px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors"
//                   >
//                     Profile
//                   </Link>
//                 </NavigationMenuLink>
//                 <NavigationMenuLink asChild>
//                   <button
//                     onClick={handleLogout}
//                     className="text-left w-full px-4 py-2 hover:bg-blue-50 rounded-md text-gray-800 transition-colors"
//                   >
//                     Log Out
//                   </button>
//                 </NavigationMenuLink>
//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     ) : (
//       // if user exists but is not a patient
//       <Button
//         variant="outline"
//         onClick={handleLogout}
//         className="px-4 py-2 bg-white text-blue-800 hover:bg-blue-100 rounded-full"
//       >
//         Log out
//       </Button>
//     )}
//   </div>
// </div>
//
//     </header>
//   );
// };
//
// export default Header;







// 'use client'
// import React, { useState } from 'react';
// import { Menu, X, ChevronDown, User, LogOut, Home, Calendar, Activity, Phone, Info } from 'lucide-react';
//
// // Mock user state - replace with your actual auth logic
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' }); // Set to null to show login buttons
//
//   const handleLogout = () => {
//     setUser(null);
//     setIsProfileOpen(false);
//   };
//
//   return (
//       <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <a href="/" className="flex items-center gap-3 group">
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
//                 <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="hidden sm:block">
//               <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 HealthCare
//               </span>
//                 <div className="text-xs text-gray-500">Your Health Partner</div>
//               </div>
//             </a>
//
//             {/* Desktop Navigation */}
//             {user && (
//                 <nav className="hidden lg:flex items-center gap-1">
//                   <a
//                       href="/Home"
//                       className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//                   >
//                     <Home className="w-4 h-4" />
//                     Home
//                   </a>
//
//                   {/* Services Dropdown */}
//                   <div className="relative">
//                     <button
//                         onClick={() => setIsServicesOpen(!isServicesOpen)}
//                         className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//                     >
//                       Services
//                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
//                     </button>
//
//                     {isServicesOpen && (
//                         <>
//                           <div className="fixed inset-0 z-10" onClick={() => setIsServicesOpen(false)}></div>
//                           <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20 animate-fade-in">
//                             <div className="p-2">
//                               <a
//                                   href="/Booking"
//                                   className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 group"
//                               >
//                                 <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
//                                   <Calendar className="w-5 h-5 text-blue-600" />
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold">Book Appointment</div>
//                                   <div className="text-xs text-gray-500">Schedule your visit</div>
//                                 </div>
//                               </a>
//                               <a
//                                   href="/lab-tests"
//                                   className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 group"
//                               >
//                                 <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
//                                   <Activity className="w-5 h-5 text-purple-600" />
//                                 </div>
//                                 <div>
//                                   <div className="font-semibold">Analyze Tests</div>
//                                   <div className="text-xs text-gray-500">Review your results</div>
//                                 </div>
//                               </a>
//                             </div>
//                           </div>
//                         </>
//                     )}
//                   </div>
//
//                   <a
//                       href="/about"
//                       className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//                   >
//                     <Info className="w-4 h-4" />
//                     about
//                   </a>
//
//                   <a
//                       href="/contact"
//                       className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
//                   >
//                     <Phone className="w-4 h-4" />
//                     Contact
//                   </a>
//                 </nav>
//             )}
//
//             {/* Right Section */}
//             <div className="flex items-center gap-4">
//               {!user ? (
//                   <>
//                     <a
//                         href="/Patient"
//                         className="hidden sm:block px-6 py-2.5 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
//                     >
//                       Login
//                     </a>
//                     <a
//                         href="/signup"
//                         className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
//                     >
//                       Sign Up
//                     </a>
//                   </>
//               ) : (
//                   <>
//                     {/* Profile Dropdown */}
//                     <div className="hidden lg:block relative">
//                       <button
//                           onClick={() => setIsProfileOpen(!isProfileOpen)}
//                           className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
//                       >
//                         <div className="relative">
//                           <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50"></div>
//                           <img
//                               src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
//                               alt="Profile"
//                               className="relative w-10 h-10 rounded-full object-cover ring-2 ring-white"
//                           />
//                           <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
//                         </div>
//                         <div className="hidden xl:block text-left">
//                           <div className="text-sm font-semibold text-gray-800">{user.name}</div>
//                           <div className="text-xs text-gray-500">Patient</div>
//                         </div>
//                         <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
//                       </button>
//
//                       {isProfileOpen && (
//                           <>
//                             <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
//                             <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20 animate-fade-in">
//                               <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
//                                 <div className="flex items-center gap-3">
//                                   <img
//                                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
//                                       alt="Profile"
//                                       className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
//                                   />
//                                   <div>
//                                     <div className="font-semibold text-gray-800">{user.name}</div>
//                                     <div className="text-sm text-gray-500">{user.email}</div>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="p-2">
//                                 <a
//                                     href="/profile"
//                                     className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all duration-200"
//                                 >
//                                   <User className="w-5 h-5 text-blue-600" />
//                                   <span className="font-medium">My Profile</span>
//                                 </a>
//                                 <button
//                                     onClick={handleLogout}
//                                     className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
//                                 >
//                                   <LogOut className="w-5 h-5" />
//                                   <span className="font-medium">Log Out</span>
//                                 </button>
//                               </div>
//                             </div>
//                           </>
//                       )}
//                     </div>
//
//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                     >
//                       {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                     </button>
//                   </>
//               )}
//
//               {/* Mobile Menu Button for non-logged users */}
//               {!user && (
//                   <button
//                       onClick={() => setIsMenuOpen(!isMenuOpen)}
//                       className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//                   </button>
//               )}
//             </div>
//           </div>
//
//           {/* Mobile Menu */}
//           {isMenuOpen && (
//               <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
//                 {user ? (
//                     <>
//                       <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
//                         <img
//                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
//                             alt="Profile"
//                             className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
//                         />
//                         <div>
//                           <div className="font-semibold text-gray-800">{user.name}</div>
//                           <div className="text-sm text-gray-500">{user.email}</div>
//                         </div>
//                       </div>
//                       <nav className="space-y-1">
//                         <a href="/Home" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <Home className="w-5 h-5 text-blue-600" />
//                           <span className="font-medium">Home</span>
//                         </a>
//                         <a href="/Booking" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <Calendar className="w-5 h-5 text-blue-600" />
//                           <span className="font-medium">Book Appointment</span>
//                         </a>
//                         <a href="/lab-tests" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <Activity className="w-5 h-5 text-purple-600" />
//                           <span className="font-medium">Analyze Tests</span>
//                         </a>
//                         <a href="/about" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <Info className="w-5 h-5 text-blue-600" />
//                           <span className="font-medium">about</span>
//                         </a>
//                         <a href="/contact" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <Phone className="w-5 h-5 text-blue-600" />
//                           <span className="font-medium">Contact</span>
//                         </a>
//                         <a href="/profile" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-xl transition-all">
//                           <User className="w-5 h-5 text-blue-600" />
//                           <span className="font-medium">My Profile</span>
//                         </a>
//                         <button
//                             onClick={handleLogout}
//                             className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
//                         >
//                           <LogOut className="w-5 h-5" />
//                           <span className="font-medium">Log Out</span>
//                         </button>
//                       </nav>
//                     </>
//                 ) : (
//                     <div className="space-y-2">
//                       <a
//                           href="/Patient"
//                           className="block w-full px-6 py-3 text-center text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition-all"
//                       >
//                         Login
//                       </a>
//                       <a
//                           href="/signup"
//                           className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg"
//                       >
//                         Sign Up
//                       </a>
//                     </div>
//                 )}
//               </div>
//           )}
//         </div>
//
//         <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.2s ease-out;
//         }
//       `}</style>
//       </header>
//   );
// };
//
'use client'
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  Home,
  Calendar,
  Activity,
  Phone,
  Info,
  Heart,
  Bell,
  Settings,
  FileText,
  Shield,
  MessageSquare,
  HelpCircle,
  Globe,
  Moon,
  Sun
} from 'lucide-react';
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation";

const MockHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        // First, check if we're in the browser (client-side)
        if (typeof window === 'undefined') return;

        // Check if supabase client is available
        if (!supabase) {
          console.error('Supabase client is not available');
          return;
        }

        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
          console.error('Session error:', sessionError);
          setUser(null);
          return;
        }

        if (!session) {
          setUser(null);
          return;
        }

        const authUser = session.user;

        // Try to fetch user data from your users table
        try {
          const { data: userData, error: userError } = await supabase
              .from('users')
              .select('*')
              .eq('id', authUser.id)
              .maybeSingle(); // Use maybeSingle instead of single to avoid throwing on no rows

          if (userError) {
            console.warn('User data fetch error (falling back to auth data):', userError);
            // Fall back to auth user data
          }

          // Generate avatar based on email if no avatar_url
          const avatarUrl = userData?.avatar_url ||
              authUser.user_metadata?.avatar_url ||
              `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.email || 'User')}&background=random&color=fff`;

          // Get name from various sources
          const userName = userData?.full_name ||
              authUser.user_metadata?.full_name ||
              authUser.user_metadata?.name ||
              authUser.email?.split('@')[0] ||
              'User';

          // Set user with available data
          setUser({
            id: authUser.id,
            name: userName,
            email: authUser.email,
            avatar: avatarUrl,
            role: userData?.role || 'Patient',
            appointments: userData?.appointments_count || 0,
            unreadNotifications: 0 // Initialize as 0
          });
        } catch (dbError) {
          console.error('Database error:', dbError);
          // Fallback: use auth data only
          setUser({
            id: authUser.id,
            name: authUser.email?.split('@')[0] || 'User',
            email: authUser.email,
            avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(authUser.email || 'User')}&background=random&color=fff`,
            role: 'Patient',
            appointments: 0,
            unreadNotifications: 0
          });
        }
      } catch (error) {
        console.error('Error in fetchUser:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log('Auth state changed:', event);
          if (event === 'SIGNED_IN' && session) {
            fetchUser();
          } else if (event === 'SIGNED_OUT') {
            setUser(null);
          }
        }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Mock notifications (simplified)
  useEffect(() => {
    if (user) {
      setNotifications([
        { id: 1, title: 'Welcome!', message: 'Welcome to MediCare', time: 'Just now', read: false },
      ]);
    } else {
      setNotifications([]);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsProfileOpen(false);
      router.push("/Patient");
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Show loading skeleton if still loading
  if (loading) {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo skeleton */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 dark:border-gray-800 rounded-xl animate-pulse"></div>
                <div className="hidden sm:block">
                  <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
                </div>
              </div>
              {/* Right section skeleton */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </header>
    );
  }

  return (
      <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediCare
              </span>
                <div className="text-xs text-gray-500 dark:text-gray-400">Your Health Partner</div>
              </div>
            </a>

            {/* Desktop Navigation - Always show main nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <a
                  href="/"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </a>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 flex items-center gap-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsServicesOpen(false)}></div>
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-20 animate-fade-in">
                        <div className="p-3 space-y-1">
                          <a
                              href="/Booking"
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-200 group"
                          >
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                              <div className="font-semibold">Book Appointment</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Schedule your visit</div>
                            </div>
                          </a>

                          <a
                              href="/lab-tests"
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-200 group"
                          >
                            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                              <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                              <div className="font-semibold">Analyze Tests</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Review your results</div>
                            </div>
                          </a>

                          <a
                              href="/profile"
                              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 rounded-xl transition-all duration-200 group"
                          >
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                              <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <div className="font-semibold">Medical Records</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Access your history</div>
                            </div>
                          </a>

                        </div>
                      </div>
                    </>
                )}
              </div>

              <a
                  href="/blogs"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200"
              >
                Blogs
              </a>

              <a
                  href="/about"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                About
              </a>

              <a
                  href="/contact"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact
              </a>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {!user ? (
                  // Show when user is NOT logged in
                  <>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    <a
                        href="/patient"
                        className="hidden sm:block px-6 py-2.5 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    >
                      Login
                    </a>

                    <a
                        href="/signup"
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    >
                      Sign Up
                    </a>
                  </>
              ) : (
                  // Show when user IS logged in
                  <>
                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                      <button
                          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                      >
                        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        {notifications.filter(n => !n.read).length > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                        )}
                      </button>

                      {isNotificationsOpen && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsNotificationsOpen(false)}></div>
                            <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-20 animate-fade-in">
                              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex justify-between items-center">
                                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Notifications</h3>
                                  <button
                                      onClick={markAllAsRead}
                                      className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                  >
                                    Mark all as read
                                  </button>
                                </div>
                              </div>
                              <div className="max-h-96 overflow-y-auto">
                                {notifications.length > 0 ? (
                                    notifications.map(notification => (
                                        <div
                                            key={notification.id}
                                            className={`p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${!notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}
                                            onClick={() => markNotificationAsRead(notification.id)}
                                        >
                                          <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{notification.title}</h4>
                                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{notification.message}</p>
                                              <span className="text-xs text-gray-500 dark:text-gray-500 mt-2 block">{notification.time}</span>
                                            </div>
                                            {!notification.read && (
                                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                                            )}
                                          </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-8 text-center">
                                      <Bell className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                                      <p className="text-gray-500 dark:text-gray-400">No notifications</p>
                                    </div>
                                )}
                              </div>
                              <div className="p-4 border-t border-gray-200 dark:border-gray-800">
                                <a
                                    href="/notifications"
                                    className="text-center block w-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                                >
                                  View All
                                </a>
                              </div>
                            </div>
                          </>
                      )}
                    </div>

                    {/* Profile Dropdown */}
                    <div className="hidden lg:block relative">
                      <button
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                          className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-50"></div>
                          <img
                              src={user.avatar}
                              alt="Profile"
                              className="relative w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-gray-900"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`;
                              }}
                          />
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-900"></div>
                        </div>
                        <div className="hidden xl:block text-left">
                          <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{user.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{user.role}</div>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isProfileOpen && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                            <div className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden z-20 animate-fade-in">
                              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-b border-gray-200 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                  <img
                                      src={user.avatar}
                                      alt="Profile"
                                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-900 shadow-md"
                                      onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`;
                                      }}
                                  />
                                  <div>
                                    <div className="font-semibold text-gray-800 dark:text-gray-200">{user.name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                    <div className="flex items-center gap-4 mt-2">
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                                  {user.appointments} Appointments
                                </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="p-2">
                                <a
                                    href="/profile"
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-200"
                                >
                                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  <span className="font-medium">My Profile</span>
                                </a>

                                <a
                                    href="/appointments"
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-200"
                                >
                                  <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  <span className="font-medium">My Appointments</span>
                                </a>

                                <a
                                    href="/settings"
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-200"
                                >
                                  <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  <span className="font-medium">Settings</span>
                                </a>

                                <a
                                    href="/help"
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all duration-200"
                                >
                                  <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  <span className="font-medium">Help & Support</span>
                                </a>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all duration-200 mt-2"
                                >
                                  <LogOut className="w-5 h-5" />
                                  <span className="font-medium">Log Out</span>
                                </button>
                              </div>
                            </div>
                          </>
                      )}
                    </div>
                  </>
              )}

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800 animate-fade-in">
                {user ? (
                    // Mobile menu when user IS logged in
                    <>
                      <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                        <img
                            src={user.avatar}
                            alt="Profile"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-900 shadow-md"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&color=fff`;
                            }}
                        />
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-gray-200">{user.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                          <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full">
                        {user.appointments} Appointments
                      </span>
                          </div>
                        </div>
                      </div>

                      <nav className="space-y-1">
                        <a
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">Home</span>
                        </a>

                        <a
                            href="/Booking"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">Book Appointment</span>
                        </a>

                        <a
                            href="/lab-tests"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <span className="font-medium">Analyze Tests</span>
                        </a>

                        <a
                            href="/blogs"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="font-medium">Blogs</span>
                        </a>

                        <a
                            href="/about"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">About</span>
                        </a>

                        <a
                            href="/contact"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">Contact</span>
                        </a>

                        <a
                            href="/profile"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">My Profile</span>
                        </a>

                        <a
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                        >
                          <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <span className="font-medium">Settings</span>
                        </a>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium">Log Out</span>
                        </button>
                      </nav>
                    </>
                ) : (
                    // Mobile menu when user is NOT logged in
                    <div className="space-y-2">
                      <a
                          href="/"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <Home className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">Home</span>
                      </a>

                      <a
                          href="/Booking"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">Book Appointment</span>
                      </a>

                      <a
                          href="/lab-tests"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="font-medium">Analyze Tests</span>
                      </a>

                      <a
                          href="/blogs"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="font-medium">Blogs</span>
                      </a>

                      <a
                          href="/about"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">About</span>
                      </a>

                      <a
                          href="/contact"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all"
                      >
                        <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium">Contact</span>
                      </a>
                      <a
                          href="/patient"
                          className="block w-full px-6 py-3 text-center text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                      >
                        Login
                      </a>
                      <a
                          href="/signup"
                          className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                      >
                        Sign Up
                      </a>
                      <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                )}
              </div>
          )}
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.2s ease-out;
          }
        `}</style>
      </header>
  );
};

export default MockHeader;