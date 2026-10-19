export function filterAndSortTasks(
  tasks,
  { searchText, statusFilter, assigneeFilter, sortOrder },
) {
  const query = searchText.trim().toLowerCase()

  const result = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(query)
    const matchesStatus = statusFilter === 'all' || task.status === statusFilter
    const matchesAssignee = assigneeFilter === 'all' || task.assignee === assigneeFilter

    return matchesSearch && matchesStatus && matchesAssignee
  })

  return result.sort((a, b) =>
    sortOrder === 'asc'
      ? a.dueDate.localeCompare(b.dueDate)
      : b.dueDate.localeCompare(a.dueDate),
  )
}