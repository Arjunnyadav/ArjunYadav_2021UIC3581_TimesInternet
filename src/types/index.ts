export interface CreditCard {
  id: string;
  name: string;
  issuer: string;
  image: string;
  joiningFee: number;
  annualFee: number;
  rewardType: 'cashback' | 'points' | 'miles';
  rewardRate: number;
  eligibility: {
    minIncome: number;
    minCreditScore: number;
    ageRange: [number, number];
  };
  categories: {
    dining: number;
    fuel: number;
    groceries: number;
    travel: number;
    online: number;
    general: number;
  };
  benefits: string[];
  description: string;
  applyUrl: string;
  welcomeBonus?: number;
  loungeAccess?: boolean;
  fuelSurcharge?: boolean;
}

export interface UserProfile {
  monthlyIncome?: number;
  spendingHabits?: {
    dining: number;
    fuel: number;
    groceries: number;
    travel: number;
    online: number;
    general: number;
  };
  preferredBenefits?: string[];
  existingCards?: string[];
  creditScore?: number;
  primaryUse?: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  options?: string[];
}

export interface Recommendation {
  card: CreditCard;
  score: number;
  reasons: string[];
  estimatedRewards: number;
  match: number;
}