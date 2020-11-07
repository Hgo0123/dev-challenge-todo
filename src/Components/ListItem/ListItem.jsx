import '../../App.css'


function ListItem(props) {
   const { todo, toggleActive, handleDelete, index, filter } = props

   function handleClick(event){
    event.stopPropagation();
    todo.active = !todo.active
    toggleActive(todo.id, todo.active)
   }
   function onDelete(){
    handleDelete(index)
   }

    return (
        <div className='wrapper'>
            <input type="checkbox" className={todo.active ? '' : 'checked'} checked={!todo.active} onClick={handleClick}/>
            <p  className={todo.active ? '' : 'checked'}>{todo.text}</p>
            {!todo.active && (filter === 'false') ? <div onClick={onDelete} className='delete'>X</div> : null}
        </div>
    )
}

export default ListItem;