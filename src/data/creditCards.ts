import { CreditCard } from '../types';

export const creditCards: CreditCard[] = [
  {
    id: 'hdfc-regalia',
    name: 'HDFC Bank Regalia Credit Card',
    issuer: 'HDFC Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 2500,
    annualFee: 2500,
    rewardType: 'points',
    rewardRate: 4,
    eligibility: {
      minIncome: 600000,
      minCreditScore: 750,
      ageRange: [21, 65]
    },
    categories: {
      dining: 4,
      fuel: 1,
      groceries: 2,
      travel: 4,
      online: 2,
      general: 1
    },
    benefits: [
      'Complimentary airport lounge access',
      '24/7 concierge services',
      'Fuel surcharge waiver',
      'Dining privileges'
    ],
    description: 'Premium lifestyle card with exclusive privileges',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 10000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'sbi-cashback',
    name: 'SBI Cashback Credit Card',
    issuer: 'State Bank of India',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 999,
    annualFee: 999,
    rewardType: 'cashback',
    rewardRate: 5,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 700,
      ageRange: [21, 60]
    },
    categories: {
      dining: 5,
      fuel: 1,
      groceries: 1,
      travel: 1,
      online: 5,
      general: 1
    },
    benefits: [
      '5% cashback on online spends',
      '1% cashback on other spends',
      'No annual fee with spending criteria',
      'Instant cashback credit'
    ],
    description: 'Best cashback card for online shopping',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 2000
  },
  {
    id: 'axis-magnus',
    name: 'Axis Bank Magnus Credit Card',
    issuer: 'Axis Bank',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 12000,
    annualFee: 12000,
    rewardType: 'points',
    rewardRate: 12,
    eligibility: {
      minIncome: 1500000,
      minCreditScore: 780,
      ageRange: [21, 70]
    },
    categories: {
      dining: 25,
      fuel: 5,
      groceries: 5,
      travel: 25,
      online: 12,
      general: 12
    },
    benefits: [
      'Up to 25X rewards on travel & dining',
      'Complimentary airport transfers',
      'Priority pass membership',
      'Golf privileges'
    ],
    description: 'Ultra-premium card with extraordinary rewards',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 25000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'icici-amazon-pay',
    name: 'ICICI Amazon Pay Credit Card',
    issuer: 'ICICI Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'cashback',
    rewardRate: 5,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 650,
      ageRange: [21, 65]
    },
    categories: {
      dining: 2,
      fuel: 2,
      groceries: 2,
      travel: 2,
      online: 5,
      general: 1
    },
    benefits: [
      '5% cashback on Amazon purchases',
      '2% cashback on bill payments',
      'No annual fee lifetime',
      'Instant approval for Prime members'
    ],
    description: 'Perfect for Amazon shoppers',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 1000
  },
  {
    id: 'kotak-811',
    name: 'Kotak 811 #Dream Different Credit Card',
    issuer: 'Kotak Mahindra Bank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 500,
    rewardType: 'points',
    rewardRate: 4,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 4,
      fuel: 1,
      groceries: 2,
      travel: 2,
      online: 4,
      general: 1
    },
    benefits: [
      '4X rewards on online shopping',
      '2X rewards on dining',
      'Fuel surcharge waiver',
      'Easy approval process'
    ],
    description: 'Entry-level rewards card with good benefits',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 500,
    fuelSurcharge: true
  },
  {
    id: 'yes-marquee',
    name: 'YES Bank Marquee Credit Card',
    issuer: 'YES Bank',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 5000,
    annualFee: 5000,
    rewardType: 'points',
    rewardRate: 6,
    eligibility: {
      minIncome: 800000,
      minCreditScore: 750,
      ageRange: [21, 65]
    },
    categories: {
      dining: 6,
      fuel: 3,
      groceries: 3,
      travel: 6,
      online: 3,
      general: 3
    },
    benefits: [
      '6X rewards on dining & travel',
      'Airport lounge access',
      'Movie ticket discounts',
      'Concierge services'
    ],
    description: 'Premium lifestyle card with balanced rewards',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 8000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'indusind-legend',
    name: 'IndusInd Bank Legend Credit Card',
    issuer: 'IndusInd Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 10000,
    annualFee: 10000,
    rewardType: 'points',
    rewardRate: 10,
    eligibility: {
      minIncome: 1200000,
      minCreditScore: 770,
      ageRange: [21, 70]
    },
    categories: {
      dining: 15,
      fuel: 5,
      groceries: 5,
      travel: 15,
      online: 10,
      general: 5
    },
    benefits: [
      'Up to 15X rewards on dining & travel',
      'Complimentary golf rounds',
      'Priority Pass membership',
      'Luxury hotel benefits'
    ],
    description: 'Ultra-premium card for affluent customers',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 20000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'rbl-world-safari',
    name: 'RBL Bank World Safari Credit Card',
    issuer: 'RBL Bank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 3000,
    annualFee: 3000,
    rewardType: 'points',
    rewardRate: 8,
    eligibility: {
      minIncome: 500000,
      minCreditScore: 720,
      ageRange: [21, 65]
    },
    categories: {
      dining: 8,
      fuel: 4,
      groceries: 4,
      travel: 8,
      online: 4,
      general: 2
    },
    benefits: [
      '8X rewards on travel & dining',
      'Airport lounge access',
      'Travel insurance coverage',
      'Concierge services'
    ],
    description: 'Travel-focused premium card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 5000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'amex-gold',
    name: 'American Express Gold Card',
    issuer: 'American Express',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 4500,
    annualFee: 4500,
    rewardType: 'points',
    rewardRate: 4,
    eligibility: {
      minIncome: 600000,
      minCreditScore: 750,
      ageRange: [21, 65]
    },
    categories: {
      dining: 4,
      fuel: 2,
      groceries: 2,
      travel: 4,
      online: 2,
      general: 1
    },
    benefits: [
      'Membership Rewards points',
      'Travel insurance coverage',
      'Purchase protection',
      'Global acceptance'
    ],
    description: 'Internationally accepted premium card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 15000,
    loungeAccess: true
  },
  {
    id: 'standard-chartered-ultimate',
    name: 'Standard Chartered Ultimate Credit Card',
    issuer: 'Standard Chartered',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 5000,
    annualFee: 5000,
    rewardType: 'cashback',
    rewardRate: 10,
    eligibility: {
      minIncome: 1000000,
      minCreditScore: 760,
      ageRange: [21, 65]
    },
    categories: {
      dining: 10,
      fuel: 5,
      groceries: 5,
      travel: 10,
      online: 5,
      general: 3
    },
    benefits: [
      '10% cashback on dining & travel',
      'Airport lounge access',
      'Golf privileges',
      'Concierge services'
    ],
    description: 'High cashback premium card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 12000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'citi-rewards',
    name: 'Citi Rewards Credit Card',
    issuer: 'Citibank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 1000,
    annualFee: 1000,
    rewardType: 'points',
    rewardRate: 2,
    eligibility: {
      minIncome: 400000,
      minCreditScore: 700,
      ageRange: [21, 65]
    },
    categories: {
      dining: 2,
      fuel: 5,
      groceries: 5,
      travel: 2,
      online: 2,
      general: 1
    },
    benefits: [
      '5X rewards on fuel & groceries',
      'Reward points never expire',
      'Flexible redemption options',
      'Welcome gift vouchers'
    ],
    description: 'Versatile rewards card for everyday spending',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 3000,
    fuelSurcharge: true
  },
  {
    id: 'hsbc-cashback',
    name: 'HSBC Cashback Credit Card',
    issuer: 'HSBC',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 750,
    annualFee: 750,
    rewardType: 'cashback',
    rewardRate: 6,
    eligibility: {
      minIncome: 350000,
      minCreditScore: 680,
      ageRange: [21, 65]
    },
    categories: {
      dining: 6,
      fuel: 6,
      groceries: 6,
      travel: 2,
      online: 6,
      general: 1
    },
    benefits: [
      '6% cashback on dining, fuel & groceries',
      'No cashback redemption limit',
      'Instant cashback credit',
      'Easy online management'
    ],
    description: 'High cashback card for daily expenses',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 2000
  },
  {
    id: 'bob-premier',
    name: 'Bank of Baroda Premier Credit Card',
    issuer: 'Bank of Baroda',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 1500,
    annualFee: 1500,
    rewardType: 'points',
    rewardRate: 3,
    eligibility: {
      minIncome: 300000,
      minCreditScore: 650,
      ageRange: [21, 65]
    },
    categories: {
      dining: 3,
      fuel: 3,
      groceries: 3,
      travel: 3,
      online: 3,
      general: 1
    },
    benefits: [
      '3X rewards on all categories',
      'Fuel surcharge waiver',
      'Railway lounge access',
      'Insurance coverage'
    ],
    description: 'Balanced rewards card with good benefits',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 2500,
    fuelSurcharge: true
  },
  {
    id: 'pnb-rupay-select',
    name: 'PNB RuPay Select Credit Card',
    issuer: 'Punjab National Bank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 1000,
    annualFee: 1000,
    rewardType: 'points',
    rewardRate: 2,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 2,
      fuel: 2,
      groceries: 2,
      travel: 2,
      online: 2,
      general: 1
    },
    benefits: [
      '2X rewards on all purchases',
      'Railway lounge access',
      'Fuel surcharge waiver',
      'Insurance benefits'
    ],
    description: 'RuPay network card with decent rewards',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 1000,
    fuelSurcharge: true
  },
  {
    id: 'federal-celesta',
    name: 'Federal Bank Celesta Credit Card',
    issuer: 'Federal Bank',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 2000,
    annualFee: 2000,
    rewardType: 'points',
    rewardRate: 5,
    eligibility: {
      minIncome: 400000,
      minCreditScore: 700,
      ageRange: [21, 65]
    },
    categories: {
      dining: 5,
      fuel: 3,
      groceries: 3,
      travel: 5,
      online: 5,
      general: 2
    },
    benefits: [
      '5X rewards on dining, travel & online',
      'Movie ticket discounts',
      'Fuel surcharge waiver',
      'Welcome gift vouchers'
    ],
    description: 'Feature-rich card for young professionals',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 4000,
    fuelSurcharge: true
  },
  {
    id: 'idfc-first-millennia',
    name: 'IDFC FIRST Millennia Credit Card',
    issuer: 'IDFC FIRST Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 1000,
    rewardType: 'cashback',
    rewardRate: 10,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 650,
      ageRange: [21, 65]
    },
    categories: {
      dining: 10,
      fuel: 2,
      groceries: 2,
      travel: 5,
      online: 10,
      general: 1
    },
    benefits: [
      '10X rewards on online shopping',
      '5X rewards on travel bookings',
      'Monthly milestone benefits',
      'Easy eligibility criteria'
    ],
    description: 'High rewards card for millennials',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 5000
  },
  {
    id: 'au-zenith',
    name: 'AU Bank Zenith Credit Card',
    issuer: 'AU Small Finance Bank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 3000,
    annualFee: 3000,
    rewardType: 'points',
    rewardRate: 8,
    eligibility: {
      minIncome: 600000,
      minCreditScore: 720,
      ageRange: [21, 65]
    },
    categories: {
      dining: 8,
      fuel: 4,
      groceries: 4,
      travel: 8,
      online: 4,
      general: 2
    },
    benefits: [
      '8X rewards on dining & travel',
      'Airport lounge access',
      'Golf privileges',
      'Concierge services'
    ],
    description: 'Premium card with excellent rewards',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 8000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'idbi-signature',
    name: 'IDBI Bank Signature Credit Card',
    issuer: 'IDBI Bank',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 2500,
    annualFee: 2500,
    rewardType: 'points',
    rewardRate: 4,
    eligibility: {
      minIncome: 500000,
      minCreditScore: 700,
      ageRange: [21, 65]
    },
    categories: {
      dining: 4,
      fuel: 4,
      groceries: 4,
      travel: 4,
      online: 2,
      general: 1
    },
    benefits: [
      '4X rewards on dining, fuel & groceries',
      'Airport lounge access',
      'Travel insurance',
      'Purchase protection'
    ],
    description: 'Well-rounded premium card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 5000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'dbs-treasures',
    name: 'DBS Treasures Credit Card',
    issuer: 'DBS Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 8000,
    annualFee: 8000,
    rewardType: 'points',
    rewardRate: 12,
    eligibility: {
      minIncome: 1000000,
      minCreditScore: 750,
      ageRange: [21, 65]
    },
    categories: {
      dining: 12,
      fuel: 6,
      groceries: 6,
      travel: 12,
      online: 6,
      general: 4
    },
    benefits: [
      '12X rewards on dining & travel',
      'Priority Pass membership',
      'Concierge services',
      'Luxury hotel benefits'
    ],
    description: 'Luxury card for high net worth individuals',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 15000,
    loungeAccess: true,
    fuelSurcharge: true
  },
  {
    id: 'indian-oil-hdfc',
    name: 'Indian Oil HDFC Credit Card',
    issuer: 'HDFC Bank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'cashback',
    rewardRate: 1,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 1,
      fuel: 7,
      groceries: 1,
      travel: 1,
      online: 1,
      general: 1
    },
    benefits: [
      '7% cashback on fuel purchases',
      '1% cashback on other spends',
      'Fuel surcharge waiver',
      'Easy fuel expense tracking'
    ],
    description: 'Specialized card for fuel expenses',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 500,
    fuelSurcharge: true
  },
  {
    id: 'flipkart-axis',
    name: 'Flipkart Axis Bank Credit Card',
    issuer: 'Axis Bank',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 500,
    annualFee: 500,
    rewardType: 'cashback',
    rewardRate: 4,
    eligibility: {
      minIncome: 180000,
      minCreditScore: 650,
      ageRange: [21, 65]
    },
    categories: {
      dining: 1,
      fuel: 1,
      groceries: 1,
      travel: 1,
      online: 4,
      general: 1
    },
    benefits: [
      '4% unlimited cashback on Flipkart',
      '1.5% cashback on other spends',
      'No annual fee on spending criteria',
      'Instant discount on Flipkart sales'
    ],
    description: 'Perfect for Flipkart shoppers',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 1000
  },
  {
    id: 'myntra-kotak',
    name: 'Myntra Kotak Credit Card',
    issuer: 'Kotak Mahindra Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 500,
    rewardType: 'cashback',
    rewardRate: 2,
    eligibility: {
      minIncome: 200000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 2,
      fuel: 1,
      groceries: 1,
      travel: 1,
      online: 7,
      general: 1
    },
    benefits: [
      '7% cashback on Myntra purchases',
      '2% cashback on dining',
      'Early access to Myntra sales',
      'Fashion lifestyle benefits'
    ],
    description: 'Fashion-focused credit card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 750
  },
  {
    id: 'paytm-citi',
    name: 'Paytm Citi Credit Card',
    issuer: 'Citibank',
    image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 0,
    rewardType: 'cashback',
    rewardRate: 2,
    eligibility: {
      minIncome: 180000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 2,
      fuel: 2,
      groceries: 2,
      travel: 2,
      online: 2,
      general: 1
    },
    benefits: [
      '2% cashback on all spends',
      'No annual fee lifetime',
      'Instant Paytm wallet credit',
      'Easy digital management'
    ],
    description: 'Simple cashback card with no fees',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 500
  },
  {
    id: 'ola-sbi',
    name: 'Ola Money SBI Credit Card',
    issuer: 'State Bank of India',
    image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 499,
    rewardType: 'cashback',
    rewardRate: 1,
    eligibility: {
      minIncome: 150000,
      minCreditScore: 600,
      ageRange: [21, 65]
    },
    categories: {
      dining: 1,
      fuel: 7,
      groceries: 1,
      travel: 7,
      online: 1,
      general: 1
    },
    benefits: [
      '7% cashback on Ola rides',
      '7% cashback on fuel',
      '1% cashback on other spends',
      'Easy mobile app management'
    ],
    description: 'Travel and mobility focused card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 300
  },
  {
    id: 'tata-neu-hdfc',
    name: 'Tata Neu HDFC Credit Card',
    issuer: 'HDFC Bank',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=400',
    joiningFee: 0,
    annualFee: 1000,
    rewardType: 'points',
    rewardRate: 5,
    eligibility: {
      minIncome: 250000,
      minCreditScore: 650,
      ageRange: [21, 65]
    },
    categories: {
      dining: 5,
      fuel: 2,
      groceries: 5,
      travel: 5,
      online: 5,
      general: 1
    },
    benefits: [
      '5% NeuCoins on Tata brands',
      '2% NeuCoins on other spends',
      'Welcome NeuCoins bonus',
      'Tata brand exclusive benefits'
    ],
    description: 'Tata ecosystem rewards card',
    applyUrl: 'https://example.com/apply',
    welcomeBonus: 2000
  }
];