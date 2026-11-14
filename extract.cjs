const fs = require('fs');
const { execFileSync } = require('child_process');
const path = require('path');

const parts = fs.readdirSync(process.cwd())
  .filter((name) => /^project-src\.part\d+$/.test(name))
  .sort();

if (!parts.length) throw new Error('Project source bundle parts are missing.');
const b64 = parts.map((name) => fs.readFileSync(name, 'utf8')).join('');
const archive = path.join('/tmp', 'project-src.tar.gz');
fs.writeFileSync(archive, Buffer.from(b64, 'base64'));
execFileSync('tar', ['-xzf', archive, '-C', process.cwd()], { stdio: 'inherit' });
console.log(`Extracted project source from ${parts.length} bundle part(s).`);
