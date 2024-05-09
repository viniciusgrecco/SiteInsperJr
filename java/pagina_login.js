document.addEventListener('DOMContentLoaded', function() {
  // Verifica se o elemento com o ID 'cliente' existe antes de adicionar o ouvinte de eventos
  var botaoCliente = document.getElementById('cliente');
  if (botaoCliente) {
      botaoCliente.addEventListener('click', function() {
          window.location.href = 'pagina_cliente.html';
      });
  }

  // Verifica se o elemento com o ID 'funcionario' existe antes de adicionar o ouvinte de eventos
  var botaoFuncionario = document.getElementById('funcionario');
  if (botaoFuncionario) {
      botaoFuncionario.addEventListener('click', function() {
          window.location.href = 'pagina_funcionario.html';
      });
  }
});
