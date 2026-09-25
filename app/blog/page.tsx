import { sitePath } from "@/lib/site-path";
import Link from "@/components/site-link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/journal";
export const metadata={title:"Journal | Sea Pearl Biotech"};
export default function Blog(){return <main><SiteHeader dark={false}/><header className="section journal-heading"><p className="section-label">The Sea Pearl journal</p><h1>A closer look<br/>at what we grow.</h1><p>Stories from cultivation, notes on ingredients and practical ideas for building your next product.</p></header><section className="section journal-grid">{articles.map((a,i)=><Link className="journal-card" href={sitePath(`/blog/${a.slug}`)} key={a.slug}><div><img src={sitePath(`/original/${a.image}`)} alt={i===0?"Sea Pearl cultivation ponds":a.title}/></div><p className="section-label">{a.category} · 3 minute read</p><h2>{a.title}</h2><p>{a.intro}</p><span>Read the story ↗</span></Link>)}</section><SiteFooter/></main>}
