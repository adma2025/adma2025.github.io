document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    console.log("JavaScript is running");
    fetch("../header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header template");
            }
            return response.text();
        })
        .then(html => {
            headerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading header:", error);
        });
});
