// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, editTodo, changeText, blurFixedText} = props
  const {id, title, editState, count} = todoDetails

  const onEditTodo = () => {
    editTodo(id)
  }

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const changeSelectText = event => {
    changeText(event, id)
  }

  const fixBlurText = event => {
    blurFixedText(event, id)
  }

  return (
    <li className="todo-item">
      {editState ? (
        <input
          type="text"
          className="title"
          value={title}
          onChange={changeSelectText}
          onBlur={fixBlurText}
        />
      ) : (
        <p className="title">
          {title} (Updated {count} Times)
        </p>
      )}
      <p className="edited-text">{}</p>
      <div className="buttons-container">
        <button type="button" className="edit-btn" onClick={onEditTodo}>
          Edit
        </button>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          x
        </button>
      </div>
    </li>
  )
}

export default TodoItem
