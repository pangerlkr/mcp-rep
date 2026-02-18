import { useState } from 'react';
import { Server, Zap, Download, Code, BookOpen, Shield } from 'lucide-react';
import Header from './components/Header';
import ServerCard from './components/ServerCard';
import BuildPanel from './components/BuildPanel';
import ConfigModal from './components/ConfigModal';
import { mcpServers, categories } from './data/mcpServers';
import type { MCPServer } from './types/mcp';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedServers, setSelectedServers] = useState<MCPServer[]>([]);
  const [showBuildPanel, setShowBuildPanel] = useState(false);
  const [configModalServer, setConfigModalServer] = useState<MCPServer | null>(null);

  const filteredServers = selectedCategory === 'all' 
    ? mcpServers 
    : mcpServers.filter(s => s.category === selectedCategory);

  const handleServerToggle = (server: MCPServer) => {
    const isSelected = selectedServers.find(s => s.id === server.id);
    if (isSelected) {
      setSelectedServers(selectedServers.filter(s => s.id !== server.id));
    } else {
      setSelectedServers([...selectedServers, server]);
    }
  };

  const handleConfigure = (server: MCPServer) => {
    setConfigModalServer(server);
  };

  const handleBuild = () => {
    setShowBuildPanel(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6 animate-fade-in">
            <Zap size={16} />
            <span className="text-sm font-semibold">Enterprise-Ready MCP Server Builder</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Build Your MCP Server
            <br />
            <span className="text-primary-600">In Just One Click</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create powerful Model Context Protocol servers with our intuitive platform. 
            Choose from 12+ pre-built integrations and deploy instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className="btn-primary flex items-center gap-2"
              onClick={() => document.getElementById('servers')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Server size={20} />
              Get Started
            </button>
            <a 
              href="#documentation" 
              className="btn-secondary flex items-center gap-2"
            >
              <BookOpen size={20} />
              Documentation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">12+</div>
              <div className="text-gray-600">MCP Integrations</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Production Ready</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Open</div>
              <div className="text-gray-600">Source</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section id="servers" className="py-8 px-4 bg-white border-y">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({mcpServers.length})
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category} ({mcpServers.filter(s => s.category === category).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Server Cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map(server => (
              <ServerCard
                key={server.id}
                server={server}
                isSelected={!!selectedServers.find(s => s.id === server.id)}
                onToggle={() => handleServerToggle(server)}
                onConfigure={() => handleConfigure(server)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Build Button */}
      {selectedServers.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleBuild}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl flex items-center gap-3 transition-all transform hover:scale-105"
          >
            <Download size={24} />
            Build Server ({selectedServers.length} selected)
          </button>
        </div>
      )}

      {/* Build Panel */}
      {showBuildPanel && (
        <BuildPanel
          selectedServers={selectedServers}
          onClose={() => setShowBuildPanel(false)}
        />
      )}

      {/* Config Modal */}
      {configModalServer && (
        <ConfigModal
          server={configModalServer}
          onClose={() => setConfigModalServer(null)}
        />
      )}

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Build and deploy your MCP server in seconds, not hours. Our optimized build process ensures rapid deployment.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Built with security best practices. Includes input validation, secure configurations, and audit logging.
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
              <p className="text-gray-600">
                Extend with custom tools, configure every aspect, and integrate with your existing infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with ❤️ for the MCP community
          </p>
          <div className="flex justify-center gap-6">
            <a href="#documentation" className="text-gray-400 hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#security" className="text-gray-400 hover:text-white transition-colors">
              Security
            </a>
            <a href="#contributing" className="text-gray-400 hover:text-white transition-colors">
              Contributing
            </a>
            <a href="https://github.com/pangerlkr/mcp-rep" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
