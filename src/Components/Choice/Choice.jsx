import '../../App.css'

function Choice(props) {

    const {handleFilter, filter} = props

    function handleClick(event) {
        handleFilter(event.target.getAttribute('name'))
    }

    return (
        <div className="wrapper">
            <div onClick={handleClick} className={(filter === null || filter === '' ? 'selected' : '') }>All</div>
            <div onClick={handleClick} name='true' className={eval(filter) ? 'selected' : '' }>Active</div>
            <div onClick={handleClick} name='false' className={(filter === 'false') ? 'selected' : '' }>Completed</div>
        </div>
    )
}

export default Choice