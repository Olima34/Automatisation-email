import React from 'react';
import { Recipient } from '../types';

interface RecipientFormProps {
  recipient: Recipient;
  onChange: (recipient: Recipient) => void;
}

const RecipientForm: React.FC<RecipientFormProps> = ({ recipient, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...recipient,
      [name]: value
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Destinataire
      </h2>
      <div className="space-y-4">
        <div>
          <label 
            htmlFor="firstName" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={recipient.firstName}
            onChange={handleChange}
            placeholder="Prénom du destinataire"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
            required
          />
        </div>
        <div>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Adresse Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={recipient.email}
            onChange={handleChange}
            placeholder="email@exemple.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;