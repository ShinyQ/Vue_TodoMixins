<template>
    <div id="item">
        Done <span>{{checkedStatus}}</span>
        Not Done <span>{{uncheckedStatus}}</span>  
    </div>
</template>
<script>
export default {
    name:'TodoStatus',
    props:['checkedStatus','uncheckedStatus']
}
</script>