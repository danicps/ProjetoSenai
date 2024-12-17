function showDetails() {
  const destination = document.getElementById('destination').value;
  const budget = document.getElementById('budget').value;
  const results = document.getElementById('results');

  // Dados fictícios
  const data = {
    rio: {
      description: "Rio de Janeiro, cidade maravilhosa! Praias, pontos turísticos e uma vista de tirar o fôlego.",
      hospedagem: budget === "baixo" ? "Hostel Praia RJ" : budget === "medio" ? "Hotel Copacabana" : "Resort Luxo RJ",
      voo: "Companhia A - R$ 500",
      alimentacao: "Restaurante Bossa Nova"
    },
    salvador: {
      description: "Salvador, o coração da Bahia! Cultura, história e belas praias.",
      hospedagem: budget === "baixo" ? "Pousada Baiana" : budget === "medio" ? "Hotel Pelourinho" : "Resort Salvador Luxo",
      voo: "Companhia B - R$ 600",
      alimentacao: "Restaurante Acarajé Gourmet"
    },
    florianopolis: {
      description: "Florianópolis, conhecida como Ilha da Magia! Perfeita para descansar e curtir.",
      hospedagem: budget === "baixo" ? "Hostel Lagoa" : budget === "medio" ? "Hotel Beira-Mar" : "Resort Florianópolis Prime",
      voo: "Companhia C - R$ 700",
      alimentacao: "Restaurante Peixe Frito"
    }
  };

  // Gerar conteúdo
  if (data[destination]) {
    const lugar = data[destination];
    results.innerHTML = `
      <div class="col-md-8">
        <div class="card info-card p-3">
          <h3 class="text-primary">${destination.charAt(0).toUpperCase() + destination.slice(1)}</h3>
          <p><strong>Descrição:</strong> ${lugar.description}</p>
          <p><strong>Hospedagem:</strong> ${lugar.hospedagem}</p>
          <p><strong>Voo Recomendado:</strong> ${lugar.voo}</p>
          <p><strong>Locais para Alimentação:</strong> ${lugar.alimentacao}</p>
        </div>
      </div>
    `;
  } else {
    results.innerHTML = "<p class='text-danger text-center'>Nenhum resultado encontrado.</p>";
  }
}


