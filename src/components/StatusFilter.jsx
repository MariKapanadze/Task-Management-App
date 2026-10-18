function StatusFilter() {
  return (
    <div className="field">
      <label htmlFor="status-filter">Status</label>
      <select id="status-filter" defaultValue="all">
        <option value="all">All statuses</option>
        <option value="...">To Do</option>
        <option value="...">In Progress</option>
        <option value="...">Done</option>
      </select>
    </div>
  )
}

export default StatusFilter

