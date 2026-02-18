import React from 'react';
import { Server, Github } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <Server className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">MCP Server Builder</h1>
            <p className="text-xs text-gray-600">Build powerful MCP servers instantly</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pangerlkr/mcp-rep"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github size={20} />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
