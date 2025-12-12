'use client'
import React, {useState} from "react";
import {
    Activity,
    Award,
    Award as AwardIcon,
    BadgeCheck, Bookmark, Calendar, ChevronRight,
    Clock,
    Crown, ExternalLink,
    Heart, Home, Share2,
    Sparkles,
    Star,
    Users, Video, X
} from "lucide-react";

export default function DoctorCard({ doctor }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    // Booking Modal states
    const [showBooking, setShowBooking] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Handle final confirmation
    const confirmBooking = () => {
        alert(
            `Booked ${selectedType} appointment 
             with ${doctor.name} on ${selectedSlot.date} at ${selectedSlot.time}`
        );
        setShowBooking(false);
        setSelectedType(null);
        setSelectedSlot(null);
    };

    return (
        <>
            {/* ------------------- MAIN CARD ------------------- */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">

                {/* Doctor Header */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {doctor.featured && (
                            <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                                <Crown className="w-3 h-3" />
                                Featured
                            </div>
                        )}
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
                            <BadgeCheck className="w-3 h-3" />
                            Verified
                        </div>
                        {doctor.awards.length > 0 && (
                            <div className="flex items-center gap-1 px-3 py-1.5 bg-purple-500 text-white text-xs font-semibold rounded-full">
                                <AwardIcon className="w-3 h-3" />
                                {doctor.awards.length} Awards
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button
                            onClick={() => setIsFavorite(!isFavorite)}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110"
                        >
                            <Heart
                                className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                            />
                        </button>
                        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 hover:scale-110">
                            <Sparkles className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Doctor Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">{doctor.name}</h3>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-blue-100 font-medium">{doctor.specialization}</p>
                            <div className="flex items-center gap-1 text-yellow-300">
                                <Star className="w-4 h-4 fill-current" />
                                <span className="text-sm font-bold">{doctor.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Doctor Details */}
                <div className="p-6 space-y-4">

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                        {doctor.expertise.slice(0, 3).map((skill, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                                {skill}
                            </span>
                        ))}
                        {doctor.expertise.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                +{doctor.expertise.length - 3} more
                            </span>
                        )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-500" />
                            <div>
                                <div className="text-sm font-medium text-gray-800">{doctor.patients}+</div>
                                <div className="text-xs text-gray-500">Patients</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-green-500" />
                            <div>
                                <div className="text-sm font-medium text-gray-800">{doctor.experience}</div>
                                <div className="text-xs text-gray-500">Experience</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-purple-500" />
                            <div>
                                <div className="text-sm font-medium text-gray-800">{doctor.responseTime}</div>
                                <div className="text-xs text-gray-500">Response</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-orange-500" />
                            <div>
                                <div className="text-sm font-medium text-gray-800">{doctor.waitTime}</div>
                                <div className="text-xs text-gray-500">Wait Time</div>
                            </div>
                        </div>
                    </div>

                    {/* Price & Book Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                            <div className="text-2xl font-bold text-gray-800">${doctor.price}</div>
                            <div className="text-xs text-gray-500">per consultation</div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowBooking(true)}
                                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                Book Now
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between">
                    <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" /> Profile
                    </button>
                    <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
                        <Share2 className="w-4 h-4" /> Share
                    </button>
                    <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
                        <Bookmark className="w-4 h-4" /> Save
                    </button>
                </div>
            </div>

            {/* ------------------- BOOKING MODAL ------------------- */}
            {showBooking && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 animate-fadeIn">

                        {/* Modal Header */}
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">
                                Book Appointment with {doctor.name}
                            </h2>
                            <button onClick={() => setShowBooking(false)}>
                                <X className="w-6 h-6 text-gray-600 hover:text-red-600" />
                            </button>
                        </div>

                        {/* Appointment Type */}
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Appointment Type</h3>
                        <div className="flex gap-3 mb-6">
                            <button
                                onClick={() => setSelectedType("video")}
                                className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition 
                                    ${selectedType === "video" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                            >
                                <Video className="w-4 h-4" /> Video
                            </button>

                            <button
                                onClick={() => setSelectedType("in-person")}
                                className={`flex-1 flex items-center gap-2 border rounded-xl py-3 justify-center transition 
                                    ${selectedType === "in-person" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                            >
                                <Home className="w-4 h-4" /> In-person
                            </button>
                        </div>

                        {/* Time Selection */}
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">Choose Time</h3>
                        <div className="grid grid-cols-1 gap-3 max-h-40 overflow-y-auto">
                            {doctor.available
                                .filter(s => !selectedType || s.type === selectedType)
                                .map((slot, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedSlot(slot)}
                                        className={`flex items-center justify-between border rounded-xl py-3 px-4 transition
                                            ${selectedSlot === slot ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {slot.date} - {slot.time}
                                        </div>
                                        <span className="capitalize text-xs opacity-80">{slot.type}</span>
                                    </button>
                                ))}
                        </div>

                        {/* Confirm */}
                        <button
                            disabled={!selectedType || !selectedSlot}
                            onClick={confirmBooking}
                            className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600
                                text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Confirm Booking
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}