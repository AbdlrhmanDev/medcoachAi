'use client';

import { motion } from 'framer-motion';
import { ListBulletIcon as LungIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function RespiratoryExamination() {
  const sections = [
    {
      title: 'Initial Assessment',
      content: [
        'Patient position and comfort',
        'Respiratory rate and pattern',
        'Signs of respiratory distress',
        'Use of accessory muscles',
      ],
    },
    {
      title: 'Chest Inspection',
      content: [
        'Chest wall shape and symmetry',
        'Breathing pattern assessment',
        'Chest wall deformities',
        'Scars or other abnormalities',
      ],
    },
    {
      title: 'Palpation',
      content: [
        'Chest expansion',
        'Tactile vocal fremitus',
        'Chest wall tenderness',
        'Tracheal position',
      ],
    },
    {
      title: 'Percussion',
      content: [
        'Technique demonstration',
        'Resonance assessment',
        'Comparing both sides',
        'Identifying dullness or hyperresonance',
      ],
    },
    {
      title: 'Auscultation',
      content: [
        'Normal breath sounds',
        'Added sounds (crackles, wheezes)',
        'Vocal resonance',
        'Systematic approach to all areas',
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
          <LungIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Respiratory Examination</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Learn the comprehensive approach to respiratory system examination with this detailed guide.
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Reminders</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Always compare findings between left and right sides</li>
            <li>Ensure proper exposure while maintaining patient dignity</li>
            <li>Listen to breath sounds through a complete respiratory cycle</li>
            <li>Document any asymmetry or abnormal findings</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 