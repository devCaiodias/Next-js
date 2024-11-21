export default async function Todos() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')

    const todos = await data.json()
    console.log(todos)
    return (
        <>
            <h1>Tarefas api</h1>
            <ul>
                {todos.map((todo) => (
                    <li className="text-center" key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}