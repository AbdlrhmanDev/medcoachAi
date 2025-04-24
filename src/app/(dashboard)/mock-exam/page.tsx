'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  AcademicCapIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  UserGroupIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const examSlots = [
  {
    id: 1,
    date: '2024-03-20',
    time: '09:00 AM',
    duration: '3 hours',
    available: true,
    price: '£99',
  },
  {
    id: 2,
    date: '2024-03-22',
    time: '02:00 PM',
    duration: '3 hours',
    available: true,
    price: '£99',
  },
  {
    id: 3,
    date: '2024-03-25',
    time: '10:00 AM',
    duration: '3 hours',
    available: false,
    price: '£99',
  },
];

const examFeatures = [
  {
    title: 'Full PLAB 2 Simulation',
    description: 'Experience a complete mock exam with multiple stations',
    icon: AcademicCapIcon,
  },
  {
    title: 'Video Recording',
    description: 'Get a recording of your performance for review',
    icon: VideoCameraIcon,
  },
  {
    title: 'Detailed Feedback',
    description: 'Receive comprehensive feedback on your performance',
    icon: DocumentTextIcon,
  },
  {
    title: 'Expert Review',
    description: 'Get your performance reviewed by PLAB 2 experts',
    icon: UserGroupIcon,
  },
];

export default function MockExamPage() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-gray-900">PLAB 2 Mock Exam</h1>
            <p className="mt-4 text-lg text-gray-600">
              Practice with a full PLAB 2 simulation and get detailed feedback
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-12"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {examFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white shadow rounded-lg p-6"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Exam Slots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Exam Slots</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {examSlots.map((slot) => (
                <div
                  key={slot.id}
                  className={`bg-white shadow rounded-lg p-6 ${
                    !slot.available ? 'opacity-50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {new Date(slot.date).toLocaleDateString()}
                      </h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-5 w-5 mr-2" />
                        {slot.time}
                      </div>
                      <div className="mt-1 flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-5 w-5 mr-2" />
                        {slot.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-indigo-600">{slot.price}</p>
                      <button
                        onClick={() => setSelectedSlot(slot.id)}
                        disabled={!slot.available}
                        className={`mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                          slot.available
                            ? 'bg-indigo-600 hover:bg-indigo-700'
                            : 'bg-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {slot.available ? 'Book Now' : 'Fully Booked'}
                        {slot.available && (
                          <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Preparation Tips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparation Tips</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <StarIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Before the Exam</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Review the PLAB 2 format and requirements</li>
                      <li>Practice with our sample scenarios</li>
                      <li>Ensure you have a quiet, well-lit space</li>
                      <li>Test your microphone and camera</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <StarIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">During the Exam</h3>
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                      <li>Stay calm and focused</li>
                      <li>Manage your time effectively</li>
                      <li>Communicate clearly and professionally</li>
                      <li>Follow the examiner's instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12"
          >
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    What happens after I book a slot?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    You'll receive a confirmation email with detailed instructions and a link to join the exam. Make sure to test your equipment before the exam starts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Can I reschedule my exam?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Yes, you can reschedule up to 24 hours before your exam slot. Please contact our support team for assistance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    When will I receive my feedback?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    You'll receive your detailed feedback report within 48 hours of completing the exam. The report includes performance analysis and improvement suggestions.
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