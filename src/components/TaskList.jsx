import TaskCard from './TaskCard'
import '../styles/task-list.css'

function TaskList({ tasks }) {
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