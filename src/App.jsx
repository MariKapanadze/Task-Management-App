import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import AddTaskPage from './pages/AddTaskPage'
import EditTaskPage from './pages/EditTaskPage'
import TaskDetailsPage from './pages/TaskDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { loadTasks, saveTasks } from './services/taskStorage'

function cleanValues(values) {
  return {
    ...values,
    title: values.title.trim(),
    assignee: values.assignee.trim(),
  }
}

function App() {
  const [tasks, setTasks] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [storageError, setStorageError] = useState('')
  const [notification, setNotification] = useState(null)

  // Load once, when the app starts
  useEffect(() => {
    try {
      setTasks(loadTasks())
    } catch (error) {
      setStorageError(error.message)
    }
    setIsLoaded(true)
  }, [])

  // Save every time the list changes, but only after loading finished
  useEffect(() => {
    if (!isLoaded) return
    try {
      saveTasks(tasks)
    } catch (error) {
      setStorageError(error.message)
    }
  }, [tasks, isLoaded])

  // Hide the notification automatically after 4 seconds
  useEffect(() => {
    if (!notification) return
    const timer = setTimeout(() => setNotification(null), 4000)
    return () => clearTimeout(timer)
  }, [notification])

  function handleAddTask(values) {
    const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1
    setTasks([...tasks, { ...cleanValues(values), id: nextId }])
    setNotification({ type: 'success', text: 'Task added successfully.' })
  }

  function handleUpdateTask(id, values) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...cleanValues(values) } : task,
      ),
    )
    setNotification({ type: 'success', text: 'Task updated successfully.' })
  }

  function handleStatusChange(id, status) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)))
    setNotification({ type: 'success', text: 'Status updated.' })
  }

  function handleDeleteTask(id) {
    const task = tasks.find((item) => item.id === id)
    const confirmed = window.confirm(`Delete "${task.title}"? This cannot be undone.`)

    if (!confirmed) return

    setTasks(tasks.filter((item) => item.id !== id))
    setNotification({ type: 'success', text: 'Task deleted.' })
  }

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Header />
      {storageError && (
        <p className="notification notification--error" role="alert">
          {storageError}
        </p>
      )}
      {notification && (
        <p
          className={`notification notification--${notification.type}`}
          role="status"
        >
          {notification.text}
        </p>
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route
          path="/tasks"
          element={
            <TasksPage
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onStatusChange={handleStatusChange}
            />
          }
        />
        <Route
          path="/tasks/new"
          element={<AddTaskPage onAddTask={handleAddTask} />}
        />
        <Route
          path="/tasks/:id/edit"
          element={<EditTaskPage tasks={tasks} onUpdateTask={handleUpdateTask} />}
        />
        <Route path="/tasks/:id" element={<TaskDetailsPage tasks={tasks} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App