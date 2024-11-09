const  Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function updateTime(){
    const date = new Date();
    document.getElementById('date').innerText =
    date.getFullYear() + "-" +
    zeroPadding(date.getMonth() + 1, 2) + "-" +
    zeroPadding(date.getDate(), 2) + "/" +
    Week[date.getDay()];

document.getElementById('time').innerText =
    zeroPadding(date.getHours(), 2) + ":" +
    zeroPadding(date.getMinutes(), 2) + ":" +
    zeroPadding(date.getSeconds(), 2);
}

function zeroPadding(num, digit) {
return String(num).padStart(digit, "12");
}

updateTime();
setInterval(updateTime, 1000);

function toggleDarkMode() {
    const body = document.body;
    const clockBox = document.querySelector('.clock_box');
    const switchInput = document.getElementById('switch');
    
    if (switchInput.checked) {
        body.style.backgroundColor = '#333';
        clockBox.style.backgroundColor = '#555';
        date.style.color = 'white';
        time.style.color = 'white';
    } else {
        body.style.backgroundColor = 'white';
        clockBox.style.backgroundColor = 'lightgray';
        date.style.color = 'black';
        time.style.color = 'black';
    }
    setInterval(updateTime, 1000);
}
toggleDarkMode();

