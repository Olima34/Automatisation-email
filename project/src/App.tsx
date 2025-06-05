import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipientForm from './components/RecipientForm';
import TemplateSelector from './components/TemplateSelector';
import EmailPreview from './components/EmailPreview';
import SendButton from './components/SendButton';
import SuccessModal from './components/SuccessModal';
import { emailTemplates } from './data/emailTemplates';
import { Recipient } from './types';

function App() {
  const [recipient, setRecipient] = useState<Recipient>({
    firstName: '',
    email: ''
  });
  
  const [selectedTemplateId, setSelectedTemplateId] = useState(emailTemplates[0].id);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const selectedTemplate = emailTemplates.find(template => template.id === selectedTemplateId) || emailTemplates[0];
  
  const isFormValid = () => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient.email);
    return recipient.firstName.trim() !== '' && isEmailValid;
  };
  
  const handleSend = () => {
    setShowSuccessModal(true);
  };
  
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    // Reset form after sending
    setRecipient({
      firstName: '',
      email: ''
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main className="flex-grow py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Automatisez vos emails de démarchage
            </h2>
            <p className="mt-3 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Créez et envoyez facilement des emails personnalisés pour votre prospection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <RecipientForm 
                recipient={recipient} 
                onChange={setRecipient} 
              />
              
              <TemplateSelector 
                templates={emailTemplates}
                selectedTemplateId={selectedTemplateId}
                onSelect={setSelectedTemplateId}
              />
            </div>
            
            <EmailPreview 
              template={selectedTemplate}
              recipient={recipient}
            />
          </div>
          
          <div className="flex justify-center mt-8">
            <SendButton 
              recipient={recipient}
              isValid={isFormValid()}
              onSend={handleSend}
            />
          </div>
        </div>
      </main>
      
      <Footer />
      
      <SuccessModal 
        isOpen={showSuccessModal}
        recipientEmail={recipient.email}
        onClose={handleCloseSuccessModal}
      />
    </div>
  );
}

export default App;