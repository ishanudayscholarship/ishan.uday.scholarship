/* =========================================
   ADMIN.JS
   Ishan Uday Scholarship – Admin Updates
   ========================================= */

/* ---------- LOAD EXISTING CONTENT ---------- */
document.addEventListener("DOMContentLoaded", () => {

    noticeInput.value =
        localStorage.getItem("notice") || "";

    aboutInput.value =
        localStorage.getItem("about") || "";

    eligibilityInput.value =
        localStorage.getItem("eligibility") || "";

    datesInput.value =
        localStorage.getItem("dates") || "";

    linksInput.value =
        localStorage.getItem("links") || "";
});

/* ---------- SAVE ALL CONTENT ---------- */
function saveContent() {

    localStorage.setItem("notice", noticeInput.value);
    localStorage.setItem("about", aboutInput.value);
    localStorage.setItem("eligibility", eligibilityInput.value);
    localStorage.setItem("dates", datesInput.value);
    localStorage.setItem("links", linksInput.value);

    alert("Website updated successfully.\nStudents will see the changes immediately.");
}
