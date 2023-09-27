const progressBar = document.getElementById("progress-bar");
const totalTime = 15; // Tempo total em segundos
let currentTime = 0;
const interval = 100; // Intervalo de atualização em milissegundos

const updateProgressBar = () => {
    currentTime += interval / 1000; // Converter intervalo para segundos
    const progressPercentage = (currentTime / totalTime) * 100;
    progressBar.style.width = progressPercentage * 1.065 + "%";

    if (currentTime >= totalTime) {
        clearInterval(progressInterval); // Parar o intervalo
        window.location.href = "../index.html"; // Redirecionar quando o tempo acabar
    }
};

const progressInterval = setInterval(updateProgressBar, interval);