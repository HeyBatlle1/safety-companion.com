import React from 'react';
import { motion } from 'framer-motion';
import ModernSkyscraper from '../graphics/ModernSkyscraper';
import { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
  isFirst: boolean;
  isLast: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isFirst, isLast }) => {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`flex items-end space-x-2 max-w-[80%] ${
          isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
        }`}
      >
        {isBot && (
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="w-6 h-6">
                <ModernSkyscraper />
              </div>
            </div>
          </div>
        )}
        
        <div
          className={`rounded-2xl px-4 py-2 ${
            isBot
              ? 'bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 text-white'
              : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
          }`}
        >
          <p className="text-sm">{message.text}</p>
          <p className="text-xs mt-1 opacity-60">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;