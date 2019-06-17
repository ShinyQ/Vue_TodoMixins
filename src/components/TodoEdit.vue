<template>
    <div id="edit">
        <input type="text" v-model="dataEdit">            
        <button @click="$emit('ubahTodo',dataEdit)">Ubah Todo</button>
        <button @click="$emit('cancelEdit')">Batalkan</button>        
    </div>
</template>
<script>
export default {
    name:"TodoEdit",
    props:{
        editValue:String,
        editId:Number,
    },
    data() {
        return {
            dataEdit:''
        }
    },
    mounted() {
        this.dataEdit=this.editValue
    },
    watch: {
      editValue:function(){
          this.dataEdit=this.editValue  
      }
    },
}
</script>