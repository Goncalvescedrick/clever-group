import { motion } from "framer-motion";
import { BookOpen, Clock, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { formations } from "../data/formations";

export default function Formations() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-clever-darkblue mb-4">
            Nos Formations
          </h1>
          <p className="text-gray-600 text-lg">
            Développez vos compétences avec nos sessions pratiques animées par
            des experts. Boostez votre carrière dans le digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {formations.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-clever-orange text-white font-bold px-4 py-1 rounded-full shadow-md">
                  {course.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-clever-darkblue mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {course.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <Clock size={18} className="text-clever-orange" />{" "}
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                    <BookOpen size={18} className="text-clever-orange" />{" "}
                    {course.level}
                  </div>
                </div>

                <ul className="space-y-2 mb-8 border-t border-gray-200 pt-6">
                  {course.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-green-500 mt-0.5 flex-shrink-0"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-auto w-full bg-clever-darkblue hover:bg-blue-900 text-white text-center py-3 rounded-xl font-bold transition-colors"
                >
                  S'inscrire à cette session
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-clever-orange text-white rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-2xl">
          <Award size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Attestation de Participation
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Toutes nos formations certifiantes incluent la remise d'une
            attestation de participation officielle reconnue, valorisant vos
            nouvelles compétences sur le marché du travail.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-clever-orange px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition-colors"
          >
            Nous contacter pour les prochaines dates
          </Link>
        </div>
      </div>
    </div>
  );
}
