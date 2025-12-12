// "use client";
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, Controller } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import CustemForm from './custemForm';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useState } from 'react';
// import Link from "next/link";
// import { supabase } from "@/lib/supabaseclient";
// import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   user: z.string().min(2, { message: "Username must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), {
//     message: "Phone number must be at least 10 digits.",
//   }),
// });

// export function PatientForm() {
//   // const router = useRouter();
//   // const [phoneValue, setPhoneValue] = useState();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setError(null);

//   //   const { data, error } = await supabase.auth.signInWithPassword({
//   //     email,
//   //     password,
//   //   });

//   //   if (error) {
//   //     setError(error.message);
//   //   } else {
//   //     console.log("User logged in:", data.user);
//   //     router.push("/dashboard"); // Redirect to the patient dashboard
//   //   }};
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   // function onSubmit(values) {
//   //   console.log(values);
//   //   alert("Form submitted successfully!");
//   //   form.reset();
//   //   router.push("/Home");
//   // }
//   async function onSubmit(values) {
//     try {
//       // 1. Authenticate user
//       const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
//         email: values.email,
//         password: values.password
//       });
  
//       if (authError) throw authError;
//   console.log(values);
//       // 2. Get doctor profile (corrected table/column)
//       const { data: doctorData, error: profileError } = await supabase
//         .from('patients')
//         .select('*')
//         .eq('user_id', authData.user.id) // Match auth user ID
//         .single();
  

        
//       //3. Handle missing profile
//       if (!doctorData) {
//         await supabase.auth.signOut();
//         throw new Error('No doctor profile found');
//       }
  
//       // // 4. Verify role
//       // if (doctorData.role !== 'doctor') {
//       //   await supabase.auth.signOut();
//       //   throw new Error('Access restricted to medical staff');
//       // }
  
//       // 5. Redirect to dashboard
//       router.push('/Home');
      
//     } catch (error) {
//       setError(error.message);
//     }}
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white mt-20 mb-20 rounded-2xl shadow-lg">
//         <header className="text-center space-y-4">
//           <div className="flex flex-col items-center">
//             <div className="p-4 bg-blue-100 rounded-full">
//               <img 
//                 src="/assets/icons/cardiologist.svg" 
//                 className="w-12 h-12 text-blue-600"
//                 alt="Patient Icon"
//               />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mt-4">
//               Patient Portal
//             </h1>
//             <p className="text-gray-500 mt-2">
//               Access your medical records and health information
//             </p>
//           </div>
//         </header>

//         {/* <Form {...form}> */}
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//          {/* Email Input */}
//          <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               {...form.register("email")}
//               id="email"
//               type="email"
//               placeholder="Enter your professional email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             {form.formState.errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {form.formState.errors.email.message}
//               </p>
//             )}
//           </div>
//              {/* Password Input */}
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
//             {/* Error Message */}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             <Button
//             type="submit"
//             className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition-colors duration-200"
//             disabled={loading}
//           >
//             {loading ? "Authenticating..." : "Continue"}
//           </Button>

//             <div className="text-center text-sm text-gray-600">
//               Don't have an account?{' '}
//               <Link 
//                 href="/Singup" 
//                 className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
//               >
//                 Create account
//               </Link>
//             </div>

//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center">
//                 <span className="bg-white px-4 text-gray-500">Or</span>
//               </div>
//             </div>

//             <Button
//               variant="outline"
//               className="w-full py-6 text-gray-700 border-gray-300 hover:bg-gray-50 text-lg font-semibold rounded-lg transition-colors duration-200"
//               onClick={() => router.push("/Admin")}
//             >
//               Continue as Doctor
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full py-6 text-white bg-black border-gray-300 hover:bg-gray-50 text-lg font-semibold rounded-lg transition-colors duration-200"
//               onClick={() => router.push("/Admin")}
//             >
//               Continue as Admin
//             </Button>
//           </form>
//         {/* </Form> */}
//       </div>
//     </div>
//   );
// }

// "use client";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import CustemForm from "./CustemForm";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,  
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useState } from 'react';
// import Link from "next/link";

// const formSchema = z.object({
//   user: z.string().min(2, { message: "Username must be at least 2 characters." }),
//   email: z
//     .string()
//     .email({ message: "Please enter a valid email address." }),
//   phone: z
// .string().refine((phone)=>/^\+\d{10,15}$/.test(phone),
//     "Phone number must be at least 10 digits." ),
// });

