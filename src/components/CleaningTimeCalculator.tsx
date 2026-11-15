"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { calculateCleaningEstimate, extras, rooms } from "@/lib/cleaning-time.mjs";

type RoomKey=(typeof rooms)[number]["key"];
type ExtraKey=(typeof extras)[number]["key"];
const initialRooms: Record<RoomKey, number> = { bedrooms:0,bathrooms:0,living:0,kitchens:0,utility:0,hallways:0,stairs:0 };
const initialExtras: Record<ExtraKey, boolean>={ironing:false,laundry:false,windows:false,fridge:false,dishes:false,bedding:false};

export function CleaningTimeCalculator(){
  const [counts,setCounts]=useState<Record<RoomKey,number>>({...initialRooms});
  const [selected,setSelected]=useState<Record<ExtraKey,boolean>>({...initialExtras});
  const [showResult,setShowResult]=useState(false);
  const { roomCount: totalRooms, estimatedHours: estimate } = useMemo(
    () => calculateCleaningEstimate(counts, selected), [counts, selected]
  );
  const reset=()=>{setCounts({...initialRooms});setSelected({...initialExtras});setShowResult(false);};
  return <div className="resource-form">
    <p className="resource-note"><strong>Preliminary estimate:</strong> This planning tool uses provisional JODEL assumptions for regular cleaning time per room and task, rounded up to the next half-hour. The timings have not yet been calibrated against JODEL visits and may differ considerably from actual requirements. Our guide price is £21.50 per hour, with no agency or service fee, but the actual rate may be higher or lower. Extras like oven cleaning depend on the time needed. This tool is not a price quotation or booking commitment.</p>
    <h2>How many rooms need cleaning?</h2><p>Choose the rooms that should be included in each regular clean (0–10 per room type).</p>
    <div className="resource-calculator-rooms">{rooms.map(room=><label className="resource-calc-row" key={room.key}><span>{room.label}</span><span className="resource-stepper"><button type="button" aria-label={`Remove one ${room.label}`} disabled={counts[room.key]===0} onClick={()=>{setCounts(c=>({...c,[room.key]:Math.max(0,c[room.key]-1)}));setShowResult(false);}}>−</button><output>{counts[room.key]}</output><button type="button" aria-label={`Add one ${room.label}`} disabled={counts[room.key]===10} onClick={()=>{setCounts(c=>({...c,[room.key]:Math.min(10,c[room.key]+1)}));setShowResult(false);}}>+</button></span></label>)}</div>
    <h2>Extra tasks at every visit</h2><p>Include any additional tasks you would like on every scheduled clean.</p>
    <div className="resource-calc-extras">{extras.map(extra=><label key={extra.key}><input type="checkbox" checked={selected[extra.key]} onChange={e=>{const checked=e.target.checked;setSelected(s=>({...s,[extra.key]:checked}));setShowResult(false);}} /> {extra.label}</label>)}</div>
    <div className="resource-calc-actions"><button className="resource-print" type="button" onClick={()=>setShowResult(true)} disabled={totalRooms===0}>Get my estimate</button><button type="button" className="resource-calc-reset" onClick={reset}>Reset calculator</button></div>
    {totalRooms===0&&<p className="resource-calc-hint">Select at least one room to calculate a time estimate.</p>}
    {showResult&&totalRooms>0&&<div className="resource-calc-result" role="status"><span>ESTIMATED TIME PER REGULAR VISIT</span><strong>{estimate} {estimate===1?"hour":"hours"}</strong><p>Indicative maintenance-clean time only; more time may be needed depending on condition, clutter, equipment, access and detail requested. Deep or one-off cleans usually require additional time. Your JODEL quote will confirm the agreed scope.</p><Link className="resource-button" href="/#quote">Discuss your clean →</Link></div>}
  </div>;
}
