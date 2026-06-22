async function fetchUsers() {
    try {
    // A URL deve ser uma string limpa
    const response = await
    fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
    throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
    
    } catch (error) {
    // Exibe o erro real no console para depuração
    console.error('Erro ao buscar usuários:', error);
    }
    }
    /**
    * Renderiza a lista de usuários no HTML
    */
    function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpa a lista existente
    users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    // Configura o clique para mostrar detalhes
    listItem.onclick = () => showUserDetails(user);
    userList.appendChild(listItem);
    });
    }
    /**
    * Exibe os detalhes do usuário selecionado
    */
    function showUserDetails(user) {
    const userDetails = document.getElementById('user-details');
    // Inserção dinâmica de dados usando template strings
    userDetails.innerHTML = `
    <h2>${user.name}</h2>
    <p>Email: ${user.email}</p>
    <p>Phone: ${user.phone}</p>
    <p>Website: <a href="http://${user.website}"
    target="_blank">${user.website}</a></p>
    <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
    }
    // Executa a função inicial
    fetchUsers();