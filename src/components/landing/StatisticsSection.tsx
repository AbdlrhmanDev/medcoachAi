import { memo } from 'react';
import { motion } from 'framer-motion';

const statistics = [
  { label: 'Active Students', value: '10,000+' },
  { label: 'Practice Cases', value: '500+' },
  { label: 'Success Rate', value: '95%' },
];

const StatisticsSection = memo(() => {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Trusted by Medical Students Worldwide
          </motion.h2>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                {stat.label}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection; 