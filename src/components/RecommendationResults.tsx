import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Star, 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Gift, 
  Plane,
  Fuel,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { Recommendation, UserProfile } from '../types';

interface RecommendationResultsProps {
  recommendations: Recommendation[];
  profile: UserProfile;
  onRestart: () => void;
}

export const RecommendationResults: React.FC<RecommendationResultsProps> = ({
  recommendations,
  profile,
  onRestart
}) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getMatchColor = (match: number) => {
    if (match >= 80) return 'text-green-600 bg-green-50';
    if (match >= 60) return 'text-blue-600 bg-blue-50';
    if (match >= 40) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const totalMonthlySpend = profile.spendingHabits 
    ? Object.values(profile.spendingHabits).reduce((sum, val) => sum + val, 0)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Personalized Recommendations</h1>
              <p className="text-gray-600 mt-1">
                Based on your monthly spending of {formatCurrency(totalMonthlySpend)} and preferences
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>{showComparison ? 'Hide' : 'Compare'} Cards</span>
              </button>
              <button
                onClick={onRestart}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Start Over</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Spending</p>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(totalMonthlySpend)}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Top Match</p>
                <p className="text-lg font-semibold text-gray-900">{recommendations[0]?.match}%</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Gift className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Est. Annual Rewards</p>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(recommendations[0]?.estimatedRewards || 0)}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Cards Analyzed</p>
                <p className="text-lg font-semibold text-gray-900">{recommendations.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        {showComparison ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Card Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Match</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annual Fee</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rewards</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benefits</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apply</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recommendations.map((rec, index) => (
                    <tr key={rec.card.id} className={index === 0 ? 'bg-blue-50' : ''}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={rec.card.image}
                            alt={rec.card.name}
                            className="w-10 h-6 object-cover rounded mr-3"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{rec.card.name}</div>
                            <div className="text-sm text-gray-500">{rec.card.issuer}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMatchColor(rec.match)}`}>
                          {rec.match}% match
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {rec.card.annualFee === 0 ? 'Free' : formatCurrency(rec.card.annualFee)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {formatCurrency(rec.estimatedRewards)}/year
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-1">
                          {rec.card.loungeAccess && <Plane className="w-4 h-4 text-blue-500" title="Lounge Access" />}
                          {rec.card.fuelSurcharge && <Fuel className="w-4 h-4 text-green-500" title="Fuel Benefits" />}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          href={rec.card.applyUrl}
                          className="text-blue-600 hover:text-blue-900 text-sm font-medium flex items-center space-x-1"
                        >
                          <span>Apply</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={recommendation.card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 ${
                  index === 0 ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
                }`}
              >
                {index === 0 && (
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span className="text-sm font-medium">Best Match</span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <img
                        src={recommendation.card.image}
                        alt={recommendation.card.name}
                        className="w-16 h-10 object-cover rounded-lg shadow-sm"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{recommendation.card.name}</h3>
                        <p className="text-gray-600">{recommendation.card.issuer}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMatchColor(recommendation.match)}`}>
                            {recommendation.match}% match
                          </span>
                          <span className="text-sm text-gray-500">
                            Est. {formatCurrency(recommendation.estimatedRewards)}/year rewards
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Annual Fee</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {recommendation.card.annualFee === 0 ? 'Free' : formatCurrency(recommendation.card.annualFee)}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedCard(selectedCard === recommendation.card.id ? null : recommendation.card.id)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2"
                      >
                        <span>{selectedCard === recommendation.card.id ? 'Hide Details' : 'View Details'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Reasons */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Why this card is perfect for you:</h4>
                    <div className="space-y-1">
                      {recommendation.reasons.map((reason, reasonIndex) => (
                        <div key={reasonIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-600">{reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedCard === recommendation.card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-3">Reward Rates</h5>
                          <div className="space-y-2">
                            {Object.entries(recommendation.card.categories).map(([category, rate]) => (
                              <div key={category} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600 capitalize">{category}</span>
                                <span className="text-sm font-medium text-gray-900">{rate}X</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-3">Key Benefits</h5>
                          <div className="space-y-1">
                            {recommendation.card.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-gray-600">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-600">{recommendation.card.description}</p>
                        </div>
                        <a
                          href={recommendation.card.applyUrl}
                          className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center space-x-2"
                        >
                          <span>Apply Now</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Recommendations are based on your provided information and spending patterns. 
              Always verify card details and terms before applying.
            </p>
            <button
              onClick={onRestart}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center space-x-2 mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Get New Recommendations</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};