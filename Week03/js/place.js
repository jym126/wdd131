// Update footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate wind chill factor
const temperature = 10; // °C
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) {
  if (temp <= 10 && speed > 4.8) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1) + " °C";
  }
  return "N/A";
}

document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);
