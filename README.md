# linkpro.app
linkpro.app

Copyright (c) 2024 Linkpro by MOHAMEDFRANK

LinkPro Version: 0.2.0

Navigation Bar: The navigation bar at the top includes a logo (Linkpro.app) and links to different sections like Home, Features, and Contact.
Article Section: The main content area contains a brief description of the service and the URL shortening form.
Footer: The footer includes copyright information and links to the Privacy Policy and Terms of Service.
JavaScript:
generateShortCode: Generates a random 6-character string for the short URL.
localStorage: Stores the mapping of the short code and long URL in localStorage using JSON.
Shorten Button: Handles the event when the "Shorten URL" button is clicked. It stores the short code and long URL, then displays the shortened URL.
Redirect: On page load, if a short code is present in the URL, it redirects to the corresponding long URL.
How to Use
Run the HTML file: Open the file in a web browser.
Shorten a URL: Enter a long URL in the input field and click the "Shorten URL" button.
Use the shortened URL: The shortened URL will be displayed, and clicking it will take you to the original URL.
Redirect: If you paste the shortened URL in the browser's address bar, it will redirect you to the original long URL.

