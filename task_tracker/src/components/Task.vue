<template>
    <!-- <div class='task'> -->
    <!-- <div class='task reminder'> -->
    <!-- <div :class="task.reminder ? 'task reminder' : 'task'"> -->
    <div   
        :class="['task', task.reminder ? 'reminder' : '']"
        @dblclick="$emit('toggle-reminder', task.id)"
    >
        <h3>
            {{ task.text }}
            <!-- <i class='fas fa-times' @click=onDelete(task.id)></i> -->
            <i 
                class='fas fa-times' 
                @click="$emit('delete-task', task.id)"
            ></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
    
</template>

<script>
export default {
    name: 'Task',
    props: {
        task: Object
    },
    // methods: {
    //     onDelete(id) {
    //         // console.log('Task', id)
    //         this.$emit('delete-task', id)
    //     },
    // },

}
</script>

<style scope>
.fas {
    color: red;
}
.task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder {
    border-left: 5px solid green;
}
.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>