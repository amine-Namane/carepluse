import {HelpCircle, MessageSquare, Phone, Video} from "lucide-react";
export default function Faq(){

    return(
        <>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600">Quick answers to common questions</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                q: 'What are your response times?',
                                a: 'We typically respond to inquiries within 4-6 hours during business days. Emergency queries are prioritized.'
                            },
                            {
                                q: 'Do you offer emergency support?',
                                a: 'Yes, our 24/7 emergency line is available at +213 555 987 654 for immediate medical assistance.'
                            },
                            {
                                q: 'Can I schedule an in-person visit?',
                                a: 'Absolutely! Contact us to schedule an appointment at our Blida office or use our online booking system.'
                            },
                            {
                                q: 'How secure is my information?',
                                a: 'We use HIPAA-compliant encryption and security measures to protect all patient data and communications.'
                            },
                            {
                                q: 'Do you offer video consultations?',
                                a: 'Yes, we provide secure video consultations for remote patients. Schedule through our website or app.'
                            },
                            {
                                q: 'What languages do you support?',
                                a: 'Our support team speaks Arabic, French, and English. All communications are available in these languages.'
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                                        <HelpCircle className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{faq.q}</h3>
                                        <p className="text-gray-600">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/*<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">*/}
            {/*    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">*/}
            {/*        <h2 className="text-4xl font-bold text-white mb-6">*/}
            {/*            Still Have Questions?*/}
            {/*        </h2>*/}
            {/*        <p className="text-xl text-blue-100 mb-8">*/}
            {/*            Our support team is ready to help you 24/7*/}
            {/*        </p>*/}
            {/*        <div className="flex flex-col sm:flex-row gap-4 justify-center">*/}
            {/*            <button*/}
            {/*                onClick={() => setShowLiveChat(true)}*/}
            {/*                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"*/}
            {/*            >*/}
            {/*                <MessageSquare className="w-5 h-5" />*/}
            {/*                Start Live Chat*/}
            {/*            </button>*/}
            {/*            <button*/}
            {/*                onClick={() => window.location.href = 'tel:+213555123456'}*/}
            {/*                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"*/}
            {/*            >*/}
            {/*                <Phone className="w-5 h-5" />*/}
            {/*                Call Us Now*/}
            {/*            </button>*/}
            {/*            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">*/}
            {/*                <Video className="w-5 h-5" />*/}
            {/*                Video Call*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*/!*</section>*/}
            </>
    )
}