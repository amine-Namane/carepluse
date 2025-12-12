'use client'
import React, { useState, useEffect } from 'react';
import {
  Search,
  Filter,
  Clock,
  Eye,
  Heart,
  Bookmark,
  Share2,
  ChevronRight,
  TrendingUp,
  Calendar,
  User,
  Tag,
  ArrowUp,
  ChevronDown,
  Star,
  BookOpen,
  Brain,
  Heart as HeartIcon,
  Stethoscope,
  Activity,
  Brain as BrainIcon,
  Leaf,
  Pill,
  Apple,
  Utensils,
  Activity as ActivityIcon,
  Moon,
  Sun,
  X,
  Plus,
  Minus,
  Home,
  Navigation
} from 'lucide-react';
import Link from "next/link";

// Mock data for articles
const mockArticles = [
  {
    id: 1,
    title: "5 Essential Tips for a Healthy Heart",
    excerpt: "Learn how to maintain cardiovascular health with simple daily habits and lifestyle changes that can significantly reduce your risk of heart disease.",
    content: `Cardiovascular health is crucial for overall wellbeing. Here are 5 essential tips:

    1. **Regular Exercise**: Aim for 30 minutes of moderate exercise 5 days a week
    2. **Healthy Diet**: Focus on fruits, vegetables, whole grains, and lean proteins
    3. **Stress Management**: Practice meditation, yoga, or deep breathing
    4. **Regular Checkups**: Monitor blood pressure and cholesterol levels
    5. **Adequate Sleep**: Aim for 7-9 hours of quality sleep nightly
    
    Remember, small consistent changes lead to big health benefits over time.`,
    author: "Dr. Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200",
    category: "Cardiology",
    categoryColor: "from-red-500 to-pink-500",
    readTime: "5 min read",
    views: 1254,
    likes: 342,
    date: "2024-03-15",
    tags: ["Heart Health", "Prevention", "Lifestyle"],
    featured: true,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800"
  },
  {
    id: 2,
    title: "Understanding Diabetes Management",
    excerpt: "Comprehensive guide to managing diabetes through diet, medication, and lifestyle modifications for better quality of life.",
    content: `Diabetes management requires a holistic approach:

    **Dietary Guidelines**:
    - Monitor carbohydrate intake
    - Choose complex carbs over simple sugars
    - Include fiber-rich foods
    - Stay hydrated
    
    **Medication Adherence**:
    - Take medications as prescribed
    - Monitor blood glucose regularly
    - Keep appointments with healthcare providers
    
    **Lifestyle Factors**:
    - Regular physical activity
    - Stress reduction techniques
    - Adequate sleep
    - Regular health screenings`,
    author: "Dr. Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200",
    category: "Endocrinology",
    categoryColor: "from-blue-500 to-cyan-500",
    readTime: "8 min read",
    views: 892,
    likes: 210,
    date: "2024-03-10",
    tags: ["Diabetes", "Nutrition", "Management"],
    featured: true,
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800"
  },
  {
    id: 3,
    title: "Mental Wellness in Modern Times",
    excerpt: "Strategies for maintaining mental health in today's fast-paced world with practical tips and professional insights.",
    content: `Mental wellness is essential for overall health:

    **Common Challenges**:
    - Work-related stress
    - Social media overload
    - Information fatigue
    - Sleep disturbances
    
    **Effective Strategies**:
    - Digital detox periods
    - Mindfulness meditation
    - Regular physical activity
    - Social connections
    - Professional help when needed
    
    **Warning Signs**:
    - Persistent sadness
    - Loss of interest
    - Changes in sleep patterns
    - Difficulty concentrating`,
    author: "Dr. Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200",
    category: "Mental Health",
    categoryColor: "from-purple-500 to-indigo-500",
    readTime: "6 min read",
    views: 1567,
    likes: 498,
    date: "2024-03-05",
    tags: ["Mental Health", "Wellness", "Stress"],
    featured: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
  },
  {
    id: 4,
    title: "The Science of Nutrition",
    excerpt: "Latest research on nutrition and its impact on chronic disease prevention and overall longevity.",
    content: `Nutrition science continues to evolve:

    **Key Findings**:
    - Plant-based diets reduce chronic disease risk
    - Omega-3 fatty acids support brain health
    - Probiotics improve gut microbiome
    - Antioxidants combat cellular aging
    
    **Practical Applications**:
    - Mediterranean diet patterns
    - Mindful eating practices
    - Hydration importance
    - Meal timing strategies
    
    **Future Directions**:
    - Personalized nutrition
    - Gut-brain axis research
    - Nutrigenomics advancements`,
    author: "Dr. Lisa Thompson",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    category: "Nutrition",
    categoryColor: "from-green-500 to-emerald-500",
    readTime: "7 min read",
    views: 745,
    likes: 189,
    date: "2024-03-01",
    tags: ["Nutrition", "Research", "Prevention"],
    featured: false,
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800"
  },
  {
    id: 5,
    title: "Sleep Hygiene: Better Sleep Tonight",
    excerpt: "Evidence-based techniques to improve sleep quality and duration for enhanced daytime functioning.",
    content: `Quality sleep is foundational to health:

    **Sleep Environment**:
    - Cool, dark, quiet room
    - Comfortable mattress
    - Minimal electronics
    - Consistent schedule
    
    **Pre-Sleep Routine**:
    - Digital curfew 1 hour before bed
    - Relaxation techniques
    - Light reading
    - Warm bath or shower
    
    **Lifestyle Factors**:
    - Regular exercise timing
    - Caffeine and alcohol timing
    - Sunlight exposure
    - Stress management`,
    author: "Dr. Robert Martinez",
    authorImage: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200",
    category: "Sleep Health",
    categoryColor: "from-indigo-500 to-blue-500",
    readTime: "4 min read",
    views: 1023,
    likes: 312,
    date: "2024-02-25",
    tags: ["Sleep", "Wellness", "Habits"],
    featured: false,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800"
  },
  {
    id: 6,
    title: "Preventive Healthcare Strategies",
    excerpt: "Comprehensive guide to preventive screenings and health monitoring for early disease detection.",
    content: `Prevention is better than cure:

    **Age-Based Screenings**:
    - 20s-30s: Baseline measurements
    - 40s-50s: Regular screenings
    - 60s+: Comprehensive monitoring
    
    **Essential Tests**:
    - Blood pressure
    - Cholesterol levels
    - Blood glucose
    - Cancer screenings
    
    **Lifestyle Prevention**:
    - Vaccinations
    - Healthy weight maintenance
    - Smoking cessation
    - Alcohol moderation`,
    author: "Dr. James Wilson",
    authorImage: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200",
    category: "Preventive Care",
    categoryColor: "from-amber-500 to-orange-500",
    readTime: "9 min read",
    views: 678,
    likes: 167,
    date: "2024-02-20",
    tags: ["Prevention", "Screening", "Health"],
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800"
  }
];

