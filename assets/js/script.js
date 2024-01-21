document.addEventListener('DOMContentLoaded', function () {
    var tabLists = document.querySelectorAll(".tabs_list ul li");
    var tabItems = document.querySelectorAll(".tab_item");
    var overlay = document.getElementById('terms-overlay');
    var agreeButton = document.querySelector('.tab_foot .agree');
    var disagreeButton = document.querySelector('.tab_foot .decline');

    // Check if the user has already accepted the terms
    var hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');

    if (hasAcceptedTerms) {
        // If the user has accepted, hide the overlay
        overlay.style.display = 'none';
    }

    tabLists.forEach(function (list) {
        list.addEventListener("click", function () {
            var tabData = list.getAttribute("data-tc");

            tabLists.forEach(function (list) {
                list.classList.remove("active");
            });
            list.classList.add("active");

            tabItems.forEach(function (item) {
                var tabClass = item.getAttribute("class").split(" ");
                if (tabClass.includes(tabData)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Function to handle "I Agree" button click
    agreeButton.addEventListener('click', function () {
        // Set a flag in localStorage to indicate that the user has accepted the terms
        localStorage.setItem('hasAcceptedTerms', 'true');
        overlay.style.display = 'none';

        // Collect user details
        const userDetails = {
            browserType: navigator.userAgent,  // Get the user agent string for browser type
            // Add other user details as needed
        };

        // Send user details to server
        // (Note: Discord-related code has been removed)
    });

    // Function to handle "I Don't Agree" button click
    disagreeButton.addEventListener('click', function () {
        // Redirect to a website (replace 'https://example.com' with the desired URL)
        window.location.href = "decline.html";
    });
});
