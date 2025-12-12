import {CheckCircle} from "lucide-react";
import React, {useState} from "react";

export default function Timeline(){
    const timelineEvents = [
        {
            year: '2018',
            title: 'Foundation',
            description: 'HealthCare was founded with a vision to revolutionize healthcare access',
            achievements: ['Initial concept development', 'First round of funding secured'],
            icon: '🚀'
        },
        {
            year: '2019',
            title: 'Platform Launch',
            description: 'Launched our first version serving 1,000 early users',
            achievements: ['Beta release', 'First partnership with local clinics'],
            icon: '🎯'
        },
        {
            year: '2020',
            title: 'Growth Phase',
            description: 'Expanded services and user base during the pandemic',
            achievements: ['Remote consultation features', 'Mobile app launch'],
            icon: '📈'
        },
        {
            year: '2021',
            title: 'AI Integration',
            description: 'Introduced AI-powered diagnostics and health insights',
            achievements: ['Machine learning models', 'Predictive analytics'],
            icon: '🤖'
        },
        {
            year: '2022',
            title: 'Global Expansion',
            description: 'Expanded operations to 5+ countries',
            achievements: ['International partnerships', 'Multi-language support'],
            icon: '🌍'
        },
        {
            year: '2023',
            title: 'Innovation Leader',
            description: 'Recognized as healthcare technology leader',
            achievements: ['Industry awards', 'Research publications'],
            icon: '🏆'
        }
    ];
    const [activeTimeline, setActiveTimeline] = useState('all');

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Journey</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Milestones in revolutionizing healthcare technology
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

                    {/* Timeline events */}
                    <div className="space-y-12">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                {/* Event content */}
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="inline-block text-2xl mb-3">{event.icon}</div>
                                        <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                                        <p className="text-gray-600 mb-4">{event.description}</p>
                                        <ul className="space-y-1">
                                            {event.achievements.map((achievement, idx) => (
                                                <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>

                                {/* Empty spacer for alignment */}
                                <div className="w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}