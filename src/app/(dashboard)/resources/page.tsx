'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  VideoCameraIcon,
  TrophyIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  TagIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  UserCircleIcon,
  CalendarIcon,
  AcademicCapIcon as BrainIcon,
} from '@heroicons/react/24/outline';

const interactiveResources = [
  {
    id: 1,
    title: 'Virtual OSCE Practice',
    description: 'Interactive OSCE station practice with AI feedback',
    type: 'Interactive',
    duration: '45 min',
    icon: AcademicCapIcon,
    category: 'Practice',
    features: [
      'Real-time Feedback',
      'Performance Analytics',
      'Video Recording',
      'Peer Review',
    ],
    scenarios: [
      'Cardiology Station',
      'Respiratory Station',
      'Neurology Station',
      'Communication Station',
    ],
    difficulty: 'Intermediate to Advanced',
  },
  {
    id: 2,
    title: 'Clinical Reasoning Cases',
    description: 'Interactive case studies for clinical reasoning practice',
    type: 'Interactive',
    duration: '30 min',
    icon: BrainIcon,
    category: 'Clinical Skills',
    features: [
      'Case Analysis',
      'Differential Diagnosis',
      'Treatment Planning',
      'Follow-up Care',
    ],
    cases: [
      'Acute Chest Pain',
      'Shortness of Breath',
      'Neurological Symptoms',
      'Abdominal Pain',
    ],
    difficulty: 'Advanced',
  },
  {
    id: 3,
    title: 'Communication Scenarios',
    description: 'Practice patient communication in various scenarios',
    type: 'Interactive',
    duration: '20 min',
    icon: ChatBubbleLeftRightIcon,
    category: 'Communication',
    features: [
      'Role Play',
      'Video Feedback',
      'Peer Review',
      'Best Practices',
    ],
    scenarios: [
      'Breaking Bad News',
      'Informed Consent',
      'Cultural Competence',
      'Difficult Conversations',
    ],
    difficulty: 'Intermediate',
  },
  {
    id: 4,
    title: 'Physical Examination Practice',
    description: 'Interactive practice for physical examination techniques',
    type: 'Interactive',
    duration: '40 min',
    icon: BeakerIcon,
    category: 'Clinical Skills',
    features: [
      'Step-by-step Guidance',
      'Video Demonstrations',
      'Practice Scenarios',
      'Performance Feedback',
    ],
    examinations: [
      'Cardiovascular',
      'Respiratory',
      'Neurological',
      'Abdominal',
    ],
    difficulty: 'Beginner to Intermediate',
  },
  {
    id: 5,
    title: 'Time Management Simulator',
    description: 'Practice managing time in OSCE stations',
    type: 'Interactive',
    duration: '25 min',
    icon: ClockIcon,
    category: 'Practice',
    features: [
      'Station Timer',
      'Progress Tracking',
      'Performance Analysis',
      'Tips and Strategies',
    ],
    scenarios: [
      'History Taking',
      'Physical Examination',
      'Communication',
      'Documentation',
    ],
    difficulty: 'Intermediate',
  },
];

const videoResources = [
  {
    id: 1,
    title: 'Physical Examination Techniques',
    description: 'Video demonstrations of essential examination techniques',
    type: 'Video',
    duration: '1 hour',
    icon: VideoCameraIcon,
    category: 'Clinical Skills',
    topics: [
      'Cardiovascular',
      'Respiratory',
      'Neurological',
      'Abdominal',
    ],
    instructor: 'Dr. Sarah Johnson',
    level: 'Beginner to Advanced',
  },
  {
    id: 2,
    title: 'Communication Skills Workshop',
    description: 'Expert-led workshop on effective patient communication',
    type: 'Video',
    duration: '45 min',
    icon: ChatBubbleLeftRightIcon,
    category: 'Communication',
    topics: [
      'History Taking',
      'Breaking Bad News',
      'Cultural Competence',
      'Documentation',
    ],
    instructor: 'Dr. Michael Chen',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'OSCE Station Walkthrough',
    description: 'Detailed walkthrough of common OSCE stations',
    type: 'Video',
    duration: '1.5 hours',
    icon: AcademicCapIcon,
    category: 'OSCE Preparation',
    topics: [
      'Station Types',
      'Time Management',
      'Scoring Criteria',
      'Common Mistakes',
    ],
    instructor: 'Dr. Emma Wilson',
    level: 'Advanced',
  },
  {
    id: 4,
    title: 'Clinical Reasoning Masterclass',
    description: 'Expert guidance on clinical reasoning and decision making',
    type: 'Video',
    duration: '1 hour',
    icon: BrainIcon,
    category: 'Clinical Skills',
    topics: [
      'Differential Diagnosis',
      'Clinical Decision Making',
      'Evidence-Based Practice',
      'Case Analysis',
    ],
    instructor: 'Dr. David Brown',
    level: 'Advanced',
  },
  {
    id: 5,
    title: 'PLAB 2 Success Strategies',
    description: 'Tips and strategies from successful PLAB 2 candidates',
    type: 'Video',
    duration: '50 min',
    icon: TrophyIcon,
    category: 'Exam Preparation',
    topics: [
      'Study Planning',
      'Time Management',
      'Stress Management',
      'Exam Day Tips',
    ],
    instructor: 'Multiple Experts',
    level: 'All Levels',
  },
];

