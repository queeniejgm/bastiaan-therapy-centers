// Edit this file to add/update centers.
// Rates: use a number, or null if unknown / not quoted.
// rates = regular rates, pwdRates = rates with PWD ID (optional).
// address: used to open Google Maps. mapsUrl (optional) overrides it with an exact pin link.

const CURRENCY = "₱";

const CENTERS = [
  {
    name: "AIM (Aspire in Motion) Play and Therapy Center",
    address: "172 D. Tuazon Street, Sta. Mesa Heights, Quezon City, 1114",
    contact: "0917 518 8807 · aimtherapycenter88@gmail.com",
    links: [{ label: "Facebook", url: "https://www.facebook.com/aimtherapycenter" }],
    rates: { otAssessment: 3499, otSession: 1499, stAssessment: null, stSession: 1499 },
    pwdRates: { otAssessment: 3299, otSession: 1399, stAssessment: 3299, stSession: 1399 },
    schedule: "Mon–Sat 8:30am–5:30pm",
    packages: [
      "OT 10 sessions: ₱1,299/session (₱12,990 total)",
      "OT 5 sessions: ₱1,399/session (₱6,995 total)",
      "SPED 10 sessions: ₱899/session (₱8,990 total)",
      "SPED 5 sessions: ₱999/session (₱4,995 total)",
      "PT 5 sessions: ₱5,995 · 10 sessions: ₱11,000",
      "PWD: SPED ₱999, specialized therapy (SOS, PROMPT, dysphagia) ₱1,599, specialized assessment ₱3,499, progress report ₱799",
    ],
    notes: [
      { q: "ST assessment (regular)", a: "Not quoted yet. ST session is the same price as OT." },
      { q: "Next opening", a: "OT initial assessment, Fri Nov 27, 9:30am." },
      { q: "Booking", a: "50% downpayment required to reserve the assessment." },
      { q: "Therapists", a: "All PRC-licensed and experienced." },
      { q: "Session frequency", a: "Decided after the assessment, based on the therapist's recommendation." },
      { q: "Cancellation", a: "Fee applies if cancelled less than 3 hours before the appointment." },
      { q: "In business since", a: "About 1 year (2025)." },
    ],
  },
  {
    name: "Li'l Scouts Therapy Center",
    address: "244 Sct. Chuatoco St., Roxas District, Quezon City, 1103",
    contact: "0927 471 3377",
    links: [{ label: "Facebook", url: "https://www.facebook.com/lilscoutsph" }],
    rates: { otAssessment: 3200, otSession: 1450, stAssessment: 3200, stSession: 1450 },
    pwdRates: { otAssessment: 3200, otSession: 1450, stAssessment: 3200, stSession: 1450 }, // no separate PWD discount; same rate
    schedule: "Open OT & ST slots — they'll send available times",
    packages: [
      "Security deposit: ₱3,000 (new students)",
    ],
    notes: [
      { q: "Initial evaluation", a: "₱3,200 for new students each for OT and ST (separate fees)." },
      { q: "PWD rate", a: "No separate PWD discount — same rate applies." },
      { q: "Session length", a: "1 hour (OT and ST)." },
      { q: "Therapists", a: "All PRC-licensed, experienced in pediatric setting." },
      { q: "Recommended frequency", a: "2x a week each for OT and ST (minimum)." },
      { q: "OT + ST together?", a: "Advised on different days, since it's his first time in therapy." },
      { q: "Parent involvement", a: "Parents not allowed inside the therapy area. 10–15 min feedback before the end of each session; you can ask for home instructions." },
      { q: "Progress report", a: "Request it a month before your return to the dev-ped." },
      { q: "Enrollment", a: "Process and requirements explained when you visit the center." },
    ],
  },
  {
    name: "Skills at Play Therapy Center (SPTC)",
    address: "27 J Aquino Cruz Street, Quezon City, 1115",
    contact: "0961 767 8221",
    links: [{ label: "Facebook", url: "https://www.facebook.com/sptcqc" }],
    rates: { otAssessment: 4500, otSession: 1400, stAssessment: 4500, stSession: 1750 },
    pwdRates: { otAssessment: 3500, otSession: 1100, stAssessment: 3500, stSession: 1250 },
    schedule: "Open: Tue AM & PM, Wed AM",
    packages: [
      "PT session: ₱1,400 regular / ₱1,100 PWD (their message listed both as \"PWD\")",
      "Down payment: ₱1,000 to reserve",
    ],
    notes: [
      { q: "Initial evaluation", a: "Separate fee each for OT and ST. 1hr guardian interview, therapist observation, goal setting with caregiver. Includes individualized notebook with caregiver leaflets." },
      { q: "Session", a: "1 hour, one-on-one, with caregiver education for follow-ups at home." },
      { q: "Therapists", a: "PRC-licensed; neuroaffirming, strengths-based, evidence-based practice." },
      { q: "Recommended frequency", a: "Start 2x a week, then check if 3x a week." },
      { q: "OT + ST together?", a: "Yes, can be done together (early intervention)." },
      { q: "Parent involvement", a: "Parent coaching, OT notebook to track progress at home, Viber group chat for updates." },
      { q: "Enrollment", a: "Valid ID of guardian + ₱1,000 down payment. Book via Messenger or Viber." },
      { q: "Facility", a: "3-storey center with study space, play space and kitchen." },
      { q: "In business since", a: "2022 (per a third-party business directory, unverified)." },
    ],
  },
  {
    name: "THINKids QC",
    address: "", // not found online yet; map link searches by name
    contact: "0917 508 0655",
    links: [{ label: "Facebook", url: "https://www.facebook.com/THINKidsQC" }],
    rates: { otAssessment: 4375, otSession: 1875, stAssessment: 4375, stSession: 1875 },
    pwdRates: { otAssessment: 3500, otSession: 1500, stAssessment: 3500, stSession: 1500 },
    schedule: "",
    packages: [
      "Formal report: ₱2,062.50 regular / ₱1,650 PWD",
    ],
    notes: [
      { q: "Therapists", a: "All PRC-licensed." },
      { q: "Rates", a: "Senior Consultant rates. Same rates for OT and ST, charged separately. Discount applies with PWD ID or valid doctor's referral." },
      { q: "Initial evaluation", a: "2 hours, or two 1-hour sessions. Separate fee each for OT and ST." },
      { q: "Session length", a: "1 hour." },
      { q: "Junior Consultants", a: "Currently none available for face-to-face." },
      { q: "In business", a: "15 years." },
    ],
  },
  {
    name: "TheraBright Occupational and Speech Therapy Center",
    address: "34-D Marathon Street, Quezon City",
    mapsUrl: "https://maps.app.goo.gl/i6sE6hSjRe1S4eay6",
    contact: "0945 455 7996 · (02) 7728-7019",
    links: [{ label: "Facebook", url: "https://www.facebook.com/TheraBright/" }],
    rates: { otAssessment: 4150, otSession: 1400, stAssessment: 4150, stSession: 1400 },
    pwdRates: { otAssessment: 4150, otSession: 1400, stAssessment: 4150, stSession: 1400 },
    schedule: "OT: Mon 11:30–12:30 & Tue 12:00–1:00 (same therapist); Wed 3:00–4:00, Thu 1:00–2:00, Fri 11:30–12:30 (same therapist). ST: no slots yet.",
    notes: [
      { q: "Therapists", a: "All PRC-licensed." },
      { q: "Assessment", a: "Separate fee each for OT and ST." },
      { q: "PWD rate", a: "Sessions ₱1,400 with PWD ID. Without it, still ₱1,400 as long as the PWD ID is shown within 2 months. Assessment has no PWD discount." },
      { q: "Landmarks", a: "Near Tomas Morato McDo, Office Warehouse, Zenshou. No longer in Thompson's Square." },
    ],
  },
];
