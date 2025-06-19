import { CreditCard, UserProfile, Recommendation } from '../types';
import { creditCards } from '../data/creditCards';

export class RecommendationEngine {
  private calculateEligibilityScore(card: CreditCard, profile: UserProfile): number {
    let score = 0;
    
    // Income eligibility
    if (profile.monthlyIncome && profile.monthlyIncome * 12 >= card.eligibility.minIncome) {
      score += 30;
    } else if (profile.monthlyIncome && profile.monthlyIncome * 12 >= card.eligibility.minIncome * 0.8) {
      score += 15; // Partial credit for close income
    }
    
    // Credit score eligibility
    if (profile.creditScore && profile.creditScore >= card.eligibility.minCreditScore) {
      score += 25;
    } else if (profile.creditScore && profile.creditScore >= card.eligibility.minCreditScore - 50) {
      score += 12; // Partial credit for close score
    }
    
    return score;
  }

  private calculateSpendingScore(card: CreditCard, profile: UserProfile): number {
    if (!profile.spendingHabits) return 0;
    
    let score = 0;
    const totalSpending = Object.values(profile.spendingHabits).reduce((sum, val) => sum + val, 0);
    
    if (totalSpending === 0) return 0;
    
    // Calculate weighted score based on spending categories
    Object.entries(profile.spendingHabits).forEach(([category, amount]) => {
      const categoryKey = category as keyof typeof card.categories;
      const weight = amount / totalSpending;
      const categoryReward = card.categories[categoryKey] || 1;
      score += weight * categoryReward * 10;
    });
    
    return Math.min(score, 40); // Cap at 40 points
  }

  private calculateBenefitsScore(card: CreditCard, profile: UserProfile): number {
    if (!profile.preferredBenefits) return 0;
    
    let score = 0;
    const cardBenefits = card.benefits.join(' ').toLowerCase();
    
    profile.preferredBenefits.forEach(benefit => {
      if (cardBenefits.includes(benefit.toLowerCase())) {
        score += 5;
      }
    });
    
    // Bonus for specific features
    if (profile.preferredBenefits.includes('Airport Lounge') && card.loungeAccess) {
      score += 10;
    }
    
    if (profile.preferredBenefits.includes('Fuel Benefits') && card.fuelSurcharge) {
      score += 10;
    }
    
    return Math.min(score, 30); // Cap at 30 points
  }

  private calculateEstimatedRewards(card: CreditCard, profile: UserProfile): number {
    if (!profile.spendingHabits) return 0;
    
    let totalRewards = 0;
    
    Object.entries(profile.spendingHabits).forEach(([category, monthlyAmount]) => {
      const categoryKey = category as keyof typeof card.categories;
      const annualAmount = monthlyAmount * 12;
      const rewardRate = card.categories[categoryKey] || 1;
      
      if (card.rewardType === 'cashback') {
        totalRewards += (annualAmount * rewardRate) / 100;
      } else {
        // Assuming 1 point = ₹0.25 value for points/miles
        totalRewards += (annualAmount * rewardRate * 0.25) / 100;
      }
    });
    
    // Add welcome bonus value
    if (card.welcomeBonus) {
      const bonusValue = card.rewardType === 'cashback' ? card.welcomeBonus : card.welcomeBonus * 0.25;
      totalRewards += bonusValue;
    }
    
    return Math.round(totalRewards);
  }

  private generateReasons(card: CreditCard, profile: UserProfile): string[] {
    const reasons: string[] = [];
    
    // Eligibility reasons
    if (profile.monthlyIncome && profile.monthlyIncome * 12 >= card.eligibility.minIncome) {
      reasons.push('Meets income eligibility criteria');
    }
    
    // Spending category reasons
    if (profile.spendingHabits) {
      const topCategory = Object.entries(profile.spendingHabits)
        .sort(([,a], [,b]) => b - a)[0];
      
      if (topCategory) {
        const [category, amount] = topCategory;
        const categoryKey = category as keyof typeof card.categories;
        const rewardRate = card.categories[categoryKey];
        
        if (rewardRate > 3) {
          reasons.push(`Excellent ${rewardRate}X rewards on ${category} (your top spending category)`);
        }
      }
    }
    
    // Fee optimization
    if (card.joiningFee === 0 && card.annualFee === 0) {
      reasons.push('No joining or annual fees');
    } else if (card.joiningFee === 0) {
      reasons.push('No joining fee required');
    }
    
    // Special benefits
    if (card.loungeAccess && profile.preferredBenefits?.includes('Airport Lounge')) {
      reasons.push('Complimentary airport lounge access');
    }
    
    if (card.fuelSurcharge && profile.spendingHabits?.fuel && profile.spendingHabits.fuel > 5000) {
      reasons.push('Fuel surcharge waiver saves money on fuel expenses');
    }
    
    // Welcome bonus
    if (card.welcomeBonus && card.welcomeBonus > 1000) {
      reasons.push(`Attractive welcome bonus of ${card.welcomeBonus} ${card.rewardType === 'cashback' ? 'cashback' : 'points'}`);
    }
    
    return reasons.slice(0, 3); // Return top 3 reasons
  }

  getRecommendations(profile: UserProfile): Recommendation[] {
    const recommendations: Recommendation[] = [];
    
    creditCards.forEach(card => {
      const eligibilityScore = this.calculateEligibilityScore(card, profile);
      const spendingScore = this.calculateSpendingScore(card, profile);
      const benefitsScore = this.calculateBenefitsScore(card, profile);
      
      const totalScore = eligibilityScore + spendingScore + benefitsScore;
      const match = Math.round((totalScore / 125) * 100); // Convert to percentage
      
      // Only include cards with reasonable eligibility
      if (eligibilityScore > 20 || (!profile.monthlyIncome && !profile.creditScore)) {
        recommendations.push({
          card,
          score: totalScore,
          reasons: this.generateReasons(card, profile),
          estimatedRewards: this.calculateEstimatedRewards(card, profile),
          match: Math.max(match, 25) // Minimum 25% match for display purposes
        });
      }
    });
    
    return recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, 5); // Return top 5 recommendations
  }
}