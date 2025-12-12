// 'use client'
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Ensure this import is correct
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { supabase } from "@/lib/supabaseclient";
//
// const formSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
// });
//
// export default function AdminForm() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isClient, setIsClient] = useState(false);  // State to handle client-side rendering
//   const router = useRouter();
//
//   useEffect(() => {
//     setIsClient(true);  // This ensures the router logic runs on the client
//   }, []);
//
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: "", password: "" },
//   });
//
//   async function onSubmit(values) {
//     try {
//       setLoading(true);
//       setError(null);
//
//       // 1. Authenticate user
//       const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
//         email: values.email,
//         password: values.password,
//       });
//
//       if (authError) throw authError;
//
//       // 2. Get admin profile
//       const { data: adminData, error: profileError } = await supabase
//         .from("admins")
//         .select("*")
//         .eq("user_id", authData.user.id) // Match auth user ID
//         .single();
//
//       if (!adminData) {
//         await supabase.auth.signOut();
//         throw new Error("No admin profile found");
//       }
//
//       // 3. Redirect to admin dashboard
//       if (isClient) {  // Only execute the redirection on the client side
//         router.push("/Admin");
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }
//
//   if (!isClient) {
//     return null; // Render nothing during SSR
//   }
//
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white mt-20 mb-20 rounded-2xl shadow-lg">
//         <header className="text-center space-y-4">
//           <div className="flex flex-col items-center">
//             <div className="p-4 bg-blue-100 rounded-full">
//               <img
//                 src="/assets/icons/admin-icon.svg"
//                 className="w-20 h-20 text-blue-600"
//                 alt="Admin Icon"
//               />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mt-4">Admin Portal</h1>
//             <p className="text-gray-500 mt-2">Manage system settings and data</p>
//           </div>
//         </header>
//
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               {...form.register("email")}
//               id="email"
//               type="email"
//               placeholder="Enter your admin email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {form.formState.errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {form.formState.errors.email.message}
//               </p>
//             )}
//           </div>
//
//           {/* Password Input */}
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               {...form.register("password")}
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {form.formState.errors.password && (
//               <p className="text-red-500 text-sm mt-1">
//                 {form.formState.errors.password.message}
//               </p>
//             )}
//           </div>
//
//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//
//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition-colors duration-200"
//             disabled={loading}
//           >
//             {loading ? "Authenticating..." : "Continue"}
//           </Button>
//
//         </form>
//       </div>
//     </div>
//   );
// }
'use client'
import AdminForm from '@/components/Adminform'
import React from 'react'
import {
  Shield,
  Users,
  Settings,
  Clock,
  Database,
  Sparkles,
  Zap,
  Bell,
  Activity,
  TrendingUp,
  Lock,
  Server,
  Globe,
  Cpu
} from "lucide-react";

export default function AdminLogin() {
  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "System Security", color: "from-blue-500 to-cyan-500" },
    { icon: <Database className="w-5 h-5" />, text: "Data Management", color: "from-green-500 to-emerald-500" },
    { icon: <Users className="w-5 h-5" />, text: "User Control", color: "from-purple-500 to-indigo-500" },
    { icon: <Server className="w-5 h-5" />, text: "Server Monitoring", color: "from-orange-500 to-red-500" },
  ];

  const stats = [
    { label: "Active Users", value: "15K+", icon: <Users className="w-4 h-4" />, trend: "+5%" },
    { label: "System Uptime", value: "99.9%", icon: <Activity className="w-4 h-4" />, trend: "Stable" },
    { label: "Data Security", value: "100%", icon: <Shield className="w-4 h-4" />, trend: "Protected" },
  ];

  return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="px-4 sm:px-6 lg:px-8 pt-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="group flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-gray-800 to-black border border-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">Admin<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Control</span></h1>
                    <p className="text-sm text-gray-400">System Administration Portal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800 transition-all">
                    <Bell className="w-4 h-4 text-gray-300" />
                    <span className="font-medium text-gray-300">System Alerts</span>
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium rounded-xl hover:shadow-lg transition-all border border-gray-700">
                    Server Status
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-2xl">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-700">
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${stat.color || 'from-gray-600 to-gray-700'} text-white`}>
                          {stat.icon}
                        </div>
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-400">{stat.label}</div>
                        <span className="text-xs font-semibold bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">
                      {stat.trend}
                    </span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Info */}
                <div className="space-y-8">
                  {/* Hero Section */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-gray-700">
                          <Globe className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            System Administration
                          </h2>
                          <p className="text-gray-300">
                            Full control over healthcare platform
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                          <div className="text-2xl font-bold text-white mb-1">256-bit</div>
                          <div className="text-sm text-gray-300">Encryption</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                          <div className="text-2xl font-bold text-white mb-1">Multi-Factor</div>
                          <div className="text-sm text-gray-300">Authentication</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-6 text-white shadow-2xl border border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl border border-gray-700">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Admin Controls</h3>
                        <p className="text-gray-300">Full system management</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-gray-700">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                              {feature.icon}
                            </div>
                            <span className="text-sm font-medium">{feature.text}</span>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl text-white">
                          <Lock className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Secure Access</h4>
                          <p className="text-sm text-gray-400">Military-grade encryption</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        All data transmissions are secured with 256-bit encryption and multi-factor authentication.
                      </p>
                    </div>

                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl text-white">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Real-time Monitoring</h4>
                          <p className="text-sm text-gray-400">System analytics</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Monitor system performance, user activity, and security logs in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Form */}
                <div className="space-y-8">
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-700">
                    <AdminForm />
                  </div>

                  {/* Quick Links */}
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700">
                    <h4 className="font-bold text-white mb-4">System Actions</h4>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-700/50">
                            <Settings className="w-4 h-4 text-blue-400" />
                          </div>
                          <span className="font-medium text-gray-300">System Settings</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-900/30 rounded-lg border border-green-700/50">
                            <Database className="w-4 h-4 text-green-400" />
                          </div>
                          <span className="font-medium text-gray-300">Database Backup</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      <button className="w-full flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-xl border border-gray-700 transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-purple-900/30 rounded-lg border border-purple-700/50">
                            <Users className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="font-medium text-gray-300">User Management</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-4 sm:px-6 lg:px-8 py-8 mt-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-400">© {new Date().getFullYear()} AdminControl. Restricted access only.</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <a href="/security-policy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      Security Policy
                    </a>
                    <a href="/audit-logs" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      Audit Logs
                    </a>
                    <a href="/technical-support" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      Technical Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Add CSS for animations */}
        <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      </main>
  )
}