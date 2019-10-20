window.addEventListener('DOMContentLoaded', () => {
   const buttonsContainer = document.querySelector('.buttons-wrap');
console.log('buttons-wrap', buttonsContainer)
    buttonsContainer.innerHTML = '<button class="button button_yellow" type="button">Да</button>' +
        '<button class="button">Нет</button>';
    
});
