import React, { useState } from 'react';
import { EmailTemplate } from '../types';

interface TemplateEditorProps {
  templates: EmailTemplate[];
  onAdd: (template: Omit<EmailTemplate, 'id'>) => void;
  onUpdate: (id: string, template: EmailTemplate) => void;
  onDelete: (id: string) => void;
}

const TemplateEditor: React.FC<TemplateEditorProps> = ({
  templates,
  onAdd,
  onUpdate,
  onDelete
}) => {
  const [newTemplate, setNewTemplate] = useState<Omit<EmailTemplate, 'id'>>({
    name: '',
    subject: '',
    body: ''
  });

  const handleAdd = () => {
    if (!newTemplate.name.trim()) return;
    onAdd(newTemplate);
    setNewTemplate({ name: '', subject: '', body: '' });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Gestion des modèles
      </h2>
      {templates.map(template => (
        <div key={template.id} className="space-y-2 border-b pb-4 mb-4">
          <input
            type="text"
            value={template.name}
            onChange={e =>
              onUpdate(template.id, { ...template, name: e.target.value })
            }
            className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
          />
          <input
            type="text"
            value={template.subject}
            onChange={e =>
              onUpdate(template.id, { ...template, subject: e.target.value })
            }
            className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
          />
          <textarea
            value={template.body}
            onChange={e =>
              onUpdate(template.id, { ...template, body: e.target.value })
            }
            className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
          />
          <button
            onClick={() => onDelete(template.id)}
            className="text-red-600 text-sm"
          >
            Supprimer
          </button>
        </div>
      ))}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Nom"
          value={newTemplate.name}
          onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
          className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
        />
        <input
          type="text"
          placeholder="Sujet"
          value={newTemplate.subject}
          onChange={e =>
            setNewTemplate({ ...newTemplate, subject: e.target.value })
          }
          className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
        />
        <textarea
          placeholder="Contenu"
          value={newTemplate.body}
          onChange={e => setNewTemplate({ ...newTemplate, body: e.target.value })}
          className="w-full px-3 py-1 border rounded-md dark:bg-gray-700"
        />
        <button
          onClick={handleAdd}
          className="bg-amber-500 text-white px-4 py-2 rounded-md"
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default TemplateEditor;
