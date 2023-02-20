function addTimer() {
    var timerList = document.getElementById("timer-list");
    var timer = document.createElement("div");
    timer.className = "timer";
    
    // Set initial width to 0 and position to center
    timer.style.width = "0";
    timer.style.left = "50%";
    timer.style.transition = "all 200ms ease-out";
    
    setTimeout(() => {
      var pageWidth = document.documentElement.clientWidth;
      timer.style.width = (pageWidth - 20) + "px";
      timer.style.left = (pageWidth - 10) + "px";
      timer.style.transform = "none";
    }, 0);
    
    timerList.appendChild(timer);
  }
  