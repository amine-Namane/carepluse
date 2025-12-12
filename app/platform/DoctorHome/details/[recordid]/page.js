// 'use client'
// import React, { use, useEffect, useState } from "react";
// import { supabase } from '@/lib/supabaseclient';
// import { useRouter } from "next/navigation";
// import { redirect } from 'next/navigation';
//
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
//
// // Mock data (replace with API data)
// const profileData = {
//   personalInfo: {
//     fullName: "Mohamed el Amine",
//     birthDay: "08/03/2003",
//     gender: "Male",
//     phoneNumber: "0562645998",
//     photo: "./assets/images/dr-lee.png",
//   },
//   medicalInfo: {
//     bloodType: "O+",
//     sensitivities: ["Peanuts", "Shellfish"],
//     chronicDiseases: ["Diabetes", "Blood Pressure"],
//   },
//   medicalFile: {
//     diseases: [
//       {
//         name: "Disease 1",
//         details: {
//           medication: "This section contains detailed medical information.",
//           report: "All data is stored securely and presented in an accessible manner.",
//         },
//       },
//       {
//         name: "Disease 2",
//         details: {
//           medication: "Medication details for Disease 2.",
//           report: "Report details for Disease 2.",
//         },
//       },
//     ],
//   },
// };
//
// export default  function Profile({params}) {
//   const resolvedParams = use(params); // Unwrap the promise
//   const patientId = resolvedParams.recordid;
//
//   console.log(patientId);
//   const router = useRouter();
//   useEffect(() => {
//     const checkAuthAndFetchAppointments = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//
//       if (!user) {
//         router.push("/Admin"); // Redirect if not logged in
//         return;
//       }
//     };
//
//     checkAuthAndFetchAppointments();
//   }, []);
//   // State for the list of diseases (initialized with mock data)
//   const [diseases, setDiseases] = useState(profileData.medicalFile.diseases);
//
//   // State to toggle the visibility of the add-disease form
//   const [showAddDiseaseForm, setShowAddDiseaseForm] = useState(false);
//
//   // States for new disease input fields
//   const [newDiseaseName, setNewDiseaseName] = useState("");
//   const [newMedication, setNewMedication] = useState("");
//   const [newReport, setNewReport] = useState("");
//
//   const handleAddDisease = (e) => {
//     e.preventDefault();
//
//     // Create a new disease object
//     const newDisease = {
//       name: newDiseaseName,
//       details: {
//         medication: newMedication,
//         report: newReport,
//       },
//     };
//
//     // Update state with the new disease added
//     setDiseases([...diseases, newDisease]);
//
//     // Clear the form fields and hide the form
//     setNewDiseaseName("");
//     setNewMedication("");
//     setNewReport("");
//     setShowAddDiseaseForm(false);
//   };
//
//   return (
//     <section className="w-full max-w-4xl mx-auto p-6">
//       {/* Profile Header */}
//       <div className="mb-8 flex items-center gap-6 border-b border-gray-200 pb-8">
//         <img
//           src="/assets/images/dr-lee.png"
//           alt="Profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-[#0089FF]"
//         />
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             {profileData.personalInfo.fullName}
//           </h1>
//           <p className="text-lg text-gray-600">Medical Professional</p>
//         </div>
//       </div>
//
//       {/* Information Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Personal Information Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//           <h2 className="text-2xl font-semibold mb-6 text-[#0089FF]">
//             Personal Information
//           </h2>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Birth Date</span>
//               <span className="text-gray-900">
//                 {profileData.personalInfo.birthDay}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Gender</span>
//               <span className="text-gray-900">
//                 {profileData.personalInfo.gender}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Phone Number</span>
//               <span className="text-gray-900">
//                 {profileData.personalInfo.phoneNumber}
//               </span>
//             </div>
//           </div>
//         </div>
//
//         {/* Medical Information Card */}
//         <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
//           <h2 className="text-2xl font-semibold mb-6 text-[#0089FF]">
//             Medical Information
//           </h2>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Blood Type</span>
//               <span className="text-gray-900">
//                 {profileData.medicalInfo.bloodType}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Sensitivities</span>
//               <span className="text-gray-900 text-right">
//                 {profileData.medicalInfo.sensitivities.join(", ")}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Chronic Diseases</span>
//               <span className="text-gray-900 text-right">
//                 {profileData.medicalInfo.chronicDiseases.join(", ")}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//
//       {/* Medical File Section */}
//       <div className="mt-8">
//         <Sheet>
//           <SheetTrigger className="w-full bg-[#0089FF] hover:bg-[#0075D9] text-white py-3 px-6 rounded-lg transition-colors duration-200">
//             View Medical File
//           </SheetTrigger>
//
//           <SheetContent className="w-full max-w-2xl overflow-y-auto">
//             <SheetHeader className="mb-6">
//               <SheetTitle className="text-2xl font-bold text-gray-900">
//                 Medical History
//               </SheetTitle>
//               <SheetDescription className="text-gray-600">
//                 Detailed medical records and treatment information
//               </SheetDescription>
//             </SheetHeader>
//
//             <div className="space-y-6">
//               {diseases.map((disease, index) => (
//                 <div
//                   key={index}
//                   className="border-b border-gray-200 pb-6 last:border-0"
//                 >
//                   <h3 className="text-xl font-semibold mb-4 text-[#0089FF]">
//                     {disease.name}
//                   </h3>
//
//                   <Accordion type="single" collapsible>
//                     <AccordionItem value="medication">
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Medication Details
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         {disease.details.medication}
//                       </AccordionContent>
//                     </AccordionItem>
//
//                     <AccordionItem value="report" className="mt-3">
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Medical Report
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         {disease.details.report}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               ))}
//             </div>
//
//             {/* Add New Disease Form */}
//             <div className="mt-6">
//               {!showAddDiseaseForm ? (
//                 <button
//                   onClick={() => setShowAddDiseaseForm(true)}
//                   className="w-full bg-[#0089ff] hover:bg-blue-900 text-white py-3 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Add New Disease
//                 </button>
//               ) : (
//                 <form onSubmit={handleAddDisease} className="space-y-4 mt-4">
//                   <div>
//                     <label className="block text-gray-700">Disease Name</label>
//                     <input
//                       type="text"
//                       value={newDiseaseName}
//                       onChange={(e) => setNewDiseaseName(e.target.value)}
//                       className="w-full border border-gray-200 rounded p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700">
//                       Medication Details
//                     </label>
//                     <textarea
//                       value={newMedication}
//                       onChange={(e) => setNewMedication(e.target.value)}
//                       className="w-full border border-gray-200 rounded p-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700">
//                       Medical Report
//                     </label>
//                     <textarea
//                       value={newReport}
//                       onChange={(e) => setNewReport(e.target.value)}
//                       className="w-full border border-gray-200 rounded p-2"
//                       required
//                     />
//                   </div>
//                   <div className="flex gap-4">
//                     <button
//                       type="submit"
//                       className="bg-[#0089FF] hover:bg-[#0075D9] text-white py-2 px-4 rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setShowAddDiseaseForm(false)}
//                       className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </section>
//   );
// }
'use client'
import React, { useState } from 'react';
import {
  User,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Droplet,
  AlertCircle,
  Activity,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  Plus,
  Pill,
  ClipboardList,
  Image,
  Stethoscope,
  Edit,
  Save,
  ArrowLeft
} from 'lucide-react';

