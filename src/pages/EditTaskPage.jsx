import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import EmptyState from '../components/EmptyState'

function EditTaskPage({ tasks, onUpdateTask }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isSaving, setIsSaving] = useState(false)

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

  function handleSubmit(values) {
    setIsSaving(true)
    setTimeout(() => {
      onUpdateTask(task.id, values)
      navigate('/tasks')
    }, 600)
  }

  return (
    <main className="page">
      <h1>Edit Task</h1>
      <TaskForm
        key={task.id}
        initialValues={task}
        onSubmit={handleSubmit}
        isSaving={isSaving}
        submitLabel="Save changes"
      />
    </main>
  )
}

export default EditTaskPage