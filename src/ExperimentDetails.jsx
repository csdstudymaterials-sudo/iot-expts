// ExperimentDetails.jsx
// Component to display details of a selected experiment

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import experiments from './data';

const ExperimentDetails = () => {
  // Get the experiment ID from URL params
  const { id } = useParams();
  const experiment = experiments.find(exp => exp.id === parseInt(id));

  if (!experiment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20"
        >
          <h2 className="text-2xl font-bold text-red-600 mb-4">Experiment not found</h2>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors duration-300"
          >
            Back to Experiments
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kongu Engineering College</h1>
          <h2 className="text-lg md:text-xl opacity-90">Department of Computer Science and Design</h2>
        </motion.div>

        {/* Experiment Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mb-8"
        >
          <motion.h3
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center"
          >
            {experiment.name}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Aim:</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">{experiment.aim}</p>

            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Components Used:</h4>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="list-disc list-inside space-y-2"
            >
              {experiment.components.map((component, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.1, duration: 0.4 }}
                  className="text-base md:text-lg text-gray-700"
                >
                  {component}
                </motion.li>
              ))}
            </motion.ul>

            {experiment.images && experiment.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Reference Images:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiment.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4"
                    >
                      <img
                        src={`/src/assets/${image}`}
                        alt={`${experiment.name} - Reference ${index + 1}`}
                        className="w-full h-auto rounded-xl shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">{image}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {experiment.procedure && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Procedure:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  {experiment.procedure.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
                      className="text-base md:text-lg text-gray-700 leading-relaxed"
                    >
                      {step}
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            )}

            {experiment.program && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Program:</h4>
                {experiment.program.map((prog, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                    className="mb-6"
                  >
                    <h5 className="text-lg md:text-xl font-semibold text-blue-600 mb-2">{prog.title}</h5>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{prog.code}</code>
                    </pre>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {experiment.output && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="mt-6"
              >
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Output:</h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  {experiment.output}
                </p>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Back to Experiments
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white"
        >
          <p className="text-lg">Developed by 2023-27 batch </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperimentDetails;