import {Users} from "lucide-react";
import React from "react";
import Link from "next/link";

export default  function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{doctor.name}</h3>
                    <p className="text-sm opacity-90">{doctor.specialization}</p>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                            {'★'.repeat(Math.floor(doctor.rating))}
                            <span className="text-gray-300">
                {'★'.repeat(5 - Math.floor(doctor.rating))}
              </span>
                        </div>
                        <span className="text-gray-600 text-sm">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{doctor.patients.toLocaleString()}+</span>
                    </div>
                </div>
              <Link href={'/Booking'}>  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Book Appointment
              </button></Link>
            </div>
        </div>
    );
}