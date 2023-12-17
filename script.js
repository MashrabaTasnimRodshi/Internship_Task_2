function updateClock() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    const timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerText = timeString;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock();
  
  