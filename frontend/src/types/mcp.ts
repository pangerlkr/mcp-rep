export interface MCPServer {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  version: string;
  author: string;
  repository?: string;
  documentation?: string;
  tools: MCPTool[];
  resources?: MCPResource[];
  prompts?: MCPPrompt[];
  configuration: MCPConfiguration;
}

export interface MCPTool {
  name: string;
  description: string;
  parameters: MCPParameter[];
  required?: string[];
}

export interface MCPParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  description: string;
  required?: boolean;
  default?: any;
}

export interface MCPResource {
  uri: string;
  name: string;
  description: string;
  mimeType?: string;
}

export interface MCPPrompt {
  name: string;
  description: string;
  arguments?: MCPParameter[];
}

export interface MCPConfiguration {
  command?: string;
  args?: string[];
  env?: Record<string, string>;
  transport?: 'stdio' | 'sse';
  configurable: ConfigurableField[];
}

export interface ConfigurableField {
  key: string;
  label: string;
  type: 'text' | 'password' | 'number' | 'boolean' | 'select';
  description: string;
  required?: boolean;
  options?: string[];
  default?: any;
}

export interface BuildConfig {
  selectedServers: MCPServer[];
  customSettings: Record<string, any>;
  exportFormat: 'json' | 'docker' | 'npm';
  serverName: string;
  serverDescription: string;
}
