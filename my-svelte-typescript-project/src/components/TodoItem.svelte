<script lang="ts">
    import { todos } from '../store/index';
    export let todo;
    
    let isChecked = todo.completed;

    const removeTodo = () => todos.deleteTodo(todo.id);
    const toggleCompletion = () => {
        isChecked = !isChecked;
        todos.toggleTodo(todo.id);
    }
</script>

<div class="todo-item">
    <input type="checkbox" bind:checked={isChecked} on:change={toggleCompletion} />
    <p class:completed={isChecked}>{todo.name}</p>
    <button on:click={removeTodo}>X</button>
</div>

<style>
    .todo-item {
        display: flex;
        align-items: center;
        padding: 10px 15px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: #f5f5f5;
        color: black;
        transition: background-color 0.3s;
    }
    .todo-item:hover {
        background-color: #e8e8e8;
    }
    .todo-item p {
        flex-grow: 1;
        margin: 0;
        padding-left: 10px;
        font-size: 18px;
        line-height: 1.2;
    }
    .completed {
        text-decoration: line-through;
    }
    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>

