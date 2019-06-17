import TodoItem from '@/components/TodoItem.vue'
import TodoStatus from '@/components/TodoStatus.vue'
import TodoEdit from '@/components/TodoEdit.vue'
export default {
    name: 'app',
    components: {
        TodoItem,
        TodoStatus,
        TodoEdit
    },
    data() {
        return {
            inputValue: '',
            editValue: '',
            editId: '',
            warning: '',
            todos: [],
            edit: ''
        }
    },
    methods: {
        cancelEdit: function () {
            this.edit = ''
            this.editId = ''
            this.editValue = ''
        },
        editTodo: function (data) {
            this.edit = 'ada'
            this.editId = data[0]
            this.editValue = data[1]
        },
        ubahTodo: function (dataEdit) {
            const a = this.todos.find(todos => todos.id === this.editId)
            a.name = dataEdit
            this.edit = ''
        },
        addTodo() {
            var a = this.todos.slice(-1).pop() ? this.todos.slice(-1).pop().id : 0;
            this.todos.push(
                {
                    id: a + 1,
                    name: this.inputValue,
                    status: null
                }
            );
            this.inputValue = ''
        },
        checkTodo: function (id) {
            const a = this.todos.find(todos => todos.id === id);
            if (a.status == 'checked') {
                a.status = null;
            } else {
                a.status = 'checked';
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        },
        saveStorage: function () {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            alert('Berhasil Menyimpan Data');
        },
        checkLocalStorage: function () {
            if (localStorage.getItem('todos')) this.todos = JSON.parse(localStorage.getItem('todos'));
        },
        checkedStatus: function () {
            const a = this.todos.filter(x => x.status == 'checked');
            return a.length;
        },
        uncheckedStatus: function () {
            const a = this.todos.filter(x => x.status == null);
            return a.length;
        },
    },
    created() {
        this.checkLocalStorage();
    },
    watch: {
        inputValue: function (newValue, oldValue) {
            this.warning = "";
            if (this.inputValue.length > 10) {
                this.warning = "Maksimal 10 Karakter";
            }
        }
    },
}