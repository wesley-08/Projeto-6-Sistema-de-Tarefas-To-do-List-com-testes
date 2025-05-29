import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListaTarefas from '../components/ListaTarefas';

test('renderiza input e botão corretamente', () => {
  render(<ListaTarefas />);
  expect(screen.getByPlaceholderText(/nova tarefa/i)).toBeInTheDocument();
  expect(screen.getByText(/adicionar/i)).toBeInTheDocument();
});

test('adiciona tarefa à lista', () => {
  render(<ListaTarefas />);
  const input = screen.getByPlaceholderText(/nova tarefa/i);
  const botao = screen.getByText(/adicionar/i);

  fireEvent.change(input, { target: { value: 'Estudar React' } });
  fireEvent.click(botao);

  expect(screen.getByText(/estudar react/i)).toBeInTheDocument();  
});
