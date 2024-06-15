import React from 'react'

export default function Todo({ item, buttonHandler, checkBoxHandler }) {
    return (
        <li className="list-group-item">
            <div>
                <div className="d-flex align-items-center gap-4">
                    <input
                        className="form-check-input me-1"
                        type="checkbox"
                        id={`todo_checkbox_${item.id}`}
                        defaultChecked={item.isCompleted}
                        onChange={()=>checkBoxHandler(item.id)}
                    />
                    <label
                        className="form-check-label d-flex align-items-center gap-4"
                        htmlFor={`todo_checkbox_${item.id}`}
                    >
                        <span>Completion Status: </span>
                        {item.isCompleted
                            ? <span className="text-success">Done</span>
                            : <span className="text-danger">Pending</span>
                        }
                    </label>
                    <button type="button" className="btn btn-sm btn-danger" onClick={() => buttonHandler(item.id)}>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.title}</h5>
                </div>
            </div>
        </li>
    )
}
