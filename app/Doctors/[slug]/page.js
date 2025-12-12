// 'use client'
// import React, { useState, useEffect } from 'react';
// import {
//     ArrowLeft,
//     Clock,
//     Eye,
//     Heart,
//     Bookmark,
//     Share2,
//     Calendar,
//     User,
//     Tag,
//     ChevronRight,
//     Facebook,
//     Twitter,
//     Linkedin,
//     MessageSquare,
//     ThumbsUp,
//     Star,
//     Printer,
//     Download,
//     Copy,
//     BookOpen,
//     Navigation,
//     CheckCircle,
//     Moon,
//     Sun,
//     Mail,
//     ExternalLink,
//     TrendingUp
// } from 'lucide-react';
//
// const mockArticle = {
//     id: 1,
//     title: "5 Essential Tips for a Healthy Heart: A Comprehensive Guide",
//     excerpt: "Learn how to maintain cardiovascular health with simple daily habits and lifestyle changes that can significantly reduce your risk of heart disease.",
//     heroImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200",
//
//     author: {
//         name: "Dr. Sarah Johnson",
//         title: "Cardiologist & Heart Health Specialist",
//         bio: "15+ years of experience in cardiology and preventive medicine. Fellowship at Johns Hopkins Hospital.",
//         image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
//         credentials: "MD, FACC",
//         articles: 156,
//         rating: 4.9
//     },
//
//     category: "Cardiology",
//     readTime: "15 min read",
//     views: 12540,
//     likes: 342,
//     shares: 456,
//     date: "March 15, 2024",
//     lastUpdated: "March 20, 2024",
//
//     tags: ["Heart Health", "Prevention", "Lifestyle", "Cardiology", "Wellness", "Diet", "Exercise"],
//
//     sections: [
//         {
//             id: "introduction",
//             title: "Understanding Heart Health",
//             level: 1,
//             content: `Cardiovascular diseases remain the leading cause of death globally, but the good news is that most heart conditions are preventable with the right lifestyle choices. This comprehensive guide provides evidence-based strategies for maintaining optimal heart health.
//
// The heart is a remarkable organ that works tirelessly to pump blood throughout your body. Maintaining its health is crucial for overall wellbeing and longevity.`
//         },
//         {
//             id: "statistics",
//             title: "Key Statistics",
//             level: 2,
//             content: `• Cardiovascular diseases account for 32% of all global deaths
// • 80% of premature heart disease and stroke is preventable
// • Small lifestyle changes can reduce heart disease risk by up to 50%`
//         },
//         {
//             id: "tip-1",
//             title: "1. Regular Exercise",
//             level: 1,
//             content: `Regular physical activity strengthens your heart muscle, improves circulation, lowers blood pressure, and helps maintain a healthy weight.
//
// **Recommended Activities:**
// • Aerobic Exercise: 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity per week
// • Strength Training: 2 days per week focusing on major muscle groups
//
// **Quick Implementation Tips:**
// • Start with 10-minute sessions if you're new to exercise
// • Use a fitness tracker to monitor your progress
// • Incorporate activity into daily routines (take stairs, walk during calls)`
//         },
//         {
//             id: "tip-2",
//             title: "2. Heart-Healthy Diet",
//             level: 1,
//             content: `The Mediterranean Diet pattern consistently shows significant reduction in heart disease risk through research.
//
// **Essential Components:**
// • Fruits and Vegetables: 5-9 servings daily, rich in antioxidants and fiber
// • Whole Grains: Oats, quinoa, brown rice - rich in soluble fiber
// • Healthy Fats: Olive oil, avocado, nuts, omega-3 from fish
// • Lean Proteins: Fish, skinless poultry, legumes and beans
//
// **Foods to Limit:**
// Processed foods, added sugars, excessive salt, and red meat should be consumed in moderation.`
//         },
//         {
//             id: "tip-3",
//             title: "3. Stress Management",
//             level: 1,
//             content: `Chronic stress increases cortisol levels, raises blood pressure, and can lead to unhealthy coping behaviors.
//
// **Effective Techniques:**
// • Mindfulness Meditation: 10-20 minutes daily reduces blood pressure
// • Deep Breathing Exercises: 4-7-8 technique, box breathing
// • Other Activities: Yoga, tai chi, journaling, nature walks, quality time with loved ones`
//         },
//         {
//             id: "tip-4",
//             title: "4. Regular Health Checkups",
//             level: 1,
//             content: `**Essential Screenings:**
// • Blood Pressure: Check at least once every 2 years (Normal: <120/80 mmHg)
// • Cholesterol Levels: Test every 4-6 years (Ideal LDL: <100 mg/dL)
// • Blood Sugar: Annual screening after age 45 (Normal fasting: <100 mg/dL)
// • Body Mass Index: Calculate annually (Healthy range: 18.5-24.9)`
//         },
//         {
//             id: "tip-5",
//             title: "5. Quality Sleep",
//             level: 1,
//             content: `Poor sleep increases inflammation, raises blood pressure, and disrupts metabolism. Aim for 7-8 hours of quality sleep per night.
//
// **Sleep Hygiene Tips:**
// • Maintain a consistent sleep schedule
// • Create a cool, dark, quiet sleep environment
// • Avoid electronics 1 hour before bed
// • Establish a relaxing pre-sleep routine`
//         },
//         {
//             id: "action-plan",
//             title: "Your Action Plan",
//             level: 1,
//             content: `**Week 1-2: Foundation Building**
// • Start with 10-minute daily walks
// • Add one vegetable to each meal
// • Practice deep breathing 5 minutes daily
// • Schedule your annual checkup
//
// **Week 3-4: Habit Formation**
// • Increase exercise to 20 minutes
// • Try one new heart-healthy recipe
// • Begin meditation practice
// • Track your sleep patterns
//
// **Month 2-3: Lifestyle Integration**
// • Join a fitness class or group
// • Meal prep for the week
// • Establish consistent sleep schedule
// • Share your journey with a friend`
//         }
//     ],
//
//     stats: {
//         readingLevel: "Intermediate",
//         accuracy: "98%",
//         references: 12
//     },
//
//     references: [
//         "American Heart Association. (2023). Heart Disease and Stroke Statistics.",
//         "New England Journal of Medicine. (2024). Mediterranean Diet and Cardiovascular Outcomes.",
//         "Journal of the American College of Cardiology. (2023). Exercise and Heart Health.",
//         "Sleep Medicine Reviews. (2024). Sleep Duration and Cardiovascular Risk."
//     ],
//
//     relatedArticles: [
//         {
//             id: 2,
//             title: "Understanding Blood Pressure: Complete Guide",
//             excerpt: "Learn to monitor and manage blood pressure for optimal heart health.",
//             image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
//             readTime: "8 min",
//             category: "Cardiology"
//         },
//         {
//             id: 3,
//             title: "Stress Management Techniques",
//             excerpt: "Evidence-based strategies for reducing stress and anxiety.",
//             image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
//             readTime: "6 min",
//             category: "Mental Health"
//         },
//         {
//             id: 4,
//             title: "Nutrition for Heart Health",
//             excerpt: "Detailed nutritional guidelines for cardiovascular wellness.",
//             image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
//             readTime: "10 min",
//             category: "Nutrition"
//         }
//     ]
// };
//
// const mockComments = [
//     {
//         id: 1,
//         author: "Michael Chen",
//         avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
//         date: "2 days ago",
//         content: "Excellent article! I've been following these tips for 3 months and already seeing improvements in my energy levels and overall health.",
//         likes: 24
//     },
//     {
//         id: 2,
//         author: "Emma Rodriguez",
//         avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
//         date: "1 week ago",
//         content: "The action plan section is particularly helpful. Breaking it down week by week makes it much less overwhelming.",
//         likes: 18
//     }
// ];
//
// export default function ArticleDetailPage() {
//     const [isLiked, setIsLiked] = useState(false);
//     const [isBookmarked, setIsBookmarked] = useState(false);
//     const [shareMenuOpen, setShareMenuOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     const [activeSection, setActiveSection] = useState('');
//     const [showCommentForm, setShowCommentForm] = useState(false);
//     const [comment, setComment] = useState('');
//     const [readingProgress, setReadingProgress] = useState(0);
//     const [comments, setComments] = useState(mockComments);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             const windowHeight = window.innerHeight;
//             const documentHeight = document.documentElement.scrollHeight;
//             const scrollTop = window.scrollY;
//             const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
//             setReadingProgress(Math.min(progress, 100));
//
//             const sections = mockArticle.sections.map(section => {
//                 const element = document.getElementById(section.id);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     return { id: section.id, top: Math.abs(rect.top) };
//                 }
//                 return null;
//             }).filter(Boolean);
//
//             const current = sections.reduce((prev, curr) =>
//                 curr.top < prev.top ? curr : prev
//             );
//
//             if (current) setActiveSection(current.id);
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);
//
//     const handleShare = (platform) => {
//         const url = window.location.href;
//         const text = mockArticle.title;
//
//         const urls = {
//             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//             twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
//             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
//         };
//
//         if (platform === 'copy') {
//             navigator.clipboard.writeText(url);
//             alert('Link copied!');
//         } else {
//             window.open(urls[platform], '_blank');
//         }
//         setShareMenuOpen(false);
//     };
//
//     const scrollToSection = (id) => {
//         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     };
//
//     const handleSubmitComment = () => {
//         if (comment.trim()) {
//             const newComment = {
//                 id: comments.length + 1,
//                 author: "You",
//                 avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
//                 date: "Just now",
//                 content: comment,
//                 likes: 0
//             };
//             setComments([newComment, ...comments]);
//             setComment('');
//             setShowCommentForm(false);
//         }
//     };
//
//     return (
//         <div className={`min-h-screen transition-colors duration-300 ${
//             darkMode ? 'bg-gray-900' : 'bg-gray-50'
//         }`}>
//             {/* Reading Progress Bar */}
//             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
//                 <div
//                     className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
//                     style={{ width: `${readingProgress}%` }}
//                 />
//             </div>
//
//             {/* Header */}
//             <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
//                 darkMode
//                     ? 'bg-gray-900/95 border-gray-800'
//                     : 'bg-white/95 border-gray-200'
//             }`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex items-center justify-between h-16">
//                         <button
//                             onClick={() => window.history.back()}
//                             className={`flex items-center gap-2 font-medium transition-colors ${
//                                 darkMode
//                                     ? 'text-gray-300 hover:text-white'
//                                     : 'text-gray-600 hover:text-gray-900'
//                             }`}
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                             Back
//                         </button>
//
//                         <div className="flex items-center gap-2">
//                             <button
//                                 onClick={() => setDarkMode(!darkMode)}
//                                 className={`p-2 rounded-lg transition-colors ${
//                                     darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//                                 }`}
//                             >
//                                 {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
//                             </button>
//
//                             <button
//                                 onClick={() => setIsBookmarked(!isBookmarked)}
//                                 className={`p-2 rounded-lg transition-colors ${
//                                     darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//                                 }`}
//                             >
//                                 <Bookmark className={`w-5 h-5 ${
//                                     isBookmarked
//                                         ? 'fill-blue-500 text-blue-500'
//                                         : darkMode ? 'text-gray-300' : 'text-gray-600'
//                                 }`} />
//                             </button>
//
//                             <div className="relative">
//                                 <button
//                                     onClick={() => setShareMenuOpen(!shareMenuOpen)}
//                                     className={`p-2 rounded-lg transition-colors ${
//                                         darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
//                                     }`}
//                                 >
//                                     <Share2 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
//                                 </button>
//
//                                 {shareMenuOpen && (
//                                     <div className={`absolute right-0 mt-2 w-56 rounded-xl shadow-2xl border overflow-hidden ${
//                                         darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
//                                     }`}>
//                                         {[
//                                             { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', action: 'facebook', color: 'text-blue-600' },
//                                             { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', action: 'twitter', color: 'text-sky-500' },
//                                             { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', action: 'linkedin', color: 'text-blue-700' },
//                                             { icon: <Copy className="w-5 h-5" />, label: 'Copy Link', action: 'copy', color: darkMode ? 'text-gray-300' : 'text-gray-600' }
//                                         ].map((item, idx) => (
//                                             <button
//                                                 key={idx}
//                                                 onClick={() => handleShare(item.action)}
//                                                 className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
//                                                     darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
//                                                 }`}
//                                             >
//                                                 <span className={item.color}>{item.icon}</span>
//                                                 <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{item.label}</span>
//                                             </button>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//
//             {/* Hero Section */}
//             <div className="relative h-[60vh] min-h-[400px] max-h-[600px]">
//                 <img
//                     src={mockArticle.heroImage}
//                     alt={mockArticle.title}
//                     className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
//
//                 <div className="absolute bottom-0 left-0 right-0">
//                     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
//                         <div className="flex flex-wrap items-center gap-3 mb-4">
//               <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
//                 {mockArticle.category}
//               </span>
//                             <span className="text-white/90 text-sm flex items-center gap-1">
//                 <Calendar className="w-4 h-4" />
//                                 {mockArticle.date}
//               </span>
//                             <span className="text-white/90 text-sm flex items-center gap-1">
//                 <Clock className="w-4 h-4" />
//                                 {mockArticle.readTime}
//               </span>
//                         </div>
//
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//                             {mockArticle.title}
//                         </h1>
//
//                         <p className="text-xl text-white/90 mb-6 max-w-3xl">
//                             {mockArticle.excerpt}
//                         </p>
//
//                         <div className="flex flex-wrap items-center gap-4">
//                             <div className="flex items-center gap-3">
//                                 <img
//                                     src={mockArticle.author.image}
//                                     alt={mockArticle.author.name}
//                                     className="w-12 h-12 rounded-full border-2 border-white"
//                                 />
//                                 <div>
//                                     <div className="text-white font-semibold">{mockArticle.author.name}</div>
//                                     <div className="text-white/80 text-sm">{mockArticle.author.credentials}</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//                 <div className="grid lg:grid-cols-12 gap-8">
//                     {/* Sidebar - Table of Contents */}
//                     <aside className="lg:col-span-3 space-y-6">
//                         <div className={`sticky top-24 rounded-xl p-6 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
//                                 darkMode ? 'text-white' : 'text-gray-900'
//                             }`}>
//                                 <Navigation className="w-5 h-5" />
//                                 Contents
//                             </h3>
//                             <nav className="space-y-1">
//                                 {mockArticle.sections.map((section) => (
//                                     <button
//                                         key={section.id}
//                                         onClick={() => scrollToSection(section.id)}
//                                         className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
//                                             activeSection === section.id
//                                                 ? 'bg-blue-50 text-blue-600 font-medium dark:bg-blue-900/30 dark:text-blue-400'
//                                                 : darkMode
//                                                     ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
//                                                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                                         }`}
//                                         style={{ paddingLeft: `${section.level * 12 + 12}px` }}
//                                     >
//                                         {section.title}
//                                     </button>
//                                 ))}
//                             </nav>
//                         </div>
//
//                         {/* Article Stats */}
//                         <div className={`rounded-xl p-6 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                 Article Stats
//                             </h3>
//                             <div className="space-y-3">
//                                 {[
//                                     { icon: <Eye className="w-4 h-4" />, label: "Views", value: mockArticle.views.toLocaleString() },
//                                     { icon: <Heart className="w-4 h-4" />, label: "Likes", value: mockArticle.likes },
//                                     { icon: <Share2 className="w-4 h-4" />, label: "Shares", value: mockArticle.shares },
//                                     { icon: <CheckCircle className="w-4 h-4" />, label: "Accuracy", value: mockArticle.stats.accuracy }
//                                 ].map((stat, idx) => (
//                                     <div key={idx} className="flex items-center justify-between">
//                                         <div className={`flex items-center gap-2 text-sm ${
//                                             darkMode ? 'text-gray-400' : 'text-gray-600'
//                                         }`}>
//                                             {stat.icon}
//                                             <span>{stat.label}</span>
//                                         </div>
//                                         <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                       {stat.value}
//                     </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </aside>
//
//                     {/* Main Content */}
//                     <main className="lg:col-span-6">
//                         {/* Author Card */}
//                         <div className={`rounded-xl p-6 mb-8 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <div className="flex items-start gap-4">
//                                 <img
//                                     src={mockArticle.author.image}
//                                     alt={mockArticle.author.name}
//                                     className="w-16 h-16 rounded-full"
//                                 />
//                                 <div className="flex-1">
//                                     <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                         {mockArticle.author.name}
//                                     </h3>
//                                     <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                                         {mockArticle.author.title}
//                                     </p>
//                                     <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                                         {mockArticle.author.bio}
//                                     </p>
//                                     <div className="flex items-center gap-4 text-sm">
//                     <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                       <CheckCircle className="w-4 h-4 text-green-500" />
//                       Verified
//                     </span>
//                                         <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                       <Star className="w-4 h-4 text-yellow-500" />
//                                             {mockArticle.author.rating}/5
//                     </span>
//                                         <span className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                       <BookOpen className="w-4 h-4 text-blue-500" />
//                                             {mockArticle.author.articles} articles
//                     </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap gap-3 mb-8">
//                             <button
//                                 onClick={() => setIsLiked(!isLiked)}
//                                 className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
//                                     isLiked
//                                         ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
//                                         : darkMode
//                                             ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                                             : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                 }`}
//                             >
//                                 <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
//                                 {isLiked ? 'Liked' : 'Like'} ({mockArticle.likes + (isLiked ? 1 : 0)})
//                             </button>
//
//                             <button
//                                 onClick={() => window.print()}
//                                 className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//                                     darkMode
//                                         ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                 }`}
//                             >
//                                 <Printer className="w-5 h-5" />
//                                 Print
//                             </button>
//
//                             <button
//                                 className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
//                                     darkMode
//                                         ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                 }`}
//                             >
//                                 <Download className="w-5 h-5" />
//                                 Save
//                             </button>
//                         </div>
//
//                         {/* Article Content */}
//                         <article className={`rounded-xl p-8 mb-8 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <div className="prose prose-lg max-w-none dark:prose-invert">
//                                 {mockArticle.sections.map((section) => (
//                                     <div key={section.id} id={section.id} className="scroll-mt-24 mb-8">
//                                         {section.level === 1 && (
//                                             <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                 {section.title}
//                                             </h2>
//                                         )}
//                                         {section.level === 2 && (
//                                             <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                 {section.title}
//                                             </h3>
//                                         )}
//                                         <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed whitespace-pre-line`}>
//                                             {section.content}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </article>
//
//                         {/* Tags */}
//                         <div className="mb-8">
//                             <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                 Topics
//                             </h3>
//                             <div className="flex flex-wrap gap-2">
//                                 {mockArticle.tags.map((tag, idx) => (
//                                     <span
//                                         key={idx}
//                                         className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition-colors ${
//                                             darkMode
//                                                 ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//                                                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                         }`}
//                                     >
//                     {tag}
//                   </span>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* References */}
//                         <div className={`rounded-xl p-6 mb-8 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
//                                 darkMode ? 'text-white' : 'text-gray-900'
//                             }`}>
//                                 <BookOpen className="w-5 h-5" />
//                                 References
//                             </h3>
//                             <div className="space-y-2">
//                                 {mockArticle.references.map((ref, idx) => (
//                                     <div
//                                         key={idx}
//                                         className={`text-sm p-3 rounded-lg ${
//                                             darkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-gray-50 text-gray-700'
//                                         }`}
//                                     >
//                                         {idx + 1}. {ref}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Comments Section */}
//                         <div className={`rounded-xl p-6 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${
//                                 darkMode ? 'text-white' : 'text-gray-900'
//                             }`}>
//                                 <MessageSquare className="w-5 h-5" />
//                                 Discussion ({comments.length})
//                             </h3>
//
//                             {!showCommentForm ? (
//                                 <button
//                                     onClick={() => setShowCommentForm(true)}
//                                     className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
//                                 >
//                                     Share your thoughts
//                                 </button>
//                             ) : (
//                                 <div className="mb-6">
//                   <textarea
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                       placeholder="Add to the discussion..."
//                       className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:border-blue-500 resize-none ${
//                           darkMode
//                               ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
//                               : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
//                       }`}
//                       rows="4"
//                   />
//                                     <div className="flex justify-end gap-2 mt-3">
//                                         <button
//                                             onClick={() => {
//                                                 setShowCommentForm(false);
//                                                 setComment('');
//                                             }}
//                                             className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                                                 darkMode
//                                                     ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                                                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                                             }`}
//                                         >
//                                             Cancel
//                                         </button>
//                                         <button
//                                             onClick={handleSubmitComment}
//                                             disabled={!comment.trim()}
//                                             className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//                                                 comment.trim()
//                                                     ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
//                                                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                             }`}
//                                         >
//                                             Post Comment
//                                         </button>
//                                     </div>
//                                 </div>
//                             )}
//
//                             {/* Comments List */}
//                             <div className="mt-6 space-y-6">
//                                 {comments.map((c) => (
//                                     <div key={c.id} className={`p-4 rounded-lg ${
//                                         darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
//                                     }`}>
//                                         <div className="flex items-start gap-3">
//                                             <img
//                                                 src={c.avatar}
//                                                 alt={c.author}
//                                                 className="w-10 h-10 rounded-full"
//                                             />
//                                             <div className="flex-1">
//                                                 <div className="flex items-center justify-between mb-1">
//                                                     <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                                         {c.author}
//                                                     </h4>
//                                                     <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                             {c.date}
//                           </span>
//                                                 </div>
//                                                 <p className={`mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                                                     {c.content}
//                                                 </p>
//                                                 <button className={`flex items-center gap-1 text-sm transition-colors ${
//                                                     darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
//                                                 }`}>
//                                                     <ThumbsUp className="w-4 h-4" />
//                                                     <span>{c.likes}</span>
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </main>
//
//                     {/* Right Sidebar - Related Articles */}
//                     <aside className="lg:col-span-3 space-y-6">
//                         <div className={`rounded-xl p-6 ${
//                             darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
//                         }`}>
//                             <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${
//                                 darkMode ? 'text-white' : 'text-gray-900'
//                             }`}>
//                                 <TrendingUp className="w-5 h-5" />
//                                 Related Articles
//                             </h3>
//                             <div className="space-y-4">
//                                 {mockArticle.relatedArticles.map((article) => (
//                                     <div
//                                         key={article.id}
//                                         className={`group cursor-pointer rounded-lg overflow-hidden transition-all hover:shadow-lg ${
//                                             darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
//                                         }`}
//                                     >
//                                         <img
//                                             src={article.image}
//                                             alt={article.title}
//                                             className="w-full h-32 object-cover"
//                                         />
//                                         <div className="p-3">
//                                             <div className="flex items-center gap-2 mb-2">
//                         <span className={`text-xs px-2 py-1 rounded-full ${
//                             darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
//                         }`}>
//                           {article.category}
//                         </span>
//                                                 <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                           {article.readTime}
//                         </span>
//                                             </div>
//                                             <h4 className={`font-semibold mb-1 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors ${
//                                                 darkMode ? 'text-white' : 'text-gray-900'
//                                             }`}>
//                                                 {article.title}
//                                             </h4>
//                                             <p className={`text-xs line-clamp-2 ${
//                                                 darkMode ? 'text-gray-400' : 'text-gray-600'
//                                             }`}>
//                                                 {article.excerpt}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {/* Newsletter signup */}
//                         <div className={`rounded-xl p-6 ${
//                             darkMode ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'
//                         }`}>
//                             <Mail className={`w-8 h-8 mb-3 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
//                             <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                                 Stay Updated
//                             </h3>
//                             <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                                 Get the latest health articles delivered to your inbox weekly.
//                             </p>
//                             <input
//                                 type="email"
//                                 placeholder="Your email"
//                                 className={`w-full px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                                     darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white border border-gray-200'
//                                 }`}
//                             />
//                             <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all">
//                                 Subscribe
//                             </button>
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//
//             {/* Footer */}
//             <footer className={`border-t mt-16 ${
//                 darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
//             }`}>
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                     <div className="text-center">
//                         <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                             Last updated: {mockArticle.lastUpdated} • Medical review by {mockArticle.author.name}
//                         </p>
//                         <div className="flex justify-center gap-4 mt-4">
//                             <button className={`text-sm hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                                 Report Issue
//                             </button>
//                             <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>•</span>
//                             <button className={`text-sm hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                                 Suggest Edit
//                             </button>
//                             <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>•</span>
//                             <button className={`text-sm hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                                 Feedback
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// }
// // 'use client'
// // import React, { useState, useEffect, useRef } from 'react';
// // import {
// //     ArrowLeft,
// //     Clock,
// //     Eye,
// //     Heart,
// //     Bookmark,
// //     Share2,
// //     Calendar,
// //     Navigation,
// //     CheckCircle,
// //     Moon,
// //     Sun,
// //     Facebook,
// //     Twitter,
// //     Linkedin,
// //     Copy,
// //     BookOpen,
// //     MessageSquare,
// //     ThumbsUp,
// //     Star,
// //     Printer,
// //     Download,
// //     Mail,
// //     TrendingUp,
// //     ExternalLink,
// //     ChevronRight,
// //     ChevronDown
// // } from 'lucide-react';
// //
// // // NOTE: This is an improved, self-contained single-file React component
// // // - Better accessible controls
// // // - Persistent dark mode (localStorage + prefers-color-scheme fallback)
// // // - IntersectionObserver for robust active section detection
// // // - Collapsible mobile Table of Contents
// // // - Cleaner visual hierarchy, spacing and subtle animations
// // // - Small UX niceties (back-to-top, copy link toast, keyboard friendly)
// //
// // const mockArticle = {
// //     id: 1,
// //     title: "5 Essential Tips for a Healthy Heart: A Comprehensive Guide",
// //     excerpt: "Learn how to maintain cardiovascular health with simple daily habits and lifestyle changes that can significantly reduce your risk of heart disease.",
// //     heroImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200",
// //
// //     author: {
// //         name: "Dr. Sarah Johnson",
// //         title: "Cardiologist & Heart Health Specialist",
// //         bio: "15+ years of experience in cardiology and preventive medicine. Fellowship at Johns Hopkins Hospital.",
// //         image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
// //         credentials: "MD, FACC",
// //         articles: 156,
// //         rating: 4.9
// //     },
// //
// //     category: "Cardiology",
// //     readTime: "15 min read",
// //     views: 12540,
// //     likes: 342,
// //     shares: 456,
// //     date: "March 15, 2024",
// //     lastUpdated: "March 20, 2024",
// //
// //     tags: ["Heart Health", "Prevention", "Lifestyle", "Cardiology", "Wellness", "Diet", "Exercise"],
// //
// //     sections: [
// //         {
// //             id: "introduction",
// //             title: "Understanding Heart Health",
// //             level: 1,
// //             content: `Cardiovascular diseases remain the leading cause of death globally, but the good news is that most heart conditions are preventable with the right lifestyle choices. This comprehensive guide provides evidence-based strategies for maintaining optimal heart health.
// //
// // The heart is a remarkable organ that works tirelessly to pump blood throughout your body. Maintaining its health is crucial for overall wellbeing and longevity.`
// //         },
// //         {
// //             id: "statistics",
// //             title: "Key Statistics",
// //             level: 2,
// //             content: `• Cardiovascular diseases account for 32% of all global deaths
// // • 80% of premature heart disease and stroke is preventable
// // • Small lifestyle changes can reduce heart disease risk by up to 50%`
// //         },
// //         {
// //             id: "tip-1",
// //             title: "1. Regular Exercise",
// //             level: 1,
// //             content: `Regular physical activity strengthens your heart muscle, improves circulation, lowers blood pressure, and helps maintain a healthy weight.
// //
// // **Recommended Activities:**
// // • Aerobic Exercise: 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity per week
// // • Strength Training: 2 days per week focusing on major muscle groups
// //
// // **Quick Implementation Tips:**
// // • Start with 10-minute sessions if you're new to exercise
// // • Use a fitness tracker to monitor your progress
// // • Incorporate activity into daily routines (take stairs, walk during calls)`
// //         },
// //         {
// //             id: "tip-2",
// //             title: "2. Heart-Healthy Diet",
// //             level: 1,
// //             content: `The Mediterranean Diet pattern consistently shows significant reduction in heart disease risk through research.
// //
// // **Essential Components:**
// // • Fruits and Vegetables: 5-9 servings daily, rich in antioxidants and fiber
// // • Whole Grains: Oats, quinoa, brown rice - rich in soluble fiber
// // • Healthy Fats: Olive oil, avocado, nuts, omega-3 from fish
// // • Lean Proteins: Fish, skinless poultry, legumes and beans
// //
// // **Foods to Limit:**
// // Processed foods, added sugars, excessive salt, and red meat should be consumed in moderation.`
// //         },
// //         {
// //             id: "tip-3",
// //             title: "3. Stress Management",
// //             level: 1,
// //             content: `Chronic stress increases cortisol levels, raises blood pressure, and can lead to unhealthy coping behaviors.
// //
// // **Effective Techniques:**
// // • Mindfulness Meditation: 10-20 minutes daily reduces blood pressure
// // • Deep Breathing Exercises: 4-7-8 technique, box breathing
// // • Other Activities: Yoga, tai chi, journaling, nature walks, quality time with loved ones`
// //         },
// //         {
// //             id: "tip-4",
// //             title: "4. Regular Health Checkups",
// //             level: 1,
// //             content: `**Essential Screenings:**
// // • Blood Pressure: Check at least once every 2 years (Normal: <120/80 mmHg)
// // • Cholesterol Levels: Test every 4-6 years (Ideal LDL: <100 mg/dL)
// // • Blood Sugar: Annual screening after age 45 (Normal fasting: <100 mg/dL)
// // • Body Mass Index: Calculate annually (Healthy range: 18.5-24.9)`
// //         },
// //         {
// //             id: "tip-5",
// //             title: "5. Quality Sleep",
// //             level: 1,
// //             content: `Poor sleep increases inflammation, raises blood pressure, and disrupts metabolism. Aim for 7-8 hours of quality sleep per night.
// //
// // **Sleep Hygiene Tips:**
// // • Maintain a consistent sleep schedule
// // • Create a cool, dark, quiet sleep environment
// // • Avoid electronics 1 hour before bed
// // • Establish a relaxing pre-sleep routine`
// //         },
// //         {
// //             id: "action-plan",
// //             title: "Your Action Plan",
// //             level: 1,
// //             content: `**Week 1-2: Foundation Building**
// // • Start with 10-minute daily walks
// // • Add one vegetable to each meal
// // • Practice deep breathing 5 minutes daily
// // • Schedule your annual checkup
// //
// // **Week 3-4: Habit Formation**
// // • Increase exercise to 20 minutes
// // • Try one new heart-healthy recipe
// // • Begin meditation practice
// // • Track your sleep patterns
// //
// // **Month 2-3: Lifestyle Integration**
// // • Join a fitness class or group
// // • Meal prep for the week
// // • Establish consistent sleep schedule
// // • Share your journey with a friend`
// //         }
// //     ],
// //
// //     stats: {
// //         readingLevel: "Intermediate",
// //         accuracy: "98%",
// //         references: 12
// //     },
// //
// //     references: [
// //         "American Heart Association. (2023). Heart Disease and Stroke Statistics.",
// //         "New England Journal of Medicine. (2024). Mediterranean Diet and Cardiovascular Outcomes.",
// //         "Journal of the American College of Cardiology. (2023). Exercise and Heart Health.",
// //         "Sleep Medicine Reviews. (2024). Sleep Duration and Cardiovascular Risk."
// //     ],
// //
// //     relatedArticles: [
// //         {
// //             id: 2,
// //             title: "Understanding Blood Pressure: Complete Guide",
// //             excerpt: "Learn to monitor and manage blood pressure for optimal heart health.",
// //             image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
// //             readTime: "8 min",
// //             category: "Cardiology"
// //         },
// //         {
// //             id: 3,
// //             title: "Stress Management Techniques",
// //             excerpt: "Evidence-based strategies for reducing stress and anxiety.",
// //             image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
// //             readTime: "6 min",
// //             category: "Mental Health"
// //         },
// //         {
// //             id: 4,
// //             title: "Nutrition for Heart Health",
// //             excerpt: "Detailed nutritional guidelines for cardiovascular wellness.",
// //             image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
// //             readTime: "10 min",
// //             category: "Nutrition"
// //         }
// //     ]
// // };
// //
// // const mockComments = [
// //     {
// //         id: 1,
// //         author: "Michael Chen",
// //         avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
// //         date: "2 days ago",
// //         content: "Excellent article! I've been following these tips for 3 months and already seeing improvements in my energy levels and overall health.",
// //         likes: 24
// //     },
// //     {
// //         id: 2,
// //         author: "Emma Rodriguez",
// //         avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
// //         date: "1 week ago",
// //         content: "The action plan section is particularly helpful. Breaking it down week by week makes it much less overwhelming.",
// //         likes: 18
// //     }
// // ];
// //
// // export default function ArticleDetailPageImproved({ article = null }) {
// //     // allow passing article as prop for reusability; fall back to the original mock when not provided
// //     const data = article || mockArticle;
// //
// //     const [isLiked, setIsLiked] = useState(false);
// //     const [isBookmarked, setIsBookmarked] = useState(false);
// //     const [shareMenuOpen, setShareMenuOpen] = useState(false);
// //     const [darkMode, setDarkMode] = useState(() => {
// //         try {
// //             const saved = localStorage.getItem('site-dark-mode');
// //             if (saved !== null) return saved === 'true';
// //             return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// //         } catch (e) {
// //             return false;
// //         }
// //     });
// //     const [activeSection, setActiveSection] = useState('');
// //     const [showCommentForm, setShowCommentForm] = useState(false);
// //     const [comment, setComment] = useState('');
// //     const [readingProgress, setReadingProgress] = useState(0);
// //     const [comments, setComments] = useState([]);
// //     const [tocOpenMobile, setTocOpenMobile] = useState(false);
// //     const containerRef = useRef(null);
// //     const sectionsRef = useRef({});
// //
// //     // hydrate comments lazily from article if available
// //     useEffect(() => {
// //         if (data && data.comments) setComments(data.comments);
// //         else setComments([
// //             { id: 1, author: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', date: '2 days ago', content: "Excellent article!", likes: 24 },
// //             { id: 2, author: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', date: '1 week ago', content: 'Helpful action plan.', likes: 18 }
// //         ]);
// //     }, [data]);
// //
// //     useEffect(() => {
// //         localStorage.setItem('site-dark-mode', darkMode);
// //     }, [darkMode]);
// //
// //     // Reading progress using scroll + throttling
// //     useEffect(() => {
// //         let raf = null;
// //         const onScroll = () => {
// //             if (raf) cancelAnimationFrame(raf);
// //             raf = requestAnimationFrame(() => {
// //                 const scrollTop = window.scrollY || window.pageYOffset;
// //                 const docHeight = document.documentElement.scrollHeight - window.innerHeight;
// //                 const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
// //                 setReadingProgress(Math.min(100, Math.max(0, pct)));
// //             });
// //         };
// //
// //         window.addEventListener('scroll', onScroll, { passive: true });
// //         onScroll();
// //         return () => {
// //             window.removeEventListener('scroll', onScroll);
// //             if (raf) cancelAnimationFrame(raf);
// //         };
// //     }, []);
// //
// //     // IntersectionObserver for active section
// //     useEffect(() => {
// //         if (!data || !data.sections) return;
// //         const observer = new IntersectionObserver(
// //             (entries) => {
// //                 const visible = entries
// //                     .filter((e) => e.isIntersecting)
// //                     .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
// //                 if (visible) setActiveSection(visible.target.id);
// //             },
// //             { root: null, rootMargin: '0px 0px -40% 0px', threshold: [0.1, 0.3, 0.6, 0.9] }
// //         );
// //
// //         data.sections.forEach((s) => {
// //             const el = document.getElementById(s.id);
// //             if (el) observer.observe(el);
// //         });
// //
// //         return () => observer.disconnect();
// //     }, [data, darkMode]);
// //
// //     const scrollToSection = (id) => {
// //         const el = document.getElementById(id);
// //         if (!el) return;
// //         el.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //         // if mobile, close TOC
// //         setTocOpenMobile(false);
// //     };
// //
// //     const handleShare = (platform) => {
// //         const url = typeof window !== 'undefined' ? window.location.href : '';
// //         const text = data?.title || '';
// //         const urls = {
// //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
// //             twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
// //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
// //         };
// //
// //         if (platform === 'copy') {
// //             navigator.clipboard.writeText(url).then(() => {
// //                 // small accessible alert - use aria-live
// //                 const notice = document.createElement('div');
// //                 notice.setAttribute('role', 'status');
// //                 notice.className = 'sr-only';
// //                 notice.innerText = 'Link copied to clipboard';
// //                 document.body.appendChild(notice);
// //                 setTimeout(() => document.body.removeChild(notice), 1500);
// //             });
// //         } else {
// //             window.open(urls[platform], '_blank', 'noopener');
// //         }
// //         setShareMenuOpen(false);
// //     };
// //
// //     const handleSubmitComment = () => {
// //         if (!comment.trim()) return;
// //         const newComment = { id: Date.now(), author: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', date: 'Just now', content: comment.trim(), likes: 0 };
// //         setComments((c) => [newComment, ...c]);
// //         setComment('');
// //         setShowCommentForm(false);
// //     };
// //
// //     const toggleDark = () => setDarkMode((d) => !d);
// //
// //     // light/dark wrapper class
// //     const rootBg = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900';
// //     const cardBg = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
// //
// //     return (
// //         <div className={`${rootBg} min-h-screen transition-colors duration-300`} ref={containerRef}>
// //             {/* progress */}
// //             <div className="fixed left-0 top-0 z-50 w-full h-1 bg-transparent">
// //                 <div
// //                     className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200"
// //                     style={{ width: `${readingProgress}%` }}
// //                     aria-hidden
// //                 />
// //             </div>
// //
// //             {/* header */}
// //             <header className={`sticky top-0 z-40 backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                     <div className="flex items-center justify-between h-16">
// //                         <div className="flex items-center gap-3">
// //                             <button onClick={() => window.history.back()} className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100/50 focus:outline-none focus:ring-2">
// //                                 <ArrowLeft className="w-4 h-4" aria-hidden />
// //                                 <span className="text-sm font-medium">Back</span>
// //                             </button>
// //
// //                             <div className="hidden md:flex flex-col leading-tight">
// //                                 <span className="text-xs text-gray-500">{data?.category || 'Category'}</span>
// //                                 <span className="text-sm font-semibold">{data?.title || 'Article title'}</span>
// //                             </div>
// //                         </div>
// //
// //                         <div className="flex items-center gap-2">
// //                             <div className="hidden sm:flex items-center gap-2">
// //                                 <button onClick={toggleDark} aria-pressed={darkMode} className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2">
// //                                     {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
// //                                 </button>
// //
// //                                 <button onClick={() => setIsBookmarked((b) => !b)} aria-pressed={isBookmarked} className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2">
// //                                     <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-blue-500' : ''}`} />
// //                                 </button>
// //
// //                                 <div className="relative">
// //                                     <button
// //                                         onClick={() => setShareMenuOpen((s) => !s)}
// //                                         aria-expanded={shareMenuOpen}
// //                                         className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2"
// //                                     >
// //                                         <Share2 className="w-5 h-5" />
// //                                     </button>
// //
// //                                     {shareMenuOpen && (
// //                                         <div className={`absolute right-0 mt-2 w-56 rounded-lg shadow-xl ${cardBg} border`}>
// //                                             <div className="flex flex-col">
// //                                                 <button onClick={() => handleShare('facebook')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
// //                                                     <Facebook className="w-4 h-4" /> <span>Share on Facebook</span>
// //                                                 </button>
// //                                                 <button onClick={() => handleShare('twitter')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
// //                                                     <Twitter className="w-4 h-4" /> <span>Share on Twitter</span>
// //                                                 </button>
// //                                                 <button onClick={() => handleShare('linkedin')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
// //                                                     <Linkedin className="w-4 h-4" /> <span>Share on LinkedIn</span>
// //                                                 </button>
// //                                                 <button onClick={() => handleShare('copy')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
// //                                                     <Copy className="w-4 h-4" /> <span>Copy link</span>
// //                                                 </button>
// //                                             </div>
// //                                         </div>
// //                                     )}
// //                                 </div>
// //
// //                             </div>
// //
// //                             {/* Mobile TOC toggle */}
// //                             <div className="sm:hidden">
// //                                 <button onClick={() => setTocOpenMobile((s) => !s)} className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2">
// //                                     <Navigation className="w-5 h-5" />
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </header>
// //
// //             {/* Hero */}
// //             <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
// //                 <img
// //                     src={data?.heroImage || "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200"}
// //                     alt={data?.title}
// //                     className="absolute inset-0 w-full h-full object-cover transform-gpu scale-105 transition-transform duration-700"
// //                     style={{ willChange: 'transform' }}
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
// //                 <div className="absolute inset-0 flex items-end">
// //                     <div className="max-w-4xl mx-auto p-6 sm:p-10 pb-12">
// //                         <span className="inline-block bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">{data?.category}</span>
// //                         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-sm">{data?.title}</h1>
// //                         <p className="mt-3 text-white/90 max-w-2xl">{data?.excerpt}</p>
// //                         <div className="mt-4 flex items-center gap-3 text-white/90">
// //                             <img src={data?.author?.image} alt={data?.author?.name} className="w-10 h-10 rounded-full border-2 border-white" />
// //                             <div>
// //                                 <div className="text-sm font-semibold">{data?.author?.name}</div>
// //                                 <div className="text-xs">{data?.author?.credentials} • {data?.readTime}</div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //
// //             {/* Main layout */}
// //             <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
// //                 {/* Left - TOC */}
// //                 <aside className="lg:col-span-3">
// //                     <div className={`${cardBg} rounded-xl p-6 sticky top-24`}>
// //                         <div className="flex items-center justify-between">
// //                             <h3 className="text-lg font-semibold">Contents</h3>
// //                             <button className="hidden lg:inline-flex items-center gap-1 text-sm text-gray-500" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
// //                                 Top <ChevronUpIcon className="w-4 h-4" />
// //                             </button>
// //                         </div>
// //
// //                         {/* Mobile collapsible */}
// //                         <div className="mt-4 sm:hidden">
// //                             <button onClick={() => setTocOpenMobile((s) => !s)} className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100/50">
// //                                 <span className="font-medium">Sections</span>
// //                                 <ChevronDown className={`w-4 h-4 ${tocOpenMobile ? 'rotate-180' : ''} transition-transform`} />
// //                             </button>
// //                         </div>
// //
// //                         <nav className={`mt-3 space-y-1 ${tocOpenMobile ? 'block' : 'hidden'} sm:block`} aria-label="Table of contents">
// //                             {data?.sections?.map((section) => (
// //                                 <button
// //                                     key={section.id}
// //                                     onClick={() => scrollToSection(section.id)}
// //                                     className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between focus:outline-none ${activeSection === section.id ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50/60'}`}
// //                                     style={{ paddingLeft: `${(section.level || 1) * 10 + 8}px` }}
// //                                 >
// //                                     <span className="truncate">{section.title}</span>
// //                                     <ChevronRight className="w-4 h-4 text-gray-400" />
// //                                 </button>
// //                             ))}
// //                         </nav>
// //
// //                         <div className="mt-6 border-t pt-4 text-sm text-gray-500">
// //                             <div className="flex items-center justify-between">
// //                                 <div>Views</div>
// //                                 <div className="font-semibold">{data?.views?.toLocaleString?.() ?? '—'}</div>
// //                             </div>
// //                             <div className="flex items-center justify-between mt-2">
// //                                 <div>Likes</div>
// //                                 <div className="font-semibold">{data?.likes ?? '—'}</div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </aside>
// //
// //                 {/* Content */}
// //                 <article className="lg:col-span-6 space-y-6">
// //                     <div className={`${cardBg} rounded-xl p-6`}>
// //                         <div className="flex items-start gap-4">
// //                             <img src={data?.author?.image} alt={data?.author?.name} className="w-16 h-16 rounded-full" />
// //                             <div className="flex-1">
// //                                 <h3 className="font-semibold text-lg">{data?.author?.name}</h3>
// //                                 <p className="text-sm text-gray-400">{data?.author?.title}</p>
// //                                 <p className="mt-3 text-sm text-gray-400">{data?.author?.bio}</p>
// //                                 <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
// //                                     <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Verified</div>
// //                                     <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> {data?.author?.rating}/5</div>
// //                                     <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-500" /> {data?.author?.articles} articles</div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //
// //                     <div className="flex gap-3">
// //                         <button onClick={() => setIsLiked((l) => !l)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-100'}`}>
// //                             <Heart className="w-5 h-5" /> {isLiked ? 'Liked' : 'Like'} ({(data?.likes ?? 0) + (isLiked ? 1 : 0)})
// //                         </button>
// //                         <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
// //                             <Printer className="w-5 h-5" /> Print
// //                         </button>
// //                         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
// //                             <Download className="w-5 h-5" /> Save
// //                         </button>
// //                     </div>
// //
// //                     <div className={`${cardBg} rounded-xl p-8 prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
// //                         {data?.sections?.map((section) => (
// //                             <section key={section.id} id={section.id} className="scroll-mt-24">
// //                                 {section.level === 1 && <h2 className="text-2xl font-bold mb-3">{section.title}</h2>}
// //                                 {section.level === 2 && <h3 className="text-xl font-semibold mb-2">{section.title}</h3>}
// //                                 <div className="whitespace-pre-line text-sm leading-relaxed">{section.content}</div>
// //                             </section>
// //                         ))}
// //                     </div>
// //
// //                     <div>
// //                         <h3 className="text-lg font-semibold mb-3">Topics</h3>
// //                         <div className="flex flex-wrap gap-2">
// //                             {data?.tags?.map((t, i) => (
// //                                 <button key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:shadow-sm">{t}</button>
// //                             ))}
// //                         </div>
// //                     </div>
// //
// //                     <div className={`${cardBg} rounded-xl p-6`}>
// //                         <h3 className="text-lg font-semibold mb-3">References</h3>
// //                         <ul className="list-decimal list-inside text-sm space-y-2 text-gray-400">
// //                             {data?.references?.map((r, i) => (
// //                                 <li key={i}>{r}</li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //
// //                     {/* Comments */}
// //                     <div className={`${cardBg} rounded-xl p-6`}>
// //                         <div className="flex items-center justify-between mb-4">
// //                             <h3 className="text-lg font-semibold">Discussion ({comments.length})</h3>
// //                             <div className="text-sm text-gray-400">Be kind — follow the community guidelines</div>
// //                         </div>
// //
// //                         {!showCommentForm ? (
// //                             <button onClick={() => setShowCommentForm(true)} className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">Share your thoughts</button>
// //                         ) : (
// //                             <div>
// //                                 <textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} className={`w-full p-3 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'}`} placeholder="Add to the discussion..." />
// //                                 <div className="mt-3 flex justify-end gap-2">
// //                                     <button onClick={() => { setShowCommentForm(false); setComment(''); }} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
// //                                     <button onClick={handleSubmitComment} disabled={!comment.trim()} className={`px-4 py-2 rounded-md ${comment.trim()? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400'}`}>Post Comment</button>
// //                                 </div>
// //                             </div>
// //                         )}
// //
// //                         <div className="mt-6 space-y-4">
// //                             {comments.map((c) => (
// //                                 <div key={c.id} className="p-3 rounded-md bg-gray-50/60">
// //                                     <div className="flex items-start gap-3">
// //                                         <img src={c.avatar} alt={c.author} className="w-10 h-10 rounded-full" />
// //                                         <div className="flex-1">
// //                                             <div className="flex items-center justify-between mb-1">
// //                                                 <h4 className="font-semibold">{c.author}</h4>
// //                                                 <span className="text-sm text-gray-400">{c.date}</span>
// //                                             </div>
// //                                             <p className="text-sm text-gray-600">{c.content}</p>
// //                                             <div className="mt-2">
// //                                                 <button className="text-sm text-gray-500 flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> <span>{c.likes}</span></button>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             ))}
// //                         </div>
// //                     </div>
// //
// //                 </article>
// //
// //                 {/* Right - related */}
// //                 <aside className="lg:col-span-3">
// //                     <div className={`${cardBg} rounded-xl p-6 sticky top-24 space-y-4`}>
// //                         <div className="flex items-center justify-between">
// //                             <h3 className="text-lg font-semibold">Related</h3>
// //                             <ExternalLink className="w-4 h-4 text-gray-400" />
// //                         </div>
// //
// //                         <div className="space-y-3">
// //                             {data?.relatedArticles?.map((a) => (
// //                                 <article key={a.id} className="rounded-md overflow-hidden hover:shadow-sm transition">
// //                                     <img src={a.image} alt={a.title} className="w-full h-28 object-cover" />
// //                                     <div className="p-3">
// //                                         <div className="text-xs text-gray-500">{a.category} • {a.readTime}</div>
// //                                         <h4 className="font-semibold text-sm mt-1">{a.title}</h4>
// //                                         <p className="text-xs text-gray-400 line-clamp-2">{a.excerpt}</p>
// //                                     </div>
// //                                 </article>
// //                             ))}
// //                         </div>
// //
// //                         <div className="pt-3 border-t">
// //                             <h4 className="text-sm font-semibold">Stay Updated</h4>
// //                             <p className="text-xs text-gray-400">Get weekly updates on health content.</p>
// //                             <div className="mt-3">
// //                                 <input aria-label="Email" placeholder="Email address" className="w-full px-3 py-2 rounded-md border" />
// //                                 <button className="w-full mt-3 px-3 py-2 rounded-md bg-blue-500 text-white">Subscribe</button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </aside>
// //
// //             </main>
// //
// //             <footer className={`${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'} py-8 mt-12`}>
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
// //                     <div>Last updated: {data?.lastUpdated} • Medical review by {data?.author?.name}</div>
// //                     <div className="mt-3 flex items-center justify-center gap-4">
// //                         <button className="underline">Report issue</button>
// //                         <button className="underline">Suggest edit</button>
// //                         <button className="underline">Feedback</button>
// //                     </div>
// //                 </div>
// //             </footer>
// //         </div>
// //     );
// // }
// //
// // // Small inline helper used in the component (kept here to avoid external imports)
// // function ChevronUpIcon({ className = 'w-4 h-4' }) {
// //     return (
// //         <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
// //             <path d="M18 15l-6-6-6 6" />
// //         </svg>
// //     );
// // }
'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft,
    Clock,
    Eye,
    Heart,
    Bookmark,
    Share2,
    Calendar,
    CheckCircle,
    Moon,
    Sun,
    Facebook,
    Twitter,
    Linkedin,
    Copy,
    BookOpen,
    MessageSquare,
    ThumbsUp,
    Star,
    Printer,
    Download,
    Mail,
    ExternalLink,
    ChevronRight,
    ChevronDown
} from 'lucide-react';

