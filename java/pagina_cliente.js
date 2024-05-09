function createCalendar() {
  const container = document.getElementById('calendar');
  let currentMonth = 4; // Maio como 4
  let currentYear = 2024; // Ano fixo para exemplo
  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  
  const header = document.createElement('header');
  const prevBtn = document.createElement('button');
  prevBtn.textContent = '<';
  const nextBtn = document.createElement('button');
  nextBtn.textContent = '>';
  const monthTitle = document.createElement('h2');
  updateMonthTitle();

  prevBtn.onclick = function() {
    if (currentMonth > 0) {
      currentMonth--;
    } else {
      currentMonth = 11;
      currentYear--;
    }
    updateMonthTitle();
    updateCalendarDays();
  };
  nextBtn.onclick = function() {
    if (currentMonth < 11) {
      currentMonth++;
    } else {
      currentMonth = 0;
      currentYear++;
    }
    updateMonthTitle();
    updateCalendarDays();
  };

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.appendChild(thead);
  table.appendChild(tbody);
  header.appendChild(prevBtn);
  header.appendChild(monthTitle);
  header.appendChild(nextBtn);
  container.appendChild(header);
  container.appendChild(table);

  function updateMonthTitle() {
    monthTitle.textContent = `${months[currentMonth]} ${currentYear}`;
  }

  function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
  }

  function updateCalendarDays() {
    tbody.innerHTML = ''; // Clear previous rows
    const daysCount = daysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    
    let date = 1;
    for (let i = 0; i < 6; i++) { // Ensure enough rows for all days
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
        if (i === 0 && j < firstDay) {
          cell.textContent = ""; // Fill empty cells at start
        } else if (date <= daysCount) {
          cell.textContent = date;
          cell.onclick = function() {
            if (cell.classList.contains('selected')) {
              cell.classList.remove('selected');
            } else {
              if (document.querySelector('.selected')) {
                document.querySelector('.selected').classList.remove('selected');
              }
              cell.classList.add('selected');
            }
          };
          date++;
        }
        row.appendChild(cell);
      }
      tbody.appendChild(row);
      if (date > daysCount) break; // Stop adding rows when all days are filled
    }
  }

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const row = document.createElement('tr');
  daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    row.appendChild(th);
  });
  thead.appendChild(row);

  updateCalendarDays(); // Initial call to fill days
}

document.addEventListener('DOMContentLoaded', createCalendar);

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('confirmButton').addEventListener('click', function() {
    const procedure = document.getElementById('procedure');
    const time = document.getElementById('time');
    const selectedDay = document.querySelector('#calendar .selected');
    const monthTitle = document.querySelector('#calendar header h2').textContent;

    if (!procedure.value || !time.value || !selectedDay) {
      alert('Por favor, selecione um procedimento, um horário e um dia.');
    } else {
      // Construindo a mensagem com todos os detalhes
      const confirmationMessage = `Consulta agendada com sucesso para: 
        \nDia: ${selectedDay.textContent} de ${monthTitle}
        \nHorário: ${time.options[time.selectedIndex].text}
        \nProcedimento: ${procedure.options[procedure.selectedIndex].text}`;

      alert(confirmationMessage);

      // Reset dos campos após agendamento
      procedure.selectedIndex = 0;
      time.selectedIndex = 0;
      if (selectedDay) {
        selectedDay.classList.remove('selected');
      }
    }
  });
});



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

function redirectToWhatsApp() {
  var phoneNumber = '5512991380880'; // WhatsApp phone number in full international format without any punctuation
  var message = "Olá, gostaria de remarcar minha consulta para outro dia"; // Message to be sent
  var encodedMessage = encodeURIComponent(message); // Encoding the message to make it URL-safe
  var whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Constructing the full URL for WhatsApp
  
  window.location.href = whatsappUrl; // Redirecting to WhatsApp
}




