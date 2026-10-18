import Button from './Button'
import StatusBadge from './StatusBadge'
import '../styles/task-card.css'

function TaskCard({ task }) {
  return (
    <article className="task-card">
      <header className="task-card__header">
        <h2 className="task-card__title">{task.title}</h2>
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

      <div className="task-card__actions">
        <Button variant="secondary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </div>
    </article>
  )
}

export default TaskCard