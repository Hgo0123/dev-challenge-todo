import '../../App.css'

function DeleteAll(props){

    const { handleDeleteAll } = props

    return (
        <div className="delete" onClick={handleDeleteAll}>Delete All</div>
    )
}

export default DeleteAll;