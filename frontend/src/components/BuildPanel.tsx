import React, { useState } from 'react';
import { X, Download, FileJson, Package, Copy, Check } from 'lucide-react';
import type { MCPServer, ConfigValue } from '../types/mcp';
import { generateMCPConfig } from '../utils/configGenerator';
import { getServerConfig } from '../utils/storage';

interface BuildPanelProps {
  selectedServers: MCPServer[];
  serverConfigs?: Record<string, Record<string, ConfigValue>>;
  onClose: () => void;
}

const BuildPanel: React.FC<BuildPanelProps> = ({ selectedServers, serverConfigs, onClose }) => {
  const [serverName, setServerName] = useState('my-mcp-server');
  const [serverDescription, setServerDescription] = useState('My custom MCP server');
  const [exportFormat, setExportFormat] = useState<'json' | 'docker' | 'npm'>('json');
  const [copied, setCopied] = useState(false);

  // Merge server configurations from localStorage and props
  const getAllServerConfigs = () => {
    const configs: Record<string, Record<string, ConfigValue>> = {};
    selectedServers.forEach(server => {
      // First try to get from props (in-memory state)
      let config = serverConfigs?.[server.id];
      // If not in props, try localStorage
      if (!config) {
        const savedConfig = getServerConfig(server.id);
        if (savedConfig) {
          config = savedConfig;
        }
      }
      if (config) {
        configs[server.id] = config;
      }
    });
    return configs;
  };

  const config = generateMCPConfig(selectedServers, serverName, serverDescription, getAllServerConfigs());

  const handleDownload = () => {
    let content: string;
    let filename: string;
    let mimeType: string;

    if (exportFormat === 'json') {
      content = JSON.stringify(config, null, 2);
      filename = 'mcp-config.json';
      mimeType = 'application/json';
    } else if (exportFormat === 'docker') {
      content = generateDockerfile(config);
      filename = 'Dockerfile';
      mimeType = 'text/plain';
    } else {
      content = generatePackageJson(serverName, serverDescription, selectedServers);
      filename = 'package.json';
      mimeType = 'application/json';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const content = exportFormat === 'json' 
      ? JSON.stringify(config, null, 2)
      : exportFormat === 'docker'
      ? generateDockerfile(config)
      : generatePackageJson(serverName, serverDescription, selectedServers);
    
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Build Your MCP Server</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Server Info */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Server Name
              </label>
              <input
                type="text"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="my-mcp-server"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={serverDescription}
                onChange={(e) => setServerDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
                placeholder="Describe your MCP server"
              />
            </div>

            {/* Selected Servers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Selected Integrations ({selectedServers.length})
              </h3>
              <div className="space-y-2">
                {selectedServers.map(server => (
                  <div key={server.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{server.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{server.name}</p>
                      <p className="text-sm text-gray-600">{server.category}</p>
                    </div>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                      {server.tools.length} tools
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Export Format */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Export Format
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setExportFormat('json')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    exportFormat === 'json'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <FileJson className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-sm font-semibold">JSON Config</p>
                </button>
                <button
                  onClick={() => setExportFormat('docker')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    exportFormat === 'docker'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Package className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-sm font-semibold">Docker</p>
                </button>
                <button
                  onClick={() => setExportFormat('npm')}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    exportFormat === 'npm'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Package className="mx-auto mb-2 text-primary-600" size={24} />
                  <p className="text-sm font-semibold">NPM Package</p>
                </button>
              </div>
            </div>

            {/* Preview */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-gray-700">
                  Configuration Preview
                </label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                {exportFormat === 'json' && JSON.stringify(config, null, 2)}
                {exportFormat === 'docker' && generateDockerfile(config)}
                {exportFormat === 'npm' && generatePackageJson(serverName, serverDescription, selectedServers)}
              </pre>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex gap-3">
          <button
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Cancel
          </button>
          <button
            onClick={handleDownload}
            className="btn-primary flex-1 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download {exportFormat === 'json' ? 'Config' : exportFormat === 'docker' ? 'Dockerfile' : 'package.json'}
          </button>
        </div>
      </div>
    </div>
  );
};

function generateDockerfile(config: {
  name: string;
  description: string;
  version: string;
  mcpServers: Record<string, {
    command?: string;
    args?: string[];
    env: Record<string, string>;
    transport: string;
  }>;
}): string {
  return `FROM node:20-alpine

WORKDIR /app

# Install MCP servers
${Object.keys(config.mcpServers).map(key => {
  const server = config.mcpServers[key];
  if (server.command === 'npx' && server.args && server.args[1]) {
    return `RUN npm install -g ${server.args[1]}`;
  }
  return '';
}).filter(Boolean).join('\n')}

# Copy configuration
COPY mcp-config.json /app/config.json

# Set environment variables
ENV NODE_ENV=production

# Expose port if needed
EXPOSE 3000

CMD ["node", "server.js"]
`;
}

function generatePackageJson(name: string, description: string, servers: MCPServer[]): string {
  const dependencies: Record<string, string> = {};
  servers.forEach(server => {
    if (server.configuration.command === 'npx' && server.configuration.args) {
      const pkg = server.configuration.args[1];
      dependencies[pkg] = 'latest';
    }
  });

  return JSON.stringify({
    name,
    version: '1.0.0',
    description,
    main: 'index.js',
    scripts: {
      start: 'node index.js',
      dev: 'nodemon index.js'
    },
    dependencies,
    engines: {
      node: '>=18.0.0'
    }
  }, null, 2);
}

export default BuildPanel;
