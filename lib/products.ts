const imageNumbers:Record<string,string> = {spirulina:"001","spirulina-capsule":"006","spirulina-d2b12":"005","spirulina-flakes-granules":"002","spirulina-tablets":"004","frozen-spirulina":"003",phycocyanin:"009","phycocyanin-capsule":"010","omega-3":"011","omega-3-capsules":"012",astaxanthin:"007","astaxanthin-capsules":"008","beta-carotene":"015","squalene-powder":"014","vegan-protein-powder":"013"};
export const productImage=(slug:string)=>`/original/Seapearl-Product-Images.${imageNumbers[slug]}.jpeg`;
export type Product = { slug:string; name:string; form:string; applications:string[]; family:string; accent:string; note:string };

export const products: Product[] = [
  { slug:"spirulina", name:"Spirulina", form:"Powder & extracts", applications:["Food & beverage","Nutraceuticals"], family:"Core algae", accent:"#2c6e49", note:"A versatile algae ingredient for product-development teams." },
  { slug:"spirulina-capsule", name:"Spirulina Capsule", form:"Capsules", applications:["Supplements","White label"], family:"Finished format", accent:"#7aa35a", note:"A convenient capsule format for your product range." },
  { slug:"spirulina-d2b12", name:"Spirulina D2B12", form:"Specialty format", applications:["Nutraceuticals","Formulation"], family:"Specialty algae", accent:"#4a9671", note:"Explore our Spirulina D2B12 range with the product team." },
  { slug:"spirulina-flakes-granules", name:"Spirulina Flakes / Granules", form:"Flakes & granules", applications:["Food","Snacks"], family:"Food ingredient", accent:"#578c3b", note:"A textured spirulina format for food product exploration." },
  { slug:"spirulina-tablets", name:"Spirulina Tablets", form:"Tablets", applications:["Supplements","White label"], family:"Finished format", accent:"#376850", note:"Tablet formats for supplement product development." },
  { slug:"frozen-spirulina", name:"Frozen Spirulina", form:"Frozen biomass", applications:["Food innovation","R&D"], family:"Fresh format", accent:"#4d9c82", note:"A fresh-format ingredient for product development." },
  { slug:"phycocyanin", name:"Phycocyanin", form:"Powder / extract", applications:["Natural colour","Food & beverage"], family:"Algae extract", accent:"#2b82a3", note:"A blue algae-derived ingredient for food and ingredient applications." },
  { slug:"phycocyanin-capsule", name:"Phycocyanin Capsule", form:"Capsules", applications:["Supplements","White label"], family:"Finished format", accent:"#397f9d", note:"Phycocyanin in capsule form, part of our algae product range." },
  { slug:"omega-3", name:"Omega 3", form:"Algae-based format", applications:["Nutraceuticals","Formulation"], family:"Specialty ingredient", accent:"#8aaa5e", note:"Algae-sourced product format for your formulation brief." },
  { slug:"omega-3-capsules", name:"Omega-3 Capsules", form:"Capsules", applications:["Supplements","White label"], family:"Finished format", accent:"#96af64", note:"Finished capsule format for product-development enquiries." },
  { slug:"astaxanthin", name:"Astaxanthin", form:"Specialty ingredient", applications:["Nutraceuticals","Cosmetics"], family:"Algae extract", accent:"#b9694f", note:"Specifications and approved applications are available on request." },
  { slug:"astaxanthin-capsules", name:"Astaxanthin Capsules", form:"Capsules", applications:["Supplements","White label"], family:"Finished format", accent:"#c27b5e", note:"Astaxanthin capsules from the Sea Pearl product portfolio." },
  { slug:"beta-carotene", name:"Beta Carotene", form:"Specialty ingredient", applications:["Food","Personal care"], family:"Natural pigment", accent:"#d39047", note:"Explore beta carotene within our specialty ingredient range." },
  { slug:"squalene-powder", name:"Squalene Powder", form:"Powder", applications:["Cosmetics","Nutraceuticals"], family:"Specialty ingredient", accent:"#78a88c", note:"Speak to our team about squalene powder and product specifications." },
  { slug:"vegan-protein-powder", name:"Vegan Protein Powder", form:"Powder", applications:["Food & beverage","Nutrition"], family:"Plant nutrition", accent:"#789052", note:"A plant-forward powder category for product-development teams." },
];
