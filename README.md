🤖 AI Code Reviewer
A modern, sleek web application that provides intelligent code analysis and review using AI. Built with React and Node.js, featuring a beautiful dark theme with glassmorphism effects.
Show Image
Show Image
Show Image
✨ Features

🎨 Modern UI/UX: Sleek dark theme with gradient backgrounds and glassmorphism effects
💻 Code Editor: Syntax highlighting with PrismJS for multiple programming languages
🧠 AI-Powered Reviews: Comprehensive code analysis using Gemini 2.0 Flash
📱 Responsive Design: Works seamlessly on desktop and mobile devices
⚡ Real-time Analysis: Instant code review with detailed feedback
🔍 Comprehensive Coverage: Reviews for bugs, security, performance, and best practices
📝 Markdown Output: Beautifully formatted review results with syntax highlighting

🚀 Demo
Live Demo | Backend API
📸 Screenshots
Main Interface
The application features a split-pane interface with a code editor on the left and AI review results on the right.
Code Analysis
Get detailed feedback on:

🐛 Bugs & Logic Errors
🔒 Security Vulnerabilities
⚡ Performance Issues
📚 Best Practices
🏗️ Architecture Improvements

🛠️ Tech Stack
Frontend

React 18+ - Modern React with Hooks
Vite - Lightning-fast build tool
Tailwind CSS - Utility-first CSS framework
PrismJS - Syntax highlighting
React Simple Code Editor - Code editing component
React Markdown - Markdown rendering with syntax highlighting
Axios - HTTP client

Backend

Node.js - JavaScript runtime
Express.js - Web framework
Gemini 2.0 Flash - AI model for code analysis
CORS - Cross-origin resource sharing

📦 Installation
Prerequisites

Node.js 18+ and npm
Gemini API key

1. Clone the Repository
bashgit clone https://github.com/yourusername/ai-code-reviewer.git
cd ai-code-reviewer
2. Setup Backend
bashcd backend
npm install
Create .env file in backend directory:
envPORT=8080
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
Start the backend server:
bashnpm start
3. Setup Frontend
bashcd ../frontend
npm install
Create environment files:
.env.development:
envVITE_API_URL=http://localhost:8080
.env.production:
envVITE_API_URL=https://your-backend-domain.com
Start the frontend development server:
bashnpm run dev
🔧 Configuration
Environment Variables
Frontend (Vite)
VariableDescriptionDefaultVITE_API_URLBackend API URLhttp://localhost:8080
Backend (Node.js)
VariableDescriptionDefaultPORTServer port8080GEMINI_API_KEYGemini API keyRequiredNODE_ENVEnvironmentdevelopment
Gemini API Setup

Get your API key from Google AI Studio
Add it to your backend .env file
The system uses the detailed prompt for precise code analysis

🚀 Deployment
Frontend Deployment (Vercel/Netlify)

Build the project:
bashnpm run build

Deploy to Vercel:
bashvercel --prod

Set environment variables in your hosting platform dashboard

Backend Deployment (Railway/Render/Heroku)

Ensure your backend uses dynamic port:
javascriptconst PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0');

Deploy and set environment variables in your hosting platform

Docker Deployment
Frontend Dockerfile:
dockerfileFROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
Backend Dockerfile:
dockerfileFROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
📚 API Documentation
POST /ai/response
Analyzes code and returns AI review.
Request:
json{
  "code": "function example() { return 'hello'; }"
}
Response:
json{
  "response": "## Code Review\n\n### ✅ Positive Observations\n- Clean function syntax\n\n### 💡 Suggestions\n- Add JSDoc comments..."
}
🎯 Usage

Write or paste your code in the left editor panel
Click "Review Code" to analyze your code
View detailed feedback in the right panel with:

Security vulnerabilities
Performance issues
Best practice suggestions
Code improvements



Supported Languages

JavaScript/TypeScript
Python
Java
C#
React/JSX
And many more!

🤝 Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

Development Guidelines

Follow ESLint configuration
Use Prettier for code formatting
Write meaningful commit messages
Add tests for new features

🐛 Known Issues

Large code files (>10k lines) may take longer to analyze
Some language-specific features require updated prompts

📝 Changelog
v1.0.0 (2024-01-15)

Initial release
Basic code review functionality
Modern UI with dark theme
Gemini 2.0 Flash integration

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Google Gemini for AI capabilities
PrismJS for syntax highlighting
Tailwind CSS for styling
React community for amazing tools

💬 Support
If you have any questions or run into issues:

Check the Issues page
Create a new issue with detailed information
Join our Discord community

⭐ Show Your Support
Give a ⭐️ if this project helped you!
🔗 Links

Live Demo
Documentation
API Reference
Blog Post


Built with ❤️ by Naitik Srivastava.
