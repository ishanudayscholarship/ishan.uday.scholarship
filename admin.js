/* =========================================
   ADMIN.JS – ISHAN UDAY SCHOLARSHIP
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    noticeInput.value = localStorage.getItem("notice") || "";
    aboutInput.value = localStorage.getItem("about") || "";
    eligibilityInput.value = localStorage.getItem("eligibility") || "";
    datesInput.value = localStorage.getItem("dates") || "";
    linksInput.value = localStorage.getItem("links") || "";

});

function saveContent() {
    localStorage.setItem("notice", noticeInput.value);
    localStorage.setItem("about", aboutInput.value);
    localStorage.setItem("eligibility", eligibilityInput.value);
    localStorage.setItem("dates", datesInput.value);
    localStorage.setItem("links", linksInput.value);

    alert("Website updated successfully. Students will see changes immediately.");
}
