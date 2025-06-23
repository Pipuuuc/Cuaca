// Ambil elemen DOM
const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("getweather");
const weatherDisplay = document.getElementById("weather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const iconDisplay = document.getElementById("icon");

// API Key Openweather (ganti dengan API key Anda)
// Replace "61346d09ebd58349639ff1b762715bb4" with your actual API key
const API_KEY = "3a0f6855ae77d751329016146d15dd94";

// Fungsi untuk mengambil data cuaca
async function getweather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Kota tidak ditemukan!");

    const data = await response.json();

    // Update DOM dengan data cuaca
    locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `Suhu: ${data.main.temp}°C`;
    descriptionDisplay.textContent = `Kondisi: ${data.weather[0].description}`;
    iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDisplay.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
  }
}

// Tambahkan event listener pada tombol
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getweather(city);
  } else {
    alert("Harap masukkan nama kota!");
  }
});
