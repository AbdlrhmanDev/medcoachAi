'use client';

import { motion } from 'framer-motion';
import { DocumentTextIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function PLAB2Guide() {
  const sections = [
    {
      title: 'Exam Overview',
      content: [
        'Structure and format of PLAB 2',
        'Assessment criteria and marking scheme',
        'Time management strategies',
        'Common pitfalls and how to avoid them',
      ],
    },
    {
      title: 'Station Types',
      content: [
        'History taking stations',
        'Physical examination stations',
        'Communication skills stations',
        'Practical skills stations',
      ],
    },
    {
      title: 'Key Clinical Areas',
      content: [
        'Common medical conditions',
        'Surgical presentations',
        'Pediatric scenarios',
        'Mental health assessments',
      ],
    },
    {
      title: 'Communication Skills',
      content: [
        'Breaking bad news',
        'Explaining procedures',
        'Dealing with difficult patients',
        'Cultural competency',
      ],
    },
    {
      title: 'Preparation Tips',
      content: [
        'Study schedule planning',
        'Practice strategies',
        'Resource utilization',
        'Exam day preparation',
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
          <DocumentTextIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">PLAB 2 Master Guide</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Your comprehensive guide to mastering the PLAB 2 examination with expert insights and proven strategies.
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Success Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Practice regularly with realistic scenarios</li>
            <li>Focus on time management during practice sessions</li>
            <li>Master communication skills across different scenarios</li>
            <li>Stay updated with current medical guidelines</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 