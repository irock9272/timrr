function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    document.getElementById('time').textContent = now.toLocaleTimeString('en-US', options).replace('AM', 'AM').replace('PM', 'PM');
}

setInterval(updateTime, 1000);
window.onload = updateTime;