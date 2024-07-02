// script.js
function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = day;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);

