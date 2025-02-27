<script lang="ts">
    import Task from '$lib/Task.svelte';
    import { Alert } from 'flowbite-svelte';
    import testtasks from '$lib/tasks.json';
	import type { Todo } from '$lib/todotypes.svelte';

    let exampleTasks: Todo[] = testtasks;
</script>

<div class="p-8">
    <Alert>
        <span class="font-medium">Info alert!</span>
        Change a few things up and try submitting again.
    </Alert>
</div>

{#if exampleTasks}
    {#each exampleTasks as task}
        <Task todo={task}/>
    {/each}
{/if}