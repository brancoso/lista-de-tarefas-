/**
 * @param string id
 * @param string descricao
 * @param bool concluida 
 */
export let banco = [];

export function criarTarefa(id, descricao, concluida = false) {
  const existeId = banco.some(tarefa => tarefa.id == id);
  if (!existeId) {
    const dados = {
      id: id,
      descricao: descricao,
      concluida: concluida
    };
    banco.push(dados);
  } else {
    console.log(`A tarefa com o ID $ {id}ja existe!`);
  }
}

export function listarTarefas() {
  console.log(banco);
}

export function concluirTarefa(id) {
  banco.forEach(tarefa => {
    if (tarefa.id == id) {
      tarefa.concluida = !tarefa.concluida;
    }
  });
}

export function editarTarefa(id, descricao) {
  banco.forEach((tarefa) => {
    if (tarefa.id == id) {
      tarefa.descricao = descricao;
    }
  });
}

export function excluirTarefa(id) {
  banco.splice((parseInt(id) - 1), 1);
}
