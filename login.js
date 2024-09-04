document.addEventListener('DOMContentLoaded', function() {
    debugger;
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engeller

        const email = emailInput.value;
        const password = passwordInput.value;

        // Doğru e-posta ve şifre
        const correctEmail = 'alpaybil@hotmail.com';
        const correctPassword = '3322';

        if (email === correctEmail && password === correctPassword) {
            // Giriş başarılı, index.html'e yönlendir
            window.location.href = 'index.html';
        } else {
            // Hata mesajını göster
            errorMessage.textContent = 'E-posta veya şifre yanlış. Lütfen tekrar deneyin.';
        }
    });
});
