import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import ReportForm from '../components/safety/ReportForm';

const Safety = () => {
  const handleSubmitReport = async (formData: FormData) => {
    // TODO: Implement report submission logic
    console.log('Submitting report:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center space-x-2 mb-4"
          >
            <AlertTriangle className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Safety Reporting
            </h1>
          </motion.div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Use this form to report any safety concerns, security vulnerabilities, or compliance issues.
            All reports are treated confidentially and will be investigated promptly.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
          <ReportForm onSubmit={handleSubmitReport} />
        </div>
      </motion.div>
    </div>
  );
};

export default Safety;