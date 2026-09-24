import { Droplets, Sun, Waves, PackageCheck, FlaskConical, Leaf } from "lucide-react";

export function CultivationStory(){return <section className="section cultivation-depth">
 <div className="depth-heading"><p className="section-label">From living culture to ingredient</p><h2>Nature sets the rhythm.<br/><em>Care shapes the process.</em></h2><p>Our spirulina begins in specially designed ponds. Water, sunlight and carefully managed growing conditions form the foundation of our cultivation work in Gujarat.</p></div>
 <div className="culture-stages">{[
  {icon:Sun,title:"Cultivate",text:"Sunlight and filtered water support the growing culture in controlled pond environments."},
  {icon:Droplets,title:"Manage",text:"Water quality, pH and nutrient conditions are monitored throughout cultivation."},
  {icon:Waves,title:"Harvest & filter",text:"The biomass is harvested, filtered and cleaned before moving into processing."},
  {icon:PackageCheck,title:"Process & prepare",text:"The published process includes spray drying, quality checks and packing. Confirm the processing route for your chosen format."}
 ].map(({icon:Icon,title,text},i)=><article key={title}><div className="stage-symbol"><Icon size={25}/></div><span className="stage-number">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
 <a className="source-caption" href="https://seapearlbiotech.com/about/" target="_blank" rel="noreferrer">Cultivation and processing information: Sea Pearl company profile ↗</a>
 </section>}

export function IndustryDepth(){return <section className="section industry-depth"><div className="depth-heading"><p className="section-label">One ingredient. Many possibilities.</p><h2>Made for the world<br/><em>you’re developing.</em></h2><p>Sea Pearl supplies ingredients to a diverse group of industries. Start with your application; then discuss the format, specification and documentation it needs.</p><a className="text-link" href="/applications">Explore applications ↗</a></div><div className="industry-list">{[
 ["Food & beverage","Powders, flakes and extracts for food and drink development."],
 ["Nutraceuticals","Ingredient and finished-format discussions for supplement ranges."],
 ["Cosmetics & personal care","Specialty ingredients for formulation and evaluation."],
 ["Animal nutrition & agriculture","Explore ingredient suitability for feed and agricultural applications."]
 ].map(([title,text],i)=><a href="/applications" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div><span>↗</span></a>)}</div></section>}

export function CompanyFAQ(){return <section className="section company-faq"><div className="depth-heading"><p className="section-label">A little more clarity</p><h2>Before we<br/><em>start growing.</em></h2><p>Questions about our ingredients, processes and working together.</p><a className="text-link" href="/contact">Ask our team ↗</a></div><div className="faq-items">{[
 ["What does Sea Pearl Biotech do?","Founded in Ahmedabad in March 2016, Sea Pearl works in spirulina cultivation, manufacturing and marketing, ingredient supply and white-label product development."],
 ["Can you develop products for our own brand?","Our white-label services cover product and formulation discussions, packaging design and labelling. Share your intended market, preferred format and brand brief to discuss feasibility, quantities and timelines."],
 ["Which spirulina formats can I explore?","Our portfolio includes spirulina powder, flakes or granules, tablets, capsules and frozen spirulina, alongside specialty ingredients. Visit the ingredient catalogue for the complete range."],
 ["How do I confirm organic status and certifications?","Our original website describes organic spirulina and displays certification and registration marks. Request current certificates and their product scope from our team before making a purchasing or labelling decision."],
 ["What should I include in an ingredient enquiry?","Tell us the ingredient, application, required format, destination market and estimated quantity. You can also request specifications, available quality documents, pack sizes, lead times and storage guidance."],
 ["Can I buy online?","The new online store link is not connected yet. Contact the Sea Pearl team for availability and ordering enquiries."]
 ].map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>}

export function WhiteLabelDepth(){return <section className="section white-label-depth"><div className="depth-heading"><p className="section-label">Your brand, developed together</p><h2>More than an ingredient.<br/><em>A complete conversation.</em></h2></div><div className="culture-stages">{[
 {icon:FlaskConical,title:"Product & formulation",text:"Discuss your product vision, format and formulation with our team, from food concepts to supplements."},
 {icon:PackageCheck,title:"Packaging & labelling",text:"Explore packaging design, branding requirements and labelling needs for your target market."},
 {icon:Waves,title:"Production & logistics",text:"Discuss production requirements, inventory, shipping and distribution support as part of your brief."},
 {icon:Leaf,title:"A responsible approach",text:"Water conservation, resource efficiency and waste reduction are priorities described in our company’s sustainability mission."}
 ].map(({icon:Icon,title,text})=><article key={title}><div className="stage-symbol"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p></article>)}</div><a className="button button-dark" href="/contact">Discuss your brand ↗</a></section>}
