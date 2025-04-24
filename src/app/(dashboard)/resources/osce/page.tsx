'use client';

import { motion } from 'framer-motion';
import { ClipboardDocumentListIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function OSCEPreparation() {
  const sections = [
    {
      title: 'Station Management',
      content: [
        'Time management techniques',
        'Station entry and exit protocols',
        'Reading and understanding instructions',
        'Efficient equipment handling',
      ],
    },
    {
      title: 'Common Scenarios',
      content: [
        'History taking stations',
        'Physical examination stations',
        'Communication skills stations',
        'Practical procedures',
      ],
    },
    {
      title: 'Essential Skills',
      content: [
        'Patient-centered approach',
        'Systematic examination techniques',
        'Clear communication methods',
        'Professional behavior',
      ],
    },
    {
      title: 'Mark Scheme Focus',
      content: [
        'Understanding marking criteria',
        'Key performance indicators',
        'Common pitfalls to avoid',
        'Maximizing scores in each station',
      ],
    },
    {
      title: 'Practice Strategies',
      content: [
        'Mock station practice',
        'Peer assessment sessions',
        'Video recording analysis',
        'Feedback implementation',
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
          <ClipboardDocumentListIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">OSCE Preparation Guide</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Master your OSCE preparation with our comprehensive guide covering all aspects of station management and clinical skills.
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Pro Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Always read station instructions carefully</li>
            <li>Practice with a timer to improve time management</li>
            <li>Focus on both verbal and non-verbal communication</li>
            <li>Regularly review and update your clinical knowledge</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 