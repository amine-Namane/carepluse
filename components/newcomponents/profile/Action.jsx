'use client'
import {
    Bell,
    Camera,
    CheckCircle,
    Edit,
    IdCard,
    Moon,
    Settings,
    Share2,
    ShieldCheck,
    Star,
    Sun,
    Target
} from "lucide-react";
import React, {useEffect, useState} from "react";


export default function Action(){
    const healthStatus = (score) => {
        if (score >= 90) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100" };
        if (score >= 80) return { label: "Good", color: "text-blue-600", bg: "bg-blue-100" };
        if (score >= 70) return { label: "Fair", color: "text-yellow-600", bg: "bg-yellow-100" };
        return { label: "Needs Attention", color: "text-red-600", bg: "bg-red-100" };
    };
    const patient = {
        name: "Mohamed El Amine",
        birth_day: "2003-08-03",
        age: 21,
        gender: "Male",
        phone: "+213 56 26 45 998",
        email: "mohamed.amine@example.com",
        address: "Blida, Algeria",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        blood_type: "O+",
        allergies: "Peanuts, Shellfish, Penicillin",
        medicalConditions: "Type 2 Diabetes, Hypertension",
        height: "175 cm",
        weight: "70 kg",
        bmi: 22.9,
        emergencyContact: {
            name: "Fatima Zohra",
            relation: "Mother",
            phone: "+213 55 12 34 567"
        },
        insurance: {
            provider: "CNAS",
            number: "CNAS-2024-7890",
            expiry: "2025-12-31"
        },
        lastCheckup: "2024-02-15",
        nextAppointment: "2024-04-10",
        healthScore: 82
    };

    const [darkMode, setDarkMode] = useState(false);
    const [editData, setEditData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        setPatient(editData);
        setIsEditing(false);
        // Here you would typically save to Supabase
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditData({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({ ...prev, [name]: value }));
    };
    const handleEdit = () => {
        setEditData({ ...patient });
        setIsEditing(true);
    };
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return(
        <>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 mb-8 relative">
                {/* Background with gradient */}
                <div className="relative h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-colors">
                            <Bell className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative px-8 pb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <img
                                src={patient.image}
                                alt="Profile"
                                className="relative w-40 h-40 rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform"
                            />
                            <div className="absolute -bottom-2 -right-2 flex gap-2">
                                <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                                    <Camera className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </button>
                                <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
                                    <Edit className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </button>
                            </div>
                        </div>

                        {/* Profile Info */}
                        <div className="flex-1 text-center md:text-left mt-4">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                                    {patient.name}
                                </h1>
                                <div className="flex gap-1">
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
                                </div>
                            </div>

                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                <IdCard className="w-4 h-4 inline mr-2" />
                                Patient ID: <span className="font-mono bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">#PAT-2024-001</span>
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Verified Patient
                  </span>
                                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Active Member
                  </span>
                                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Health Score: {patient.healthScore}
                  </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={handleEdit}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                <Edit className="w-5 h-5" />
                                Edit Profile
                            </button>
                            <button className="px-6 py-3 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all flex items-center gap-2">
                                <Share2 className="w-5 h-5" />
                                Share Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Health Score Indicator */}
                {/*<div className="absolute -bottom-6 right-8">*/}
                {/*    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">*/}
                {/*        <div className="text-center">*/}
                {/*            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{patient.healthScore}</div>*/}
                {/*            <div className={`text-sm font-semibold ${healthStatus.color}`}>{healthStatus.label}</div>*/}
                {/*            <div className="text-xs text-gray-500 dark:text-gray-400">Health Score</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </>
    )
}