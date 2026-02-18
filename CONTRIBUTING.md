# Contributing to MCP Server Builder Platform

Thank you for your interest in contributing to the MCP Server Builder Platform! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community](#community)

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience
- Nationality, personal appearance
- Race, religion, or sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Violations may be reported to security@example.com. All complaints will be reviewed and investigated.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating a bug report:
1. Check the existing issues to avoid duplicates
2. Determine which repository the problem should be reported in
3. Collect detailed information about the issue

**Bug Report Template:**
```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g. Windows, macOS, Linux]
 - Browser [e.g. chrome, safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**Enhancement Template:**
```markdown
**Is your feature request related to a problem?**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions.

**Additional context**
Add any other context or screenshots about the feature request.
```

### Contributing Code

1. **Small Changes**: For typos or small bug fixes, open a PR directly
2. **Larger Changes**: Open an issue first to discuss the changes
3. **New Features**: Discuss in an issue before starting work

### Adding MCP Integrations

To add a new MCP integration:

1. Add the server definition to `frontend/src/data/mcpServers.ts`
2. Follow the existing structure and provide complete information
3. Test the integration configuration
4. Update documentation
5. Submit a PR with a clear description

Example:
```typescript
{
  id: 'unique-id',
  name: 'Integration Name',
  description: 'Clear description',
  category: 'Category',
  icon: '🎯',
  version: '1.0.0',
  author: 'Your Name',
  repository: 'https://github.com/...',
  tools: [...],
  configuration: {...}
}
```

## 💻 Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup Steps

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/mcp-rep.git
   cd mcp-rep
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/pangerlkr/mcp-rep.git
   ```

4. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to `http://localhost:5173`

### Project Structure

```
mcp-rep/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── data/           # Data and configurations
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json
├── docs/                   # Documentation
└── README.md
```

## 🔄 Pull Request Process

### Before Submitting

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow coding standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(ui): add dark mode toggle
fix(build): resolve TypeScript compilation error
docs(readme): update installation instructions
```

### Submitting PR

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

3. **PR Description Should Include:**
   - What changes were made
   - Why the changes were necessary
   - How to test the changes
   - Screenshots (for UI changes)
   - Related issues

### PR Template

```markdown
## Description
Brief description of the changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes.

## Screenshots (if applicable)
Add screenshots here.

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed my code
- [ ] Commented complex areas
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests (if applicable)
```

### Review Process

1. **Automated Checks**: CI/CD will run automatically
2. **Code Review**: Maintainers will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: At least one maintainer approval required
5. **Merge**: Maintainer will merge when ready

## 📏 Coding Standards

### TypeScript

```typescript
// Use explicit types
function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
  // ...
}

// Use interfaces for objects
interface ServerConfig {
  id: string;
  name: string;
}

// Use type for unions and primitives
type Status = 'idle' | 'loading' | 'success' | 'error';
```

### React Components

```typescript
// Use functional components with hooks
import React, { useState } from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

const MyComponent: React.FC<Props> = ({ title, onClick }) => {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={onClick}>
      {title} - {count}
    </button>
  );
};

export default MyComponent;
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `ServerCard.tsx`)
- Utilities: `camelCase.ts` (e.g., `configGenerator.ts`)
- Types: `camelCase.ts` (e.g., `mcp.ts`)
- Tests: `*.test.tsx` or `*.test.ts`

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use trailing commas in objects/arrays
- Maximum line length: 100 characters

### Comments

```typescript
/**
 * Generates MCP server configuration
 * @param servers - Array of MCP servers to include
 * @param name - Name for the generated server
 * @returns Configuration object
 */
export function generateMCPConfig(
  servers: MCPServer[],
  name: string
): MCPConfig {
  // Implementation
}
```

## 🧪 Testing Guidelines

### Unit Tests

```typescript
import { describe, it, expect } from 'vitest';
import { generateMCPConfig } from './configGenerator';

describe('generateMCPConfig', () => {
  it('should generate valid config', () => {
    const result = generateMCPConfig([], 'test');
    expect(result).toHaveProperty('name', 'test');
  });
});
```

### Component Tests

```typescript
import { render, screen } from '@testing-library/react';
import ServerCard from './ServerCard';

describe('ServerCard', () => {
  it('renders server name', () => {
    render(<ServerCard server={mockServer} />);
    expect(screen.getByText('Test Server')).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run in watch mode
npm run test:watch
```

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and classes
- Document complex logic with inline comments
- Keep comments up to date with code changes

### README Updates

- Update README.md for new features
- Add examples and usage instructions
- Keep installation and setup instructions current

### API Documentation

- Document all public APIs
- Include parameter types and return types
- Provide usage examples

## 👥 Community

### Getting Help

- **Questions**: Open a discussion on GitHub
- **Issues**: Check existing issues first
- **Chat**: Join our Discord (coming soon)

### Communication Channels

- GitHub Issues: Bug reports and feature requests
- GitHub Discussions: Questions and general discussion
- Discord: Real-time chat (coming soon)
- Twitter: Updates and announcements

### Recognition

Contributors are recognized in:
- README.md contributor section
- Release notes
- Project documentation

## 🎯 Good First Issues

Look for issues labeled:
- `good first issue`: Great for newcomers
- `help wanted`: Need community assistance
- `documentation`: Documentation improvements

## 📝 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You

Thank you for contributing to the MCP Server Builder Platform! Your efforts help make this project better for everyone.

---

**Questions?** Open a discussion or contact us at contribute@example.com