const categories = [
  { name: "All Articles", icon: <BookOpen className="w-5 h-5" />, slug: "all", count: mockArticles.length },
  { name: "Cardiology", icon: <HeartIcon className="w-5 h-5" />, slug: "cardiology", count: mockArticles.filter(a => a.category === "Cardiology").length },
  { name: "Mental Health", icon: <BrainIcon className="w-5 h-5" />, slug: "mental-health", count: mockArticles.filter(a => a.category === "Mental Health").length },
  { name: "Nutrition", icon: <Utensils className="w-5 h-5" />, slug: "nutrition", count: mockArticles.filter(a => a.category === "Nutrition").length },
  { name: "Sleep Health", icon: <Moon className="w-5 h-5" />, slug: "sleep-health", count: mockArticles.filter(a => a.category === "Sleep Health").length },
  { name: "Preventive Care", icon: <ActivityIcon className="w-5 h-5" />, slug: "preventive-care", count: mockArticles.filter(a => a.category === "Preventive Care").length },
  { name: "Featured", icon: <Star className="w-5 h-5" />, slug: "featured", count: mockArticles.filter(a => a.featured).length },
];

function ArticleCard({ article, onClick }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
      <article className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
        {/* Article Image */}
        <div className="relative h-64 overflow-hidden">
          <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
          <span className={`px-4 py-2 bg-gradient-to-r ${article.categoryColor} text-white text-sm font-semibold rounded-full`}>
            {article.category}
          </span>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
                className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
            </button>
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsBookmarked(!isBookmarked);
                }}
                className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Bookmark className={`w-5 h-5 transition-colors ${isBookmarked ? 'fill-blue-500 text-blue-500' : 'text-gray-600 dark:text-gray-300'}`} />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <img
                src={article.authorImage}
                alt={article.author}
                className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-md"
            />
            <div>
              <div className="font-semibold text-gray-800 dark:text-white">{article.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{article.date}</div>
            </div>
          </div>

          <h3
              onClick={onClick}
              className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
          >
            {article.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
              {tag}
            </span>
            ))}
          </div>

          {/* Stats and Action */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {article.views.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {article.likes + (isLiked ? 1 : 0)}
              </div>
            </div>

          <Link href={`/Doctors/${article.name}`}>  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1 group" >
              Read More
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </Link>
          </div>
        </div>
      </article>
  );
}

