// import { useState, useEffect, useRef } from 'react';
// import { mockSupabase, mockOpenAI } from '../utils/mockServices';
// import { testCategories } from '../utils/testCategories';
//
// export const useTestAnalyzer = () => {
//     const [selectedTestCategory, setSelectedTestCategory] = useState('');
//     const [values, setValues] = useState({});
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [user, setUser] = useState(null);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [history, setHistory] = useState([]);
//     const [activeTab, setActiveTab] = useState('input');
//     const [analysisDetails, setAnalysisDetails] = useState(null);
//     const [aiConfidence] = useState(94);
//     const resultsRef = useRef(null);
//
//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 const { data } = await mockSupabase.auth.getUser();
//                 if (data?.user) {
//                     setUser(data.user);
//                 }
//             } catch (err) {
//                 console.error('Auth check failed:', err);
//             }
//         };
//         checkAuth();
//     }, []);
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const numValue = value === '' ? '' : parseFloat(value);
//
//         if (value !== '' && (isNaN(numValue) || numValue < 0)) {
//             return;
//         }
//
//         setValues(prev => ({
//             ...prev,
//             [name]: numValue
//         }));
//     };
//
//     const analyze = async () => {
//         if (!selectedTestCategory) {
//             setError('Please select a test category');
//             return;
//         }
//
//         const filledValues = Object.keys(values).filter(k => values[k] !== '');
//         if (filledValues.length === 0) {
//             setError('Please enter at least one test value');
//             return;
//         }
//
//         setLoading(true);
//         setActiveTab('results');
//
//         try {
//             const aiResponse = await mockOpenAI('');
//             setResult(aiResponse.analysis);
//             setAnalysisDetails(aiResponse);
//
//             if (resultsRef.current) {
//                 resultsRef.current.scrollIntoView({ behavior: 'smooth' });
//             }
//
//             const newHistoryItem = {
//                 id: Date.now(),
//                 category: testCategories[selectedTestCategory].name,
//                 timestamp: Date.now(),
//                 values: { ...values },
//                 result: aiResponse.analysis.substring(0, 100) + '...'
//             };
//             setHistory(prev => [newHistoryItem, ...prev.slice(0, 9)]);
//
//         } catch (err) {
//             console.error('Analysis error:', err);
//             setError('Failed to analyze results. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     const clearAll = () => {
//         setSelectedTestCategory('');
//         setValues({});
//         setResult(null);
//         setAnalysisDetails(null);
//         setError(null);
//         setSearchTerm('');
//         setActiveTab('input');
//     };
//
//     const fillSampleData = () => {
//         if (!selectedTestCategory) {
//             setError('Please select a test category first');
//             return;
//         }
//
//         const sampleValues = {};
//         const tests = testCategories[selectedTestCategory].tests;
//
//         Object.keys(tests).forEach(key => {
//             const test = tests[key];
//             const randomValue = (Math.random() * (test.max - test.min) + test.min).toFixed(1);
//             sampleValues[key] = parseFloat(randomValue);
//         });
//
//         setValues(sampleValues);
//     };
//
//     const filteredCategories = Object.keys(testCategories).filter(key =>
//         testCategories[key].name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//
//     return {
//         selectedTestCategory,
//         setSelectedTestCategory,
//         values,
//         setValues,
//         result,
//         loading,
//         error,
//         user,
//         history,
//         activeTab,
//         setActiveTab,
//         analysisDetails,
//         searchTerm,
//         setSearchTerm,
//         aiConfidence,
//         resultsRef,
//         handleChange,
//         analyze,
//         clearAll,
//         fillSampleData,
//         filteredCategories
//     };
// };
'use client'
import {useState} from "react";
import { AzureKeyCredential } from "@azure/core-auth";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";

 export const useTestAnalyzer = async () => {
    const [selectedTestCategory, setSelectedTestCategory] = useState("");
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user ,SetUser]=useState(null)
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY_5;
// if (!selectedTestCategory) {
// setError("Please select a test category before analyzing.");
// return;
// }

if (!apiKey) {
setError("API key is missing! Set NEXT_PUBLIC_AZURE_KEY in .env.local.");
return;
}

setLoading(true);
setError(null);
setResult(null);

const selectedTests = testCategories[selectedTestCategory].tests;
let formattedResults = Object.keys(values)
.map((key) => {
  const test = selectedTests[key];
  return `${test.name}: ${values[key]} ${test.unit}`;
})
.join("\n");

