'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon as SearchIcon, FunnelIcon as FilterIcon } from '@heroicons/react/24/solid';
import {
  AcademicCapIcon,
  ClockIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Scenario {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}

const sampleScenarios: Scenario[] = [
  {
    id: '1',
    title: 'Cardiology Consultation',
    category: 'Cardiology',
    difficulty: 'Intermediate',
    duration: '15 min',
    description: 'Practice taking a cardiac history and performing a focused examination',
    tags: [],
    icon: AcademicCapIcon,
  },
  {
    id: '2',
    title: 'Respiratory Assessment',
    category: 'Respiratory',
    difficulty: 'Beginner',
    duration: '12 min',
    description: 'Practice respiratory history taking and examination skills',
    tags: [],
    icon: AcademicCapIcon,
  },
  {
    id: '3',
    title: 'Neurological Examination',
    category: 'Neurology',
    difficulty: 'Advanced',
    duration: '20 min',
    description: 'Practice neurological history and examination techniques',
    tags: [],
    icon: AcademicCapIcon,
  },
  // Add more scenarios as needed
];

const featuredScenarios = sampleScenarios.slice(0, 2); // Get first two scenarios as featured

export default function ScenariosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const filteredScenarios = sampleScenarios.filter(scenario => {
    const matchesSearch = scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || scenario.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || scenario.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const categories = Array.from(new Set(sampleScenarios.map(s => s.category)));
  const difficulties = Array.from(new Set(sampleScenarios.map(s => s.difficulty)));

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">OSCE Scenarios</h1>
            <p className="mt-2 text-sm text-gray-600">
              Practice your clinical skills with AI-powered patient interactions
            </p>
          </motion.div>

          {/* Scenario List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredScenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <scenario.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{scenario.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{scenario.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {scenario.difficulty}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {scenario.duration}
                      </span>
                    </div>
                    <Link
                      href={`/scenarios/${scenario.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Start Practice
                      <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3"
          >
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Practice Time</dt>
                      <dd className="text-2xl font-semibold text-gray-900">2.5 hours</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <AcademicCapIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Scenarios Completed</dt>
                      <dd className="text-2xl font-semibold text-gray-900">12</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <StarIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Average Score</dt>
                      <dd className="text-2xl font-semibold text-gray-900">85%</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 