export default function HealthArticlesPage() {
  const [articles, setArticles] = useState(mockArticles);
  const [filteredArticles, setFilteredArticles] = useState(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let results = [...articles];

    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        results = results.filter(article => article.featured);
      } else {
        results = results.filter(article =>
            article.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
        );
      }
    }

    // Search filter
    if (searchQuery.trim() !== '') {
      results = results.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort results
    switch (sortBy) {
      case 'newest':
        results.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        results.sort((a, b) => b.views - a.views);
        break;
      case 'likes':
        results.sort((a, b) => b.likes - a.likes);
        break;
      case 'featured':
        results.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? -1 : 1));
        break;
    }

    setFilteredArticles(results);
  }, [selectedCategory, searchQuery, sortBy, articles]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArticle = (articleId) => {
    // In a real app, you would use router.push
    window.location.href = `/articles/${articleId}`;
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16 lg:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-2xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                <Home className="w-4 h-4 inline mr-2" />
                Home / Articles
              </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                <TrendingUp className="w-4 h-4 inline mr-2" />
                Latest Health Insights
              </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Health & Wellness
                <br />
                <span className="text-yellow-300">Articles</span>
              </h1>

              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Explore our comprehensive collection of health articles, research insights,
                and wellness tips from medical professionals
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{articles.length}</div>
                  <div className="text-sm text-blue-100">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">6</div>
                  <div className="text-sm text-blue-100">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{articles.reduce((acc, a) => acc + a.views, 0).toLocaleString()}</div>
                  <div className="text-sm text-blue-100">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{articles.reduce((acc, a) => acc + a.likes, 0).toLocaleString()}</div>
                  <div className="text-sm text-blue-100">Total Likes</div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search articles, topics, or authors..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-5 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Controls Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category.slug}
                        onClick={() => handleCategoryChange(category.slug)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                            selectedCategory === category.slug
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                    >
                      {category.icon}
                      {category.name}
                      <span className="px-2 py-1 text-xs bg-white/20 dark:bg-gray-800/20 rounded-full">
                    {category.count}
                  </span>
                    </button>
                ))}
              </div>

              {/* Sort and View Controls */}
              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                  <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-all ${
                          viewMode === 'grid'
                              ? 'bg-white dark:bg-gray-600 shadow-sm'
                              : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    <div className="grid grid-cols-2 gap-1 w-5 h-5">
                      {[...Array(4)].map((_, i) => (
                          <div key={i} className={`rounded ${
                              viewMode === 'grid' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'
                          }`}></div>
                      ))}
                    </div>
                  </button>
                  <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-all ${
                          viewMode === 'list'
                              ? 'bg-white dark:bg-gray-600 shadow-sm'
                              : 'hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                  >
                    <div className="space-y-1 w-5 h-5">
                      <div className={`h-1 rounded-full ${
                          viewMode === 'list' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'
                      }`}></div>
                      <div className={`h-1 rounded-full ${
                          viewMode === 'list' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'
                      }`}></div>
                      <div className={`h-1 rounded-full ${
                          viewMode === 'list' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-400 dark:bg-gray-500'
                      }`}></div>
                    </div>
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="appearance-none bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl pl-4 pr-10 py-2 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Featured First</option>
                    <option value="newest">Newest First</option>
                    <option value="popular">Most Popular</option>
                    <option value="likes">Most Liked</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Articles Grid/List */}
          {filteredArticles.length > 0 ? (
              <div className={`${
                  viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                      : 'space-y-8'
              }`}>
                {filteredArticles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                        onClick={() => navigateToArticle(article.id)}
                        viewMode={viewMode}
                    />
                ))}
              </div>
          ) : (
              <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="inline-block p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-full mb-4">
                  <Search className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-500 dark:text-gray-300 mb-6">Try adjusting your search or filters</p>
                <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    3
                  </button>
                  <button className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Next
                  </button>
                </div>
              </div>
          )}

          {/* Newsletter signup */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6">Subscribe to our newsletter for the latest health articles and research</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:border-white"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
        )}
      </div>
  );
}