import {Award, ChevronRight, Clock, Home, Star, Users,Phone,Mail,MapPin} from "lucide-react";
import React from "react";

export  default function Herosection(){
    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone Support',
            primary: '+213 555 123 456',
            secondary: '+213 555 987 654 (Emergency)',
            hours: '24/7 Available',
            color: 'from-blue-500 to-cyan-500',
            action: 'tel:+213555123456'
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email Support',
            primary: 'support@medicare-dz.com',
            secondary: 'info@medicare-dz.com',
            hours: 'Response within 4-6 hours',
            color: 'from-purple-500 to-pink-500',
            action: 'mailto:support@medicare-dz.com'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Headquarters',
            primary: 'Blida, Algeria',
            secondary: 'Healthcare Innovation Center',
            hours: 'Mon-Fri: 8:00 AM - 8:00 PM',
            color: 'from-green-500 to-emerald-500'
        }
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20 lg:py-28">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
              <Home className="w-4 h-4 inline mr-2" />
              Home / Contact
            </span>
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
              <Users className="w-4 h-4 inline mr-2" />
              24/7 Support
            </span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get in <span className="text-yellow-300">Touch</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                        We're here to help you with any questions or support needs. Our team is dedicated to providing you with exceptional service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center gap-2 text-white">
                            <Star className="w-5 h-5 text-yellow-300" />
                            <span className="font-semibold">4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Clock className="w-5 h-5" />
                            <span className="font-semibold">24/7 Availability</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <Award className="w-5 h-5" />
                            <span className="font-semibold">Certified Support</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-12 -mt-16 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                                <div className={`inline-block p-3 bg-gradient-to-br ${info.color} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                                <p className="text-lg text-gray-700 font-semibold mb-1">{info.primary}</p>
                                <p className="text-sm text-gray-500 mb-1">{info.secondary}</p>
                                <p className="text-xs text-gray-400 mb-3">{info.hours}</p>
                                {info.action && (
                                    <a href={info.action} className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 text-sm">
                                        Contact Now <ChevronRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}