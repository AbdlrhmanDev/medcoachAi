'use client';

import { motion } from 'framer-motion';
import { DocumentDuplicateIcon, ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function StudyMaterials() {
  const sections = [
    {
      title: 'Clinical Guidelines',
      content: [
        'NICE Guidelines',
        'GMC Good Medical Practice',
        'Royal College Guidelines',
        'Local NHS Protocols',
      ],
      downloadable: true,
    },
    {
      title: 'Practice Cases',
      content: [
        'History Taking Scenarios',
        'Physical Examination Cases',
        'Communication Scenarios',
        'Emergency Situations',
      ],
      downloadable: true,
    },
    {
      title: 'Reference Materials',
      content: [
        'Clinical Examination Checklists',
        'Communication Skills Frameworks',
        'Differential Diagnosis Tables',
        'Investigation Flowcharts',
      ],
      downloadable: true,
    },
    {
      title: 'Video Resources',
      content: [
        'Examination Technique Videos',
        'Communication Skills Demonstrations',
        'Procedure Guides',
        'Expert Tips and Advice',
      ],
      downloadable: false,
    },
    {
      title: 'Assessment Tools',
      content: [
        'Self-Assessment Questions',
        'Progress Tracking Forms',
        'Feedback Templates',
        'Performance Metrics',
      ],
      downloadable: true,
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
          <DocumentDuplicateIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Study Materials</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Access our comprehensive collection of study materials, guidelines, and practice resources.
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
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                {section.downloadable && (
                  <button className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500">
                    <ArrowDownTrayIcon className="h-5 w-5 mr-1" />
                    Download
                  </button>
                )}
              </div>
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Resource Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Download materials for offline access</li>
            <li>Use the checklists during practice sessions</li>
            <li>Review guidelines regularly</li>
            <li>Track your progress using assessment tools</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 