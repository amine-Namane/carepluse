// 'use client'
// import  { PatientForm } from "@/components/Patientform" 
// import { supabase } from '@/lib/supabaseclient';
// import { useRouter } from 'next/navigation';
// import Image from "next/image";
// import Link from "next/link";
// // import './globals.css' ;
// import { fromJSON } from "postcss";
// import { useState } from "react";
// export default function Patient() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const router = useRouter();
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     setLoading(false);
//     if (error) {
//       setError(error.message);
//     } else {
//       router.push('/dashboard'); // Redirect to dashboard after login
//     }};
// return (
//   <main className="min-h-screen bg-gray-50">
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto">
//         <header className="mb-12 text-center">
//           <Link href="/" className="inline-block">
//             <div className="flex items-center gap-2 mb-8">
//               <Image 
//                 src="./assets/icons/medical-icon.svg"
//                 alt="Healthcare Logo"
//                 width={48}
//                 height={48}
//                 className="w-12 h-12"
//               />
//               <h1 className="text-3xl font-bold text-gray-900">
//                 Healthcare Portal.
//               </h1>
//             </div>
//           </Link>
//         </header>

//         <div className="flex justify-center">
//           <PatientForm />
//         </div>

//         <footer className="mt-12 text-center text-gray-600">
//           <p className="text-sm">
//             © {new Date().getFullYear()} Healthcare Services. All rights reserved.
//           </p>
//           <div className="mt-4 flex justify-center gap-4">
//             <Link href="/privacy" className="hover:text-blue-600 transition-colors">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:text-blue-600 transition-colors">
//               Terms of Service
//             </Link>
//           </div>
//         </footer>
//       </div>
//     </div>
//   </main>
// )}
// 'use client'
// import { PatientForm } from "@/components/Patientform";
// import { useRouter } from 'next/navigation';
// import Image from "next/image";
// import Link from "next/link";
//
// export default function Patient() {
//   const router = useRouter();
//
//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           <header className="mb-12 text-center">
//             <Link href="/" className="inline-block">
//               <div className="flex items-center gap-2 mb-8">
//                 <Image
//                   src="/assets/icons/medical-icon.svg"
//                   alt="Healthcare Logo"
//                   width={48}
//                   height={48}
//                   className="w-12 h-12"
//                 />
//                 <h1 className="text-3xl font-bold text-gray-900">
//                   Healthcare Portal
//                 </h1>
//               </div>
//             </Link>
//           </header>
//
//           <div className="flex justify-center">
//             <PatientForm />
//           </div>
//
//           <footer className="mt-12 text-center text-gray-600">
//             <p className="text-sm">
//               © {new Date().getFullYear()} Healthcare Services. All rights reserved.
//             </p>
//             <div className="mt-4 flex justify-center gap-4">
//               <Link href="/privacy" className="hover:text-blue-600 transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="hover:text-blue-600 transition-colors">
//                 Terms of Service
//               </Link>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </main>
//   );
// }
'use client'
import { PatientForm } from "@/components/Patientform";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  HeartPulse,
  Clock,
  Users,
  Sparkles,
  Zap,
  Bell,
  Activity,
  TrendingUp
} from "lucide-react";

export default function Patient() {
  const router = useRouter();

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "HIPAA Compliant Security", color: "from-blue-500 to-cyan-500" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Access", color: "from-green-500 to-emerald-500" },
    { icon: <HeartPulse className="w-5 h-5" />, text: "Health Monitoring", color: "from-red-500 to-pink-500" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Results", color: "from-yellow-500 to-orange-500" },
  ];

  const stats = [
    { label: "Active Patients", value: "10K+", icon: <Users className="w-4 h-4" />, trend: "+12%" },
    { label: "Avg Response Time", value: "< 2min", icon: <Activity className="w-4 h-4" />, trend: "Fast" },
    { label: "Satisfaction", value: "98%", icon: <TrendingUp className="w-4 h-4" />, trend: "Excellent" },
  ];

  return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="px-4 sm:px-6 lg:px-8 pt-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <HeartPulse className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-800">Health<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Connect</span></h1>
                    <p className="text-sm text-gray-500">Medical Excellence Portal</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                  <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white transition-all">
                    <Bell className="w-4 h-4" />
                    <span className="font-medium">Help Center</span>
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all">
                    Emergency Contact
                  </button>
                </div>
              </div></div>
          </header>

          {/* Main Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 border border-gray-100">
                    <PatientForm />
                  </div>


                </div>

                {/* Right Column - Info */}
                <div className="space-y-8">
                  {/* Hero Section */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-6 lg:p-8">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                          <HeartPulse className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                            Your Health, Our Priority
                          </h2>
                          <p className="text-blue-100">
                            Access comprehensive healthcare services securely
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">24/7</div>
                          <div className="text-sm text-blue-100">Medical Support</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                          <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                          <div className="text-sm text-blue-100">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                          <Shield className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Secure Access</h4>
                          <p className="text-sm text-gray-500">End-to-end encrypted</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Your medical data is protected with bank-level security and HIPAA compliance.
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Real-time Updates</h4>
                          <p className="text-sm text-gray-500">Instant notifications</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Get notified immediately about test results, appointments, and medication updates.
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 text-white shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Premium Features</h3>
                        <p className="text-blue-100">Unlock advanced healthcare tools</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>
                              {feature.icon}
                            </div>
                            <span className="text-sm font-medium">{feature.text}</span>
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-4 sm:px-6 lg:px-8 py-8 mt-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">© {new Date().getFullYear()} HealthConnect. All rights reserved.</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </Link>
                    <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      Contact Support
                    </Link>
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
  );
}