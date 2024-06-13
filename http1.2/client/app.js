let todos = [];
(async () => {
    const response = await fetch("https://localhost:8443/todos");
    const body = await response.json();
    todos = body;
    addTodosToUI(todos);
})();
const updateCompletionStatus = async (id) => {
    try {
        const response = fetch("https://localhost:8443/updateTodo", {
            method: "PUT",
            body: JSON.stringify({ todoid: id }),
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
const deleteTodo = async (id) => {
    try {
        const response = fetch("https://localhost:8443/deleteTodo", {
            method: "DELETE",
            body: JSON.stringify({ deletetodo: id }),
        });
        console.log(response);
    } catch (error) {
        console.log(error);

    }
}
function addTodosToUI(todos) {
    const container = document.querySelector("#todo-container_wrapper");
    if (todos.length) {
        let todosstr = ``;
        todos.forEach((item) => {
            todosstr += `
            <li class="list-group-item" id="todo_item_${item.id}">
                <div>
                    <div class="d-flex align-items-center gap-4">
                        <input
                                class="form-check-input me-1"
                                type="checkbox"
                                ${item.isCompleted ? 'checked' : ''}
                                id="todo_checkbox_${item.id}"
                        />
                        <label
                                class="form-check-label d-flex align-items-center gap-4"
                                for="todo_checkbox_${item.id}"
                            >
                                <span>Completion Status: </span>
                                ${item.isCompleted
                    ? `<span class="text-success">Done</span>`
                    : `<span class="text-danger">Pending</span>`
                }
                        </label>
                        <button type="button" class="btn btn-sm btn-danger" id="todo_delete_btn_${item.id}">
                            <span class="material-symbols-outlined">
                                delete
                            </span>
                        </button>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${item.title}</h5>
                    </div>
                </div>
            </li>
            `;
        });
        container.innerHTML = todosstr;
        todos.forEach((element) => {
            document.getElementById(`todo_checkbox_${element.id}`).addEventListener("change",
                async (_) => {
                    await updateCompletionStatus(element.id);
                    const todoIndex = todos.findIndex((i) => i.id === element.id)
                    if (todoIndex != -1) {
                        todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
                    }
                    addTodosToUI(todos)
                });
            document.getElementById(`todo_delete_btn_${element.id}`).addEventListener("click", async () => {
                await deleteTodo(element.id);
                const todoIndex = todos.findIndex((i) => i.id === element.id)
                if (todoIndex != -1) {
                    todos.splice(todoIndex, 1);
                }
                addTodosToUI(todos)
            })
        });
    }
}
const btn = document.querySelector("#todo_btn");
btn.addEventListener("click", async (_) => {
    const todoEl = document.getElementById("todo_title")
    const todotitle = todoEl.value;
    const todo = { title: todotitle, id: Date.now(), isCompleted: false };
    if (todotitle.trim() != "") {
        try {
            const response = await fetch("https://localhost:8443/addtodo", {
                method: "POST",
                body: JSON.stringify(todo),
            });
            todoEl.value = ""
            console.log(response);
            todos.push(todo);
            addTodosToUI(todos);
        } catch (error) {
            console.log(error);
        }
    } else {
        alert("No title found");
    }
});
