import TaskCard from './TaskCard'
import EmptyState from './EmptyState'
import '../styles/task-list.css'

function TaskList({
  tasks,
  onDeleteTask,
  onStatusChange,
  emptyTitle,
  emptyMessage,
}) {
  if (tasks.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard
            task={task}
            onDelete={onDeleteTask}
            onStatusChange={onStatusChange}
          />
        </li>
      ))}
    </ul>
  )
}

export default TaskList