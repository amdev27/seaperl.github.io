"use client";
import { useEffect, useState, type FormEvent } from "react";
import { products } from "@/lib/products";

export function ContactForm(){
 const [interest,setInterest]=useState("");
 const [prepared,setPrepared]=useState(false);
 useEffect(()=>{const selected=new URLSearchParams(window.location.search).get("product");if(products.some(p=>p.slug===selected))setInterest(selected!);},[]);
 function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setPrepared(true);}
 if(prepared)return <div className="form-success" role="status"><p className="section-label">Preview complete</p><h2>Enquiry prepared.</h2><p>No message has been sent. For a live enquiry, email <a href="mailto:seapearlbiotech@gmail.com">seapearlbiotech@gmail.com</a> or call +91 81540 26702.</p><button onClick={()=>setPrepared(false)}>Back to the form</button></div>;
 return <form className="contact-form" onSubmit={submit}>
  <p className="form-preview-note">Website preview: this form does not send messages yet.</p>
  <div className="field-row"><label>First name<input name="firstName" autoComplete="given-name" required placeholder="Your first name"/></label><label>Last name<input name="lastName" autoComplete="family-name" required placeholder="Your last name"/></label></div>
  <label>Company<input name="company" autoComplete="organization" required placeholder="Company or brand"/></label>
  <div className="field-row"><label>Email<input type="email" name="email" autoComplete="email" required placeholder="name@company.com"/></label><label>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Country code + number"/></label></div>
  <label>Product interest<select name="interest" value={interest} onChange={e=>setInterest(e.target.value)} required><option value="" disabled>Select an ingredient or service</option>{products.map(p=><option key={p.slug} value={p.slug}>{p.name}</option>)}<option value="white-label">White-label manufacturing</option><option value="other">Other enquiry</option></select></label>
  <label>How can we help?<textarea name="message" required rows={5} placeholder="Tell us about your product, format and market."/></label>
  <button className="button button-dark" type="submit">Preview enquiry ↗</button>
 </form>;
}
