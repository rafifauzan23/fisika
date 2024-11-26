// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// Kalkulator Fisika dengan Grafik
document.getElementById('force-calculator').addEventListener('submit', function (e) {
    e.preventDefault();
    const mass = parseFloat(document.getElementById('mass').value);
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const resultElement = document.getElementById('result');
    const chartElement = document.getElementById('force-chart').getContext('2d');

    if (isNaN(mass) || isNaN(acceleration)) {
        resultElement.textContent = 'Masukkan angka yang valid!';
        return;
    }

    const force = mass * acceleration;
    resultElement.textContent = `Gaya: ${force.toFixed(2)} N`;

    // Render Chart
    new Chart(chartElement, {
        type: 'bar',
        data: {
            labels: ['Massa', 'Percepatan', 'Gaya'],
            datasets: [{
                label: 'Nilai',
                data: [mass, acceleration, force],
                backgroundColor: ['#1d4ed8', '#059669', '#d97706'],
            }]
        }
    });
});

// Konversi Satuan Lengkap
document.getElementById('unit-converter').addEventListener('submit', function (e) {
    e.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const mass = parseFloat(document.getElementById('mass-conversion').value);
    const time = parseFloat(document.getElementById('time').value);
    const resultElement = document.getElementById('conversion-result');

    let resultText = '';

    if (!isNaN(length)) {
        const kilometers = length / 1000;
        resultText += `${length} meter = ${kilometers.toFixed(3)} kilometer\n`;
    }
    if (!isNaN(mass)) {
        const grams = mass * 1000;
        resultText += `${mass} kilogram = ${grams.toFixed(3)} gram\n`;
    }
    if (!isNaN(time)) {
        const minutes = time / 60;
        const hours = time / 3600;
        resultText += `${time} detik = ${minutes.toFixed(2)} menit = ${hours.toFixed(2)} jam\n`;
    }

    resultElement.textContent = resultText || 'Masukkan nilai yang valid!';
});

// Konversi Suhu
document.getElementById('temperature-converter').addEventListener('submit', function (e) {
    e.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const kelvin = parseFloat(document.getElementById('kelvin').value);
    const resultElement = document.getElementById('temperature-result');

    if (!isNaN(celsius)) {
        resultElement.textContent = `${celsius}°C = ${(celsius * 9/5 + 32).toFixed(2)}°F = ${(celsius + 273.15).toFixed(2)}K`;
    } else if (!isNaN(fahrenheit)) {
        resultElement.textContent = `${fahrenheit}°F = ${((fahrenheit - 32) * 5/9).toFixed(2)}°C = ${(((fahrenheit - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (!isNaN(kelvin)) {
        resultElement.textContent = `${kelvin}K = ${(kelvin - 273.15).toFixed(2)}°C = ${((kelvin - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    } else {
        resultElement.textContent = 'Masukkan suhu yang valid!';
    }
}); 