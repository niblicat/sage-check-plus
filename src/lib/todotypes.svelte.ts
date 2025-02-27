export let lastID = $state(0);

export type Todo = {
    id: number,
    title: string,
    completed: boolean,
    sub?: Todo[]
}