export type GuideSection = { title: string; paragraphs?: string[]; points?: string[] };

export const resources = [
  { slug: "client-handbook", title: "Client handbook", category: "FOR CLIENTS", description: "How regular and one-off cleaning arrangements work, how to prepare, and what to do if plans change." },
  { slug: "client-instruction-checklist", title: "Cleaning instruction checklist", category: "FOR CLIENTS", description: "Specify the cleaning tasks you need, give them A or B priority, and print a checklist for your cleaner." },
  { slug: "client-product-checklist", title: "Cleaning products checklist", category: "FOR CLIENTS", description: "A practical shopping and equipment checklist for clients supplying cleaning materials." },
  { slug: "attendance-payments", title: "Attendance & payments record", category: "FOR CLIENTS", description: "A printable record of hours worked, payments, dates, and signatures." },
  { slug: "cleaner-handbook", title: "Cleaner handbook", category: "FOR CLEANERS", description: "Practical guidance on meetings, regular jobs, safety, keys, attendance, payments and absences." },
] as const;

export type ResourceSlug = (typeof resources)[number]["slug"];

export const clientInstructionGroups = [
  { title: "Entrance, hallway & landing", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Dust picture frames", "Clean mirrors", "Dust/wipe all surfaces", "Polish handrails", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
  { title: "Living room", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Dust picture frames", "Clean mirrors", "Dust/wipe/polish all surfaces", "Dust/clean fireplace (if applicable)", "Clean under sofa cushions", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
  { title: "Dining room", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Dust picture frames", "Clean mirrors", "Dust/wipe/polish all surfaces", "Dust/clean fireplace (if applicable)", "Dust/clean chairs", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
  { title: "Kitchen", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Clean hob/oven", "Clean cupboard doors", "Wipe down appliances (fridge etc)", "Clean all surfaces", "Clean sink & buff taps", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
  { title: "Bathroom & en-suites", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Clean mirrors", "Clean bath & buff taps", "Clean sink & buff taps", "Clean shower", "Clean toilets inside and outside", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
  { title: "Bedrooms", tasks: ["Wipe skirting boards", "Wipe doors", "Clean windows", "Clean window sills/ledges", "Dust picture frames", "Clean mirrors", "Change bedding", "Tidy beds", "Sweep/vacuum floors/carpets", "Mop hard floors"] },
];

export const clothColours = [
  { colour: "Blue", use: "Kitchen" }, { colour: "Red", use: "Toilets" },
  { colour: "Green", use: "Bathroom" }, { colour: "Yellow", use: "Dusting — skirting boards, mirrors etc" },
  { colour: "White", use: "Outside front door" },
];

export const productChecklist = [
  "Kitchen roll", "Sponges", "Toothbrushes (for detail cleaning)", "Bin bags", "Long-handled duster",
  "Mop and bucket", "Dustpan and brush", "Vacuum and replacement bags (if applicable)",
  "Rubber gloves", "A labelled box and cupboard space to store supplies", "Antibacterial wipes",
  "Kitchen cleaning spray or multi-surface spray", "Bathroom cleaning spray or multi-surface spray",
  "Limescale remover spray", "Toilet cleaner and a brush for each toilet",
  "Furniture polish", "Window/glass cleaner",
  "Floor cleaning liquid or floor wipes (unless using a steaming machine)",
];

export const guides: Record<"client-handbook" | "cleaner-handbook", { title: string; intro: string; sections: GuideSection[] }> = {
  "client-handbook": {
    title: "Client handbook",
    intro: "A guide to working with JODEL Cleaning. Your confirmed quotation and written service arrangements determine which services, fees and conditions apply to your booking.",
    sections: [
      { title: "Welcome to JODEL", paragraphs: ["Thank you for choosing JODEL Cleaning. Our priority is to understand the needs of your home, agree the scope of work and make communication straightforward.", "We work from Bexley and serve nearby areas of South East London, subject to postcode and cleaner availability."] },
      { title: "How regular cleaning works", points: ["Tell us about your property, cleaning priorities and preferred day or time.", "We discuss requirements and availability, and agree an appropriate cleaner or cleaning arrangement.", "Where an introductory meeting is arranged, use it to discuss tasks, materials, access and scheduling.", "Tell us if you have any concerns about the arrangement so they can be addressed before work starts.", "If you need to change the tasks or scheduled hours, contact us to agree the revised scope."] },
      { title: "How one-off cleaning works", points: ["Describe the clean you require and any deadline or special requirements.", "We confirm availability and the scope of the service before arranging a visit.", "One-off, deep and end-of-tenancy cleans can require more time than a regular maintenance clean.", "The agreed quotation explains any fees and payment arrangements."] },
      { title: "Cleaning arrangements and fees", paragraphs: ["Prices are confirmed individually. Do not assume that a rate or agency fee published by another cleaning company applies to JODEL."], points: ["Agree the work, frequency and estimated hours in advance.", "Confirm who supplies equipment and cleaning products for your booking.", "Check your written quotation for the payment schedule, cancellations and any extras.", "If a cleaner is paid separately under your arrangement, maintain a record of attendance and payments."] },
      { title: "Choosing your cleaner", points: ["Discuss the work you want completed and the standard you expect.", "Allow enough time for the agreed tasks.", "Raise any suitability, reliability or standard-of-work concerns with JODEL promptly.", "Do not assume a replacement cleaner has been arranged without confirmation."] },
      { title: "Materials, equipment and keys", points: ["For client-supplied cleaning arrangements, provide safe products and working equipment.", "Keep products in a known location and explain any restrictions on finishes or surfaces.", "Do not ask the cleaner to use bleach as part of the checklist-based routine.", "Agree access and key-handling arrangements directly before the first clean. Do not label keys with your address.", "A secure key box may be useful, subject to your preferences and risk assessment."] },
      { title: "Getting the best from your clean", points: ["Show the cleaner around the property and explain priorities.", "Use the client instruction checklist to mark A (must-do) and B (if time allows) tasks.", "Tell the cleaner about fragile surfaces, pets, alarms and other property-specific instructions.", "Speak up early if you would like something done differently.", "Contact JODEL to discuss changes to your arrangement or to resolve a problem."] },
      { title: "Absences, holidays and problems", points: ["Notify us promptly of dates that will not work.", "If your regular cleaner is unavailable, contact JODEL to discuss rescheduling or possible temporary cover; cover is not automatic.", "For bank holidays, confirm the appointment or a suitable alternative in advance.", "Raise concerns quickly so we can discuss how best to put things right."] },
      { title: "Frequently asked questions", points: ["Can I change my hours? Contact JODEL so availability and pricing can be reviewed.", "Do you supply products? This depends on the agreed cleaning arrangement; ask us before the first visit.", "How do I pay? Your JODEL quotation or booking confirmation will explain the method and timing.", "Can I request a replacement? Contact us; any replacement depends on available cleaners.", "How do I cancel? Consult your confirmed JODEL terms and contact us directly."] },
      { title: "Useful printable forms", paragraphs: ["Use the instruction checklist, cleaning product checklist and attendance/payment record from the JODEL resources hub. These can be printed or filled out before printing."] },
    ],
  },
  "cleaner-handbook": {
    title: "Cleaner handbook",
    intro: "Practical guidance for cleaners working with JODEL Cleaning. This page does not create an employment contract or determine employment status; your actual written agreement and legal status apply.",
    sections: [
      { title: "Working with JODEL", points: ["Regular home-cleaning arrangements may be weekly or fortnightly, depending on client requirements and availability.", "Be reliable, courteous and clear about the work you can undertake.", "Agree the tasks and time available with the client before starting."] },
      { title: "Starting work and accepting jobs", points: ["Complete the onboarding steps JODEL asks of you before accepting work.", "Provide accurate identity, right-to-work and reference information if requested.", "Only accept an assignment when you are confident you can attend and complete it.", "Confirm the schedule, location and duties rather than relying on an assumed booking."] },
      { title: "Meeting the client", points: ["Arrive on time and present yourself professionally.", "Walk through the property and discuss the work, priorities and any fragile surfaces.", "Ask where supplies are kept and how to use any unfamiliar equipment.", "Agree access instructions, alarms, keys and the start date.", "If there is too much work for the scheduled time, discuss priorities honestly."] },
      { title: "One-off cleans and temporary cover", points: ["Confirm the specific date, duration and scope before attending.", "A one-off or deep clean may take longer than regular maintenance cleaning.", "Treat an unfamiliar property with care and ask questions about surfaces or products before using them."] },
      { title: "Materials and safety", points: ["Use the supplies agreed for the booking. For client-supplied arrangements, the client provides the products and equipment.", "Do not use bleach in the checklist-based cleaning routine.", "Follow product labels and never mix cleaning chemicals.", "Do not carry out unsafe work; raise any hazards with the client and JODEL.", "Use the client instruction checklist and complete high-priority tasks first."] },
      { title: "Hours, attendance and payments", points: ["Keep an accurate record of dates and hours worked.", "Check the agreed payment method and timing before your first visit.", "Use the attendance and payments sheet where a client pays a cleaner directly.", "Report any discrepancy promptly.", "Your tax and employment obligations depend on your actual legal working arrangement; seek appropriate guidance where needed."] },
      { title: "Keys and property security", points: ["Protect client keys and never label them with a home address.", "Do not share keys or access codes with anyone else.", "Return keys promptly through the agreed procedure when an assignment ends.", "Never bring friends, family members or pets to a client appointment without express permission."] },
      { title: "Reliability, absences and holidays", points: ["Notify the client and JODEL immediately if you are running late or cannot attend.", "Offer an alternative date where appropriate, but do not change a visit without agreement.", "Give as much notice of planned holidays as you reasonably can.", "Arrange any replacement visit or cover through JODEL rather than assuming a substitute is available."] },
      { title: "Good cleaning habits", points: ["Keep cleaning materials organised and work systematically through agreed priorities.", "Use appropriate tools for corners and hard-to-reach areas.", "Test products on suitable inconspicuous areas and follow manufacturer guidance for leather, stone, laminate and other sensitive surfaces.", "Pay attention to sinks, taps, cupboard doors and frequently touched surfaces.", "Finish by checking the quality of the work and communicating any tasks that could not be completed."] },
      { title: "Online tools and training", paragraphs: ["The reference handbook describes a third-party cleaner portal and a third-party training programme. These are not JODEL services and are not advertised here. JODEL will communicate any available scheduling or training tools directly."] },
    ],
  },
};
