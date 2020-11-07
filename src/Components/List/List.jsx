import ListItem from '../ListItem/ListItem'

function List(props) {

   const { todo, toggleActive, handleDelete, filter } = props

    return (
        <div>
            {todo.map((todo, i) => <ListItem key={i} index={i} todo={todo} toggleActive={toggleActive} handleDelete={handleDelete} filter={filter} />)}
        </div>
    )
}

export default List;