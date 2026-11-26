const fs=require('fs'),vm=require('vm');
const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('js/articles-index.js','utf8')+';this.A=ARTICLES_INDEX;',ctx);
const dates={};for(const a of ctx.A){const m=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(a.date||'');if(m)dates[a.id]=`${m[3]}-${m[2]}-${m[1]}`;}
const stub='noticia-esports-octubre-2026-lec-lcs-playoffs-octubre-finales';
const files=fs.readdirSync('articles').filter(f=>f.endsWith('.html')).map(f=>f.slice(0,-5)).filter(id=>id!==stub);
const items=files.map(id=>({id,d:dates[id]||fs.statSync(`articles/${id}.html`).mtime.toISOString().slice(0,10)})).sort((a,b)=>b.d.localeCompare(a.d)||a.id.localeCompare(b.id));
const nodate=files.filter(id=>!dates[id]);
let t=fs.readFileSync('sitemap.xml','utf8').replace(/\r\n?/g,'\n');
t=t.replace(/\n*<!-- ARTICLES -->[\s\S]*?<!-- \/ARTICLES -->\n*/,'\n\n');
const block='  <!-- ARTICLES -->\n'+items.map(i=>`  <url>\n    <loc>https://freakonia.com/articles/${i.id}.html</loc>\n    <lastmod>${i.d}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`).join('\n')+'\n  <!-- /ARTICLES -->\n';
t=t.replace(/\n*<\/urlset>/,'\n\n'+block+'\n</urlset>');
fs.writeFileSync('sitemap.xml',t.replace(/\n/g,'\r\n'));
console.log('articles:',items.length,'sin fecha en index:',nodate);
