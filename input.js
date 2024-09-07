const searchInput = document.getElementById('campo-pesquisa');
const countries = paises.map(pais => pais.titulo);

// Função para embaralhar um array de forma aleatória
function shuffleArray(array) {
  // Itera sobre o array de trás para frente
  for (let i = array.length - 1; i > 0; i--) {
    // Gera um índice aleatório entre 0 e o índice atual
    const j = Math.floor(Math.random() * (i + 1));

    // Troca os elementos de posição
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Embaralha a lista de países
shuffleArray(countries);

let countryIndex = 0;

// Função para alterar o placeholder do campo de pesquisa
function changePlaceholder() {
  // Define o novo placeholder com o próximo país da lista embaralhada
  searchInput.placeholder = "Que tal procurar por: " + countries[countryIndex];

  // Incrementa o índice e o reinicia caso ultrapasse o tamanho do array
  countryIndex = (countryIndex + 1) % countries.length;
}

// Chama a função changePlaceholder a cada segundo
setInterval(changePlaceholder, 1000);