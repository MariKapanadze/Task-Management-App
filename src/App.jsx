import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import AddTaskPage from './pages/AddTaskPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/AddTaskPage" element={<AddTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App