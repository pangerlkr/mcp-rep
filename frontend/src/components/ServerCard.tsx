import React from 'react';
import { Check, Settings, ExternalLink } from 'lucide-react';
import type { MCPServer } from '../types/mcp';

interface ServerCardProps {
  server: MCPServer;
  isSelected: boolean;
  onToggle: () => void;
  onConfigure: () => void;
}

const ServerCard: React.FC<ServerCardProps> = ({ server, isSelected, onToggle, onConfigure }) => {
  return (
    <div
      className={`card relative transition-all ${
        isSelected ? 'ring-2 ring-primary-500 shadow-xl' : ''
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
          <Check className="text-white" size={20} />
        </div>
      )}
      
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{server.icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{server.name}</h3>
          <p className="text-sm text-gray-600">{server.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
          {server.category}
        </span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
          v{server.version}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Tools Available:</p>
        <div className="flex flex-wrap gap-2">
          {server.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              title={tool.description}
            >
              {tool.name}
            </span>
          ))}
          {server.tools.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
              +{server.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onToggle}
          className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
            isSelected
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
        {server.configuration.configurable.length > 0 && (
          <button
            onClick={onConfigure}
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            title="Configure"
          >
            <Settings size={20} />
          </button>
        )}
        {server.repository && (
          <a
            href={server.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            title="View Repository"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ServerCard;
