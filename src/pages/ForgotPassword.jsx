import React from 'react';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 to-purple-400 px-4">
      <motion.div
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-2xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Forgot Password?
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Oh no! You’ve forgotten your password? 😱 <br />
          Don’t worry… just try remembering it harder. 🧠
        </motion.p>

        <motion.div
          className="text-sm text-gray-500 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p>No reset links, no magic spells — just good old memory training.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
