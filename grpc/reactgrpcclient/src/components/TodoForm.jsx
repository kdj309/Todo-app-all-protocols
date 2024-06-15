import React,{useState} from 'react'

export default function TodoForm({ addTodo }) {
    const [todoTitle, settodoTitle] = useState("")
    return (
        <div className="todo-form">
            <form className="row row-cols-lg-auto g-3 align-items-center" >
                <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername"
                    >Username</label>
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                            type="text"
                            className="form-control"
                            id="todo_title"
                            placeholder="Todo Title"
                            onChange={(e) => settodoTitle(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="col-12">
                    <button type="button" onClick={() => {
                        if (todoTitle.trim() !== "") {
                            addTodo(todoTitle)
                        }
                    }} className="btn btn-sm btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
