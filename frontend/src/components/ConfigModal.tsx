import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { MCPServer } from '../types/mcp';

interface ConfigModalProps {
  server: MCPServer;
  onClose: () => void;
}

const ConfigModal: React.FC<ConfigModalProps> = ({ server, onClose }) => {
  const [config, setConfig] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{server.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{server.name}</h2>
              <p className="text-sm text-gray-600">{server.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Configuration</h3>
              <p className="text-sm text-gray-600 mb-4">
                Configure the settings for this MCP server integration.
              </p>
            </div>

            {server.configuration.configurable.map(field => (
              <div key={field.key}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <p className="text-xs text-gray-600 mb-2">{field.description}</p>
                
                {field.type === 'text' || field.type === 'password' ? (
                  <input
                    type={field.type}
                    value={config[field.key] || field.default || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={field.default || ''}
                    required={field.required}
                  />
                ) : field.type === 'number' ? (
                  <input
                    type="number"
                    value={config[field.key] || field.default || ''}
                    onChange={(e) => handleChange(field.key, parseFloat(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder={field.default || ''}
                    required={field.required}
                  />
                ) : field.type === 'boolean' ? (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={config[field.key] || field.default || false}
                      onChange={(e) => handleChange(field.key, e.target.checked)}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">Enable</span>
                  </label>
                ) : field.type === 'select' ? (
                  <select
                    value={config[field.key] || field.default || ''}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required={field.required}
                  >
                    <option value="">Select an option</option>
                    {field.options?.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : null}
              </div>
            ))}

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Tools</h3>
              <div className="space-y-3">
                {server.tools.map((tool, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-1">{tool.name}</p>
                    <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                    {tool.parameters.length > 0 && (
                      <div className="mt-2">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Parameters:</p>
                        <div className="flex flex-wrap gap-2">
                          {tool.parameters.map((param, pidx) => (
                            <span
                              key={pidx}
                              className="px-2 py-1 bg-white text-gray-600 text-xs rounded border border-gray-200"
                              title={param.description}
                            >
                              {param.name}: {param.type}
                              {param.required && <span className="text-red-500">*</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Close
          </button>
          <button
            onClick={() => {
              // Save configuration logic here
              onClose();
            }}
            className="btn-primary flex-1"
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigModal;
