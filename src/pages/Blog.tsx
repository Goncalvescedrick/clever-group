import { useState, useMemo } from 'react';
import { Calendar, User, ArrowRight, Search, Clock, X, Share2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../data/blog';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArticles = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'Tous' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">Notre Blog & Actualités</h1>
          <p className="text-gray-600 text-lg">
            Conseils stratégiques, tendances du numérique et retours d'expérience pour faire grandir votre entreprise.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un article, un sujet, un auteur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-gray-200 focus:border-clever-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-clever-orange text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {displayedArticles.map((article) => (
              <motion.article
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col group cursor-pointer transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-clever-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14} className="text-clever-orange" /> {article.date}</span>
                    <span className="flex items-center gap-1"><User size={14} className="text-clever-orange" /> {article.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-clever-darkblue mb-3 leading-snug group-hover:text-clever-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="text-clever-darkblue font-bold flex items-center gap-2 group-hover:text-clever-orange transition-colors w-fit group-hover:gap-3 mt-auto text-sm">
                    Lire l'article complet <ArrowRight size={16} />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">Aucun article ne correspond à votre recherche.</p>
            <button
              onClick={() => { setSelectedCategory('Tous'); setSearchQuery(''); }}
              className="mt-4 text-clever-orange font-semibold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredArticles.length > visibleCount && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="bg-white border-2 border-clever-darkblue text-clever-darkblue px-8 py-3 rounded-full font-bold hover:bg-clever-darkblue hover:text-white transition-colors shadow-sm"
            >
              Charger plus d'articles
            </button>
          </div>
        )}

        {/* Article Full Reader Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative my-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-700 p-2.5 rounded-full shadow-lg transition-colors"
                  aria-label="Fermer la lecture de l'article"
                >
                  <X size={22} />
                </button>

                {/* Banner */}
                <div className="h-72 w-full overflow-hidden relative">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="bg-clever-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                      {selectedArticle.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                      {selectedArticle.title}
                    </h2>
                  </div>
                </div>

                {/* Article Metadata */}
                <div className="p-6 sm:p-10">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100 text-sm text-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-100 text-clever-orange font-bold flex items-center justify-center">
                        {selectedArticle.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{selectedArticle.author}</p>
                        <p className="text-xs text-gray-500">{selectedArticle.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed text-base mb-10">
                    {selectedArticle.content.map((paragraph, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="bg-gray-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100">
                    <div>
                      <h4 className="font-bold text-clever-darkblue">Ce sujet vous inspire ?</h4>
                      <p className="text-sm text-gray-600">Discutez de vos projets avec nos experts.</p>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/22655712221?text=${encodeURIComponent(
                          `Bonjour CLEVER GROUP, j'ai lu votre article "${selectedArticle.title}" et j'aimerais échanger avec vous.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm w-full sm:w-auto"
                      >
                        <MessageCircle size={16} /> Discuter
                      </a>
                      <Link
                        to="/devis"
                        onClick={() => setSelectedArticle(null)}
                        className="inline-flex items-center justify-center gap-2 bg-clever-darkblue hover:bg-blue-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors w-full sm:w-auto"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
