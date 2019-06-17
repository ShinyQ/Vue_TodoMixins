<template>
    <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Todo App</h1>
      <input v-model="inputValue" placeholder="Tambahkan Todo Disini">
      <button @click="addTodo()">Add</button><br><br>
      {{warning}}<br>

      <hr>
      <TodoItem v-for="(item, index) in todos" :key="index" :todo="item" :index="index" 
            v-on:checkTodo="checkTodo($event)" v-on:removeTodo="removeTodo($event)" 
            v-on:editTodo="editTodo($event)">        
            <span slot="item" :class="{ checked: item.status }">{{index+1}}. {{item.name}} </span>
      </TodoItem><br>      
      <button @click="saveStorage()">Simpan Ke Storage</button>
      <hr>

      <TodoStatus :checkedStatus="this.checkedStatus()" :uncheckedStatus="this.uncheckedStatus()"></TodoStatus>
      <TodoEdit v-if="edit" :editValue="this.editValue" v-on:ubahTodo="ubahTodo($event)" v-on:cancelEdit="cancelEdit($event)"></TodoEdit>
    </div>
</template>

<script>
  import Mixins from './mixins/mixin.js'
  export default {
    name: 'app',
    mixins: [Mixins]
  }
</script>

<style>
#app {  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  margin-top: 60px;
  z-index:99999;
}
</style>
