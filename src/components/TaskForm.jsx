import { useState } from 'react'
import Button from './Button'
import { validateTask } from '../services/taskValidation'
import '../styles/task-form.css'

function TaskForm({ initialValues, onSubmit, isSaving = false, submitLabel = 'Save task' }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: undefined })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validateTask(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values)
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={values.title}
          onChange={handleChange}
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'title-error' : undefined}
        />
        {errors.title && (
          <p id="title-error" className="field__error" role="alert">
            {errors.title}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={values.description}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={values.status}
          onChange={handleChange}
          aria-invalid={Boolean(errors.status)}
          aria-describedby={errors.status ? 'status-error' : undefined}
        >
          <option value="">Select status</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        {errors.status && (
          <p id="status-error" className="field__error" role="alert">
            {errors.status}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="assignee">Assignee</label>
        <input
          id="assignee"
          name="assignee"
          type="text"
          value={values.assignee}
          onChange={handleChange}
          aria-invalid={Boolean(errors.assignee)}
          aria-describedby={errors.assignee ? 'assignee-error' : undefined}
        />
        {errors.assignee && (
          <p id="assignee-error" className="field__error" role="alert">
            {errors.assignee}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="createdAt">Created date</label>
        <input
          id="createdAt"
          name="createdAt"
          type="date"
          value={values.createdAt}
          readOnly
        />
      </div>

      <div className="field">
        <label htmlFor="dueDate">Due date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={values.dueDate}
          onChange={handleChange}
          aria-invalid={Boolean(errors.dueDate)}
          aria-describedby={errors.dueDate ? 'dueDate-error' : undefined}
        />
        {errors.dueDate && (
          <p id="dueDate-error" className="field__error" role="alert">
            {errors.dueDate}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : submitLabel}
      </Button>
    </form>
  )
}

export default TaskForm