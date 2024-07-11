function updateTime() {
    //get p element
    const timer = document.getElementById("timer");

    //get current date and time
    const now = new Date();

    //Extract Year, Month, Day from current date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    //Extract Hours, Minutes, seconds from current time
    const hour = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    //determine AM or PM
    const timeSplit = hour > 12 ? 'PM' : 'AM';

    // Create a formatted time string in MM/DD/YYYY, HH:MM:SS AM/PM format
    const formatTime = `${month}/${day}/${year}, ${hour % 12 || 12}:${minutes}:${seconds} ${timeSplit}`;

    timer.innerText = formatTime;
}

updateTime();

setInterval(updateTime, 1000);
