'use client';

import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  StarIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const stats = [
  { name: 'Completed Scenarios', value: '12', icon: AcademicCapIcon },
  { name: 'Average Score', value: '85%', icon: ChartBarIcon },
  { name: 'Practice Hours', value: '24', icon: ClockIcon },
  { name: 'Mock Exams Taken', value: '3', icon: UserGroupIcon },
  { name: 'Study Streak', value: '5 days', icon: CalendarIcon },
  { name: 'Learning Resources', value: '8', icon: BookOpenIcon },
  { name: 'Achievement Points', value: '750', icon: TrophyIcon },
  { name: 'Focus Score', value: '92%', icon: SparklesIcon },
];

const quickActions = [
  {
    name: 'Start Practice',
    description: 'Begin a new OSCE scenario practice session',
    href: '/scenarios',
    icon: AcademicCapIcon,
  },
  {
    name: 'Take Mock Exam',
    description: 'Test yourself with a full mock examination',
    href: '/mock-exam',
    icon: ClockIcon,
  },
  {
    name: 'View Progress',
    description: 'Check your performance and improvement areas',
    href: '/progress',
    icon: ArrowTrendingUpIcon,
  },
  {
    name: 'Study Schedule',
    description: 'Plan and track your study sessions',
    href: '/schedule',
    icon: CalendarIcon,
  },
  {
    name: 'Learning Resources',
    description: 'Access study materials and guides',
    href: '/resources',
    icon: BookOpenIcon,
  },
  {
    name: 'Community Forum',
    description: 'Connect with other students',
    href: '/forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Study Timer',
    description: 'Track your focused study time',
    href: '/timer',
    icon: ClockIcon,
  },
  {
    name: 'Achievements',
    description: 'View your earned badges and rewards',
    href: '/achievements',
    icon: TrophyIcon,
  },
];

const performanceTrends = [
  { month: 'Jan', score: 75 },
  { month: 'Feb', score: 82 },
  { month: 'Mar', score: 85 },
  { month: 'Apr', score: 88 },
  { month: 'May', score: 90 },
];

const upcomingSessions = [
  { title: 'Cardiology OSCE', date: '2024-03-15', time: '10:00 AM' },
  { title: 'Neurology Practice', date: '2024-03-16', time: '2:00 PM' },
  { title: 'Mock Exam', date: '2024-03-18', time: '9:00 AM' },
];

const achievements = [
  { name: 'Early Bird', description: 'Completed 5 morning study sessions', icon: StarIcon, progress: 100 },
  { name: 'Consistent Learner', description: 'Maintained a 5-day study streak', icon: FireIcon, progress: 100 },
  { name: 'Quick Thinker', description: 'Answered 10 questions in under 30 seconds', icon: SparklesIcon, progress: 60 },
  { name: 'Perfect Score', description: 'Achieved 100% in any practice session', icon: TrophyIcon, progress: 0 },
];

const studyPlan = {
  currentTopic: 'Cardiology',
  nextTopics: [
    { name: 'Neurology', priority: 'High', dueDate: '2024-03-20' },
    { name: 'Respiratory', priority: 'Medium', dueDate: '2024-03-25' },
    { name: 'Gastroenterology', priority: 'Low', dueDate: '2024-03-30' },
  ],
  recommendedResources: [
    { name: 'Cardiac Auscultation Guide', type: 'Video', duration: '15 min' },
    { name: 'ECG Interpretation Practice', type: 'Interactive', duration: '30 min' },
    { name: 'Cardiology Case Studies', type: 'Reading', duration: '45 min' },
  ],
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome back! Here's an overview of your progress.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <stat.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                          <dd className="text-2xl font-semibold text-gray-900">{stat.value}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-lg font-medium text-gray-900">Quick actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  className="relative block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <span className="inline-flex p-3 rounded-lg bg-indigo-50">
                      <action.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{action.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Performance Trends and Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Performance Trends */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h2>
              <div className="h-64">
                <div className="flex items-end h-48 space-x-2">
                  {performanceTrends.map((trend) => (
                    <div key={trend.month} className="flex-1">
                      <div
                        className="bg-indigo-600 rounded-t"
                        style={{ height: `${trend.score}%` }}
                      />
                      <div className="text-center text-sm text-gray-500 mt-2">{trend.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.title} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{session.title}</h3>
                      <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements and Study Plan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Achievements */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement.name} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <achievement.icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{achievement.name}</h3>
                      <p className="text-sm text-gray-500">{achievement.description}</p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Plan */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Personalized Study Plan</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Current Topic</h3>
                  <p className="mt-1 text-sm text-gray-500">{studyPlan.currentTopic}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Next Topics</h3>
                  <div className="mt-2 space-y-2">
                    {studyPlan.nextTopics.map((topic) => (
                      <div key={topic.name} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-900">{topic.name}</span>
                        <span className="text-xs text-gray-500">Due: {topic.dueDate}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Recommended Resources</h3>
                  <div className="mt-2 space-y-2">
                    {studyPlan.recommendedResources.map((resource) => (
                      <div key={resource.name} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="text-sm text-gray-900">{resource.name}</span>
                        <span className="text-xs text-gray-500">{resource.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Learning Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8"
          >
            <h2 className="text-lg font-medium text-gray-900">Daily Learning Tip</h2>
            <div className="mt-4 bg-white shadow rounded-lg p-6">
              <div className="flex items-start">
                <LightBulbIcon className="h-6 w-6 text-yellow-400 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-600">
                    Remember to practice active recall by testing yourself on key concepts after each study session. This helps reinforce your learning and identify areas that need more attention.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 