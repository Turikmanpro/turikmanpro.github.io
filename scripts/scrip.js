function resetInput() {
    document.getElementById('inputField').value = '';}

function highlight(button) {
            // Убираем подсветку со всех кнопок
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(btn => btn.classList.remove('highlight'));
            
            // Добавляем подсветку на нажатую кнопку
            button.classList.add('highlight');
        }
function openModal() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}