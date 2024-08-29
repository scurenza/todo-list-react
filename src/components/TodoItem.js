// Componente TodoItem: rappresenta un singolo todo
export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <tr>
      <td>{todo.text}</td>
      <td>
        <button onClick={onToggle}>{todo.done ? "Done" : "Not Done"}</button>
      </td>
      <td>
        <button onClick={onDelete}>Cancel</button>
      </td>
    </tr>
  );
}