// export function DOctorForm() {
//  const form = useForm({
//    resolver: zodResolver(formSchema),
//    defaultValues: { user: "" , email: "",
//      phone: "",}
//  });

//  function onSubmit(values) {
//    console.log(values);
//    alert("Form submitted successfully!");
//    form.reset();
//   }
//   const [value, setValue] = useState()
//   return (
//     <div className="flex justify-center  items-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white mt-20 mb-20 rounded-2xl shadow-lg">
//         <header className="text-center space-y-4">
//           <div className="flex flex-col items-center">
//             <div className="p-4 bg-blue-100 rounded-full">
//               <img 
//                 src="./assets/images/191 [Converted]-01 2.png" 
//                 className="w-20 h-20 text-blue-600"
//                 alt="Doctor Icon"
//               />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mt-4">
//               Doctor Portal
//             </h1>
//             <p className="text-gray-500 mt-2">
//               Access patient records and medical information
//             </p>
//           </div>
//         </header>

//         <Form {...form} onSubmit={handleLogin}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           <CustemForm
//               control={form.control}
//               name="email"
//               label="Email"
//               type='email'
//               setEmail={setEmail}
//               value={email}
//               classlabel="text-gray-700 font-medium"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//              <CustemForm
//               control={form.control}
//               name="password"
//               label="password"
//               type="password"
//               setPassword={setPassword}
//               value={password}
//               classlabel="text-gray-700 font-medium"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//             <Button 
//               type="submit" 
//               className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg transition-colors duration-200"
//             >
//               Continue
//             </Button>
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Link from "next/link";
// import { supabase } from "@/lib/supabaseclient";
// import { useRouter } from "next/navigation";
//
// const formSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   password: z.string().min(6, { message: "Password must be at least 6 characters." }),
// });
//
// export  function PatientForm() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null); // Uncomment this line
//
//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: { email: "", password: "" },
//   });
//
//   async function onSubmit(values) {
//     try {
//       // 1. Authenticate user
//       const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
//         email: values.email,
//         password: values.password
//       });
//
//       if (authError) throw authError;
//       // 2. Get doctor profile (corrected table/column)
//       const { data: doctorData, error: profileError } = await supabase
//         .from('patients')
//         .select('*')
//         .eq('user_id', authData.user.id) // Match auth user ID
//         .single();
//
//
//
//       //3. Handle missing profile
//       if (!doctorData) {
//         await supabase.auth.signOut();
//         throw new Error('No doctor profile found');
//       }
//
//       // // 4. Verify role
//       // if (doctorData.role !== 'doctor') {
//       //   await supabase.auth.signOut();
//       //   throw new Error('Access restricted to medical staff');
//       // }
//
//       // 5. Redirect to dashboard
//       router.push('/Home');
//
//     } catch (error) {
//       setError(error.message);
//     }
//   }
//   // async function onSubmit(values) {
//   // const { data, error } = await supabase.auth.signInWithPassword({ email:values.email, password:values.password });
//
//   // if (error) {
//   //   console.error('Login error:', error.message);
//   //   // Display error message to the user
//   // } else {
//   //   console.log('Login successful!', data.user);
//   //   // Redirect the doctor to their dashboard or load profile data
//   // }}
//
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-8 space-y-8 bg-white mt-20 mb-20 rounded-2xl shadow-lg">
//       <header className="text-center space-y-4">
//           <div className="flex flex-col items-center">
//               <div className="p-4 bg-blue-100 rounded-full">
//                <img                 src="/assets/icons/cardiologist.svg"
//                 className="w-12 h-12 text-blue-600"
//                 alt="Patient Icon"
//               />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mt-4">
//               Patient Portal
//             </h1>
//             <p className="text-gray-500 mt-2">
//               Access your medical records and health information
//             </p>
//           </div>
//         </header>
//
//         {/* Form */}
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
//               placeholder="Enter your professional email"
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
//           <div className="text-center text-sm text-gray-600">
//                Don't have an account?{' '}
//                <Link
//                 href="/Singup"
//                 className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
//               >
//                 Create account
//               </Link>
//             </div>
//
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center">
//                 <span className="bg-white px-4 text-gray-500">Or</span>
//               </div>
//             </div>
//
//             <Button
//               variant="outline"
//               className="w-full py-6 text-gray-700 border-gray-300 hover:bg-gray-50 text-lg font-semibold rounded-lg transition-colors duration-200"
//               onClick={() => router.push("/Doctorsingin")}
//             >
//               Continue as Doctor
//             </Button>
//             <Button
//               variant="outline"
//               className="w-full py-6 text-white bg-black border-gray-300 hover:bg-gray-50 text-lg font-semibold rounded-lg transition-colors duration-200"
//               onClick={() => router.push("/Adminlogin")}
//             >
//               Continue as Admin
//             </Button>
//           </form>
//         {/* </Form> */}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect } from "react";
// import { supabase } from "@/lib/supabaseclient";

