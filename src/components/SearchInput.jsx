function SearchInput() {
  return (
    <div className="field">
      <label htmlFor="task-search">Search tasks</label>
      <input
        id="task-search"
        type="search"
        placeholder="Search by title"
      />
    </div>
  )
}

export default SearchInput
