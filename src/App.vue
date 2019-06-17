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
import TodoItem from './components/TodoItem.vue'
import TodoStatus from './components/TodoStatus.vue'
import TodoEdit from './components/TodoEdit.vue'
export default {
  name: 'app',
  components: {    
    TodoItem,
    TodoStatus,
    TodoEdit
  },  
  data () {
    return {
      inputValue:'',
      editValue:'',
      editId:'',
      warning:'',  
      todos:[],
      edit:''
    }
  }, 
  methods: {
    cancelEdit:function(){   
      this.edit=''
      this.editId=''
      this.editValue=''
    },
    editTodo:function(data){             
      this.edit='ada'
      this.editId=data[0]
      this.editValue=data[1]      
    },
    ubahTodo:function(dataEdit){      
      const a = this.todos.find(todos => todos.id === this.editId )
      a.name=dataEdit
      this.edit=''
    }, 
    addTodo(){            
      var a = this.todos.slice(-1).pop() ? this.todos.slice(-1).pop().id :0; 
      this.todos.push(
          {
            id:a+1,
            name:this.inputValue,
            status:null
          }
      );
      this.inputValue=''
    },   
    checkTodo:function(id){
      const a = this.todos.find(todos => todos.id === id );      
      if(a.status == 'checked'){
        a.status = null;                    
      }else{
        a.status = 'checked';                       
      }
    },
    removeTodo:function(index){
      this.todos.splice(index,1);
    },
    saveStorage:function(){
      localStorage.setItem('todos',JSON.stringify(this.todos));
      alert('Berhasil Menyimpan Data');
    },
    checkLocalStorage:function(){
      if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
    },
    checkedStatus:function(){
      const a = this.todos.filter(x=>x.status == 'checked');
      return a.length;
    },
    uncheckedStatus:function(){
      const a = this.todos.filter(x=>x.status == null);
      return a.length;
    },
  },
  created(){
    this.checkLocalStorage();
  },
  watch: {
    inputValue:function(newValue, oldValue){
      this.warning="";
      if(this.inputValue.length > 10){
        this.warning="Maksimal 10 Karakter";
      }
    }
  },   
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
