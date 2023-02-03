import { todoList } from "./lib/todo-list.mjs";
import { banco, concluirTarefa } from "./lib/main.mjs";
import { criarTarefa } from "./lib/main.mjs";
 
const formTarefa = document.querySelector('#tarefa_form');
const nomeTarefa = document.querySelector('#nome_input');
const todoListElement = document.querySelectorAll('.todolist');

const todo = todoList();

function handleSubmit(event) {
    /**
     * Trava a atualização da página e o envio para o servidor
     */
    event.preventDefault();

    /**
     * Pega o valor atual do input
     */
    let tarefa = nomeTarefa.value;

    const lastItem = banco.length - 1;
    criarTarefa(lastItem + 1, tarefa);
    todo.renderizar();
    tarefa = '';
}

formTarefa.addEventListener('submit', handleSubmit);

// function handleClick(event) {
//     const id = event.target.dataset.id;
//     concluirTarefa(id);
//     todo.renderizar();
// }

for(const todoItem of todoListElement) {  
    todoItem.addEventListener('click', (event) => {
      concluirTarefa(event.target.dataset.id);
      todo.renderizar();
    });
}
