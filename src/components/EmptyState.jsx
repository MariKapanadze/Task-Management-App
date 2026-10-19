import '../styles/empty-state.css'

function EmptyState({ title, message }) {
  return (
    <section className="empty-state">
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__message">{message}</p>
    </section>
  )
}

export default EmptyState