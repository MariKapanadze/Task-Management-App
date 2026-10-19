import { tasks as seedTasks } from '../data/tasks'

const STORAGE_KEY = 'task-management-tasks'

export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) {
      return seedTasks
    }
    return JSON.parse(raw)
  } catch {
    throw new Error('Could not load tasks from storage.')
  }
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch {
    throw new Error('Could not save tasks. Storage may be full or blocked.')
  }
}