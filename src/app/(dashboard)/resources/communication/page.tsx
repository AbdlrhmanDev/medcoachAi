'use client';

import { motion } from 'framer-motion';
import { ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CommunicationSkills() {
  const sections = [
    {
      title: 'Core Communication Skills',
      content: [
        'Active listening techniques',
        'Open and closed questioning',
        'Empathy and rapport building',
        'Non-verbal communication',
      ],
    },
    {
      title: 'Challenging Scenarios',
      content: [
        'Breaking bad news',
        'Dealing with angry patients',
        'Managing language barriers',
        'Handling sensitive topics',
      ],
    },
    {
      title: 'Professional Communication',
      content: [
        'Team communication',
        'Handover techniques',
        'Documentation skills',
        'Telephone consultations',
      ],
    },
    {
      title: 'Cultural Competency',
      content: [
        'Cultural awareness',
        'Religious considerations',
        'Health beliefs',
        'Cultural communication styles',
      ],
    },
    {
      title: 'Communication Frameworks',
      content: [
        'Calgary-Cambridge model',
        'SPIKES protocol',
        'IDEAS framework',
        'SBAR technique',
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
          <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Communication Skills</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Master effective medical communication with our comprehensive guide to patient-centered interactions.
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Key Principles</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Always maintain a patient-centered approach</li>
            <li>Be aware of both verbal and non-verbal cues</li>
            <li>Adapt your communication style to the situation</li>
            <li>Regularly seek and incorporate feedback</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 