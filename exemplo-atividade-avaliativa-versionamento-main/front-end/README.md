# 💻 Desenvolvimento Front-end

## 📝 Descrição do Projeto/Atividade
o app pega temperatura, descrição do clima e nome da cidade vindos do JSON e exibe isso dentro do bloco (card) que estava inicialmente escondido

---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
index.html cria a interface: título, campo para digitar uma cidade e um botão “Buscar”. Quando você clica, a função buscarClima() faz uma requisição para a API do OpenWeatherMap, usando a cidade informada.

Se a resposta for válida, o app pega temperatura, descrição do clima e nome da cidade vindos do JSON e exibe isso dentro do bloco (card) que estava inicialmente escondido.

Se der erro (cidade inválida ou falha na requisição), mostra um alert e registra o erro no console.

style.css só dá aparência: define fonte, centraliza o conteúdo, aplica cores de fundo e estilo para o input, botão e para o card do resultado (com sombra e bordas arredondadas).

### 2. Para que serve (Por que aprendi)?
o app pega temperatura, descrição do clima e nome da cidade vindos do JSON e exibe isso dentro do bloco (card) que estava inicialmente escondido. Se der erro (cidade inválida ou falha na requisição), mostra um alert e registra o erro no console.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
functions.read_file para ler o conteúdo de index.html e style.css
functions.attempt_completion para finalizar a resposta (e opcionalmente tentar abrir o HTML)

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
[Insira aqui um trecho de código CSS, JS ou HTML que foi crucial para a estrutura ou lógica do projeto, comentando as linhas mais importantes. Exemplo:]
```javascript
<script>
async function buscarClima() {
  // Pega o que o usuário digitou e “protege” caracteres especiais na URL
  const cidade = encodeURIComponent(document.getElementById("cidade").value);

  // Chave da API (usada para autenticar a chamada)
  const apiKey = "08c607e90701f85498aa7e5dcde273ca";

  // Monta a URL da API: cidade (q), unidades em °C (metric) e idioma PT-BR
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    // Faz a requisição HTTP e converte a resposta para JSON
    const response = await fetch(url);
    const data = await response.json();

    // Se a API retornar erro, avisa e para
    if (data.cod !== 200) {
      alert("Erro: " + data.message);
      return;
    }

    // Extrai os campos do retorno
    const temp = data.main.temp;                 // temperatura
    const desc = data.weather[0].description;   // descrição do clima
    const nome = data.name;                     // nome da cidade

    // Mostra o “card” do resultado e preenche os textos
    document.getElementById("resultado").style.display = "block";
    document.getElementById("nomeCidade").innerText = nome;
    document.getElementById("temperatura").innerText = `🌡️ ${temp} °C`;
    document.getElementById("descricao").innerText = `☁️ ${desc}`;

  } catch (erro) {
    // Trata falhas de rede/execução
    alert("Erro ao buscar dados!");
    console.error(erro);
  }
}
</script>

```

### Instruções para Executar
1.Abra o arquivo index.html diretamente no navegador.
OU
2) No VS Code, instale/ative a extensão Live Server e clique em “Go Live”.

Ao abrir, digite uma cidade e clique em Buscar para carregar a temperatura/descrição via OpenWeatherMap.
