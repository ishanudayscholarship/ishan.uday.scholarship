/* =====================================================
   ADMIN.JS
   Ishan Uday Scholarship – Admin Control
   Google Sheet Based (Live Multi-device)
   ===================================================== */

const ADMIN_PASSWORD = "Newaj@12";

/* YOUR GOOGLE SHEET EDIT LINK */
const SHEET_EDIT_URL =
  "https://docs.google.com/spreadsheets/d/1trSRJLINRuCbyLcDo7_i9ie4FowO6rVccHOenMTWcC4/edit";

/* ---------- UNLOCK ADMIN PANEL ---------- */
function unlockAdmin() {
    const enteredPassword =
        document.getElementById("adminPassword").value;

    if (enteredPassword === ADMIN_PASSWORD) {
        document.getElementById("lockBox").style.display = "none";
        document.getElementById("adminPanel").style.display = "block";
        loadPreview();
    } else {
        alert("Wrong password. Access denied.");
    }
}

/* ---------- LOAD CURRENT CONTENT (PREVIEW ONLY) ---------- */
function loadPreview() {

    const previewFields = [
        "notice",
        "about",
        "eligibility",
        "dates",
        "links"
    ];

    previewFields.forEach(key => {
        const el = document.getElementById(key + "Input");
        if (el) {
            el.value =
              localStorage.getItem(key) ||
              "Live content is managed from Google Sheet.";
        }
    });
}

/* ---------- OPEN GOOGLE SHEET ---------- */
function openSheet() {
    window.open(SHEET_EDIT_URL, "_blank");
}
