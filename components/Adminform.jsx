'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseclient";
import {
    Shield,
    Sparkles,
    Eye,
    EyeOff,
    User,
    Lock,
    Mail,
    ChevronRight,
    AlertCircle,
    CheckCircle,
    Server,
    Cpu,
    Key
} from "lucide-react";

const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export default function AdminForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

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
                password: values.password,
            });

            if (authError) throw authError;

            // 2. Get admin profile
            const { data: adminData, error: profileError } = await supabase
                .from("admins")
                .select("*")
                .eq("user_id", authData.user.id)
                .single();

            if (!adminData) {
                await supabase.auth.signOut();
                throw new Error("Administrative access only. Please use valid admin credentials.");
            }

            // 3. Show success and redirect
            setSuccess(true);
            setTimeout(() => {
                if (isClient) {
                    router.push("/Admin");
                }
            }, 1500);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    if (!isClient) {
        return null;
    }

    return (
        <div className="space-y-8">
            {/* Form Header */}
            <div className="text-center">
                <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black rounded-full blur-lg opacity-30"></div>
                        <div className="relative p-4 bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-lg border border-gray-700">
                            <Shield className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Administrator</span>
                    </h2>
                    <p className="text-gray-400">
                        Restricted access to system controls
                    </p>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-gray-800/50 rounded-xl border border-gray-700">
                    <Shield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">Restricted Access • Military-grade Security</span>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                        <Mail className="w-4 h-4" />
                        Admin Email
                    </label>
                    <div className="relative">
                        <input
                            {...form.register("email")}
                            type="email"
                            placeholder="admin@system.com"
                            className="w-full pl-12 pr-4 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-white"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Key className="w-5 h-5" />
                        </div>
                    </div>
                    {form.formState.errors.email && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.email.message}
                        </div>
                    )}
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                        <Lock className="w-4 h-4" />
                        Admin Password
                    </label>
                    <div className="relative">
                        <input
                            {...form.register("password")}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter secure admin password"
                            className="w-full pl-12 pr-12 py-3.5 bg-gray-900 border-2 border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-white"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Lock className="w-5 h-5" />
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {form.formState.errors.password && (
                        <div className="flex items-center gap-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {form.formState.errors.password.message}
                        </div>
                    )}
                </div>

                {/* Security Level */}
                <div className="p-4 bg-gray-900/50 rounded-xl border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">Access Level</span>
                        <span className="text-xs font-semibold bg-red-900/30 text-red-400 px-2 py-1 rounded-full">
              RESTRICTED
            </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-400">All actions are logged and monitored</span>
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <div className="p-4 bg-red-900/20 border-2 border-red-800 rounded-xl flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <p className="text-red-300 font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="p-4 bg-green-900/20 border-2 border-green-800 rounded-xl flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <p className="text-green-300 font-medium">Admin access granted! Redirecting to control panel...</p>
                        </div>
                    </div>
                )}

                {/* Submit Button */}
                <Button
                    type="submit"
                    disabled={loading}
                    className="w-full group font-bold py-4 px-6 rounded-xl transition-all duration-300 bg-gradient-to-r from-gray-800 to-black text-white hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Verifying Admin Credentials...
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-3">
                            <Sparkles className="w-5 h-5" />
                            Access Control Panel
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    )}
                </Button>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-gray-900 px-4 text-sm text-gray-500">Alternative Access</span>
                    </div>
                </div>

                {/* Alternative Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <Button
                        type="button"
                        onClick={() => router.push("/Patient")}
                        className="py-3.5 bg-gray-800 border-2 border-gray-700 text-gray-300 hover:bg-gray-700 rounded-xl transition-all hover:border-blue-500 group"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <div className="p-1 bg-gray-700 rounded-lg">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="font-medium">Patient Portal</span>
                        </div>
                    </Button>

                    <Button
                        type="button"
                        onClick={() => router.push("/Doctorsingin")}
                        className="py-3.5 bg-gray-800 border-2 border-gray-700 text-gray-300 hover:bg-gray-700 rounded-xl transition-all hover:border-emerald-500 group"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <div className="p-1 bg-gray-700 rounded-lg">
                                <Server className="w-4 h-4" />
                            </div>
                            <span className="font-medium">Doctor Portal</span>
                        </div>
                    </Button>
                </div>
            </form>

            {/* Security Footer */}
            <div className="pt-6 border-t border-gray-800">
                <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        256-bit Encryption
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Restricted Access
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        All Actions Logged
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-gray-300">System Status</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">OPERATIONAL</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">15K+</div>
                        <div className="text-xs text-gray-400">Users</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">99.9%</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                    <div className="text-center p-2 bg-gray-800/50 rounded-lg">
                        <div className="text-lg font-bold text-white">100%</div>
                        <div className="text-xs text-gray-400">Secure</div>
                    </div>
                </div>
            </div>
        </div>
    );
}