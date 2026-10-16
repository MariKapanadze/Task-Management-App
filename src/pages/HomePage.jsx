import TaskList from '../components/TaskList'
import { tasks } from '../data/tasks'
import '../styles/home.css'

function HomePage() {
  return (
    <main>
      <h1>Task Management Application</h1>
      <TaskList tasks={tasks} />
    </main>
  )
}

export default HomePage