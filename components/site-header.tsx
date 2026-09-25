"use client";
import { sitePath } from "@/lib/site-path";

import Link from "@/components/site-link";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { shopHref } from "@/lib/commerce";

const links = [
  ["About", "/about"],
  ["Ingredients", "/ingredients"],
  ["Our Brands", "/brands"],
  ["Services", "/manufacturing"],
  ["Quality", "/quality"],
  ["Journal", "/blog"],
];

export function SiteHeader({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(()=>{
    if(!open)return;
    const nodes=()=>Array.from(drawerRef.current?.querySelectorAll<HTMLElement>('a[href],button') || []);
    nodes()[0]?.focus();
    const handler=(e:KeyboardEvent)=>{
      if(e.key==="Escape"){setOpen(false);triggerRef.current?.focus();}
      if(e.key!=="Tab")return;
      const items=nodes(),first=items[0],last=items[items.length-1];
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
    };
    window.addEventListener("keydown",handler);
    return()=>window.removeEventListener("keydown",handler);
  },[open]);

  return (
    <>
      <div className="utility-bar"><span>Algae biotechnology, cultivated in Ahmedabad since 2016</span><div><a href="mailto:seapearlbiotech@gmail.com">seapearlbiotech@gmail.com</a><a href={sitePath("/contact")}>Contact us ↗</a></div></div>
      <nav className={`nav-shell ${dark ? "nav-dark" : "nav-light"}`} aria-label="Primary navigation">
        <Link className="wordmark" href={sitePath("/")} aria-label="Sea Pearl Biotech home">
          <img className="real-logo" src={sitePath("/original/sea-pearl-3-06-768x154.png")} alt="Seapearl Biotech — Algae Based Biotech Company"/>
        </Link>
        <div className="desktop-nav">
          {links.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </div>
        <a className="nav-cta" href={sitePath(shopHref)}>Shop now <ArrowUpRight size={16} /></a>
        <button ref={triggerRef} className="menu-button" aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /></button>
      </nav>
      <div ref={drawerRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" className={`mobile-drawer ${open ? "is-open" : ""}`} aria-hidden={!open} inert={!open}>
        <div className="drawer-top">
          <img className="real-logo" src={sitePath("/original/sea-pearl-3-06-768x154.png")} alt="Seapearl Biotech"/>
          <button aria-label="Close menu" onClick={() => {setOpen(false);triggerRef.current?.focus();}}><X /></button>
        </div>
        <div className="drawer-links" onClick={()=>setOpen(false)}>
          <Link href={sitePath("/")}>Home <span>01</span></Link>
          {links.map(([label, href], i) => <Link href={href} key={href}>{label}<span>{String(i + 2).padStart(2, "0")}</span></Link>)}
          <Link href={sitePath("/contact")}>Contact <span>08</span></Link>
          <Link href={sitePath("/applications")}>Applications ↗</Link><a href={sitePath(shopHref)}>Shop now ↗</a>
        </div>
        <p>Dantali Lilapur Village Road<br />Ahmedabad, Gujarat, India</p>
      </div>
    </>
  );
}