// export  function DoctorForm() {
//   useEffect(() => {
//     async function testAuth() {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: "aminenamane258@gmail.com",
//         password: "aminenamane258@gmail.com"
//       });
//       console.log("Auth Data:", data, "Error:", error);
//     }
//     testAuth();
//   }, []);

//   return <div>Testing Supabase Auth</div>;
// }
'use client';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation";
import {
  HeartPulse,
  Shield,
  Sparkles,
  Eye,
  EyeOff,
  User,
  Lock,
  Mail,
  ChevronRight,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export function PatientForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values) {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // 1. Authenticate user
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      });

      if (authError) throw authError;

      // 2. Get patient profile
      const { data: patientData, error: profileError } = await supabase
          .from('patients')
          .select('*')
          .eq('user_id', authData.user.id)
          .single();

      // 3. Handle missing profile
      if (!patientData) {
        await supabase.auth.signOut();
        throw new Error('No patient profile found. Please contact support.');
      }

      // 4. Show success and redirect
      setSuccess(true);
      setTimeout(() => {
        router.push('/Home');
      }, 1500);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
      <div className="space-y-8">
        {/* Form Header */}
        <div className="text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
              <div className="relative p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <HeartPulse className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome Back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Patient</span>
            </h2>
            <p className="text-gray-500">
              Access your medical records and manage your health journey
            </p>
          </div>

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-blue-50 rounded-xl">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">HIPAA Compliant • End-to-End Encrypted</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Mail className="w-4 h-4" />
              Professional Email
            </label>
            <div className="relative">
              <input
                  {...form.register("email")}
                  type="email"
                  placeholder="patient@healthcare.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <User className="w-5 h-5" />
              </div>
            </div>
            {form.formState.errors.email && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {form.formState.errors.email.message}
                </div>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Lock className="w-4 h-4" />
              Password
            </label>
            <div className="relative">
              <input
                  {...form.register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock className="w-5 h-5" />
              </div>
              <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {form.formState.errors.password && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {form.formState.errors.password.message}
                </div>
            )}
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Forgot password?
            </Link>
          </div>

          {/* Error Message */}
          {error && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              </div>
          )}

          {/* Success Message */}
          {success && (
              <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-green-700 font-medium">Authentication successful! Redirecting...</p>
                </div>
              </div>
          )}

          {/* Submit Button */}
          <Button
              type="submit"
              disabled={loading}
              className="w-full group font-bold py-4 px-6 rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Authenticating...
                </div>
            ) : (
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Access Patient Portal
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
            )}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Alternative Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
                type="button"
                onClick={() => router.push("/Doctorsingin")}
                className="py-3.5 bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl transition-all hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center gap-2">
                <div className="p-1 bg-blue-100 rounded-lg">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium">Doctor Login</span>
              </div>
            </Button>

            <Button
                type="button"
                onClick={() => router.push("/Adminlogin")}
                className="py-3.5 bg-gradient-to-r from-gray-800 to-black text-white hover:shadow-lg rounded-xl transition-all hover:scale-105 group"
            >
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium">Admin Portal</span>
              </div>
            </Button>
          </div>

          {/* signup Link */}
          <div className="text-center pt-4">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                  href="/Singup"
                  className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors"
              >
                Create account now
              </Link>
            </p>
          </div>
        </form>

        {/* Security Footer */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              SSL Secured
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              HIPAA Compliant
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              GDPR Ready
            </div>
          </div>
        </div>
      </div>
  );
}


