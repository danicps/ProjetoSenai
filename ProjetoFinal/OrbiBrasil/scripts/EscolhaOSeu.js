document.getElementById('finalizePlan').addEventListener('click', () => {
  const travelDate = document.getElementById('travelDate').value;
  const budget = parseFloat(document.getElementById('budget').value);
  const season = document.getElementById('season').value;
  const hotel = document.getElementById('hotelSort').value;
  const destination = document.getElementById('destination').value;

  if (!travelDate || !budget || !season || !hotel || !destination) {
      alert('Por favor, preencha todos os campos!');
      return;
  }

  const estimatedCosts = {
      "Jalapão": 3000,
      "Bonito": 4000,
      "Canela": 2500,
      "Foz do Iguaçu": 3500,
      "Porto de Galinhas": 4500,
      "Jericoacoara": 5000,
      "Campos do Jordão": 2800,
      "Lençóis Maranhenses": 3800,
      "São Miguel dos Milagres": 4200,
      "Fernando de Noronha": 7000
  };

  const localTips = {
      "Jalapão": "Explore as dunas e cachoeiras do Parque Estadual do Jalapão.",
      "Bonito": "Não perca o passeio pela Gruta do Lago Azul.",
      "Canela": "Visite a famosa Catedral de Pedra e o Parque do Caracol.",
      "Foz do Iguaçu": "As Cataratas do Iguaçu são imperdíveis!",
      "Porto de Galinhas": "Passeio de jangada pelas piscinas naturais é obrigatório.",
      "Jericoacoara": "Aprecie o pôr do sol na Duna do Pôr do Sol.",
      "Campos do Jordão": "Passeie pelo Horto Florestal e aprecie o chocolate local.",
      "Lençóis Maranhenses": "Explore as lagoas cristalinas como Lagoa Azul e Lagoa Bonita.",
      "São Miguel dos Milagres": "Mergulhe nas piscinas naturais durante a maré baixa.",
      "Fernando de Noronha": "A Baía do Sancho é um dos melhores pontos para snorkeling."
  };

  const totalCost = estimatedCosts[destination] || 0;

  const summary = `
      <h2>Resumo do Planejamento</h2>
      <p><strong>Data da Viagem:</strong> ${travelDate}</p>
      <p><strong>Orçamento Disponível:</strong> R$ ${budget.toFixed(2)}</p>
      <p><strong>Destino Escolhido:</strong> ${destination}</p>
      <p><strong>Estação do Ano:</strong> ${season}</p>
      <p><strong>Opção de Hospedagem:</strong> ${hotel}</p>
      <p><strong>Orçamento Estimado:</strong> R$ ${totalCost.toFixed(2)}</p>
      <p><strong>Dica Local:</strong> ${localTips[destination]}</p>
  `;

  const summaryDiv = document.getElementById('summary');
  summaryDiv.innerHTML = summary;
  summaryDiv.style.display = 'block';

  alert('Obrigada por planejar com a gente!');
});
