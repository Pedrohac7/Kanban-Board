const tarefas = {
  todo: [],
  doing: [],
  done: []
};

function adicionarTarefa(status) {
  const texto = prompt("Digite a descrição da tarefa:");
  if (texto) {
    tarefas[status].push(texto);
    mostrarTarefas();
  }
}

function mostrarTarefas() {
  ['todo', 'doing', 'done'].forEach(status => {
    const ul = document.getElementById(`${status}-list`);
    ul.innerHTML = ''; // limpa a lista

    tarefas[status].forEach(tarefa => {
      const li = document.createElement('li');
      li.textContent = tarefa;
      ul.appendChild(li);
    });
  });
}

// inicializa a tela
mostrarTarefas();
