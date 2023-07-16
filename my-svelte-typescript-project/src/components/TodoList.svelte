<script lang="ts">
    import { get, writable } from 'svelte/store';
    import { todos } from '../store/index';
    import TodoItem from './TodoItem.svelte';
    import Sortable from 'svelte-sortablejs';

    let name = '';

    const addTodo = () => {
        if (name.trim() !== '') {
            todos.addTodo(name);
            name = '';
        }
    }

    let todoItems = []
    todos.subscribe(value => {
        todoItems = [...value]
    })
</script>

<div class="todo-list">
    <input type="text" bind:value={name} placeholder="Add new task..." />
    <button on:click={addTodo}>Add Task</button>

    <Sortable
        bind:list={todoItems}
        class="sortable-list"
        group="groupName"
        animation="150"
        ghostClass="sortable-ghost"
        on:end={() => {
            todos.rearrangeTodo(todoItems);
        }}
    >
        {#each todoItems as todo (todo.id)}
            <TodoItem {todo} />
        {/each}
    </Sortable>
</div>






<style>
    .todo-list {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.1);
        border-radius: 5px;
    }
    input[type="text"] {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 18px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    button {
        display: inline-block;
        padding: 10px 20px;
        margin-bottom: 20px;
        font-size: 18px;
        color: white;
        background-color: #007BFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #0056b3;
    }
    .sortable-list {
        padding: 0;
    }
    .sortable-ghost {
        opacity: 0.4;
    }
</style>
