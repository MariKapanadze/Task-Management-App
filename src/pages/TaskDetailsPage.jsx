import { useParams, Link } from 'react-router-dom'
import StatusBadge from '../components/StatusBadge'
import EmptyState from '../components/EmptyState'

function TaskDetailsPage({ tasks }) {
  const { id } = useParams()
  const task = tasks.find((item) => item.id === Number(id))

  if (!task) {
    return (
      <main className="page">
        <EmptyState
          title="Task not found"
          message="This task does not exist or was deleted."
        />
      </main>
    )
  }

  return (
    <main className="page">
      <h1>{task.title}</h1>
      <StatusBadge status={task.status} />
      <p>{task.description}</p>
      <dl>
        <dt>Assignee</dt>
        <dd>{task.assignee}</dd>
        <dt>Created</dt>
        <dd>{task.createdAt}</dd>
        <dt>Due date</dt>
        <dd>{task.dueDate}</dd>
      </dl>
      <Link to={`/tasks/${task.id}/edit`}>Edit</Link> |{' '}
      <Link to="/tasks">Back to tasks</Link>
    </main>
  )
}

export default TaskDetailsPage