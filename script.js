function calculate() {
  const clockInOut = document.getElementById("clockInOut").value;
  const timeToLeave = document.getElementById("timeToLeave");
  
  if (clockInOut === "") {
    alert("Please enter at least one clock in/out pair.");
    return;
  }
  
  const times = clockInOut.trim().split(/[\n\r]+/);
  let totalTime = 0;
  
  for (let i = 0; i < times.length; i += 2) {
    const clockIn = new Date(`01/01/2000 ${times[i]}`);
    const clockOut = new Date(`01/01/2000 ${times[i + 1]}`);
    let timeDiff = clockOut.getTime() - clockIn.getTime();
    
    if (timeDiff < 0) {
      timeDiff += 86400000;
    }
    
    totalTime += timeDiff;
  }
  
  const effectiveHours = totalTime / 3600000;
  
  timeToLeave.value = `Effective hours: ${effectiveHours.toFixed(2)}.`;
}