// Streamlined single-column article page
// - Removed left/right sidebars
// - Related articles now appear after the main article as full-width cards
// - Kept comments, references, tags and core UX

const mockArticle = {
    id: 1,
    title: "5 Essential Tips for a Healthy Heart: A Comprehensive Guide",
    excerpt: "Learn how to maintain cardiovascular health with simple daily habits and lifestyle changes that can significantly reduce your risk of heart disease.",
    heroImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200",

    author: {
        name: "Dr. Sarah Johnson",
        title: "Cardiologist & Heart Health Specialist",
        bio: "15+ years of experience in cardiology and preventive medicine. Fellowship at Johns Hopkins Hospital.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
        credentials: "MD, FACC",
        articles: 156,
        rating: 4.9
    },

    category: "Cardiology",
    readTime: "15 min read",
    views: 12540,
    likes: 342,
    shares: 456,
    date: "March 15, 2024",
    lastUpdated: "March 20, 2024",

    tags: ["Heart Health", "Prevention", "Lifestyle", "Cardiology", "Wellness", "Diet", "Exercise"],

    sections: [
        {
            id: "introduction",
            title: "Understanding Heart Health",
            level: 1,
            content: `Cardiovascular diseases remain the leading cause of death globally, but the good news is that most heart conditions are preventable with the right lifestyle choices. This comprehensive guide provides evidence-based strategies for maintaining optimal heart health.

The heart is a remarkable organ that works tirelessly to pump blood throughout your body. Maintaining its health is crucial for overall wellbeing and longevity.`
        },
        {
            id: "statistics",
            title: "Key Statistics",
            level: 2,
            content: `• Cardiovascular diseases account for 32% of all global deaths
• 80% of premature heart disease and stroke is preventable
• Small lifestyle changes can reduce heart disease risk by up to 50%`
        },
        {
            id: "tip-1",
            title: "1. Regular Exercise",
            level: 1,
            content: `Regular physical activity strengthens your heart muscle, improves circulation, lowers blood pressure, and helps maintain a healthy weight.

**Recommended Activities:**
• Aerobic Exercise: 150 minutes of moderate-intensity or 75 minutes of vigorous-intensity per week
• Strength Training: 2 days per week focusing on major muscle groups

**Quick Implementation Tips:**
• Start with 10-minute sessions if you're new to exercise
• Use a fitness tracker to monitor your progress
• Incorporate activity into daily routines (take stairs, walk during calls)`
        },
        {
            id: "tip-2",
            title: "2. Heart-Healthy Diet",
            level: 1,
            content: `The Mediterranean Diet pattern consistently shows significant reduction in heart disease risk through research.

**Essential Components:**
• Fruits and Vegetables: 5-9 servings daily, rich in antioxidants and fiber
• Whole Grains: Oats, quinoa, brown rice - rich in soluble fiber
• Healthy Fats: Olive oil, avocado, nuts, omega-3 from fish
• Lean Proteins: Fish, skinless poultry, legumes and beans

**Foods to Limit:**
Processed foods, added sugars, excessive salt, and red meat should be consumed in moderation.`
        },
        {
            id: "tip-3",
            title: "3. Stress Management",
            level: 1,
            content: `Chronic stress increases cortisol levels, raises blood pressure, and can lead to unhealthy coping behaviors.

**Effective Techniques:**
• Mindfulness Meditation: 10-20 minutes daily reduces blood pressure
• Deep Breathing Exercises: 4-7-8 technique, box breathing
• Other Activities: Yoga, tai chi, journaling, nature walks, quality time with loved ones`
        },
        {
            id: "tip-4",
            title: "4. Regular Health Checkups",
            level: 1,
            content: `**Essential Screenings:**
• Blood Pressure: Check at least once every 2 years (Normal: <120/80 mmHg)
• Cholesterol Levels: Test every 4-6 years (Ideal LDL: <100 mg/dL)
• Blood Sugar: Annual screening after age 45 (Normal fasting: <100 mg/dL)
• Body Mass Index: Calculate annually (Healthy range: 18.5-24.9)`
        },
        {
            id: "tip-5",
            title: "5. Quality Sleep",
            level: 1,
            content: `Poor sleep increases inflammation, raises blood pressure, and disrupts metabolism. Aim for 7-8 hours of quality sleep per night.

**Sleep Hygiene Tips:**
• Maintain a consistent sleep schedule
• Create a cool, dark, quiet sleep environment
• Avoid electronics 1 hour before bed
• Establish a relaxing pre-sleep routine`
        },
        {
            id: "action-plan",
            title: "Your Action Plan",
            level: 1,
            content: `**Week 1-2: Foundation Building**
• Start with 10-minute daily walks
• Add one vegetable to each meal
• Practice deep breathing 5 minutes daily
• Schedule your annual checkup

**Week 3-4: Habit Formation**
• Increase exercise to 20 minutes
• Try one new heart-healthy recipe
• Begin meditation practice
• Track your sleep patterns

**Month 2-3: Lifestyle Integration**
• Join a fitness class or group
• Meal prep for the week
• Establish consistent sleep schedule
• Share your journey with a friend`
        }
    ],

    stats: {
        readingLevel: "Intermediate",
        accuracy: "98%",
        references: 12
    },

    references: [
        "American Heart Association. (2023). Heart Disease and Stroke Statistics.",
        "New England Journal of Medicine. (2024). Mediterranean Diet and Cardiovascular Outcomes.",
        "Journal of the American College of Cardiology. (2023). Exercise and Heart Health.",
        "Sleep Medicine Reviews. (2024). Sleep Duration and Cardiovascular Risk."
    ],

    relatedArticles: [
        {
            id: 2,
            title: "Understanding Blood Pressure: Complete Guide",
            excerpt: "Learn to monitor and manage blood pressure for optimal heart health.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
            readTime: "8 min",
            category: "Cardiology"
        },
        {
            id: 3,
            title: "Stress Management Techniques",
            excerpt: "Evidence-based strategies for reducing stress and anxiety.",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
            readTime: "6 min",
            category: "Mental Health"
        },
        {
            id: 4,
            title: "Nutrition for Heart Health",
            excerpt: "Detailed nutritional guidelines for cardiovascular wellness.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
            readTime: "10 min",
            category: "Nutrition"
        }
    ]
};

