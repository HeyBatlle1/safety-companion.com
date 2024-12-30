import React from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, Mic, Image } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChange, onSend, disabled }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSend(value);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 border-t border-blue-500/20 bg-slate-800/50 backdrop-blur-sm"
    >
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
          disabled={disabled}
        >
          <Paperclip className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
          disabled={disabled}
        >
          <Image className="w-5 h-5" />
        </motion.button>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={disabled ? 'AI is typing...' : 'Type your message...'}
          className="flex-1 bg-slate-700/50 border border-blue-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/40"
          disabled={disabled}
        />
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
          disabled={disabled}
        >
          <Mic className="w-5 h-5" />
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={`p-2 rounded-lg text-white ${
            disabled
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-cyan-500'
          }`}
          disabled={disabled}
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ChatInput;