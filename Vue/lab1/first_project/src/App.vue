
<template>
<div>
<button type="button" @click="choice = 1" class="btn btn-primary mb-2">
    Form
  </button>
  <button type="button" @click="choice = 3" class="btn btn-primary ms-2 mb-2">
    Students
  </button>
  <button type="button" @click="choice = 2" class="btn btn-primary ms-2 mb-2">
    Admins
  </button>
  <FormView v-if="choice == 1"  @student="addStudent" @admin="addAdmin"/>
  <AdminView v-if="choice == 2"  @delete="handleDeleteAdmin" />
  <StudentView v-if="choice == 3" :students="students"  @delete="handleDeleteStudent" />
  </div>
</template>
<script>
import FormView from "./views/FormView.vue";
import AdminView from "./views/AdminView.vue";
import StudentView from "./views/studentView.vue";
export default ({
  components:{FormView,AdminView,StudentView},
data(){
return {
choice:1,
admins:[],
students:[],
};
  },
  methods:{
addStudent(std){
this.students.push(std)
},
 addAdmin(admin) {
      this.admins.push(admin);
    },
    handleDeleteStudent(index) {
      this.students.splice(index,1)
    },
    handleDeleteAdmin(index) {
      this.admins.splice(index,1)
    }
  },
  provide(){
    return{
      admins:this.admins
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
