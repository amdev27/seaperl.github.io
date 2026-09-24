import { ContactOptions } from "@/components/contact-options";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/enquiry-form";
export const metadata={title:"Contact Sea Pearl Biotech | Ingredient Development Enquiries"};
export default function ContactPage(){return <main><div className="contact-top"><SiteHeader/><div className="section contact-layout"><div className="contact-copy"><p className="section-label light">Contact</p><h1>Tell us what<br/>you’re developing.</h1><p>Share your ingredient, format and application requirements. We’ll use them to frame the right technical conversation.</p><div className="contact-details"><a href="mailto:seapearlbiotech@gmail.com"><Mail/><span><small>Email</small>seapearlbiotech@gmail.com</span></a><ContactOptions/><a href="https://maps.google.com/?q=4GX4%2B49+Lilapur+Gujarat"><MapPin/><span><small>Office</small>Dantali Lilapur Village Road<br/>Ahmedabad 380 060, Gujarat, India</span></a></div></div><ContactForm/></div></div><SiteFooter/></main>}
