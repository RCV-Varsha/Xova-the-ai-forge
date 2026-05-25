const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/components');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Remove solid background colors from sections
  content = content.replace(/bg-\[#02040a\]/g, 'bg-transparent');
  
  // Remove borders from sections
  content = content.replace(/border-t border-white\/\[0\.08\]/g, '');
  content = content.replace(/border-t border-white\/12/g, '');
  content = content.replace(/border-b border-white\/\[0\.04\]/g, '');
  content = content.replace(/border-y border-white\/\[0\.06\]/g, '');
  content = content.replace(/border-t border-white\/\[0\.06\]/g, '');
  
  fs.writeFileSync(f, content, 'utf8');
  console.log('Processed ' + f);
});
