export function getToday() {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function validateTask(values) {
  const errors = {}
  const title = values.title.trim()

  if (title === '') {
    errors.title = 'Title is required.'
  } else if (title.length < 3) {
    errors.title = 'Title must be at least 3 characters.'
  }

  if (!values.status) {
    errors.status = 'status is required'
  }

  if (!values.assignee.trim()) {
    errors.assignee = 'Assignee is required.'
  }

  if (values.dueDate && values.dueDate < getToday()) {
    errors.dueDate = 'Due date cannot be in the past.'
  }

  return errors
}