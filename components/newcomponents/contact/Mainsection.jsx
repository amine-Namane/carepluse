import {
    AlertCircle,
    CheckCircle,
    ChevronRight,
    Facebook, FileText, Headphones, Heart, Instagram,
    Linkedin,
    MessageSquare,
    Send,
    Shield, Smartphone,
    Twitter,
    UserCircle, Video
} from "lucide-react";
import React, {useState} from "react";

export default function Mainsection(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        urgency: 'normal',
        message: '',
        department: ''
    });
    const [submitStatus, setSubmitStatus] = useState(null);
    const [activeDepartment, setActiveDepartment] = useState('general');
    const [showLiveChat, setShowLiveChat] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitStatus('success');
        setTimeout(() => {
            setSubmitStatus(null);
            setFormData({
                name: '', email: '', phone: '', subject: '',
                urgency: 'normal', message: '', department: ''
            });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (chatMessage.trim()) {
            // Simulate chat message send
            setChatMessage('');
            setTimeout(() => {
                // Simulate auto-reply
                setChatMessages(prev => [...prev, {
                    id: Date.now(),
                    text: "Thank you for your message. Our support team will respond shortly. How else can we assist you?",
                    sender: 'support',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }, 1000);
        }
    };


    const departments = [
        { id: 'general', name: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
        { id: 'technical', name: 'Technical Support', icon: <Smartphone className="w-5 h-5" /> },
        { id: 'billing', name: 'Billing & Payments', icon: <FileText className="w-5 h-5" /> },
        { id: 'medical', name: 'Medical Support', icon: <Heart className="w-5 h-5" /> },
        { id: 'emergency', name: 'Emergency Services', icon: <AlertCircle className="w-5 h-5" /> }
    ];

    const urgencyLevels = [
        { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800' },
        { value: 'normal', label: 'Normal', color: 'bg-blue-100 text-blue-800' },
        { value: 'high', label: 'High', color: 'bg-yellow-100 text-yellow-800' },
        { value: 'urgent', label: 'Urgent', color: 'bg-red-100 text-red-800' }
    ];

    const quickLinks = [
        {
            icon: <Headphones className="w-6 h-6" />,
            title: 'Emergency Support',
            subtitle: '24/7 Critical Care Line',
            detail: '+213 555 987 654',
            color: 'from-red-500 to-pink-500',
            action: 'tel:+213555987654'
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: 'Live Chat',
            subtitle: 'Instant assistance',
            detail: 'Chat with our team',
            color: 'from-blue-500 to-cyan-500',
            action: 'chat'
        },
        {
            icon: <Video className="w-6 h-6" />,
            title: 'Video Consultation',
            subtitle: 'Virtual appointments',
            detail: 'Schedule online',
            color: 'from-purple-500 to-indigo-500',
            action: '/video-consultation'
        }
    ];

    const teamMembers = [
        { name: 'Dr. Sarah Ali', role: 'Support Manager', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200' },
        { name: 'Mohamed Bensaid', role: 'Technical Lead', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200' },
        { name: 'Amira Chen', role: 'Customer Care', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200' }
    ];

    return (
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
                                    <p className="text-sm text-gray-500">We'll get back to you within 4-6 hours</p>
                                </div>
                            </div>

                            {/* Department Selection */}
                            <div className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-700 mb-3">Select Department</h3>
                                <div className="flex flex-wrap gap-2">
                                    {departments.map(dept => (
                                        <button
                                            key={dept.id}
                                            onClick={() => {
                                                setActiveDepartment(dept.id);
                                                setFormData({...formData, department: dept.id});
                                            }}
                                            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                                                activeDepartment === dept.id
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {dept.icon}
                                            <span className="text-sm font-medium">{dept.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="+213 555 123 456"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="support">Technical Support</option>
                                            <option value="billing">Billing Inquiry</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Urgency Level
                                        </label>
                                        <select
                                            id="urgency"
                                            name="urgency"
                                            value={formData.urgency}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        >
                                            {urgencyLevels.map(level => (
                                                <option key={level.value} value={level.value}>
                                                    {level.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                                        placeholder="Tell us how we can help..."
                                    ></textarea>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3 animate-fade-in">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                                        <p className="text-green-700 font-medium">Message sent successfully! We'll be in touch soon.</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                                >
                                    Send Message
                                    <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </button>

                                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                                    <Shield className="w-4 h-4 inline mr-1" />
                                    Your information is secure and protected
                                </div>
                            </form>
                        </div>

                        {/* Additional Info & Team */}
                        <div className="space-y-6">
                            {/* Quick Links */}
                            <div className="grid gap-6">
                                {quickLinks.map((link, index) => (
                                    <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-start gap-4">
                                            <div className={`p-3 bg-gradient-to-br ${link.color} rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                                {link.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-800 mb-1">{link.title}</h3>
                                                <p className="text-sm text-gray-600 mb-1">{link.subtitle}</p>
                                                <p className="text-sm font-semibold text-gray-700 mb-3">{link.detail}</p>
                                                {link.action === 'chat' ? (
                                                    <button
                                                        onClick={() => setShowLiveChat(true)}
                                                        className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 text-sm"
                                                    >
                                                        Start Chat <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                ) : (
                                                    <a href={link.action} className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 text-sm">
                                                        Connect Now <ChevronRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Support Team */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Meet Our Support Team</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="text-center group">
                                            <div className="relative mx-auto mb-3">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-20 h-20 rounded-full object-cover mx-auto ring-2 ring-gray-200 group-hover:ring-blue-500 transition-all"
                                                />
                                                <div className="absolute bottom-0 right-3 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                                            </div>
                                            <h4 className="font-bold text-gray-800">{member.name}</h4>
                                            <p className="text-sm text-gray-600">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                    <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center justify-center gap-2 text-sm">
                                        <UserCircle className="w-4 h-4" />
                                        View All Team Members
                                    </button>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <p className="text-blue-100 mb-6">Stay connected with us on social media</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', color: 'hover:bg-blue-700' },
                                        { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', color: 'hover:bg-sky-500' },
                                        { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', color: 'hover:bg-blue-800' },
                                        { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', color: 'hover:bg-pink-600' }
                                    ].map((social, index) => (
                                        <button
                                            key={index}
                                            className={`p-3 bg-white/20 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300 hover:scale-110`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Chat Widget */}
            {showLiveChat && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-96 border border-gray-200">
                        {/* Chat Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl p-4 text-white">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <div>
                                        <h3 className="font-bold">Live Chat Support</h3>
                                        <p className="text-sm text-blue-100">Online • Response time: 2 min</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowLiveChat(false)}
                                    className="text-white hover:text-gray-200"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-4 h-80 overflow-y-auto">
                            <div className="space-y-4">
                                {/* Welcome message */}
                                <div className="bg-blue-50 rounded-xl p-4 max-w-[80%]">
                                    <p className="text-gray-800">Hello! 👋 How can we help you today?</p>
                                    <span className="text-xs text-gray-500">Support • Just now</span>
                                </div>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="border-t border-gray-200 p-4">
                            <form onSubmit={handleChatSubmit} className="flex gap-2">
                                <input
                                    type="text"
                                    value={chatMessage}
                                    onChange={(e) => setChatMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Map Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Location</span>
                        </h2>
                        <p className="text-xl text-gray-600">Find us at our headquarters in Blida, Algeria</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="h-96 lg:h-[500px]">
                            <iframe
                                title="Healthcare Location Blida"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                src="https://maps.google.com/maps?q=Blida,+Algeria&z=13&output=embed"
                                className="border-0"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">Parking Information</h4>
                                    <p className="text-sm text-gray-600">Free parking available for patients and visitors</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">Public Transport</h4>
                                    <p className="text-sm text-gray-600">Bus routes: 101, 203, 305 • Metro: Central Station</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-2">Accessibility</h4>
                                    <p className="text-sm text-gray-600">Wheelchair accessible • Ramps and elevators available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}