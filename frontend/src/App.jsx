

import React, { useState } from "react"; 
import { highlight, languages } from "prismjs/components/prism-core"; 
import prism from "prismjs"; 
// import 'prismjs/themes/prism-tommorrow.css'; 
import Editor from "react-simple-code-editor"; 
import rehypeHighlight from "rehype-highlight"; 
import"highlight.js/styles/github.css"; 
import axios from "axios"; 
import { useEffect } from "react"; 
import Markdown from "react-markdown";  
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const App = () => {   
  const [code, setCode] = useState("describe your code or paste it...");   
  const [review, setReview] = useState("");    

  useEffect(() => {     
    prism.highlightAll();   
  }, []);    

  const handleReview = async () => {     
    try {       
      const response = await axios.post(`${API_BASE_URL}/ai/response`, {         
        code,       
      }); 
      setReview(response.data?.response || JSON.stringify(response.data));    
    } catch (err) {       
      console.error("Run failed:", err.message);     
    }   
  };    

  return (     
    <div className="flex h-screen w-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">       
      {/* Left side: Code Editor */}       
      <div className="w-1/2 h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border-r border-purple-500/20 p-6 overflow-auto">         
        <div className="h-full flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">Code Editor</h2>
            <div className="flex space-x-1 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <Editor           
              value={code}           
              onValueChange={(code) => setCode(code)}           
              highlight={(code) => highlight(code, prism.languages.javascript)}           
              padding={20}           
              className="bg-slate-950/80 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-sm h-full"           
              style={{             
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Fira Mono', monospace",             
                fontSize: 14,             
                minHeight: "100%",             
                color: "#e2e8f0",           
              }}         
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <button           
              onClick={handleReview}           
              className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-700 hover:via-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border border-purple-500/30"         
            >           
              <span className="relative z-10">Review Code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>        

      {/* Right side: Output/Review */}       
      <div className="w-1/2 h-screen bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 overflow-auto">         
        <div className="h-full flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">AI Review</h2>
            <div className="w-full h-px bg-gradient-to-r from-green-500/50 via-blue-500/50 to-purple-500/50"></div>
          </div>
          
          <div className="flex-1">
            <div className="border border-slate-700/50 bg-slate-950/60 backdrop-blur-sm rounded-2xl shadow-2xl text-slate-200 p-6 h-full overflow-auto whitespace-pre-wrap">           
<div className="prose prose-invert prose-slate max-w-none prose-headings:text-purple-300 prose-code:text-green-400 prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-700/50 prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-950/20">
  <Markdown rehypePlugins={rehypeHighlight}>
    {review}
  </Markdown>
</div>            </div>
          </div>
        </div>
      </div>     
    </div>   
  ); 
};  

export default App;