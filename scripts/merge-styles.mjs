import fs from 'node:fs/promises';
const base=await fs.readFile('app/globals.css','utf8');
const added=await fs.readFile('app/refinement.css','utf8');
if(!base.includes('/* Photography-led redesign */')) await fs.writeFile('app/globals.css',base+'\n/* Photography-led redesign */\n'+added);
