<script lang="ts">
    import Task from '$lib/Task.svelte';
	import { Button } from 'flowbite-svelte';
    import { type Todo } from "./todotypes.svelte";

    interface Props {
        todo: Todo
        level?: number
    }

    let { todo = $bindable(), level = 0 }: Props = $props();

    function changeTitle() {
        let newTitle = prompt(`Choose a new title for ${todo.title}.`);
        if (newTitle) {
            todo = { ...todo, title: newTitle };
        }
    }
</script>

<div>
    <b>LEVEL {level}</b>:
    <i>{todo.id}</i>
    <u>{todo.title}</u>
    {todo.completed}
    <Button onclick={changeTitle}
        aria-label="change the title">
        title
    </Button>
</div>


{#if todo.sub}
    {#each todo.sub as subTodo, index (subTodo.id)}
        <Task bind:todo={todo.sub[index]} level={level + 1}></Task>
    {/each}
{/if}