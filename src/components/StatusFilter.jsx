function StatusFilter({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="status-filter">Status</label>
      <select
        id="status-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">All statuses</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  )
}

export default StatusFilter