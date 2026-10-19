import { useState } from 'react'
import TaskToolbar from '../components/TaskToolbar'
import TaskList from '../components/TaskList'
import { tasks as initialTasks } from '../data/tasks'
import '../styles/home.css'

function TasksPage() {
  const [tasks, setTasks] = useState(initialTasks)

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main className="page">
      <h1>Tasks</h1>
      <TaskToolbar />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  )
}

export default TasksPage