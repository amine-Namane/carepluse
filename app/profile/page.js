// 'use client'
// import React, { useEffect, useState } from "react";
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
// import { supabase } from "@/lib/supabaseclient";
// import { redirect, useRouter } from "next/navigation";
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
// export default   function Profile() {
//    const router = useRouter();
//    const [patient, setPatients] = useState([]);
//      const [loading, setLoading] = useState(true);
//  useEffect(() => {
//      async function fetchData() {
//        const { data: { user } } = await supabase.auth.getUser();
//
//        if (!user) {
//          router.push("/Patient"); // Redirect if not logged in
//          return;
//        }
//
//         try {
//              // Fetch doctor info
//              const { data: userInfo, error: roleError } = await supabase
//                .from("patients")
//                .select("*")
//                .eq("user_id", user.id) // Ensure 'user_id' is correct
//                .single();
//
//              if (roleError) throw roleError; // Handle error if any
//
//              setPatients(userInfo);
//            } catch (error) {
//              console.error("Error fetching doctor info:", error);
//            } finally {
//              setLoading(false);
//            }
//          };
//      fetchData();
//    }, [router]);
//    console.log(patient)
//   return (
//     <section className="w-full max-w-4xl mx-auto p-6">
//       {/* Profile Header */}
//       <div className="mb-8 flex items-center gap-6 border-b border-gray-200 pb-8">
//       <img
//           src={patient.image} // Changed to absolute path
//           alt="Profile"
//           className="w-32 h-32 rounded-full object-cover border-4 border-[#0089FF]"
//         />
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">
//             {patient.name}
//           </h1>
//           {/* <p className="text-lg text-gray-600">Medical Professional</p> */}
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
//               <span className="text-gray-900">{patient.birth_day}</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Gender</span>
//               <span className="text-gray-900">{patient.gender}</span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Phone Number</span>
//               <span className="text-gray-900">{patient.phone}</span>
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
//               <span className="text-gray-900">{patient.blood_type}</span>
//             </div>
//             <div className="flex justify-between items-center py-2 border-b border-gray-100">
//               <span className="text-gray-600">Sensitivities</span>
//               <span className="text-gray-900 text-right">
//                 {patient.allergies}
//               </span>
//             </div>
//             <div className="flex justify-between items-center py-2">
//               <span className="text-gray-600">Chronic Diseases</span>
//               <span className="text-gray-900 text-right">
//                 {patient.medicalConditions}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//  {/* Medical File Section */}
//  <div className="mt-8">
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
//               {/* {medicalRecords.map((record, index) => ( */}
//                 <div  className="border-b border-gray-200 pb-6 last:border-0">
//                   {/* <h3 className="text-xl font-semibold mb-4 text-[#0089FF]">
//                     {record.disease_name}
//                   </h3> */} <h3>disease</h3>
//
//                   <Accordion type="single" collapsible>
//                     <AccordionItem value="1" >
//                     {/* value={`medication-${index}`}> */}
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Medication Details
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         {/* {record.medication} */}1
//                       </AccordionContent>
//                     </AccordionItem>
//
//                     <AccordionItem value="4">
//                      {/* value={`report-${index}`}> */}
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Doctor's Report
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         {/* {record.test_analysis} */}
//                       </AccordionContent>
//                     </AccordionItem>
//
//                     <AccordionItem value="3">
//                     {/* value={`tests-${index}`}> */}
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Test Analysis
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         {/* {record.test_analysis} */}
//                       </AccordionContent>
//                     </AccordionItem>
//
//                     <AccordionItem value="2">
//                      {/* value={`radiology-${index}`}> */}
//                       <AccordionTrigger className="hover:no-underline px-4 py-3 bg-gray-50 rounded-lg">
//                         Radiology Images
//                       </AccordionTrigger>
//                       <AccordionContent className="px-4 py-3 bg-white border border-gray-100 rounded-lg mt-2">
//                         <div className="grid grid-cols-2 gap-4">
//                           {/* {record.radiology_images?.map((image, idx) => (
//                             <img
//                               key={idx}
//                               src={image}
//                               alt={`Radiology scan ${idx + 1}`}
//                               className="w-full h-auto rounded-lg border border-gray-200"
//                             />
//                           ))} */}
//                         </div>
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
//                 </div>
//               {/* )) */}
//               {/* } */}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//       {/* Medical File Section
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
//               {profileData.medicalFile.diseases.map((disease, index) => (
//                 <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
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
//           </SheetContent>
//         </Sheet>
//       </div> */}
//     </section>
//   );
// }
'use client'
// import React, { useState } from 'react';
// import {
//   User,
//   Calendar,
//   Phone,
//   Droplet,
//   AlertCircle,
//   Activity,
//   FileText,
//   ChevronRight,
//   ChevronDown,
//   X,
//   Pill,
//   ClipboardList,
//   Image,
//   Stethoscope,
//   Mail,
//   MapPin,
//   Edit,
//   Shield
// } from 'lucide-react';
//
// const ModernProfilePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);
//
//   // Mock data - replace with your Supabase data
//   const patient = {
//     name: "Mohamed el Amine",
//     birth_day: "08/03/2003",
//     gender: "Male",
//     phone: "0562645998",
//     email: "mohamed.amine@example.com",
//     address: "Blida, Algeria",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
//     blood_type: "O+",
//     allergies: "Peanuts, Shellfish",
//     medicalConditions: "Diabetes, Blood Pressure"
//   };
//
//   const medicalRecords = [
//     {
//       disease_name: "Type 2 Diabetes",
//       medication: "Metformin 500mg twice daily, Regular blood sugar monitoring, Insulin as needed during acute episodes",
//       test_analysis: "HbA1c: 7.2% (Target: <7%), Fasting Glucose: 140 mg/dL, Recent improvement noted",
//       doctor_report: "Patient showing good compliance with medication. Recommend continued monitoring and lifestyle modifications.",
//       radiology_images: []
//     },
//     {
//       disease_name: "Hypertension",
//       medication: "Lisinopril 10mg once daily, Regular blood pressure monitoring",
//       test_analysis: "BP: 135/85 mmHg (Target: <130/80), Kidney function normal, Electrolytes within range",
//       doctor_report: "Blood pressure moderately controlled. May need dose adjustment if readings remain elevated.",
//       radiology_images: []
//     }
//   ];
//
//   const toggleAccordion = (index) => {
//     setExpandedAccordion(expandedAccordion === index ? null : index);
//   };
//
//   return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Profile Header Card */}
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8">
//             <div className="relative h-48 bg-gradient-to-r from-blue-600 to-purple-600">
//               <div className="absolute inset-0 bg-black/10"></div>
//               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
//             </div>
//
//             <div className="relative px-8 pb-8">
//               <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-20">
//                 <div className="relative">
//                   <img
//                       src={patient.image}
//                       alt="Profile"
//                       className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl"
//                   />
//                   <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110">
//                     <Edit className="w-5 h-5 text-blue-600" />
//                   </button>
//                 </div>
//
//                 <div className="flex-1 text-center md:text-left mt-4">
//                   <h1 className="text-4xl font-bold text-gray-800 mb-2">
//                     {patient.name}
//                   </h1>
//                   <p className="text-lg text-gray-600 mb-4">Patient ID: #PAT-2024-001</p>
//
//                   <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//                   <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-2">
//                     <Shield className="w-4 h-4" />
//                     Verified Patient
//                   </span>
//                     <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
//                     Active
//                   </span>
//                   </div>
//                 </div>
//
//                 <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
//                   <Edit className="w-5 h-5" />
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//
//           {/* Information Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//             {/* Personal Information Card */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white">
//                   <User className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Personal Information
//                 </h2>
//               </div>
//
//               <div className="space-y-4">
//                 {[
//                   { icon: <Calendar className="w-5 h-5" />, label: "Birth Date", value: patient.birth_day, color: "text-blue-600" },
//                   { icon: <User className="w-5 h-5" />, label: "Gender", value: patient.gender, color: "text-purple-600" },
//                   { icon: <Phone className="w-5 h-5" />, label: "Phone Number", value: patient.phone, color: "text-green-600" },
//                   { icon: <Mail className="w-5 h-5" />, label: "Email", value: patient.email, color: "text-orange-600" },
//                   { icon: <MapPin className="w-5 h-5" />, label: "Address", value: patient.address, color: "text-red-600" },
//                 ].map((item, index) => (
//                     <div key={index} className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors group">
//                       <div className="flex items-center gap-3">
//                         <div className={`${item.color} bg-gray-100 p-2 rounded-lg group-hover:scale-110 transition-transform`}>
//                           {item.icon}
//                         </div>
//                         <span className="text-gray-600 font-medium">{item.label}</span>
//                       </div>
//                       <span className="text-gray-900 font-semibold">{item.value}</span>
//                     </div>
//                 ))}
//               </div>
//             </div>
//
//             {/* Medical Information Card */}
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl text-white">
//                   <Activity className="w-6 h-6" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Medical Information
//                 </h2>
//               </div>
//
//               <div className="space-y-4">
//                 {[
//                   { icon: <Droplet className="w-5 h-5" />, label: "Blood Type", value: patient.blood_type, color: "text-red-600", bg: "bg-red-100" },
//                   { icon: <AlertCircle className="w-5 h-5" />, label: "Allergies", value: patient.allergies, color: "text-orange-600", bg: "bg-orange-100" },
//                   { icon: <Activity className="w-5 h-5" />, label: "Chronic Conditions", value: patient.medicalConditions, color: "text-purple-600", bg: "bg-purple-100" },
//                 ].map((item, index) => (
//                     <div key={index} className="p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors">
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className={`${item.bg} ${item.color} p-2 rounded-lg`}>
//                           {item.icon}
//                         </div>
//                         <span className="text-gray-600 font-medium">{item.label}</span>
//                       </div>
//                       <p className="text-gray-900 font-semibold pl-12">{item.value}</p>
//                     </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//
//           {/* Medical File Button */}
//           <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//             <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 font-bold text-lg"
//             >
//               <FileText className="w-6 h-6" />
//               View Medical File
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>
//
//           {/* Medical Records Modal */}
//           {isModalOpen && (
//               <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
//                   {/* Modal Header */}
//                   <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 border-b border-gray-200">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <h2 className="text-3xl font-bold text-white mb-2">Medical History</h2>
//                         <p className="text-blue-100">Detailed medical records and treatment information</p>
//                       </div>
//                       <button
//                           onClick={() => setIsModalOpen(false)}
//                           className="p-2 hover:bg-white/20 rounded-xl transition-colors"
//                       >
//                         <X className="w-6 h-6 text-white" />
//                       </button>
//                     </div>
//                   </div>
//
//                   {/* Modal Content */}
//                   <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
//                     <div className="space-y-6">
//                       {medicalRecords.map((record, index) => (
//                           <div key={index} className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
//                             {/* Disease Header */}
//                             <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-100">
//                               <div className="flex items-center gap-3">
//                                 <div className="p-3 bg-white rounded-xl shadow-md">
//                                   <Stethoscope className="w-6 h-6 text-blue-600" />
//                                 </div>
//                                 <h3 className="text-2xl font-bold text-gray-800">{record.disease_name}</h3>
//                               </div>
//                             </div>
//
//                             {/* Accordion Items */}
//                             <div className="p-4 space-y-3">
//                               {/* Medication */}
//                               <div className="border border-gray-200 rounded-xl overflow-hidden">
//                                 <button
//                                     onClick={() => toggleAccordion(`${index}-medication`)}
//                                     className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <Pill className="w-5 h-5 text-blue-600" />
//                                     <span className="font-semibold text-gray-800">Medication Details</span>
//                                   </div>
//                                   <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-medication` ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {expandedAccordion === `${index}-medication` && (
//                                     <div className="p-4 bg-white border-t border-gray-200">
//                                       <p className="text-gray-700 leading-relaxed">{record.medication}</p>
//                                     </div>
//                                 )}
//                               </div>
//
//                               {/* Test Analysis */}
//                               <div className="border border-gray-200 rounded-xl overflow-hidden">
//                                 <button
//                                     onClick={() => toggleAccordion(`${index}-tests`)}
//                                     className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <Activity className="w-5 h-5 text-green-600" />
//                                     <span className="font-semibold text-gray-800">Test Analysis</span>
//                                   </div>
//                                   <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-tests` ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {expandedAccordion === `${index}-tests` && (
//                                     <div className="p-4 bg-white border-t border-gray-200">
//                                       <p className="text-gray-700 leading-relaxed">{record.test_analysis}</p>
//                                     </div>
//                                 )}
//                               </div>
//
//                               {/* Doctor's Report */}
//                               <div className="border border-gray-200 rounded-xl overflow-hidden">
//                                 <button
//                                     onClick={() => toggleAccordion(`${index}-report`)}
//                                     className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <ClipboardList className="w-5 h-5 text-purple-600" />
//                                     <span className="font-semibold text-gray-800">Doctor's Report</span>
//                                   </div>
//                                   <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-report` ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {expandedAccordion === `${index}-report` && (
//                                     <div className="p-4 bg-white border-t border-gray-200">
//                                       <p className="text-gray-700 leading-relaxed">{record.doctor_report}</p>
//                                     </div>
//                                 )}
//                               </div>
//
//                               {/* Radiology Images */}
//                               <div className="border border-gray-200 rounded-xl overflow-hidden">
//                                 <button
//                                     onClick={() => toggleAccordion(`${index}-radiology`)}
//                                     className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
//                                 >
//                                   <div className="flex items-center gap-3">
//                                     <Image className="w-5 h-5 text-orange-600" />
//                                     <span className="font-semibold text-gray-800">Radiology Images</span>
//                                   </div>
//                                   <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${expandedAccordion === `${index}-radiology` ? 'rotate-180' : ''}`} />
//                                 </button>
//                                 {expandedAccordion === `${index}-radiology` && (
//                                     <div className="p-4 bg-white border-t border-gray-200">
//                                       {record.radiology_images && record.radiology_images.length > 0 ? (
//                                           <div className="grid grid-cols-2 gap-4">
//                                             {record.radiology_images.map((image, idx) => (
//                                                 <img
//                                                     key={idx}
//                                                     src={image}
//                                                     alt={`Radiology scan ${idx + 1}`}
//                                                     className="w-full h-auto rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-colors"
//                                                 />
//                                             ))}
//                                           </div>
//                                       ) : (
//                                           <p className="text-gray-500 italic">No radiology images available</p>
//                                       )}
//                                     </div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           )}
//         </div>
//       </div>
//   );
// };
//
// export default ModernProfilePage;
'use client'
import React, { useState, useEffect } from 'react';
import {
  User,
  Calendar,
  Phone,
  Droplet,
  AlertCircle,
  Activity,
  FileText,
  ChevronRight,
  ChevronDown,
  X,
  Pill,
  ClipboardList,
  Image,
  Stethoscope,
  Mail,
  MapPin,
  Edit,
  Shield,
  Heart,
  Star,
  TrendingUp,
  Clock,
  Award,
  Bell,
  Settings,
  Download,
  Share2,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Video,
  MessageSquare,
  Moon,
    Sun,
  Users,
  History,
  FileEdit,
  BookOpen,
  Activity as ActivityIcon,
  Thermometer,
  Scale,
  Battery,
  Zap,
  Target,
  AlertTriangle,
  CheckCircle,
  Camera,
  Upload,
  Trash2,
  RefreshCw,
  HelpCircle,
  LogOut,
  CreditCard,
  ShieldCheck,
  Key,
  Database,
  Printer,
  QrCode,
  IdCard,
  Briefcase,
  Home,
  Navigation,
  Coffee,
  Wine,
  Smile,
  Frown,
  Meh
} from 'lucide-react';
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation";
import Action from '/components/newcomponents/profile/Action.jsx'
import Main from "@/components/newcomponents/profile/Main.jsx";
// Mock data - replace with your Supabase data
const initialPatientData = {
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

const initialMedicalRecords = [
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

const ModernProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [patient, setPatient] = useState(initialPatientData);
  const [medicalRecords, setMedicalRecords] = useState(initialMedicalRecords);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [showEmergency, setShowEmergency] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [user ,SetUser]=useState(null)
  const router = useRouter();
  useEffect(() => {
    const checkAuthAndFetchAppointments = async () => {
      const { data: { user },error  } = await supabase.auth.getUser();
      if (!user) {
        router.push("/Patient"); // Redirect if not logged in
        return;
      }else{
        SetUser(user)
        console.log(user)
      }
    };

    checkAuthAndFetchAppointments();
  }, []);
  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  const handleEdit = () => {
    setEditData({ ...patient });
    setIsEditing(true);
  };

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

  const getHealthStatus = (score) => {
    if (score >= 90) return { label: "Excellent", color: "text-green-600", bg: "bg-green-100" };
    if (score >= 80) return { label: "Good", color: "text-blue-600", bg: "bg-blue-100" };
    if (score >= 70) return { label: "Fair", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "Needs Attention", color: "text-red-600", bg: "bg-red-100" };
  };

  const healthStatus = getHealthStatus(patient.healthScore);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <ActivityIcon className="w-4 h-4" /> },
    { id: 'medical', label: 'Medical Records', icon: <FileText className="w-4 h-4" /> },
    { id: 'appointments', label: 'Appointments', icon: <Calendar className="w-4 h-4" /> },
    { id: 'activity', label: 'Activity Log', icon: <History className="w-4 h-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-4 h-4" /> },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           {/*Profile Header Card*/}
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
            <div className="absolute -bottom-6 right-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{patient.healthScore}</div>
                  <div className={`text-sm font-semibold ${healthStatus.color}`}>{healthStatus.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Health Score</div>
                </div>
              </div>
            </div>
          </div>
          {/*<Action />*/}

          {/* Navigation Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 border border-gray-100 dark:border-gray-700 mb-8">
            <div className="flex flex-wrap gap-1">
              {tabs.map(tab => (
                  <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 min-w-0 px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                          activeTab === tab.id
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
              ))}
            </div>
          </div>

          <Main activeTab={activeTab} />
        </div>

        {/* Edit Profile Modal */}
        {isEditing && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
                    <button onClick={handleCancel} className="p-2 hover:bg-white/20 rounded-xl transition-colors">
                      <X className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {Object.keys(editData).map(key => (
                      <div key={key} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                          {key.replace(/_/g, ' ')}
                        </label>
                        <input
                            type="text"
                            name={key}
                            value={editData[key] || ''}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        />
                      </div>
                  ))}

                  <div className="flex gap-3 pt-6">
                    <button
                        onClick={handleSave}
                        className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                    >
                      Save Changes
                    </button>
                    <button
                        onClick={handleCancel}
                        className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default ModernProfilePage;