import { motion } from 'framer-motion';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid';
import {
  PricingPlan,
  PricingFeature,
  ComparisonFeature,
} from "@/interfaces/pricing";

interface PricingSectionProps {
  plans: PricingPlan[];
}

interface FeatureComparisonCategory {
  category: string;
  features: ComparisonFeature[];
}

// Detailed feature comparison data
const featureComparison: FeatureComparisonCategory[] = [
  {
    category: 'Study Materials',
    features: [
      { name: 'Basic Study Materials', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Study Materials', basic: false, professional: true, enterprise: true },
      { name: 'Custom Institution Materials', basic: false, professional: false, enterprise: true },
      { name: 'Downloadable Resources', basic: true, professional: true, enterprise: true },
      { name: 'Video Tutorials', basic: false, professional: true, enterprise: true },
      { name: 'Interactive Learning Modules', basic: false, professional: true, enterprise: true },
      { name: 'Clinical Guidelines & Updates', basic: false, professional: true, enterprise: true },
      { name: 'Specialty-Specific Content', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Practice Sessions',
    features: [
      { name: 'Basic Scenarios', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Scenarios', basic: false, professional: true, enterprise: true },
      { name: 'Custom Institution Scenarios', basic: false, professional: false, enterprise: true },
      { name: 'Mock Exams', basic: true, professional: true, enterprise: true },
      { name: 'Live Mock Sessions', basic: false, professional: true, enterprise: true },
      { name: 'Personalized Feedback', basic: false, professional: true, enterprise: true },
      { name: 'AI-Powered Practice Cases', basic: false, professional: true, enterprise: true },
      { name: 'Real-time Voice Interaction', basic: false, professional: true, enterprise: true },
      { name: 'Scenario Recording & Playback', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Support & Mentoring',
    features: [
      { name: 'Community Forum Access', basic: true, professional: true, enterprise: true },
      { name: 'Email Support', basic: true, professional: true, enterprise: true },
      { name: 'Priority Support', basic: false, professional: true, enterprise: true },
      { name: 'Dedicated Support Team', basic: false, professional: false, enterprise: true },
      { name: '24/7 Chat Support', basic: false, professional: true, enterprise: true },
      { name: 'Personal Success Manager', basic: false, professional: false, enterprise: true },
      { name: 'Expert Clinical Mentoring', basic: false, professional: false, enterprise: true },
      { name: 'Group Training Sessions', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      { name: 'Basic Performance Tracking', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Analytics', basic: false, professional: true, enterprise: true },
      { name: 'Progress Reports', basic: true, professional: true, enterprise: true },
      { name: 'Custom Reports', basic: false, professional: false, enterprise: true },
      { name: 'Institution Dashboard', basic: false, professional: false, enterprise: true },
      { name: 'Performance Insights', basic: false, professional: true, enterprise: true },
      { name: 'Learning Pattern Analysis', basic: false, professional: true, enterprise: true },
      { name: 'Cohort Performance Tracking', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Communication Skills',
    features: [
      { name: 'Basic Communication Tips', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Communication Training', basic: false, professional: true, enterprise: true },
      { name: 'Cultural Competency Modules', basic: false, professional: true, enterprise: true },
      { name: 'Patient Interaction Scenarios', basic: true, professional: true, enterprise: true },
      { name: 'Language Proficiency Tools', basic: false, professional: true, enterprise: true },
      { name: 'Accent & Pronunciation Training', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Clinical Skills',
    features: [
      { name: 'Basic Clinical Procedures', basic: true, professional: true, enterprise: true },
      { name: 'Advanced Clinical Scenarios', basic: false, professional: true, enterprise: true },
      { name: 'Emergency Medicine Cases', basic: false, professional: true, enterprise: true },
      { name: 'Specialty-Specific Training', basic: false, professional: true, enterprise: true },
      { name: 'Clinical Decision Making', basic: false, professional: true, enterprise: true },
      { name: 'Patient Safety Modules', basic: false, professional: true, enterprise: true }
    ],
  },
  {
    category: 'Additional Features',
    features: [
      { name: 'Mobile App Access', basic: true, professional: true, enterprise: true },
      { name: 'Offline Mode', basic: false, professional: true, enterprise: true },
      { name: 'Group Management Tools', basic: false, professional: false, enterprise: true },
      { name: 'API Access', basic: false, professional: false, enterprise: true },
      { name: 'Custom Branding', basic: false, professional: false, enterprise: true },
      { name: 'Integration Support', basic: false, professional: false, enterprise: true },
      { name: 'Multi-device Sync', basic: false, professional: true, enterprise: true },
      { name: 'Bulk User Management', basic: false, professional: false, enterprise: true }
    ],
  },
  {
    category: 'Exam Preparation Tools',
    features: [
      { name: 'Study Schedule Builder', basic: true, professional: true, enterprise: true },
      { name: 'Progress Timeline', basic: true, professional: true, enterprise: true },
      { name: 'Custom Study Plans', basic: false, professional: true, enterprise: true },
      { name: 'Exam Day Simulator', basic: false, professional: true, enterprise: true },
      { name: 'Performance Predictor', basic: false, professional: true, enterprise: true },
      { name: 'Stress Management Resources', basic: false, professional: true, enterprise: true }
    ],
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function ComparisonFeatureIcon({ feature, plan }: { feature: ComparisonFeature; plan: 'basic' | 'professional' | 'enterprise' }) {
  const included = feature[plan];
  return included ? (
    <CheckIcon className="h-6 w-6 mx-auto text-green-600" aria-label="Included" />
  ) : (
    <XMarkIcon className="h-6 w-6 mx-auto text-gray-300" aria-label="Not included" />
  );
}

function PricingFeatureIcon({ feature, planType }: { feature: PricingFeature; planType: 'basic' | 'professional' | 'enterprise' }) {
  const included = feature[planType];
  return included ? (
    <CheckIcon className="h-6 w-6 flex-none text-green-600" aria-hidden="true" />
  ) : (
    <XMarkIcon className="h-6 w-6 flex-none text-gray-300" aria-hidden="true" />
  );
}

function ComparisonTable() {
  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold text-center mb-12">Detailed Feature Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4">Feature</th>
              <th className="text-center py-4 px-4">Basic</th>
              <th className="text-center py-4 px-4">Professional</th>
              <th className="text-center py-4 px-4">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {featureComparison.map((category) => (
              <>
                <tr key={category.category} className="bg-gray-50">
                  <td colSpan={4} className="py-3 px-4 font-semibold">{category.category}</td>
                </tr>
                {category.features.map((feature) => (
                  <tr key={feature.name} className="border-b">
                    <td className="py-3 px-4">{feature.name}</td>
                    <td className="text-center py-3 px-4">
                      <ComparisonFeatureIcon feature={feature} plan="basic" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <ComparisonFeatureIcon feature={feature} plan="professional" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <ComparisonFeatureIcon feature={feature} plan="enterprise" />
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">
              Pricing Plans
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl leading-tight">
              Choose the right plan for&nbsp;you
            </p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
        >
          Choose a plan that best suits your needs. All plans include access to our core features.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {plans.map((plan, planIdx) => (
            <div
              key={plan.name}
              className={classNames(
                plan.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                planIdx === 0 ? 'lg:rounded-r-none' : '',
                planIdx === plans.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={plan.name}
                    className={classNames(
                      plan.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {plan.name}
                  </h3>
                  {plan.mostPopular && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{plan.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature: PricingFeature) => (
                    <li key={feature.name} className="flex gap-x-3">
                      <PricingFeatureIcon feature={feature} planType={plan.name.toLowerCase() as 'basic' | 'professional' | 'enterprise'} />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                aria-describedby={plan.name}
                className={classNames(
                  plan.mostPopular
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </motion.div>
        <ComparisonTable />
      </div>
    </div>
  );
} 