import React from 'react';
import { EmailTemplate } from '../types';

interface TemplateSelectorProps {
  templates: EmailTemplate[];
  selectedTemplateId: string;
  onSelect: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  templates, 
  selectedTemplateId, 
  onSelect 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Type de message
      </h2>
      <div className="space-y-3">
        {templates.map(template => (
          <div 
            key={template.id}
            className={`border rounded-md p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 ${
              selectedTemplateId === template.id 
                ? 'border-[#fbbf24] bg-amber-50 dark:bg-gray-700 shadow-sm' 
                : 'border-gray-200 dark:border-gray-600'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full mr-3 flex-shrink-0 ${
                selectedTemplateId === template.id 
                  ? 'bg-[#fbbf24]' 
                  : 'border border-gray-400 dark:border-gray-500'
              }`}>
                {selectedTemplateId === template.id && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{template.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{template.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;