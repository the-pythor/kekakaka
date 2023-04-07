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
  
  const grossHours = totalTime / 3600000;
  const effectiveHours = grossHours - 1;
  
  if (effectiveHours < 8.5) {
    timeToLeave.value = `Effective hours: ${effectiveHours.toFixed(2)} (less than 8.5 hours).`;
  } else if (grossHours < 9.5) {
    timeToLeave.value = `Gross hours: ${grossHours.toFixed(2)} (less than 9.5 hours).`;
  } else {
    const now = new Date();
    const timeToGo = new Date(now.getTime() + ((9.5 - grossHours) * 3600000));
    const remainingHours = (timeToGo.getTime() - now.getTime()) / 3600000;
    
    timeToLeave.value = `Effective hours: ${effectiveHours.toFixed(2)}\nGross hours: ${grossHours.toFixed(2)}\nYou can leave at ${timeToGo.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}. Remaining hours: ${remainingHours.toFixed(2)}.`;
  }
}