const ModernPatientRecord = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [showAddDiseaseForm, setShowAddDiseaseForm] = useState(false);
  const [diseases, setDiseases] = useState([
    {
      name: "Type 2 Diabetes",
      medication: "Metformin 500mg twice daily, Regular blood sugar monitoring",
      report: "Patient showing good compliance with medication. HbA1c: 7.2%"
    },
    {
      name: "Hypertension",
      medication: "Lisinopril 10mg once daily",
      report: "Blood pressure moderately controlled. BP: 135/85 mmHg"
    }
  ]);

  const [newDisease, setNewDisease] = useState({
    name: "",
    medication: "",
    report: ""
  });

  // Mock patient data
  const patient = {
    name: "Mohamed el Amine",
    id: "PAT-2024-001",
    birthDay: "08/03/2003",
    gender: "Male",
    phone: "0562645998",
    email: "mohamed@example.com",
    address: "Blida, Algeria",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bloodType: "O+",
    allergies: "Peanuts, Shellfish",
    chronicDiseases: "Diabetes, Hypertension"
  };

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const handleAddDisease = (e) => {
    e.preventDefault();
    setDiseases([...diseases, newDisease]);
    setNewDisease({ name: "", medication: "", report: "" });
    setShowAddDiseaseForm(false);
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            Back to Patients
          </button>

          {/* Profile Header Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
            <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative px-8 pb-8">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
                <div className="relative">
                  <img
                      src={patient.image}
                      alt="Patient"
                      className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full ring-4 ring-white"></div>
                </div>

                <div className="flex-1 text-center md:text-left mt-4">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {patient.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">Patient ID: {patient.id}</p>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Active Patient
                  </span>
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Last Visit: 2 days ago
                  </span>
                  </div>
                </div>

                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Edit className="w-5 h-5" />
                  Edit Patient
                </button>
              </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Personal Information Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </h2>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Calendar className="w-5 h-5" />, label: "Birth Date", value: patient.birthDay, color: "text-blue-600" },
                  { icon: <User className="w-5 h-5" />, label: "Gender", value: patient.gender, color: "text-purple-600" },
                  { icon: <Phone className="w-5 h-5" />, label: "Phone", value: patient.phone, color: "text-green-600" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: patient.email, color: "text-orange-600" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Address", value: patient.address, color: "text-red-600" },
                ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className={`${item.color} bg-gray-100 p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-600 font-medium">{item.label}</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{item.value}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* Medical Information Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Medical Information
                  </h2>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <Droplet className="w-5 h-5" />, label: "Blood Type", value: patient.bloodType, color: "text-red-600", bg: "bg-red-100" },
                  { icon: <AlertCircle className="w-5 h-5" />, label: "Allergies", value: patient.allergies, color: "text-orange-600", bg: "bg-orange-100" },
                  { icon: <Activity className="w-5 h-5" />, label: "Chronic Conditions", value: patient.chronicDiseases, color: "text-purple-600", bg: "bg-purple-100" },
                ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`${item.bg} ${item.color} p-2 rounded-lg`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-600 font-medium">{item.label}</span>
                      </div>
                      <p className="text-gray-900 font-semibold pl-12">{item.value}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medical File Button */}
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 font-bold text-lg"
            >
              <FileText className="w-6 h-6" />
              View & Edit Medical Records
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Medical Records Modal */}
          {isModalOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden">
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Medical Records</h2>
                        <p className="text-blue-100">{patient.name} - Patient ID: {patient.id}</p>
                      </div>
                      <button
                          onClick={() => setIsModalOpen(false)}
                          className="p-2 hover:bg-white/20 rounded-xl transition-colors"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-6">
                    <div className="space-y-6">
                      {diseases.map((disease, index) => (
                          <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
                            {/* Disease Header */}
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-100">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="p-3 bg-white rounded-xl shadow-md">
                                    <Stethoscope className="w-6 h-6 text-blue-600" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-gray-800">{disease.name}</h3>
                                </div>
                                <button className="p-2 hover:bg-white rounded-lg transition-colors">
                                  <Edit className="w-5 h-5 text-gray-600" />
                                </button>
                              </div>
                            </div>

                            {/* Accordion Items */}
                            <div className="p-4 space-y-3">
                              {/* Medication */}
                              <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(`${index}-medication`)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <Pill className="w-5 h-5 text-blue-600" />
                                    <span className="font-semibold text-gray-800">Medication Details</span>
                                  </div>
                                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-medication` ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedAccordion === `${index}-medication` && (
                                    <div className="p-4 bg-white border-t border-gray-200">
                                      <p className="text-gray-700 leading-relaxed">{disease.medication}</p>
                                    </div>
                                )}
                              </div>

                              {/* Report */}
                              <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleAccordion(`${index}-report`)}
                                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <ClipboardList className="w-5 h-5 text-purple-600" />
                                    <span className="font-semibold text-gray-800">Medical Report</span>
                                  </div>
                                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-report` ? 'rotate-180' : ''}`} />
                                </button>
                                {expandedAccordion === `${index}-report` && (
                                    <div className="p-4 bg-white border-t border-gray-200">
                                      <p className="text-gray-700 leading-relaxed">{disease.report}</p>
                                    </div>
                                )}
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>

                    {/* Add New Disease Section */}
                    <div className="mt-8">
                      {!showAddDiseaseForm ? (
                          <button
                              onClick={() => setShowAddDiseaseForm(true)}
                              className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                          >
                            <Plus className="w-6 h-6" />
                            Add New Medical Record
                          </button>
                      ) : (
                          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Medical Record</h3>
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Disease/Condition Name
                                </label>
                                <input
                                    type="text"
                                    value={newDisease.name}
                                    onChange={(e) => setNewDisease({ ...newDisease, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Enter disease name"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Medication Details
                                </label>
                                <textarea
                                    value={newDisease.medication}
                                    onChange={(e) => setNewDisease({ ...newDisease, medication: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                    rows={4}
                                    placeholder="Enter medication details and dosage"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                  Medical Report/Notes
                                </label>
                                <textarea
                                    value={newDisease.report}
                                    onChange={(e) => setNewDisease({ ...newDisease, report: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                    rows={4}
                                    placeholder="Enter medical report and observations"
                                />
                              </div>
                              <div className="flex gap-4">
                                <button
                                    onClick={handleAddDisease}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                >
                                  <Save className="w-5 h-5" />
                                  Save Record
                                </button>
                                <button
                                    onClick={() => setShowAddDiseaseForm(false)}
                                    className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-all"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default ModernPatientRecord;