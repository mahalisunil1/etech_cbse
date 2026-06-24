const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app', 'components');
const pagePath = path.join(__dirname, 'app', 'page.tsx');

function fixUndertone(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Remove all dark mode classes
  content = content.replace(/dark:[^\s"']+/g, '');
  // Clean up multiple spaces that might result from removal
  content = content.replace(/\s+/g, ' ');
  // Fix spacing around class names
  content = content.replace(/className="\s+/g, 'className="');
  content = content.replace(/\s+"/g, '"');
  
  // Specific fixes for Footer
  if (filePath.endsWith('Footer.tsx')) {
    content = content.replace(/bg-slate-950/g, 'bg-white');
    content = content.replace(/border-slate-900/g, 'border-slate-200');
    content = content.replace(/border-slate-800/g, 'border-slate-200');
    content = content.replace(/bg-slate-900/g, 'bg-slate-100');
    content = content.replace(/text-slate-400/g, 'text-slate-600');
    content = content.replace(/text-white/g, 'text-foreground');
    content = content.replace(/text-slate-500/g, 'text-slate-500');
  }

  // Specific fixes for Academics
  if (filePath.endsWith('Academics.tsx')) {
    content = content.replace(/text-white/g, 'text-white'); // keep white for the 1:15 text
  }
  
  // Specific fixes for Facilities
  if (filePath.endsWith('Facilities.tsx')) {
    // keeping text-white for text over images
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx')) {
      fixUndertone(filePath);
    }
  });
}

processDirectory(directoryPath);
fixUndertone(pagePath);
console.log('Undertone fix complete!');
