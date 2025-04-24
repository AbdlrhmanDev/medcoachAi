'use client';

import { motion } from 'framer-motion';
import { AcademicCapIcon as BrainIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ClinicalReasoning() {
  const sections = [
    {
      title: 'Diagnostic Process',
      content: [
        'History taking approach',
        'Physical examination findings',
        'Pattern recognition',
        'Hypothesis generation',
      ],
    },
    {
      title: 'Clinical Decision Making',
      content: [
        'Evidence-based practice',
        'Risk assessment',
        'Cost-benefit analysis',
        'Clinical guidelines application',
      ],
    },
    {
      title: 'Differential Diagnosis',
      content: [
        'Systematic approach',
        'Common vs rare conditions',
        'Red flag symptoms',
        'Exclusion criteria',
      ],
    },
    {
      title: 'Investigation Planning',
      content: [
        'Appropriate test selection',
        'Results interpretation',
        'Cost-effectiveness',
        'Risk-benefit assessment',
      ],
    },
    {
      title: 'Management Planning',
      content: [
        'Treatment options',
        'Patient preferences',
        'Follow-up planning',
        'Referral criteria',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <BrainIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Clinical Reasoning</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Develop expert clinical reasoning skills with our comprehensive guide to diagnostic thinking and decision making.
        </p>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <ul className="space-y-3">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ArrowRightIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Critical Thinking Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Always consider the clinical context</li>
            <li>Think about pre-test probability</li>
            <li>Consider common conditions first</li>
            <li>Don't forget to rule out serious conditions</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 