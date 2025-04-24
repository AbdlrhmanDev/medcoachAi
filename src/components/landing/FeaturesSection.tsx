import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, FaMicrophoneAlt, FaVideo, FaChartLine,
  FaUserFriends, FaAward, FaBookMedical, FaClock
} from 'react-icons/fa';

const features = [
  {
    title: 'AI-Powered Practice',
    description: 'Interactive scenarios with real-time AI feedback to improve your clinical skills.',
    icon: FaBrain,
  },
  {
    title: 'Voice Recognition',
    description: 'Practice your communication skills with advanced voice recognition technology.',
    icon: FaMicrophoneAlt,
  },
  {
    title: 'Video Analysis',
    description: 'Record and analyze your performance with AI-powered video feedback.',
    icon: FaVideo,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and performance metrics.',
    icon: FaChartLine,
  },
  {
    title: 'Peer Learning',
    description: 'Connect with other medical students and learn from their experiences.',
    icon: FaUserFriends,
  },
  {
    title: 'Achievement System',
    description: 'Earn badges and certificates as you progress through your learning journey.',
    icon: FaAward,
  },
  {
    title: 'Comprehensive Content',
    description: 'Access a vast library of medical scenarios and learning materials.',
    icon: FaBookMedical,
  },
  {
    title: 'Time Management',
    description: 'Practice with realistic time constraints to prepare for actual exams.',
    icon: FaClock,
  },
];

const FeatureCard = memo(({ feature, index }: { feature: typeof features[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
  >
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        <feature.icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
    </div>
    <p className="text-base text-gray-500">{feature.description}</p>
  </motion.div>
));

FeatureCard.displayName = 'FeatureCard';

const FeaturesSection = memo(() => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
          >
            Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Everything you need to excel
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            Comprehensive tools and features designed to enhance your medical examination preparation.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection; 