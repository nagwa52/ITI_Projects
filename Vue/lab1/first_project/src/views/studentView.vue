<template>
    <div>
<table class="table">
  <thead>
   <th>index</th>
    <th>name</th>
     <th>age</th>
     <th>Action</th>
  </thead>
  <tbody>
    <tr class="table-active" v-for="std in students" :key="std.name">
      <td >1</td>
      <td>{{std.name}}</td>
       <td>{{std.age}}</td>
       <td>{{std.trackName}}</td>
       <td><button type="button" class="btn btn-danger"  @click="$emit('delete',index)">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
 export default {
  name: 'StudentsView',
  props: ['students']
}
</script>

<style scoped>

</style>