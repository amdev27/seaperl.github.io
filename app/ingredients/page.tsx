import { sitePath } from "@/lib/site-path";
import Link from "@/components/site-link";
import { ArrowUpRight, Search } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products, productImage } from "@/lib/products";

export const metadata = { title:"Spirulina and Algae Ingredients | Sea Pearl Biotech" };
export default function IngredientsPage(){return <main><div className="page-top compact"><SiteHeader dark={false}/><div className="page-hero"><p className="section-label">Ingredient portfolio · 15 formats</p><h1>Algae ingredients.<br/>A world of possibilities.</h1><p>Explore spirulina, phycocyanin and our specialty ingredient range. Find a format for your application, then speak to our team about specifications and availability.</p></div></div>
<section className="section catalog-section"><div className="catalog-tools"><div><span className="live-dot"/> All ingredient formats</div><a href={sitePath("/shop")} className="text-link">Our own products · Shop now ↗</a></div><div className="catalog-grid">{products.map((p,i)=><Link className="catalog-card" href={sitePath(`/ingredients/${p.slug}`)} key={p.slug} style={{"--accent":p.accent} as React.CSSProperties}><div className="catalog-visual"><img className="original-product-image" src={productImage(p.slug)} alt={p.name} loading="lazy"/><small>{String(i+1).padStart(2,"0")}</small></div><div className="catalog-body"><span>{p.family}</span><h2>{p.name}</h2><p>{p.form}</p><div>{p.applications.join(" · ")}</div><ArrowUpRight size={19}/></div></Link>)}</div></section><SiteFooter/></main>}
