function adicionarTarefa() {
    const novaTarefa = document.getElementById("novaTarefa").value;
    if (novaTarefa) {
        const listaTarefas = document.getElementById("listaTarefas");
        const itemTarefa = document.createElement("li");
        itemTarefa.textContent = novaTarefa;

        // Marcador de conclusão (opcional)
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            itemTarefa.classList.toggle("concluido");
        }
        itemTarefa.appendChild(checkbox);

        // Botão de remover (opcional)
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = function() {
            listaTarefas.removeChild(itemTarefa);
        }
        itemTarefa.appendChild(botaoRemover);

        listaTarefas.appendChild(itemTarefa);
        document.getElementById("novaTarefa").value = "";
    }
}