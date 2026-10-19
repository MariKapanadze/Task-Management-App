import Header from '../components/Header'
import TaskToolbar from '../components/TaskToolbar'
import TaskList from '../components/TaskList'
import { tasks } from '../data/tasks'
import '../styles/home.css'

function TasksPage() {
  return (
    <>
      <main className="page">
        <h1>Tasks</h1>
        <TaskToolbar />
        <TaskList tasks={[]} />
      </main>
    </>
  )
}

export default TasksPage