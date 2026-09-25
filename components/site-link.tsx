import type { AnchorHTMLAttributes } from "react";
import { sitePath } from "@/lib/site-path";
export default function SiteLink({href = "", ...props}: AnchorHTMLAttributes<HTMLAnchorElement>){
  return <a {...props} href={sitePath(href)}/>;
}
