"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { ContactOptions } from "./contact-options";

export function LiveChat(){
 const [open,setOpen]=useState(false);
 const container=useRef<HTMLDivElement>(null);
 const trigger=useRef<HTMLButtonElement>(null);
 const close=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  close.current?.focus();
  function onKey(e:KeyboardEvent){if(e.key==="Escape"){setOpen(false);trigger.current?.focus();}}
  function onOutside(e:PointerEvent){if(!container.current?.contains(e.target as Node))setOpen(false);}
  document.addEventListener("keydown",onKey);document.addEventListener("pointerdown",onOutside);
  return()=>{document.removeEventListener("keydown",onKey);document.removeEventListener("pointerdown",onOutside);};
 },[open]);
 return <div className="live-chat" ref={container}>
  {open&&<section className="chat-panel" id="live-chat-panel" aria-labelledby="chat-title">
   <header><div><span>SEA PEARL BIOTECH</span><h2 id="chat-title">Let’s talk.</h2></div><button ref={close} type="button" aria-label="Close live chat" onClick={()=>{setOpen(false);trigger.current?.focus();}}><X size={20}/></button></header>
   <p>Choose a number to chat on WhatsApp or call our team.</p>
   <ContactOptions/>
   <p className="chat-note">WhatsApp opens in a new tab or your app. Replies depend on team availability.</p>
  </section>}
  <button ref={trigger} className="chat-launcher" type="button" aria-expanded={open} aria-controls="live-chat-panel" onClick={()=>setOpen(!open)}><MessageCircle size={23}/><span>Live chat</span></button>
 </div>
}
