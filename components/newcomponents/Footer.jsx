import {Clock, Facebook, Heart, Instagram, Linkedin, Mail, Phone, Twitter} from "lucide-react";
import React from "react";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Heart className="w-8 h-8 text-blue-400" />
                            <span className="text-2xl font-bold">MediCare</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Providing exceptional healthcare services with compassion and expertise.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Find a Doctor</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Book Appointment</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">FAQs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cardiology</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Dentistry</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Orthopedics</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Emergency Care</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Mental Health</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-400">+231 562 645 998</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-400">info@medicare.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-400">24/7 Emergency Service</span>
                            </div>
                            <div className="mt-6 ">
                                <p className="text-gray-400 mb-2">Subscribe to our newsletter</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <button className="px-2 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}
