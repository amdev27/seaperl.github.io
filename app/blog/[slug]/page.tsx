import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { articles } from "@/lib/journal";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);return {title:`${a?.title||"Journal"} | Sea Pearl Biotech`};}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <main><SiteHeader dark={false}/><article className="article"><a href="/blog">← Back to the journal</a><p className="section-label">{a.category}</p><h1>{a.title}</h1><p className="article-intro">{a.intro}</p><img className="article-image" src={`/original/${a.image}`} alt={a.title}/>{a.sections.map(([h,p])=><section key={h}><h2>{h}</h2><p>{p}</p></section>)}<p className="article-source">Company background: <a href="https://seapearlbiotech.com/about/">Sea Pearl Biotech</a></p><a className="button button-dark" href="/contact">Discuss your project ↗</a></article><SiteFooter/></main>}
