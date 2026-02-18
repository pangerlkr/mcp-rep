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
  },
  // Cybersecurity Professional Tools
  {
    id: 'osint',
    name: 'OSINT MCP',
    description: 'Open Source Intelligence gathering tools for threat intelligence and reconnaissance',
    category: 'Cybersecurity',
    icon: '🔍',
    version: '1.0.0',
    author: 'Security Community',
    tools: [
      {
        name: 'domain_lookup',
        description: 'Perform WHOIS and DNS lookups',
        parameters: [
          { name: 'domain', type: 'string', description: 'Domain to lookup', required: true }
        ]
      },
      {
        name: 'ip_geolocation',
        description: 'Get geolocation data for IP addresses',
        parameters: [
          { name: 'ip', type: 'string', description: 'IP address', required: true }
        ]
      },
      {
        name: 'threat_intel',
        description: 'Check IP/domain reputation',
        parameters: [
          { name: 'target', type: 'string', description: 'IP or domain', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@security/osint-mcp'],
      configurable: [
        {
          key: 'apiKeys',
          label: 'Threat Intelligence API Keys',
          type: 'password',
          description: 'Comma-separated API keys for threat intel sources',
          required: false
        }
      ]
    }
  },
  {
    id: 'vulnerability-scanner',
    name: 'Vulnerability Scanner MCP',
    description: 'Scan code and dependencies for security vulnerabilities',
    category: 'Cybersecurity',
    icon: '🛡️',
    version: '1.0.0',
    author: 'Security Community',
    tools: [
      {
        name: 'scan_dependencies',
        description: 'Scan project dependencies for known vulnerabilities',
        parameters: [
          { name: 'path', type: 'string', description: 'Project path', required: true }
        ]
      },
      {
        name: 'code_security_scan',
        description: 'Analyze code for security issues',
        parameters: [
          { name: 'path', type: 'string', description: 'File or directory path', required: true },
          { name: 'language', type: 'string', description: 'Programming language', required: false }
        ]
      },
      {
        name: 'cve_lookup',
        description: 'Look up CVE details',
        parameters: [
          { name: 'cveId', type: 'string', description: 'CVE identifier', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@security/vuln-scanner-mcp'],
      configurable: [
        {
          key: 'nvdApiKey',
          label: 'NVD API Key',
          type: 'password',
          description: 'National Vulnerability Database API key',
          required: false
        }
      ]
    }
  },
  {
    id: 'security-audit',
    name: 'Security Audit MCP',
    description: 'Perform security audits and compliance checks',
    category: 'Cybersecurity',
    icon: '🔐',
    version: '1.0.0',
    author: 'Security Community',
    tools: [
      {
        name: 'compliance_check',
        description: 'Check compliance with security standards',
        parameters: [
          { name: 'standard', type: 'string', description: 'Standard (OWASP, PCI-DSS, HIPAA)', required: true },
          { name: 'path', type: 'string', description: 'Project path', required: true }
        ]
      },
      {
        name: 'generate_security_report',
        description: 'Generate comprehensive security audit report',
        parameters: [
          { name: 'scanResults', type: 'object', description: 'Scan results data', required: true }
        ]
      },
      {
        name: 'check_ssl',
        description: 'Check SSL/TLS configuration',
        parameters: [
          { name: 'domain', type: 'string', description: 'Domain to check', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@security/audit-mcp'],
      configurable: []
    }
  },
  {
    id: 'penetration-testing',
    name: 'Penetration Testing MCP',
    description: 'Authorized security testing and vulnerability assessment tools',
    category: 'Cybersecurity',
    icon: '⚔️',
    version: '1.0.0',
    author: 'Security Community',
    tools: [
      {
        name: 'port_scan',
        description: 'Perform authorized port scanning',
        parameters: [
          { name: 'target', type: 'string', description: 'Target IP or domain', required: true },
          { name: 'ports', type: 'string', description: 'Port range', required: false }
        ]
      },
      {
        name: 'web_security_test',
        description: 'Test web application security',
        parameters: [
          { name: 'url', type: 'string', description: 'Target URL', required: true },
          { name: 'testType', type: 'string', description: 'XSS, SQLi, CSRF, etc.', required: true }
        ]
      },
      {
        name: 'api_security_test',
        description: 'Test API security',
        parameters: [
          { name: 'endpoint', type: 'string', description: 'API endpoint', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@security/pentest-mcp'],
      configurable: [
        {
          key: 'authorization',
          label: 'Authorization Token',
          type: 'password',
          description: 'Proof of authorization for testing',
          required: true
        }
      ]
    }
  },
  // Research Tools
  {
    id: 'academic-search',
    name: 'Academic Search MCP',
    description: 'Search and access academic papers and research databases',
    category: 'Research',
    icon: '📚',
    version: '1.0.0',
    author: 'Research Community',
    tools: [
      {
        name: 'search_papers',
        description: 'Search academic papers',
        parameters: [
          { name: 'query', type: 'string', description: 'Search query', required: true },
          { name: 'database', type: 'string', description: 'Database (arxiv, pubmed, scholar)', required: false }
        ]
      },
      {
        name: 'get_paper_details',
        description: 'Get detailed paper information',
        parameters: [
          { name: 'doi', type: 'string', description: 'DOI or paper ID', required: true }
        ]
      },
      {
        name: 'extract_citations',
        description: 'Extract citations from a paper',
        parameters: [
          { name: 'paperId', type: 'string', description: 'Paper identifier', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@research/academic-search-mcp'],
      configurable: [
        {
          key: 'apiKeys',
          label: 'Academic API Keys',
          type: 'password',
          description: 'API keys for academic databases',
          required: false
        }
      ]
    }
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis MCP',
    description: 'Statistical analysis and data visualization for research',
    category: 'Research',
    icon: '📊',
    version: '1.0.0',
    author: 'Research Community',
    tools: [
      {
        name: 'analyze_dataset',
        description: 'Perform statistical analysis on datasets',
        parameters: [
          { name: 'dataPath', type: 'string', description: 'Path to dataset', required: true },
          { name: 'analysisType', type: 'string', description: 'Analysis type', required: true }
        ]
      },
      {
        name: 'generate_visualization',
        description: 'Create data visualizations',
        parameters: [
          { name: 'data', type: 'object', description: 'Data to visualize', required: true },
          { name: 'chartType', type: 'string', description: 'Chart type', required: true }
        ]
      },
      {
        name: 'correlation_analysis',
        description: 'Perform correlation analysis',
        parameters: [
          { name: 'variables', type: 'array', description: 'Variables to analyze', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@research/data-analysis-mcp'],
      configurable: []
    }
  },
  {
    id: 'citation-manager',
    name: 'Citation Manager MCP',
    description: 'Manage citations and generate bibliographies',
    category: 'Research',
    icon: '📖',
    version: '1.0.0',
    author: 'Research Community',
    tools: [
      {
        name: 'add_citation',
        description: 'Add citation to library',
        parameters: [
          { name: 'citation', type: 'object', description: 'Citation details', required: true }
        ]
      },
      {
        name: 'generate_bibliography',
        description: 'Generate bibliography in specified format',
        parameters: [
          { name: 'style', type: 'string', description: 'Citation style (APA, MLA, Chicago)', required: true },
          { name: 'citations', type: 'array', description: 'List of citations', required: true }
        ]
      },
      {
        name: 'format_citation',
        description: 'Format a single citation',
        parameters: [
          { name: 'citation', type: 'object', description: 'Citation data', required: true },
          { name: 'style', type: 'string', description: 'Citation style', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@research/citation-mcp'],
      configurable: []
    }
  },
  {
    id: 'research-assistant',
    name: 'Research Assistant MCP',
    description: 'AI-powered research assistant for literature review and synthesis',
    category: 'Research',
    icon: '🔬',
    version: '1.0.0',
    author: 'Research Community',
    tools: [
      {
        name: 'summarize_paper',
        description: 'Generate paper summary',
        parameters: [
          { name: 'paperText', type: 'string', description: 'Paper content', required: true }
        ]
      },
      {
        name: 'find_related_papers',
        description: 'Find papers related to a topic',
        parameters: [
          { name: 'topic', type: 'string', description: 'Research topic', required: true }
        ]
      },
      {
        name: 'extract_methodology',
        description: 'Extract research methodology from paper',
        parameters: [
          { name: 'paperText', type: 'string', description: 'Paper content', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@research/assistant-mcp'],
      configurable: []
    }
  },
  // Student Tools
  {
    id: 'study-planner',
    name: 'Study Planner MCP',
    description: 'Plan and track study schedules and academic goals',
    category: 'Education',
    icon: '📅',
    version: '1.0.0',
    author: 'Education Community',
    tools: [
      {
        name: 'create_study_plan',
        description: 'Create a study schedule',
        parameters: [
          { name: 'subject', type: 'string', description: 'Subject name', required: true },
          { name: 'deadline', type: 'string', description: 'Exam or deadline date', required: true },
          { name: 'hoursPerDay', type: 'number', description: 'Available study hours', required: true }
        ]
      },
      {
        name: 'track_progress',
        description: 'Track study progress',
        parameters: [
          { name: 'topic', type: 'string', description: 'Topic studied', required: true },
          { name: 'duration', type: 'number', description: 'Study duration in minutes', required: true }
        ]
      },
      {
        name: 'generate_reminders',
        description: 'Generate study reminders',
        parameters: [
          { name: 'schedule', type: 'object', description: 'Study schedule', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@education/study-planner-mcp'],
      configurable: []
    }
  },
  {
    id: 'note-taking',
    name: 'Note Taking MCP',
    description: 'Organize and manage academic notes efficiently',
    category: 'Education',
    icon: '📝',
    version: '1.0.0',
    author: 'Education Community',
    tools: [
      {
        name: 'create_note',
        description: 'Create a new note',
        parameters: [
          { name: 'title', type: 'string', description: 'Note title', required: true },
          { name: 'content', type: 'string', description: 'Note content', required: true },
          { name: 'tags', type: 'array', description: 'Note tags', required: false }
        ]
      },
      {
        name: 'search_notes',
        description: 'Search through notes',
        parameters: [
          { name: 'query', type: 'string', description: 'Search query', required: true }
        ]
      },
      {
        name: 'organize_notes',
        description: 'Organize notes by topic',
        parameters: [
          { name: 'noteIds', type: 'array', description: 'Note IDs to organize', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@education/notes-mcp'],
      configurable: []
    }
  },
  {
    id: 'flashcards',
    name: 'Flashcards MCP',
    description: 'Create and manage flashcards for effective learning',
    category: 'Education',
    icon: '🎴',
    version: '1.0.0',
    author: 'Education Community',
    tools: [
      {
        name: 'create_flashcard',
        description: 'Create a flashcard',
        parameters: [
          { name: 'question', type: 'string', description: 'Question text', required: true },
          { name: 'answer', type: 'string', description: 'Answer text', required: true },
          { name: 'deck', type: 'string', description: 'Deck name', required: true }
        ]
      },
      {
        name: 'generate_flashcards',
        description: 'Generate flashcards from text',
        parameters: [
          { name: 'text', type: 'string', description: 'Source text', required: true },
          { name: 'count', type: 'number', description: 'Number of cards', required: false }
        ]
      },
      {
        name: 'quiz_mode',
        description: 'Start a quiz session',
        parameters: [
          { name: 'deck', type: 'string', description: 'Deck name', required: true },
          { name: 'mode', type: 'string', description: 'Quiz mode (random, spaced)', required: false }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@education/flashcards-mcp'],
      configurable: []
    }
  },
  {
    id: 'assignment-tracker',
    name: 'Assignment Tracker MCP',
    description: 'Track assignments, deadlines, and grades',
    category: 'Education',
    icon: '✍️',
    version: '1.0.0',
    author: 'Education Community',
    tools: [
      {
        name: 'add_assignment',
        description: 'Add new assignment',
        parameters: [
          { name: 'title', type: 'string', description: 'Assignment title', required: true },
          { name: 'course', type: 'string', description: 'Course name', required: true },
          { name: 'dueDate', type: 'string', description: 'Due date', required: true },
          { name: 'priority', type: 'string', description: 'Priority level', required: false }
        ]
      },
      {
        name: 'track_grades',
        description: 'Track assignment grades',
        parameters: [
          { name: 'assignmentId', type: 'string', description: 'Assignment ID', required: true },
          { name: 'grade', type: 'number', description: 'Grade received', required: true }
        ]
      },
      {
        name: 'calculate_gpa',
        description: 'Calculate GPA from grades',
        parameters: [
          { name: 'grades', type: 'array', description: 'List of grades', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@education/assignment-tracker-mcp'],
      configurable: []
    }
  },
  // Entrepreneur Tools
  {
    id: 'business-plan',
    name: 'Business Plan Generator MCP',
    description: 'Generate and manage comprehensive business plans',
    category: 'Business',
    icon: '💼',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'generate_business_plan',
        description: 'Generate business plan sections',
        parameters: [
          { name: 'businessType', type: 'string', description: 'Type of business', required: true },
          { name: 'section', type: 'string', description: 'Plan section', required: true }
        ]
      },
      {
        name: 'swot_analysis',
        description: 'Generate SWOT analysis',
        parameters: [
          { name: 'businessInfo', type: 'object', description: 'Business information', required: true }
        ]
      },
      {
        name: 'competitor_analysis',
        description: 'Analyze competitors',
        parameters: [
          { name: 'industry', type: 'string', description: 'Industry sector', required: true },
          { name: 'location', type: 'string', description: 'Geographic location', required: false }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@business/plan-generator-mcp'],
      configurable: []
    }
  },
  {
    id: 'market-research',
    name: 'Market Research MCP',
    description: 'Conduct market research and competitive analysis',
    category: 'Business',
    icon: '📈',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'market_size_analysis',
        description: 'Analyze market size and potential',
        parameters: [
          { name: 'industry', type: 'string', description: 'Industry name', required: true },
          { name: 'region', type: 'string', description: 'Geographic region', required: true }
        ]
      },
      {
        name: 'trend_analysis',
        description: 'Analyze market trends',
        parameters: [
          { name: 'keywords', type: 'array', description: 'Keywords to track', required: true },
          { name: 'timeframe', type: 'string', description: 'Analysis timeframe', required: false }
        ]
      },
      {
        name: 'customer_persona',
        description: 'Generate customer personas',
        parameters: [
          { name: 'targetMarket', type: 'string', description: 'Target market description', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@business/market-research-mcp'],
      configurable: []
    }
  },
  {
    id: 'financial-analysis',
    name: 'Financial Analysis MCP',
    description: 'Financial modeling, forecasting, and analysis tools',
    category: 'Business',
    icon: '💰',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'revenue_projection',
        description: 'Project revenue and growth',
        parameters: [
          { name: 'currentRevenue', type: 'number', description: 'Current revenue', required: true },
          { name: 'growthRate', type: 'number', description: 'Expected growth rate', required: true },
          { name: 'periods', type: 'number', description: 'Number of periods', required: true }
        ]
      },
      {
        name: 'break_even_analysis',
        description: 'Calculate break-even point',
        parameters: [
          { name: 'fixedCosts', type: 'number', description: 'Fixed costs', required: true },
          { name: 'variableCostPerUnit', type: 'number', description: 'Variable cost per unit', required: true },
          { name: 'pricePerUnit', type: 'number', description: 'Price per unit', required: true }
        ]
      },
      {
        name: 'cash_flow_forecast',
        description: 'Forecast cash flow',
        parameters: [
          { name: 'financialData', type: 'object', description: 'Financial data', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@business/financial-analysis-mcp'],
      configurable: []
    }
  },
  {
    id: 'pitch-deck',
    name: 'Pitch Deck Builder MCP',
    description: 'Create compelling investor pitch decks',
    category: 'Business',
    icon: '🎯',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'generate_slide',
        description: 'Generate pitch deck slide content',
        parameters: [
          { name: 'slideType', type: 'string', description: 'Slide type (problem, solution, market)', required: true },
          { name: 'businessInfo', type: 'object', description: 'Business information', required: true }
        ]
      },
      {
        name: 'create_executive_summary',
        description: 'Create executive summary',
        parameters: [
          { name: 'businessData', type: 'object', description: 'Business data', required: true }
        ]
      },
      {
        name: 'investor_targeting',
        description: 'Identify potential investors',
        parameters: [
          { name: 'industry', type: 'string', description: 'Industry sector', required: true },
          { name: 'stage', type: 'string', description: 'Funding stage', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@business/pitch-deck-mcp'],
      configurable: []
    }
  },
  // Small Business Tools
  {
    id: 'invoice-generator',
    name: 'Invoice Generator MCP',
    description: 'Create and manage professional invoices',
    category: 'Small Business',
    icon: '🧾',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'create_invoice',
        description: 'Generate an invoice',
        parameters: [
          { name: 'clientName', type: 'string', description: 'Client name', required: true },
          { name: 'items', type: 'array', description: 'Invoice items', required: true },
          { name: 'dueDate', type: 'string', description: 'Payment due date', required: true }
        ]
      },
      {
        name: 'track_payments',
        description: 'Track invoice payments',
        parameters: [
          { name: 'invoiceId', type: 'string', description: 'Invoice ID', required: true },
          { name: 'status', type: 'string', description: 'Payment status', required: true }
        ]
      },
      {
        name: 'send_reminder',
        description: 'Send payment reminder',
        parameters: [
          { name: 'invoiceId', type: 'string', description: 'Invoice ID', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@smallbiz/invoice-mcp'],
      configurable: []
    }
  },
  {
    id: 'crm',
    name: 'Customer Management MCP',
    description: 'Manage customer relationships and interactions',
    category: 'Small Business',
    icon: '👥',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'add_customer',
        description: 'Add new customer',
        parameters: [
          { name: 'name', type: 'string', description: 'Customer name', required: true },
          { name: 'contact', type: 'object', description: 'Contact information', required: true }
        ]
      },
      {
        name: 'track_interaction',
        description: 'Log customer interaction',
        parameters: [
          { name: 'customerId', type: 'string', description: 'Customer ID', required: true },
          { name: 'interactionType', type: 'string', description: 'Type of interaction', required: true },
          { name: 'notes', type: 'string', description: 'Interaction notes', required: false }
        ]
      },
      {
        name: 'customer_analytics',
        description: 'Analyze customer data',
        parameters: [
          { name: 'metric', type: 'string', description: 'Metric to analyze', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@smallbiz/crm-mcp'],
      configurable: []
    }
  },
  {
    id: 'inventory-tracker',
    name: 'Inventory Tracker MCP',
    description: 'Track and manage product inventory',
    category: 'Small Business',
    icon: '📦',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'add_product',
        description: 'Add product to inventory',
        parameters: [
          { name: 'name', type: 'string', description: 'Product name', required: true },
          { name: 'sku', type: 'string', description: 'Product SKU', required: true },
          { name: 'quantity', type: 'number', description: 'Initial quantity', required: true }
        ]
      },
      {
        name: 'update_stock',
        description: 'Update stock levels',
        parameters: [
          { name: 'sku', type: 'string', description: 'Product SKU', required: true },
          { name: 'quantity', type: 'number', description: 'Quantity change', required: true }
        ]
      },
      {
        name: 'low_stock_alert',
        description: 'Check for low stock items',
        parameters: [
          { name: 'threshold', type: 'number', description: 'Low stock threshold', required: false }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@smallbiz/inventory-mcp'],
      configurable: []
    }
  },
  {
    id: 'appointment-scheduler',
    name: 'Appointment Scheduler MCP',
    description: 'Schedule and manage appointments with customers',
    category: 'Small Business',
    icon: '📆',
    version: '1.0.0',
    author: 'Business Community',
    tools: [
      {
        name: 'book_appointment',
        description: 'Book a new appointment',
        parameters: [
          { name: 'customerName', type: 'string', description: 'Customer name', required: true },
          { name: 'dateTime', type: 'string', description: 'Appointment date and time', required: true },
          { name: 'service', type: 'string', description: 'Service type', required: true }
        ]
      },
      {
        name: 'check_availability',
        description: 'Check available time slots',
        parameters: [
          { name: 'date', type: 'string', description: 'Date to check', required: true }
        ]
      },
      {
        name: 'send_confirmation',
        description: 'Send appointment confirmation',
        parameters: [
          { name: 'appointmentId', type: 'string', description: 'Appointment ID', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@smallbiz/scheduler-mcp'],
      configurable: []
    }
  },
  // Content Creator Tools
  {
    id: 'content-planner',
    name: 'Content Planner MCP',
    description: 'Plan and organize content creation workflows',
    category: 'Content Creation',
    icon: '📋',
    version: '1.0.0',
    author: 'Creator Community',
    tools: [
      {
        name: 'generate_content_calendar',
        description: 'Generate content calendar',
        parameters: [
          { name: 'topics', type: 'array', description: 'Content topics', required: true },
          { name: 'frequency', type: 'string', description: 'Posting frequency', required: true },
          { name: 'duration', type: 'number', description: 'Calendar duration in days', required: true }
        ]
      },
      {
        name: 'content_ideas',
        description: 'Generate content ideas',
        parameters: [
          { name: 'niche', type: 'string', description: 'Content niche', required: true },
          { name: 'count', type: 'number', description: 'Number of ideas', required: false }
        ]
      },
      {
        name: 'trending_topics',
        description: 'Find trending topics',
        parameters: [
          { name: 'category', type: 'string', description: 'Content category', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@creator/content-planner-mcp'],
      configurable: []
    }
  },
  {
    id: 'seo-optimizer',
    name: 'SEO Optimizer MCP',
    description: 'Optimize content for search engines',
    category: 'Content Creation',
    icon: '🔎',
    version: '1.0.0',
    author: 'Creator Community',
    tools: [
      {
        name: 'keyword_research',
        description: 'Research SEO keywords',
        parameters: [
          { name: 'topic', type: 'string', description: 'Content topic', required: true },
          { name: 'count', type: 'number', description: 'Number of keywords', required: false }
        ]
      },
      {
        name: 'analyze_content',
        description: 'Analyze content SEO score',
        parameters: [
          { name: 'content', type: 'string', description: 'Content to analyze', required: true },
          { name: 'targetKeyword', type: 'string', description: 'Target keyword', required: true }
        ]
      },
      {
        name: 'generate_meta_tags',
        description: 'Generate SEO meta tags',
        parameters: [
          { name: 'title', type: 'string', description: 'Page title', required: true },
          { name: 'description', type: 'string', description: 'Content description', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@creator/seo-optimizer-mcp'],
      configurable: []
    }
  },
  {
    id: 'video-script',
    name: 'Video Script Generator MCP',
    description: 'Generate video scripts and storyboards',
    category: 'Content Creation',
    icon: '🎬',
    version: '1.0.0',
    author: 'Creator Community',
    tools: [
      {
        name: 'generate_script',
        description: 'Generate video script',
        parameters: [
          { name: 'topic', type: 'string', description: 'Video topic', required: true },
          { name: 'duration', type: 'number', description: 'Video duration in minutes', required: true },
          { name: 'style', type: 'string', description: 'Script style', required: false }
        ]
      },
      {
        name: 'create_hook',
        description: 'Create engaging video hook',
        parameters: [
          { name: 'topic', type: 'string', description: 'Video topic', required: true }
        ]
      },
      {
        name: 'generate_cta',
        description: 'Generate call-to-action',
        parameters: [
          { name: 'goal', type: 'string', description: 'CTA goal', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@creator/video-script-mcp'],
      configurable: []
    }
  },
  {
    id: 'social-media-manager',
    name: 'Social Media Manager MCP',
    description: 'Manage and schedule social media posts',
    category: 'Content Creation',
    icon: '📱',
    version: '1.0.0',
    author: 'Creator Community',
    tools: [
      {
        name: 'schedule_post',
        description: 'Schedule a social media post',
        parameters: [
          { name: 'platform', type: 'string', description: 'Social platform', required: true },
          { name: 'content', type: 'string', description: 'Post content', required: true },
          { name: 'scheduledTime', type: 'string', description: 'Scheduled time', required: true }
        ]
      },
      {
        name: 'optimize_post',
        description: 'Optimize post for engagement',
        parameters: [
          { name: 'content', type: 'string', description: 'Post content', required: true },
          { name: 'platform', type: 'string', description: 'Target platform', required: true }
        ]
      },
      {
        name: 'analytics_report',
        description: 'Generate social media analytics',
        parameters: [
          { name: 'platform', type: 'string', description: 'Social platform', required: true },
          { name: 'timeframe', type: 'string', description: 'Analysis timeframe', required: true }
        ]
      }
    ],
    configuration: {
      command: 'npx',
      args: ['-y', '@creator/social-media-mcp'],
      configurable: [
        {
          key: 'platformTokens',
          label: 'Social Media API Tokens',
          type: 'password',
          description: 'API tokens for social media platforms',
          required: false
        }
      ]
    }
  }
];

export const categories = Array.from(new Set(mcpServers.map(s => s.category)));
