'use client';
import 'react-phone-number-input/style.css';
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import PhoneInput from 'react-phone-number-input';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import CustemForm from '../custemForm';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { DatePickerDemo } from './Datepicker';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseclient';
import { useRouter } from 'next/navigation';
import {
    User,
    Mail,
    Lock,
    Phone,
    Calendar,
    MapPin,
    Heart,
    Shield,
    AlertCircle,
    CheckCircle,
    Sparkles,
    ChevronRight
} from "lucide-react";

// Form schema for validation
const formSchema = z.object({
    username: z.string()
        .min(2, "Username must be at least 2 characters")
        .max(50, "Username too long"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[0-9]/, "Must contain at least one number"),
    phone: z.string().min(5, "Invalid phone number"),
    gender: z.enum(["male", "female", "other"]),
    birthDate: z.date(),
    emergencyContactName: z.string().min(2, "Name too short"),
    emergencyContactPhone: z.string().min(5, "Invalid phone number"),
    address: z.object({
        street: z.string().min(2),
        city: z.string().min(2),
        postalCode: z.string().min(4),
    }),
    medicalInfo: z.object({
        bloodType: z.string().optional(),
        allergies: z.string().optional(),
        medicalConditions: z.string().optional(),
        currentMedications: z.string().optional(),
        insuranceProvider: z.string().optional(),
        insurancePolicyNumber: z.string().optional(),
    }).optional(),
});

export function PatientSignup() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    // Initialize the form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            phone: "",
            gender: "male",
            birthDate: new Date(),
            emergencyContactName: "",
            emergencyContactPhone: "",
            address: {
                street: "",
                city: "",
                postalCode: "",
            },
            medicalInfo: {
                bloodType: "",
                allergies: "",
                medicalConditions: "",
                currentMedications: "",
                insuranceProvider: "",
                insurancePolicyNumber: "",
            },
        },
    });

    async function addUserWithProfile(values) {
        try {
            setLoading(true);
            setError('');
            setSuccess(false);

            // Sign up the user
            const { data: { user }, error: signUpError } = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
            });

            if (signUpError) throw signUpError;

            // Sign in the user immediately after sign-up
            const { data: { session }, error: signInError } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });

            if (signInError) throw signInError;

            // Insert patient data
            const { error: profileError } = await supabase.from("patients").insert([
                {
                    user_id: user.id,
                    name: values.username,
                    email: values.email,
                    phone: values.phone,
                    gender: values.gender,
                    birth_day: values.birthDate,
                    emergencyContact: values.emergencyContactPhone,
                    adress: values.address.street,
                    blood_type: values.medicalInfo?.bloodType || null,
                    allergies: values.medicalInfo?.allergies || null,
                    medicalConditions: values.medicalInfo?.medicalConditions || null,
                    role: "patient"
                }
            ]);

            if (profileError) throw profileError;

            setSuccess(true);
            setTimeout(() => {
                router.push('/Patient');
            }, 2000);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="space-y-6">
            {/* Form Header */}
            <div className="text-center">
                <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
                        <div className="relative p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                            <Heart className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Health Profile</span>
                    </h2>
                    <p className="text-gray-500">
                        Complete the form below to register for comprehensive healthcare services
                    </p>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-blue-50 rounded-xl">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">Your information is secure and encrypted</span>
                </div>
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
                        <p className="text-green-700 font-medium">Registration successful! Redirecting to login...</p>
                    </div>
                </div>
            )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(addUserWithProfile)} className="space-y-6">
                    {/* Section 1: Personal Information */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-600" />
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustemForm
                                control={form.control}
                                name="username"
                                label="Full Name"
                                icon={<User className="w-4 h-4" />}
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <CustemForm
                                control={form.control}
                                name="email"
                                label="Email Address"
                                icon={<Mail className="w-4 h-4" />}
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <CustemForm
                                control={form.control}
                                name="password"
                                label="Password"
                                type="password"
                                icon={<Lock className="w-4 h-4" />}
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            Phone Number
                                        </FormLabel>
                                        <FormControl>
                                            <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 bg-white">
                                                <PhoneInput
                                                    {...field}
                                                    defaultCountry="DZ"
                                                    international
                                                    className="w-full px-4 py-3 focus:outline-none"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Section 2: Demographics */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-green-600" />
                            Demographics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex gap-4"
                                            >
                                                {[
                                                    { value: "male", label: "Male" },
                                                    { value: "female", label: "Female" },
                                                    { value: "other", label: "Other" },
                                                ].map((option) => (
                                                    <div key={option.value} className="flex items-center space-x-2">
                                                        <RadioGroupItem value={option.value} id={option.value} />
                                                        <Label htmlFor={option.value}>{option.label}</Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="birthDate"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <div className="border-2 border-gray-200 rounded-xl bg-white">
                                                <DatePickerDemo
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Section 3: Address */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-amber-600" />
                            Address Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustemForm
                                control={form.control}
                                name="address.street"
                                label="Street Address"
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <CustemForm
                                control={form.control}
                                name="address.city"
                                label="City"
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <CustemForm
                                control={form.control}
                                name="address.postalCode"
                                label="Postal Code"
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Section 4: Emergency Contact */}
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Phone className="w-5 h-5 text-red-600" />
                            Emergency Contact
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CustemForm
                                control={form.control}
                                name="emergencyContactName"
                                label="Contact Name"
                                className="bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500"
                            />
                            <FormField
                                control={form.control}
                                name="emergencyContactPhone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contact Phone</FormLabel>
                                        <FormControl>
                                            <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-blue-500 bg-white">
                                                <PhoneInput
                                                    {...field}
                                                    defaultCountry="DZ"
                                                    international
                                                    className="w-full px-4 py-3 focus:outline-none"
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Section 5: Medical Information (Optional) */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">
                            Medical Information (Optional)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="medicalInfo.bloodType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Blood Type</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="bg-white border-2 border-gray-200 rounded-xl">
                                                    <SelectValue placeholder="Select blood type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="medicalInfo.allergies"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Allergies</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="e.g., Penicillin, Pollen"
                                                className="bg-white border-2 border-gray-200 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="medicalInfo.medicalConditions"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Medical Conditions</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="e.g., Diabetes, Hypertension"
                                                className="bg-white border-2 border-gray-200 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="medicalInfo.currentMedications"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Medications</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="e.g., Metformin 500mg"
                                                className="bg-white border-2 border-gray-200 rounded-xl"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full group font-bold py-4 px-6 rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Creating Your Profile...
                            </div>
                        ) : (
                            <div className="flex items-center justify-center gap-3">
                                <Sparkles className="w-5 h-5" />
                                Complete Registration
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        )}
                    </Button>

                    {/* Login Link */}
                    <div className="text-center pt-4">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link
                                href="/Patient"
                                className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </form>
            </Form>

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