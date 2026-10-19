import SearchInput from './SearchInput'
import StatusFilter from './StatusFilter'
import AssigneeFilter from './AssigneeFilter'
import SortSelect from './SortSelect'
import Button from './Button'
import '../styles/task-toolbar.css'
import { useNavigate } from 'react-router-dom'

function TaskToolbar({
  searchText,
  onSearchChange,
  statusFilter,
  onStatusChange,
  assigneeFilter,
  onAssigneeChange,
  sortOrder,
  onSortChange,
  assignees,
  onClear,
}) {
  const navigate = useNavigate()
  return (
    <section className="task-toolbar" aria-label="Task controls">
      <div className="task-toolbar__filters">
        <SearchInput value={searchText} onChange={onSearchChange} />
        <StatusFilter value={statusFilter} onChange={onStatusChange} />
        <AssigneeFilter
          value={assigneeFilter}
          onChange={onAssigneeChange}
          assignees={assignees}
        />
        <SortSelect value={sortOrder} onChange={onSortChange} />
        <Button variant="secondary" onClick={onClear}>Clear filters</Button>
      </div>
     <Button onClick={() => navigate('/tasks/new')}>Add new task</Button>
    </section>
  )
}

export default TaskToolbar