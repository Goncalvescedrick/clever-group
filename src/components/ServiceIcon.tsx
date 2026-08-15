import React from 'react';
import { PenTool, Monitor, Megaphone, Users, Award, Briefcase, Search, Zap } from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function ServiceIcon({ name, className = 'text-clever-orange', size = 32 }: ServiceIconProps) {
  switch (name) {
    case 'PenTool':
      return <PenTool size={size} className={className} />;
    case 'Monitor':
      return <Monitor size={size} className={className} />;
    case 'Megaphone':
      return <Megaphone size={size} className={className} />;
    case 'Users':
      return <Users size={size} className={className} />;
    case 'Award':
      return <Award size={size} className={className} />;
    case 'Briefcase':
      return <Briefcase size={size} className={className} />;
    case 'Search':
      return <Search size={size} className={className} />;
    case 'Zap':
      return <Zap size={size} className={className} />;
    default:
      return <Zap size={size} className={className} />;
  }
}
