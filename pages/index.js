import {useState} from 'react'

const index = () => {

    const [userInput, setUserInput] = useState('')
    const [todoList, setTodoList] = useState([])
    const handleChange =(e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setTodoList([
            userInput,
            ...todoList
        ])
    }

    const handleDelete =(todo)=>{
        const updatedArr = todoList.filter(todoItem=>todoList.indexOf(todoItem)!=todoList.indexOf(todo))

        setTodoList(updatedArr)
    }
    return (
        <div>
            <h2>NextJS crud todo app</h2>
            <form>
                <input onChange={handleChange} type="text"/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    todoList.length >=1 ? todoList.map((todo,index)=>{
                        return <li key={index}>{todo} <button onClick={(e)=>{
                            e.preventDefault();
                            handleDelete(todo)
                        }} >Delete</button></li>
                    })
                    :"Enter a todo item"
                }
            </ul>
        </div>
    )
}

export default index
