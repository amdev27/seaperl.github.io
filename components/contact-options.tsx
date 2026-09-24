import { MessageCircle, Phone } from "lucide-react";
import { contactNumbers, whatsappHref } from "@/lib/contact";

export function ContactOptions(){return <div className="contact-options">{contactNumbers.map(({display,number})=><div className="contact-option" key={number}>
  <strong>{display}</strong>
  <div><a className="whatsapp-action" href={whatsappHref(number)} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${display} (opens in a new tab)`}><MessageCircle size={17}/>WhatsApp</a><a href={`tel:+${number}`} aria-label={`Call ${display}`}><Phone size={16}/>Call</a></div>
 </div>)}</div>}
