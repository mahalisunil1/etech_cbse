const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'app', 'components');

const replacements = [
  { search: /primary-navy/g, replace: 'primary-cyan' },
  { search: /primary-gold-hover/g, replace: 'primary-orange' },
  { search: /primary-gold/g, replace: 'primary-yellow' }
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(({ search, replace }) => {
        content = content.replace(search, replace);
      });

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Done!');
