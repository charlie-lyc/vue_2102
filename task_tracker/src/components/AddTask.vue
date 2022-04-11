<template>
    <form class='add-form' @submit=onSubmit>
        <div class='form-control'>
            <label for='text'>Task</label>
            <input type='text' name='text' 
                placeholder='Add Task' 
                v-model=text 
            />
        </div>
        <div class='form-control'>
            <label for='day'>Day &amp; Time</label>
            <input type='text' name='day' 
                placeholder='Add Day &amp; Time' 
                v-model=day 
            />
        </div>
        <div class="form-control form-control-check">
            <label for='reminder'>Set Reminder</label>
            <input type='checkbox' name='reminder' 
                v-model=reminder
            />
        </div>
        <input type='submit' value='Save Task' class='btn btn-block' />
    </form>
</template>

<script>
// import { v4 as uuid4 } from 'uuid'

export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if (!this.text || !this.day) {
                alert('Please add a task and day & time')
                return
            }
            // const newTask = {
            //     id: uuid4(),
            //     text: this.text,
            //     day: this.day,
            //     reminder: this.reminder
            // }
            //////////////////////////////////////
            const newTask = {
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }
            //////////////////////////////////////
            this.$emit('add-task', newTask)
            this.text = ''
            this.day = ''
            this.reminder = false
        },
    },

}
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}
.form-control {
    margin: 20px 0;
}
.form-control label {
    display: block;
}
.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}
.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form-control-check label {
    flex: 1;
}
.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>