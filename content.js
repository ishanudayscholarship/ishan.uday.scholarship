/* =========================================
   CONTENT.JS – STUDENT WEBSITE
   ========================================= */

document.getElementById("noticeText").textContent =
    localStorage.getItem("notice") ||
    "Welcome to Ishan Uday Scholarship Information Portal. Check regularly for updates.";

document.getElementById("aboutText").textContent =
    localStorage.getItem("about") ||
    "Ishan Uday Scholarship is a Central Government scholarship scheme for students from the North Eastern Region pursuing undergraduate studies.";

document.getElementById("eligibilityText").textContent =
    localStorage.getItem("eligibility") ||
    "Students must belong to NER states and be enrolled in a recognized undergraduate course.";

document.getElementById("datesText").textContent =
    localStorage.getItem("dates") ||
    "Important dates will be updated once officially announced.";

document.getElementById("linksText").textContent =
    localStorage.getItem("links") ||
    "National Scholarship Portal: https://scholarships.gov.in";
