document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    console.log("JavaScript is running");
    fetch("../footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer template");
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});
