import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import AddTodo from "./AddTodo";

// Componente TodoList: rappresenta la lista di todos
export default function TodoList() {
  // Funzione per recuperare i todos dal localStorage
  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { text: "Learn React", done: false },
          { text: "Build a Todo App", done: false },
          { text: "Master React", done: false },
        ];
  };

  // Stato dell'array di todos, inizializzato dal localStorage
  const [todos, setTodos] = useState(getInitialTodos);

  // Stato per il nuovo todo
  const [newTodo, setNewTodo] = useState("");

  // Stato per la barra di ricerca
  const [searchTerm, setSearchTerm] = useState("");

  // Stato per la checkbox "Mostra solo completati"
  const [showCompleted, setShowCompleted] = useState(false);

  // Effetto per salvare i todos nel localStorage ogni volta che cambiano
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Funzione per gestire il toggle dello stato "done"
  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Funzione per cancellare un todo
  const deleteTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  // Funzione per aggiungere un nuovo todo
  const addTodo = () => {
    if (newTodo.trim() === "") return; // Ignora l'aggiunta se l'input è vuoto
    setTodos([...todos, { text: newTodo, done: false }]);
    setNewTodo(""); // Resetta l'input dopo l'aggiunta
  };

  // Filtrare i todo in base al termine di ricerca e allo stato della checkbox
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDone = showCompleted ? todo.done : true;
    return matchesSearch && matchesDone;
  });

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        showCompleted={showCompleted}
        setSearchTerm={setSearchTerm}
        setShowCompleted={setShowCompleted}
      />

      {/* Tabella dei todo filtrati */}
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onToggle={() => toggleTodo(index)}
              onDelete={() => deleteTodo(index)}
            />
          ))}
        </tbody>
      </table>

      {/* Form per aggiungere nuovi todo */}
      <AddTodo newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
    </div>
  );
}
