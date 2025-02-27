<script lang="ts">
    import Task from '$lib/Task.svelte';
    import { Alert } from 'flowbite-svelte';
    import testtasks from '$lib/tasks.json';
    import type { Todo } from '$lib/todotypes.svelte';

    let exampleTasks: Todo[] = $state(testtasks);

    $effect(() => {
        // output changes to log
        console.log(JSON.stringify(exampleTasks, null, 2))
        alert("There was a change!");
        // TODO: save changes to database
    });
</script>

<div class="p-8">
    <Alert>
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
</div>

{#if exampleTasks}
    {#each exampleTasks as task, index (task.id)}
        <Task bind:todo={exampleTasks[index]} />
    {/each}
{/if}