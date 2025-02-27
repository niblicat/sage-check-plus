<script lang="ts">
    import Task from '$lib/Task.svelte';
    import { type Todo } from "./todotypes.svelte";

    interface Props {
        todo: Todo
        level?: number
    }

    let { todo, level = 0 }: Props = $props();
</script>

<div>
    <b>LEVEL {level}</b>:
    <i>{todo.id}</i>
    <u>{todo.title}</u>
    {todo.completed}
</div>

{#if todo.sub}
    {#each todo.sub as subTodo}
        <Task todo={subTodo} level={level + 1}></Task>
    {/each}
{/if}