const mockComments = [
    {
        id: 1,
        author: "Michael Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        date: "2 days ago",
        content: "Excellent article! I've been following these tips for 3 months and already seeing improvements in my energy levels and overall health.",
        likes: 24
    },
    {
        id: 2,
        author: "Emma Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        date: "1 week ago",
        content: "The action plan section is particularly helpful. Breaking it down week by week makes it much less overwhelming.",
        likes: 18
    }
];
export default function ArticleDetailPageImproved({ article = null }) {
    const data = article || mockArticle;

    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [shareMenuOpen, setShareMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        try {
            const saved = localStorage.getItem('site-dark-mode');
            if (saved !== null) return saved === 'true';
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {
            return false;
        }
    });
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [comment, setComment] = useState('');
    const [readingProgress, setReadingProgress] = useState(0);
    const [comments, setComments] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (data && data.comments) setComments(data.comments);
        else setComments([
            { id: 1, author: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', date: '2 days ago', content: "Excellent article!", likes: 24 },
            { id: 2, author: 'Emma Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', date: '1 week ago', content: 'Helpful action plan.', likes: 18 }
        ]);
    }, [data]);

    useEffect(() => {
        localStorage.setItem('site-dark-mode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        let raf = null;
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const scrollTop = window.scrollY || window.pageYOffset;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                setReadingProgress(Math.min(100, Math.max(0, pct)));
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    const handleShare = (platform) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        const text = data?.title || '';
        const urls = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(url).then(() => {
                const notice = document.createElement('div');
                notice.setAttribute('role', 'status');
                notice.className = 'sr-only';
                notice.innerText = 'Link copied to clipboard';
                document.body.appendChild(notice);
                setTimeout(() => document.body.removeChild(notice), 1500);
            });
        } else {
            window.open(urls[platform], '_blank', 'noopener');
        }
        setShareMenuOpen(false);
    };

    const handleSubmitComment = () => {
        if (!comment.trim()) return;
        const newComment = { id: Date.now(), author: 'You', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', date: 'Just now', content: comment.trim(), likes: 0 };
        setComments((c) => [newComment, ...c]);
        setComment('');
        setShowCommentForm(false);
    };

    const toggleDark = () => setDarkMode((d) => !d);

    const rootBg = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900';
    const cardBg = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';

    return (
        <div className={`${rootBg} min-h-screen transition-colors duration-300`} ref={containerRef}>
            {/* progress */}
            <div className="fixed left-0 top-0 z-50 w-full h-1 bg-transparent">
                <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-200"
                    style={{ width: `${readingProgress}%` }}
                    aria-hidden
                />
            </div>

            {/* header */}
            <header className={`sticky top-0 z-40 backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'} ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-3">
                            <button onClick={() => window.history.back()} className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100/50 focus:outline-none focus:ring-2">
                                <ArrowLeft className="w-4 h-4" aria-hidden />
                                <span className="text-sm font-medium">Back</span>
                            </button>

                            <div className="hidden md:flex flex-col leading-tight">
                                <span className="text-xs text-gray-500">{data?.category || 'Category'}</span>
                                <span className="text-sm font-semibold">{data?.title || 'Article title'}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={toggleDark} aria-pressed={darkMode} className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2">
                                {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5" />}
                            </button>

                            <button onClick={() => setIsBookmarked((b) => !b)} aria-pressed={isBookmarked} className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2">
                                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-blue-500' : ''}`} />
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShareMenuOpen((s) => !s)}
                                    aria-expanded={shareMenuOpen}
                                    className="p-2 rounded-md hover:bg-gray-100/30 focus:outline-none focus:ring-2"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>

                                {shareMenuOpen && (
                                    <div className={`absolute right-0 mt-2 w-56 rounded-lg shadow-xl ${cardBg} border`}>
                                        <div className="flex flex-col">
                                            <button onClick={() => handleShare('facebook')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
                                                <Facebook className="w-4 h-4" /> <span>Share on Facebook</span>
                                            </button>
                                            <button onClick={() => handleShare('twitter')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
                                                <Twitter className="w-4 h-4" /> <span>Share on Twitter</span>
                                            </button>
                                            <button onClick={() => handleShare('linkedin')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
                                                <Linkedin className="w-4 h-4" /> <span>Share on LinkedIn</span>
                                            </button>
                                            <button onClick={() => handleShare('copy')} className="px-4 py-3 text-left hover:bg-gray-50/40 flex items-center gap-3">
                                                <Copy className="w-4 h-4" /> <span>Copy link</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <div className="relative h-[45vh] min-h-[320px] overflow-hidden">
                <img
                    src={data?.heroImage || "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=1200"}
                    alt={data?.title}
                    className="absolute inset-0 w-full h-full object-cover transform-gpu scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto p-6 sm:p-10 pb-12">
                        <span className="inline-block bg-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mb-3">{data?.category}</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-sm">{data?.title}</h1>
                        <p className="mt-3 text-white/90 max-w-2xl">{data?.excerpt}</p>
                        <div className="mt-4 flex items-center gap-3 text-white/90">
                            <img src={data?.author?.image} alt={data?.author?.name} className="w-10 h-10 rounded-full border-2 border-white" />
                            <div>
                                <div className="text-sm font-semibold">{data?.author?.name}</div>
                                <div className="text-xs">{data?.author?.credentials} • {data?.readTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Single-column content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
                {/* Author card */}
                <div className={`${cardBg} rounded-xl p-6`}>
                    <div className="flex items-start gap-4">
                        <img src={data?.author?.image} alt={data?.author?.name} className="w-16 h-16 rounded-full" />
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg">{data?.author?.name}</h3>
                            <p className="text-sm text-gray-400">{data?.author?.title}</p>
                            <p className="mt-3 text-sm text-gray-400">{data?.author?.bio}</p>
                            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Verified</div>
                                <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400" /> {data?.author?.rating}/5</div>
                                <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-500" /> {data?.author?.articles} articles</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                    <button onClick={() => setIsLiked((l) => !l)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${isLiked ? 'bg-red-50 text-red-600' : 'bg-gray-100'}`}>
                        <Heart className="w-5 h-5" /> {isLiked ? 'Liked' : 'Like'} ({(data?.likes ?? 0) + (isLiked ? 1 : 0)})
                    </button>
                    <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
                        <Printer className="w-5 h-5" /> Print
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100">
                        <Download className="w-5 h-5" /> Save
                    </button>
                </div>

                {/* Article content */}
                <article className={`${cardBg} rounded-xl p-8 prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
                    {data?.sections?.map((section) => (
                        <section key={section.id} id={section.id} className="scroll-mt-24 mb-8">
                            {section.level === 1 && <h2 className="text-2xl font-bold mb-3">{section.title}</h2>}
                            {section.level === 2 && <h3 className="text-xl font-semibold mb-2">{section.title}</h3>}
                            <div className="whitespace-pre-line text-sm leading-relaxed">{section.content}</div>
                        </section>
                    ))}
                </article>

                {/* Topics & References */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {data?.tags?.map((t, i) => (
                                <button key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:shadow-sm">{t}</button>
                            ))}
                        </div>
                    </div>

                    <div className={`${cardBg} rounded-xl p-6`}>
                        <h3 className="text-lg font-semibold mb-3">References</h3>
                        <ul className="list-decimal list-inside text-sm space-y-2 text-gray-400">
                            {data?.references?.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Related articles - full width after article */}
                <section>
                    <h3 className="text-2xl font-bold mb-4">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data?.relatedArticles?.map((a) => (
                            <article key={a.id} className={`${cardBg} rounded-xl overflow-hidden hover:shadow-lg transition`}>
                                <img src={a.image} alt={a.title} className="w-full h-44 object-cover" />
                                <div className="p-4">
                                    <div className="text-xs text-gray-500">{a.category} • {a.readTime}</div>
                                    <h4 className="font-semibold text-lg mt-2">{a.title}</h4>
                                    <p className="text-sm text-gray-400 mt-1 line-clamp-3">{a.excerpt}</p>
                                    <div className="mt-3 flex items-center justify-between">
                                        <button className="text-sm text-blue-600 font-medium">Read more</button>
                                        <ExternalLink className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Comments */}
                <div className={`${cardBg} rounded-xl p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Discussion ({comments.length})</h3>
                        <div className="text-sm text-gray-400">Be kind — follow the community guidelines</div>
                    </div>

                    {!showCommentForm ? (
                        <button onClick={() => setShowCommentForm(true)} className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">Share your thoughts</button>
                    ) : (
                        <div>
                            <textarea rows={4} value={comment} onChange={(e) => setComment(e.target.value)} className={`w-full p-3 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'}`} placeholder="Add to the discussion..." />
                            <div className="mt-3 flex justify-end gap-2">
                                <button onClick={() => { setShowCommentForm(false); setComment(''); }} className="px-4 py-2 rounded-md bg-gray-100">Cancel</button>
                                <button onClick={handleSubmitComment} disabled={!comment.trim()} className={`px-4 py-2 rounded-md ${comment.trim()? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' : 'bg-gray-200 text-gray-400'}`}>Post Comment</button>
                            </div>
                        </div>
                    )}

                    <div className="mt-6 space-y-4">
                        {comments.map((c) => (
                            <div key={c.id} className="p-3 rounded-md bg-gray-50/60">
                                <div className="flex items-start gap-3">
                                    <img src={c.avatar} alt={c.author} className="w-10 h-10 rounded-full" />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-semibold">{c.author}</h4>
                                            <span className="text-sm text-gray-400">{c.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{c.content}</p>
                                        <div className="mt-2">
                                            <button className="text-sm text-gray-500 flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> <span>{c.likes}</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <footer className={`${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'} py-8 mt-12`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
                    <div>Last updated: {data?.lastUpdated} • Medical review by {data?.author?.name}</div>
                    <div className="mt-3 flex items-center justify-center gap-4">
                        <button className="underline">Report issue</button>
                        <button className="underline">Suggest edit</button>
                        <button className="underline">Feedback</button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Small inline helper used in the component (kept here to avoid external imports)
function ChevronUpIcon({ className = 'w-4 h-4' }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M18 15l-6-6-6 6" />
        </svg>
    );
}
