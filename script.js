window.onload = function() {
    // Show popup immediately when page loads
    showProposal();
};

function showProposal() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Will You Be My Forever?</h2>
            <p>Hey [Recipient's Name], I've been thinking about us... Will you be my partner in this crazy journey called life? 💍❤️</p>
            <button onclick="accept()">Yes! 😍</button>
            <button onclick="decline()">Maybe Later 😉</button>
        </div>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'flex';
}

function accept() {
    alert("Yay! I love you! Let's celebrate! 🎉");
    // You can add more actions here, like redirecting to another page
}

function decline() {
    alert("No worries, I'll keep trying! 😘");
    // Optional: Close popup or redirect
}
