// Модальное окно
const modal = document.getElementById('modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const closeModal = document.querySelector('.close-btn');

// Открыть модальное окно
modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = "flex";
    });
});

// Закрыть модальное окно
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// Кнопки для показа и скрытия подробностей
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const details = btn.previousElementSibling;
        if (details.style.display === 'block') {
            details.style.display = 'none';
            btn.textContent = 'Показать подробности';
        } else {
            details.style.display = 'block';
            btn.textContent = 'Скрыть подробности';
        }
    });
});
