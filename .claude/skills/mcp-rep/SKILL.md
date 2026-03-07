# mcp-rep Development Patterns

> Auto-generated skill from repository analysis

## Overview

This skill teaches development patterns for mcp-rep, a TypeScript-based project that provides a platform for MCP (Model Context Protocol) server integrations. The codebase focuses on building and managing MCP server configurations with a React frontend, emphasizing type safety, comprehensive documentation, and collaborative development workflows.

## Coding Conventions

### File Naming
- Use **camelCase** for all file names
- Component files: `BuildPanel.tsx`, `ConfigModal.tsx`
- Utility files: `configGenerator.ts`, `storage.ts`
- Data files: `mcpServers.ts`

### Import/Export Style
```typescript
// Relative imports preferred
import { BuildPanel } from './components/BuildPanel';
import { generateConfig } from '../utils/configGenerator';

// Mixed export style - use named exports for utilities
export const configGenerator = { ... };
export default App;
```

### Commit Style
- Use freeform commit messages with occasional prefixes like `chore:`
- Keep messages concise (~41 characters average)
- Include co-author information for collaborative work

## Workflows

### React Component Bug Fixing
**Trigger:** When CI fails due to type errors or linting issues
**Command:** `/fix-types`

1. **Fix TypeScript compilation errors** - Address any `tsc` build failures
2. **Replace 'any' types with proper types** - Define specific interfaces in `src/types/mcp.ts`
3. **Fix ESLint violations** - Address linting issues across component files
4. **Update component prop types** - Ensure all React component props are properly typed
5. **Handle null/undefined cases** - Add proper null checks and optional chaining

```typescript
// Before
const config: any = getConfig();

// After
interface McpConfig {
  name: string;
  command: string[];
  args?: string[];
}
const config: McpConfig | null = getConfig();
```

### Feature Documentation Workflow
**Trigger:** When implementing a major new feature or capability
**Command:** `/add-feature`

1. **Implement core feature functionality** - Build the feature in appropriate component/utility files
2. **Create detailed documentation in docs/** - Add comprehensive guides and examples
3. **Update README.md with new instructions** - Include setup and usage information
4. **Add configuration examples** - Provide real-world usage examples

Example documentation structure:
```markdown
## New Feature Name

### Overview
Brief description of the feature

### Usage
```typescript
// Code example
```

### Configuration
Example configuration snippets
```

### MCP Integration Expansion
**Trigger:** When adding support for new MCP servers or categories
**Command:** `/add-mcp-servers`

1. **Update MCP servers data file** - Add new server definitions to `mcpServers.ts`
2. **Modify frontend components to handle new servers** - Update UI components to support new server types
3. **Update README with new integration count** - Reflect the expanded server support
4. **Update package dependencies** - Add any new required dependencies

```typescript
// Example server definition
export const newMcpServer = {
  name: "example-server",
  description: "Server description",
  command: ["npx", "example-mcp-server"],
  category: "productivity"
};
```

### Collaborative PR Workflow
**Trigger:** When working on features through pull requests
**Command:** `/create-pr`

1. **Create initial plan commit** - Outline the feature implementation plan
2. **Implement feature with co-author** - Develop the feature collaboratively
3. **Address code review feedback** - Make requested changes and improvements
4. **Merge pull request** - Complete the feature integration

Commit message format for collaboration:
```
feat: implement new feature

Co-authored-by: Collaborator Name <email@example.com>
```

## Testing Patterns

- Test files follow the pattern `*.test.*`
- Testing framework not explicitly detected, but structure suggests unit testing approach
- Tests should be co-located with the code they test
- Focus on testing utility functions and component behavior

```typescript
// Example test structure
describe('configGenerator', () => {
  it('should generate valid MCP configuration', () => {
    // Test implementation
  });
});
```

## Commands

| Command | Purpose |
|---------|---------|
| `/fix-types` | Fix TypeScript/ESLint errors and improve type safety |
| `/add-feature` | Implement new feature with comprehensive documentation |
| `/add-mcp-servers` | Add new MCP server integrations and update related files |
| `/create-pr` | Start collaborative pull request workflow |