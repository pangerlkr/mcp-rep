import type { MCPServer } from '../types/mcp';

export const mcpServers: MCPServer[] = [
  {
    id: 'filesystem',
    name: 'Filesystem MCP',
    description: 'Access and manipulate files and directories on the local filesystem',
    category: 'System',
    icon: '📁',
    version: '1.0.0',
    author: 'Anthropic',
    repository: 'https://github.com/modelcontextprotocol/servers',
    documentation: 'https://modelcontextprotocol.io/docs',
    tools: [
      {
        name: 'read_file',
        description: 'Read contents of a file',
        parameters: [
          { name: 'path', type: 'string', description: 'File path to read', required: true }
        ]
      },
      {
        name: 'write_file',
        description: 'Write contents to a file',
        parameters: [
          { name: 'path', type: 'string', description: 'File path to write', required: true },
          { name: 'content', type: 'string', description: 'Content to write', required: true }
        ]
      },
      {
        name: 'list_directory',
        description: 'List contents of a directory',
        parameters: [
          { name: 'path', type: 'string', description: 'Directory path', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-filesystem'],
      configurable: [
        {
          key: 'allowedDirectories',
          label: 'Allowed Directories',
          type: 'text',
          description: 'Comma-separated list of allowed directory paths',
          required: true
        }
      ]
    }
  },
  {
    id: 'github',
    name: 'GitHub MCP',
    description: 'Interact with GitHub repositories, issues, pull requests, and more',
    category: 'Development',
    icon: '🐙',
    version: '1.0.0',
    author: 'Anthropic',
    repository: 'https://github.com/modelcontextprotocol/servers',
    tools: [
      {
        name: 'search_repositories',
        description: 'Search for GitHub repositories',
        parameters: [
          { name: 'query', type: 'string', description: 'Search query', required: true }
        ]
      },
      {
        name: 'get_file_contents',
        description: 'Get contents of a file from a repository',
        parameters: [
          { name: 'owner', type: 'string', description: 'Repository owner', required: true },
          { name: 'repo', type: 'string', description: 'Repository name', required: true },
          { name: 'path', type: 'string', description: 'File path', required: true }
        ]
      },
      {
        name: 'create_issue',
        description: 'Create a new issue',
        parameters: [
          { name: 'owner', type: 'string', description: 'Repository owner', required: true },
          { name: 'repo', type: 'string', description: 'Repository name', required: true },
          { name: 'title', type: 'string', description: 'Issue title', required: true },
          { name: 'body', type: 'string', description: 'Issue body', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-github'],
      configurable: [
        {
          key: 'githubToken',
          label: 'GitHub Personal Access Token',
          type: 'password',
          description: 'GitHub PAT for authentication',
          required: true
        }
      ]
    }
  },
  {
    id: 'postgres',
    name: 'PostgreSQL MCP',
    description: 'Query and manage PostgreSQL databases',
    category: 'Database',
    icon: '🐘',
    version: '1.0.0',
    author: 'Anthropic',
    tools: [
      {
        name: 'query',
        description: 'Execute a SQL query',
        parameters: [
          { name: 'sql', type: 'string', description: 'SQL query to execute', required: true }
        ]
      },
      {
        name: 'list_tables',
        description: 'List all tables in the database',
        parameters: []
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-postgres'],
      configurable: [
        {
          key: 'connectionString',
          label: 'PostgreSQL Connection String',
          type: 'password',
          description: 'PostgreSQL connection string (e.g., postgresql://user:pass@localhost:5432/db)',
          required: true
        }
      ]
    }
  },
  {
    id: 'sqlite',
    name: 'SQLite MCP',
    description: 'Query and manage SQLite databases',
    category: 'Database',
    icon: '💾',
    version: '1.0.0',
    author: 'Anthropic',
    tools: [
      {
        name: 'query',
        description: 'Execute a SQL query',
        parameters: [
          { name: 'sql', type: 'string', description: 'SQL query to execute', required: true }
        ]
      },
      {
        name: 'list_tables',
        description: 'List all tables in the database',
        parameters: []
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-sqlite'],
      configurable: [
        {
          key: 'databasePath',
          label: 'Database File Path',
          type: 'text',
          description: 'Path to SQLite database file',
          required: true
        }
      ]
    }
  },
  {
    id: 'slack',
    name: 'Slack MCP',
    description: 'Send messages and interact with Slack workspaces',
    category: 'Communication',
    icon: '💬',
    version: '1.0.0',
    author: 'Community',
    tools: [
      {
        name: 'send_message',
        description: 'Send a message to a Slack channel',
        parameters: [
          { name: 'channel', type: 'string', description: 'Channel ID or name', required: true },
          { name: 'text', type: 'string', description: 'Message text', required: true }
        ]
      },
      {
        name: 'list_channels',
        description: 'List all channels in the workspace',
        parameters: []
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-slack'],
      configurable: [
        {
          key: 'slackToken',
          label: 'Slack Bot Token',
          type: 'password',
          description: 'Slack bot token for authentication',
          required: true
        }
      ]
    }
  },
  {
    id: 'google-drive',
    name: 'Google Drive MCP',
    description: 'Access and manage files in Google Drive',
    category: 'Cloud Storage',
    icon: '☁️',
    version: '1.0.0',
    author: 'Community',
    tools: [
      {
        name: 'list_files',
        description: 'List files in Google Drive',
        parameters: [
          { name: 'query', type: 'string', description: 'Search query', required: false }
        ]
      },
      {
        name: 'read_file',
        description: 'Read a file from Google Drive',
        parameters: [
          { name: 'fileId', type: 'string', description: 'File ID', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-gdrive'],
      configurable: [
        {
          key: 'credentials',
          label: 'Google Drive Credentials JSON',
          type: 'password',
          description: 'Google Cloud service account credentials',
          required: true
        }
      ]
    }
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer MCP',
    description: 'Browser automation and web scraping',
    category: 'Automation',
    icon: '🤖',
    version: '1.0.0',
    author: 'Anthropic',
    tools: [
      {
        name: 'navigate',
        description: 'Navigate to a URL',
        parameters: [
          { name: 'url', type: 'string', description: 'URL to navigate to', required: true }
        ]
      },
      {
        name: 'screenshot',
        description: 'Take a screenshot',
        parameters: [
          { name: 'selector', type: 'string', description: 'CSS selector (optional)', required: false }
        ]
      },
      {
        name: 'click',
        description: 'Click an element',
        parameters: [
          { name: 'selector', type: 'string', description: 'CSS selector', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-puppeteer'],
      configurable: []
    }
  },
  {
    id: 'fetch',
    name: 'Fetch MCP',
    description: 'Make HTTP requests to APIs and websites',
    category: 'Network',
    icon: '🌐',
    version: '1.0.0',
    author: 'Anthropic',
    tools: [
      {
        name: 'fetch',
        description: 'Make an HTTP request',
        parameters: [
          { name: 'url', type: 'string', description: 'URL to fetch', required: true },
          { name: 'method', type: 'string', description: 'HTTP method', required: false },
          { name: 'headers', type: 'object', description: 'Request headers', required: false },
          { name: 'body', type: 'string', description: 'Request body', required: false }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-fetch'],
      configurable: [
        {
          key: 'allowedDomains',
          label: 'Allowed Domains',
          type: 'text',
          description: 'Comma-separated list of allowed domains',
          required: false
        }
      ]
    }
  },
  {
    id: 'aws',
    name: 'AWS MCP',
    description: 'Interact with AWS services (S3, EC2, Lambda, etc.)',
    category: 'Cloud',
    icon: '☁️',
    version: '1.0.0',
    author: 'Community',
    tools: [
      {
        name: 's3_list_buckets',
        description: 'List S3 buckets',
        parameters: []
      },
      {
        name: 's3_upload',
        description: 'Upload file to S3',
        parameters: [
          { name: 'bucket', type: 'string', description: 'Bucket name', required: true },
          { name: 'key', type: 'string', description: 'Object key', required: true },
          { name: 'content', type: 'string', description: 'File content', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-aws'],
      configurable: [
        {
          key: 'accessKeyId',
          label: 'AWS Access Key ID',
          type: 'password',
          description: 'AWS access key',
          required: true
        },
        {
          key: 'secretAccessKey',
          label: 'AWS Secret Access Key',
          type: 'password',
          description: 'AWS secret key',
          required: true
        },
        {
          key: 'region',
          label: 'AWS Region',
          type: 'select',
          description: 'AWS region',
          required: true,
          options: ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1']
        }
      ]
    }
  },
  {
    id: 'docker',
    name: 'Docker MCP',
    description: 'Manage Docker containers, images, and networks',
    category: 'DevOps',
    icon: '🐳',
    version: '1.0.0',
    author: 'Community',
    tools: [
      {
        name: 'list_containers',
        description: 'List Docker containers',
        parameters: [
          { name: 'all', type: 'boolean', description: 'Show all containers', required: false }
        ]
      },
      {
        name: 'start_container',
        description: 'Start a container',
        parameters: [
          { name: 'containerId', type: 'string', description: 'Container ID', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-docker'],
      configurable: [
        {
          key: 'socketPath',
          label: 'Docker Socket Path',
          type: 'text',
          description: 'Path to Docker socket',
          required: false,
          default: '/var/run/docker.sock'
        }
      ]
    }
  },
  {
    id: 'git',
    name: 'Git MCP',
    description: 'Perform Git operations on repositories',
    category: 'Development',
    icon: '📦',
    version: '1.0.0',
    author: 'Community',
    tools: [
      {
        name: 'git_status',
        description: 'Get repository status',
        parameters: [
          { name: 'path', type: 'string', description: 'Repository path', required: true }
        ]
      },
      {
        name: 'git_commit',
        description: 'Create a commit',
        parameters: [
          { name: 'path', type: 'string', description: 'Repository path', required: true },
          { name: 'message', type: 'string', description: 'Commit message', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-git'],
      configurable: []
    }
  },
  {
    id: 'memory',
    name: 'Memory MCP',
    description: 'Store and retrieve information across conversations',
    category: 'AI',
    icon: '🧠',
    version: '1.0.0',
    author: 'Anthropic',
    tools: [
      {
        name: 'store_memory',
        description: 'Store information in memory',
        parameters: [
          { name: 'key', type: 'string', description: 'Memory key', required: true },
          { name: 'value', type: 'string', description: 'Value to store', required: true }
        ]
      },
      {
        name: 'retrieve_memory',
        description: 'Retrieve stored information',
        parameters: [
          { name: 'key', type: 'string', description: 'Memory key', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-memory'],
      configurable: []
    }
  }
];

export const categories = Array.from(new Set(mcpServers.map(s => s.category)));
