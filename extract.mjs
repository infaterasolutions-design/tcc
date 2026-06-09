import fs from 'fs';
const html = fs.readFileSync('fashion_jackson.html', 'utf8');
const textMatches = html.match(/<(p|h[1-6])[^>]*>(.*?)<\/\1>/gs);
if (textMatches) {
  const cleanText = textMatches.map(m => m.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  fs.writeFileSync('extracted.txt', cleanText.join('\n\n'));
}
console.log('done');
