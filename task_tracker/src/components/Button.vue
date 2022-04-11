<template>
    <!-- 
    <button class='btn' v-bind:style='`background: ${color}`'>
        {{ text }}
    </button> 
    -->
    <!-- 
    <button class='btn' :style='"background: " + color'>
        {{ text }}
    </button> 
    -->
    <!-- 
    <button class='btn' :style='{ background: color }' v-on:click='handleClick'>
        {{ text }}
    </button> 
    -->
    <button 
        class='btn' 
        :style='{ background: color }'
        @click=onClick
    >{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            // console.log('btn click')
            ///////////////////////////
            this.$emit('btn-click')
        },
    },
}
</script>