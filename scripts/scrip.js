function resetInput() {
    document.getElementById('inputField').value = '';}

function highlight(button) {
            // Убираем подсветку со всех кнопок
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(btn => btn.classList.remove('highlight'));
            
            // Добавляем подсветку на нажатую кнопку
            button.classList.add('highlight');
        }