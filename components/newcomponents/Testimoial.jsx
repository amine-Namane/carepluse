import React from "react";


export  default  function TestimonialsSection({testimonials}) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Patients Say</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trusted by thousands of patients worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                            <div className="flex text-yellow-400">
                                {'★'.repeat(testimonial.rating)}
                                <span className="text-gray-300">
                  {'★'.repeat(5 - testimonial.rating)}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
