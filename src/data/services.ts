import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'graphic-design',
    name: 'Conception Graphique',
    iconName: 'PenTool',
    description: 'Identités visuelles, logos, affiches, flyers, kakemonos, banderoles, cartes de visite, bâches et tickets événementiels.',
    tools: 'Photoshop, Illustrator, InDesign, After Effects, Premiere Pro.'
  },
  {
    id: 'digital-com',
    name: 'Communication Digitale',
    iconName: 'Megaphone',
    description: 'Stratégies de communication 360°, rédaction de contenus captivants, relations publiques et gestion d\'e-réputation.',
  },
  {
    id: 'advertising',
    name: 'Publicité & Campagnes',
    iconName: 'Search',
    description: 'Campagnes publicitaires multicanales ciblées (digital + print) pour décupler votre visibilité et vos conversions.',
  },
  {
    id: 'digital-marketing',
    name: 'Marketing Digital & SEO',
    iconName: 'Briefcase',
    description: 'Référencement naturel (SEO), Google Ads, gestion des réseaux sociaux (Community Management) et tunnels d\'acquisition.',
  },
  {
    id: 'events',
    name: 'Événementiel & Salons',
    iconName: 'Users',
    description: 'Organisation intégrale de salons, conférences, lancements de produits et soirées de prestige d\'entreprises.',
  },
  {
    id: 'training',
    name: 'Formations Certifiantes',
    iconName: 'Award',
    description: 'Sessions pratiques de montée en compétences en graphisme, marketing digital et développement web avec attestation.',
  },
];
