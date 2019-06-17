<template>
   
    <div style="margin-top:10px;">        
        <input :checked="todo.status" type="checkbox" @click="$emit('checkTodo',todo.id)">
        <slot name="item"></slot>
        <button :disabled="todo.status" @click="$emit('editTodo',[todo.id, todo.name])">Edit Todo</button>&nbsp;
        <button @click="$emit('removeTodo',index)">Hapus Todo</button>        
    </div>
</template>

<script>
export default {
    name:'TodoItem',
    props:{
        todo: Object,
        index: Number,        
    },
}
</script>
<style>
.checked{
  text-decoration: line-through; 
}
</style>