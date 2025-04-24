'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { HeartIcon, AcademicCapIcon as BrainIcon, BeakerIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ClinicalSkills() {
  const [categories] = useState({
    'Physical Examination': [
      {
        id: 1,
        title: 'Cardiovascular Examination',
        description: 'Learn the systematic approach to cardiovascular examination.',
        icon: HeartIcon,
      },
      {
        id: 2,
        title: 'Respiratory Examination',
        description: 'Master chest examination techniques and findings interpretation.',
        icon: BeakerIcon,
      },
    ],
    'Procedural Skills': [
      {
        id: 1,
        title: 'Venipuncture',
        description: 'Step-by-step guide to performing venipuncture safely.',
        icon: BeakerIcon,
      },
      {
        id: 2,
        title: 'Basic Life Support',
        description: 'Essential skills for emergency resuscitation.',
        icon: HeartIcon,
      },
    ],
    'Clinical Assessment': [
      {
        id: 1,
        title: 'History Taking',
        description: 'Structured approach to medical history taking.',
        icon: BrainIcon,
      },
      {
        id: 2,
        title: 'Mental State Examination',
        description: 'Comprehensive guide to mental state assessment.',
        icon: BrainIcon,
      },
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Clinical Skills</h1>
        
        <div className="w-full px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow text-blue-700'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <motion.div
                        key={post.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200 border border-gray-200"
                      >
                        <post.icon className="h-6 w-6 text-blue-600 mb-3" />
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                          {post.description}
                        </p>
                        <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">
                          Learn more →
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </motion.div>
    </div>
  );
} 