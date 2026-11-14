"use client";

import { clientInstructionGroups, clothColours, productChecklist } from "@/lib/jodel-resources";

export function PrintResource() {
  return <button className="resource-print" type="button" onClick={() => window.print()}>Print / Save as PDF ↗</button>;
}

export function ClientInstructionForm() {
  return <div className="resource-form">
    <div className="resource-form-heading"><p>Mark A for tasks that MUST be done, or B for tasks to complete IF time allows. Leave the completed sheet for your cleaner.</p><PrintResource /></div>
    <div className="resource-form-fields"><label>Client / property <input aria-label="Client or property" type="text" /></label><label>Cleaning date <input aria-label="Cleaning date" type="date" /></label></div>
    <div className="resource-checklist-grid">{clientInstructionGroups.map(group => <section className="resource-check-group" key={group.title}><h2>{group.title}</h2><table><thead><tr><th scope="col">Task</th><th scope="col">A / B</th><th scope="col">Done</th></tr></thead><tbody>{group.tasks.map(task => <tr key={task}><td>{task}</td><td><select aria-label={`Priority for ${task} in ${group.title}`} defaultValue=""><option value="">—</option><option>A</option><option>B</option></select></td><td><input type="checkbox" aria-label={`Completed ${task} in ${group.title}`} /></td></tr>)}</tbody></table></section>)}</div>
    <p className="resource-safety">Please provide the relevant cleaning materials for client-supplied arrangements. <strong>Health & safety: do not use bleach.</strong></p>
  </div>;
}

export function ClientProductForm() {
  return <div className="resource-form">
    <div className="resource-form-heading"><p>Check that cleaning products and equipment are available before your visit. More than one cloth of each colour may be needed.</p><PrintResource /></div>
    <h2>Colour-coded cloths</h2>
    <table className="resource-products-table"><thead><tr><th scope="col">Ready</th><th scope="col">Colour</th><th scope="col">Use</th></tr></thead><tbody>{clothColours.map(item => <tr key={item.colour}><td><input type="checkbox" aria-label={`Have ${item.colour} cloths`} /></td><td>{item.colour}</td><td>{item.use}</td></tr>)}</tbody></table>
    <h2>Cleaning products & equipment</h2>
    <div className="resource-product-list">{productChecklist.map(item => <label key={item}><input type="checkbox" /> <span>{item}</span></label>)}</div>
    <p className="resource-note">Laminate flooring may need a laminate-specific cleaning solution and flat mop. Check each surface and manufacturer's instructions.</p>
  </div>;
}

export function AttendanceForm() {
  return <div className="resource-form">
    <div className="resource-form-heading"><p>Use this sheet to record visits and payments where this is part of your agreed arrangement with your cleaner.</p><PrintResource /></div>
    <div className="resource-form-fields"><label>Client name <input aria-label="Client name" type="text" /></label><label>Cleaner name <input aria-label="Cleaner name" type="text" /></label></div>
    <div className="resource-table-scroll"><table className="resource-attendance-table"><thead><tr><th scope="col">Date</th><th scope="col">Hours worked</th><th scope="col">Amount paid</th><th scope="col">Client signature</th><th scope="col">Cleaner signature</th></tr></thead><tbody>{Array.from({length: 14},(_,i)=><tr key={i}><td><input type="text" aria-label={`Date for visit ${i+1}`} /></td><td><input type="text" aria-label={`Hours for visit ${i+1}`} /></td><td><input type="text" aria-label={`Amount paid for visit ${i+1}`} /></td><td><input type="text" aria-label={`Client signature for visit ${i+1}`} /></td><td><input type="text" aria-label={`Cleaner signature for visit ${i+1}`} /></td></tr>)}</tbody></table></div>
  </div>;
}
