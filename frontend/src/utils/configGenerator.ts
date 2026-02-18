import type { MCPServer, ConfigValue } from '../types/mcp';

export function generateMCPConfig(
  servers: MCPServer[],
  serverName: string,
  description: string,
  serverConfigs?: Record<string, Record<string, ConfigValue>>
) {
  const config: {
    name: string;
    description: string;
    version: string;
    mcpServers: Record<string, {
      command?: string;
      args?: string[];
      env: Record<string, string>;
      transport: string;
    }>;
  } = {
    name: serverName,
    description,
    version: '1.0.0',
    mcpServers: {}
  };

  servers.forEach(server => {
    const serverConfig = serverConfigs?.[server.id] || {};
    const env: Record<string, string> = { ...(server.configuration.env || {}) };

    // Map configurable fields to environment variables
    server.configuration.configurable.forEach(field => {
      const value = serverConfig[field.key];
      if (value !== undefined && value !== null && value !== '') {
        // Convert the field key to uppercase environment variable format
        const envKey = field.key.toUpperCase().replace(/[^A-Z0-9]/g, '_');
        env[envKey] = String(value);
      }
    });

    config.mcpServers[server.id] = {
      command: server.configuration.command,
      args: server.configuration.args,
      env,
      transport: server.configuration.transport || 'stdio'
    };
  });

  return config;
}

export function generateServerCode(
  servers: MCPServer[],
  serverName: string,
  description: string,
  serverConfigs?: Record<string, Record<string, ConfigValue>>
): string {
  return `#!/usr/bin/env node

/**
 * ${serverName}
 * ${description}
 *
 * Auto-generated MCP server configuration
 * Generated: ${new Date().toISOString()}
 */

const { spawn } = require('child_process');
const path = require('path');

// Server configuration
const config = ${JSON.stringify(generateMCPConfig(servers, serverName, description, serverConfigs), null, 2)};

// Start MCP servers
Object.entries(config.mcpServers).forEach(([name, serverConfig]) => {
  console.log(\`Starting MCP server: \${name}\`);
  
  const process = spawn(serverConfig.command, serverConfig.args, {
    env: { ...process.env, ...serverConfig.env },
    stdio: 'inherit'
  });
  
  process.on('error', (err) => {
    console.error(\`Error starting \${name}:\`, err);
  });
  
  process.on('exit', (code) => {
    console.log(\`\${name} exited with code \${code}\`);
  });
});

console.log('All MCP servers started successfully!');
`;
}
