'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaUserMd, FaGraduationCap, FaBrain, FaComments, 
  FaChartLine, FaVideo, FaMicrophoneAlt, FaClipboardCheck,
  FaUserFriends, FaAward, FaBookMedical, FaClock,
  FaCheck, FaTimes, FaQuestionCircle, FaNewspaper,
  FaUniversity, FaHospital, FaMedkit, FaStethoscope
} from 'react-icons/fa';

// Dynamically import components with loading fallbacks
const HeroSection = dynamic(() => import('@/components/landing/HeroSection'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
});

const StatisticsSection = dynamic(() => import('@/components/landing/StatisticsSection'), {
  loading: () => <div className="h-64 bg-indigo-600" />
});

const FeaturesSection = dynamic(() => import('@/components/landing/FeaturesSection'), {
  loading: () => <div className="h-96 bg-white" />
});

export default function Home() {
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
    // Add other features...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-indigo-600" />}>
        <StatisticsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-white" />}>
        <FeaturesSection />
      </Suspense>

      {/* Statistics Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by Medical Students Worldwide
            </h2>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
            {[
              { label: 'Active Students', value: '10,000+' },
              { label: 'Practice Cases', value: '500+' },
              { label: 'Success Rate', value: '95%' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                  {stat.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to excel
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Comprehensive tools and features designed to enhance your medical examination preparation.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How MedCoach AI Works
            </p>
          </div>
          <div className="mt-10">
            <div className="space-y-10">
              {[
                {
                  step: '01',
                  title: 'Choose Your Scenario',
                  description: 'Select from hundreds of OSCE scenarios covering various medical specialties.',
                },
                {
                  step: '02',
                  title: 'Practice with AI',
                  description: 'Interact with our AI system that simulates patient responses and medical conditions.',
                },
                {
                  step: '03',
                  title: 'Receive Feedback',
                  description: 'Get instant, detailed feedback on your performance and areas for improvement.',
                },
                {
                  step: '04',
                  title: 'Track Progress',
                  description: 'Monitor your improvement over time with detailed analytics and performance metrics.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <span className="text-lg font-bold">{step.step}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Sarah Johnson',
                role: 'Medical Student',
                image: '/testimonial1.jpg',
                quote: 'MedCoach AI transformed my OSCE preparation. The AI feedback is incredibly detailed and helpful.',
              },
              {
                name: 'Dr. Michael Chen',
                role: 'Recent Graduate',
                image: '/testimonial2.jpg',
                quote: 'The practice scenarios are so realistic. It really helped me build confidence for my actual exams.',
              },
              {
                name: 'Dr. Emma Thompson',
                role: 'PLAB 2 Candidate',
                image: '/testimonial3.jpg',
                quote: 'The structured approach and comprehensive feedback made all the difference in my exam success.',
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-indigo-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Learning Path
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Flexible plans designed to meet your OSCE preparation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '£9.99',
                period: 'month',
                description: 'Perfect for getting started',
                features: [
                  'Access to 100+ basic scenarios',
                  'AI-powered feedback',
                  'Basic progress tracking',
                  'Community forum access',
                  'Email support',
                ],
                buttonText: 'Start with Basic',
                popular: false,
              },
              {
                name: 'Professional',
                price: '£19.99',
                period: 'month',
                description: 'Most popular for OSCE preparation',
                features: [
                  'All Basic features',
                  'Access to 500+ scenarios',
                  'Video recording & analysis',
                  'Voice recognition feedback',
                  'Priority support',
                  'Study group access',
                ],
                buttonText: 'Go Professional',
                popular: true,
              },
              {
                name: 'Ultimate',
                price: '£29.99',
                period: 'month',
                description: 'Complete OSCE mastery',
                features: [
                  'All Professional features',
                  'Unlimited scenario access',
                  'Personal mentor sessions',
                  'Custom scenario creation',
                  'Performance analytics',
                  'Expert review sessions',
                ],
                buttonText: 'Get Ultimate',
                popular: false,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative p-8 bg-white rounded-lg shadow-lg border ${
                  plan.popular ? 'border-indigo-500' : 'border-gray-200'
                }"
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                    <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-500 text-white">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="ml-2 text-gray-500">/{plan.period}</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FaCheck className="h-5 w-5 text-indigo-500" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white ${
                    plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-600 hover:bg-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Compare</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Feature Comparison
            </p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Basic
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Professional
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ultimate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: 'Practice Scenarios', basic: '100+', pro: '500+', ultimate: 'Unlimited' },
                  { name: 'AI Feedback', basic: 'Basic', pro: 'Advanced', ultimate: 'Premium' },
                  { name: 'Video Analysis', basic: false, pro: true, ultimate: true },
                  { name: 'Voice Recognition', basic: false, pro: true, ultimate: true },
                  { name: 'Progress Tracking', basic: 'Basic', pro: 'Detailed', ultimate: 'Advanced' },
                  { name: 'Study Groups', basic: false, pro: true, ultimate: true },
                  { name: 'Expert Reviews', basic: false, pro: 'Monthly', ultimate: 'Weekly' },
                  { name: 'Custom Scenarios', basic: false, pro: false, ultimate: true },
                ].map((feature) => (
                  <tr key={feature.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? <FaCheck className="mx-auto text-green-500" /> : <FaTimes className="mx-auto text-red-500" />
                      ) : (
                        feature.basic
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? <FaCheck className="mx-auto text-green-500" /> : <FaTimes className="mx-auto text-red-500" />
                      ) : (
                        feature.pro
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      {typeof feature.ultimate === 'boolean' ? (
                        feature.ultimate ? <FaCheck className="mx-auto text-green-500" /> : <FaTimes className="mx-auto text-red-500" />
                      ) : (
                        feature.ultimate
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                question: 'How does the AI feedback system work?',
                answer: 'Our AI system analyzes your responses, body language, and communication skills in real-time, providing instant feedback based on OSCE examination criteria.',
              },
              {
                question: 'Can I practice specific medical specialties?',
                answer: 'Yes, you can choose from various specialties including General Medicine, Pediatrics, Surgery, Obstetrics & Gynecology, and more.',
              },
              {
                question: 'Is the platform suitable for PLAB 2 preparation?',
                answer: 'Absolutely! Our scenarios are specifically designed to align with PLAB 2 examination requirements and standards.',
              },
              {
                question: 'How often is new content added?',
                answer: 'We add new scenarios and update existing ones weekly, ensuring content remains current with medical practices and examination standards.',
              },
              {
                question: 'Can I practice with other students?',
                answer: 'Yes, our platform supports collaborative learning through virtual study groups and peer-to-peer practice sessions.',
              },
              {
                question: 'Is there a mobile app available?',
                answer: 'Yes, we offer mobile apps for both iOS and Android, allowing you to practice on the go.',
              },
            ].map((faq) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="h-6 w-6 text-indigo-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <p className="mt-2 text-base text-gray-500">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Preview Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Latest Updates</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              From Our Blog
            </p>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Top 10 OSCE Examination Tips',
                excerpt: 'Essential tips and strategies to help you excel in your OSCE examination...',
                category: 'Exam Tips',
                date: 'Mar 15, 2024',
              },
              {
                title: 'Understanding Patient Communication',
                excerpt: 'Effective communication techniques for better patient interactions...',
                category: 'Clinical Skills',
                date: 'Mar 12, 2024',
              },
              {
                title: 'New AI Features Released',
                excerpt: 'Exploring the latest AI-powered features added to MedCoach AI...',
                category: 'Platform Updates',
                date: 'Mar 10, 2024',
              },
            ].map((post) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaNewspaper className="h-4 w-4" />
                    <span className="ml-2">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link
                      href="/blog"
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Partners</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Leading Institutions
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { name: 'Medical University', icon: FaUniversity },
              { name: 'Teaching Hospital', icon: FaHospital },
              { name: 'Medical Council', icon: FaMedkit },
              { name: 'Research Institute', icon: FaStethoscope },
            ].map((partner) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
              >
                <partner.icon className="h-12 w-12 text-indigo-500" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to boost your OSCE performance?</span>
            <span className="block text-indigo-200">Start practicing with MedCoach AI today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of medical students who have already improved their clinical skills with our platform.
          </p>
          <Link
            href="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
