// Utility function to generate a random string for short URL
function generateShortCode() {
    return Math.random().toString(36).substring(2, 8);
}

// Initialize URL storage if it doesn't exist
if (!localStorage.getItem('urlStore')) {
    localStorage.setItem('urlStore', JSON.stringify({}));
}

// Handle URL shortening
document.getElementById('shortenBtn').addEventListener('click', () => {
    const longUrl = document.getElementById('longUrl').value.trim();
    const urlStore = JSON.parse(localStorage.getItem('urlStore'));

    if (longUrl) {
        const shortCode = generateShortCode();
        urlStore[shortCode] = longUrl;
        localStorage.setItem('urlStore', JSON.stringify(urlStore));

        document.getElementById('result').innerHTML = `
            <div class="mt-4">
                <p class="text-gray-700">linkpro by Mohamed frank:</p>
                <a href="${longUrl}" target="_blank" class="text-blue-500 hover:underline">${window.location.href}${shortCode}</a>
            </div>
        `;
    }
});

// Redirect if short code is detected in URL
window.addEventListener('DOMContentLoaded', () => {
    const urlStore = JSON.parse(localStorage.getItem('urlStore'));
    const path = window.location.pathname.substring(1);

    if (path && urlStore[path]) {
        window.location.href = urlStore[path];
    }
});
