# 📖 How to Use the MCP Server Builder Platform

This comprehensive guide will walk you through the entire process of building, configuring, and deploying your custom Model Context Protocol (MCP) server using our platform.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Step-by-Step Tutorial](#step-by-step-tutorial)
3. [Configuration Guide](#configuration-guide)
4. [Building and Exporting](#building-and-exporting)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)
7. [Best Practices](#best-practices)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Basic understanding of what MCP servers do
- ✅ API keys/credentials for services you want to integrate (if required)
- ✅ Node.js 18+ installed (for local development/deployment)

### What You'll Learn

By the end of this guide, you'll know how to:
- Select MCP integrations for your needs
- Configure API keys and settings
- Build and export your MCP server configuration
- Deploy your server locally or to the cloud

---

## 📝 Step-by-Step Tutorial

### Step 1: Access the Platform

1. **Open the application** in your web browser
   - For local development: `http://localhost:5173`
   - For production: Visit your deployed URL

2. **You'll see the homepage** with:
   - A list of available MCP integrations
   - Category filters at the top
   - A "Get Started" button

### Step 2: Browse Available Integrations

1. **Explore categories** to find the integrations you need:
   - **System**: Filesystem, Git operations
   - **Development**: GitHub, Docker management
   - **Databases**: PostgreSQL, SQLite
   - **Cloud Services**: AWS, Google Drive
   - **Communication**: Slack integration
   - **Automation & AI**: Puppeteer, HTTP requests, Memory
   - **Cybersecurity**: OSINT, vulnerability scanning, security audits
   - **Research**: Academic search, data analysis, citations
   - **Education**: Study planner, note-taking, flashcards
   - **Business**: Business plans, market research, financials
   - **Small Business**: Invoicing, CRM, inventory
   - **Content Creation**: Content planning, SEO, video scripts

2. **Click on a category** to filter integrations
   - Or select "All" to see everything

3. **Read the integration cards**:
   - Icon and name
   - Description of what it does
   - Category badge
   - Number of available tools

### Step 3: Select Integrations

1. **Click "Select" on an integration card**
   - The card will highlight with a blue border
   - A checkmark appears on the card

2. **Select multiple integrations** as needed
   - You can mix and match integrations from different categories
   - Example: Combine GitHub + Slack + PostgreSQL

3. **A floating build button appears** at the bottom-right showing:
   - "Build Server (X selected)"
   - Where X is the number of selected integrations

### Step 4: Configure Your Integrations

**IMPORTANT**: You must configure integrations that require API keys or credentials before building!

1. **Click "Configure" on an integration card**
   - A configuration modal will open

2. **In the configuration modal, you'll see**:
   - Integration name and description
   - Configuration fields (API keys, tokens, paths, etc.)
   - Available tools and their parameters
   - Required fields marked with a red asterisk (*)

3. **Fill in the configuration fields**:

   **Example - GitHub MCP**:
   ```
   GitHub Personal Access Token: ghp_your_token_here
   ```

   **Example - Filesystem MCP**:
   ```
   Allowed Directories: /home/user/projects,/home/user/documents
   ```

   **Example - PostgreSQL MCP**:
   ```
   Database URL: postgresql://user:password@localhost:5432/mydb
   ```

4. **Click "Save Configuration"**
   - The button will briefly show "Saved!" with a green checkmark
   - Your configuration is automatically saved to your browser's local storage
   - The modal will close after 1 second

5. **Repeat for all integrations that require configuration**
   - Your settings persist even if you close the browser
   - You can reconfigure anytime by clicking "Configure" again

### Step 5: Build Your MCP Server

1. **Click the "Build Server" button** (bottom-right)
   - The build panel will open

2. **In the build panel, customize your server**:

   a. **Server Name** (default: "my-mcp-server")
      - Use lowercase, hyphens allowed
      - Example: `my-awesome-mcp-server`

   b. **Description**
      - Describe what your server does
      - Example: "MCP server for development automation with GitHub, Slack, and PostgreSQL"

   c. **Selected Integrations List**
      - Review all selected integrations
      - Shows icon, name, category, and tool count

   d. **Export Format** - Choose one:
      - **JSON Config**: Claude Desktop or other MCP clients
      - **Docker**: Containerized deployment
      - **NPM Package**: Node.js package.json for npm-based projects

3. **Review the configuration preview**
   - Live preview of your configuration file
   - Includes all your saved settings
   - API keys and credentials are included in environment variables

4. **Click "Copy" to copy to clipboard** (optional)
   - Or click "Download" to save the file

### Step 6: Download Your Configuration

1. **Click the "Download" button**
   - File downloads based on your chosen format:
     - JSON Config → `mcp-config.json`
     - Docker → `Dockerfile`
     - NPM Package → `package.json`

2. **Save the file** to your project directory

---

## ⚙️ Configuration Guide

### Understanding Configuration Fields

Different integrations require different types of configuration:

#### 1. **Text Fields** (API keys, URLs, paths)
```
Example: GitHub Personal Access Token
Type: password (hidden input)
Format: ghp_xxxxxxxxxxxxxxxxxxxx
```

#### 2. **Number Fields** (ports, timeouts, limits)
```
Example: Max Connections
Type: number
Format: 100
```

#### 3. **Boolean Fields** (enable/disable features)
```
Example: Enable SSL
Type: checkbox
Values: true/false
```

#### 4. **Select Fields** (dropdown options)
```
Example: Log Level
Type: select
Options: debug, info, warn, error
```

### Security Best Practices for Configuration

1. **API Keys and Tokens**:
   - Use environment variables in production
   - Never commit API keys to version control
   - Rotate keys regularly
   - Use keys with minimal required permissions

2. **Database Credentials**:
   - Use strong passwords
   - Limit database user permissions
   - Use SSL/TLS connections when possible

3. **File System Access**:
   - Only allow access to necessary directories
   - Use absolute paths
   - Avoid root directory access

### Configuration Examples

#### Example 1: GitHub Integration
```json
{
  "githubToken": "ghp_xxxxxxxxxxxxxxxxxxxx"
}
```
**Use case**: Access private repositories, create issues, manage PRs

#### Example 2: AWS Integration
```json
{
  "awsAccessKeyId": "AKIAIOSFODNN7EXAMPLE",
  "awsSecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  "awsRegion": "us-east-1"
}
```
**Use case**: Manage S3 buckets, EC2 instances, Lambda functions

#### Example 3: PostgreSQL Integration
```json
{
  "databaseUrl": "postgresql://user:password@localhost:5432/mydb"
}
```
**Use case**: Query and manage PostgreSQL databases

---

## 🔨 Building and Exporting

### Export Format Details

#### 1. JSON Configuration (Recommended for Claude Desktop)

**File**: `mcp-config.json`

**Usage**:
1. Open Claude Desktop
2. Go to Settings → Developer → MCP Servers
3. Click "Add Server"
4. Import your `mcp-config.json` file

**Example Output**:
```json
{
  "name": "my-mcp-server",
  "description": "My custom MCP server",
  "version": "1.0.0",
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUBTOKEN": "ghp_xxxxxxxxxxxxxxxxxxxx"
      },
      "transport": "stdio"
    }
  }
}
```

#### 2. Docker Configuration

**File**: `Dockerfile`

**Usage**:
1. Save Dockerfile to your project directory
2. Build the image: `docker build -t my-mcp-server .`
3. Run the container: `docker run -p 3000:3000 my-mcp-server`

**Example Output**:
```dockerfile
FROM node:20-alpine

WORKDIR /app

# Install MCP servers
RUN npm install -g @modelcontextprotocol/server-github
RUN npm install -g @modelcontextprotocol/server-filesystem

# Copy configuration
COPY mcp-config.json /app/config.json

# Set environment variables
ENV NODE_ENV=production

# Expose port if needed
EXPOSE 3000

CMD ["node", "server.js"]
```

#### 3. NPM Package Configuration

**File**: `package.json`

**Usage**:
1. Save to your Node.js project directory
2. Run `npm install` to install dependencies
3. Create your server code in `index.js`

**Example Output**:
```json
{
  "name": "my-mcp-server",
  "version": "1.0.0",
  "description": "My custom MCP server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "@modelcontextprotocol/server-github": "latest",
    "@modelcontextprotocol/server-filesystem": "latest"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 🚢 Deployment

### Option 1: Local Development

1. **Using JSON Config with Claude Desktop**:
   ```bash
   # No additional setup needed
   # Just import the config into Claude Desktop
   ```

2. **Using Node.js**:
   ```bash
   # Install dependencies
   npm install

   # Run your server
   npm start
   ```

3. **Using Docker**:
   ```bash
   # Build image
   docker build -t my-mcp-server .

   # Run container
   docker run -p 3000:3000 my-mcp-server
   ```

### Option 2: Cloud Deployment

#### Deploy to AWS

1. **Using AWS Lambda**:
   ```bash
   # Package your application
   zip -r function.zip .

   # Create Lambda function
   aws lambda create-function \
     --function-name my-mcp-server \
     --runtime nodejs20.x \
     --zip-file fileb://function.zip \
     --handler index.handler
   ```

2. **Using AWS ECS** (Docker):
   ```bash
   # Push to ECR
   aws ecr get-login-password | docker login --username AWS --password-stdin
   docker tag my-mcp-server:latest <account>.dkr.ecr.<region>.amazonaws.com/my-mcp-server
   docker push <account>.dkr.ecr.<region>.amazonaws.com/my-mcp-server

   # Deploy to ECS
   aws ecs create-service --cluster my-cluster --service-name my-mcp-server ...
   ```

#### Deploy to Google Cloud

```bash
# Deploy to Cloud Run
gcloud run deploy my-mcp-server \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create my-mcp-server

# Deploy
git push heroku main
```

### Environment Variables in Production

**IMPORTANT**: Never hardcode sensitive credentials in production!

1. **Set environment variables**:

   **Linux/Mac**:
   ```bash
   export GITHUBTOKEN="ghp_xxxxxxxxxxxxxxxxxxxx"
   export DATABASE_URL="postgresql://user:pass@host:5432/db"
   ```

   **Windows**:
   ```cmd
   set GITHUBTOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   set DATABASE_URL=postgresql://user:pass@host:5432/db
   ```

2. **Use a `.env` file** (for local development):
   ```
   GITHUBTOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
   DATABASE_URL=postgresql://user:pass@host:5432/db
   AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
   AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCY
   ```

3. **In Docker**:
   ```bash
   docker run -e GITHUBTOKEN=ghp_xxx -e DATABASE_URL=postgresql://... my-mcp-server
   ```

---

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Configuration Not Saving

**Problem**: When I click "Save Configuration", nothing happens.

**Solution**:
1. Check if your browser allows localStorage
2. Disable private/incognito mode (localStorage is restricted)
3. Clear browser cache and try again
4. Check browser console for errors (F12)

#### Issue 2: API Key Not Working

**Problem**: After configuring API keys, the integration doesn't work.

**Solution**:
1. Verify the API key is correct and active
2. Check the API key has required permissions
3. Ensure the key format matches the requirements
4. Look for spaces or hidden characters in the key

#### Issue 3: Downloaded Config Missing Credentials

**Problem**: The downloaded configuration file doesn't include my API keys.

**Solution**:
1. Make sure you clicked "Save Configuration" before building
2. Check that the "Saved!" message appeared
3. Try configuring the integration again
4. Check browser console for storage errors

#### Issue 4: Docker Build Fails

**Problem**: Docker build command fails with errors.

**Solution**:
1. Ensure Docker is installed and running
2. Check internet connection (needs to download dependencies)
3. Verify the Dockerfile syntax
4. Try building with `--no-cache` flag

#### Issue 5: Integration Not Appearing in List

**Problem**: I can't find a specific integration.

**Solution**:
1. Use the category filters to narrow down the list
2. Check if you're on the correct category
3. Clear the category filter and view "All"
4. Refresh the page

---

## ✨ Best Practices

### 1. Planning Your MCP Server

**Before selecting integrations**:
- List the tasks you want to automate
- Identify required external services
- Check integration compatibility
- Plan your authentication strategy

**Example Planning**:
```
Goal: Development automation
Tasks:
- Manage GitHub repositories ✓ (GitHub MCP)
- Store files ✓ (Filesystem MCP)
- Send notifications ✓ (Slack MCP)
- Query database ✓ (PostgreSQL MCP)
```

### 2. Security

**Always**:
- Use environment variables for production
- Rotate API keys regularly
- Use minimal required permissions
- Enable 2FA on service accounts
- Monitor usage and logs

**Never**:
- Commit API keys to git
- Share credentials in plain text
- Use root/admin credentials
- Disable security features

### 3. Configuration Management

**Recommended workflow**:
1. Configure development settings first
2. Test thoroughly in development
3. Create separate production configurations
4. Use environment-specific API keys
5. Document your configuration

**Configuration versioning**:
```bash
# Save different versions
mcp-config-dev.json
mcp-config-staging.json
mcp-config-prod.json
```

### 4. Testing

**Before deploying**:
1. Test each integration individually
2. Verify API keys work correctly
3. Check error handling
4. Test with sample data
5. Monitor resource usage

### 5. Maintenance

**Regular tasks**:
- Update MCP server packages monthly
- Review and rotate API keys quarterly
- Check integration deprecation notices
- Monitor server performance
- Back up configurations

---

## 💡 Tips and Tricks

### Tip 1: Start Small
Begin with 1-2 integrations, test thoroughly, then add more.

### Tip 2: Use Categories
Categories help you quickly find related integrations.

### Tip 3: Save Configurations Early
Configure and save settings as soon as you select an integration.

### Tip 4: Export Multiple Formats
Download both JSON and Docker configs for flexibility.

### Tip 5: Document Your Setup
Keep notes on:
- Which integrations you're using
- What each integration does in your workflow
- API key sources and renewal dates
- Configuration decisions and rationale

### Tip 6: Backup Your Config
```bash
# Save your configuration
cp mcp-config.json mcp-config-backup-$(date +%Y%m%d).json
```

### Tip 7: Test in Development First
Always test with development/sandbox API keys before using production credentials.

---

## 🎓 Learning Resources

### Official Documentation
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [MCP Server Implementations](https://github.com/modelcontextprotocol/servers)
- [Claude Desktop Guide](https://docs.anthropic.com/)

### Integration-Specific Guides
- **GitHub**: [GitHub API Documentation](https://docs.github.com/en/rest)
- **AWS**: [AWS SDK Documentation](https://docs.aws.amazon.com/)
- **PostgreSQL**: [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- **Docker**: [Docker Documentation](https://docs.docker.com/)

### Community
- GitHub Issues: Report bugs and request features
- Discord: Join our community (link in README)
- Stack Overflow: Tag questions with `mcp-server`

---

## 📞 Getting Help

If you encounter issues not covered in this guide:

1. **Check the troubleshooting section** above
2. **Search existing GitHub issues**: [github.com/pangerlkr/mcp-rep/issues](https://github.com/pangerlkr/mcp-rep/issues)
3. **Create a new issue** with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and OS information
   - Screenshots if applicable

4. **Contact support**:
   - Email: support@pangerlkr.link
   - Discord: [Join our community](https://discord.gg/example)

---

## 🎉 Success!

Congratulations! You now know how to:
- ✅ Browse and select MCP integrations
- ✅ Configure API keys and settings securely
- ✅ Build and export your MCP server
- ✅ Deploy to various platforms
- ✅ Troubleshoot common issues
- ✅ Follow best practices

**Next Steps**:
1. Build your first MCP server
2. Deploy it to your preferred platform
3. Integrate with Claude Desktop or your application
4. Share your experience with the community

Happy building! 🚀
