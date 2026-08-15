import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, projectCategories } from '../data/projects';
import { Project } from '../types';

export default function Realisations() {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">Nos Réalisations</h1>
          <p className="text-gray-600 text-lg">
            Découvrez nos derniers projets créatifs et la qualité de notre savoir-faire à travers notre portfolio.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeFilter === cat 
                  ? 'bg-clever-orange text-white shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-clever-darkblue/95 via-clever-darkblue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-clever-orange font-bold text-xs mb-1 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">Client : {project.client}</p>
                  <span className="inline-flex items-center gap-2 bg-clever-orange text-white px-4 py-2 rounded-lg font-semibold text-sm w-fit shadow-md">
                    <Eye size={16} /> Voir les détails
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Aucune réalisation dans cette catégorie pour le moment.
          </div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-700 p-2 rounded-full shadow-md transition-colors"
                  aria-label="Fermer la boîte de dialogue"
                >
                  <X size={22} />
                </button>

                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-clever-orange text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-clever-darkblue mb-1">
                        {selectedProject.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        Client : <span className="text-clever-orange font-semibold">{selectedProject.client}</span> • Année : {selectedProject.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-end border-t pt-6">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Fermer
                    </button>
                    <Link
                      to="/devis"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center gap-2 bg-clever-orange hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md"
                    >
                      Demander un projet similaire <ArrowRight size={18} />
                    </Link>
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
