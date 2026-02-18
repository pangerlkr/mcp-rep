import type { MCPServer } from '../types/mcp';

export function generateMCPConfig(
  servers: MCPServer[],
  serverName: string,
  description: string
) {
  const config: any = {
    name: serverName,
    description,
    version: '1.0.0',
    mcpServers: {}
  };

  servers.forEach(server => {
    config.mcpServers[server.id] = {
      command: server.configuration.command,
      args: server.configuration.args,
      env: server.configuration.env || {},
      transport: server.configuration.transport || 'stdio'
    };
  });

  return config;
}

export function generateServerCode(
  servers: MCPServer[],
  serverName: string,
  description: string
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
const config = ${JSON.stringify(generateMCPConfig(servers, serverName, description), null, 2)};

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
