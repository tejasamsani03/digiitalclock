function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  const hr = hours % 12 || 12; // Convert to 12-hour format
  const min = minutes;
  const sec = seconds;

  // Update text
  document.getElementById("hrs").innerText = hr.toString().padStart(2, "0");
  document.getElementById("mins").innerText = min.toString().padStart(2, "0");
  document.getElementById("secs").innerText = sec.toString().padStart(2, "0");
  document.getElementById("ampm").innerText = ampm;

  // Update circles
  const hhOffset = 440 - (440 * hr) / 12;
  const mmOffset = 440 - (440 * min) / 60;
  const ssOffset = 440 - (440 * sec) / 60;

  document.getElementById("hh").style.strokeDashoffset = hhOffset;
  document.getElementById("mm").style.strokeDashoffset = mmOffset;
  document.getElementById("ss").style.strokeDashoffset = ssOffset;

  // Rotate dots
  document.querySelector(".h_dot").style.transform = `rotate(${hr * 30}deg)`;
  document.querySelector(".m_dot").style.transform = `rotate(${min * 6}deg)`;
  document.querySelector(".s_dot").style.transform = `rotate(${sec * 6}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
