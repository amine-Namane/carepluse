import {
    TestTube,
    Activity,
    HeartPulse,
    Microscope,
    Zap
} from 'lucide-react';

export const testCategories = {
    cbc: {
        name: 'Complete Blood Count (CBC)',
        icon: <TestTube className="w-6 h-6" />,
        color: 'from-red-500 to-pink-500',
        description: 'Measures blood components including red cells, white cells, and platelets',
        tests: {
            hemoglobin: { name: 'Hemoglobin', min: 12, max: 16, unit: 'g/dL', icon: '🔴', importance: 'high' },
            wbc: { name: 'White Blood Cells', min: 4, max: 11, unit: '×10³/μL', icon: '⚪', importance: 'high' },
            rbc: { name: 'Red Blood Cells', min: 4.7, max: 6.1, unit: 'million/μL', icon: '🔴', importance: 'high' },
            platelets: { name: 'Platelet Count', min: 150, max: 400, unit: '×10³/μL', icon: '🟡', importance: 'medium' },
            hematocrit: { name: 'Hematocrit', min: 38, max: 50, unit: '%', icon: '📊', importance: 'medium' },
            mcv: { name: 'MCV', min: 80, max: 100, unit: 'fL', icon: '📏', importance: 'low' },
            mch: { name: 'MCH', min: 27, max: 33, unit: 'pg', icon: '📐', importance: 'low' },
            mchc: { name: 'MCHC', min: 32, max: 36, unit: 'g/dL', icon: '📈', importance: 'low' },
        },
    },
    metabolic: {
        name: 'Basic Metabolic Panel',
        icon: <Activity className="w-6 h-6" />,
        color: 'from-green-500 to-emerald-500',
        description: 'Assesses kidney function, electrolyte balance, and blood glucose',
        tests: {
            glucose: { name: 'Fasting Glucose', min: 70, max: 140, unit: 'mg/dL', icon: '🍬', importance: 'high' },
            sodium: { name: 'Sodium', min: 135, max: 145, unit: 'mEq/L', icon: '🧂', importance: 'high' },
            potassium: { name: 'Potassium', min: 3.5, max: 5.1, unit: 'mEq/L', icon: '🍌', importance: 'high' },
            chloride: { name: 'Chloride', min: 96, max: 106, unit: 'mEq/L', icon: '💧', importance: 'medium' },
            bicarbonate: { name: 'Bicarbonate', min: 22, max: 29, unit: 'mEq/L', icon: '⚗️', importance: 'medium' },
            bun: { name: 'BUN', min: 7, max: 20, unit: 'mg/dL', icon: '🧪', importance: 'high' },
            creatinine: { name: 'Creatinine', min: 0.6, max: 1.3, unit: 'mg/dL', icon: '💉', importance: 'high' },
        },
    },
    lipid: {
        name: 'Lipid Panel',
        icon: <HeartPulse className="w-6 h-6" />,
        color: 'from-purple-500 to-indigo-500',
        description: 'Measures cholesterol and triglycerides for cardiovascular risk assessment',
        tests: {
            cholesterol: { name: 'Total Cholesterol', min: 150, max: 200, unit: 'mg/dL', icon: '💛', importance: 'high' },
            hdl: { name: 'HDL Cholesterol', min: 40, max: 60, unit: 'mg/dL', icon: '💚', importance: 'high' },
            ldl: { name: 'LDL Cholesterol', min: 0, max: 100, unit: 'mg/dL', icon: '❤️', importance: 'high' },
            triglycerides: { name: 'Triglycerides', min: 50, max: 150, unit: 'mg/dL', icon: '🔷', importance: 'high' },
        },
    },
    liver: {
        name: 'Liver Function Tests',
        icon: <Microscope className="w-6 h-6" />,
        color: 'from-amber-500 to-orange-500',
        description: 'Evaluates liver health and detects liver damage or disease',
        tests: {
            alt: { name: 'ALT', min: 7, max: 56, unit: 'U/L', icon: '🟠', importance: 'high' },
            ast: { name: 'AST', min: 10, max: 40, unit: 'U/L', icon: '🟡', importance: 'high' },
            alp: { name: 'ALP', min: 44, max: 147, unit: 'U/L', icon: '🟢', importance: 'medium' },
            bilirubin: { name: 'Total Bilirubin', min: 0.1, max: 1.2, unit: 'mg/dL', icon: '🟤', importance: 'medium' },
            albumin: { name: 'Albumin', min: 3.5, max: 5.0, unit: 'g/dL', icon: '⚪', importance: 'medium' },
            total_protein: { name: 'Total Protein', min: 6.0, max: 8.3, unit: 'g/dL', icon: '🔵', importance: 'low' },
        },
    },
    thyroid: {
        name: 'Thyroid Function Panel',
        icon: <Zap className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500',
        description: 'Assesses thyroid gland function and hormone levels',
        tests: {
            tsh: { name: 'TSH', min: 0.5, max: 5.0, unit: 'mIU/L', icon: '⚡', importance: 'high' },
            t3: { name: 'T3', min: 80, max: 200, unit: 'ng/dL', icon: '🔋', importance: 'high' },
            t4: { name: 'T4', min: 4.5, max: 12.5, unit: 'μg/dL', icon: '🔌', importance: 'high' },
        },
    },
};