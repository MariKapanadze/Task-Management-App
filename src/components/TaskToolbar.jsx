import SearchInput from './SearchInput'
import StatusFilter from './StatusFilter'
import Button from './Button'
import '../styles/task-toolbar.css'

function TaskToolbar() {
  return (
    <section className="task-toolbar" aria-label="Task controls">
      <div className="task-toolbar__filters">
        <SearchInput />
        <StatusFilter />
      </div>
      <Button>Add new task</Button>
    </section>
  )
}

export default TaskToolbar