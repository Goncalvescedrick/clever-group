import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Réalisations', path: '/realisations' },
  { name: 'À Propos', path: '/a-propos' },
  { name: 'Formations', path: '/formations' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-clever-darkblue tracking-tight">
              <span className="text-clever-orange text-3xl">C</span>LEVER
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-clever-orange' : 'text-gray-700 hover:text-clever-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/devis"
                className="bg-clever-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Demander un devis
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-clever-orange transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden shadow-lg"
            >
              <nav className="flex flex-col px-4 pt-4 pb-6 gap-4">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium transition-colors ${
                      location.pathname === link.path ? 'text-clever-orange font-bold' : 'text-gray-700 hover:text-clever-orange'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/devis"
                  onClick={() => setIsOpen(false)}
                  className="bg-clever-orange text-white text-center px-4 py-3 rounded-xl font-semibold mt-2 shadow-md"
                >
                  Demander un devis
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-clever-darkblue text-white pt-16 pb-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-4">
              <span className="text-clever-orange text-3xl">C</span>LEVER
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              "Votre agence créative, votre succès digital"
            </p>
            <p className="text-gray-400 text-sm">
              Ouagadougou, Tampouy secteur 16<br/>
              Burkina Faso
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-clever-orange">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/a-propos" className="hover:text-clever-orange transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="hover:text-clever-orange transition-colors">Services</Link></li>
              <li><Link to="/realisations" className="hover:text-clever-orange transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="hover:text-clever-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-clever-orange">Nos Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Communication Digitale</li>
              <li>Conception Graphique</li>
              <li>Événementiel</li>
              <li>Création de Sites Web</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4 text-clever-orange">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>+226 55 71 22 21</li>
              <li>+226 51 18 24 83</li>
              <li>clevergroup925@gmail.com</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CLEVER GROUP"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clever-orange transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CLEVER GROUP"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clever-orange transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn CLEVER GROUP"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-clever-orange transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center border-t border-white/10 pt-8 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CLEVER GROUP. Tous droits réservés.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/22655712221?text=Bonjour%20CLEVER%20GROUP,%20je%20souhaite%20des%20informations%20sur%20vos%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
