import { sitePath } from "@/lib/site-path";

export function HeritageHero() {
  return <section className="heritage-hero" aria-labelledby="heritage-title">
    <style>{`@font-face{font-family:SeaPearlDisplay;src:url("${sitePath("/original/bebas-neue.ttf")}") format("truetype");font-weight:400;font-display:swap}`}</style>
    <img className="heritage-image" src={sitePath("/original/PHOTO-2024-07-12-12-50-21.jpg")} alt="Sea Pearl Biotech spirulina cultivation ponds" fetchPriority="high"/>
    <div className="heritage-copy">
      <p>Unlocking the Power of Nature with Organic Spirulina</p>
      <h1 id="heritage-title">Cultivated with care</h1>
    </div>
    <a className="heritage-scroll" href="#our-brands" aria-label="Scroll to our brands">Explore <span aria-hidden="true">↓</span></a>
  </section>;
}

export function OurBrands() {
  return <section id="our-brands" className="section owned-brands" aria-labelledby="brands-title">
    <div className="edit-heading"><div><p className="section-label">The Sea Pearl family</p><h2 id="brands-title">Our brands.</h2></div><a className="text-link" href={sitePath("/brands")}>Meet our brands ↗</a></div>
    <div className="owned-brand-grid">
      <a className="owned-brand-card" href={sitePath("/contact?brand=goodluck")} aria-label="Enquire about Goodluck (gluck)">
        <span className="brand-number">01 / Goodluck</span>
        <div className="owned-brand-logo"><img src={sitePath("/original/Seapearl-Website-logos.002-1.jpeg")} alt="gluck — Food for Happiness" loading="lazy" width="1600" height="900"/></div>
        <div className="brand-card-bottom"><span>Food for happiness</span><span>Enquire about the brand ↗</span></div>
      </a>
      <a className="owned-brand-card" href={sitePath("/contact?brand=singest")} aria-label="Enquire about Singest">
        <span className="brand-number">02 / Singest</span>
        <div className="owned-brand-logo"><img src={sitePath("/original/Seapearl-Website-logos.001-2.jpeg")} alt="Singest" loading="lazy" width="1600" height="900"/></div>
        <div className="brand-card-bottom"><span>Part of Sea Pearl Biotech</span><span>Enquire about the brand ↗</span></div>
      </a>
    </div>
  </section>;
}
