'use client'
import {
    Activity,
    Activity as ActivityIcon, AlertCircle, AlertTriangle,
    Battery, Bell,
    Calendar, Database,
    Download, Droplet, FileText, HelpCircle, Home, Lock, Mail, MapPin, MessageSquare, Phone, Pill, Printer, QrCode,
    Scale, Shield, Stethoscope,
    Thermometer,
    TrendingUp, User,
    Video,
    Zap
} from "lucide-react";
import React, {useState} from "react";

export  default  function Main({activeTab}){
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

    const medicalRecords = [
        {
            id: 1,
            disease_name: "Type 2 Diabetes",
            date: "2024-02-15",
            status: "Active",
            severity: "Moderate",
            medication: [
                { name: "Metformin", dosage: "500mg", frequency: "Twice daily", start: "2023-01-15" },
                { name: "Insulin Glargine", dosage: "20 units", frequency: "Nightly", start: "2023-03-10" }
            ],
            test_analysis: {
                latest: "HbA1c: 7.2% (Target: <7%)",
                previous: "HbA1c: 8.1%",
                trend: "Improving",
                tests: [
                    { name: "Fasting Glucose", value: "140 mg/dL", status: "High", date: "2024-02-15" },
                    { name: "Postprandial Glucose", value: "180 mg/dL", status: "High", date: "2024-02-15" },
                    { name: "HbA1c", value: "7.2%", status: "Borderline", date: "2024-02-15" }
                ]
            },
            doctor_report: "Patient showing good compliance with medication. Blood sugar levels improving. Continue current regimen and monitor closely.",
            radiology_images: [
                { id: 1, name: "Pancreas Ultrasound", date: "2023-11-20", url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400" },
                { id: 2, name: "Retinal Scan", date: "2024-01-10", url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400" }
            ],
            doctor: "Dr. Sarah Johnson",
            clinic: "Diabetes Care Center"
        },
        {
            id: 2,
            disease_name: "Hypertension",
            date: "2024-01-20",
            status: "Controlled",
            severity: "Mild",
            medication: [
                { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", start: "2022-08-05" }
            ],
            test_analysis: {
                latest: "BP: 135/85 mmHg",
                previous: "BP: 145/95 mmHg",
                trend: "Improving",
                tests: [
                    { name: "Blood Pressure", value: "135/85 mmHg", status: "High Normal", date: "2024-01-20" },
                    { name: "Kidney Function", value: "Normal", status: "Good", date: "2024-01-20" },
                    { name: "Electrolytes", value: "Within range", status: "Good", date: "2024-01-20" }
                ]
            },
            doctor_report: "Blood pressure moderately controlled. Patient advised to reduce sodium intake and increase physical activity.",
            radiology_images: [
                { id: 3, name: "Echocardiogram", date: "2023-12-15", url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400" }
            ],
            doctor: "Dr. Michael Chen",
            clinic: "Heart Health Clinic"
        }
    ];

    const activityLogs = [
        { id: 1, action: "Appointment Booked", doctor: "Dr. Sarah Johnson", date: "2024-03-15 10:30", icon: "📅" },
        { id: 2, action: "Prescription Renewed", medication: "Metformin", date: "2024-03-10 14:15", icon: "💊" },
        { id: 3, action: "Test Results Updated", test: "Blood Glucose", date: "2024-03-05 09:45", icon: "📊" },
        { id: 4, action: "Video Consultation", doctor: "Dr. Emily Rodriguez", date: "2024-02-28 16:20", icon: "🎥" },
        { id: 5, action: "Profile Updated", field: "Contact Information", date: "2024-02-20 11:10", icon: "👤" }
    ];

    const upcomingAppointments = [
        { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Endocrinologist", date: "2024-04-10", time: "10:00 AM", type: "In-person", status: "Confirmed" },
        { id: 2, doctor: "Dr. Michael Chen", specialty: "Cardiologist", date: "2024-04-15", time: "2:30 PM", type: "Video", status: "Pending" }
    ];
    const [MedicalRecords, setMedicalRecords] = useState(medicalRecords);
    const [showEmergency, setShowEmergency] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Health Metrics */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                        <ActivityIcon className="w-6 h-6" />
                                        Health Metrics
                                    </h2>
                                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                                        <TrendingUp className="w-4 h-4" />
                                        View Trends
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { icon: <Thermometer className="w-6 h-6" />, label: "Blood Pressure", value: "135/85", status: "Normal", color: "text-green-600", bg: "bg-green-50" },
                                        { icon: <Scale className="w-6 h-6" />, label: "BMI", value: patient.bmi, status: "Healthy", color: "text-green-600", bg: "bg-green-50" },
                                        { icon: <Battery className="w-6 h-6" />, label: "Blood Glucose", value: "140 mg/dL", status: "High", color: "text-yellow-600", bg: "bg-yellow-50" },
                                        { icon: <Zap className="w-6 h-6" />, label: "Activity Level", value: "Moderate", status: "Good", color: "text-blue-600", bg: "bg-blue-50" },
                                    ].map((metric, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center group hover:shadow-md transition-shadow">
                                            <div className={`inline-block p-2 ${metric.bg} dark:bg-gray-600 rounded-lg mb-3`}>
                                                <div className={metric.color}>{metric.icon}</div>
                                            </div>
                                            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{metric.value}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">{metric.label}</div>
                                            <div className={`text-xs font-medium ${metric.color}`}>{metric.status}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
                                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { icon: <Calendar className="w-6 h-6" />, label: "Book Appointment", color: "hover:bg-white/20" },
                                        { icon: <Video className="w-6 h-6" />, label: "Video Call", color: "hover:bg-white/20" },
                                        { icon: <Download className="w-6 h-6" />, label: "Download Records", color: "hover:bg-white/20" },
                                        { icon: <MessageSquare className="w-6 h-6" />, label: "Chat Support", color: "hover:bg-white/20" },
                                    ].map((action, idx) => (
                                        <button
                                            key={idx}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:scale-105 transition-all duration-200 flex flex-col items-center gap-3 group"
                                        >
                                            <div className="p-2 bg-white/20 rounded-lg">
                                                {action.icon}
                                            </div>
                                            <span className="text-sm font-medium">{action.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Medical Records Tab */}
                    {activeTab === 'medical' && (
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                        <FileText className="w-6 h-6" />
                                        Medical History
                                    </h2>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">
                                            <Download className="w-4 h-4 inline mr-2" />
                                            Export
                                        </button>
                                        <button className="px-4 py-2 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                                            <Printer className="w-4 h-4 inline mr-2" />
                                            Print
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {medicalRecords.map((record) => (
                                        <div key={record.id} className="border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                                                            <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{record.disease_name}</h3>
                                                            <div className="flex items-center gap-3 mt-1">
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                      record.status === 'Active'
                                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                  }`}>
                                    {record.status}
                                  </span>
                                                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    <Calendar className="w-3 h-3 inline mr-1" />
                                                                    {record.date}
                                  </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => setIsModalOpen(true)}
                                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                                                    >
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white dark:bg-gray-800">
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                                            <Pill className="w-4 h-4" />
                                                            Medications
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {record.medication.map((med, idx) => (
                                                                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                                                                    {med.name} ({med.dosage})
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                                            <Activity className="w-4 h-4" />
                                                            Latest Results
                                                        </h4>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{record.test_analysis.latest}</p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                                            <TrendingUp className="w-4 h-4" />
                                                            Trend
                                                        </h4>
                                                        <span className={`inline-flex items-center gap-1 text-sm ${
                                                            record.test_analysis.trend === 'Improving'
                                                                ? 'text-green-600 dark:text-green-400'
                                                                : 'text-red-600 dark:text-red-400'
                                                        }`}>
                                {record.test_analysis.trend === 'Improving' ? '↗' : '↘'}
                                                            {record.test_analysis.trend}
                              </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Allergies & Conditions */}
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Health Overview</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                            Allergies
                                        </h3>
                                        <div className="space-y-2">
                                            {patient.allergies.split(', ').map((allergy, idx) => (
                                                <div key={idx} className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl">
                                                    <AlertCircle className="w-4 h-4 text-red-500" />
                                                    <span className="text-gray-700 dark:text-gray-300">{allergy}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                                            <Activity className="w-5 h-5 text-blue-500" />
                                            Chronic Conditions
                                        </h3>
                                        <div className="space-y-2">
                                            {patient.medicalConditions.split(', ').map((condition, idx) => (
                                                <div key={idx} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                                    <Activity className="w-4 h-4 text-blue-500" />
                                                    <span className="text-gray-700 dark:text-gray-300">{condition}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Appointments Tab */}
                    {activeTab === 'appointments' && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                    <Calendar className="w-6 h-6" />
                                    Appointments
                                </h2>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
                                    Book New
                                </button>
                            </div>

                            <div className="space-y-4">
                                {upcomingAppointments.map(appointment => (
                                    <div key={appointment.id} className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-bold text-gray-800 dark:text-white">{appointment.doctor}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-300">{appointment.specialty}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-bold text-gray-800 dark:text-white">{appointment.date}</div>
                                                <div className="text-sm text-gray-600 dark:text-gray-300">{appointment.time}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            appointment.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {appointment.status}
                        </span>
                                            <span className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
                          {appointment.type === 'Video' ? <Video className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                                                {appointment.type}
                        </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Activity Log Tab */}
                    {activeTab === 'activity' && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Recent Activity</h2>
                            <div className="space-y-4">
                                {activityLogs.map(log => (
                                    <div key={log.id} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <div className="text-2xl">{log.icon}</div>
                                        <div className="flex-1">
                                            <div className="font-medium text-gray-800 dark:text-white">{log.action}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                                {log.doctor || log.medication || log.test || log.field}
                                            </div>
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">{log.date}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === 'settings' && (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Account Settings</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: <User className="w-5 h-5" />, title: "Personal Information", action: "Edit" },
                                    { icon: <Lock className="w-5 h-5" />, title: "Privacy & Security", action: "Manage" },
                                    { icon: <Bell className="w-5 h-5" />, title: "Notifications", action: "Configure" },
                                    { icon: <Database className="w-5 h-5" />, title: "Data Management", action: "Export" },
                                    { icon: <HelpCircle className="w-5 h-5" />, title: "Help & Support", action: "Contact" },
                                ].map((setting, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                                {setting.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-800 dark:text-white">{setting.title}</div>
                                                <div className="text-sm text-gray-600 dark:text-gray-300">Update your {setting.title.toLowerCase()}</div>
                                            </div>
                                        </div>
                                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
                                            {setting.action}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                {/* Right Column - Sidebar */}
                <div className="space-y-8">
                    {/* Personal Information Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Personal Details</h2>
                        <div className="space-y-4">
                            {[
                                { icon: <Calendar className="w-4 h-4" />, label: "Date of Birth", value: patient.birth_day },
                                { icon: <User className="w-4 h-4" />, label: "Age", value: patient.age },
                                { icon: <Phone className="w-4 h-4" />, label: "Phone", value: patient.phone },
                                { icon: <Mail className="w-4 h-4" />, label: "Email", value: patient.email },
                                { icon: <MapPin className="w-4 h-4" />, label: "Location", value: patient.address },
                                { icon: <Droplet className="w-4 h-4" />, label: "Blood Type", value: patient.blood_type },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between py-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                            {item.icon}
                                        </div>
                                        <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                                    </div>
                                    <span className="font-medium text-gray-800 dark:text-white">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Emergency Contact */}
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl shadow-xl p-6 border border-red-100 dark:border-red-700">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                <AlertCircle className="w-5 h-5 text-red-500" />
                                Emergency Contact
                            </h2>
                            <button
                                onClick={() => setShowEmergency(!showEmergency)}
                                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                            >
                                {showEmergency ? 'Hide' : 'Show'}
                            </button>
                        </div>

                        {showEmergency && patient.emergencyContact && (
                            <div className="space-y-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-800 dark:text-white">{patient.emergencyContact.name}</div>
                                        <div className="text-sm text-gray-600 dark:text-gray-300">{patient.emergencyContact.relation}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                    <Phone className="w-4 h-4" />
                                    <span className="font-medium">{patient.emergencyContact.phone}</span>
                                </div>
                            </div>
                        )}

                        <button className="w-full mt-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors font-medium">
                            Call Emergency
                        </button>
                    </div>

                    {/* Insurance Information */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            Insurance
                        </h2>
                        {patient.insurance && (
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                    <div className="font-bold text-gray-800 dark:text-white">{patient.insurance.provider}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Policy: {patient.insurance.number}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">Expires: {patient.insurance.expiry}</div>
                                </div>
                                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium">
                                    View Coverage
                                </button>
                            </div>
                        )}
                    </div>

                    {/* QR Code for Medical ID */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-xl p-6 border border-green-100 dark:border-green-700">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                            <QrCode className="w-5 h-5 text-green-500" />
                            Medical ID
                        </h2>
                        <div className="text-center">
                            <div className="inline-block p-4 bg-white dark:bg-gray-800 rounded-xl mb-3">
                                {/* Placeholder for QR Code */}
                                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                                    <QrCode className="w-16 h-16 text-gray-400" />
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                Show this QR code at hospitals for quick access to your medical records
                            </p>
                            <button className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium">
                                Download QR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                        </>
    )
}