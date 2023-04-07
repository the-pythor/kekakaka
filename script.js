function calculate() {
  const clockIn = document.getElementById("clockIn").value;
  const clockOut = document.getElementById("clockOut").value;
  const timeToLeave = document.getElementById("timeToLeave");
  
  if (clockIn === "" || clockOut === "") {
    alert("Please enter both clock in and clock out times.");
    return;
  }
  
  const clockInTime = new Date(`01/01/2000 ${clockIn}`);
  const clockOutTime = new Date(`01/01/2000 ${clockOut}`);
  let timeDiff = clockOutTime.getTime() - clockInTime.getTime();
  
  if (timeDiff < 0) {
    timeDiff += 86400000;
  }
  
  const hours = Math.floor(timeDiff / 3600000);
  const minutes = Math.floor((timeDiff % 3600000) / 60000);
  const leaveTime = new Date(clockOutTime.getTime() + 1800000); // Add 30 minutes to the clock out time
  
  timeToLeave.value = `${hours} hours and ${minutes} minutes (${leaveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`;
}
