import { Project } from '../types';

export const projectCategories = ['Tous', 'Logos', 'Flyers & Affiches', 'Sites Web', 'Bâches & Kakemono', 'Événements', 'Formations'];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Logo & Charte Burkina Tech',
    category: 'Logos',
    client: 'Burkina Tech',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    description: 'Création complète de l\'identité visuelle, du logo vectoriel moderne et du guide de marque pour un incubateur technologique leader.',
    year: '2024'
  },
  {
    id: 2,
    title: 'Plateforme Web EcoAgri',
    category: 'Sites Web',
    client: 'EcoAgri PME',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Développement d\'une boutique en ligne et vitrine moderne et responsive pour valoriser les produits agro-écologiques locaux.',
    year: '2024'
  },
  {
    id: 3,
    title: 'Affiche Soirée Gala d\'Excellence',
    category: 'Flyers & Affiches',
    client: 'Ouaga Events',
    img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    description: 'Conception graphique haut de gamme pour l\'événement annuel réunissant les leaders d\'entreprises et investisseurs burkinabè.',
    year: '2023'
  },
  {
    id: 4,
    title: 'Kakemono Forum Digital Afrique',
    category: 'Bâches & Kakemono',
    client: 'Chambre de Commerce',
    img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
    description: 'Habillage grand format, roll-ups et signalétique événementielle pour un forum international sur l\'économie numérique.',
    year: '2023'
  },
  {
    id: 5,
    title: 'Couverture Conférence Innovation',
    category: 'Événements',
    client: 'Startup Week',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description: 'Coordination complète de la communication événementielle, badges, signalétique et couverture photo/vidéo de la semaine.',
    year: '2024'
  },
  {
    id: 6,
    title: 'Masterclass Marketing Digital Pro',
    category: 'Formations',
    client: 'CFA Ouaga',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'Animation d\'une formation intensive de 6 semaines auprès de 35 professionnels du secteur public et privé.',
    year: '2024'
  },
];
