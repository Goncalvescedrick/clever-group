export interface Service {
  id: string;
  name: string;
  description: string;
  tools?: string;
  iconName: 'PenTool' | 'Monitor' | 'Megaphone' | 'Users' | 'Award' | 'Briefcase' | 'Search' | 'Zap';
  isPopular?: boolean;
  isNew?: boolean;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  img: string;
  description: string;
  year: string;
}

export interface Formation {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  company: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}
