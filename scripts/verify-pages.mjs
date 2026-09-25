import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const root = path.resolve("out");
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const html = files(root).filter(f=>f.endsWith(".html"));
const failures=[];
for(const file of html){
 const body=readFileSync(file,"utf8");
 for(const match of body.matchAll(/(?:href|src)="(\/[^"]*)"/g)){
  const url=match[1].split(/[?#]/)[0];
  if(url.startsWith("//"))continue;
  if(base && !url.startsWith(base+"/") && url!==base){failures.push(file+": missing base path: "+url);continue;}
  const relative=decodeURIComponent(url.slice(base.length));
  let target=path.join(root,relative);
  if(existsSync(target)&&statSync(target).isDirectory())target=path.join(target,"index.html");
  if(!existsSync(target))failures.push(file+": missing target: "+url);
 }
}
if(!existsSync(path.join(root,"ingredients/spirulina-capsule/index.html")) || !existsSync(path.join(root,"blog/from-pond-to-product/index.html")))failures.push("Missing static product or journal route");
if(failures.length)throw new Error(failures.join("\n"));
console.log("Verified "+html.length+" HTML pages and their local links/media.");
