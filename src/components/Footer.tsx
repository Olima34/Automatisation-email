import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-4 px-4 sm:px-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} EmailPro. Tous droits réservés.</p>
        <p className="mt-1 text-gray-400">Inspiré par le design de Lunettes de Zac</p>
      </div>
    </footer>
  );
};

export default Footer;