function SearchInput({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="task-search">Search tasks</label>
      <input
        id="task-search"
        type="search"
        placeholder="Type a title..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default SearchInput