<template>
    <header>
        <h1>{{ title }}</h1>
        <!-- 
        <Button 
            text='Add Task'
            color='green'
            @btn-click="$emit('toggle-add-task')"
        /> 
        -->
        <Button 
            :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'"
            @btn-click="$emit('toggle-add-task')"
            v-show=homePage
        />
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    components: {
        Button,
    },
    props: {
        // title: {
        //     type: String,
        //     default: 'Hello World'
        // },
        title: String,
        showAddTask: Boolean,
    },
    // data() {
    //     return {
    //         title: 'Hello World'
    //     }
    // },
    // emits: [ 
    //     'toggle-add-task', 
    // ],
    computed: {
        homePage() {
            if (this.$route.path === '/') {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>