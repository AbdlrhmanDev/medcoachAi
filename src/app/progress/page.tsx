'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  FireIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface ProgressMetric {
  label: string;
  value: string | number;
  icon: any;
  change?: string;
}

interface CompletedScenario {
  id: string;
  title: string;
  completedAt: string;
  score: number;
  feedback: string;
}

// Add new interface for streak data
interface StreakDay {
  date: string;
  completed: boolean;
  minutes: number;
}

const sampleMetrics: ProgressMetric[] = [
  {
    label: 'Total Scenarios Completed',
    value: 24,
    icon: CheckCircleIcon,
    change: '+8 this week',
  },
  {
    label: 'Average Score',
    value: '87%',
    icon: ChartBarIcon,
    change: '+5% from last week',
  },
  {
    label: 'Total Practice Time',
    value: '12.5 hours',
    icon: ClockIcon,
    change: '+3.2 hours this week',
  },
  {
    label: 'Skills Mastered',
    value: 8,
    icon: AcademicCapIcon,
    change: '+2 this week',
  },
];

const sampleCompletedScenarios: CompletedScenario[] = [
  {
    id: '1',
    title: 'Acute Chest Pain Assessment',
    completedAt: '2024-03-15',
    score: 92,
    feedback: 'Excellent communication skills and thorough assessment.',
  },
  {
    id: '2',
    title: 'Pediatric Respiratory Distress',
    completedAt: '2024-03-14',
    score: 85,
    feedback: 'Good clinical reasoning, could improve on time management.',
  },
  {
    id: '3',
    title: 'Basic Patient History Taking',
    completedAt: '2024-03-13',
    score: 90,
    feedback: 'Very thorough history taking, well-structured approach.',
  },
];

const sampleStreakData: StreakDay[] = [
  { date: '2024-03-15', completed: true, minutes: 45 },
  { date: '2024-03-14', completed: true, minutes: 30 },
  { date: '2024-03-13', completed: true, minutes: 60 },
  { date: '2024-03-12', completed: false, minutes: 0 },
  { date: '2024-03-11', completed: true, minutes: 25 },
  { date: '2024-03-10', completed: true, minutes: 40 },
  { date: '2024-03-09', completed: true, minutes: 35 },
];

const performanceData = {
  overallScore: 85,
  completedScenarios: 12,
  totalPracticeTime: '2.5 hours',
  averageResponseTime: '45 seconds',
  strengths: [
    'History taking',
    'Communication skills',
    'Clinical reasoning',
  ],
  areasForImprovement: [
    'Physical examination techniques',
    'Differential diagnosis',
    'Time management',
  ],
  recentScores: [
    { date: '2024-03-01', score: 82 },
    { date: '2024-03-05', score: 85 },
    { date: '2024-03-08', score: 88 },
    { date: '2024-03-12', score: 85 },
  ],
  categoryPerformance: [
    { category: 'Cardiology', score: 90 },
    { category: 'Respiratory', score: 85 },
    { category: 'Neurology', score: 80 },
    { category: 'Gastroenterology', score: 75 },
  ],
};

export default function ProgressPage() {
  const [timeRange, setTimeRange] = useState('week');

  // Calculate current streak
  const currentStreak = sampleStreakData.reduce((streak, day) => {
    if (day.completed) return streak + 1;
    return 0;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">Your Progress</h1>
            <p className="mt-2 text-sm text-gray-600">
              Track your performance and identify areas for improvement
            </p>
          </motion.div>

          {/* Overall Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ChartBarIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Overall Score</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{performanceData.overallScore}%</dd>
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
                      <dd className="text-2xl font-semibold text-gray-900">{performanceData.completedScenarios}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Practice Time</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{performanceData.totalPracticeTime}</dd>
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
                      <dt className="text-sm font-medium text-gray-500 truncate">Average Response Time</dt>
                      <dd className="text-2xl font-semibold text-gray-900">{performanceData.averageResponseTime}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Trends */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h2>
              <div className="h-64">
                <div className="flex items-end h-48 space-x-2">
                  {performanceData.recentScores.map((score) => (
                    <div key={score.date} className="flex-1">
                      <div
                        className="bg-indigo-600 rounded-t"
                        style={{ height: `${score.score}%` }}
                      />
                      <div className="text-center text-sm text-gray-500 mt-2">
                        {new Date(score.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Performance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Category Performance</h2>
              <div className="space-y-4">
                {performanceData.categoryPerformance.map((category) => (
                  <div key={category.category} className="flex items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{category.category}</span>
                        <span className="text-sm text-gray-500">{category.score}%</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${category.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strengths and Areas for Improvement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Strengths */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Your Strengths</h2>
              <div className="space-y-4">
                {performanceData.strengths.map((strength) => (
                  <div key={strength} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-medium">✓</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">{strength}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas for Improvement */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Areas for Improvement</h2>
              <div className="space-y-4">
                {performanceData.areasForImprovement.map((area) => (
                  <div key={area} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">{area}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recommended Next Steps</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">
                      Focus on practicing physical examination techniques in the Neurology category to improve your overall performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-600">
                      Try to complete at least 2 scenarios per week to maintain consistent progress.
                    </p>
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