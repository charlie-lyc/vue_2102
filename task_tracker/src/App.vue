<template>
    <!-- <h1>Hello World</h1> -->
    <div class='container'>
        <Header 
            title='Task Tracker'
            :showAddTask=showAddTask
            @toggle-add-task=toggleAddTask
        />
        <!-- <AddTask v-if=showAddTask /> -->
        <!-- 
        <AddTask 
            v-show=showAddTask
            @add-task=addTask 
        />
        <Tasks 
            :tasks=tasks
            @delete-task=deleteTask
            @toggle-reminder=toggleReminder
        /> 
        -->
        <router-view :showAddTask=showAddTask></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header'
// import Tasks from './components/Tasks'
// import AddTask from './components/AddTask'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        Header,
        // Tasks,
        // AddTask,
        Footer,
    },
    data() {
        return {
            // tasks: [],
            showAddTask: false
        }
    },
    // created() {
    //     this.tasks = [{
    //             id: 1,
    //             text: 'Doctors Appointment',
    //             day: 'March 1st at 2:30pm',
    //             reminder: true,
    //         },{
    //             id: 2,
    //             text: 'Meeting at School',
    //             day: 'March 3rd at 1:30pm',
    //             reminder: true,
    //         },
    //         { 
    //             id: 3,
    //             text: 'Food Shopping',
    //             day: 'March 5th at 11:00pm',
    //             reminder: false,
    //         },
    //     ]
    // },
    ////////////////////////////////////////////
    // created() {
    //     fetch(`http://localhost:5000/tasks`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             this.tasks = data
    //         })
    // },
    ////////////////////////////////////////////
    // async created() {
    //     this.tasks = await this.fetchTasks()
    // },
    methods: {
        // deleteTask(id) {
        //     // console.log('Task', id)
        //     //////////////////////////
        //     if (confirm('Are you sure to delete this task?')) {
        //         this.tasks = this.tasks.filter(task => task.id !== id)
        //     }
        // },
        // deleteTask(id) {
        //     if (confirm('Are you sure to delete this task?')) {
        //         fetch(`http://localhost:5000/tasks/${id}`, {
        //                 method: 'DELETE' 
        //             }).then(res => res.json())
        //             .then(data => {
        //                 // console.log(data)
        //                 this.tasks = this.tasks.filter(task => task.id !== id)
        //             })
        //     }
        // },
        // async deleteTask(id) {
        //     if (confirm('Are you sure to delete this task?')) {
        //         // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        //         const res = await fetch(`/api/tasks/${id}`, { 
        //                 method: 'DELETE' 
        //             })
        //         if (res.status === 200) {
        //             this.tasks = this.tasks.filter(task => task.id !== id)
        //         } else {
        //             alert('Error deleting task!')
        //         }
        //     }
        // },
        // toggleReminder(id) {
        //     // console.log('Task', id)
        //     //////////////////////////
        //     this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task)
        // },
        // toggleReminder(id) {
        //     const foundTask = this.tasks.find(task => task.id === id)
        //     fetch(`http://localhost:5000/tasks/${id}`, {
        //             method: 'PATCH',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({ reminder: !foundTask.reminder }) 
        //         }).then(res => res.json())
        //         .then(data => {
        //             // console.log(data)
        //             this.tasks = this.tasks.map(task => task.id === id ? data : task)
        //         })
        // },
        // async toggleReminder(id) {
        //     // const foundTask = this.tasks.find(task => task.id === id)
        //     const foundTask = await this.fetchTask(id)
        //     // const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        //     const res = await fetch(`/api/tasks/${id}`, {
        //             method: 'PATCH',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({ reminder: !foundTask.reminder }) 
        //         })
        //     const data = await res.json()
        //     // console.log(data)
        //     this.tasks = this.tasks.map(task => task.id === id ? data : task)
        // },
        // addTask(task) {
        //     this.tasks.push(task)
        // },
        // addTask(task) {
        //     fetch(`http://localhost:5000/tasks`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(task)})
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         this.tasks.push(data)
        //     })
        // },
        // async addTask(task) {
        //     // const res = await fetch(`http://localhost:5000/tasks`, {
        //     const res = await fetch(`/api/tasks`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify(task)
        //         })
        //     const data = await res.json()
        //     // console.log(data)
        //     this.tasks.push(data)
        // },
        toggleAddTask() {
            this.showAddTask = !this.showAddTask
        },
        // async fetchTasks() {
        //     // const res = await fetch(`http://localhost:5000/tasks`)
        //     const res = await fetch(`/api/tasks`)
        //     const data = await res.json()
        //     return data
        // },
        // async fetchTask(id) {
        //     // const res = await fetch(`http://localhost:5000/tasks/${id}`)
        //     const res = await fetch(`/api/tasks/${id}`)
        //     const data = await res.json()
        //     return data 
        // }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Poppins', sans-serif;
}
.container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}
.btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}
.btn:focus {
    outline: none;
}
.btn:active {
    transform: scale(0.98);
}
.btn-block {
    display: block;
    width: 100%;
}
</style>