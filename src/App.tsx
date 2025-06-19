import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatInterface } from './components/ChatInterface';
import { RecommendationResults } from './components/RecommendationResults';
import { LoadingScreen } from './components/LoadingScreen';
import { RecommendationEngine } from './utils/recommendationEngine';
import { UserProfile, Recommendation } from './types';

type AppState = 'chat' | 'loading' | 'results';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('chat');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [recommendationEngine] = useState(new RecommendationEngine());

  const handleChatComplete = (profile: UserProfile) => {
    setUserProfile(profile);
    setCurrentState('loading');
    
    // Simulate AI processing time
    setTimeout(() => {
      const recs = recommendationEngine.getRecommendations(profile);
      setRecommendations(recs);
      setCurrentState('results');
    }, 5000);
  };

  const handleRestart = () => {
    setCurrentState('chat');
    setUserProfile(null);
    setRecommendations([]);
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentState === 'chat' && (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col"
          >
            <ChatInterface onComplete={handleChatComplete} />
          </motion.div>
        )}
        
        {currentState === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingScreen />
          </motion.div>
        )}
        
        {currentState === 'results' && userProfile && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RecommendationResults
              recommendations={recommendations}
              profile={userProfile}
              onRestart={handleRestart}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;