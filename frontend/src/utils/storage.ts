/**
 * Storage utility for persisting MCP server configurations
 */

import type { ConfigValue } from '../types/mcp';

const STORAGE_KEY = 'mcp-server-configs';

export interface ServerConfig {
  serverId: string;
  config: Record<string, ConfigValue>;
  timestamp: number;
}

/**
 * Save configuration for a specific MCP server
 */
export function saveServerConfig(serverId: string, config: Record<string, ConfigValue>): void {
  try {
    const configs = getAllConfigs();
    const existingIndex = configs.findIndex(c => c.serverId === serverId);

    const serverConfig: ServerConfig = {
      serverId,
      config,
      timestamp: Date.now()
    };

    if (existingIndex >= 0) {
      configs[existingIndex] = serverConfig;
    } else {
      configs.push(serverConfig);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(configs));
  } catch (error) {
    console.error('Error saving server configuration:', error);
  }
}

/**
 * Get configuration for a specific MCP server
 */
export function getServerConfig(serverId: string): Record<string, ConfigValue> | null {
  try {
    const configs = getAllConfigs();
    const serverConfig = configs.find(c => c.serverId === serverId);
    return serverConfig ? serverConfig.config : null;
  } catch (error) {
    console.error('Error loading server configuration:', error);
    return null;
  }
}

/**
 * Get all saved configurations
 */
export function getAllConfigs(): ServerConfig[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading configurations:', error);
    return [];
  }
}

/**
 * Delete configuration for a specific MCP server
 */
export function deleteServerConfig(serverId: string): void {
  try {
    const configs = getAllConfigs();
    const filtered = configs.filter(c => c.serverId !== serverId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting server configuration:', error);
  }
}

/**
 * Clear all saved configurations
 */
export function clearAllConfigs(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing configurations:', error);
  }
}
