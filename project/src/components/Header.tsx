import React from 'react';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0f172a] text-white py-6 px-4 sm:px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Mail className="h-8 w-8 text-[#fbbf24]" />
          <h1 className="text-2xl font-bold tracking-tight">
            Email<span className="text-[#fbbf24]">Pro</span>
          </h1>
        </div>
        <div className="text-sm font-medium">
          <span className="hidden sm:inline">Automatisation de </span>Démarchage par Email
        </div>
      </div>
    </header>
  );
};

export default Header;