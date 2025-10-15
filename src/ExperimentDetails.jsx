// ExperimentDetails.jsx
// Component to display details of a selected experiment

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import experiments from './data';
import { downloadExperiment, downloadCode } from './utils/downloadUtils';

// Import images
import esp32PinConfig from './assets/esp32 pin config.jpg';
import raspberryPi4 from './assets/raspberry-pi-4.png';

// Create image mapping
const imageMap = {
  'esp32 pin config.jpg': esp32PinConfig,
  'raspberry-pi-4.png': raspberryPi4,
};

const ExperimentDetails = () => {
  // Get the experiment ID from URL params
  const { id } = useParams();
  const experiment = experiments.find(exp => exp.id === parseInt(id));

  // Function to download entire experiment as text file
  const handleDownloadExperiment = () => {
    downloadExperiment(experiment);
  };

  if (!experiment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
        <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Experiment not found</h2>
          <button
            onClick={() => {
              // Clear authentication state
              localStorage.removeItem('kec_authenticated');
              localStorage.removeItem('kec_user');
              // Redirect to authentication page
              window.location.href = './';
            }}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Back to Authentication
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kongu Engineering College</h1>
          <h2 className="text-lg md:text-xl opacity-90">Department of Computer Science and Design</h2>
        </div>

        {/* Experiment Details */}
        <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
            {experiment.name}
          </h3>

          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Aim:</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">{experiment.aim}</p>

            <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Components Used:</h4>
            <ul className="list-disc list-inside space-y-2">
              {experiment.components.map((component, index) => (
                <li key={index} className="text-base md:text-lg text-gray-700">
                  {component}
                </li>
              ))}
            </ul>

            {experiment.images && experiment.images.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Reference Images:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experiment.images.map((image, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4">
                      <img
                        src={imageMap[image] || `/src/assets/${image}`}
                        alt={`${experiment.name} - Reference ${index + 1}`}
                        className="w-full h-auto rounded-xl shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      <p className="text-center text-sm text-gray-600 mt-2">{image}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {experiment.procedure && (
              <div className="mt-6">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Procedure:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  {experiment.procedure.map((step, index) => (
                    <li key={index} className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {experiment.program && (
              <div className="mt-6">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Program:</h4>
                {experiment.program.map((prog, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="text-lg md:text-xl font-semibold text-blue-600">{prog.title}</h5>
                      <button
                        onClick={() => downloadCode(prog.code, prog.title)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </button>
                    </div>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{prog.code}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {experiment.output && (
              <div className="mt-6">
                <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Output:</h4>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  {experiment.output}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center space-y-4">
            <button
              onClick={handleDownloadExperiment}
              className="inline-flex bg-green-600 text-white px-8 py-4 rounded-2xl shadow-lg mr-4 items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Experiment (.txt)
            </button>
            <button
              onClick={() => {
                // Clear authentication state
                localStorage.removeItem('kec_authenticated');
                localStorage.removeItem('kec_user');
                // Redirect to authentication page
                window.location.href = './';
              }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg"
            >
              Back to Authentication
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white">
          <p className="text-lg">Developed by 2023-27 batch </p>
        </div>
      </div>
    </div>
  );
};

export default ExperimentDetails;