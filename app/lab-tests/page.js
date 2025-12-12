// // //
// // // "use client"
// // // import { useState,useEffect } from "react";
// // // import { BeakerIcon, HeartIcon, ChartBarIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
// // //  import { supabase } from "@/lib/supabaseclient";
// // // import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
// // // import { AzureKeyCredential } from "@azure/core-auth";
// // // import OpenAI from "openai";
// // // import { useRouter } from "next/navigation";
// // // const endpoint = process.env.NEXT_PUBLIC_AZURE_ENDPOINT || "https://models.inference.ai.azure.com";
// // // const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;
// // // const apiKey2 = process.env.NEXT_PUBLIC_AZURE_KEY_2;
// // // const modelName = "DeepSeek-R1";
// // //
// // // export default function Home() {
// // //   const [selectedTestCategory, setSelectedTestCategory] = useState("");
// // //   const [values, setValues] = useState({});
// // //   const [result, setResult] = useState(null);
// // //   const [history, setHistory] = useState([]);
// // //   const [error, setError] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [user ,SetUser]=useState(null)
// // //
// // //   //to add to doctors page (add to supabase tablle of patient suggest doctor)
// // //   const[doctors,setDoctors]=useState([])
// // //   const router = useRouter();
// // //   const testCategories = {
// // //     "cbc": {
// // //       name: "Complete Blood Count (CBC)",
// // //       tests: {
// // //         hemoglobin: { name: "Hemoglobin", min: 12, max: 16, unit: "g/dL" },
// // //         wbc: { name: "White Blood Cells (WBC)", min: 4, max: 11, unit: "×10³/μL" },
// // //         rbc: { name: "Red Blood Cells (RBC)", min: 4.7, max: 6.1, unit: "million/μL" },
// // //         platelets: { name: "Platelet Count", min: 150, max: 400, unit: "×10³/μL" },
// // //         hematocrit: { name: "Hematocrit", min: 38, max: 50, unit: "%" },
// // //         mcv: { name: "Mean Corpuscular Volume (MCV)", min: 80, max: 100, unit: "fL" },
// // //         mch: { name: "Mean Corpuscular Hemoglobin (MCH)", min: 27, max: 33, unit: "pg" },
// // //         mchc: { name: "Mean Corpuscular Hemoglobin Concentration (MCHC)", min: 32, max: 36, unit: "g/dL" },
// // //       },
// // //     },
// // //     "metabolic": {
// // //       name: "Basic Metabolic Panel (BMP)",
// // //       tests: {
// // //         glucose: { name: "Fasting Glucose", min: 70, max: 140, unit: "mg/dL" },
// // //         sodium: { name: "Sodium", min: 135, max: 145, unit: "mEq/L" },
// // //         potassium: { name: "Potassium", min: 3.5, max: 5.1, unit: "mEq/L" },
// // //         chloride: { name: "Chloride", min: 96, max: 106, unit: "mEq/L" },
// // //         bicarbonate: { name: "Bicarbonate", min: 22, max: 29, unit: "mEq/L" },
// // //         bun: { name: "Blood Urea Nitrogen (BUN)", min: 7, max: 20, unit: "mg/dL" },
// // //         creatinine: { name: "Creatinine", min: 0.6, max: 1.3, unit: "mg/dL" },
// // //       },
// // //     },
// // //     "lipid": {
// // //       name: "Lipid Panel",
// // //       tests: {
// // //         cholesterol: { name: "Total Cholesterol", min: 150, max: 200, unit: "mg/dL" },
// // //         hdl: { name: "High-Density Lipoprotein (HDL)", min: 40, max: 60, unit: "mg/dL" },
// // //         ldl: { name: "Low-Density Lipoprotein (LDL)", min: 0, max: 100, unit: "mg/dL" },
// // //         triglycerides: { name: "Triglycerides", min: 50, max: 150, unit: "mg/dL" },
// // //       },
// // //     },
// // //     "liver": {
// // //       name: "Liver Function Tests (LFT)",
// // //       tests: {
// // //         alt: { name: "Alanine Aminotransferase (ALT)", min: 7, max: 56, unit: "U/L" },
// // //         ast: { name: "Aspartate Aminotransferase (AST)", min: 10, max: 40, unit: "U/L" },
// // //         alp: { name: "Alkaline Phosphatase (ALP)", min: 44, max: 147, unit: "U/L" },
// // //         bilirubin: { name: "Total Bilirubin", min: 0.1, max: 1.2, unit: "mg/dL" },
// // //         albumin: { name: "Albumin", min: 3.5, max: 5.0, unit: "g/dL" },
// // //         total_protein: { name: "Total Protein", min: 6.0, max: 8.3, unit: "g/dL" },
// // //       },
// // //     },
// // //     "thyroid": {
// // //       name: "Thyroid Function Panel",
// // //       tests: {
// // //         tsh: { name: "Thyroid-Stimulating Hormone (TSH)", min: 0.5, max: 5.0, unit: "mIU/L" },
// // //         t3: { name: "Triiodothyronine (T3)", min: 80, max: 200, unit: "ng/dL" },
// // //         t4: { name: "Thyroxine (T4)", min: 4.5, max: 12.5, unit: "μg/dL" },
// // //       },
// // //     },
// // //     "renal": {
// // //       name: "Renal Function Panel",
// // //       tests: {
// // //         bun: { name: "Blood Urea Nitrogen (BUN)", min: 7, max: 20, unit: "mg/dL" },
// // //         creatinine: { name: "Creatinine", min: 0.6, max: 1.3, unit: "mg/dL" },
// // //         gfr: { name: "Glomerular Filtration Rate (GFR)", min: 90, max: 120, unit: "mL/min" },
// // //       },
// // //     },
// // //     "coagulation": {
// // //       name: "Coagulation Panel",
// // //       tests: {
// // //         pt: { name: "Prothrombin Time (PT)", min: 10, max: 13, unit: "seconds" },
// // //         inr: { name: "International Normalized Ratio (INR)", min: 0.8, max: 1.2, unit: "ratio" },
// // //         aptt: { name: "Activated Partial Thromboplastin Time (aPTT)", min: 25, max: 35, unit: "seconds" },
// // //       },
// // //     },
// // //     "infectious": {
// // //       name: "Infectious Disease Panel",
// // //       tests: {
// // //         hiv_viral_load: { name: "HIV Viral Load", min: 0, max: 20, unit: "copies/mL" },
// // //         cd4_count: { name: "CD4 Count", min: 500, max: 1500, unit: "cells/μL" },
// // //         hbsag: { name: "Hepatitis B Surface Antigen (HBsAg)", min: 0, max: 0.05, unit: "IU/mL" },
// // //         anti_hcv: { name: "Anti-HCV Antibody", min: 0, max: 1, unit: "signal/cutoff" },
// // //       },
// // //     },
// // //     "hormonal": {
// // //       name: "Hormonal Panel",
// // //       tests: {
// // //         fsh: { name: "Follicle-Stimulating Hormone (FSH)", min: 1.5, max: 12.4, unit: "mIU/mL" },
// // //         lh: { name: "Luteinizing Hormone (LH)", min: 1.7, max: 8.6, unit: "mIU/mL" },
// // //         estradiol: { name: "Estradiol", min: 15, max: 350, unit: "pg/mL" },
// // //         testosterone: { name: "Testosterone", min: 300, max: 1000, unit: "ng/dL" },
// // //       },
// // //     },
// // //     "cardiac": {
// // //       name: "Cardiac Markers",
// // //       tests: {
// // //         troponin: { name: "Troponin I", min: 0, max: 0.04, unit: "ng/mL" },
// // //         bnp: { name: "B-type Natriuretic Peptide (BNP)", min: 0, max: 100, unit: "pg/mL" },
// // //         ck_mb: { name: "Creatine Kinase-MB (CK-MB)", min: 0, max: 5, unit: "ng/mL" },
// // //       },
// // //     },
// // //     "autoimmune": {
// // //       name: "Autoimmune Panel",
// // //       tests: {
// // //         ana: { name: "Antinuclear Antibody (ANA)", min: 0, max: 1, unit: "titer" },
// // //         rf: { name: "Rheumatoid Factor (RF)", min: 0, max: 14, unit: "IU/mL" },
// // //         crp: { name: "C-Reactive Protein (CRP)", min: 0, max: 10, unit: "mg/L" },
// // //         esr: { name: "Erythrocyte Sedimentation Rate (ESR)", min: 0, max: 20, unit: "mm/hr" },
// // //       },
// // //     },
// // //     "urinalysis": {
// // //       name: "Urinalysis",
// // //       tests: {
// // //         urine_ph: { name: "Urine pH", min: 4.5, max: 8, unit: "pH" },
// // //         urine_glucose: { name: "Urine Glucose", min: 0, max: 0, unit: "mg/dL" },
// // //         urine_protein: { name: "Urine Protein", min: 0, max: 150, unit: "mg/day" },
// // //         urine_rbc: { name: "Urine RBCs", min: 0, max: 3, unit: "cells/HPF" },
// // //       },
// // //   }
// // // }
// // // useEffect(() => {
// // //   const checkAuthAndFetchAppointments = async () => {
// // //     const { data: { user },error  } = await supabase.auth.getUser();
// // //     if (!user) {
// // //       router.push("/Patient"); // Redirect if not logged in
// // //       return;
// // //     }else{
// // //       SetUser(user)
// // //       console.log(user)
// // //     }
// // //   };
// // //
// // //   checkAuthAndFetchAppointments();
// // // }, []);
// // // const handleChange = (e) => {
// // // setValues({ ...values, [e.target.name]: e.target.value });
// // // };
// // // const analyze = async () => {
// // //   const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;
// // // if (!selectedTestCategory) {
// // // setError("Please select a test category before analyzing.");
// // // return;
// // // }
// // //
// // // if (!apiKey) {
// // // setError("API key is missing! Set NEXT_PUBLIC_AZURE_KEY in .env.local.");
// // // return;
// // // }
// // //
// // // setLoading(true);
// // // setError(null);
// // // setResult(null);
// // //
// // // const selectedTests = testCategories[selectedTestCategory].tests;
// // // let formattedResults = Object.keys(values)
// // // .map((key) => {
// // //   const test = selectedTests[key];
// // //   return `${test.name}: ${values[key]} ${test.unit}`;
// // // })
// // // .join("\n");
// // //
// // // const prompt = `
// // // ---
// // //
// // // ### **1. Test Analysis**
// // // - **For each value:**
// // // - **Status:** Clearly state *High/Normal/Low* in **bold**. (and display 🔴 for low, 🟠 for high, 🟢 for normal)
// // // - **Biological Reason:** One concise phrase (≤15 words) explaining the mechanism or clinical relevance.
// // // - **Example Format:**
// // // - Hemoglobin: **High** 🟠. Chronic hypoxia stimulates erythropoietin production.
// // //
// // // ---
// // //
// // // ### **2. Potential Diagnoses**
// // // - **Criteria:** Only list conditions **directly linked to ALL abnormal values combined**.
// // // - **Prioritization:** Rank **top 3** most likely diagnoses (use medical terminology).
// // // - Include a brief rationale (1 sentence) linking abnormal results to each diagnosis.
// // // - **Example:**
// // // 1. **Polycythemia Vera** – Elevated hemoglobin and hematocrit with JAK2 mutation association.
// // //
// // // ---
// // //
// // // ### **3. Recommended Specialists**
// // // - **Specificity:** Name **subspecialists** (e.g., *Hematologist*, not "doctor").
// // // - **Alignment:** Pair each specialist with a corresponding diagnosis from Section 2.
// // // - **Example:**
// // // - **Hematologist**: Further evaluate suspected polycythemia vera.
// // //
// // // ---
// // //
// // // **Lab Results:**
// // // \n\n${formattedResults}\n\n
// // //
// // // ---
// // // **Response Guidelines:**
// // // - Use clear headings, bullet points, and bold keywords for readability.
// // // - Avoid redundant explanations or general statements.
// // // - Prioritize abnormalities first, then normal values.
// // // `
// // //
// // // try {
// // // const client = new OpenAI({
// // //   baseURL: "https://models.inference.ai.azure.com",
// // //   apiKey: apiKey,
// // //   dangerouslyAllowBrowser: true, // Required to use OpenAI in the browser
// // // });
// // //
// // // const response = await client.chat.completions.create({
// // //   messages: [
// // //     { role: "system", content: "You are a medical expert providing test analysis." },
// // //     { role: "user", content: prompt },
// // //   ],
// // //   model: "gpt-4o",
// // //   temperature: 1,
// // //   max_tokens: 4096,
// // //   top_p: 1,
// // // });
// // // let aiResponse = response.choices[0].message.content;
// // //
// // // // Remove stars and hashes, trim
// // // aiResponse = aiResponse.replace(/\*\*/g, "").replace(/#/g, "").trim();
// // //
// // // // Extract "Doctors to consult" section
// // // let doctorsList = [];
// // // let doctorNames = [];
// // // const sections = aiResponse.split("\n\n");
// // // console.log(sections)
// // // for (const section of sections) {
// // // const lines = section.split("\n");
// // // for (const line of sections) {
// // // console.log('line',line)
// // //     const match = line.match(/-\s*([A-Za-z\s]+?ist)\b/); // match words ending in 'ist'
// // //     if (match) {
// // //       doctorNames.push(match[1].trim());
// // //     }
// // // }
// // // console.log("doctornames:", doctorNames);
// // // console.log(user);
// // // setDoctors(doctorNames);
// // // setResult(aiResponse);
// // //
// // // // ✅ Save doctor list to patient account
// // // try {
// // //   const { data: patientData, error: fetchError } = await supabase
// // //     .from('patients')
// // //     .select('doctor_list')
// // //     .eq('user_id', user.id)
// // //     .single();
// // //     console.log(user.id ,  patientData);
// // //   if (fetchError) {
// // //     console.error("Error fetching data:", fetchError);
// // //     return;
// // //   }
// // // console.log(patientData.doctor_list)
// // //   const currentDoctors = patientData?.doctor_list || [];
// // //   const mergedDoctors = [...currentDoctors, ...doctors];
// // //   const uniqueDoctors = [...new Set(mergedDoctors)];
// // // console.log(mergedDoctors)
// // //   const { error: updateError } = await supabase
// // //     .from('patients')
// // //     .update({ doctor_list: uniqueDoctors })
// // //     .eq('user_id', user.id);
// // //
// // //   if (updateError) {
// // //     console.error('Supabase save error:', updateError);
// // //   } else {
// // //     console.log('✅ Saved doctors:', uniqueDoctors);
// // //   }
// // // } catch (err) {
// // //   console.error('Saving failed:', err);
// // // }
// // //
// // // // try {
// // // //   const { data: { user }, error: authError } = await supabase.auth.getUser();
// // // //   console.log("saveDoctors: starting...");
// // // //   if (authError || !user) {
// // // //     console.error("Auth error:", authError?.message || "No user");
// // // //     return;
// // // //   }
// // // //   console.log("saveDoctors: starting...");
// // // //   // if (!doctors || doctors.length === 0) {
// // // //   //   console.warn("Empty doctors list - aborting save");
// // // //   //   return;
// // // //   // }
// // // //   // Fetch the existing patient record
// // // //   const { data: patientData, error: fetchError } = await supabase
// // // //     .from('patients')
// // // //     .select('doctors_list') // Ensure the column name matches your database!
// // // //     .eq('user_id', user.id)
// // // //     .single(); // Get a single record
// // //
// // // //   if (fetchError) {
// // // //     console.error("Error fetching data:", fetchError);
// // // //     return;
// // // //   }
// // // //    // Get the current list (or default to an empty array)
// // // //    const currentDoctors = patientData?.doctors_list || [];
// // // //   // Merge existing and new doctors, and deduplicate (optional)
// // // // const mergedDoctors = [...currentDoctors, ...doctors];
// // //
// // // // // Remove duplicates (if needed)
// // // // const uniqueDoctors = [...new Set(mergedDoctors)];
// // //
// // // // console.log("Fetched patient data:", patientData);
// // // // console.log("Current doctors list:", currentDoctors);
// // // // console.log("Merged doctors list:", mergedDoctors);
// // // // console.log("Unique doctors list:", uniqueDoctors);
// // //
// // // //   const { error: updateError } = await supabase
// // // //   .from('patients')
// // // //   .update({ doctors_list: uniqueDoctors })
// // // //   .eq('user_id', user.id);
// // //
// // // //   if (updateError) {
// // // //     console.error('Supabase save error:', updateError);
// // // //     setError('Failed to save doctor list');
// // // //   } else {
// // // //     console.log('Saved doctors:', uniqueDoctors);
// // // //   }
// // // // } catch (err) {
// // // //   console.error('Saving failed:', err);
// // // // }
// // //  }
// // // //  catch (err) {
// // // // console.error("API Error:", err);
// // // // setError("Error analyzing test results.");
// // // } finally {
// // // setLoading(false);
// // // }
// // // };
// // //
// // // return (
// // //   <div className="min-h-screen bg-slate-50 flex flex-col items-center p-6 font-sans">
// // //     <header className="w-full max-w-4xl mb-8">
// // //       <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-slate-100">
// // //         <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
// // //           <BeakerIcon className="w-8 h-8 text-blue-600" />
// // //           Clinical Laboratory Analyzer
// // //         </h1>
// // //         <p className="text-slate-600 mt-2">
// // //           Comprehensive medical test interpretation and analysis
// // //         </p>
// // //       </div>
// // //     </header>
// // //
// // //     <main className="w-full max-w-4xl space-y-6">
// // //       {/* Test Selection Card */}
// // //       <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
// // //         <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
// // //           <DocumentTextIcon className="w-5 h-5 text-blue-600" />
// // //           Select Test Panel
// // //         </h2>
// // //         <select
// // //           className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// // //           onChange={(e) => {
// // //             setSelectedTestCategory(e.target.value);
// // //             setValues({});
// // //           }}
// // //         >
// // //           <option value="">Choose a diagnostic panel...</option>
// // //           {Object.keys(testCategories).map((key) => (
// // //             <option key={key} value={key}>
// // //               {testCategories[key].name}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>
// // //
// // //       {/* Input Form Card */}
// // //       {selectedTestCategory && (
// // //         <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
// // //           <div className="flex items-center gap-3 mb-6">
// // //             <HeartIcon className="w-6 h-6 text-blue-600" />
// // //             <h2 className="text-lg font-semibold text-slate-800">
// // //               {testCategories[selectedTestCategory].name}
// // //             </h2>
// // //           </div>
// // //
// // //           <div className="grid gap-4 md:grid-cols-2">
// // //             {Object.keys(testCategories[selectedTestCategory].tests).map(
// // //               (key) => {
// // //                 const test = testCategories[selectedTestCategory].tests[key];
// // //                 return (
// // //                   <div key={key} className="space-y-1">
// // //                     <label className="text-sm font-medium text-slate-700">
// // //                       {test.name} ({test.unit})
// // //                     </label>
// // //                     <div className="relative">
// // //                       <input
// // //                         type="number"
// // //                         name={key}
// // //                         className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-16"
// // //                         placeholder={`Enter value (${test.min}-${test.max})`}
// // //                         onChange={handleChange}
// // //                       />
// // //                       <span className="absolute right-3 top-3.5 text-slate-400 text-sm">
// // //                         {test.unit}
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               }
// // //             )}
// // //           </div>
// // //
// // //           <button
// // //             onClick={analyze}
// // //             disabled={loading}
// // //             className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
// // //           >
// // //             {loading ? "Analyzing..." : "Analyze Results"}
// // //           </button>
// // //         </div>
// // //       )}
// // //
// // //       {/* Results Card */}
// // //       {result && (
// // //         <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
// // //           <div className="flex items-center gap-3 mb-6">
// // //             <ChartBarIcon className="w-6 h-6 text-blue-600" />
// // //             <h2 className="text-lg font-semibold text-slate-800">
// // //               Clinical Interpretation
// // //             </h2>
// // //           </div>
// // //
// // //           <div className="space-y-4">
// // //             {result.split("\n").map((line, index) => (
// // //               <div key={index} className="text-slate-700">
// // //                 {line}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //
// // //       {/* History Card */}
// // //       <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
// // //         <div className="flex items-center gap-3 mb-6">
// // //           <ClockIcon className="w-6 h-6 text-blue-600" />
// // //           <h2 className="text-lg font-semibold text-slate-800">Test History</h2>
// // //         </div>
// // //
// // //         <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium py-3 px-6 rounded-lg transition-colors">
// // //           Load Historical Data
// // //         </button>
// // //
// // //         {history.length > 0 && (
// // //           <div className="mt-6 space-y-4">
// // //             {history.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="border-l-4 border-blue-200 bg-slate-50 p-4 rounded-lg"
// // //               >
// // //                 <div className="flex justify-between items-center">
// // //                   <div>
// // //                     <h3 className="font-medium text-slate-800">
// // //                       {item.category}
// // //                     </h3>
// // //                     <p className="text-sm text-slate-500">
// // //                       {new Date(item.timestamp.seconds * 1000).toLocaleDateString()}
// // //                     </p>
// // //                   </div>
// // //                   <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
// // //                     View Details
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </main>
// // //   </div>
// // // );
// // // }
// // 'use client'
// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Beaker,
// // //   Heart,
// // //   Activity,
// // //   Clock,
// // //   FileText,
// // //   TrendingUp,
// // //   AlertCircle,
// // //   CheckCircle,
// // //   ChevronRight,
// // //   Sparkles,
// // //   Download,
// // //   Share2,
// // //   Brain,
// // //   Droplets,
// // //   Zap,
// // //   Shield,
// // //   Info,
// // //   Search,
// // //   X
// // // } from 'lucide-react';
// // //
// // // // Mock functions - replace with your actual imports
// // // const mockSupabase = {
// // //   auth: {
// // //     getUser: async () => ({
// // //       data: { user: { id: '123', email: 'user@example.com' } },
// // //       error: null
// // //     })
// // //   },
// // //   from: (table) => ({
// // //     select: (cols) => ({
// // //       eq: (col, val) => ({
// // //         single: async () => ({
// // //           data: { doctor_list: [] },
// // //           error: null
// // //         })
// // //       })
// // //     }),
// // //     update: (data) => ({
// // //       eq: (col, val) => async () => ({
// // //         error: null
// // //       })
// // //     })
// // //   })
// // // };
// // //
// // // const mockOpenAI = async (prompt) => {
// // //   return `### 📊 Test Analysis Results
// // //
// // // **Status Overview:**
// // // - 🟢 **Hemoglobin**: Normal (14.2 g/dL) - Healthy oxygen-carrying capacity
// // // - 🟢 **White Blood Cells**: Normal (7.5 ×10³/μL) - Immune system functioning well
// // // - 🟠 **Red Blood Cells**: Slightly High (6.3 million/μL) - Possible dehydration or altitude adaptation
// // //
// // // ### 🏥 Potential Diagnoses
// // // 1. **Mild Polycythemia** - Elevated RBC count may indicate increased red blood cell production
// // // 2. **Dehydration** - Could explain concentrated blood values
// // // 3. **High Altitude Exposure** - Body compensation for lower oxygen levels
// // //
// // // ### 👨‍⚕️ Recommended Specialists
// // // - **Hematologist** - For elevated red blood cell evaluation
// // // - **Cardiologist** - To rule out cardiovascular factors
// // // - **Nephrologist** - To assess kidney function
// // //
// // // ### 💡 Next Steps
// // // - Repeat test in 2 weeks after proper hydration
// // // - Monitor for symptoms like headaches or dizziness
// // // - Consider consultation if symptoms persist`;
// // // };
// // //
// // // const TestAnalyzerPage = () => {
// // //   const [selectedTestCategory, setSelectedTestCategory] = useState('');
// // //   const [values, setValues] = useState({});
// // //   const [result, setResult] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);
// // //   const [user, setUser] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [history, setHistory] = useState([]);
// // //
// // //   // All test categories
// // //   const testCategories = {
// // //     cbc: {
// // //       name: 'Complete Blood Count (CBC)',
// // //       icon: <Droplets className="w-6 h-6" />,
// // //       color: 'from-red-500 to-pink-500',
// // //       tests: {
// // //         hemoglobin: { name: 'Hemoglobin', min: 12, max: 16, unit: 'g/dL', icon: '🔴' },
// // //         wbc: { name: 'White Blood Cells', min: 4, max: 11, unit: '×10³/μL', icon: '⚪' },
// // //         rbc: { name: 'Red Blood Cells', min: 4.7, max: 6.1, unit: 'million/μL', icon: '🔴' },
// // //         platelets: { name: 'Platelet Count', min: 150, max: 400, unit: '×10³/μL', icon: '🟡' },
// // //         hematocrit: { name: 'Hematocrit', min: 38, max: 50, unit: '%', icon: '📊' },
// // //         mcv: { name: 'MCV', min: 80, max: 100, unit: 'fL', icon: '📏' },
// // //         mch: { name: 'MCH', min: 27, max: 33, unit: 'pg', icon: '📐' },
// // //         mchc: { name: 'MCHC', min: 32, max: 36, unit: 'g/dL', icon: '📈' },
// // //       },
// // //     },
// // //     metabolic: {
// // //       name: 'Basic Metabolic Panel',
// // //       icon: <Activity className="w-6 h-6" />,
// // //       color: 'from-green-500 to-emerald-500',
// // //       tests: {
// // //         glucose: { name: 'Fasting Glucose', min: 70, max: 140, unit: 'mg/dL', icon: '🍬' },
// // //         sodium: { name: 'Sodium', min: 135, max: 145, unit: 'mEq/L', icon: '🧂' },
// // //         potassium: { name: 'Potassium', min: 3.5, max: 5.1, unit: 'mEq/L', icon: '🍌' },
// // //         chloride: { name: 'Chloride', min: 96, max: 106, unit: 'mEq/L', icon: '💧' },
// // //         bicarbonate: { name: 'Bicarbonate', min: 22, max: 29, unit: 'mEq/L', icon: '⚗️' },
// // //         bun: { name: 'BUN', min: 7, max: 20, unit: 'mg/dL', icon: '🧪' },
// // //         creatinine: { name: 'Creatinine', min: 0.6, max: 1.3, unit: 'mg/dL', icon: '💉' },
// // //       },
// // //     },
// // //     lipid: {
// // //       name: 'Lipid Panel',
// // //       icon: <Heart className="w-6 h-6" />,
// // //       color: 'from-purple-500 to-indigo-500',
// // //       tests: {
// // //         cholesterol: { name: 'Total Cholesterol', min: 150, max: 200, unit: 'mg/dL', icon: '💛' },
// // //         hdl: { name: 'HDL Cholesterol', min: 40, max: 60, unit: 'mg/dL', icon: '💚' },
// // //         ldl: { name: 'LDL Cholesterol', min: 0, max: 100, unit: 'mg/dL', icon: '❤️' },
// // //         triglycerides: { name: 'Triglycerides', min: 50, max: 150, unit: 'mg/dL', icon: '🔷' },
// // //       },
// // //     },
// // //     liver: {
// // //       name: 'Liver Function Tests',
// // //       icon: <Activity className="w-6 h-6" />,
// // //       color: 'from-amber-500 to-orange-500',
// // //       tests: {
// // //         alt: { name: 'ALT', min: 7, max: 56, unit: 'U/L', icon: '🟠' },
// // //         ast: { name: 'AST', min: 10, max: 40, unit: 'U/L', icon: '🟡' },
// // //         alp: { name: 'ALP', min: 44, max: 147, unit: 'U/L', icon: '🟢' },
// // //         bilirubin: { name: 'Total Bilirubin', min: 0.1, max: 1.2, unit: 'mg/dL', icon: '🟤' },
// // //         albumin: { name: 'Albumin', min: 3.5, max: 5.0, unit: 'g/dL', icon: '⚪' },
// // //         total_protein: { name: 'Total Protein', min: 6.0, max: 8.3, unit: 'g/dL', icon: '🔵' },
// // //       },
// // //     },
// // //     thyroid: {
// // //       name: 'Thyroid Function Panel',
// // //       icon: <Zap className="w-6 h-6" />,
// // //       color: 'from-blue-500 to-cyan-500',
// // //       tests: {
// // //         tsh: { name: 'TSH', min: 0.5, max: 5.0, unit: 'mIU/L', icon: '⚡' },
// // //         t3: { name: 'T3', min: 80, max: 200, unit: 'ng/dL', icon: '🔋' },
// // //         t4: { name: 'T4', min: 4.5, max: 12.5, unit: 'μg/dL', icon: '🔌' },
// // //       },
// // //     },
// // //     renal: {
// // //       name: 'Renal Function Panel',
// // //       icon: <Droplets className="w-6 h-6" />,
// // //       color: 'from-teal-500 to-cyan-500',
// // //       tests: {
// // //         bun: { name: 'BUN', min: 7, max: 20, unit: 'mg/dL', icon: '🧪' },
// // //         creatinine: { name: 'Creatinine', min: 0.6, max: 1.3, unit: 'mg/dL', icon: '💉' },
// // //         gfr: { name: 'GFR', min: 90, max: 120, unit: 'mL/min', icon: '💧' },
// // //       },
// // //     },
// // //     coagulation: {
// // //       name: 'Coagulation Panel',
// // //       icon: <Activity className="w-6 h-6" />,
// // //       color: 'from-rose-500 to-red-500',
// // //       tests: {
// // //         pt: { name: 'Prothrombin Time', min: 10, max: 13, unit: 'seconds', icon: '⏱️' },
// // //         inr: { name: 'INR', min: 0.8, max: 1.2, unit: 'ratio', icon: '📊' },
// // //         aptt: { name: 'aPTT', min: 25, max: 35, unit: 'seconds', icon: '⏰' },
// // //       },
// // //     },
// // //     cardiac: {
// // //       name: 'Cardiac Markers',
// // //       icon: <Heart className="w-6 h-6" />,
// // //       color: 'from-pink-500 to-rose-500',
// // //       tests: {
// // //         troponin: { name: 'Troponin I', min: 0, max: 0.04, unit: 'ng/mL', icon: '❤️' },
// // //         bnp: { name: 'BNP', min: 0, max: 100, unit: 'pg/mL', icon: '💗' },
// // //         ck_mb: { name: 'CK-MB', min: 0, max: 5, unit: 'ng/mL', icon: '💓' },
// // //       },
// // //     },
// // //   };
// // //
// // //   useEffect(() => {
// // //     const checkAuth = async () => {
// // //       try {
// // //         const { data, error } = await mockSupabase.auth.getUser();
// // //         if (error) {
// // //           console.error('Auth error:', error);
// // //           return;
// // //         }
// // //         if (data?.user) {
// // //           setUser(data.user);
// // //         }
// // //       } catch (err) {
// // //         console.error('Auth check failed:', err);
// // //       }
// // //     };
// // //     checkAuth();
// // //   }, []);
// // //
// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     const numValue = value === '' ? '' : parseFloat(value);
// // //
// // //     // Validate if it's a positive number
// // //     if (value !== '' && (isNaN(numValue) || numValue < 0)) {
// // //       return;
// // //     }
// // //
// // //     setValues(prev => ({
// // //       ...prev,
// // //       [name]: numValue
// // //     }));
// // //   };
// // //
// // //   const analyze = async () => {
// // //     // Reset states
// // //     setError(null);
// // //     setResult(null);
// // //
// // //     // Validation
// // //     if (!selectedTestCategory) {
// // //       setError('Please select a test category');
// // //       return;
// // //     }
// // //
// // //     const filledValues = Object.keys(values).filter(k => values[k] !== '');
// // //     if (filledValues.length === 0) {
// // //       setError('Please enter at least one test value');
// // //       return;
// // //     }
// // //
// // //     setLoading(true);
// // //
// // //     try {
// // //       // Format test results
// // //       const selectedTests = testCategories[selectedTestCategory].tests;
// // //       const formattedResults = Object.keys(values)
// // //           .filter(key => values[key] !== '')
// // //           .map(key => `${selectedTests[key].name}: ${values[key]} ${selectedTests[key].unit}`)
// // //           .join('\n');
// // //
// // //       // Replace with your actual OpenAI call
// // //       const aiResponse = await mockOpenAI(formattedResults);
// // //       setResult(aiResponse);
// // //
// // //       // Extract doctor specialties
// // //       const doctorNames = [];
// // //       const matches = aiResponse.match(/-\s*\*\*([A-Za-z\s]+?ist)\*\*/g);
// // //       if (matches) {
// // //         matches.forEach(match => {
// // //           const name = match.replace(/[-*]/g, '').trim();
// // //           if (name) doctorNames.push(name);
// // //         });
// // //       }
// // //
// // //       // Save to Supabase
// // //       if (user && doctorNames.length > 0) {
// // //         try {
// // //           const { data } = await mockSupabase.from('patients').select('doctor_list').eq('user_id', user.id).single();
// // //           const currentDoctors = data?.doctor_list || [];
// // //           const uniqueDoctors = [...new Set([...currentDoctors, ...doctorNames])];
// // //
// // //           await mockSupabase.from('patients').update({ doctor_list: uniqueDoctors }).eq('user_id', user.id);
// // //         } catch (dbError) {
// // //           console.error('Database update error:', dbError);
// // //           // Don't show this error to user as it doesn't affect the main functionality
// // //         }
// // //       }
// // //     } catch (err) {
// // //       console.error('Analysis error:', err);
// // //       setError('Failed to analyze results. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
// // //
// // //   const getValueStatus = (value, min, max) => {
// // //     if (value === '' || value === null || value === undefined) return null;
// // //     const numValue = parseFloat(value);
// // //     if (isNaN(numValue)) return null;
// // //
// // //     if (numValue < min) return {
// // //       status: 'low',
// // //       color: 'text-red-500',
// // //       bg: 'bg-red-50',
// // //       border: 'border-red-300',
// // //       icon: '🔴'
// // //     };
// // //     if (numValue > max) return {
// // //       status: 'high',
// // //       color: 'text-orange-500',
// // //       bg: 'bg-orange-50',
// // //       border: 'border-orange-300',
// // //       icon: '🟠'
// // //     };
// // //     return {
// // //       status: 'normal',
// // //       color: 'text-green-500',
// // //       bg: 'bg-green-50',
// // //       border: 'border-green-300',
// // //       icon: '🟢'
// // //     };
// // //   };
// // //
// // //   const clearAll = () => {
// // //     setSelectedTestCategory('');
// // //     setValues({});
// // //     setResult(null);
// // //     setError(null);
// // //     setSearchTerm('');
// // //   };
// // //
// // //   const filteredCategories = Object.keys(testCategories).filter(key =>
// // //       testCategories[key].name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );
// // //
// // //   const hasValidValues = Object.keys(values).some(k => values[k] !== '');
// // //
// // //   return (
// // //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // //         <div className="max-w-7xl mx-auto p-6 lg:p-8">
// // //           {/* Hero Header */}
// // //           <div className="mb-8">
// // //             <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 lg:p-12">
// // //               <div className="absolute inset-0 bg-black/10"></div>
// // //               <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
// // //                 <div className="flex items-center gap-6">
// // //                   <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
// // //                     <Beaker className="w-12 h-12 text-white" />
// // //                   </div>
// // //                   <div>
// // //                     <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
// // //                       Clinical Lab Analyzer
// // //                     </h1>
// // //                     <p className="text-blue-100 text-lg">
// // //                       AI-powered medical test interpretation with GPT-4
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //                 {(selectedTestCategory || result) && (
// // //                     <button
// // //                         onClick={clearAll}
// // //                         className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-xl transition-colors backdrop-blur-sm"
// // //                     >
// // //                       Start New Analysis
// // //                     </button>
// // //                 )}
// // //               </div>
// // //
// // //               {/* Decorative Elements */}
// // //               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
// // //               <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"></div>
// // //             </div>
// // //
// // //             {/* Stats Cards */}
// // //             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
// // //               {[
// // //                 { label: 'Test Panels', value: Object.keys(testCategories).length, icon: <FileText className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500' },
// // //                 { label: 'Parameters', value: '50+', icon: <Activity className="w-5 h-5" />, color: 'from-green-500 to-emerald-500' },
// // //                 { label: 'Accuracy', value: '99%', icon: <Shield className="w-5 h-5" />, color: 'from-purple-500 to-pink-500' },
// // //                 { label: 'AI Powered', value: 'GPT-4', icon: <Brain className="w-5 h-5" />, color: 'from-orange-500 to-red-500' },
// // //               ].map((stat, index) => (
// // //                   <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
// // //                     <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white mb-3`}>
// // //                       {stat.icon}
// // //                     </div>
// // //                     <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
// // //                     <div className="text-sm text-gray-500">{stat.label}</div>
// // //                   </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //
// // //           <div className="grid lg:grid-cols-3 gap-6">
// // //             {/* Left Column - Test Selection & Input */}
// // //             <div className="lg:col-span-2 space-y-6">
// // //               {/* Test Category Selection */}
// // //               <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
// // //                 <div className="flex items-center gap-3 mb-6">
// // //                   <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
// // //                     <FileText className="w-5 h-5" />
// // //                   </div>
// // //                   <div className="flex-1">
// // //                     <h2 className="text-xl font-bold text-gray-800">Select Test Panel</h2>
// // //                     <p className="text-sm text-gray-500">Choose the diagnostic panel you want to analyze</p>
// // //                   </div>
// // //                 </div>
// // //
// // //                 {/* Search Bar */}
// // //                 <div className="relative mb-4">
// // //                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
// // //                   <input
// // //                       type="text"
// // //                       placeholder="Search test panels..."
// // //                       value={searchTerm}
// // //                       onChange={(e) => setSearchTerm(e.target.value)}
// // //                       className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
// // //                   />
// // //                   {searchTerm && (
// // //                       <button
// // //                           onClick={() => setSearchTerm('')}
// // //                           className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
// // //                       >
// // //                         <X className="w-4 h-4 text-gray-400" />
// // //                       </button>
// // //                   )}
// // //                 </div>
// // //
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
// // //                   {filteredCategories.length === 0 ? (
// // //                       <div className="col-span-2 text-center py-8 text-gray-500">
// // //                         No test panels found matching "{searchTerm}"
// // //                       </div>
// // //                   ) : (
// // //                       filteredCategories.map((key) => {
// // //                         const category = testCategories[key];
// // //                         return (
// // //                             <button
// // //                                 key={key}
// // //                                 onClick={() => {
// // //                                   setSelectedTestCategory(key);
// // //                                   setValues({});
// // //                                   setResult(null);
// // //                                   setError(null);
// // //                                 }}
// // //                                 className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
// // //                                     selectedTestCategory === key
// // //                                         ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-xl scale-105`
// // //                                         : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
// // //                                 }`}
// // //                             >
// // //                               <div className={`inline-block p-3 rounded-xl mb-4 ${
// // //                                   selectedTestCategory === key ? 'bg-white/20' : 'bg-gray-100'
// // //                               }`}>
// // //                                 {category.icon}
// // //                               </div>
// // //                               <h3 className={`font-bold text-lg mb-1 ${
// // //                                   selectedTestCategory === key ? 'text-white' : 'text-gray-800'
// // //                               }`}>
// // //                                 {category.name}
// // //                               </h3>
// // //                               <p className={`text-sm ${
// // //                                   selectedTestCategory === key ? 'text-white/80' : 'text-gray-500'
// // //                               }`}>
// // //                                 {Object.keys(category.tests).length} parameters
// // //                               </p>
// // //                               {selectedTestCategory === key && (
// // //                                   <CheckCircle className="absolute top-4 right-4 w-6 h-6 text-white" />
// // //                               )}
// // //                             </button>
// // //                         );
// // //                       })
// // //                   )}
// // //                 </div>
// // //               </div>
// // //
// // //               {/* Input Form */}
// // //               {selectedTestCategory && (
// // //                   <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
// // //                     <div className="flex items-center justify-between mb-6">
// // //                       <div className="flex items-center gap-3">
// // //                         <div className={`p-2 bg-gradient-to-br ${testCategories[selectedTestCategory].color} rounded-xl text-white`}>
// // //                           {testCategories[selectedTestCategory].icon}
// // //                         </div>
// // //                         <div>
// // //                           <h2 className="text-xl font-bold text-gray-800">
// // //                             {testCategories[selectedTestCategory].name}
// // //                           </h2>
// // //                           <p className="text-sm text-gray-500">Enter your test values below</p>
// // //                         </div>
// // //                       </div>
// // //                       <button
// // //                           onClick={clearAll}
// // //                           className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-xl transition-colors"
// // //                       >
// // //                         <X className="w-4 h-4" />
// // //                         <span className="text-sm font-medium hidden sm:inline">Clear</span>
// // //                       </button>
// // //                     </div>
// // //
// // //                     <div className="grid gap-4 md:grid-cols-2">
// // //                       {Object.keys(testCategories[selectedTestCategory].tests).map((key) => {
// // //                         const test = testCategories[selectedTestCategory].tests[key];
// // //                         const value = values[key];
// // //                         const status = getValueStatus(value, test.min, test.max);
// // //
// // //                         return (
// // //                             <div key={key} className="space-y-2">
// // //                               <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
// // //                                 <span>{test.icon}</span>
// // //                                 <span>{test.name}</span>
// // //                               </label>
// // //                               <div className="relative">
// // //                                 <input
// // //                                     type="number"
// // //                                     step="0.1"
// // //                                     min="0"
// // //                                     name={key}
// // //                                     value={values[key] || ''}
// // //                                     onChange={handleChange}
// // //                                     className={`w-full p-4 pr-20 border-2 rounded-xl focus:outline-none transition-all ${
// // //                                         status
// // //                                             ? `${status.bg} ${status.color} ${status.border}`
// // //                                             : 'border-gray-200 focus:border-blue-500'
// // //                                     }`}
// // //                                     placeholder={`${test.min}-${test.max}`}
// // //                                 />
// // //                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
// // //                                   {status && <span className="text-lg">{status.icon}</span>}
// // //                                   <span className="text-sm font-medium text-gray-500">{test.unit}</span>
// // //                                 </div>
// // //                               </div>
// // //                               <div className="flex justify-between text-xs text-gray-500 px-1">
// // //                                 <span>Min: {test.min}</span>
// // //                                 <span>Max: {test.max}</span>
// // //                               </div>
// // //                             </div>
// // //                         );
// // //                       })}
// // //                     </div>
// // //
// // //                     <button
// // //                         onClick={analyze}
// // //                         disabled={loading || !hasValidValues}
// // //                         className={`mt-6 w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
// // //                             loading || !hasValidValues
// // //                                 ? 'bg-gray-300 cursor-not-allowed text-gray-500'
// // //                                 : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
// // //                         }`}
// // //                     >
// // //                       {loading ? (
// // //                           <>
// // //                             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
// // //                             Analyzing Results...
// // //                           </>
// // //                       ) : (
// // //                           <>
// // //                             <Sparkles className="w-5 h-5" />
// // //                             Analyze with AI
// // //                             <ChevronRight className="w-5 h-5" />
// // //                           </>
// // //                       )}
// // //                     </button>
// // //                   </div>
// // //               )}
// // //
// // //               {/* Results Display */}
// // //               {result && (
// // //                   <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
// // //                     <div className="flex items-center justify-between mb-6">
// // //                       <div className="flex items-center gap-3">
// // //                         <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
// // //                           <TrendingUp className="w-5 h-5" />
// // //                         </div>
// // //                         <div>
// // //                           <h2 className="text-xl font-bold text-gray-800">Clinical Interpretation</h2>
// // //                           <p className="text-sm text-gray-500">AI-powered analysis results</p>
// // //                         </div>
// // //                       </div>
// // //                       <div className="flex gap-2">
// // //                         <button
// // //                             onClick={() => navigator.clipboard.writeText(result)}
// // //                             className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
// // //                             title="Copy results"
// // //                         >
// // //                           <Download className="w-5 h-5 text-gray-600" />
// // //                         </button>
// // //                         <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
// // //                           <Share2 className="w-5 h-5 text-gray-600" />
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                     <div className="prose max-w-none">
// // //                       <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 whitespace-pre-wrap text-gray-700 leading-relaxed border border-blue-100">
// // //                         {result}
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //               )}
// // //
// // //               {/* Error Display */}
// // //               {error && (
// // //                   <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4">
// // //                     <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
// // //                     <div className="flex-1">
// // //                       <h3 className="font-semibold text-red-800 mb-1">Error</h3>
// // //                       <p className="text-red-600">{error}</p>
// // //                     </div>
// // //                     <button
// // //                         onClick={() => setError(null)}
// // //                         className="p-1 hover:bg-red-100 rounded-full transition-colors"
// // //                     >
// // //                       <X className="w-4 h-4 text-red-500" />
// // //                     </button>
// // //                   </div>
// // //               )}
// // //             </div>
// // //
// // //             {/* Right Column - Info & History */}
// // //             <div className="space-y-6">
// // //               {/* Quick Info */}
// // //               <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <Info className="w-6 h-6" />
// // //                   <h3 className="text-lg font-bold">How It Works</h3>
// // //                 </div>
// // //                 <ul className="space-y-3 text-sm text-blue-50">
// // //                   <li className="flex items-start gap-2">
// // //                     <span className="text-lg">1️⃣</span>
// // //                     <span>Select your test category from the available panels</span>
// // //                   </li>
// // //                   <li className="flex items-start gap-2">
// // //                     <span className="text-lg">2️⃣</span>
// // //                     <span>Enter your lab test values accurately</span>
// // //                   </li>
// // //                   <li className="flex items-start gap-2">
// // //                     <span className="text-lg">3️⃣</span>
// // //                     <span>Get instant AI-powered analysis and recommendations</span>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //
// // //               {/* History */}
// // //               <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
// // //                 <div className="flex items-center gap-3 mb-4">
// // //                   <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
// // //                     <Clock className="w-5 h-5" />
// // //                   </div>
// // //                   <div>
// // //                     <h3 className="text-lg font-bold text-gray-800">Test History</h3>
// // //                     <p className="text-sm text-gray-500">View past analyses</p>
// // //                   </div>
// // //                 </div>
// // //
// // //                 {history.length === 0 ? (
// // //                     <div className="text-center py-8 text-gray-500">
// // //                       <Clock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
// // //                       <p>No analysis history yet</p>
// // //                       <p className="text-sm mt-1">Your completed analyses will appear here</p>
// // //                     </div>
// // //                 ) : (
// // //                     <div className="space-y-3 max-h-80 overflow-y-auto">
// // //                       {history.map((item, index) => (
// // //                           <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
// // //                             <div className="flex justify-between items-center">
// // //                               <div>
// // //                                 <h4 className="font-semibold text-gray-800">{item.category}</h4>
// // //                                 <p className="text-xs text-gray-500">
// // //                                   {item.timestamp ? new Date(item.timestamp * 1000).toLocaleDateString() : 'Unknown date'}
// // //                                 </p>
// // //                               </div>
// // //                               <button className="text-blue-600 text-sm font-medium hover:underline">
// // //                                 View
// // //                               </button>
// // //                             </div>
// // //                           </div>
// // //                       ))}
// // //                     </div>
// // //                 )}
// // //
// // //                 <button
// // //                     className="w-full mt-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold rounded-xl transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
// // //                     disabled={true}
// // //                     title="Feature coming soon"
// // //                 >
// // //                   Load Historical Data
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //   );
// // // };
// // //
// // // export default TestAnalyzerPage;
// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Beaker,
//   Heart,
//   Activity,
//   Clock,
//   FileText,
//   TrendingUp,
//   AlertCircle,
//   CheckCircle,
//   ChevronRight,
//   Sparkles,
//   Download,
//   Share2,
//   Brain,
//   Droplets,
//   Zap,
//   Shield,
//   Info,
//   Search,
//   X,
//   FileDown,
//   Printer,
//   Copy,
//   BookOpen,
//   Calculator,
//   ChartBar,
//   Lightbulb,
//   Star,
//   Award,
//   Target,
//   Users,
//   Calendar,
//   Bell,
//   Eye,
//   Save,
//   RefreshCw,
//   TrendingDown,
//   PieChart,
//   History,
//   BarChart3,
//   HeartPulse,
//   Microscope,
//   TestTube,
//   Filter,
//   AlertTriangle,
//   ThumbsUp,
//   HelpCircle,
//   RotateCcw
// } from 'lucide-react';
//
// // Mock functions - replace with your actual imports
// const mockSupabase = {
//   auth: {
//     getUser: async () => ({
//       data: { user: { id: '123', email: 'user@example.com', name: 'John Doe' } },
//       error: null
//     })
//   },
//   from: (table) => ({
//     select: (cols) => ({
//       eq: (col, val) => ({
//         single: async () => ({
//           data: { doctor_list: [] },
//           error: null
//         })
//       })
//     }),
//     update: (data) => ({
//       eq: (col, val) => async () => ({
//         error: null
//       })
//     })
//   })
// };
//
// const mockOpenAI = async (prompt) => {
//   return {
//     analysis: `### 📊 Comprehensive Test Analysis Report
//
// **🔍 Executive Summary:**
// ✅ **Overall Health Status:** Generally Good with Minor Areas for Improvement
// 📈 **Key Findings:** Elevated RBC count requires monitoring
//
// **📋 Test Panel Results:**
// ┌─────────────────┬─────────────┬───────────────┬────────────┐
// │ Parameter       │ Your Value  │ Normal Range  │ Status     │
// ├─────────────────┼─────────────┼───────────────┼────────────┤
// │ Hemoglobin      │ 14.2 g/dL   │ 12-16 g/dL    │ ✅ Normal  │
// │ White Blood Cells│ 7.5 ×10³/μL│ 4-11 ×10³/μL  │ ✅ Normal  │
// │ Red Blood Cells │ 6.3 million/μL│ 4.7-6.1      │ ⚠️ High    │
// │ Platelet Count  │ 285 ×10³/μL │ 150-400 ×10³  │ ✅ Normal  │
// └─────────────────┴─────────────┴───────────────┴────────────┘
//
// **🎯 Key Observations:**
// 1. **Elevated RBC (6.3 million/μL)**: Slightly above normal range
// 2. **Optimal Hemoglobin**: Excellent oxygen-carrying capacity
// 3. **Healthy Immune Response**: WBC count within normal range
//
// **🏥 Potential Conditions to Consider:**
// - **Mild Polycythemia Vera** - Requires hematologist consultation
// - **Dehydration** - Ensure adequate daily water intake
// - **High Altitude Adaptation** - If living above 2,000m elevation
// - **Sleep Apnea** - Consider sleep study if symptoms present
//
// **🩺 Recommended Actions:**
// 1. **Immediate**: Increase water intake to 2-3L daily
// 2. **Short-term**: Repeat CBC in 2-4 weeks
// 3. **Consultation**: Schedule hematology appointment
// 4. **Monitoring**: Track symptoms (headaches, dizziness)
//
// **📅 Follow-up Timeline:**
// ├─ Week 1: Hydration optimization
// ├─ Week 2-4: Repeat CBC test
// ├─ Month 1-3: Specialist consultation if needed
// └─ Ongoing: Annual complete blood panel
//
// **⚠️ Red Flags Requiring Immediate Attention:**
// - Sudden severe headaches
// - Vision changes or blurriness
// - Unexplained bruising or bleeding
// - Shortness of breath at rest
//
// **💡 Lifestyle Recommendations:**
// • **Hydration**: 2-3 liters water daily
// • **Exercise**: Moderate cardio 30min/day
// • **Diet**: Iron-rich foods (spinach, legumes)
// • **Monitoring**: Regular blood pressure checks
//
// **🔬 Specialist Referrals:**
// - **Hematologist**: For comprehensive blood disorder evaluation
// - **Cardiologist**: To rule out cardiovascular causes
// - **Pulmonologist**: If high altitude exposure is a factor
// - **Nutritionist**: For dietary optimization`,
//
//     riskScore: 3.2,
//     recommendations: [
//       "Increase daily water intake to 2-3 liters",
//       "Repeat CBC test in 2-4 weeks",
//       "Consider hematology consultation",
//       "Monitor for symptoms: headaches, dizziness, fatigue"
//     ],
//     severity: "low",
//     nextSteps: [
//       { step: "Hydration", timeline: "Immediate", priority: "High" },
//       { step: "Repeat Test", timeline: "2-4 weeks", priority: "Medium" },
//       { step: "Specialist Consult", timeline: "1 month", priority: "Low" }
//     ],
//     aiConfidence: 94
//   };
// };
//
// const TestAnalyzerPage = () => {
//   const [selectedTestCategory, setSelectedTestCategory] = useState('');
//   const [values, setValues] = useState({});
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [history, setHistory] = useState([]);
//   const [activeTab, setActiveTab] = useState('input');
//   const [analysisDetails, setAnalysisDetails] = useState(null);
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [exportFormat, setExportFormat] = useState('pdf');
//   const [comparisonData, setComparisonData] = useState([]);
//   const [autoSave, setAutoSave] = useState(true);
//   const [aiConfidence, setAiConfidence] = useState(94);
//   const resultsRef = useRef(null);
//
//   // All test categories
//   const testCategories = {
//     cbc: {
//       name: 'Complete Blood Count (CBC)',
//       icon: <TestTube className="w-6 h-6" />,
//       color: 'from-red-500 to-pink-500',
//       description: 'Measures blood components including red cells, white cells, and platelets',
//       tests: {
//         hemoglobin: { name: 'Hemoglobin', min: 12, max: 16, unit: 'g/dL', icon: '🔴', importance: 'high' },
//         wbc: { name: 'White Blood Cells', min: 4, max: 11, unit: '×10³/μL', icon: '⚪', importance: 'high' },
//         rbc: { name: 'Red Blood Cells', min: 4.7, max: 6.1, unit: 'million/μL', icon: '🔴', importance: 'high' },
//         platelets: { name: 'Platelet Count', min: 150, max: 400, unit: '×10³/μL', icon: '🟡', importance: 'medium' },
//         hematocrit: { name: 'Hematocrit', min: 38, max: 50, unit: '%', icon: '📊', importance: 'medium' },
//         mcv: { name: 'MCV', min: 80, max: 100, unit: 'fL', icon: '📏', importance: 'low' },
//         mch: { name: 'MCH', min: 27, max: 33, unit: 'pg', icon: '📐', importance: 'low' },
//         mchc: { name: 'MCHC', min: 32, max: 36, unit: 'g/dL', icon: '📈', importance: 'low' },
//       },
//     },
//     metabolic: {
//       name: 'Basic Metabolic Panel',
//       icon: <Activity className="w-6 h-6" />,
//       color: 'from-green-500 to-emerald-500',
//       description: 'Assesses kidney function, electrolyte balance, and blood glucose',
//       tests: {
//         glucose: { name: 'Fasting Glucose', min: 70, max: 140, unit: 'mg/dL', icon: '🍬', importance: 'high' },
//         sodium: { name: 'Sodium', min: 135, max: 145, unit: 'mEq/L', icon: '🧂', importance: 'high' },
//         potassium: { name: 'Potassium', min: 3.5, max: 5.1, unit: 'mEq/L', icon: '🍌', importance: 'high' },
//         chloride: { name: 'Chloride', min: 96, max: 106, unit: 'mEq/L', icon: '💧', importance: 'medium' },
//         bicarbonate: { name: 'Bicarbonate', min: 22, max: 29, unit: 'mEq/L', icon: '⚗️', importance: 'medium' },
//         bun: { name: 'BUN', min: 7, max: 20, unit: 'mg/dL', icon: '🧪', importance: 'high' },
//         creatinine: { name: 'Creatinine', min: 0.6, max: 1.3, unit: 'mg/dL', icon: '💉', importance: 'high' },
//       },
//     },
//     lipid: {
//       name: 'Lipid Panel',
//       icon: <HeartPulse className="w-6 h-6" />,
//       color: 'from-purple-500 to-indigo-500',
//       description: 'Measures cholesterol and triglycerides for cardiovascular risk assessment',
//       tests: {
//         cholesterol: { name: 'Total Cholesterol', min: 150, max: 200, unit: 'mg/dL', icon: '💛', importance: 'high' },
//         hdl: { name: 'HDL Cholesterol', min: 40, max: 60, unit: 'mg/dL', icon: '💚', importance: 'high' },
//         ldl: { name: 'LDL Cholesterol', min: 0, max: 100, unit: 'mg/dL', icon: '❤️', importance: 'high' },
//         triglycerides: { name: 'Triglycerides', min: 50, max: 150, unit: 'mg/dL', icon: '🔷', importance: 'high' },
//       },
//     },
//     liver: {
//       name: 'Liver Function Tests',
//       icon: <Microscope className="w-6 h-6" />,
//       color: 'from-amber-500 to-orange-500',
//       description: 'Evaluates liver health and detects liver damage or disease',
//       tests: {
//         alt: { name: 'ALT', min: 7, max: 56, unit: 'U/L', icon: '🟠', importance: 'high' },
//         ast: { name: 'AST', min: 10, max: 40, unit: 'U/L', icon: '🟡', importance: 'high' },
//         alp: { name: 'ALP', min: 44, max: 147, unit: 'U/L', icon: '🟢', importance: 'medium' },
//         bilirubin: { name: 'Total Bilirubin', min: 0.1, max: 1.2, unit: 'mg/dL', icon: '🟤', importance: 'medium' },
//         albumin: { name: 'Albumin', min: 3.5, max: 5.0, unit: 'g/dL', icon: '⚪', importance: 'medium' },
//         total_protein: { name: 'Total Protein', min: 6.0, max: 8.3, unit: 'g/dL', icon: '🔵', importance: 'low' },
//       },
//     },
//     thyroid: {
//       name: 'Thyroid Function Panel',
//       icon: <Zap className="w-6 h-6" />,
//       color: 'from-blue-500 to-cyan-500',
//       description: 'Assesses thyroid gland function and hormone levels',
//       tests: {
//         tsh: { name: 'TSH', min: 0.5, max: 5.0, unit: 'mIU/L', icon: '⚡', importance: 'high' },
//         t3: { name: 'T3', min: 80, max: 200, unit: 'ng/dL', icon: '🔋', importance: 'high' },
//         t4: { name: 'T4', min: 4.5, max: 12.5, unit: 'μg/dL', icon: '🔌', importance: 'high' },
//       },
//     },
//   };
//
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const { data, error } = await mockSupabase.auth.getUser();
//         if (error) {
//           console.error('Auth error:', error);
//           return;
//         }
//         if (data?.user) {
//           setUser(data.user);
//         }
//       } catch (err) {
//         console.error('Auth check failed:', err);
//       }
//     };
//     checkAuth();
//   }, []);
//
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const numValue = value === '' ? '' : parseFloat(value);
//
//     // Validate if it's a positive number
//     if (value !== '' && (isNaN(numValue) || numValue < 0)) {
//       return;
//     }
//
//     setValues(prev => ({
//       ...prev,
//       [name]: numValue
//     }));
//   };
//
//   const analyze = async () => {
//     // Reset states
//     setError(null);
//     setResult(null);
//     setAnalysisDetails(null);
//
//     // Validation
//     if (!selectedTestCategory) {
//       setError('Please select a test category');
//       return;
//     }
//
//     const filledValues = Object.keys(values).filter(k => values[k] !== '');
//     if (filledValues.length === 0) {
//       setError('Please enter at least one test value');
//       return;
//     }
//
//     setLoading(true);
//     setActiveTab('results');
//
//     try {
//       // Format test results
//       const selectedTests = testCategories[selectedTestCategory].tests;
//       const formattedResults = Object.keys(values)
//           .filter(key => values[key] !== '')
//           .map(key => `${selectedTests[key].name}: ${values[key]} ${selectedTests[key].unit}`)
//           .join('\n');
//
//       // Get AI response
//       const aiResponse = await mockOpenAI(formattedResults);
//       setResult(aiResponse.analysis);
//       setAnalysisDetails(aiResponse);
//
//       // Scroll to results
//       if (resultsRef.current) {
//         resultsRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//
//       // Extract doctor specialties and save
//       if (user) {
//         const doctorNames = [];
//         const matches = aiResponse.analysis.match(/-\s*\*\*([A-Za-z\s]+?ist)\*\*/g);
//         if (matches) {
//           matches.forEach(match => {
//             const name = match.replace(/[-*]/g, '').trim();
//             if (name) doctorNames.push(name);
//           });
//         }
//
//         try {
//           const { data } = await mockSupabase.from('patients').select('doctor_list').eq('user_id', user.id).single();
//           const currentDoctors = data?.doctor_list || [];
//           const uniqueDoctors = [...new Set([...currentDoctors, ...doctorNames])];
//
//           await mockSupabase.from('patients').update({ doctor_list: uniqueDoctors }).eq('user_id', user.id);
//         } catch (dbError) {
//           console.error('Database update error:', dbError);
//         }
//       }
//
//       // Add to history
//       const newHistoryItem = {
//         id: Date.now(),
//         category: testCategories[selectedTestCategory].name,
//         timestamp: Date.now(),
//         values: { ...values },
//         result: aiResponse.analysis.substring(0, 100) + '...'
//       };
//       setHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]); // Keep last 10 items
//
//     } catch (err) {
//       console.error('Analysis error:', err);
//       setError('Failed to analyze results. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   const getValueStatus = (value, min, max) => {
//     if (value === '' || value === null || value === undefined) return null;
//     const numValue = parseFloat(value);
//     if (isNaN(numValue)) return null;
//
//     const percentFromMin = ((numValue - min) / (max - min)) * 100;
//
//     if (numValue < min * 0.7) return {
//       status: 'critical-low',
//       color: 'text-red-600',
//       bg: 'bg-red-50',
//       border: 'border-red-200',
//       icon: '🔻',
//       severity: 'critical'
//     };
//     if (numValue < min) return {
//       status: 'low',
//       color: 'text-orange-500',
//       bg: 'bg-orange-50',
//       border: 'border-orange-200',
//       icon: '📉',
//       severity: 'warning'
//     };
//     if (numValue > max * 1.3) return {
//       status: 'critical-high',
//       color: 'text-red-600',
//       bg: 'bg-red-50',
//       border: 'border-red-200',
//       icon: '🔺',
//       severity: 'critical'
//     };
//     if (numValue > max) return {
//       status: 'high',
//       color: 'text-yellow-500',
//       bg: 'bg-yellow-50',
//       border: 'border-yellow-200',
//       icon: '📈',
//       severity: 'warning'
//     };
//     if (percentFromMin > 80 && percentFromMin < 90) return {
//       status: 'optimal-high',
//       color: 'text-green-500',
//       bg: 'bg-green-50',
//       border: 'border-green-200',
//       icon: '🎯',
//       severity: 'optimal'
//     };
//     if (percentFromMin > 10 && percentFromMin < 20) return {
//       status: 'optimal-low',
//       color: 'text-green-500',
//       bg: 'bg-green-50',
//       border: 'border-green-200',
//       icon: '🎯',
//       severity: 'optimal'
//     };
//     return {
//       status: 'normal',
//       color: 'text-green-500',
//       bg: 'bg-green-50',
//       border: 'border-green-200',
//       icon: '✅',
//       severity: 'normal'
//     };
//   };
//
//   const clearAll = () => {
//     setSelectedTestCategory('');
//     setValues({});
//     setResult(null);
//     setAnalysisDetails(null);
//     setError(null);
//     setSearchTerm('');
//     setActiveTab('input');
//   };
//
//   const copyResults = () => {
//     if (result) {
//       navigator.clipboard.writeText(result);
//     }
//   };
//
//   const exportResults = () => {
//     alert(`Exporting results as ${exportFormat.toUpperCase()}`);
//   };
//
//   const fillSampleData = () => {
//     if (!selectedTestCategory) {
//       setError('Please select a test category first');
//       return;
//     }
//
//     const sampleValues = {};
//     const tests = testCategories[selectedTestCategory].tests;
//
//     Object.keys(tests).forEach(key => {
//       const test = tests[key];
//       // Generate random value within normal range with slight variations
//       const min = test.min;
//       const max = test.max;
//       const randomValue = (Math.random() * (max - min) + min).toFixed(1);
//       sampleValues[key] = parseFloat(randomValue);
//     });
//
//     setValues(sampleValues);
//   };
//
//   const filteredCategories = Object.keys(testCategories).filter(key =>
//       testCategories[key].name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//
//   const hasValidValues = Object.keys(values).some(k => values[k] !== '');
//
//   const filledValuesCount = Object.keys(values).filter(k => values[k] !== '').length;
//   const totalTestsCount = selectedTestCategory ? Object.keys(testCategories[selectedTestCategory].tests).length : 0;
//
//   return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
//           {/* Hero Header */}
//           <div className="mb-8">
//             <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-6 lg:p-8">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//
//               <div className="relative z-10">
//                 <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
//                       <Beaker className="w-10 h-10 text-white" />
//                     </div>
//                     <div>
//                       <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
//                         Advanced Lab Analyzer Pro
//                       </h1>
//                       <div className="flex flex-wrap items-center gap-3">
//                         <div className="flex items-center gap-2">
//                           <Brain className="w-4 h-4 text-yellow-300" />
//                           <span className="text-sm text-blue-100">AI-Powered Analysis</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Shield className="w-4 h-4 text-green-300" />
//                           <span className="text-sm text-blue-100">HIPAA Compliant</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Sparkles className="w-4 h-4 text-pink-300" />
//                           <span className="text-sm text-blue-100">Real-time Insights</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//
//                   {user && (
//                       <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
//                         <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
//                           {user.name?.[0] || 'U'}
//                         </div>
//                         <div className="text-white">
//                           <div className="font-medium">{user.name || 'User'}</div>
//                           <div className="text-xs text-blue-100">Patient ID: {user.id?.slice(-6)}</div>
//                         </div>
//                       </div>
//                   )}
//                 </div>
//
//                 <div className="flex flex-wrap items-center gap-3">
//                 <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
//                   <Clock className="w-3 h-3 inline mr-1" />
//                   Last updated: Today
//                 </span>
//                   <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
//                   <Star className="w-3 h-3 inline mr-1" />
//                   4.9/5 Accuracy Rating
//                 </span>
//                   <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
//                   <Users className="w-3 h-3 inline mr-1" />
//                   10K+ Analyses Completed
//                 </span>
//                 </div>
//               </div>
//             </div>
//
//             {/* Quick Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
//               {[
//                 { label: 'Test Panels', value: Object.keys(testCategories).length, icon: <FileText className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', trend: '+2' },
//                 { label: 'Parameters', value: '50+', icon: <Calculator className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', trend: 'New' },
//                 { label: 'AI Confidence', value: `${aiConfidence}%`, icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500', trend: '↑ 2%' },
//                 { label: 'Response Time', value: '< 2s', icon: <Zap className="w-5 h-5" />, color: 'from-orange-500 to-red-500', trend: 'Fast' },
//               ].map((stat, index) => (
//                   <div key={index} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
//                         {stat.icon}
//                       </div>
//                       <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
//                     {stat.trend}
//                   </span>
//                     </div>
//                     <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
//                     <div className="text-sm text-gray-500">{stat.label}</div>
//                   </div>
//               ))}
//             </div>
//           </div>
//
//           <div className="grid lg:grid-cols-3 gap-6">
//             {/* Left Column - Test Selection & Input */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Navigation Tabs */}
//               <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
//                 <div className="flex space-x-1">
//                   {[
//                     { id: 'input', label: 'Test Input', icon: <FileText className="w-4 h-4" /> },
//                     { id: 'results', label: 'Results', icon: <TrendingUp className="w-4 h-4" />, disabled: !result },
//                     { id: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
//                     { id: 'compare', label: 'Compare', icon: <ChartBar className="w-4 h-4" />, disabled: true },
//                   ].map(tab => (
//                       <button
//                           key={tab.id}
//                           onClick={() => setActiveTab(tab.id)}
//                           disabled={tab.disabled}
//                           className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
//                               activeTab === tab.id
//                                   ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
//                                   : 'text-gray-600 hover:bg-gray-50'
//                           } ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//                       >
//                         {tab.icon}
//                         {tab.label}
//                       </button>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Test Category Selection - Only show in input tab */}
//               {activeTab === 'input' && (
//                   <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
//                         <BookOpen className="w-5 h-5" />
//                       </div>
//                       <div className="flex-1">
//                         <h2 className="text-xl font-bold text-gray-800">Select Test Panel</h2>
//                         <p className="text-sm text-gray-500">Choose from our comprehensive diagnostic panels</p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <button
//                             onClick={() => setShowAdvanced(!showAdvanced)}
//                             className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
//                         >
//                           {showAdvanced ? 'Simple View' : 'Advanced View'}
//                         </button>
//                       </div>
//                     </div>
//
//                     {/* Search Bar */}
//                     <div className="relative mb-4">
//                       <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                       <input
//                           type="text"
//                           placeholder="Search test panels (e.g., CBC, Lipid, Thyroid)..."
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
//                       />
//                       {searchTerm && (
//                           <button
//                               onClick={() => setSearchTerm('')}
//                               className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
//                           >
//                             <X className="w-4 h-4 text-gray-400" />
//                           </button>
//                       )}
//                     </div>
//
//                     {/* Test Categories Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
//                       {filteredCategories.length === 0 ? (
//                           <div className="col-span-2 text-center py-8">
//                             <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                             <p className="text-gray-500">No test panels found matching "{searchTerm}"</p>
//                           </div>
//                       ) : (
//                           filteredCategories.map((key) => {
//                             const category = testCategories[key];
//                             return (
//                                 <button
//                                     key={key}
//                                     onClick={() => {
//                                       setSelectedTestCategory(key);
//                                       setValues({});
//                                       setResult(null);
//                                       setError(null);
//                                     }}
//                                     className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
//                                         selectedTestCategory === key
//                                             ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-xl scale-105`
//                                             : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
//                                     }`}
//                                 >
//                                   <div className="flex items-start gap-3">
//                                     <div className={`p-2 rounded-lg ${
//                                         selectedTestCategory === key ? 'bg-white/20' : 'bg-gray-100'
//                                     }`}>
//                                       {category.icon}
//                                     </div>
//                                     <div className="flex-1">
//                                       <h3 className={`font-bold text-lg mb-1 ${
//                                           selectedTestCategory === key ? 'text-white' : 'text-gray-800'
//                                       }`}>
//                                         {category.name}
//                                       </h3>
//                                       <p className={`text-sm mb-2 ${
//                                           selectedTestCategory === key ? 'text-white/90' : 'text-gray-500'
//                                       }`}>
//                                         {category.description}
//                                       </p>
//                                       <div className="flex items-center gap-3">
//                                 <span className={`text-xs px-2 py-1 rounded-full ${
//                                     selectedTestCategory === key
//                                         ? 'bg-white/30 text-white'
//                                         : 'bg-gray-100 text-gray-600'
//                                 }`}>
//                                   {Object.keys(category.tests).length} parameters
//                                 </span>
//                                         <span className={`text-xs ${
//                                             selectedTestCategory === key ? 'text-white/80' : 'text-gray-500'
//                                         }`}>
//                                   Time: 5-10 min
//                                 </span>
//                                       </div>
//                                     </div>
//                                   </div>
//                                   {selectedTestCategory === key && (
//                                       <div className="absolute top-3 right-3">
//                                         <CheckCircle className="w-5 h-5 text-white" />
//                                       </div>
//                                   )}
//                                 </button>
//                             );
//                           })
//                       )}
//                     </div>
//                   </div>
//               )}
//
//               {/* Input Form - Only show when test selected and in input tab */}
//               {selectedTestCategory && activeTab === 'input' && (
//                   <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                     <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
//                       <div className="flex items-center gap-3">
//                         <div className={`p-2 bg-gradient-to-br ${testCategories[selectedTestCategory].color} rounded-xl text-white`}>
//                           {testCategories[selectedTestCategory].icon}
//                         </div>
//                         <div>
//                           <h2 className="text-xl font-bold text-gray-800">
//                             {testCategories[selectedTestCategory].name}
//                           </h2>
//                           <div className="flex items-center gap-3">
//                         <span className="text-sm text-gray-500">
//                           {filledValuesCount}/{totalTestsCount} values entered
//                         </span>
//                             {filledValuesCount > 0 && (
//                                 <span className="text-sm font-medium text-green-600">
//                             Ready to analyze
//                           </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//
//                       <div className="flex flex-wrap gap-2">
//                         <button
//                             onClick={fillSampleData}
//                             className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
//                         >
//                           <RotateCcw className="w-4 h-4" />
//                           Fill Sample
//                         </button>
//                         <button
//                             onClick={clearAll}
//                             className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
//                         >
//                           <X className="w-4 h-4" />
//                           Clear All
//                         </button>
//                       </div>
//                     </div>
//
//                     {/* Progress Bar */}
//                     {filledValuesCount > 0 && (
//                         <div className="mb-6">
//                           <div className="flex justify-between text-sm text-gray-600 mb-2">
//                             <span>Completion: {Math.round((filledValuesCount / totalTestsCount) * 100)}%</span>
//                             <span>{filledValuesCount} of {totalTestsCount} values</span>
//                           </div>
//                           <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                             <div
//                                 className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
//                                 style={{ width: `${(filledValuesCount / totalTestsCount) * 100}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                     )}
//
//                     <div className="grid gap-4 md:grid-cols-2">
//                       {Object.keys(testCategories[selectedTestCategory].tests).map((key) => {
//                         const test = testCategories[selectedTestCategory].tests[key];
//                         const value = values[key];
//                         const status = getValueStatus(value, test.min, test.max);
//
//                         return (
//                             <div key={key} className={`p-4 rounded-xl border transition-all duration-300 ${
//                                 status ? status.border : 'border-gray-200'
//                             } ${status ? status.bg : 'bg-white'} hover:shadow-md`}>
//                               <div className="flex items-center justify-between mb-3">
//                                 <label className="flex items-center gap-2 font-semibold text-gray-800">
//                                   <span className="text-lg">{test.icon}</span>
//                                   <span>{test.name}</span>
//                                   {test.importance === 'high' && (
//                                       <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
//                                 Critical
//                               </span>
//                                   )}
//                                 </label>
//                                 {status && (
//                                     <span className={`text-sm font-medium ${status.color}`}>
//                               {status.icon} {status.status.replace('-', ' ')}
//                             </span>
//                                 )}
//                               </div>
//
//                               <div className="relative mb-2">
//                                 <input
//                                     type="number"
//                                     step="0.1"
//                                     min="0"
//                                     name={key}
//                                     value={values[key] || ''}
//                                     onChange={handleChange}
//                                     className={`w-full p-3 pr-16 border-2 rounded-lg focus:outline-none transition-all text-lg ${
//                                         status ? `${status.border}` : 'border-gray-300 focus:border-blue-500'
//                                     }`}
//                                     placeholder={`Enter value...`}
//                                 />
//                                 <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                                   <span className="text-sm font-medium text-gray-600">{test.unit}</span>
//                                 </div>
//                               </div>
//
//                               <div className="flex items-center justify-between text-sm">
//                                 <div className="text-gray-600">
//                                   Normal: {test.min} - {test.max} {test.unit}
//                                 </div>
//                                 {value !== '' && value !== undefined && (
//                                     <div className={`px-2 py-1 rounded ${
//                                         status?.severity === 'critical' ? 'bg-red-100 text-red-800' :
//                                             status?.severity === 'warning' ? 'bg-yellow-100 text-yellow-800' :
//                                                 'bg-green-100 text-green-800'
//                                     }`}>
//                                       {status?.severity || 'Enter value'}
//                                     </div>
//                                 )}
//                               </div>
//                             </div>
//                         );
//                       })}
//                     </div>
//
//                     {/* Action Buttons */}
//                     <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                       <button
//                           onClick={analyze}
//                           disabled={loading || !hasValidValues}
//                           className={`flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
//                               loading || !hasValidValues
//                                   ? 'bg-gray-300 cursor-not-allowed text-gray-500'
//                                   : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
//                           }`}
//                       >
//                         {loading ? (
//                             <>
//                               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                               Analyzing with AI...
//                             </>
//                         ) : (
//                             <>
//                               <Sparkles className="w-5 h-5" />
//                               Analyze Test Results
//                               <ChevronRight className="w-5 h-5" />
//                             </>
//                         )}
//                       </button>
//
//                       <button
//                           onClick={() => setActiveTab('results')}
//                           disabled={!result}
//                           className={`px-6 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
//                               result
//                                   ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
//                                   : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                           }`}
//                       >
//                         <Eye className="w-5 h-5" />
//                         View Results
//                       </button>
//                     </div>
//                   </div>
//               )}
//
//               {/* Results Display - Only show in results tab */}
//               {activeTab === 'results' && result && (
//                   <div ref={resultsRef} className="space-y-6">
//                     {/* Results Header */}
//                     <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                       <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
//                         <div className="flex items-center gap-3">
//                           <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
//                             <TrendingUp className="w-5 h-5" />
//                           </div>
//                           <div>
//                             <h2 className="text-xl font-bold text-gray-800">Clinical Analysis Report</h2>
//                             <p className="text-sm text-gray-500">Generated {new Date().toLocaleDateString()} • AI Confidence: {aiConfidence}%</p>
//                           </div>
//                         </div>
//
//                         <div className="flex flex-wrap gap-2">
//                           <div className="flex items-center gap-2">
//                             <div className="flex items-center gap-1">
//                               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">Normal</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">Warning</span>
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                               <span className="text-xs text-gray-600">Critical</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//
//                       {/* Export Options */}
//                       <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl mb-6">
//                         <div className="flex items-center gap-3">
//                           <span className="text-sm font-medium text-gray-700">Export as:</span>
//                           <div className="flex gap-2">
//                             {['pdf', 'doc', 'txt'].map(format => (
//                                 <button
//                                     key={format}
//                                     onClick={() => setExportFormat(format)}
//                                     className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
//                                         exportFormat === format
//                                             ? 'bg-blue-600 text-white'
//                                             : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
//                                     }`}
//                                 >
//                                   {format.toUpperCase()}
//                                 </button>
//                             ))}
//                           </div>
//                         </div>
//
//                         <div className="flex gap-2">
//                           <button
//                               onClick={copyResults}
//                               className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
//                           >
//                             <Copy className="w-4 h-4" />
//                             Copy
//                           </button>
//                           <button
//                               onClick={exportResults}
//                               className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
//                           >
//                             <FileDown className="w-4 h-4" />
//                             Export {exportFormat.toUpperCase()}
//                           </button>
//                           <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm">
//                             <Printer className="w-4 h-4" />
//                             Print
//                           </button>
//                         </div>
//                       </div>
//
//                       {/* AI Confidence Meter */}
//                       <div className="mb-6">
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-sm font-medium text-gray-700">AI Confidence Level</span>
//                           <span className="text-sm font-bold text-blue-600">{aiConfidence}%</span>
//                         </div>
//                         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                           <div
//                               className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-1000"
//                               style={{ width: `${aiConfidence}%` }}
//                           ></div>
//                         </div>
//                       </div>
//
//                       {/* Analysis Results */}
//                       <div className="prose max-w-none">
//                         <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 whitespace-pre-wrap text-gray-700 leading-relaxed border border-blue-100 shadow-inner">
//                           {result}
//                         </div>
//                       </div>
//
//                       {/* Action Cards */}
//                       {analysisDetails && (
//                           <div className="grid md:grid-cols-3 gap-4 mt-6">
//                             <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <AlertTriangle className="w-5 h-5 text-red-600" />
//                                 <h4 className="font-semibold text-red-800">Risk Level</h4>
//                               </div>
//                               <div className="text-2xl font-bold text-red-600 mb-1">{analysisDetails.riskScore}/10</div>
//                               <p className="text-sm text-red-700">Low Risk - Routine monitoring recommended</p>
//                             </div>
//
//                             <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <ThumbsUp className="w-5 h-5 text-green-600" />
//                                 <h4 className="font-semibold text-green-800">Next Steps</h4>
//                               </div>
//                               <div className="space-y-1">
//                                 {analysisDetails.nextSteps?.map((step, idx) => (
//                                     <div key={idx} className="text-sm text-green-700">
//                                       {step.step} - <span className="font-medium">{step.timeline}</span>
//                                     </div>
//                                 ))}
//                               </div>
//                             </div>
//
//                             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <Calendar className="w-5 h-5 text-blue-600" />
//                                 <h4 className="font-semibold text-blue-800">Follow-up Timeline</h4>
//                               </div>
//                               <div className="text-lg font-bold text-blue-600 mb-1">2-4 Weeks</div>
//                               <p className="text-sm text-blue-700">Recommended retest period</p>
//                             </div>
//                           </div>
//                       )}
//                     </div>
//
//                     {/* Error Display */}
//                     {error && (
//                         <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4 animate-fade-in">
//                           <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
//                           <div className="flex-1">
//                             <h3 className="font-semibold text-red-800 mb-1">Analysis Error</h3>
//                             <p className="text-red-600">{error}</p>
//                           </div>
//                           <button
//                               onClick={() => setError(null)}
//                               className="p-1 hover:bg-red-100 rounded-full transition-colors"
//                           >
//                             <X className="w-4 h-4 text-red-500" />
//                           </button>
//                         </div>
//                     )}
//                   </div>
//               )}
//
//               {/* History Tab */}
//               {activeTab === 'history' && (
//                   <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                     <div className="flex items-center gap-3 mb-6">
//                       <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
//                         <History className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h2 className="text-xl font-bold text-gray-800">Analysis History</h2>
//                         <p className="text-sm text-gray-500">Track your past test analyses and results</p>
//                       </div>
//                     </div>
//
//                     {history.length === 0 ? (
//                         <div className="text-center py-12">
//                           <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                           <h3 className="text-lg font-semibold text-gray-600 mb-2">No Analysis History</h3>
//                           <p className="text-gray-500 mb-6">Your completed analyses will appear here</p>
//                           <button
//                               onClick={() => setActiveTab('input')}
//                               className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
//                           >
//                             Start New Analysis
//                           </button>
//                         </div>
//                     ) : (
//                         <div className="space-y-4">
//                           {history.map((item, index) => (
//                               <div key={item.id} className="group p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-md">
//                                 <div className="flex items-center justify-between mb-3">
//                                   <div className="flex items-center gap-3">
//                                     <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
//                                       <Beaker className="w-4 h-4" />
//                                     </div>
//                                     <div>
//                                       <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{item.category}</h4>
//                                       <p className="text-xs text-gray-500">
//                                         {new Date(item.timestamp).toLocaleDateString()} • {new Date(item.timestamp).toLocaleTimeString()}
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div className="flex items-center gap-2">
//                             <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
//                               Completed
//                             </span>
//                                     <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
//                                   </div>
//                                 </div>
//                                 <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.result}</p>
//                                 <div className="flex items-center gap-4 text-xs text-gray-500">
//                           <span className="flex items-center gap-1">
//                             <Calculator className="w-3 h-3" />
//                             {Object.keys(item.values).filter(k => item.values[k] !== '').length} parameters
//                           </span>
//                                   <button className="text-blue-600 hover:text-blue-800 font-medium">
//                                     View Full Report
//                                   </button>
//                                 </div>
//                               </div>
//                           ))}
//                         </div>
//                     )}
//
//                     {history.length > 0 && (
//                         <div className="mt-6 pt-6 border-t border-gray-100">
//                           <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
//                             Load More History
//                           </button>
//                         </div>
//                     )}
//                   </div>
//               )}
//             </div>
//
//             {/* Right Column - Info & Features */}
//             <div className="space-y-6">
//               {/* Quick Info */}
//               <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
//                 <div className="flex items-center gap-3 mb-4">
//                   <Info className="w-6 h-6" />
//                   <h3 className="text-lg font-bold">How It Works</h3>
//                 </div>
//                 <div className="space-y-4">
//                   {[
//                     { step: '1️⃣ Select Panel', desc: 'Choose from comprehensive test categories' },
//                     { step: '2️⃣ Enter Values', desc: 'Input your lab test results accurately' },
//                     { step: '3️⃣ AI Analysis', desc: 'Get instant AI-powered interpretation' },
//                     { step: '4️⃣ Get Insights', desc: 'Receive detailed recommendations and next steps' },
//                   ].map((item, idx) => (
//                       <div key={idx} className="flex items-start gap-3">
//                         <span className="text-lg flex-shrink-0">{item.step}</span>
//                         <p className="text-sm text-blue-100">{item.desc}</p>
//                       </div>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Features */}
//               <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
//                 <div className="flex items-center gap-3 mb-4">
//                   <Award className="w-6 h-6 text-blue-600" />
//                   <h3 className="text-lg font-bold text-gray-800">Premium Features</h3>
//                 </div>
//                 <div className="space-y-3">
//                   {[
//                     { icon: '🤖', feature: 'AI-Powered Analysis', desc: 'GPT-4 medical interpretation' },
//                     { icon: '📊', feature: 'Trend Analysis', desc: 'Track changes over time' },
//                     { icon: '🛡️', feature: 'Data Security', desc: 'HIPAA compliant encryption' },
//                     { icon: '⏱️', feature: 'Fast Results', desc: 'Under 2 second response time' },
//                     { icon: '📱', feature: 'Mobile Friendly', desc: 'Access anywhere, anytime' },
//                   ].map((item, idx) => (
//                       <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
//                         <span className="text-xl">{item.icon}</span>
//                         <div>
//                           <div className="font-medium text-gray-800">{item.feature}</div>
//                           <div className="text-xs text-gray-500">{item.desc}</div>
//                         </div>
//                       </div>
//                   ))}
//                 </div>
//               </div>
//
//               {/* Quick Actions */}
//               <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
//                 <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
//                 <div className="space-y-3">
//                   <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
//                     <span>Schedule Appointment</span>
//                     <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                   <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
//                     <span>Download Health Report</span>
//                     <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
//                   </button>
//                   <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
//                     <span>Emergency Contact</span>
//                     <AlertCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
//                   </button>
//                 </div>
//               </div>
//
//               {/* Auto-save Toggle */}
//               <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-3">
//                     <Save className="w-5 h-5 text-blue-600" />
//                     <div>
//                       <h4 className="font-medium text-gray-800">Auto-save Progress</h4>
//                       <p className="text-xs text-gray-500">Automatically save your work</p>
//                     </div>
//                   </div>
//                   <button
//                       onClick={() => setAutoSave(!autoSave)}
//                       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
//                           autoSave ? 'bg-green-500' : 'bg-gray-300'
//                       }`}
//                   >
//                   <span
//                       className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                           autoSave ? 'translate-x-6' : 'translate-x-1'
//                       }`}
//                   />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         {/* Floating Help Button */}
//         <button className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110">
//           <HelpCircle className="w-6 h-6" />
//         </button>
//       </div>
//   );
// };
//
// export default TestAnalyzerPage;
'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  Beaker,
  Heart,
  Activity,
  Clock,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Download,
  Share2,
  Brain,
  Droplets,
  Zap,
  Shield,
  Info,
  Search,
  X,
  FileDown,
  Printer,
  Copy,
  BookOpen,
  Calculator,
  ChartBar,
  Lightbulb,
  Star,
  Award,
  Target,
  Users,
  Calendar,
  Bell,
  Eye,
  Save,
  RefreshCw,
  TrendingDown,
  PieChart,
  History,
  BarChart3,
  HeartPulse,
  Microscope,
  TestTube,
  Filter,
  AlertTriangle,
  ThumbsUp,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import OpenAI from 'openai';
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseclient';

const endpoint = process.env.NEXT_PUBLIC_AZURE_ENDPOINT || "https://models.inference.ai.azure.com";
const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY_5;

const TestAnalyzerPage = () => {
  const [selectedTestCategory, setSelectedTestCategory] = useState('');
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('input');
  const [analysisDetails, setAnalysisDetails] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');
  const [comparisonData, setComparisonData] = useState([]);
  const [autoSave, setAutoSave] = useState(true);
  const [aiConfidence, setAiConfidence] = useState(94);
  const [doctors, setDoctors] = useState([]);
  const resultsRef = useRef(null);
  const router = useRouter();

  // All test categories
  const testCategories = {
    "cbc": {
      name: "Complete Blood Count (CBC)",
      icon: <TestTube className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500',
      description: 'Measures blood components including red cells, white cells, and platelets',
      tests: {
        hemoglobin: { name: "Hemoglobin", min: 12, max: 16, unit: "g/dL", icon: '🔴', importance: 'high' },
        wbc: { name: "White Blood Cells (WBC)", min: 4, max: 11, unit: "×10³/μL", icon: '⚪', importance: 'high' },
        rbc: { name: "Red Blood Cells (RBC)", min: 4.7, max: 6.1, unit: "million/μL", icon: '🔴', importance: 'high' },
        platelets: { name: "Platelet Count", min: 150, max: 400, unit: "×10³/μL", icon: '🟡', importance: 'medium' },
        hematocrit: { name: "Hematocrit", min: 38, max: 50, unit: "%", icon: '📊', importance: 'medium' },
        mcv: { name: "Mean Corpuscular Volume (MCV)", min: 80, max: 100, unit: "fL", icon: '📏', importance: 'low' },
        mch: { name: "Mean Corpuscular Hemoglobin (MCH)", min: 27, max: 33, unit: "pg", icon: '📐', importance: 'low' },
        mchc: { name: "Mean Corpuscular Hemoglobin Concentration (MCHC)", min: 32, max: 36, unit: "g/dL", icon: '📈', importance: 'low' },
      },
    },
    "metabolic": {
      name: "Basic Metabolic Panel (BMP)",
      icon: <Activity className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Assesses kidney function, electrolyte balance, and blood glucose',
      tests: {
        glucose: { name: "Fasting Glucose", min: 70, max: 140, unit: "mg/dL", icon: '🍬', importance: 'high' },
        sodium: { name: "Sodium", min: 135, max: 145, unit: "mEq/L", icon: '🧂', importance: 'high' },
        potassium: { name: "Potassium", min: 3.5, max: 5.1, unit: "mEq/L", icon: '🍌', importance: 'high' },
        chloride: { name: "Chloride", min: 96, max: 106, unit: "mEq/L", icon: '💧', importance: 'medium' },
        bicarbonate: { name: "Bicarbonate", min: 22, max: 29, unit: "mEq/L", icon: '⚗️', importance: 'medium' },
        bun: { name: "Blood Urea Nitrogen (BUN)", min: 7, max: 20, unit: "mg/dL", icon: '🧪', importance: 'high' },
        creatinine: { name: "Creatinine", min: 0.6, max: 1.3, unit: "mg/dL", icon: '💉', importance: 'high' },
      },
    },
    "lipid": {
      name: "Lipid Panel",
      icon: <HeartPulse className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-500',
      description: 'Measures cholesterol and triglycerides for cardiovascular risk assessment',
      tests: {
        cholesterol: { name: "Total Cholesterol", min: 150, max: 200, unit: "mg/dL", icon: '💛', importance: 'high' },
        hdl: { name: "High-Density Lipoprotein (HDL)", min: 40, max: 60, unit: "mg/dL", icon: '💚', importance: 'high' },
        ldl: { name: "Low-Density Lipoprotein (LDL)", min: 0, max: 100, unit: "mg/dL", icon: '❤️', importance: 'high' },
        triglycerides: { name: "Triglycerides", min: 50, max: 150, unit: "mg/dL", icon: '🔷', importance: 'high' },
      },
    },
    "liver": {
      name: "Liver Function Tests (LFT)",
      icon: <Microscope className="w-6 h-6" />,
      color: 'from-amber-500 to-orange-500',
      description: 'Evaluates liver health and detects liver damage or disease',
      tests: {
        alt: { name: "Alanine Aminotransferase (ALT)", min: 7, max: 56, unit: "U/L", icon: '🟠', importance: 'high' },
        ast: { name: "Aspartate Aminotransferase (AST)", min: 10, max: 40, unit: "U/L", icon: '🟡', importance: 'high' },
        alp: { name: "Alkaline Phosphatase (ALP)", min: 44, max: 147, unit: "U/L", icon: '🟢', importance: 'medium' },
        bilirubin: { name: "Total Bilirubin", min: 0.1, max: 1.2, unit: "mg/dL", icon: '🟤', importance: 'medium' },
        albumin: { name: "Albumin", min: 3.5, max: 5.0, unit: "g/dL", icon: '⚪', importance: 'medium' },
        total_protein: { name: "Total Protein", min: 6.0, max: 8.3, unit: "g/dL", icon: '🔵', importance: 'low' },
      },
    },
    "thyroid": {
      name: "Thyroid Function Panel",
      icon: <Zap className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Assesses thyroid gland function and hormone levels',
      tests: {
        tsh: { name: "Thyroid-Stimulating Hormone (TSH)", min: 0.5, max: 5.0, unit: "mIU/L", icon: '⚡', importance: 'high' },
        t3: { name: "Triiodothyronine (T3)", min: 80, max: 200, unit: "ng/dL", icon: '🔋', importance: 'high' },
        t4: { name: "Thyroxine (T4)", min: 4.5, max: 12.5, unit: "μg/dL", icon: '🔌', importance: 'high' },
      },
    },
    "renal": {
      name: "Renal Function Panel",
      icon: <Droplets className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500',
      description: 'Evaluates kidney function and filtration rate',
      tests: {
        bun: { name: "Blood Urea Nitrogen (BUN)", min: 7, max: 20, unit: "mg/dL", icon: '🧪', importance: 'high' },
        creatinine: { name: "Creatinine", min: 0.6, max: 1.3, unit: "mg/dL", icon: '💉', importance: 'high' },
        gfr: { name: "Glomerular Filtration Rate (GFR)", min: 90, max: 120, unit: "mL/min", icon: '💧', importance: 'high' },
      },
    },
    "coagulation": {
      name: "Coagulation Panel",
      icon: <Activity className="w-6 h-6" />,
      color: 'from-rose-500 to-red-500',
      description: 'Measures blood clotting ability and coagulation factors',
      tests: {
        pt: { name: "Prothrombin Time (PT)", min: 10, max: 13, unit: "seconds", icon: '⏱️', importance: 'high' },
        inr: { name: "International Normalized Ratio (INR)", min: 0.8, max: 1.2, unit: "ratio", icon: '📊', importance: 'high' },
        aptt: { name: "Activated Partial Thromboplastin Time (aPTT)", min: 25, max: 35, unit: "seconds", icon: '⏰', importance: 'high' },
      },
    },
    "cardiac": {
      name: "Cardiac Markers",
      icon: <Heart className="w-6 h-6" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Assesses heart health and detects cardiac conditions',
      tests: {
        troponin: { name: "Troponin I", min: 0, max: 0.04, unit: "ng/mL", icon: '❤️', importance: 'high' },
        bnp: { name: "B-type Natriuretic Peptide (BNP)", min: 0, max: 100, unit: "pg/mL", icon: '💗', importance: 'high' },
        ck_mb: { name: "Creatine Kinase-MB (CK-MB)", min: 0, max: 5, unit: "ng/mL", icon: '💓', importance: 'high' },
      },
    },
  };

  useEffect(() => {
    const checkAuthAndFetchAppointments = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (!user) {
        router.push("/Patient");
        return;
      } else {
        setUser(user);
      }
    };

    checkAuthAndFetchAppointments();
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const extractDoctorsFromResponse = (responseText) => {
    const doctorNames = [];
    const sections = responseText.split("\n\n");

    for (const section of sections) {
      const lines = section.split("\n");
      for (const line of lines) {
        const match = line.match(/-\s*([A-Za-z\s]+?ist)\b/);
        if (match) {
          doctorNames.push(match[1].trim());
        }
      }
    }

    return [...new Set(doctorNames)];
  };

  const analyze = async () => {
    if (!selectedTestCategory) {
      setError("Please select a test category before analyzing.");
      return;
    }

    if (!apiKey) {
      setError("API key is missing! Set NEXT_PUBLIC_OPENAI_KEY in .env.local.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setAnalysisDetails(null);
    setActiveTab('results');

    const selectedTests = testCategories[selectedTestCategory].tests;
    let formattedResults = Object.keys(values)
        .map((key) => {
          const test = selectedTests[key];
          return `${test.name}: ${values[key]} ${test.unit}`;
        })
        .join("\n");

//     const prompt = `
// ---
//
// ### **1. Test Analysis**
// - **For each value:**
// - **Status:** Clearly state *High/Normal/Low* in **bold**. (and display 🔴 for low, 🟠 for high, 🟢 for normal)
// - **Biological Reason:** One concise phrase (≤15 words) explaining the mechanism or clinical relevance.
// - **Example Format:**
// - Hemoglobin: **High** 🟠. Chronic hypoxia stimulates erythropoietin production.
//
// ---
//
// ### **2. Potential Diagnoses**
// - **Criteria:** Only list conditions **directly linked to ALL abnormal values combined**.
// - **Prioritization:** Rank **top 3** most likely diagnoses (use medical terminology).
// - Include a brief rationale (1 sentence) linking abnormal results to each diagnosis.
// - **Example:**
// 1. **Polycythemia Vera** – Elevated hemoglobin and hematocrit with JAK2 mutation association.
//
// ---
//
// ### **3. Recommended Specialists**
// - **Specificity:** Name **subspecialists** (e.g., *Hematologist*, not "doctor").
// - **Alignment:** Pair each specialist with a corresponding diagnosis from Section 2.
// - **Example:**
// - **Hematologist**: Further evaluate suspected polycythemia vera.
//
// ---
//
// **Lab Results:**
// \n\n${formattedResults}\n\n
//
// ---
// **Response Guidelines:**
// - Use clear headings, bullet points, and bold keywords for readability.
// - Avoid redundant explanations or general statements.
// - Prioritize abnormalities first, then normal values.
// `;
    const prompt = `You are a board-certified clinical pathologist providing professional laboratory interpretation.

**PATIENT DATA:**
Test Panel: ${testCategories[selectedTestCategory].name}
Panel Purpose: ${testCategories[selectedTestCategory].description}

**LABORATORY RESULTS:**
${formattedResults}

**REFERENCE RANGES:**
${Object.keys(values).map(key => {
      const test = selectedTests[key];
      return `${test.name}: ${test.min}-${test.max} ${test.unit}`;
    }).join('\n')}

---

**REQUIRED OUTPUT FORMAT:**

## 1. INDIVIDUAL PARAMETER ANALYSIS
For each parameter, provide:
- **Parameter Name** | Status: [🟢 NORMAL | 🟡 BORDERLINE | 🟠 ABNORMAL | 🔴 CRITICAL]
- Value: [actual] ${test.unit} (Reference: ${test.min}-${test.max})
- Clinical Interpretation: [1-2 sentences max]
- Mechanism: [Brief pathophysiology if abnormal]

## 2. PATTERN RECOGNITION & DIFFERENTIAL DIAGNOSIS
Based on the constellation of findings:
1. **Primary Diagnosis** (Most Likely)
   - Rationale: [Link specific abnormal values]
   - Confidence: [High/Moderate/Low]

2. **Secondary Considerations**
   - Alternative diagnoses if pattern is ambiguous

3. **Excluded Conditions**
   - Why certain diagnoses are unlikely

## 3. CLINICAL RECOMMENDATIONS

### A. IMMEDIATE ACTIONS
- Urgency Level: [🟢 Routine | 🟡 Prompt | 🔴 Urgent]
- Required within: [timeframe]

### B. SPECIALIST REFERRALS
- **[Specific Subspecialty]**: [Precise reason]
  Example: "Hematologist" not "blood doctor"

### C. ADDITIONAL TESTING
- Confirmatory tests needed
- Timeline for follow-up

### D. MONITORING PLAN
- Parameters to track
- Recommended retest interval

## 4. RISK ASSESSMENT
- **Overall Risk Score**: [1-10]/10
- **Severity Classification**: [Minimal | Low | Moderate | High | Critical]
- **Clinical Priority**: [Routine follow-up | Urgent consultation | Emergency evaluation]

---

**FORMATTING RULES:**
- Use emojis for status indicators (🟢🟡🟠🔴)
- Keep interpretations concise (≤2 sentences)
- Use medical terminology appropriately
- Prioritize abnormal findings first
- Include specific numeric values in context
- Avoid hedging language unless genuinely uncertain`;
    try {
      const client = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: apiKey,
        dangerouslyAllowBrowser: true,
      });

      const response = await client.chat.completions.create({
        messages: [
          { role: "system", content: "You are a medical expert providing test analysis." },
          { role: "user", content: prompt },
        ],
        model: "gpt-5",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });

      let aiResponse = response.choices[0].message.content;
      aiResponse = aiResponse.replace(/\*\*/g, "").replace(/#/g, "").trim();

      setResult(aiResponse);

      const extractedDoctors = extractDoctorsFromResponse(aiResponse);
      setDoctors(extractedDoctors);

        try {
          if (user && extractedDoctors.length > 0) {
            console.error("Error fetching data:", fetchError);
          } else {
            const currentDoctors = user?.doctor_list || [];
            const mergedDoctors = [...currentDoctors, ...extractedDoctors];
            const uniqueDoctors = [...new Set(mergedDoctors)];

            const { error: updateError } = await supabase
                .from('patients')
                .update({ doctor_list: uniqueDoctors })
                .eq('user_id', user.id);

            if (updateError) {
              console.error('Supabase save error:', updateError);
            } else {
              console.log('✅ Saved doctors:', uniqueDoctors);
            }
          }
        } catch (err) {
          console.error('Saving failed:', err);
        }


      const riskScore = calculateRiskScore(values, selectedTests);
      const severity = getSeverityLevel(riskScore);

      setAnalysisDetails({
        analysis: aiResponse,
        riskScore,
        recommendations: generateRecommendations(extractedDoctors, severity),
        severity,
        nextSteps: [
          { step: "Review Analysis", timeline: "Immediate", priority: "High" },
          { step: "Consult Recommended Specialists", timeline: "1-2 weeks", priority: "Medium" },
          { step: "Follow-up Tests", timeline: "1 month", priority: "Low" }
        ],
        aiConfidence: 94
      });

      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }

      const newHistoryItem = {
        id: Date.now(),
        category: testCategories[selectedTestCategory].name,
        timestamp: Date.now(),
        values: { ...values },
        result: aiResponse.substring(0, 100) + '...'
      };
      setHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]);

    } catch (err) {
      console.error("API Error:", err);
      setError("Error analyzing test results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const calculateRiskScore = (values, tests) => {
    let abnormalCount = 0;
    let totalTests = Object.keys(values).length;

    Object.keys(values).forEach(key => {
      const value = parseFloat(values[key]);
      const test = tests[key];
      if (test && (value < test.min || value > test.max)) {
        abnormalCount++;
      }
    });

    if (totalTests === 0) return 1;
    const score = (abnormalCount / totalTests) * 10;
    return Math.min(10, score.toFixed(1));
  };

  const getSeverityLevel = (score) => {
    if (score <= 3) return "low";
    if (score <= 7) return "medium";
    return "high";
  };

  const generateRecommendations = (doctors, severity) => {
    const recommendations = [];

    if (doctors.length > 0) {
      recommendations.push(`Consult with ${doctors.join(', ')} for specialized evaluation`);
    }

    if (severity === "high") {
      recommendations.push("Schedule appointment within 1 week");
      recommendations.push("Consider immediate follow-up testing");
    } else if (severity === "medium") {
      recommendations.push("Schedule appointment within 2-4 weeks");
      recommendations.push("Monitor symptoms closely");
    } else {
      recommendations.push("Routine follow-up in 3-6 months");
      recommendations.push("Maintain healthy lifestyle habits");
    }

    return recommendations;
  };

  const getValueStatus = (value, min, max) => {
    if (value === '' || value === null || value === undefined) return null;
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return null;

    const percentFromMin = ((numValue - min) / (max - min)) * 100;

    if (numValue < min * 0.7) return {
      status: 'critical-low',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: '🔻',
      severity: 'critical'
    };
    if (numValue < min) return {
      status: 'low',
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: '📉',
      severity: 'warning'
    };
    if (numValue > max * 1.3) return {
      status: 'critical-high',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: '🔺',
      severity: 'critical'
    };
    if (numValue > max) return {
      status: 'high',
      color: 'text-yellow-500',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: '📈',
      severity: 'warning'
    };
    if (percentFromMin > 80 && percentFromMin < 90) return {
      status: 'optimal-high',
      color: 'text-green-500',
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: '🎯',
      severity: 'optimal'
    };
    if (percentFromMin > 10 && percentFromMin < 20) return {
      status: 'optimal-low',
      color: 'text-green-500',
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: '🎯',
      severity: 'optimal'
    };
    return {
      status: 'normal',
      color: 'text-green-500',
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: '✅',
      severity: 'normal'
    };
  };

  const clearAll = () => {
    setSelectedTestCategory('');
    setValues({});
    setResult(null);
    setAnalysisDetails(null);
    setError(null);
    setSearchTerm('');
    setActiveTab('input');
    setDoctors([]);
  };

  const copyResults = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };

  const exportResults = () => {
    alert(`Exporting results as ${exportFormat.toUpperCase()}`);
  };

  const fillSampleData = () => {
    if (!selectedTestCategory) {
      setError('Please select a test category first');
      return;
    }

    const sampleValues = {};
    const tests = testCategories[selectedTestCategory].tests;

    Object.keys(tests).forEach(key => {
      const test = tests[key];
      const min = test.min;
      const max = test.max;
      const randomValue = (Math.random() * (max - min) + min).toFixed(1);
      sampleValues[key] = parseFloat(randomValue);
    });

    setValues(sampleValues);
  };

  const filteredCategories = Object.keys(testCategories).filter(key =>
      testCategories[key].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasValidValues = Object.keys(values).some(k => values[k] !== '');
  const filledValuesCount = Object.keys(values).filter(k => values[k] !== '').length;
  const totalTestsCount = selectedTestCategory ? Object.keys(testCategories[selectedTestCategory].tests).length : 0;

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-6 lg:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                      <Beaker className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        Advanced Lab Analyzer Pro
                      </h1>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-yellow-300" />
                          <span className="text-sm text-blue-100">AI-Powered Analysis</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-300" />
                          <span className="text-sm text-blue-100">HIPAA Compliant</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-pink-300" />
                          <span className="text-sm text-blue-100">Real-time Insights</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {user && (
                      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.name?.[0] || 'U'}
                        </div>
                        <div className="text-white">
                          <div className="font-medium">{user.name || 'User'}</div>
                          <div className="text-xs text-blue-100">Patient ID: {user.id?.slice(-6)}</div>
                        </div>
                      </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                  <Clock className="w-3 h-3 inline mr-1" />
                  Last updated: Today
                </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                  <Star className="w-3 h-3 inline mr-1" />
                  4.9/5 Accuracy Rating
                </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm">
                  <Users className="w-3 h-3 inline mr-1" />
                  10K+ Analyses Completed
                </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {[
                { label: 'Test Panels', value: Object.keys(testCategories).length, icon: <FileText className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500', trend: '+2' },
                { label: 'Parameters', value: '50+', icon: <Calculator className="w-5 h-5" />, color: 'from-green-500 to-emerald-500', trend: 'New' },
                { label: 'AI Confidence', value: `${aiConfidence}%`, icon: <Brain className="w-5 h-5" />, color: 'from-purple-500 to-pink-500', trend: '↑ 2%' },
                { label: 'Response Time', value: '< 2s', icon: <Zap className="w-5 h-5" />, color: 'from-orange-500 to-red-500', trend: 'Fast' },
              ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                      <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
                <div className="flex space-x-1">
                  {[
                    { id: 'input', label: 'Test Input', icon: <FileText className="w-4 h-4" /> },
                    { id: 'results', label: 'Results', icon: <TrendingUp className="w-4 h-4" />, disabled: !result },
                    { id: 'history', label: 'History', icon: <History className="w-4 h-4" /> },
                    { id: 'compare', label: 'Compare', icon: <ChartBar className="w-4 h-4" />, disabled: true },
                  ].map(tab => (
                      <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          disabled={tab.disabled}
                          className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                              activeTab === tab.id
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                  : 'text-gray-600 hover:bg-gray-50'
                          } ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                  ))}
                </div>
              </div>

              {activeTab === 'input' && (
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-800">Select Test Panel</h2>
                        <p className="text-sm text-gray-500">Choose from our comprehensive diagnostic panels</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowAdvanced(!showAdvanced)}
                            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          {showAdvanced ? 'Simple View' : 'Advanced View'}
                        </button>
                      </div>
                    </div>

                    <div className="relative mb-4">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                          type="text"
                          placeholder="Search test panels (e.g., CBC, Lipid, Thyroid)..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      {searchTerm && (
                          <button
                              onClick={() => setSearchTerm('')}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                      {filteredCategories.length === 0 ? (
                          <div className="col-span-2 text-center py-8">
                            <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">No test panels found matching "{searchTerm}"</p>
                          </div>
                      ) : (
                          filteredCategories.map((key) => {
                            const category = testCategories[key];
                            return (
                                <button
                                    key={key}
                                    onClick={() => {
                                      setSelectedTestCategory(key);
                                      setValues({});
                                      setResult(null);
                                      setError(null);
                                    }}
                                    className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 text-left ${
                                        selectedTestCategory === key
                                            ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-xl scale-105`
                                            : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
                                    }`}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg ${
                                        selectedTestCategory === key ? 'bg-white/20' : 'bg-gray-100'
                                    }`}>
                                      {category.icon}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className={`font-bold text-lg mb-1 ${
                                          selectedTestCategory === key ? 'text-white' : 'text-gray-800'
                                      }`}>
                                        {category.name}
                                      </h3>
                                      <p className={`text-sm mb-2 ${
                                          selectedTestCategory === key ? 'text-white/90' : 'text-gray-500'
                                      }`}>
                                        {category.description}
                                      </p>
                                      <div className="flex items-center gap-3">
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    selectedTestCategory === key
                                        ? 'bg-white/30 text-white'
                                        : 'bg-gray-100 text-gray-600'
                                }`}>
                                  {Object.keys(category.tests).length} parameters
                                </span>
                                        <span className={`text-xs ${
                                            selectedTestCategory === key ? 'text-white/80' : 'text-gray-500'
                                        }`}>
                                  Time: 5-10 min
                                </span>
                                      </div>
                                    </div>
                                  </div>
                                  {selectedTestCategory === key && (
                                      <div className="absolute top-3 right-3">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                      </div>
                                  )}
                                </button>
                            );
                          })
                      )}
                    </div>
                  </div>
              )}

              {selectedTestCategory && activeTab === 'input' && (
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-br ${testCategories[selectedTestCategory].color} rounded-xl text-white`}>
                          {testCategories[selectedTestCategory].icon}
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-gray-800">
                            {testCategories[selectedTestCategory].name}
                          </h2>
                          <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">
                          {filledValuesCount}/{totalTestsCount} values entered
                        </span>
                            {filledValuesCount > 0 && (
                                <span className="text-sm font-medium text-green-600">
                            Ready to analyze
                          </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                            onClick={fillSampleData}
                            className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Fill Sample
                        </button>
                        <button
                            onClick={clearAll}
                            className="px-4 py-2 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          Clear All
                        </button>
                      </div>
                    </div>

                    {filledValuesCount > 0 && (
                        <div className="mb-6">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Completion: {Math.round((filledValuesCount / totalTestsCount) * 100)}%</span>
                            <span>{filledValuesCount} of {totalTestsCount} values</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500"
                                style={{ width: `${(filledValuesCount / totalTestsCount) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.keys(testCategories[selectedTestCategory].tests).map((key) => {
                        const test = testCategories[selectedTestCategory].tests[key];
                        const value = values[key];
                        const status = getValueStatus(value, test.min, test.max);

                        return (
                            <div key={key} className={`p-4 rounded-xl border transition-all duration-300 ${
                                status ? status.border : 'border-gray-200'
                            } ${status ? status.bg : 'bg-white'} hover:shadow-md`}>
                              <div className="flex items-center justify-between mb-3">
                                <label className="flex items-center gap-2 font-semibold text-gray-800">
                                  <span className="text-lg">{test.icon}</span>
                                  <span>{test.name}</span>
                                  {test.importance === 'high' && (
                                      <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                                Critical
                              </span>
                                  )}
                                </label>
                                {status && (
                                    <span className={`text-sm font-medium ${status.color}`}>
                              {status.icon} {status.status.replace('-', ' ')}
                            </span>
                                )}
                              </div>

                              <div className="relative mb-2">
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    name={key}
                                    value={values[key] || ''}
                                    onChange={handleChange}
                                    className={`w-full p-3 pr-16 border-2 rounded-lg focus:outline-none transition-all text-lg ${
                                        status ? `${status.border}` : 'border-gray-300 focus:border-blue-500'
                                    }`}
                                    placeholder={`Enter value...`}
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                  <span className="text-sm font-medium text-gray-600">{test.unit}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-sm">
                                <div className="text-gray-600">
                                  Normal: {test.min} - {test.max} {test.unit}
                                </div>
                                {value !== '' && value !== undefined && (
                                    <div className={`px-2 py-1 rounded ${
                                        status?.severity === 'critical' ? 'bg-red-100 text-red-800' :
                                            status?.severity === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-green-100 text-green-800'
                                    }`}>
                                      {status?.severity || 'Enter value'}
                                    </div>
                                )}
                              </div>
                            </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button
                          onClick={analyze}
                          disabled={loading || !hasValidValues}
                          className={`flex-1 font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                              loading || !hasValidValues
                                  ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                          }`}
                      >
                        {loading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Analyzing with AI...
                            </>
                        ) : (
                            <>
                              <Sparkles className="w-5 h-5" />
                              Analyze Test Results
                              <ChevronRight className="w-5 h-5" />
                            </>
                        )}
                      </button>

                      <button
                          onClick={() => setActiveTab('results')}
                          disabled={!result}
                          className={`px-6 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                              result
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                      >
                        <Eye className="w-5 h-5" />
                        View Results
                      </button>
                    </div>
                  </div>
              )}

              {activeTab === 'results' && result && (
                  <div ref={resultsRef} className="space-y-6">
                    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-gray-800">Clinical Analysis Report</h2>
                            <p className="text-sm text-gray-500">Generated {new Date().toLocaleDateString()} • AI Confidence: {aiConfidence}%</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">Normal</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">Warning</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span className="text-xs text-gray-600">Critical</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-gray-700">Export as:</span>
                          <div className="flex gap-2">
                            {['pdf', 'doc', 'txt'].map(format => (
                                <button
                                    key={format}
                                    onClick={() => setExportFormat(format)}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                        exportFormat === format
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                    }`}
                                >
                                  {format.toUpperCase()}
                                </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                              onClick={copyResults}
                              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-2 text-sm"
                          >
                            <Copy className="w-4 h-4" />
                            Copy
                          </button>
                          <button
                              onClick={exportResults}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
                          >
                            <FileDown className="w-4 h-4" />
                            Export {exportFormat.toUpperCase()}
                          </button>
                          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-colors flex items-center gap-2 text-sm">
                            <Printer className="w-4 h-4" />
                            Print
                          </button>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">AI Confidence Level</span>
                          <span className="text-sm font-bold text-blue-600">{aiConfidence}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                              className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 transition-all duration-1000"
                              style={{ width: `${aiConfidence}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="prose max-w-none">
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 whitespace-pre-wrap text-gray-700 leading-relaxed border border-blue-100 shadow-inner">
                          {result}
                        </div>
                      </div>

                      {analysisDetails && (
                          <div className="grid md:grid-cols-3 gap-4 mt-6">
                            <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-100 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                <h4 className="font-semibold text-red-800">Risk Level</h4>
                              </div>
                              <div className="text-2xl font-bold text-red-600 mb-1">{analysisDetails.riskScore}/10</div>
                              <p className="text-sm text-red-700">Low Risk - Routine monitoring recommended</p>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <ThumbsUp className="w-5 h-5 text-green-600" />
                                <h4 className="font-semibold text-green-800">Next Steps</h4>
                              </div>
                              <div className="space-y-1">
                                {analysisDetails.nextSteps?.map((step, idx) => (
                                    <div key={idx} className="text-sm text-green-700">
                                      {step.step} - <span className="font-medium">{step.timeline}</span>
                                    </div>
                                ))}
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-blue-600" />
                                <h4 className="font-semibold text-blue-800">Follow-up Timeline</h4>
                              </div>
                              <div className="text-lg font-bold text-blue-600 mb-1">2-4 Weeks</div>
                              <p className="text-sm text-blue-700">Recommended retest period</p>
                            </div>
                          </div>
                      )}
                    </div>

                    {error && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4 animate-fade-in">
                          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-red-800 mb-1">Analysis Error</h3>
                            <p className="text-red-600">{error}</p>
                          </div>
                          <button
                              onClick={() => setError(null)}
                              className="p-1 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                    )}
                  </div>
              )}

              {activeTab === 'history' && (
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                        <History className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">Analysis History</h2>
                        <p className="text-sm text-gray-500">Track your past test analyses and results</p>
                      </div>
                    </div>

                    {history.length === 0 ? (
                        <div className="text-center py-12">
                          <History className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-600 mb-2">No Analysis History</h3>
                          <p className="text-gray-500 mb-6">Your completed analyses will appear here</p>
                          <button
                              onClick={() => setActiveTab('input')}
                              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                          >
                            Start New Analysis
                          </button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                          {history.map((item) => (
                              <div key={item.id} className="group p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-md">
                                <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
                                      <Beaker className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600">{item.category}</h4>
                                      <p className="text-xs text-gray-500">
                                        {new Date(item.timestamp).toLocaleDateString()} • {new Date(item.timestamp).toLocaleTimeString()}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                              Completed
                            </span>
                                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.result}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calculator className="w-3 h-3" />
                            {Object.keys(item.values).filter(k => item.values[k] !== '').length} parameters
                          </span>
                                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                                    View Full Report
                                  </button>
                                </div>
                              </div>
                          ))}
                        </div>
                    )}

                    {history.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors">
                            Load More History
                          </button>
                        </div>
                    )}
                  </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-6 h-6" />
                  <h3 className="text-lg font-bold">How It Works</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { step: '1️⃣ Select Panel', desc: 'Choose from comprehensive test categories' },
                    { step: '2️⃣ Enter Values', desc: 'Input your lab test results accurately' },
                    { step: '3️⃣ AI Analysis', desc: 'Get instant AI-powered interpretation' },
                    { step: '4️⃣ Get Insights', desc: 'Receive detailed recommendations and next steps' },
                  ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0">{item.step}</span>
                        <p className="text-sm text-blue-100">{item.desc}</p>
                      </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-800">Premium Features</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: '🤖', feature: 'AI-Powered Analysis', desc: 'GPT-4 medical interpretation' },
                    { icon: '📊', feature: 'Trend Analysis', desc: 'Track changes over time' },
                    { icon: '🛡️', feature: 'Data Security', desc: 'HIPAA compliant encryption' },
                    { icon: '⏱️', feature: 'Fast Results', desc: 'Under 2 second response time' },
                    { icon: '📱', feature: 'Mobile Friendly', desc: 'Access anywhere, anytime' },
                  ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-50 rounded-xl transition-colors">
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="font-medium text-gray-800">{item.feature}</div>
                          <div className="text-xs text-gray-500">{item.desc}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                    <span>Schedule Appointment</span>
                    <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                    <span>Download Health Report</span>
                    <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                  <button className="w-full p-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-xl transition-colors flex items-center justify-between group">
                    <span>Emergency Contact</span>
                    <AlertCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Save className="w-5 h-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium text-gray-800">Auto-save Progress</h4>
                      <p className="text-xs text-gray-500">Automatically save your work</p>
                    </div>
                  </div>
                  <button
                      onClick={() => setAutoSave(!autoSave)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          autoSave ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                  >
                  <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          autoSave ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110">
          <HelpCircle className="w-6 h-6" />
        </button>
      </div>
  );
};

export default TestAnalyzerPage;