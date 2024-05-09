function transformToInput(element) {
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'notice-input';
    input.placeholder = 'Digite seu aviso aqui...'; // Placeholder enquanto o input está ativo

    // Armazena o texto original em caso de não querer mudanças
    var originalText = element.textContent;

    input.onblur = function() {
        finalizeInput(this, element, originalText);
    };

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.blur(); // Chama o evento onblur ao pressionar Enter
        }
    });

    element.parentNode.replaceChild(input, element);
    input.focus(); // Foca no input para digitação imediata

    element.onclick = null; // Remove o evento de clique para evitar repetições
}

function finalizeInput(inputElement, buttonElement, originalText) {
    buttonElement.textContent = originalText; // Restaura o texto original
    buttonElement.onclick = function() { transformToInput(buttonElement); };
    inputElement.parentNode.replaceChild(buttonElement, inputElement);
}



document.addEventListener('DOMContentLoaded', function() {
    const checkBoxes = document.querySelectorAll('.check-box');

    checkBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            if (this.classList.contains('checked')) {
                // Se já estiver marcada, remove a marcação
                this.classList.remove('checked');
                this.style.backgroundImage = '';
            } else {
                // Se não estiver marcada, adiciona a marcação
                this.classList.add('checked');
                this.style.backgroundImage = "url('../img/simbolo-check-redondo.png')";
                this.style.backgroundRepeat = 'no-repeat';
                this.style.backgroundPosition = 'center center';
                this.style.backgroundSize = '80% 80%';
            }
        });
    });
});

