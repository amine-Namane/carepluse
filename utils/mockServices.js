export const mockSupabase = {
    auth: {
        getUser: async () => ({
            data: { user: { id: '123', email: 'user@example.com', name: 'John Doe' } },
            error: null
        })
    },
    from: (table) => ({
        select: (cols) => ({
            eq: (col, val) => ({
                single: async () => ({
                    data: { doctor_list: [] },
                    error: null
                })
            })
        }),
        update: (data) => ({
            eq: (col, val) => async () => ({
                error: null
            })
        })
    })
};

export const mockOpenAI = async (prompt) => {
    return {
        analysis: `### 📊 Comprehensive Test Analysis Report

**🔍 Executive Summary:**
✅ **Overall Health Status:** Generally Good with Minor Areas for Improvement
📈 **Key Findings:** Elevated RBC count requires monitoring

**📋 Test Panel Results:**
┌─────────────────┬─────────────┬───────────────┬────────────┐
│ Parameter       │ Your Value  │ Normal Range  │ Status     │
├─────────────────┼─────────────┼───────────────┼────────────┤
│ Hemoglobin      │ 14.2 g/dL   │ 12-16 g/dL    │ ✅ Normal  │
│ White Blood Cells│ 7.5 ×10³/μL│ 4-11 ×10³/μL  │ ✅ Normal  │
│ Red Blood Cells │ 6.3 million/μL│ 4.7-6.1      │ ⚠️ High    │
│ Platelet Count  │ 285 ×10³/μL │ 150-400 ×10³  │ ✅ Normal  │
└─────────────────┴─────────────┴───────────────┴────────────┘

**🎯 Key Observations:**
1. **Elevated RBC (6.3 million/μL)**: Slightly above normal range
2. **Optimal Hemoglobin**: Excellent oxygen-carrying capacity
3. **Healthy Immune Response**: WBC count within normal range

**🏥 Potential Conditions to Consider:**
- **Mild Polycythemia Vera** - Requires hematologist consultation
- **Dehydration** - Ensure adequate daily water intake
- **High Altitude Adaptation** - If living above 2,000m elevation
- **Sleep Apnea** - Consider sleep study if symptoms present

**🩺 Recommended Actions:**
1. **Immediate**: Increase water intake to 2-3L daily
2. **Short-term**: Repeat CBC in 2-4 weeks
3. **Consultation**: Schedule hematology appointment
4. **Monitoring**: Track symptoms (headaches, dizziness)

**📅 Follow-up Timeline:**
├─ Week 1: Hydration optimization
├─ Week 2-4: Repeat CBC test
├─ Month 1-3: Specialist consultation if needed
└─ Ongoing: Annual complete blood panel

**⚠️ Red Flags Requiring Immediate Attention:**
- Sudden severe headaches
- Vision changes or blurriness
- Unexplained bruising or bleeding
- Shortness of breath at rest

**💡 Lifestyle Recommendations:**
• **Hydration**: 2-3 liters water daily
• **Exercise**: Moderate cardio 30min/day
• **Diet**: Iron-rich foods (spinach, legumes)
• **Monitoring**: Regular blood pressure checks

**🔬 Specialist Referrals:**
- **Hematologist**: For comprehensive blood disorder evaluation
- **Cardiologist**: To rule out cardiovascular causes
- **Pulmonologist**: If high altitude exposure is a factor
- **Nutritionist**: For dietary optimization`,

        riskScore: 3.2,
        recommendations: [
            "Increase daily water intake to 2-3 liters",
            "Repeat CBC test in 2-4 weeks",
            "Consider hematology consultation",
            "Monitor for symptoms: headaches, dizziness, fatigue"
        ],
        severity: "low",
        nextSteps: [
            { step: "Hydration", timeline: "Immediate", priority: "High" },
            { step: "Repeat Test", timeline: "2-4 weeks", priority: "Medium" },
            { step: "Specialist Consult", timeline: "1 month", priority: "Low" }
        ],
        aiConfidence: 94
    };
};