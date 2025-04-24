'use client';

import { motion } from 'framer-motion';
import { 
  DocumentChartBarIcon, 
  ArrowRightIcon, 
  ArrowTrendingUpIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function ProgressTracking() {
  const performanceMetrics = [
    {
      title: 'Overall Progress',
      stats: [
        { label: 'Completed Modules', value: '24/36', trend: 'up' },
        { label: 'Average Score', value: '78%', trend: 'up' },
        { label: 'Study Hours', value: '120', trend: 'up' },
        { label: 'Practice Cases', value: '45', trend: 'up' },
      ],
    },
    {
      title: 'Clinical Skills',
      stats: [
        { label: 'History Taking', value: '85%', trend: 'up' },
        { label: 'Physical Examination', value: '72%', trend: 'neutral' },
        { label: 'Communication', value: '88%', trend: 'up' },
        { label: 'Procedural Skills', value: '65%', trend: 'down' },
      ],
    },
  ];

  const recentActivities = [
    {
      date: '2024-03-15',
      activities: [
        'Completed Cardiovascular Examination module',
        'Practiced communication scenarios',
        'Reviewed NICE guidelines',
      ],
    },
    {
      date: '2024-03-14',
      activities: [
        'Completed mock OSCE station',
        'Studied respiratory examination',
        'Practiced history taking',
      ],
    },
  ];

  const areas = [
    {
      title: 'Strong Areas',
      items: [
        'Communication Skills',
        'History Taking',
        'Clinical Reasoning',
        'Documentation',
      ],
      icon: CheckCircleIcon,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Areas for Improvement',
      items: [
        'Procedural Skills',
        'Physical Examination',
        'Emergency Protocols',
        'Time Management',
      ],
      icon: ExclamationTriangleIcon,
      iconColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
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
          <DocumentChartBarIcon className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Progress Tracking</h1>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          Monitor your learning progress and identify areas for improvement with detailed performance metrics.
        </p>

        {/* Performance Metrics */}
        <div className="grid gap-6 mb-8">
          {performanceMetrics.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {section.stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-semibold text-gray-900">{stat.value}</span>
                      {stat.trend === 'up' && (
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-6">
            {recentActivities.map((day, index) => (
              <div key={index}>
                <div className="flex items-center gap-2 mb-2">
                  <ClockIcon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-gray-600">{day.date}</span>
                </div>
                <ul className="space-y-2">
                  {day.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRightIcon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strong Areas and Areas for Improvement */}
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`rounded-lg shadow-sm border border-gray-200 p-6 ${area.bgColor}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <area.icon className={`h-6 w-6 ${area.iconColor}`} />
                <h2 className="text-xl font-semibold text-gray-900">{area.title}</h2>
              </div>
              <ul className="space-y-3">
                {area.items.map((item, i) => (
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
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Study Tips</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>Focus on improving your weaker areas</li>
            <li>Maintain consistent study hours</li>
            <li>Practice regularly with mock scenarios</li>
            <li>Track your progress weekly</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 