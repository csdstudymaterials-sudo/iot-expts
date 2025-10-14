// ExperimentList.jsx
// Main component displaying the list of IoT experiments

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import experiments from './data';
import { downloadExperiment } from './utils/downloadUtils';
import kecbanner from './assets/kecbanner.png';

const ExperimentList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mb-8"
        >
          <img src={kecbanner} alt="Kongu Engineering College Logo" className="max-w-full h-auto max-h-32 mx-auto" />
        </motion.div>

        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kongu Engineering College</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Department of Computer Science and Design</h2>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700">IoT Laboratory Experiments</h3>
        </motion.div>

        {/* Experiment Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6"
            >
              <div className="text-center mb-4">
                <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-2">Experiment {experiment.id}</h4>
                <p className="text-sm md:text-base text-gray-700 leading-tight">{experiment.name}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to={`/experiment/${experiment.id}`}
                  className="block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center font-medium"
                >
                  View Details
                </Link>

                <button
                  onClick={() => downloadExperiment(experiment)}
                  className="inline-flex bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 items-center justify-center gap-2 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download (.txt)
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white"
        >
          <p className="text-lg">Developed by 2023-27 batch </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperimentList;