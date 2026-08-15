import { motion } from 'framer-motion';
import { Monitor, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import ServiceIcon from '../components/ServiceIcon';

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">Nos Services</h1>
          <p className="text-gray-600 text-lg">
            De l'idée à la réalisation, CLEVER GROUP vous accompagne avec une gamme complète de services pour faire briller votre marque.
          </p>
        </div>

        {/* Featured New Services */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web Dev */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row relative">
            <div className="absolute top-4 right-4 bg-clever-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
              Nouveau
            </div>
            <div className="md:w-2/5 bg-clever-darkblue p-8 flex items-center justify-center text-white">
              <Monitor size={80} className="text-clever-orange" />
            </div>
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-clever-darkblue mb-3">Création de Sites Web & Applications</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-clever-orange" /> Sites vitrines professionnels</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-clever-orange" /> Sites e-commerce (boutiques)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-clever-orange" /> Applications web internes</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-clever-orange" /> Maintenance et hébergement</li>
              </ul>
              <div className="mt-auto">
                <Link to="/devis" className="text-clever-orange font-semibold hover:underline">Demander un devis &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Startup Pack */}
          <div className="bg-gradient-to-br from-clever-orange to-orange-600 rounded-3xl overflow-hidden shadow-lg flex flex-col relative text-white">
            <div className="absolute top-4 right-4 bg-white text-clever-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
              ⭐ Offre populaire
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="mb-4 text-white/80"><Zap size={48} /></div>
              <h3 className="text-3xl font-bold mb-4">Pack Accompagnement Startup</h3>
              <p className="text-white/90 mb-6">Offre clé en main pour les entrepreneurs et PME souhaitant se lancer rapidement et efficacement.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full" /> Création de logo professionnel</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full" /> Site web vitrine ou e-commerce</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full" /> Configuration des réseaux sociaux</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full" /> Stratégie de lancement de marque</li>
              </ul>
              <Link to="/devis" className="mt-auto bg-white text-clever-orange hover:bg-gray-100 text-center py-3 rounded-xl font-bold transition-colors shadow-md">
                Souscrire au pack
              </Link>
            </div>
          </div>
        </div>

        {/* Standard Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="bg-orange-50 text-clever-orange p-4 rounded-xl inline-block w-fit mb-6">
                <ServiceIcon name={service.iconName} size={32} />
              </div>
              <h3 className="text-xl font-bold text-clever-darkblue mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              {service.tools && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">Outils :</span> {service.tools}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
