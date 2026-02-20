let wrongAttempts = 0;

// Переход между полями ввода
function moveToNext(current, nextId) {
    if (current.value.length === 1) {
        document.getElementById(nextId)?.focus();
    }
    checkPassword();
}

// Проверка пароля (4 цифры: 0510)
function checkPassword() {
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const pass3 = document.getElementById('pass3').value;
    const pass4 = document.getElementById('pass4').value;

    if (pass1 && pass2 && pass3 && pass4) {
        const entered = pass1 + pass2 + pass3 + pass4;
        
        if (entered === '0510') {
            window.location.href = 'video.html';
        } else {
            // Показываем сообщение об ошибке
            document.getElementById('error-message').style.display = 'block';
            
            // Увеличиваем счётчик ошибок
            wrongAttempts++;
            
            // После первой ошибки показываем подсказку
            if (wrongAttempts >= 1) {
                document.getElementById('hint').style.display = 'block';
            }
            
            // Очистка полей
            document.getElementById('pass1').value = '';
            document.getElementById('pass2').value = '';
            document.getElementById('pass3').value = '';
            document.getElementById('pass4').value = '';
            document.getElementById('pass1').focus();
        }
    }
}

// Показать второе модальное окно
function showPasswordModal() {
    document.getElementById('modal1').classList.remove('active');
    document.getElementById('modal2').classList.add('active');
    document.getElementById('pass1').focus();
}

// Обработка Enter в последнем поле
document.getElementById('pass4')?.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') checkPassword();
});

// Защита от ввода не-цифр
document.querySelectorAll('.pass-input').forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 1);
    });
});