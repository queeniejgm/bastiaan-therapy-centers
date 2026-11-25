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
      { q: "Therapists", a: "All licensed and experienced." },
      { q: "Session frequency", a: "Decided after the assessment, based on the therapist's recommendation." },
      { q: "Cancellation", a: "Fee applies if cancelled less than 3 hours before the appointment." },
    ],
  },
  {
    name: "Li'l Scouts Therapy Center",
    address: "244 Sct. Chuatoco St., Roxas District, Quezon City, 1103",
    contact: "0927 471 3377",
    links: [{ label: "Facebook", url: "https://www.facebook.com/lilscoutsph" }],
    rates: { otAssessment: 3200, otSession: 1450, stAssessment: 3200, stSession: 1450 },
    schedule: "Open OT & ST slots — they'll send available times",
    packages: [
      "Security deposit: ₱3,000 (new students)",
    ],
    notes: [
      { q: "Initial evaluation", a: "₱3,200 for new students (one fee quoted; not split by OT/ST)." },
      { q: "Session length", a: "1 hour (OT and ST)." },
      { q: "Therapists", a: "All PRC-licensed, experienced in pediatric setting." },
      { q: "Recommended frequency", a: "2x a week each for OT and ST (minimum)." },
      { q: "OT + ST together?", a: "Advised on different days, since it's his first time in therapy." },
      { q: "Parent involvement", a: "Parents not allowed inside the therapy area. 10–15 min feedback before the end of each session; you can ask for home instructions." },
      { q: "Progress report", a: "Request it a month before your return to the dev-ped." },
      { q: "Enrollment", a: "Process and requirements explained when you visit the center." },
    ],
  },
];
