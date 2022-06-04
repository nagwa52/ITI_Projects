<template>
  <div class="form" >
    <form @submit.prevent="formHandle" >
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="name"  v-model="formValues.name">
</div>
<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Age</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="age"  v-model="formValues.age" >
</div>
<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Track name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="trackName"  v-model="formValues.trackName">
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="rank" id="flexRadioDefault1"  v-model="rank" value="1">
  <label class="form-check-label" for="flexRadioDefault1">
    student
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="rank" id="flexRadioDefault2" checked value="2" v-model="rank">
  <label class="form-check-label" for="flexRadioDefault2">
   Admin
  </label>
</div>
<button class="btn btn-success">submit</button>
</form>
  </div>
</template>

<script>


export default {
  name: 'formComponent',
data(){
    return{
    formValues:{name:"",age:0,trackName:""},
    rank:""
    }
},
methods:{
     formHandle(e){
    e.preventDefault();
   if(this.rank === "1"){
        this.$emit("student", this.formValues);
}},
  emits:['student']     
}}
</script>