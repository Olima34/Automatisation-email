import React from 'react';
import { Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  recipientEmail: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, recipientEmail, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full z-10 transform transition-all duration-300 scale-100 opacity-100">
        <div className="p-6 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Email envoyé avec succès !
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Votre email a été envoyé à <span className="font-medium">{recipientEmail}</span>
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center px-4 py-2 bg-[#fbbf24] text-white font-medium rounded-md hover:bg-amber-500 transition-colors duration-200"
              onClick={onClose}
            >
              Continuer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;