const prompt = `
---

### **1. Test Analysis**
- **For each value:**
- **Status:** Clearly state *High/Normal/Low* in **bold**. (and display 🔴 for low, 🟠 for high, 🟢 for normal)
- **Biological Reason:** One concise phrase (≤15 words) explaining the mechanism or clinical relevance.
- **Example Format:**
- Hemoglobin: **High** 🟠. Chronic hypoxia stimulates erythropoietin production.

---

### **2. Potential Diagnoses**
- **Criteria:** Only list conditions **directly linked to ALL abnormal values combined**.
- **Prioritization:** Rank **top 3** most likely diagnoses (use medical terminology).
- Include a brief rationale (1 sentence) linking abnormal results to each diagnosis.
- **Example:**
1. **Polycythemia Vera** – Elevated hemoglobin and hematocrit with JAK2 mutation association.

---

### **3. Recommended Specialists**
- **Specificity:** Name **subspecialists** (e.g., *Hematologist*, not "doctor").
- **Alignment:** Pair each specialist with a corresponding diagnosis from Section 2.
- **Example:**
- **Hematologist**: Further evaluate suspected polycythemia vera.

---

**Lab Results:**
\n\n${formattedResults}\n\n

---
**Response Guidelines:**
- Use clear headings, bullet points, and bold keywords for readability.
- Avoid redundant explanations or general statements.
- Prioritize abnormalities first, then normal values.
`

try {
const client = new OpenAI({
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: apiKey,
  dangerouslyAllowBrowser: true, // Required to use OpenAI in the browser
});

const response = await client.chat.completions.create({
    messages: [
        {role: "system", content: "You are a medical expert providing test analysis."},
        {role: "user", content: prompt},
    ],
    model: "gpt-5",
    temperature: 1,
    max_tokens: 4096,
    top_p: 1,
})
let aiResponse = response.choices[0].message.content;

// Remove stars and hashes, trim
aiResponse = aiResponse.replace(/\*\*/g, "").replace(/#/g, "").trim();

// Extract "Doctors to consult" section
let doctorsList = [];
let doctorNames = [];
const sections = aiResponse.split("\n\n");
console.log(sections)
for (const section of sections) {
    const lines = section.split("\n");
    for (const line of sections) {
        console.log('line', line)
        const match = line.match(/-\s*([A-Za-z\s]+?ist)\b/); // match words ending in 'ist'
        if (match) {
            doctorNames.push(match[1].trim());
        }
    }
    console.log("doctornames:", doctorNames);
    console.log(user);
    setDoctors(doctorNames);
    setResult(aiResponse);
}
}

// // ✅ Save doctor list to patient account
//     try {
//         const {data: patientData, error: fetchError} = await supabase
//             .from('patients')
//             .select('doctor_list')
//             .eq('user_id', user.id)
//             .single();
//         console.log(user.id, patientData);
//         if (fetchError) {
//             console.error("Error fetching data:", fetchError);
//             return;
//         }
//         console.log(patientData.doctor_list)
//         const currentDoctors = patientData?.doctor_list || [];
//         const mergedDoctors = [...currentDoctors, ...doctors];
//         const uniqueDoctors = [...new Set(mergedDoctors)];
//         console.log(mergedDoctors)
//         const {error: updateError} = await supabase
//             .from('patients')
//             .update({doctor_list: uniqueDoctors})
//             .eq('user_id', user.id);
//
//         if (updateError) {
//             console.error('Supabase save error:', updateError);
//         } else {
//             console.log('✅ Saved doctors:', uniqueDoctors);
//         }
//     } catch (err) {
//         console.error('Saving failed:', err);
//     }
//
// // try {
// //   const { data: { user }, error: authError } = await supabase.auth.getUser();
// //   console.log("saveDoctors: starting...");
// //   if (authError || !user) {
// //     console.error("Auth error:", authError?.message || "No user");
// //     return;
// //   }
// //   console.log("saveDoctors: starting...");
// //   // if (!doctors || doctors.length === 0) {
// //   //   console.warn("Empty doctors list - aborting save");
// //   //   return;
// //   // }
// //   // Fetch the existing patient record
// //   const { data: patientData, error: fetchError } = await supabase
// //     .from('patients')
// //     .select('doctors_list') // Ensure the column name matches your database!
// //     .eq('user_id', user.id)
// //     .single(); // Get a single record
//
// //   if (fetchError) {
// //     console.error("Error fetching data:", fetchError);
// //     return;
// //   }
// //    // Get the current list (or default to an empty array)
// //    const currentDoctors = patientData?.doctors_list || [];
// //   // Merge existing and new doctors, and deduplicate (optional)
// // const mergedDoctors = [...currentDoctors, ...doctors];
//
// // // Remove duplicates (if needed)
// // const uniqueDoctors = [...new Set(mergedDoctors)];
//
// // console.log("Fetched patient data:", patientData);
// // console.log("Current doctors list:", currentDoctors);
// // console.log("Merged doctors list:", mergedDoctors);
// // console.log("Unique doctors list:", uniqueDoctors);
//
// //   const { error: updateError } = await supabase
// //   .from('patients')
// //   .update({ doctors_list: uniqueDoctors })
// //   .eq('user_id', user.id);
//
// //   if (updateError) {
// //     console.error('Supabase save error:', updateError);
// //     setError('Failed to save doctor list');
// //   } else {
// //     console.log('Saved doctors:', uniqueDoctors);
// //   }
// // } catch (err) {
// //   console.error('Saving failed:', err);
// // }
// //  catch (err) {
// // console.error("API Error:", err);
// // setError("Error analyzing test results.");
    finally {
        setLoading(false);
    }}
