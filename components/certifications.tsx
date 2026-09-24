export const certificates = [
 ["ISO 9001", "ISO-9001.png", "Quality management"],
 ["ISO 22000", "ISO-2001.png", "Food safety management"],
 ["HACCP", "green-haccp-certified-stamp-sticker-with-stars-vector-illustration_723710-586.avif", "Food safety"],
 ["FSSAI", "Seapearl-Website-logos.007-e1733902639467.jpeg", "Food business licensing"],
 ["India Organic", "Seapearl-Website-logos.005-e1733902656368.jpeg", "Organic certification mark"],
 ["USDA Organic", "Seapearl-Website-logos.006-e1733902674221.jpeg", "Organic certification mark"],
 ["APEDA", "apeda-logo-36F047E5C1-seeklogo.com_.png", "Agricultural exports"],
];
export function Certifications(){return <section className="section certification-section"><div className="cert-heading"><p className="section-label">Quality & recognition</p><a href="/quality">Explore our quality approach ↗</a></div><div className="cert-logos">{certificates.map(([name,file])=><a href="/quality" key={name}><img src={`/original/${file}`} alt={name} loading="lazy"/><span>{name}</span></a>)}</div><p className="cert-note">Marks displayed on Sea Pearl Biotech’s existing website. Current certificates, licence scope and validity are available for confirmation with our team.</p></section>}
