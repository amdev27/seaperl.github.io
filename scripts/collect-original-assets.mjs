import fs from 'node:fs/promises';
const origin='https://seapearlbiotech.com';
const html=await (await fetch(origin)).text();
const urls=[...new Set(html.match(/https:\/\/seapearlbiotech.com\/wp-content\/uploads\/[^\s"<>]+/g))];
const selected=urls.filter(u=>/sea-pearl-3-06-768x154|cropped-sea-pearl-3-06-192x192|Seapearl-Product-Images\.\d{3}\.jpeg|PHOTO-2024.*(?<!\d+x\d+)\.jpg|ISO-9001\.png|ISO-2001\.png|apeda-logo.*png|green-haccp.*avif|Seapearl-Website-logos.*jpeg/.test(u));
await fs.mkdir('public/original',{recursive:true});
await Promise.all(selected.map(async url=>{const r=await fetch(url);if(!r.ok)throw Error(url);await fs.writeFile('public/original/'+url.split('/').at(-1),Buffer.from(await r.arrayBuffer()));}));
console.log(selected.map(u=>u.split('/').at(-1)).join('\n'));
for(const slug of ['spirulina','spirulina-capsule','spirulina-d2b12','spirulina-flakes-granules','spirulina-tablets','frozen-spirulina','phycocyanin','phycocyanin-capsule','omega-3','omega-3-capsules','astaxanthin','astaxanthin-capsules','beta-carotene','squalene-powder','vegan-protein-powder']){
 const r=await fetch(origin+'/'+slug+'/'); const t=await r.text();const img=[...new Set(t.match(/Seapearl-Product-Images\.\d{3}\.jpeg/g))];console.log(slug,r.status,img.join(','));
}
