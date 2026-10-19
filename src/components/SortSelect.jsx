function SortSelect({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="sort-order">Sort by</label>
      <select
        id="sort-order"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="asc">Due date: earliest first</option>
        <option value="desc">Due date: latest first</option>
      </select>
    </div>
  )
}

export default SortSelect