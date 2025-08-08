import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ title, description, onClick }) => {
  return (
    <AnimatePresence>
    <motion.div
      className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, y: 10, x:10 }}
      whileInView={{ opacity: 1, y: 0, x:0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600">
          {title}
        </h3>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600" />
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </motion.div>
    </AnimatePresence>
  );
};

export default FeatureCard;
