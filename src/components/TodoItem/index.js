import './index.css'

const TodoItem = props => {
  const {items, onDeleteTodo} = props
  const {title, key} = items

  const deleteTodo = () => {
    onDeleteTodo(key)
  }

  return (
    <li className="list-cont">
      <p className="description">{title}</p>
      <button type="button" className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
