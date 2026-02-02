import React from "react";
import {

    ChevronRight,

} from 'lucide-react';
import Link from "next/link";
const articles = [
    {
        id: 1,
        title: "5 Tips for a Healthy Heart",
        excerpt: "Learn how to maintain cardiovascular health with simple daily habits.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        category: "Cardiology",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Importance of Regular Dental Checkups",
        excerpt: "Why regular dental visits are crucial for overall health.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400",
        category: "Dentistry",
        readTime: "4 min read"
    },
    {
        id: 3,
        title: "Managing Stress for Better Health",
        excerpt: "Effective techniques to reduce stress and improve wellbeing.",
        image: "https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?w=400",
        category: "Wellness",
        readTime: "6 min read"
    },
];


export  default  function BlogSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Insights</span>
                        </h2>
                        <p className="text-xl text-gray-600">Latest updates and health tips</p>
                    </div>
                    <Link href={'/blogs'} className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 transition-colors duration-200">
                        View All Articles <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                                    {article.category}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{article.readTime}</span>
                                    <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1 transition-colors duration-200">
                                        Read More <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}