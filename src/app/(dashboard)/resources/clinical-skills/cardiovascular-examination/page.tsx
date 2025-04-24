'use client';

import { motion } from 'framer-motion';
import { HeartIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CardiovascularExamination() {
  const sections = [
    {
      title: 'General Inspection',
      content: [
        'Patient position and comfort',
        'General appearance and distress level',
        'Visible pulsations or abnormalities',
        'Signs of peripheral edema',
      ],
    },
    {
      title: 'Pulse Examination',
      content: [
        'Rate and rhythm assessment',
        'Character and volume',
        'Radio-radial delay',
        'Radio-femoral delay',
      ],
    },
    {
      title: 'Blood Pressure Measurement',
      content: [
        'Proper cuff size selection',
        'Patient positioning',
        'Systolic and diastolic measurement',
        'Blood pressure in both arms',
      ],
    },
    {
      title: 'Precordial Examination',
      content: [
        'Inspection for visible pulsations',
        'Palpation for apex beat',
        'Assessment of thrills',
        'Heaves and lifts',
      ],
    },
    {
      title: 'Heart Sounds Auscultation',
      content: [
        'S1 and S2 identification',
        'Added heart sounds (S3, S4)',
        'Murmur assessment',
        'Radiation of sounds',
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
          <HeartIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Cardiovascular Examination</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Master the systematic approach to cardiovascular examination with this comprehensive guide.
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
            <li>Always explain the examination process to your patient</li>
            <li>Ensure proper room temperature and lighting</li>
            <li>Follow a systematic approach to avoid missing key findings</li>
            <li>Document your findings immediately after examination</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 