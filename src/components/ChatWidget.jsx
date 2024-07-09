import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    window.gtag('event', 'chat_widget', {
      'event_category': 'Engagement',
      'event_label': isOpen ? 'Close Chat' : 'Open Chat',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Chat with Us</h3>
            <Button variant="ghost" size="sm" onClick={toggleChat} aria-label="Close chat">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p className="text-gray-600 dark:text-gray-300">Hello! How can we help you today?</p>
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 rounded border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      ) : (
        <Button onClick={toggleChat} className="rounded-full w-12 h-12" aria-label="Open chat">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;