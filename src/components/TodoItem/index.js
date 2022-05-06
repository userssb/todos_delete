import './index.css'

const TodoItem = props => {
  const {items, deleteTodo} = props
  const {title, id} = items

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="list-cont">
        <p className="description">{title}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
