/* =====================================================
   CONTENT.JS
   Ishan Uday Scholarship – Live Website Content
   Data source: Google Sheets (Published)
   ===================================================== */

/* YOUR GOOGLE SHEET ID */
const SHEET_ID = "1trSRJLINRuCbyLcDo7_i9ie4FowO6rVccHOenMTWcC4";

/* Sheet name must be exactly "Sheet1" */
const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/Sheet1`;

/* FETCH DATA */
fetch(SHEET_URL)
    .then(response => response.json())
    .then(data => {

        // Helper to get value by key
        const getValue = (key) => {
            const row = data.find(item => item.key === key);
            return row ? row.value : "";
        };

        /* SET CONTENT */
        document.getElementById("noticeText").textContent =
            getValue("notice") ||
            "Welcome to Ishan Uday Scholarship Information Portal. Check regularly for updates.";

        document.getElementById("aboutText").textContent =
            getValue("about") ||
            "Ishan Uday Scholarship is a Central Government scholarship scheme for students of the North Eastern Region pursuing undergraduate studies.";

        document.getElementById("eligibilityText").textContent =
            getValue("eligibility") ||
            "Students must belong to the North Eastern Region and be enrolled in a recognized undergraduate programme.";

        document.getElementById("datesText").textContent =
            getValue("dates") ||
            "Important dates will be updated once officially announced by the authorities.";

        document.getElementById("linksText").textContent =
            getValue("links") ||
            "National Scholarship Portal: https://scholarships.gov.in";

    })
    .catch(error => {
        console.error("Error loading Google Sheet data:", error);
        document.getElementById("noticeText").textContent =
            "Unable to load updates. Please check your internet connection.";
    });
