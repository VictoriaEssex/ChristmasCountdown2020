// Get the countdown element
var countdown = document.getElementById('countdown');

// Function to update the countdown
function updateCountdown() {
    var christmasDate = new Date('2024-12-25');  // Set Christmas date for this year
    var now = new Date();  // Get the current date and time
    var t = christmasDate - now;  // Calculate the time difference in milliseconds

    if (t >= 0) {
        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var seconds = Math.floor((t / 1000) % 60);

        // Update the countdown display
        countdown.innerHTML = `${days}d, ${hours}hr, ${minutes}min, ${seconds}sec`;
    } else {
        // When Christmas has passed, show 0 for all units
        countdown.innerHTML = `0d, 0hr, 0min, 0sec`;
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display countdown immediately when page loads
updateCountdown();
