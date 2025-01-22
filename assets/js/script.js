function startRedirect(url) {
    var countdownTime = 5; // Mulai hitung mundur dari 5 detik
    var countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.innerHTML = "Redirecting in " + countdownTime + " seconds...";
    document.body.appendChild(countdownElement);

    var loadingMessage = document.createElement('div');
    loadingMessage.classList.add('loading');
    loadingMessage.innerHTML = "Please wait while we redirect you...";
    document.body.appendChild(loadingMessage);

    var countdownInterval = setInterval(function () {
        countdownTime--;
        countdownElement.innerHTML = "Redirecting in " + countdownTime + " seconds...";

        if (countdownTime <= 0) {
            clearInterval(countdownInterval); // Berhenti ketika waktu mencapai 0
            window.location.href = url; // Redirect ke URL tujuan
        }
    }, 1000); // Update setiap 1 detik
}
