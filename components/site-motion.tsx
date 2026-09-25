"use client";
import { useEffect, useRef } from "react";

// Progressive enhancement: content remains visible if scripts or motion are disabled.
export function SiteMotion(){
 const progress=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const preference=window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)");
  let cleanup=()=>{};
  function setup(){
   cleanup();
   if(preference.matches)return;
   const animations=new Set<Animation>();
   const targets=Array.from(document.querySelectorAll<HTMLElement>(".origin-story>div,.edit-heading,.depth-heading,.ingredient-tile,.catalog-card,.real-product,.journal-card,.culture-stages article,.value-card,.quality-principles article,.certificate-directory article,.application-grid article,.service-columns article,.industry-list>a,.faq-items details,.service-lines>a,.footer-lead,.about-photo,.shop-feature,.owned-brand-card"));
   const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
     if(!entry.isIntersecting)continue;
     const el=entry.target as HTMLElement;
     const siblings=el.parentElement?Array.from(el.parentElement.children):[];
     const delay=Math.min(siblings.indexOf(el)%4,3)*65;
     const animation=el.animate([{opacity:.35,translate:"0 24px"},{opacity:1,translate:"0 0"}],{duration:650,delay,easing:"cubic-bezier(.2,.7,.2,1)",fill:"backwards"});
     animations.add(animation);animation.onfinish=()=>animations.delete(animation);
     observer.unobserve(el);
    }
   },{threshold:.08});
   targets.forEach(el=>{if(el.getBoundingClientRect().top>=window.innerHeight*.8)observer.observe(el);});
   const cards=Array.from(document.querySelectorAll<HTMLElement>(".ingredient-tile,.catalog-card,.real-product,.pearl-exhibit,.owned-brand-card"));
   cards.forEach(el=>el.classList.add("motion-card"));
   let frame=0;
   const photos=Array.from(document.querySelectorAll<HTMLElement>(".field-story>img,.about-photo img,.heritage-image"));
   function update(){
    frame=0;
    const max=document.documentElement.scrollHeight-window.innerHeight;
    if(progress.current)progress.current.style.transform="scaleX("+Math.min(1,Math.max(0,window.scrollY/Math.max(1,max)))+")";
    if(finePointer.matches)photos.forEach(el=>{
     const box=el.getBoundingClientRect();
     if(box.bottom>0&&box.top<window.innerHeight){
      const offset=Math.max(-10,Math.min(10,(window.innerHeight/2-box.top-box.height/2)*.025));
      el.style.transform="translateY("+offset+"px) scale(1.045)";
     }
    });
   }
   const scroll=()=>{if(!frame)frame=requestAnimationFrame(update);};
   const moves=cards.map(el=>{
    const move=(event:PointerEvent)=>{
     if(!finePointer.matches||event.pointerType!=="mouse")return;
     const box=el.getBoundingClientRect();
     el.style.setProperty("--tilt-x",((.5-(event.clientY-box.top)/box.height)*4)+"deg");
     el.style.setProperty("--tilt-y",(((event.clientX-box.left)/box.width-.5)*4)+"deg");
    };
    const reset=()=>{el.style.setProperty("--tilt-x","0deg");el.style.setProperty("--tilt-y","0deg");};
    el.addEventListener("pointermove",move);el.addEventListener("pointerleave",reset);
    return()=>{el.removeEventListener("pointermove",move);el.removeEventListener("pointerleave",reset);reset();el.classList.remove("motion-card");};
   });
   window.addEventListener("scroll",scroll,{passive:true});window.addEventListener("resize",scroll);update();
   cleanup=()=>{observer.disconnect();animations.forEach(a=>a.cancel());cancelAnimationFrame(frame);window.removeEventListener("scroll",scroll);window.removeEventListener("resize",scroll);moves.forEach(fn=>fn());photos.forEach(el=>el.style.removeProperty("transform"));if(progress.current)progress.current.style.transform="scaleX(0)";};
  }
  setup();preference.addEventListener("change",setup);
  return()=>{cleanup();preference.removeEventListener("change",setup);};
 },[]);
 return <div className="reading-progress" ref={progress} aria-hidden="true"/>;
}
