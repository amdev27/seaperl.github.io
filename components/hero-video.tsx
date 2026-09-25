"use client";
import { sitePath } from "@/lib/site-path";
import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function HeroVideo(){
 const video = useRef<HTMLVideoElement>(null);
 const [playing,setPlaying] = useState(true);
 async function togglePlayback(){
  const player=video.current;
  if(!player)return;
  if(player.paused){try{await player.play();}catch{setPlaying(false);}}
  else player.pause();
 }
 return <div className="hero-video-frame">
  <video ref={video} autoPlay loop muted playsInline preload="auto" aria-label="Sea Pearl Biotech: Sea to Spirulina" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}>
   <source src={sitePath("/sea-to-spirulina.mp4")} type="video/mp4"/>
   Your browser does not support this video.
  </video>
  <button type="button" className="hero-video-toggle" onClick={togglePlayback} aria-label={playing?"Pause hero video":"Play hero video"}>{playing?<Pause size={17}/>:<Play size={17}/>}<span>{playing?"Pause":"Play"}</span></button>
 </div>;
}
