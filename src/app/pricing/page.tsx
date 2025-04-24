'use client';

import PricingSection from '@/components/sections/PricingSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ROICalculator from '@/components/sections/ROICalculator';
import { PricingFeature, PricingPlan } from '@/interfaces/pricing';

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for startups and small practices",
    features: [
      { name: "Up to 100 patient records", basic: true, professional: true, enterprise: true },
      { name: "Basic appointment scheduling", basic: true, professional: true, enterprise: true },
      { name: "Electronic health records", basic: true, professional: true, enterprise: true },
      { name: "Prescription management", basic: true, professional: true, enterprise: true },
      { name: "Email support", basic: true, professional: true, enterprise: true },
      { name: "Advanced analytics", basic: false, professional: true, enterprise: true },
      { name: "Custom branding", basic: false, professional: true, enterprise: true },
      { name: "API access", basic: false, professional: false, enterprise: true },
      { name: "24/7 phone support", basic: false, professional: false, enterprise: true },
      { name: "HIPAA compliance", basic: false, professional: true, enterprise: true }
    ],
    cta: "Start Basic",
    mostPopular: false
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing medical practices",
    features: [
      { name: "Up to 1000 patient records", basic: false, professional: true, enterprise: true },
      { name: "Advanced appointment scheduling", basic: false, professional: true, enterprise: true },
      { name: "Electronic health records", basic: true, professional: true, enterprise: true },
      { name: "Prescription management", basic: true, professional: true, enterprise: true },
      { name: "Priority email support", basic: false, professional: true, enterprise: true },
      { name: "Advanced analytics", basic: false, professional: true, enterprise: true },
      { name: "Custom branding", basic: false, professional: true, enterprise: true },
      { name: "API access", basic: false, professional: false, enterprise: true },
      { name: "24/7 phone support", basic: false, professional: false, enterprise: true },
      { name: "HIPAA compliance", basic: false, professional: true, enterprise: true }
    ],
    cta: "Start Professional",
    mostPopular: true
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For large healthcare organizations",
    features: [
      { name: "Unlimited patient records", basic: false, professional: false, enterprise: true },
      { name: "Advanced appointment scheduling", basic: false, professional: true, enterprise: true },
      { name: "Electronic health records", basic: true, professional: true, enterprise: true },
      { name: "Prescription management", basic: true, professional: true, enterprise: true },
      { name: "24/7 priority support", basic: false, professional: false, enterprise: true },
      { name: "Advanced analytics", basic: false, professional: true, enterprise: true },
      { name: "Custom branding", basic: false, professional: true, enterprise: true },
      { name: "API access", basic: false, professional: false, enterprise: true },
      { name: "24/7 phone support", basic: false, professional: false, enterprise: true },
      { name: "HIPAA compliance", basic: false, professional: true, enterprise: true }
    ],
    cta: "Contact Sales",
    mostPopular: false
  }
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