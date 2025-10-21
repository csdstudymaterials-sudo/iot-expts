// ExperimentList.jsx
// Main component displaying the list of IoT experiments

import React from 'react';
import { Link } from 'react-router-dom';
import experiments from './data';
import { downloadExperiment, downloadExperimentsRange } from './utils/downloadUtils';
import kecbanner from './assets/kecbanner.png';

const ExperimentList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {/* Logo */}
        <div className="text-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 mb-8">
          <img src={kecbanner} alt="Kongu Engineering College Logo" className="max-w-full h-auto max-h-32 mx-auto" />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kongu Engineering College</h1>
          <h2 className="text-xl md:text-2xl opacity-90">Department of Computer Science and Design</h2>
        </div>

        {/* Section Header */}
        <div className="text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">IoT Laboratory Experiments</h3>
          <div className="mb-4">
            <button
              onClick={() => downloadExperimentsRange(experiments, 2, 8)}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            >
              Download Experiments 2–8 (.txt)
            </button>
          </div>
          <button
            onClick={() => {
              // Clear authentication state
              localStorage.removeItem('kec_authenticated');
              localStorage.removeItem('kec_user');
              // Redirect to authentication page
              window.location.href = './';
            }}
            className="inline-block bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300"
          >
            ← Back to Authentication
          </button>
        </div>

        {/* Experiment Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {experiments.map((experiment, index) => (
            <div key={experiment.id} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="text-center mb-4">
                <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-2">Experiment {experiment.id}</h4>
                <p className="text-sm md:text-base text-gray-700 leading-tight">{experiment.name}</p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  to={`/experiment/${experiment.id}`}
                  className="block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-4 rounded-xl shadow-md text-center font-medium"
                >
                  View Details
                </Link>

                <button
                  onClick={() => downloadExperiment(experiment)}
                  className="inline-flex bg-green-600 text-white py-3 px-4 rounded-xl shadow-md items-center justify-center gap-2 font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download (.txt)
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full details for experiments 2-6 (rendered near the first experiment) */}
        <div className="space-y-8 mb-12">
          {experiments.filter(e => e.id >= 2 && e.id <= 6).map(e => (
            <div key={`detail-${e.id}`} className="bg-white/90 p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Experiment {e.id}: {e.name}</h3>
              <p className="mb-3 text-gray-700"><strong>Aim:</strong> {e.aim}</p>
              <div className="mb-3">
                <h4 className="font-semibold">Components:</h4>
                <ul className="list-disc list-inside ml-4">
                  {e.components.map((c, i) => <li key={i} className="text-gray-700">{c}</li>)}
                </ul>
              </div>

              {e.procedure && e.procedure.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold">Procedure:</h4>
                  <ol className="list-decimal list-inside ml-4">
                    {e.procedure.map((step, i) => <li key={i} className="text-gray-700 mb-1">{step}</li>)}
                  </ol>
                </div>
              )}

              {e.program && e.program.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold">Program(s):</h4>
                  {e.program.map((p, idx) => (
                    <div key={idx} className="mb-4">
                      <h5 className="font-medium text-blue-600">{p.title}</h5>
                      <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto"><code>{p.code}</code></pre>
                    </div>
                  ))}
                </div>
              )}

              {e.images && e.images.length > 0 && (
                <div className="mb-3">
                  <h4 className="font-semibold">Reference Images:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    {e.images.map((img, i) => (
                      <div key={i} className="p-2 bg-white rounded-lg border">
                        <img src={`/docs/assets/${img}`} alt={img} className="w-full h-auto rounded" onError={(ev)=>{ev.currentTarget.style.display='none'}} />
                        <p className="text-sm text-gray-600 mt-1 text-center">{img}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {e.output && (
                <div className="mt-3">
                  <h4 className="font-semibold">Expected Output:</h4>
                  <p className="text-gray-700">{e.output}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl text-white">
          <p className="text-lg">Developed by 2023-27 batch </p>
        </div>
      </div>
    </div>
  );
};

export default ExperimentList;