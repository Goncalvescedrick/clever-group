import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles: Record<string, string> = {
  '/': 'CLEVER GROUP - Votre agence créative, votre succès digital',
  '/services': 'Nos Services | CLEVER GROUP',
  '/realisations': 'Nos Réalisations & Portfolio | CLEVER GROUP',
  '/a-propos': 'À Propos de Nous | CLEVER GROUP',
  '/formations': 'Nos Formations Certifiantes | CLEVER GROUP',
  '/devis': 'Demande de Devis Personnalisé | CLEVER GROUP',
  '/contact': 'Contactez Notre Équipe | CLEVER GROUP',
  '/blog': 'Blog, Conseils & Actualités Digitales | CLEVER GROUP',
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    const title = routeTitles[pathname] || 'CLEVER GROUP - Agence Créative & Digitale';
    document.title = title;
  }, [pathname]);

  return null;
}
