import { Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { teamMembers } from "../data/team";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">
              À Propos de CLEVER GROUP
            </h1>
            <p className="text-gray-600 text-lg">
              Votre partenaire de confiance pour une communication digitale et
              graphique qui marque les esprits.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 mb-16">
            <h2 className="text-3xl font-bold text-clever-darkblue mb-6">
              Notre Histoire
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Née à Ouagadougou d'une passion commune pour le design, le digital
              et l'innovation, CLEVER GROUP a su s'imposer comme un acteur
              incontournable du paysage créatif burkinabè.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Depuis nos débuts à Tampouy secteur 16, notre équipe n'a cessé de
              grandir, portée par une volonté farouche d'accompagner les
              entreprises, les startups et les institutions dans leur
              transformation digitale et l'optimisation de leur image de marque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-clever-darkblue text-white p-8 rounded-3xl shadow-lg"
            >
              <Target size={40} className="text-clever-orange mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-gray-300">
                Fournir des solutions créatives et technologiques de pointe qui
                permettent à nos clients de se démarquer, de séduire leur
                audience et d'atteindre leurs objectifs commerciaux avec brio.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-clever-orange text-white p-8 rounded-3xl shadow-lg"
            >
              <Heart size={40} className="text-white mb-4" />
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-white/90">
                Devenir l'agence créative de référence en Afrique de l'Ouest,
                reconnue pour son excellence, son innovation constante et
                l'impact positif de ses réalisations sur la croissance de ses
                partenaires.
              </p>
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-clever-darkblue mb-10 text-center">
              Notre Équipe Dirigeante
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center pb-6 hover:shadow-md transition-shadow"
                >
                  <div className="h-52 overflow-hidden mb-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-xl text-clever-darkblue">
                    {member.name}
                  </h4>
                  <p className="text-clever-orange font-medium text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-10 rounded-3xl text-center">
            <h2 className="text-2xl font-bold text-clever-darkblue mb-6">
              Nos Outils & Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 font-medium">
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                Photoshop
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                Illustrator
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                Premiere Pro
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                Figma
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                Laravel
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                React
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                TailwindCSS
              </span>
              <span className="bg-white px-4 py-2 rounded-lg shadow-sm">
                WordPress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
