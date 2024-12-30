import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Upload, X } from 'lucide-react';

interface ReportFormProps {
  onSubmit: (report: FormData) => Promise<void>;
}

const ReportForm: React.FC<ReportFormProps> = ({ onSubmit }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    files.forEach(file => formData.append('files', file));
    
    try {
      await onSubmit(formData);
      e.currentTarget.reset();
      setFiles([]);
    } catch (error) {
      console.error('Error submitting report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Severity Level
        </label>
        <select
          name="severity"
          required
          className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500/40"
        >
          <option value="low">Low - Minor Issue</option>
          <option value="medium">Medium - Moderate Concern</option>
          <option value="high">High - Serious Problem</option>
          <option value="critical">Critical - Immediate Action Required</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <select
          name="category"
          required
          className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500/40"
        >
          <option value="security">Security Vulnerability</option>
          <option value="safety">Safety Hazard</option>
          <option value="compliance">Compliance Issue</option>
          <option value="environmental">Environmental Concern</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          name="description"
          required
          rows={4}
          className="w-full bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500/40"
          placeholder="Please provide detailed information about the issue..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Supporting Documents
        </label>
        <div className="relative">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center w-full p-4 border-2 border-dashed border-blue-500/20 rounded-lg cursor-pointer hover:border-blue-500/40"
          >
            <Upload className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-gray-400">Upload files</span>
          </label>
        </div>
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-slate-800/50 rounded-lg"
              >
                <span className="text-sm text-gray-300 truncate">{file.name}</span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-400"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-blue-600 hover:to-cyan-600 transition-colors"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <AlertTriangle className="w-5 h-5" />
            <span>Submit Report</span>
          </>
        )}
      </button>
    </motion.form>
  );
};

export default ReportForm;