'use client'
// import React, { useState } from 'react';
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
//   Send,
//   AlertCircle,
//   CheckCircle,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   Headphones,
//   Calendar
// } from 'lucide-react';
//
// const ModernContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [submitStatus, setSubmitStatus] = useState(null);
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setSubmitStatus('success');
//     setTimeout(() => {
//       setSubmitStatus(null);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, 3000);
//   };
//
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//
//   const contactInfo = [
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: 'Phone Support',
//       primary: '+1 (800) 123-4567',
//       secondary: 'Mon-Fri: 8am - 8pm EST',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <Mail className="w-6 h-6" />,
//       title: 'Email Support',
//       primary: 'support@healthcare.com',
//       secondary: 'Response within 24 hours',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: <MapPin className="w-6 h-6" />,
//       title: 'Headquarters',
//       primary: 'Blida, Algeria',
//       secondary: 'Healthcare Innovation Center',
//       color: 'from-green-500 to-emerald-500'
//     }
//   ];
//
//   const quickLinks = [
//     {
//       icon: <Headphones className="w-6 h-6" />,
//       title: 'Emergency Support',
//       subtitle: '24/7 Critical Care Line',
//       detail: '+1 (800) 765-4321',
//       color: 'from-red-500 to-pink-500'
//     },
//     {
//       icon: <MessageSquare className="w-6 h-6" />,
//       title: 'Live Chat',
//       subtitle: 'Instant assistance',
//       detail: 'Chat with our team',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <Calendar className="w-6 h-6" />,
//       title: 'Office Hours',
//       subtitle: 'Mon-Fri: 9am - 5pm',
//       detail: 'Sat: 10am - 2pm',
//       color: 'from-purple-500 to-indigo-500'
//     }
//   ];
//
//   return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-20 lg:py-28">
//           <div className="absolute inset-0 bg-black/10"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl"></div>
//
//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="inline-block mb-6">
//             <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
//               Get In Touch
//             </span>
//             </div>
//             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
//               Contact Us
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//               We're here to help you with any questions or support needs. Reach out to us anytime!
//             </p>
//           </div>
//         </section>
//
//         {/* Contact Info Cards */}
//         <section className="py-12 -mt-16 relative z-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid md:grid-cols-3 gap-6">
//               {contactInfo.map((info, index) => (
//                   <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
//                     <div className={`inline-block p-3 bg-gradient-to-br ${info.color} rounded-xl text-white mb-4`}>
//                       {info.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
//                     <p className="text-lg text-gray-700 font-semibold mb-1">{info.primary}</p>
//                     <p className="text-sm text-gray-500">{info.secondary}</p>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </section>
//
//         {/* Main Content */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
//                     <MessageSquare className="w-6 h-6" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-800">Send a Message</h2>
//                     <p className="text-sm text-gray-500">We'll get back to you within 24 hours</p>
//                   </div>
//                 </div>
//
//                 <div className="space-y-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Full Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         placeholder="John Doe"
//                     />
//                   </div>
//
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                         placeholder="john@example.com"
//                     />
//                   </div>
//
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Subject
//                     </label>
//                     <select
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     >
//                       <option value="">Select a subject</option>
//                       <option value="support">Technical Support</option>
//                       <option value="billing">Billing Inquiry</option>
//                       <option value="partnership">Partnership Opportunity</option>
//                       <option value="feedback">Feedback</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         rows={5}
//                         className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
//                         placeholder="Tell us how we can help..."
//                     ></textarea>
//                   </div>
//
//                   {submitStatus === 'success' && (
//                       <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center gap-3">
//                         <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
//                         <p className="text-green-700 font-medium">Message sent successfully! We'll be in touch soon.</p>
//                       </div>
//                   )}
//
//                   <button
//                       onClick={handleSubmit}
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
//                   >
//                     Send Message
//                     <Send className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//
//               {/* Additional Info & Map */}
//               <div className="space-y-6">
//                 {/* Quick Links */}
//                 <div className="grid gap-6">
//                   {quickLinks.map((link, index) => (
//                       <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                         <div className="flex items-start gap-4">
//                           <div className={`p-3 bg-gradient-to-br ${link.color} rounded-xl text-white flex-shrink-0`}>
//                             {link.icon}
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="text-lg font-bold text-gray-800 mb-1">{link.title}</h3>
//                             <p className="text-sm text-gray-600 mb-1">{link.subtitle}</p>
//                             <p className="text-sm font-semibold text-gray-700">{link.detail}</p>
//                           </div>
//                         </div>
//                       </div>
//                   ))}
//                 </div>
//
//                 {/* Social Media */}
//                 <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
//                   <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//                   <p className="text-blue-100 mb-6">Stay connected with us on social media</p>
//                   <div className="flex gap-4">
//                     {[
//                       { icon: <Facebook className="w-6 h-6" />, name: 'Facebook' },
//                       { icon: <Twitter className="w-6 h-6" />, name: 'Twitter' },
//                       { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn' },
//                       { icon: <Instagram className="w-6 h-6" />, name: 'Instagram' }
//                     ].map((social, index) => (
//                         <button
//                             key={index}
//                             className="p-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
//                             aria-label={social.name}
//                         >
//                           {social.icon}
//                         </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//
//         {/* Map Section */}
//         <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Our Location</span>
//               </h2>
//               <p className="text-xl text-gray-600">Find us at our headquarters in Blida, Algeria</p>
//             </div>
//
//             <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
//               <div className="h-96 lg:h-[500px]">
//                 <iframe
//                     title="Healthcare Location Blida"
//                     width="100%"
//                     height="100%"
//                     frameBorder="0"
//                     scrolling="no"
//                     marginHeight="0"
//                     marginWidth="0"
//                     src="https://maps.google.com/maps?q=Blida,+Algeria&z=13&output=embed"
//                     className="border-0"
//                     allowFullScreen
//                     loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </section>
//
//         {/* FAQ Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-4xl font-bold text-gray-800 mb-4">
//                 Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
//               </h2>
//               <p className="text-xl text-gray-600">Quick answers to common questions</p>
//             </div>
//
//             <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//               {[
//                 { q: 'What are your response times?', a: 'We typically respond to inquiries within 24 hours during business days.' },
//                 { q: 'Do you offer emergency support?', a: 'Yes, our 24/7 emergency line is available at +1 (800) 765-4321.' },
//                 { q: 'Can I schedule an in-person visit?', a: 'Absolutely! Contact us to schedule an appointment at our Blida office.' },
//                 { q: 'How secure is my information?', a: 'We use HIPAA-compliant encryption and security measures to protect your data.' }
//               ].map((faq, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
//                     <div className="flex items-start gap-3">
//                       <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
//                         <AlertCircle className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
//                         <p className="text-gray-600">{faq.a}</p>
//                       </div>
//                     </div>
//                   </div>
//               ))}
//             </div>
//           </div>
//         </section>
//
//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-4xl font-bold text-white mb-6">
//               Still Have Questions?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Our support team is ready to help you 24/7
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                 Start Live Chat
//               </button>
//               <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
//                 Call Us Now
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//   );
// };
//
// export default ModernContactPage;
'use client'
import React, { useState } from 'react';
import Herosection from "@/components/newcomponents/contact/herosection.jsx";
import Mainsection from "@/components/newcomponents/contact/Mainsection.jsx";
import Faq from "@/components/newcomponents/contact/Faq.jsx";
const ModernContactPage = () => {
  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Herosection />
<Mainsection />
        <Faq />
      </div>
  );
};
export default ModernContactPage;