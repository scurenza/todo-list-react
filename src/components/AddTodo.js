export default function AddTodo({ newTodo, setNewTodo, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
