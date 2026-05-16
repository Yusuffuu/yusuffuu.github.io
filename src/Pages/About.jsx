import { useState } from 'react'
import { GraduationCap, Briefcase, Code2, Heart } from 'lucide-react'

function About() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  
  const skills = ['HTML', 'JavaScript', 'C', 'C++', 'PHP', 'MySQL']
  
  const codeExamples = {
    'HTML': `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, my name is Yusuf</h1>
</body>
</html>`,
    
    'JavaScript': `// JavaScript
console.log("Hello, my name is Yusuf");

// Or in a function
function greet() {
    return "Hello, my name is Yusuf";
}

// Or using modern syntax
const greeting = () => {
    console.log("Hello, my name is Yusuf");
};`,
    
    'C': `#include <stdio.h>

int main() {
    printf("Hello, my name is Yusuf\\n");
    return 0;
}`,
    
    'C++': `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, my name is Yusuf" << endl;
    return 0;
}`,
    
    'PHP': `<?php
// PHP
echo "Hello, my name is Yusuf";

// Or with a variable
$name = "Yusuf";
echo "Hello, my name is " . $name;
?>`,
    
    'MySQL': `-- MySQL
SELECT 'Hello, my name is Yusuf' AS greeting;

-- Or create a procedure
DELIMITER //
CREATE PROCEDURE SayHello()
BEGIN
    SELECT 'Hello, my name is Yusuf' AS message;
END //
DELIMITER ;

-- Call the procedure
CALL SayHello();`
  }
  
  const hobbies = [
    { name: 'Swimming', icon: Heart, description: 'Staying active and refreshed' },
    { name: 'Skating', icon: Heart, description: 'Balance and freedom on wheels' }
  ]

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 
          bg-linear-to-r from-accent-blue to-accent-blue-dark bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Education Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div>
              <h4 className="text-xl font-medium text-text-primary mb-1">Computer Science</h4>
              <p className="text-accent-blue font-medium mb-1">Murang'a University of Technology</p>
              <p className="text-text-secondary text-sm mb-1">3rd Year Student</p>
              <p className="text-text-secondary text-sm">Currently on Industrial Attachment</p>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div>
              <h4 className="text-xl font-medium text-text-primary mb-2">Web Design</h4>
              <p className="text-text-secondary">
                Building responsive and user-friendly web interfaces with modern technologies
              </p>
            </div>
          </div>

          {/* Skills Card - Now Interactive! */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
                  className={`px-4 py-2 text-sm font-medium rounded-full
                    transition-all duration-300 cursor-pointer
                    ${selectedSkill === skill 
                      ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30 scale-105' 
                      : 'bg-linear-to-r from-accent-blue to-accent-blue-dark text-white hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/30'
                    }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* Code Display Area */}
            {selectedSkill && (
              <div className="mt-4 animate-[fadeIn_0.3s_ease]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-accent-blue">
                    {selectedSkill} Syntax
                  </span>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="bg-bg-secondary border border-border rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-text-secondary ml-2">
                      {selectedSkill.toLowerCase()}.{selectedSkill === 'C++' ? 'cpp' : selectedSkill === 'JavaScript' ? 'js' : selectedSkill === 'MySQL' ? 'sql' : selectedSkill.toLowerCase()}
                    </span>
                  </div>
                  <pre className="p-4 text-sm text-text-secondary overflow-x-auto">
                    <code>{codeExamples[selectedSkill]}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Hobbies Card */}
          <div className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 
            hover:border-accent-blue hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-accent-blue" />
              <h3 className="text-2xl font-semibold">Hobbies</h3>
            </div>
            <div className="space-y-3">
              {hobbies.map((hobby) => (
                <div 
                  key={hobby.name}
                  className="flex items-center gap-4 p-3 bg-bg-secondary rounded-xl 
                    hover:bg-linear-to-br hover:from-[#1a1a2e] hover:to-[#16213e] 
                    transition-all duration-300"
                >
                  <hobby.icon className="w-8 h-8 text-accent-blue" />
                  <div>
                    <h4 className="font-medium text-text-primary">{hobby.name}</h4>
                    <p className="text-sm text-text-secondary">{hobby.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default About