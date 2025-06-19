import { ChatMessage, UserProfile } from '../types';

export class ConversationFlow {
  private currentStep = 0;
  private profile: UserProfile = {};
  private messages: ChatMessage[] = [];

  private steps = [
    {
      id: 'welcome',
      question: "Hello! I'm your AI Credit Card Advisor. I'll help you find the perfect credit card based on your needs and spending habits. Let's start with your monthly income. What's your approximate monthly income?",
      options: ['₹20,000 - ₹40,000', '₹40,000 - ₹75,000', '₹75,000 - ₹1,50,000', '₹1,50,000 - ₹3,00,000', '₹3,00,000+', 'Prefer not to say'],
      parser: (answer: string) => {
        const incomeMap: { [key: string]: number } = {
          '₹20,000 - ₹40,000': 30000,
          '₹40,000 - ₹75,000': 57500,
          '₹75,000 - ₹1,50,000': 112500,
          '₹1,50,000 - ₹3,00,000': 225000,
          '₹3,00,000+': 350000,
          'Prefer not to say': 0
        };
        this.profile.monthlyIncome = incomeMap[answer] || 0;
      }
    },
    {
      id: 'spending-dining',
      question: "Great! Now let's understand your spending patterns. How much do you typically spend on dining and restaurants per month?",
      options: ['₹0 - ₹2,000', '₹2,000 - ₹5,000', '₹5,000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000+'],
      parser: (answer: string) => {
        const spendingMap: { [key: string]: number } = {
          '₹0 - ₹2,000': 1000,
          '₹2,000 - ₹5,000': 3500,
          '₹5,000 - ₹10,000': 7500,
          '₹10,000 - ₹20,000': 15000,
          '₹20,000+': 25000
        };
        if (!this.profile.spendingHabits) this.profile.spendingHabits = { dining: 0, fuel: 0, groceries: 0, travel: 0, online: 0, general: 0 };
        this.profile.spendingHabits.dining = spendingMap[answer] || 0;
      }
    },
    {
      id: 'spending-fuel',
      question: "How much do you spend on fuel/petrol per month?",
      options: ['₹0 - ₹2,000', '₹2,000 - ₹5,000', '₹5,000 - ₹8,000', '₹8,000 - ₹15,000', '₹15,000+'],
      parser: (answer: string) => {
        const spendingMap: { [key: string]: number } = {
          '₹0 - ₹2,000': 1000,
          '₹2,000 - ₹5,000': 3500,
          '₹5,000 - ₹8,000': 6500,
          '₹8,000 - ₹15,000': 11500,
          '₹15,000+': 18000
        };
        if (!this.profile.spendingHabits) this.profile.spendingHabits = { dining: 0, fuel: 0, groceries: 0, travel: 0, online: 0, general: 0 };
        this.profile.spendingHabits.fuel = spendingMap[answer] || 0;
      }
    },
    {
      id: 'spending-groceries',
      question: "What about groceries and everyday shopping?",
      options: ['₹2,000 - ₹5,000', '₹5,000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000 - ₹35,000', '₹35,000+'],
      parser: (answer: string) => {
        const spendingMap: { [key: string]: number } = {
          '₹2,000 - ₹5,000': 3500,
          '₹5,000 - ₹10,000': 7500,
          '₹10,000 - ₹20,000': 15000,
          '₹20,000 - ₹35,000': 27500,
          '₹35,000+': 40000
        };
        if (!this.profile.spendingHabits) this.profile.spendingHabits = { dining: 0, fuel: 0, groceries: 0, travel: 0, online: 0, general: 0 };
        this.profile.spendingHabits.groceries = spendingMap[answer] || 0;
      }
    },
    {
      id: 'spending-travel',
      question: "How much do you spend on travel (flights, hotels, bookings) per month on average?",
      options: ['₹0 - ₹3,000', '₹3,000 - ₹8,000', '₹8,000 - ₹15,000', '₹15,000 - ₹30,000', '₹30,000+'],
      parser: (answer: string) => {
        const spendingMap: { [key: string]: number } = {
          '₹0 - ₹3,000': 1500,
          '₹3,000 - ₹8,000': 5500,
          '₹8,000 - ₹15,000': 11500,
          '₹15,000 - ₹30,000': 22500,
          '₹30,000+': 35000
        };
        if (!this.profile.spendingHabits) this.profile.spendingHabits = { dining: 0, fuel: 0, groceries: 0, travel: 0, online: 0, general: 0 };
        this.profile.spendingHabits.travel = spendingMap[answer] || 0;
      }
    },
    {
      id: 'spending-online',
      question: "What's your monthly online shopping spend (Amazon, Flipkart, etc.)?",
      options: ['₹0 - ₹3,000', '₹3,000 - ₹8,000', '₹8,000 - ₹15,000', '₹15,000 - ₹25,000', '₹25,000+'],
      parser: (answer: string) => {
        const spendingMap: { [key: string]: number } = {
          '₹0 - ₹3,000': 1500,
          '₹3,000 - ₹8,000': 5500,
          '₹8,000 - ₹15,000': 11500,
          '₹15,000 - ₹25,000': 20000,
          '₹25,000+': 30000
        };
        if (!this.profile.spendingHabits) this.profile.spendingHabits = { dining: 0, fuel: 0, groceries: 0, travel: 0, online: 0, general: 0 };
        this.profile.spendingHabits.online = spendingMap[answer] || 0;
        this.profile.spendingHabits.general = 5000; // Default general spending
      }
    },
    {
      id: 'benefits',
      question: "Which benefits are most important to you? (You can select multiple)",
      options: ['Airport Lounge Access', 'High Cashback/Rewards', 'Travel Benefits', 'Fuel Benefits', 'Dining Discounts', 'No Annual Fee', 'Welcome Bonus'],
      parser: (answer: string) => {
        // Handle multiple selections
        this.profile.preferredBenefits = answer.split(',').map(s => s.trim());
      }
    },
    {
      id: 'credit-score',
      question: "What's your approximate credit score range?",
      options: ['Excellent (750+)', 'Good (700-750)', 'Fair (650-700)', 'Poor (600-650)', "I don't know"],
      parser: (answer: string) => {
        const scoreMap: { [key: string]: number } = {
          'Excellent (750+)': 780,
          'Good (700-750)': 725,
          'Fair (650-700)': 675,
          'Poor (600-650)': 625,
          "I don't know": 700
        };
        this.profile.creditScore = scoreMap[answer] || 700;
      }
    },
    {
      id: 'primary-use',
      question: "Finally, what will be the primary use of this credit card?",
      options: ['Daily expenses & shopping', 'Travel & lifestyle', 'Building credit history', 'Emergency backup', 'Business expenses'],
      parser: (answer: string) => {
        this.profile.primaryUse = answer;
      }
    }
  ];

  getCurrentStep() {
    return this.steps[this.currentStep];
  }

  addMessage(message: ChatMessage) {
    this.messages.push(message);
  }

  processAnswer(answer: string): boolean {
    const currentStep = this.steps[this.currentStep];
    if (currentStep.parser) {
      currentStep.parser(answer);
    }
    
    this.currentStep++;
    return this.currentStep >= this.steps.length;
  }

  isComplete(): boolean {
    return this.currentStep >= this.steps.length;
  }

  getProfile(): UserProfile {
    return this.profile;
  }

  getMessages(): ChatMessage[] {
    return this.messages;
  }

  reset() {
    this.currentStep = 0;
    this.profile = {};
    this.messages = [];
  }
}