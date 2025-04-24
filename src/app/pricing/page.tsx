'use client';

import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ROICalculator from '@/components/sections/ROICalculator';
import { PricingFeature, PricingPlan } from '@/interfaces/pricing';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Perfect for small practices just getting started with AI.',
    features: [
      { name: 'Basic AI Chat Support', basic: true, professional: true, enterprise: true },
      { name: 'Standard Response Time', basic: true, professional: true, enterprise: true },
      { name: 'Basic Analytics', basic: true, professional: true, enterprise: true },
      { name: 'Email Support', basic: true, professional: true, enterprise: true },
      { name: 'Up to 5 Users', basic: true, professional: false, enterprise: false },
      { name: 'Basic Training', basic: true, professional: false, enterprise: false },
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$299',
    description: 'Ideal for growing practices ready to scale with AI.',
    mostPopular: true,
    features: [
      { name: 'Advanced AI Chat Support', basic: false, professional: true, enterprise: true },
      { name: 'Priority Response Time', basic: false, professional: true, enterprise: true },
      { name: 'Advanced Analytics', basic: false, professional: true, enterprise: true },
      { name: 'Priority Email Support', basic: false, professional: true, enterprise: true },
      { name: 'Up to 20 Users', basic: false, professional: true, enterprise: false },
      { name: 'Advanced Training', basic: false, professional: true, enterprise: false },
      { name: 'Custom Workflows', basic: false, professional: true, enterprise: true },
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations requiring maximum AI capabilities.',
    features: [
      { name: 'Premium AI Chat Support', basic: false, professional: false, enterprise: true },
      { name: '24/7 Priority Response', basic: false, professional: false, enterprise: true },
      { name: 'Enterprise Analytics', basic: false, professional: false, enterprise: true },
      { name: 'Dedicated Support Team', basic: false, professional: false, enterprise: true },
      { name: 'Unlimited Users', basic: false, professional: false, enterprise: true },
      { name: 'Custom Training Program', basic: false, professional: false, enterprise: true },
      { name: 'Advanced Customization', basic: false, professional: false, enterprise: true },
      { name: 'API Access', basic: false, professional: false, enterprise: true },
    ],
    cta: 'Contact Sales',
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white font-sans antialiased">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="relative z-10">
          <div className="text-rendering-optimizeLegibility">
            <PricingSection plans={pricingPlans} />
          </div>

          <div className="text-rendering-optimizeLegibility">
            <ROICalculator />
          </div>

          <div className="text-rendering-optimizeLegibility">
            <TestimonialsSection />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </main>
  );
} 