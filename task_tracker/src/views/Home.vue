<template>
    <AddTask 
        v-show=showAddTask 
        @add-task=addTask 
    />
    <Tasks 
        :tasks=tasks
        @delete-task=deleteTask
        @toggle-reminder=toggleReminder
    />
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: [],
        }
    },
    async created() {
        this.tasks = await this.fetchTasks()
    },
    methods: {
        async deleteTask(id) {
            if (confirm('Are you sure to delete this task?')) {
                const res = await fetch(`/api/tasks/${id}`, { 
                        method: 'DELETE' 
                    })
                if (res.status === 200) {
                    this.tasks = this.tasks.filter(task => task.id !== id)
                } else {
                    alert('Error deleting task!')
                }
            }
        },
        async toggleReminder(id) {
            const foundTask = await this.fetchTask(id)
            const res = await fetch(`/api/tasks/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ reminder: !foundTask.reminder }) 
                })
            const data = await res.json()
            this.tasks = this.tasks.map(task => task.id === id ? data : task)
        },
        async addTask(task) {
            const res = await fetch(`/api/tasks`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(task)
                })
            const data = await res.json()
            this.tasks.push(data)
        },
        async fetchTasks() {
            const res = await fetch(`/api/tasks`)
            const data = await res.json()
            return data
        },
        async fetchTask(id) {
            const res = await fetch(`/api/tasks/${id}`)
            const data = await res.json()
            return data 
        }
    }
}
</script>

<style>

</style>