import React, { useState } from 'react';
import './Lista.css';
import './style.css';

const ListaTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim()) {
      setLista([...lista, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div className='div'>
    <div className="lista-container">
      <h2><strong> 🗃️Lista de Tarefas</strong></h2>
      <input
        placeholder="Nova tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        data-testid="input-tarefa"
      />
      <button
        onClick={adicionarTarefa}
        data-testid="botao-adicionar"
      >
        Adicionar
      </button>
      <ul>
        {lista.map((item, index) => (
          <li key={index} data-testid="item-tarefa">• {item}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ListaTarefas;
