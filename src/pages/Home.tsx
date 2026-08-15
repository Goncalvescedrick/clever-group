import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { services } from "../data/services";
import { testimonials } from "../data/testimonials";
import ServiceIcon from "../components/ServiceIcon";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-clever-darkblue overflow-hidden text-white py-32 lg:py-48 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-clever-darkblue/90 to-clever-blue/40 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Votre agence créative, <br />
              <span className="text-clever-orange">votre succès digital.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              De la conception graphique à la création de sites web en passant
              par le marketing digital. Propulsez votre entreprise avec CLEVER
              GROUP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/devis"
                className="bg-clever-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center flex justify-center items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Demander un devis <ArrowRight size={20} />
              </Link>
              <Link
                to="/realisations"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center shadow-lg hover:shadow-xl"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Ticker */}
      <div className="bg-clever-blue py-4 border-y border-white/10 overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex gap-12 text-white font-semibold tracking-wider uppercase text-sm">
          <span>• CONCEPTION GRAPHIQUE</span>
          <span>• CRÉATION DE SITES WEB</span>
          <span>• MARKETING DIGITAL</span>
          <span>• ÉVÉNEMENTIEL</span>
          <span>• FORMATIONS</span>
          <span>• COMMUNICATION DIGITALE</span>
          <span>• PUBLICITÉ</span>
          <span>• PACK STARTUP</span>
        </div>
        <div
          className="animate-marquee flex gap-12 text-white font-semibold tracking-wider uppercase text-sm"
          aria-hidden="true"
        >
          <span>• CONCEPTION GRAPHIQUE</span>
          <span>• CRÉATION DE SITES WEB</span>
          <span>• MARKETING DIGITAL</span>
          <span>• ÉVÉNEMENTIEL</span>
          <span>• FORMATIONS</span>
          <span>• COMMUNICATION DIGITALE</span>
          <span>• PUBLICITÉ</span>
          <span>• PACK STARTUP</span>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-clever-darkblue mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Basée à Ouagadougou, CLEVER GROUP est une agence 360° dédiée à la
              réussite de votre communication et de votre présence digitale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-5xl font-extrabold text-clever-orange mb-2">
                50+
              </h3>
              <p className="text-gray-600 font-medium">Projets Réalisés</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-5xl font-extrabold text-clever-orange mb-2">
                98%
              </h3>
              <p className="text-gray-600 font-medium">Clients Satisfaits</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-5xl font-extrabold text-clever-orange mb-2">
                5+
              </h3>
              <p className="text-gray-600 font-medium">Années d'Expérience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-clever-darkblue mb-4">
                Nos Services Phares
              </h2>
              <p className="text-gray-600">
                Des solutions sur mesure pour chaque besoin.
              </p>
            </div>
            <Link
              to="/services"
              className="hidden sm:flex text-clever-orange font-semibold items-center gap-1 hover:text-orange-700"
            >
              Tous nos services <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-start"
              >
                <div className="bg-orange-50 p-4 rounded-xl mb-6">
                  <ServiceIcon name={service.iconName} className="w-8 h-8 text-clever-orange" />
                </div>
                <h3 className="text-xl font-bold text-clever-darkblue mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-clever-orange font-medium flex items-center gap-1 mt-auto"
                >
                  En savoir plus <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-clever-darkblue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ils nous font confiance</h2>
            <p className="text-gray-300">
              Découvrez ce que nos clients disent de nous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 relative"
              >
                <div className="flex text-yellow-400 mb-4">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-200 italic mb-6">"{testi.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-clever-orange rounded-full flex items-center justify-center font-bold text-xl">
                    {testi.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{testi.author}</h4>
                    <p className="text-sm text-gray-400">{testi.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Équipe au travail"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-clever-darkblue mb-6">
              Pourquoi choisir CLEVER GROUP ?
            </h2>
            <p className="text-gray-600 mb-8">
              Nous allions créativité, technologie et stratégie pour vous offrir
              des résultats mesurables et une image de marque inoubliable.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit text-clever-orange">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Expertise Éprouvée</h4>
                  <p className="text-gray-600">
                    Une équipe de passionnés maîtrisant les dernières tendances.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit text-clever-orange">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Livraison Rapide</h4>
                  <p className="text-gray-600">
                    Le respect des délais est notre priorité absolue.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-orange-50 p-3 rounded-lg h-fit text-clever-orange">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Qualité Supérieure</h4>
                  <p className="text-gray-600">
                    Des standards stricts pour un rendu premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-clever-orange text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à booster votre image ?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et
            obtenir un devis personnalisé gratuitement.
          </p>
          <Link
            to="/devis"
            className="bg-white text-clever-orange px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-xl"
          >
            Commencer un projet
          </Link>
        </div>
      </section>
    </div>
  );
}
