import React from 'react';
import { EmailTemplate, Recipient } from '../types';

interface EmailPreviewProps {
  template: EmailTemplate;
  recipient: Recipient;
}

const EmailPreview: React.FC<EmailPreviewProps> = ({ template, recipient }) => {
  const parseTemplate = (text: string): string => {
    return text.replace(/{{firstName}}/g, recipient.firstName || '[Prénom]');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Aperçu de l'email
      </h2>
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">À:</span> {recipient.email || 'email@exemple.com'}
          </div>
          <div className="text-sm font-medium mt-1 text-gray-800 dark:text-gray-200">
            {template.subject}
          </div>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 min-h-[200px]">
          <pre className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200">
            {parseTemplate(template.body)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;