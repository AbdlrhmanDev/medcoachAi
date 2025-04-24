'use client';

import { motion } from 'framer-motion';
import { BookmarkIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function QuickReferences() {
  const sections = [
    {
      title: 'Clinical Assessment',
      content: [
        'Vital Signs Reference Ranges',
        'Glasgow Coma Scale',
        'Pain Assessment Scales',
        'Early Warning Scores',
      ],
    },
    {
      title: 'Common Calculations',
      content: [
        'BMI Calculator',
        'Fluid Requirements',
        'Drug Dosage Calculations',
        'eGFR Estimation',
      ],
    },
    {
      title: 'Emergency Protocols',
      content: [
        'Basic Life Support',
        'Sepsis Management',
        'Acute Coronary Syndrome',
        'Stroke Pathway',
      ],
    },
    {
      title: 'Investigation Guides',
      content: [
        'Common Blood Tests',
        'Imaging Indications',
        'ECG Interpretation',
        'Chest X-ray Review',
      ],
    },
    {
      title: 'Clinical Decision Rules',
      content: [
        'CURB-65 Score',
        'Wells Score',
        'CHAD2S2-VASc Score',
        'HEART Score',
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
          <BookmarkIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Quick References</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Quick access to essential medical information, calculations, and clinical decision tools.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
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
                    <button className="text-gray-600 hover:text-blue-600 text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Usage Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Bookmark frequently used references</li>
            <li>Use calculators to verify manual calculations</li>
            <li>Always check latest guidelines</li>
            <li>Consider clinical context when using scores</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 