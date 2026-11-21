// Netlify publishes "dist": copy the static site into it (no transformation).
import fs from 'fs'; import path from 'path';
const root=process.cwd(), out=path.join(root,'dist');
const skip=new Set(['dist','node_modules','.git','netlify','tools','package.json','package-lock.json','netlify.toml','.gitignore','.netlify']);
fs.rmSync(out,{recursive:true,force:true}); fs.mkdirSync(out);
let n=0; for(const e of fs.readdirSync(root)){ if(skip.has(e)) continue; fs.cpSync(path.join(root,e),path.join(out,e),{recursive:true}); n++; }
console.log('dist ready:',n,'top-level entries');
