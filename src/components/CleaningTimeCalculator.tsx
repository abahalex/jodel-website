"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const rooms = [
  {key:"bedrooms",label:"Bedrooms",minutes:25},
  {key:"bathrooms",label:"Bathrooms",minutes:35},
  {key:"living",label:"Living & dining rooms",minutes:25},
  {key:"kitchens",label:"Kitchens",minutes:40},
  {key:"utility",label:"Study / utility rooms",minutes:15},
  {key:"hallways",label:"Hallways",minutes:12},
  {key:"stairs",label:"Staircases",minutes:12},
] as const;
const extras = [
  {key:"ironing",label:"Ironing",minutes:30},
  {key:"laundry",label:"Folding laundry",minutes:20},
  {key:"windows",label:"Internal windows",minutes:25},
  {key:"fridge",label:"Inside fridge",minutes:20},
  {key:"dishes",label:"Washing dishes / loading dishwasher",minutes:15},
  {key:"bedding",label:"Changing bed sheets",minutes:15},
] as const;
type RoomKey=(typeof rooms)[number]["key"];
type ExtraKey=(typeof extras)[number]["key"];
const initialRooms: Record<RoomKey, number> = { bedrooms:0,bathrooms:0,living:0,kitchens:0,utility:0,hallways:0,stairs:0 };
const initialExtras: Record<ExtraKey, boolean>={ironing:false,laundry:false,windows:false,fridge:false,dishes:false,bedding:false};

export function CleaningTimeCalculator(){
  const [counts,setCounts]=useState<Record<RoomKey,number>>({...initialRooms});
  const [selected,setSelected]=useState<Record<ExtraKey,boolean>>({...initialExtras});
  const [showResult,setShowResult]=useState(false);
  const totalRooms=rooms.reduce((acc,room)=>acc+counts[room.key],0);
  const minutes=useMemo(()=>rooms.reduce((acc,room)=>acc+counts[room.key]*room.minutes,0)+extras.reduce((acc,extra)=>acc+(selected[extra.key]?extra.minutes:0),0),[counts,selected]);
  const estimate=Math.ceil(minutes/30)/2;
  const reset=()=>{setCounts({...initialRooms});setSelected({...initialExtras});setShowResult(false);};
  return <div className="resource-form">
    <p className="resource-note"><strong>Preliminary estimate:</strong> This calculator reproduces the room and task inputs from the provided reference, but its original calculation ran on a third-party server and was not included in the file. For now JODEL uses a transparent planning estimate, not the other agency's unpublished formula or survey. We'll review the timings later. It is not a quote.</p>
    <h2>How many rooms need cleaning?</h2><p>Choose the rooms that should be included in each regular clean (0–10 per room type).</p>
    <div className="resource-calculator-rooms">{rooms.map(room=><label className="resource-calc-row" key={room.key}><span>{room.label}</span><span className="resource-stepper"><button type="button" aria-label={`Remove one ${room.label}`} disabled={counts[room.key]===0} onClick={()=>{setCounts(c=>({...c,[room.key]:Math.max(0,c[room.key]-1)}));setShowResult(false);}}>−</button><output>{counts[room.key]}</output><button type="button" aria-label={`Add one ${room.label}`} disabled={counts[room.key]===10} onClick={()=>{setCounts(c=>({...c,[room.key]:Math.min(10,c[room.key]+1)}));setShowResult(false);}}>+</button></span></label>)}</div>
    <h2>Extra tasks at every visit</h2><p>Include any additional tasks you would like on every scheduled clean.</p>
    <div className="resource-calc-extras">{extras.map(extra=><label key={extra.key}><input type="checkbox" checked={selected[extra.key]} onChange={e=>{const checked=e.target.checked;setSelected(s=>({...s,[extra.key]:checked}));setShowResult(false);}} /> {extra.label}</label>)}</div>
    <div className="resource-calc-actions"><button className="resource-print" type="button" onClick={()=>setShowResult(true)} disabled={totalRooms===0}>Get my estimate</button><button type="button" className="resource-calc-reset" onClick={reset}>Reset calculator</button></div>
    {totalRooms===0&&<p className="resource-calc-hint">Select at least one room to calculate a time estimate.</p>}
    {showResult&&totalRooms>0&&<div className="resource-calc-result" role="status"><span>ESTIMATED TIME PER REGULAR VISIT</span><strong>{estimate} {estimate===1?"hour":"hours"}</strong><p>Indicative maintenance-clean time only; more time may be needed depending on condition, clutter, equipment, access and detail requested. Deep or one-off cleans usually require additional time. Your JODEL quote will confirm the agreed scope.</p><Link className="resource-button" href="/#quote">Discuss your clean →</Link></div>}
  </div>;
}
