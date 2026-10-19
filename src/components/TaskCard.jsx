import { useNavigate, Link } from 'react-router-dom'
import Button from './Button'
import StatusBadge from './StatusBadge'
import '../styles/task-card.css'

function TaskCard({ task, onDelete, onStatusChange }) {
  const navigate = useNavigate()

  return (
    <article className="task-card">
      <header className="task-card__header">
        <h2 className="task-card__title">
          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
        </h2>
        <StatusBadge status={task.status} />
      </header>

      <p className="task-card__description">{task.description}</p>

      <dl className="task-card__meta">
        <div>
          <dt>Assignee</dt>
          <dd>{task.assignee}</dd>
        </div>
        <div>
          <dt>Due date</dt>
          <dd>
            <time dateTime={task.dueDate}>{task.dueDate}</time>
          </dd>
        </div>
      </dl>

      <div className="field">
        <label htmlFor={`status-${task.id}`}>Change status</label>
        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={(event) => onStatusChange(task.id, event.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="task-card__actions">
        <Button
          variant="secondary"
          onClick={() => navigate(`/tasks/${task.id}/edit`)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </article>
  )
}

export default TaskCard