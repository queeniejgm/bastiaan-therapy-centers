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
    rates: { otAssessment: 3499, otSession: 1499, stAssessment: null, stSession: null },
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
      { q: "ST regular rates", a: "Not quoted yet. They said they also offer ST sessions." },
      { q: "Next opening", a: "OT initial assessment, Fri Nov 27, 9:30am." },
      { q: "Booking", a: "50% downpayment required to reserve the assessment." },
      { q: "Therapists", a: "All licensed and experienced." },
      { q: "Session frequency", a: "Decided after the assessment, based on the therapist's recommendation." },
      { q: "Cancellation", a: "Fee applies if cancelled less than 3 hours before the appointment." },
    ],
  },
];
