import {Eye, Target} from "lucide-react";
import React from "react";

export default function Missionvision(){

    return(
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-300">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white">
                                    <Target className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                                </div>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                At HealthCare, we're committed to transforming healthcare delivery by creating seamless connections
                                between patients and medical professionals. Our platform combines cutting-edge technology with
                                user-centric design to enhance medical communication, streamline processes, and improve health outcomes.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe that access to quality healthcare should be effortless, transparent, and personalized.
                                By leveraging AI, data analytics, and intuitive design, we empower both patients and healthcare
                                providers to make informed decisions and deliver exceptional care.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                                        <Eye className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">Our Vision</h2>
                                        <div className="h-1 w-20 bg-white/50 rounded-full mt-2"></div>
                                    </div>
                                </div>
                                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                                    To create a world where healthcare is accessible, personalized, and proactive for everyone,
                                    regardless of location or background. We envision a future where technology seamlessly integrates
                                    with healthcare to predict, prevent, and treat medical conditions before they become critical.
                                </p>
                                <p className="text-lg text-blue-100 leading-relaxed">
                                    Our goal is to become the most trusted and comprehensive healthcare platform globally,
                                    setting new standards for patient care, provider efficiency, and medical innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}