import { useState } from 'react'
import TaskToolbar from '../components/TaskToolbar'
import TaskList from '../components/TaskList'
import { filterAndSortTasks } from '../services/taskFilters'
import '../styles/home.css'

function TasksPage({ tasks, onDeleteTask, onStatusChange }) {
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [assigneeFilter, setAssigneeFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('asc')

  const assignees = [...new Set(tasks.map((task) => task.assignee))]

  const visibleTasks = filterAndSortTasks(tasks, {
    searchText,
    statusFilter,
    assigneeFilter,
    sortOrder,
  })

  const hasActiveFilters =
    searchText.trim() !== '' || statusFilter !== 'all' || assigneeFilter !== 'all'

  function handleClearFilters() {
    setSearchText('')
    setStatusFilter('all')
    setAssigneeFilter('all')
    setSortOrder('asc')
  }

  return (
    <main className="page">
      <h1>Tasks</h1>
      <TaskToolbar
        searchText={searchText}
        onSearchChange={setSearchText}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        assigneeFilter={assigneeFilter}
        onAssigneeChange={setAssigneeFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        assignees={assignees}
        onClear={handleClearFilters}
      />
      <p className="results-count" aria-live="polite">
        Found {visibleTasks.length} {visibleTasks.length === 1 ? 'task' : 'tasks'}
      </p>

      <TaskList
        tasks={visibleTasks}
        onDeleteTask={onDeleteTask}
        onStatusChange={onStatusChange} 
        emptyTitle={hasActiveFilters ? 'No tasks match your filters' : 'No tasks yet'}
        emptyMessage={
          hasActiveFilters
            ? 'Try a different search or clear the filters.'
            : 'Add your first task to get started.'
        }
      />
    </main>
  )
}

export default TasksPage