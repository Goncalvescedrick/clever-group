import { Formation } from '../types';

export const formations: Formation[] = [
  {
    id: 'graphisme',
    title: 'Masterclass Graphisme Pro',
    description: 'Maîtrisez Photoshop et Illustrator pour concevoir des visuels percutants, des logos professionnels et des supports de communication impactants.',
    duration: '4 semaines',
    level: 'Débutant à Intermédiaire',
    price: '75 000 FCFA',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Ateliers 100% pratiques sur projets réels',
      'Supports de cours & templates fournis',
      'Accompagnement personnalisé par un directeur artistique',
      'Attestation de participation reconnue',
    ],
  },
  {
    id: 'marketing',
    title: 'Expert en Marketing Digital & Social Media',
    description: 'Développez des stratégies gagnantes sur Facebook, Instagram, LinkedIn et optimisez votre visibilité locale avec le SEO.',
    duration: '6 semaines',
    level: 'Intermédiaire',
    price: '100 000 FCFA',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Études de cas réels d\'entreprises locales',
      'Maîtrise des outils Meta Business Suite & Google Analytics',
      'Création et pilotage de campagnes publicitaires sponsorisées',
      'Attestation de participation reconnue',
    ],
  },
  {
    id: 'webdev',
    title: 'Initiation au Développement Web & CMS',
    description: 'Créez et administrez des sites web modernes avec HTML5, CSS3, Tailwind et maîtrisez les systèmes CMS pour vos clients.',
    duration: '8 semaines',
    level: 'Débutant',
    price: '150 000 FCFA',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    features: [
      'Projet final complet déployé en ligne',
      'Hébergement et nom de domaine inclus pour la pratique',
      'Mentorat individuel hebdomadaire',
      'Attestation de participation reconnue',
    ],
  },
];
