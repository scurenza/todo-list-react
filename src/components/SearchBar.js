export default function SearchBar({
  searchTerm,
  setSearchTerm,
  showCompleted,
  setShowCompleted,
}) {
  return (
    <div>
      {/* Barra di ricerca */}
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Checkbox per mostrare solo i todo completati */}
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        Show Completed Only
      </label>
    </div>
  );
}
