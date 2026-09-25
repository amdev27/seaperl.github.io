import { sitePath } from "@/lib/site-path";
import { ContactOptions } from "./contact-options";
import Link from "@/components/site-link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="section-label light">Start a conversation</p>
        <h2>Let’s grow<br /><em>something good.</em></h2>
        <Link className="round-arrow" href={sitePath("/contact")} aria-label="Contact Sea Pearl Biotech"><ArrowUpRight /></Link>
      </div>
      <div className="footer-grid">
        <div><a className="footer-logo" href={sitePath("/")}><img className="real-logo" src={sitePath("/original/sea-pearl-3-06-768x154.png")} alt="Seapearl Biotech"/></a><p>Spirulina cultivator, ingredient supplier and white-label manufacturer.<br/>Rooted in Ahmedabad since March 2016.</p><p>Dantali Lilapur Village Road,<br/>Ahmedabad – 380 060,<br/>Gujarat, India.</p></div>
        <div><strong>Discover</strong><Link href={sitePath("/about")}>Our story</Link><Link href={sitePath("/brands")}>Our brands</Link><Link href={sitePath("/shop")}>Our products & shop</Link><Link href={sitePath("/blog")}>Journal</Link><Link href={sitePath("/contact")}>Contact</Link></div>
        <div><strong>For business</strong><Link href={sitePath("/ingredients")}>Ingredient portfolio</Link><Link href={sitePath("/applications")}>Applications</Link><Link href={sitePath("/manufacturing")}>White-label manufacturing</Link><Link href={sitePath("/quality")}>Quality & certifications</Link></div>
        <div><strong>Connect</strong><a href="mailto:seapearlbiotech@gmail.com">seapearlbiotech@gmail.com</a><ContactOptions/><a href="https://maps.google.com/?q=4GX4%2B49+Lilapur+Gujarat" target="_blank" rel="noreferrer">Find us in Lilapur ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Sea Pearl Biotech</span><span>Ahmedabad · Gujarat · India</span></div>
    </footer>
  );
}
