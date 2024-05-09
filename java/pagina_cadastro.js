// Verifique se o DOM está totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o formulário pelo seu ID
    var formCadastro = document.getElementById('cadastro-form');

    // Adiciona um ouvinte de evento para o envio do formulário
    formCadastro.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Implemente aqui a lógica de validação e envio dos dados ao servidor, se necessário

        // Redireciona para a página de login
        window.location.href = 'pagina_login.html';
    });
});
