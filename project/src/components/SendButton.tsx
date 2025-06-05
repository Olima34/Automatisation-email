import React, { useState } from 'react';
import { Recipient } from '../types';

interface SendButtonProps {
  recipient: Recipient;
  isValid: boolean;
  onSend: () => Promise<void>;
}

const SendButton: React.FC<SendButtonProps> = ({ recipient, isValid, onSend }) => {
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!isValid) return;

    setIsSending(true);

    try {
      await onSend();
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleSend}
        disabled={!isValid || isSending}
        className={`w-full sm:w-auto px-8 py-3 rounded-md font-medium text-white transition-all duration-300 ${
          isValid && !isSending
            ? 'bg-[#fbbf24] hover:bg-amber-500 shadow-md hover:shadow-lg'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isSending ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
              <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </div>
        ) : (
          "Envoyer l'email"
        )}
      </button>
      {!isValid && recipient.email && !isValidEmail(recipient.email) && (
        <p className="mt-2 text-red-500 text-sm">Veuillez entrer une adresse email valide</p>
      )}
      {!isValid && !recipient.firstName && recipient.email && (
        <p className="mt-2 text-red-500 text-sm">Veuillez entrer le prénom du destinataire</p>
      )}
    </div>
  );
};

// Simple email validation
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export default SendButton;