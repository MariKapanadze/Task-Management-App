import TaskCard from './TaskCard'
import '../styles/task-list.css'
import EmptyState from './EmptyState'

function TaskList({ tasks }) {
  if (tasks.length === 0) {
  return (
    <EmptyState
      title="No tasks yet"
      message="Add your first task to get started."
    />
  )
 }
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
      </ul>
  )
}

export default TaskList