const studyGuides = [
  {
    id: 1,
    title: 'PLAB 2 Master Guide',
    description: 'Comprehensive guide covering all aspects of the PLAB 2 exam',
    type: 'Study Guide',
    duration: '2 hours',
    icon: BookOpenIcon,
    category: 'Core Materials',
    sections: [
      'Exam Structure',
      'Scoring System',
      'Common Scenarios',
      'Time Management',
    ],
    difficulty: 'Beginner to Advanced',
    lastUpdated: '2024-03-15',
    content: {
      overview: 'Complete guide to PLAB 2 exam preparation',
      keyPoints: [
        'Understanding exam format and structure',
        'Scoring criteria and assessment methods',
        'Common scenarios and how to approach them',
        'Time management strategies',
      ],
      resources: [
        'Practice scenarios',
        'Sample answers',
        'Scoring rubrics',
        'Time management tips',
      ],
    },
  },
  {
    id: 2,
    title: 'Clinical Skills Handbook',
    description: 'Detailed guide to essential clinical examination techniques',
    type: 'Study Guide',
    duration: '3 hours',
    icon: BeakerIcon,
    category: 'Clinical Skills',
    sections: [
      'Physical Examination',
      'History Taking',
      'Communication Skills',
      'Clinical Reasoning',
    ],
    difficulty: 'Intermediate',
    lastUpdated: '2024-03-10',
    content: {
      overview: 'Comprehensive guide to clinical skills',
      keyPoints: [
        'Systematic approach to physical examination',
        'Effective history taking techniques',
        'Patient communication strategies',
        'Clinical reasoning process',
      ],
      resources: [
        'Step-by-step examination guides',
        'History taking templates',
        'Communication frameworks',
        'Clinical reasoning models',
      ],
    },
  },
  {
    id: 3,
    title: 'OSCE Station Guide',
    description: 'Step-by-step guide for common OSCE stations',
    type: 'Study Guide',
    duration: '2.5 hours',
    icon: ClipboardDocumentListIcon,
    category: 'OSCE Preparation',
    sections: [
      'Station Types',
      'Common Scenarios',
      'Time Management',
      'Scoring Criteria',
    ],
    difficulty: 'Advanced',
    lastUpdated: '2024-03-12',
    content: {
      overview: 'Detailed guide to OSCE stations',
      keyPoints: [
        'Types of OSCE stations',
        'Common scenarios and approaches',
        'Time management in stations',
        'Understanding scoring criteria',
      ],
      resources: [
        'Station templates',
        'Scenario examples',
        'Time management tools',
        'Scoring rubrics',
      ],
    },
  },
  {
    id: 4,
    title: 'Communication Skills Mastery',
    description: 'Comprehensive guide to effective patient communication',
    type: 'Study Guide',
    duration: '1.5 hours',
    icon: ChatBubbleLeftRightIcon,
    category: 'Communication',
    sections: [
      'Patient-Centered Care',
      'Breaking Bad News',
      'Cultural Competence',
      'Documentation',
    ],
    difficulty: 'Intermediate',
    lastUpdated: '2024-03-08',
    content: {
      overview: 'Guide to effective patient communication',
      keyPoints: [
        'Patient-centered communication',
        'Breaking bad news effectively',
        'Cultural competence in healthcare',
        'Medical documentation',
      ],
      resources: [
        'Communication frameworks',
        'Case studies',
        'Cultural competence guides',
        'Documentation templates',
      ],
    },
  },
  {
    id: 5,
    title: 'Clinical Reasoning Guide',
    description: 'Master the art of clinical reasoning and decision making',
    type: 'Study Guide',
    duration: '2 hours',
    icon: BrainIcon,
    category: 'Clinical Skills',
    sections: [
      'Differential Diagnosis',
      'Clinical Decision Making',
      'Evidence-Based Practice',
      'Case Analysis',
    ],
    difficulty: 'Advanced',
    lastUpdated: '2024-03-14',
    content: {
      overview: 'Guide to clinical reasoning',
      keyPoints: [
        'Systematic approach to differential diagnosis',
        'Clinical decision-making process',
        'Evidence-based practice principles',
        'Case analysis techniques',
      ],
      resources: [
        'Diagnostic frameworks',
        'Decision-making models',
        'Evidence-based guidelines',
        'Case study examples',
      ],
    },
  },
  {
    id: 6,
    title: 'Time Management Guide',
    description: 'Strategies for efficient time management in PLAB 2',
    type: 'Study Guide',
    duration: '1 hour',
    icon: ClockIcon,
    category: 'Exam Preparation',
    sections: [
      'Station Timing',
      'Study Planning',
      'Practice Strategies',
      'Exam Day Tips',
    ],
    difficulty: 'Intermediate',
    lastUpdated: '2024-03-13',
    content: {
      overview: 'Guide to time management',
      keyPoints: [
        'Managing time in OSCE stations',
        'Effective study planning',
        'Practice strategies',
        'Exam day time management',
      ],
      resources: [
        'Time management tools',
        'Study planning templates',
        'Practice schedules',
        'Exam day checklists',
      ],
    },
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('interactive');

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Study Resources</h1>
        <p className="mt-2 text-gray-600">
          Access comprehensive study materials, interactive practice sessions, and video tutorials
        </p>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('interactive')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'interactive'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Interactive Resources
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'videos'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Video Tutorials
        </button>
        <button
          onClick={() => setActiveTab('guides')}
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'guides'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Study Guides
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === 'interactive' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interactiveResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.duration}</span>
                    <span>{resource.difficulty}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{resource.duration}</span>
                    <span>By {resource.instructor}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <div
                  key={guide.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-indigo-600" />
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{guide.duration}</span>
                    <span>{guide.difficulty}</span>
                  </div>
                  <a
                    href={`/resources/${guide.category.toLowerCase().replace(' ', '-')}/${guide.id}`}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    View Guide
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
} 