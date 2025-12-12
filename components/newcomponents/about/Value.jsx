import {
    Award,
    Bot,
    CheckCircle, FileCheck, Globe2,
    Heart, Lock,
    Phone, Shield,
    ShieldCheck,
    Sparkles,
    Star,
    Stethoscope,
    Users,
    Zap
} from "lucide-react";
import React from "react";
import Link from "next/link";

export default  function Valuesection(){
    const values = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: 'Patient-Centered Care',
            description: 'Every decision we make prioritizes patient wellbeing and accessibility to quality healthcare.',
            color: 'from-red-500 to-pink-500',
            examples: ['Personalized care plans', '24/7 patient support', 'Transparent pricing']
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: 'Security & Privacy',
            description: 'HIPAA-compliant infrastructure with end-to-end encryption protecting your sensitive data.',
            color: 'from-blue-500 to-cyan-500',
            examples: ['Military-grade encryption', 'Regular security audits', 'Data sovereignty compliance']
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: 'AI Innovation',
            description: 'Cutting-edge AI technology providing intelligent insights and personalized healthcare recommendations.',
            color: 'from-purple-500 to-indigo-500',
            examples: ['Predictive analytics', 'Natural language processing', 'Machine learning models']
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Seamless Experience',
            description: 'Intuitive interfaces and streamlined workflows making healthcare management effortless.',
            color: 'from-yellow-500 to-orange-500',
            examples: ['One-click appointments', 'Cross-platform sync', 'Minimal waiting times']
        }
    ];
    const certifications = [
        { name: 'HIPAA Compliant', icon: <Shield className="w-6 h-6" /> },
        { name: 'ISO 27001 Certified', icon: <FileCheck className="w-6 h-6" /> },
        { name: 'SOC 2 Type II', icon: <Lock className="w-6 h-6" /> },
        { name: 'GDPR Compliant', icon: <Globe2 className="w-6 h-6" /> },
    ];
    return(
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`inline-block p-4 bg-gradient-to-br ${value.color} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>
                                <ul className="space-y-2">
                                    {value.examples.map((example, idx) => (
                                        <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            {example}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Awards */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Certifications */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white">
                                    <Award className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800">Certifications & Compliance</h2>
                                    <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                                            {cert.icon}
                                        </div>
                                        <span className="font-medium text-gray-800">{cert.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                                        <Star className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold">Awards & Recognition</h2>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { award: 'Healthcare Innovation Award 2023', org: 'Global Health Forum' },
                                        { award: 'Best Patient Experience Platform', org: 'Digital Health Awards' },
                                        { award: 'Top 10 HealthTech Companies', org: 'Forbes Magazine' },
                                        { award: 'Excellence in AI Implementation', org: 'Tech Innovation Summit' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                            <div className="p-2 bg-white/20 rounded-lg">
                                                <Sparkles className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{item.award}</div>
                                                <div className="text-sm text-blue-100">{item.org}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Ready to Transform Your Healthcare Experience?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Join thousands of patients and healthcare providers who trust our platform
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href={'/signup'}>   <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                            <Users className="w-5 h-5" />
                            Join as Patient
                     </button></Link>
                     <Link href={'/contact'}>  <button className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200 flex items-center justify-center gap-2">
                            <Stethoscope className="w-5 h-5" />
                            Join as Provider
                     </button></Link>
                       <Link href={'/contact'}> <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5" />
                            Contact Sales
                       </button></Link>
                    </div>
                </div>
            </section></>
    )
}