<template>
    <div v-for='task in tasks'>
        <!-- {{ task.text }} -->
        <Task
            :key=task.id
            :task=task 
            @delete-task="$emit('delete-task', task.id)"
            @toggle-reminder="$emit('toggle-reminder', task.id)"
        />
    </div>
    
</template>

<script>
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        tasks: Array,
    },
    components: {
        Task,
    },
    // Declare Event Emitter(Listener)
    emits: [
        'delete-task',
        'toggle-reminder',
    ],
}
</script>

<style>

</style>