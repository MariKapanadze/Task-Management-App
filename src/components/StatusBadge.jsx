import '../styles/status-badge.css'

const labels = {
    todo: 'To Do',
    'in-progress': 'In Progress',
    done: 'Done'
}
function StatusBadge({ status }) {
    return <span className={`badge badge--${status}`}>{labels[status]}</span>
}

export default StatusBadge