import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="text-center max-w-xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 text-clever-orange mb-8 shadow-inner"
        >
          <Search size={48} />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-7xl font-extrabold text-clever-darkblue mb-4 tracking-tight"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-4"
        >
          Oups ! Page introuvable
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-600 mb-8 leading-relaxed"
        >
          La page que vous recherchez semble avoir été déplacée, supprimée ou n'existe pas.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-clever-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <Home size={18} /> Retour à l'accueil
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-clever-darkblue font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all shadow-sm"
          >
            <ArrowLeft size={18} /> Nos services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}