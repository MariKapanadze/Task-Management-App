function AssigneeFilter({ value, onChange, assignees }) {
  return (
    <div className="field">
      <label htmlFor="assignee-filter">Assignee</label>
      <select
        id="assignee-filter"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="all">All assignees</option>
        {assignees.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default AssigneeFilter