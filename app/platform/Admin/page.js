// 'use client'
// import React, { useState } from "react";
// import { supabase } from "@/lib/supabaseclient";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell
// } from "@/components/ui/table";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter
// } from "@/components/ui/dialog";
// import { PlusCircle, Pencil, Trash2 } from "lucide-react";
// import Appointment from "../DoctorHome/Appointment/page";
//
// const AdminDashboard = () => {
//   const [doctors, setDoctors] = useState([
//     { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", email: "john@example.com", phone:"0771699070",experiance:12 },
//     { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", email: "jane@example.com" },
//   ]);
//   const [appoiments, setAppoiments] = useState([
//     { id: 1, DoctorName: "Dr. John Doe", PatientName: "CAlice Johnson", Date: "02/01/2025",Time:"11:00" },
//     { id: 2, DoctorName: "Dr. John Doe", PatientName: "CAlice Johnson", Date: "02/01/2025",Time:"11:00" },
//
//   ]);
//
//   const [patients, setPatients] = useState([
//     { id: 1, name: "Alice Johnson", age: 32, email: "alice@example.com" },
//     { id: 2, name: "Bob Brown", age: 45, email: "bob@example.com" },
//   ]);
//
//   const [newDoctor, setNewDoctor] = useState({ name: "", specialty: "", email: "",phone:"",experience:"",password:"" });
//   const [newPatient, setNewPatient] = useState({ name: "", age: "", email: "" });
//   const [newAppoiment, setNewAppoiment] = useState({ Doctorname: "",  PatientName: "", Date: "" ,Time:""});
//
//   const addDoctor = async () => {
//     try {
//       // Create auth user (automatically logs in if email confirmations are disabled)
//       const { data: authData, error: authError } = await supabase.auth.signUp({
//         email: newDoctor.email,
//         password: newDoctor.password,
//       });
//
//       if (authError) throw authError;
//       if (!authData.user) throw new Error('User creation failed');
//
//       // Ensure the client is authenticated (optional check)
//       const { data: { user } } = await supabase.auth.getUser();
//       if (!user) throw new Error('User not authenticated');
//
//       // Insert into doctor table with authenticated session
//       const { data: doctorData, error } = await supabase
//         .from('doctor')
//         .insert([{
//           id: authData.user.id,
//           name: newDoctor.name,
//           specialty: newDoctor.specialty,
//           email: authData.user.email,
//           phone: newDoctor.phone,
//           experience: newDoctor.experience,
//         }]);
//
//       if (error) throw error;
//       // if (!doctorData) throw new Error('Doctor creation failed');
//       alert('Registration successful!');
//       // Update local state
//       setDoctors([...doctors, doctorData[0]]);
//       setNewDoctor({
//         name: "",
//         specialty: "",
//         email: "",
//         phone: "",
//         experience: "",
//         password: ""
//       });
//
//     } catch (error) {
//       console.error('Error adding doctor:', error);
//       alert(error.message);
//     }
//   };
//
//   const addPatient = () => {
//     setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
//     setNewPatient({ name: "", age: "", email: "" });
//   };
//    const addAppoiment = () => {
//     setAppoiments([...Appointment, { ...newAppoiment, id: patients.length + 1 }]);
//     setNewAppoiment({ Doctorname: "", PatientName: "", Date: "",Time:"" });
//   };
//
//   return (
//     <div className="flex h-screen bg-gray-50">
//       <div className="flex-1 p-8 overflow-auto">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
//
//           {/* Doctors Section */}
//           <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-blue-600">Doctors Management</h2>
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button className="gap-2">
//                     <PlusCircle size={18} />
//                     Add Doctor
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Add New Doctor</DialogTitle>
//                     </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <Input
//             placeholder="Full Name"
//             value={newDoctor.name}
//             onChange={(e) => setNewDoctor({...newDoctor, name: e.target.value})}
//           />
//           <Input
//             placeholder="Specialty"
//             value={newDoctor.specialty}
//             onChange={(e) => setNewDoctor({...newDoctor, specialty: e.target.value})}
//           />
//           <Input
//             placeholder="Email"
//             type="email"
//             value={newDoctor.email}
//             onChange={(e) => setNewDoctor({...newDoctor, email: e.target.value})}
//           />
//           <Input
//             placeholder="Phone"
//             value={newDoctor.phone}
//             onChange={(e) => setNewDoctor({...newDoctor, phone: e.target.value})}
//           />
//           <Input
//             placeholder="Experience (years)"
//             type="number"
//             value={newDoctor.experience}
//             onChange={(e) => setNewDoctor({...newDoctor, experience: e.target.value})}
//           />
//           <Input
//             placeholder="Password"
//             type="password"
//             value={newDoctor.password}
//             onChange={(e) => setNewDoctor({...newDoctor, password: e.target.value})}
//           />
//         </div>
//         <DialogFooter>
//           <Button onClick={addDoctor}>Save Doctor</Button>
//         </DialogFooter>
//       </DialogContent>
//               </Dialog>
//             </div>
//
//             <div className="border rounded-lg overflow-hidden">
//               <Table>
//                 <TableHeader className="bg-gray-50">
//                   <TableRow>
//                     <TableHead className="w-[30%]">Name</TableHead>
//                     <TableHead className="w-[25%]">Specialty</TableHead>
//                     <TableHead className="w-[30%]">Email</TableHead>
//                     <TableHead className="w-[15%] text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {doctors.map((doctor) => (
//                     <TableRow key={doctor.id} className="hover:bg-gray-50">
//                       <TableCell className="font-medium">{doctor.name}</TableCell>
//                       <TableCell>{doctor.specialty}</TableCell>
//                       <TableCell>{doctor.email}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="icon">
//                           <Pencil className="w-4 h-4 text-blue-600" />
//                         </Button>
//                         <Button variant="ghost" size="icon" className="ml-2">
//                           <Trash2 className="w-4 h-4 text-red-600" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//
//           {/* Patients Section */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-green-600">Patients Management</h2>
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button className="gap-2">
//                     <PlusCircle size={18} />
//                     Add Patient
//                   </Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Add New Patient</DialogTitle>
//                   </DialogHeader>
//                   <div className="grid gap-4 py-4">
//                     <Input
//                       placeholder="Full Name"
//                       value={newPatient.name}
//                       onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
//                     />
//                     <Input
//                       placeholder="Age"
//                       type="number"
//                       value={newPatient.age}
//                       onChange={(e) => setNewPatient({...newPatient, age: e.target.value})}
//                     />
//                     <Input
//                       placeholder="Email"
//                       type="email"
//                       value={newPatient.email}
//                       onChange={(e) => setNewPatient({...newPatient, email: e.target.value})}
//                     />
//                   </div>
//                   <DialogFooter>
//                     <Button onClick={addPatient}>Save Patient</Button>
//                   </DialogFooter>
//                 </DialogContent>
//               </Dialog>
//             </div>
//
//             <div className="border rounded-lg overflow-hidden">
//               <Table>
//                 <TableHeader className="bg-gray-50">
//                   <TableRow>
//                     <TableHead className="w-[30%]">Name</TableHead>
//                     <TableHead className="w-[20%]">Age</TableHead>
//                     <TableHead className="w-[35%]">Email</TableHead>
//                     <TableHead className="w-[15%] text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {patients.map((patient) => (
//                     <TableRow key={patient.id} className="hover:bg-gray-50">
//                       <TableCell className="font-medium">{patient.name}</TableCell>
//                       <TableCell>{patient.age}</TableCell>
//                       <TableCell>{patient.email}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="icon">
//                           <Pencil className="w-4 h-4 text-blue-600" />
//                         </Button>
//                         <Button variant="ghost" size="icon" className="ml-2">
//                           <Trash2 className="w-4 h-4 text-red-600" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//            {/* Appoiment Section */}
//            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 mt-8">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-xl font-semibold text-blue-600">Appoiments Management</h2>
//             </div>
//             <div className="border rounded-lg overflow-hidden">
//               <Table>
//                 <TableHeader className="bg-gray-50">
//                   <TableRow>
//                     <TableHead className="w-[30%]">Docter Name</TableHead>
//                     <TableHead className="w-[25%]">Patient Name</TableHead>
//                     <TableHead className="w-[30%]">Date</TableHead>
//                     <TableHead className="w-[30%]">Time</TableHead>
//                     <TableHead className="w-[15%] text-right">Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {doctors.map((doctor) => (
//                     <TableRow key={doctor.id} className="hover:bg-gray-50">
//                       <TableCell className="font-medium">{doctor.name}</TableCell>
//                       <TableCell>{doctor.specialty}</TableCell>
//                       <TableCell>{doctor.email}</TableCell>
//                       <TableCell className="text-right">
//                         <Button variant="ghost" size="icon">
//                           <Pencil className="w-4 h-4 text-blue-600" />
//                         </Button>
//                         <Button variant="ghost" size="icon" className="ml-2">
//                           <Trash2 className="w-4 h-4 text-red-600" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default AdminDashboard;
'use client'
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Stethoscope,
  Calendar,
  Activity,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Settings,
  Bell,
  Search,
  LogOut,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter,
  Plus,
  ChevronRight,
  BarChart3,
  PieChart,
  AlertCircle
} from 'lucide-react';

const ModernAdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [timeRange, setTimeRange] = useState('week');

  // Mock statistics data
  const stats = [
    {
      label: 'Total Patients',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      label: 'Total Doctors',
      value: '156',
      change: '+3.2%',
      trend: 'up',
      icon: <Stethoscope className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      label: 'Appointments',
      value: '1,284',
      change: '+8.7%',
      trend: 'up',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      label: 'Revenue',
      value: '$48.2K',
      change: '-2.4%',
      trend: 'down',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const recentPatients = [
    { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', joined: '2024-03-15', status: 'Active', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
    { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', joined: '2024-03-14', status: 'Active', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { id: 3, name: 'Mohamed Ali', email: 'mohamed@example.com', joined: '2024-03-13', status: 'Inactive', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100' },
    { id: 4, name: 'Fatima Ibrahim', email: 'fatima@example.com', joined: '2024-03-12', status: 'Active', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  ];

  const recentDoctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', patients: 245, status: 'Active', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Dentist', patients: 198, status: 'Active', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100' },
    { id: 3, name: 'Dr. Emily Rodriguez', specialty: 'Orthopedic', patients: 167, status: 'Active', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100' },
  ];

  const pendingApprovals = [
    { id: 1, type: 'Doctor', name: 'Dr. James Wilson', specialty: 'Otology', date: '2024-03-15', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100' },
    { id: 2, type: 'Doctor', name: 'Dr. Lisa Thompson', specialty: 'Dentist', date: '2024-03-14', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'patients', label: 'Patients', icon: <Users className="w-5 h-5" /> },
    { id: 'doctors', label: 'Doctors', icon: <Stethoscope className="w-5 h-5" /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-2xl border-r border-gray-100 flex flex-col">
          {/* Logo */}
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
                <p className="text-sm text-gray-500">Admin Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeMenu === item.id
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {activeMenu === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-100">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all font-medium">
              <LogOut className="w-5 h-5" />
              <span>Log Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Admin Dashboard</h2>
                <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                  />
                </div>

                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell className="w-6 h-6 text-gray-600" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                  <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                      alt="Admin"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Admin User</p>
                    <p className="text-sm text-gray-500">Administrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-xl text-white`}>
                        {stat.icon}
                      </div>
                      <span className={`flex items-center gap-1 text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {stat.change}
                  </span>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              {/* Recent Patients */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Recent Patients
                  </h3>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {recentPatients.map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <img
                              src={patient.image}
                              alt={patient.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">{patient.name}</p>
                            <p className="text-sm text-gray-500">{patient.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          patient.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-gray-100 text-gray-700'
                      }`}>
                        {patient.status}
                      </span>
                          <button className="p-1 hover:bg-gray-100 rounded-lg">
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* Recent Doctors */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-purple-600" />
                    Recent Doctors
                  </h3>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {recentDoctors.map((doctor) => (
                      <div key={doctor.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                          />
                          <div>
                            <p className="font-semibold text-gray-800">{doctor.name}</p>
                            <p className="text-sm text-gray-500">{doctor.specialty} • {doctor.patients} patients</p>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pending Approvals */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  Pending Approvals
                  <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">
                  {pendingApprovals.length}
                </span>
                </h3>
              </div>

              <div className="space-y-3">
                {pendingApprovals.map((approval) => (
                    <div key={approval.id} className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-100 hover:border-orange-200 transition-colors">
                      <div className="flex items-center gap-4">
                        <img
                            src={approval.image}
                            alt={approval.name}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500"
                        />
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="font-semibold text-gray-800">{approval.name}</p>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                          {approval.type}
                        </span>
                          </div>
                          <p className="text-sm text-gray-500">{approval.specialty} • Applied {approval.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
  );
};

export default ModernAdminDashboard;