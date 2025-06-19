import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, ArrowRight, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { ConversationFlow } from '../utils/conversationFlow';

interface ChatInterfaceProps {
  onComplete: (profile: any) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [conversationFlow] = useState(new ConversationFlow());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Initialize conversation
    const initMessage: ChatMessage = {
      id: '1',
      type: 'bot',
      content: conversationFlow.getCurrentStep().question,
      timestamp: new Date(),
      options: conversationFlow.getCurrentStep().options
    };
    setMessages([initMessage]);
  }, []);

  const addBotMessage = (content: string, options?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'bot',
        content,
        timestamp: new Date(),
        options
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleOptionSelect = (option: string, allowMultiple = false) => {
    if (allowMultiple) {
      setSelectedOptions(prev => {
        if (prev.includes(option)) {
          return prev.filter(opt => opt !== option);
        } else {
          return [...prev, option];
        }
      });
    } else {
      // Single selection - process immediately
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: option,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
      
      const isComplete = conversationFlow.processAnswer(option);
      
      if (isComplete) {
        addBotMessage("Perfect! I have all the information I need. Let me analyze your profile and find the best credit cards for you...", []);
        setTimeout(() => {
          onComplete(conversationFlow.getProfile());
        }, 2000);
      } else {
        const nextStep = conversationFlow.getCurrentStep();
        addBotMessage(nextStep.question, nextStep.options);
      }
    }
  };

  const handleMultipleSelection = () => {
    if (selectedOptions.length === 0) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: selectedOptions.join(', '),
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    
    const isComplete = conversationFlow.processAnswer(selectedOptions.join(','));
    setSelectedOptions([]);
    
    if (isComplete) {
      addBotMessage("Perfect! I have all the information I need. Let me analyze your profile and find the best credit cards for you...", []);
      setTimeout(() => {
        onComplete(conversationFlow.getProfile());
      }, 2000);
    } else {
      const nextStep = conversationFlow.getCurrentStep();
      addBotMessage(nextStep.question, nextStep.options);
    }
  };

  const currentStep = conversationFlow.getCurrentStep();
  const isMultipleSelection = currentStep?.id === 'benefits';

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Credit Card AI Advisor</h1>
            <p className="text-sm text-gray-500">Finding your perfect credit card match</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-3 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    : 'bg-white text-gray-800 shadow-md border border-gray-100'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Options */}
      {!isTyping && messages.length > 0 && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].options && (
        <div className="p-4 bg-white border-t border-gray-200">
          {isMultipleSelection && (
            <div className="mb-3 text-sm text-gray-600 flex items-center space-x-2">
              <span>Select all that apply:</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                {selectedOptions.length} selected
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {messages[messages.length - 1].options!.map((option, index) => (
              <motion.button
                key={option}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleOptionSelect(option, isMultipleSelection)}
                className={`p-3 text-left rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                  selectedOptions.includes(option)
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{option}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </div>
              </motion.button>
            ))}
          </div>

          {isMultipleSelection && selectedOptions.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleMultipleSelection}
              className="w-full mt-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Continue</span>
              <Send className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
};