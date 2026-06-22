# ⚙️ Desenvolvimento Back-end

## 📝 Descrição do Projeto/Atividade
O projeto é uma página HTML simples que:
Busca usuários em https://jsonplaceholder.typicode.com/users
Renderiza uma lista com user.name
Ao clicar num item, exibe detalhes com innerHTML (nome, email, phone, website e endereço).


---

## 🧠 Reflexão de Aprendizado

### 1. O que aprendi?
O projeto é uma página HTML simples que:
Busca usuários em https://jsonplaceholder.typicode.com/users
Renderiza uma lista com user.name
Ao clicar num item, exibe detalhes com innerHTML (nome, email, phone, website e endereço).
Código atual (no script.js) funciona, mas tem pontos a melhorar:
fetch é feito diretamente sem mensagem de “carregando” e sem tratamento de UI para erro.
innerHTML com template string pode ser arriscado se a origem não for totalmente confiável (melhor usar criação de nós/textContent).
Falta organizar/definir funções mais robustas e/ou indicar estado (carregando/erro).

### 2. Para que serve (Por que aprendi)?
O projeto é uma página HTML simples que:
Busca usuários em https://jsonplaceholder.typicode.com/users
Renderiza uma lista com user.name
Ao clicar num item, exibe detalhes com innerHTML (nome, email, phone, website e endereço).
Código atual (no script.js) funciona, mas tem pontos a melhorar:
fetch é feito diretamente sem mensagem de “carregando” e sem tratamento de UI para erro.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas
*   Node.js
*   Express
*   TypeScript
*   [Outra biblioteca ou ferramenta, ex: JWT, bcryptjs, Prisma, SQLite]

---

## 💻 Demonstração e Como Rodar

### Código Relevante Comentado
[Insira aqui um trecho de código do servidor ou rotas que foi crucial para a lógica da aplicação, comentando as linhas mais importantes. Exemplo:]
```javascript
async function fetchUsers() {
    const userList = document.getElementById('user-list');
    const userDetails = document.getElementById('user-details');

    // Estado inicial
    userList.innerHTML = '';
    userDetails.textContent = 'Carregando usuários...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const users = await response.json();
        displayUsers(users);
        userDetails.textContent = 'Clique em um nome para ver os detalhes.';
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        userDetails.textContent = 'Não foi possível carregar os usuários. Tente novamente mais tarde.';
    }
}


```

### Instruções para Executar
1. Instale as dependências na pasta do projeto:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente necessárias em um arquivo `.env` (se aplicável).
3. Execute o script de inicialização do servidor:
   ```bash
   npm start
   # ou para modo de desenvolvimento:
   npm run dev
   ```
4. Teste as rotas utilizando uma ferramenta de requisições HTTP (como Postman, Insomnia ou a extensão Thunder Client do VS Code).
