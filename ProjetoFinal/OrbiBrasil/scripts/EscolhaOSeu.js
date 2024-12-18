const mustVisitPlaces = {
  "jalapao": ["Fervedouros", "Cachoeira do Formiga", "Dunas do Jalapão"],
  "bonito": ["Gruta do Lago Azul", "Rio da Prata", "Balneário Municipal"],
  "canela": ["Catedral de Pedra", "Parque do Caracol", "Mundo a Vapor"],
  "foz-do-iguacu": ["Cataratas do Iguaçu", "Parque das Aves", "Itaipu Binacional"],
  "porto-de-galinhas": ["Piscinas Naturais", "Praia dos Carneiros", "Pontal de Maracaípe"],
  "jericoacoara": ["Pedra Furada", "Lagoa do Paraíso", "Duna do Pôr do Sol"],
  "campos-do-jordao": ["Morro do Elefante", "Amantikir", "Palácio Boa Vista"],
  "lencois-maranhenses": ["Lagoa Azul", "Lagoa Bonita", "Rio Preguiças"],
  "sao-miguel-dos-milagres": ["Praia do Toque", "Praia de São Miguel dos Milagres", "Piscinas Naturais"],
  "fernando-de-noronha": ["Baía do Sancho", "Baía dos Porcos", "Praia do Leão"]
};

const form = document.getElementById('travelForm');
const results = document.getElementById('results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const destination = form.destination.value;
  const budget = form.budget.value;
  const travelDate = form.travelDate.value;
  const hotelSort = form.hotelSort.value;

  // Locais indispensáveis
  const mustVisitList = mustVisitPlaces[destination];
  const mustVisitElement = document.getElementById('resultMustVisit');
  mustVisitElement.innerHTML = "";
  mustVisitList.forEach(place => {
    const li = document.createElement('li');
    li.textContent = place;
    mustVisitElement.appendChild(li);
  });

  // Integração com OpenWeatherMap
  const weather = await fetchWeather(destination);

  // Cálculo de custo total estimado
  const totalCost = (budget * 0.9).toFixed(2);

  // Preenchendo os resultados
  document.getElementById('resultDestination').innerText = destination;
  document.getElementById('resultBudget').innerText = budget;
  document.getElementById('resultDate').innerText = travelDate;
  document.getElementById('resultHotelSort').innerText = hotelSort === "cheap-to-expensive" ? "Mais baratos para mais caros" : "Mais caros para mais baratos";
  document.getElementById('resultWeather').innerText = weather || "Não foi possível obter a previsão do tempo.";
  document.getElementById('resultTotalCost').innerText = totalCost;

  // Exibindo os resultados
  results.style.display = 'block';
});

async function fetchWeather(destination) {
  const apiKey = ""; // Substitua pela sua chave da API OpenWeatherMap
  const cities = {
    "jalapao": "Palmas",
    "bonito": "Bonito",
    "canela": "Canela",
    "foz-do-iguacu": "Foz do Iguaçu",
    "porto-de-galinhas": "Ipojuca",
    "jericoacoara": "Jijoca de Jericoacoara",
    "campos-do-jordao": "Campos do Jordão",
    "lencois-maranhenses": "Barreirinhas",
    "sao-miguel-dos-milagres": "São Miguel dos Milagres",
    "fernando-de-noronha": "Fernando de Noronha"
  };
}

const city = cities[destination];
try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apiKey}&units=metric`);
  const data = response.json();
  return `Temperatura: ${data.main.temp}°C, Condição: ${data.weather[0].description}`;
} catch (error) {
  console.error('Erro ao buscar dados do clima:', error);
}