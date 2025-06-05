import { useEffect, useState } from 'react';
import { EmailTemplate } from '../types';
import { emailTemplates as defaultTemplates } from '../data/emailTemplates';

const STORAGE_KEY = 'emailTemplates';

export const useEmailTemplates = () => {
  const [templates, setTemplates] = useState<EmailTemplate[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored) as EmailTemplate[];
      } catch {
        return defaultTemplates;
      }
    }
    return defaultTemplates;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
  }, [templates]);

  const addTemplate = (template: Omit<EmailTemplate, 'id'>) => {
    const newTemplate: EmailTemplate = {
      ...template,
      id: Date.now().toString()
    };
    setTemplates(prev => [...prev, newTemplate]);
  };

  const updateTemplate = (id: string, updated: EmailTemplate) => {
    setTemplates(prev => prev.map(t => (t.id === id ? { ...updated } : t)));
  };

  const deleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
  };

  return { templates, addTemplate, updateTemplate, deleteTemplate };
};

