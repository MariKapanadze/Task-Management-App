import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import { getToday } from '../services/taskValidation'

const emptyTask = {
  title: '',
  description: '',
  status: '',
  assignee: '',
  createdAt: getToday(),
  dueDate: '',
}

function AddTaskPage({ onAddTask }) {
  const navigate = useNavigate()
  const [isSaving, setIsSaving] = useState(false)

  function handleSubmit(values) {
    setIsSaving(true)
    setTimeout(() => {
      onAddTask(values)
      navigate('/tasks')
    }, 600)
  }

  return (
    <main className="page">
      <h1>Add Task</h1>
      <TaskForm
        initialValues={emptyTask}
        onSubmit={handleSubmit}
        isSaving={isSaving}
        submitLabel="Add task"
      />
    </main>
  )
}

export default AddTaskPage