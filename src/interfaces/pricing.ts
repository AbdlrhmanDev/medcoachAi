export interface PricingFeature {
  name: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  mostPopular?: boolean;
}

export interface ComparisonFeature {
  name: string;
  basic: boolean;
  professional: boolean;
  enterprise: boolean;
} 