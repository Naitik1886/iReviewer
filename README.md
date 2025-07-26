# 🤖 AI Code Reviewer

A modern, sleek web application that provides intelligent code analysis and review using AI. Built with React and Node.js, featuring a beautiful dark theme with glassmorphism effects.

![AI Code Reviewer](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- **🎨 Modern UI/UX**: Sleek dark theme with gradient backgrounds and glassmorphism effects
- **💻 Code Editor**: Syntax highlighting with PrismJS for multiple programming languages
- **🧠 AI-Powered Reviews**: Comprehensive code analysis using Gemini 2.0 Flash
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Real-time Analysis**: Instant code review with detailed feedback
- **🔍 Comprehensive Coverage**: Reviews for bugs, security, performance, and best practices
- **📝 Markdown Output**: Beautifully formatted review results with syntax highlighting

## 🚀 Demo

[Live Demo](https://your-app-url.com) | [Backend API](https://your-api-url.com)

## 📸 Screenshots

### Main Interface
The application features a split-pane interface with a code editor on the left and AI review results on the right.

### Code Analysis
Get detailed feedback on:
- 🐛 **Bugs & Logic Errors**
- 🔒 **Security Vulnerabilities** 
- ⚡ **Performance Issues**
- 📚 **Best Practices**
- 🏗️ **Architecture Improvements**

## 🛠️ Tech Stack

### Frontend
- **React 18+** - Modern React with Hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **PrismJS** - Syntax highlighting
- **React Simple Code Editor** - Code editing component
- **React Markdown** - Markdown rendering with syntax highlighting
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Gemini 2.0 Flash** - AI model for code analysis
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Gemini API key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
PORT=8080
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

Start the backend server:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
```

Create environment files:

**.env.development:**
```env
VITE_API_URL=http://localhost:8080
```

**.env.production:**
```env
VITE_API_URL=https://your-backend-domain.com
```

Start the frontend development server:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables

#### Frontend (Vite)
| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:8080` |

#### Backend (Node.js)
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `8080` |
| `GEMINI_API_KEY` | Gemini API key | Required |
| `NODE_ENV` | Environment | `development` |

### Gemini API Setup

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your backend `.env` file
3. The system uses the detailed prompt for precise code analysis

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

3. **Set environment variables** in your hosting platform dashboard

### Backend Deployment (Railway/Render/Heroku)

1. **Ensure your backend uses dynamic port:**
   ```javascript
   const PORT = process.env.PORT || 8080;
   app.listen(PORT, '0.0.0.0');
   ```

2. **Deploy and set environment variables** in your hosting platform

### Docker Deployment

**Frontend Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

**Backend Dockerfile:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
```

## 📚 API Documentation

### POST `/ai/response`

Analyzes code and returns AI review.

**Request:**
```json
{
  "code": "function example() { return 'hello'; }"
}
```

**Response:**
```json
{
  "response": "## Code Review\n\n### ✅ Positive Observations\n- Clean function syntax\n\n### 💡 Suggestions\n- Add JSDoc comments..."
}
```

## 🎯 Usage

1. **Write or paste your code** in the left editor panel
2. **Click "Review Code"** to analyze your code
3. **View detailed feedback** in the right panel with:
   - Security vulnerabilities
   - Performance issues
   - Best practice suggestions
   - Code improvements

### Supported Languages
- JavaScript/TypeScript
- Python
- Java
- C#
- React/JSX
- And many more!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features

## 🐛 Known Issues

- Large code files (>10k lines) may take longer to analyze
- Some language-specific features require updated prompts

## 📝 Changelog

### v1.0.0 (2024-01-15)
- Initial release
- Basic code review functionality
- Modern UI with dark theme
- Gemini 2.0 Flash integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini](https://deepmind.google/technologies/gemini/) for AI capabilities
- [PrismJS](https://prismjs.com/) for syntax highlighting
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) community for amazing tools

## 💬 Support

If you have any questions or run into issues:

1. Check the [Issues](https://github.com/yourusername/ai-code-reviewer/issues) page
2. Create a new issue with detailed information
3. Join our [Discord community](https://discord.gg/your-invite)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!



---

**Built with ❤️ by [Naitik Srivastava](https://github.com/Naitik1886)**