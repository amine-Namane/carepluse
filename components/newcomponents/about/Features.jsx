import {CheckCircle, ChevronRight, ExternalLink, Stethoscope, UsersRound} from "lucide-react";
import React from "react";

export default function Features(){
    const features = [
        {
            title: 'For Patients',
            icon: <UsersRound className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500',
            items: [
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Easy appointment scheduling with verified specialists' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Secure access to medical records and test results' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'AI-powered health insights and trend analysis' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Real-time health monitoring and alerts' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Personalized health recommendations' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Medication tracking and reminders' },
            ]
        },
        {
            title: 'For Healthcare Providers',
            icon: <Stethoscope className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-500',
            items: [
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Comprehensive patient management system' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Integrated diagnostic tools and collaboration features' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Secure messaging and telehealth capabilities' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Advanced analytics and reporting tools' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'EHR integration and data synchronization' },
                { icon: <CheckCircle className="w-5 h-5" />, text: 'Automated appointment reminders and follow-ups' },
            ]
        }
    ];
    const teamMembers = [
        {
            name: 'Dr. Sarah Johnson',
            role: 'Chief Medical Officer',
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
            bio: '15+ years in healthcare innovation',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            name: 'Michael Chen',
            role: 'CTO & Co-founder',
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
            bio: 'AI and machine learning expert',
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Product',
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
            bio: 'User experience specialist',
            color: 'from-green-500 to-emerald-500'
        },
        {
            name: 'James Wilson',
            role: 'Operations Director',
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
            bio: 'Healthcare systems optimization',
            color: 'from-orange-500 to-amber-500'
        }
    ];
    return (
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Everyone</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive solutions tailored for patients and healthcare professionals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {feature.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group/item hover:bg-gray-50 p-3 rounded-lg transition-colors">
                                            <div className="p-1 bg-green-100 rounded-lg text-green-600 group-hover/item:bg-green-500 group-hover/item:text-white transition-colors flex-shrink-0">
                                                {item.icon}
                                            </div>
                                            <span className="text-gray-600 leading-relaxed">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Leadership</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate experts driving healthcare innovation forward
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute bottom-4 right-4">
                                        <div className={`p-2 bg-gradient-to-br ${member.color} rounded-lg text-white`}>
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-sm text-gray-500 mb-4">{member.bio}</p>
                                <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-2 text-sm">
                                    Connect <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}