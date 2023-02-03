import { banco } from './main.mjs';

const todoListElemento = document.querySelector('.todolist');

export const todoList = () => {
  return {
    renderizar: () => {
      /**
       * Remove todos os itens atuais
       */
      todoListElemento.innerHTML = '';

      banco.map(({ id, descricao, concluida }) => {
        console.log({ id, descricao, concluida});

        const markAsDone = concluida
          ? 'style="text-decoration: line-through;"'
          : 'style="text-decoration: solid;"';

        const templateTodoListItem = `
          <div class="todolist_item" data-id="${id}" data-done="${concluida}" ${markAsDone}>
            ${descricao}
          </div>
        `;

        todoListElemento.innerHTML += templateTodoListItem;
      });
    }
  };
};
