/* =========================================
   CONTENT.JS
   Ishan Uday Scholarship – Public Website
   ========================================= */

/* ---------- ABOUT SECTION ---------- */
const aboutDefault =
    "Ishan Uday Scholarship is a Central Government scholarship scheme " +
    "launched by the University Grants Commission (UGC) for students " +
    "belonging to the North Eastern Region of India. The scheme aims to " +
    "promote higher education by providing financial support to deserving students.";

const aboutText = localStorage.getItem("about");
document.getElementById("aboutText").textContent =
    aboutText && aboutText.trim() !== "" ? aboutText : aboutDefault;


/* ---------- ELIGIBILITY SECTION ---------- */
const eligibilityDefault =
    "Students must be domiciled in the North Eastern Region (NER) states. " +
    "They should be pursuing a regular undergraduate degree course " +
    "in a recognized university or college. Family income criteria and " +
    "other conditions as notified by UGC apply.";

const eligibilityText = localStorage.getItem("eligibility");
document.getElementById("eligibilityText").textContent =
    eligibilityText && eligibilityText.trim() !== "" ? eligibilityText : eligibilityDefault;


/* ---------- IMPORTANT DATES SECTION ---------- */
const datesDefault =
    "Application start date, last date, and verification timelines " +
    "will be updated here once officially announced by the authorities. " +
    "Students are advised to check this page regularly.";

const datesText = localStorage.getItem("dates");
document.getElementById("datesText").textContent =
    datesText && datesText.trim() !== "" ? datesText : datesDefault;


/* ---------- USEFUL LINKS SECTION ---------- */
const linksDefault =
    "National Scholarship Portal (NSP): https://scholarships.gov.in " +
    " | University Grants Commission (UGC): https://www.ugc.gov.in";

const linksText = localStorage.getItem("links");
document.getElementById("linksText").textContent =
    linksText && linksText.trim() !== "" ? linksText : linksDefault;


/* ---------- END OF FILE ---------- */
