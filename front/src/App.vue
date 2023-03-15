<script setup>
import Header from "./components/Header.vue"
import Footer from './components/Footer.vue'
import MainButton from './components/buttons/MainButton.vue'
import OutlineButton from './components/buttons/OutlineButton.vue'
</script>

<template>
<Header />
<!-- division to show all projects fetched -->
<!-- UI element to trigger the menu to post new projects -->
<!-- UI element on page to post new projects -->
<section class="main-body">
<div class="btn_left">
  <MainButton :main_btn_prop='add_project_txt' />
</div>
<h1>Class Projects</h1>

<div class="projects_grid">
<div class="no-projects" v-if="!project_existence">
<p>There are no projects added yet</p>
</div>

</div>

</section>

<Footer />

</template>

<style scoped>
.main-body {
  display: grid;
  grid-template-rows: auto auto 1fr;
  min-height: 100vh;
}

.btn_left {
  display: flex;
  justify-content: end;
  margin: 20px 10px;
}

h1 {
  color:#D6741B;
  text-align: center;
}
</style>

<script>
export default {
  data(){
    return{
      projects_list:[],
      single_project:{projectName:'',author:'',imageURL:'',projectURL:''},
      body_data:{projectName:'',author:'',imageURL:'',projectURL:''},
      add_project_txt: '+ Add project',
      project_existence: true
    }
  },
  methods:{
    async fetch_all_projects(){
      const response = await fetch("http://localhost:4000/projects/");
      const received_data = await response.json();
      this.projects_list=received_data;
    },
    async fetch_single_project(projectID){
      const response = await fetch("http://localhost:4000/projects/get/"+projectID);
      const received_data = await response.json();
      this.single_project=received_data;
    },
    async delete_project(projectID){
      let fetch_url = 'http://localhost:4000/projects/delete/'+projectID;
      const response = await fetch(fetch_url, {method:"DELETE"});
      const received_data = await response.json();
      this.fetch_all_projects();
    },
    async update_project(projectID){
      const response = await fetch("http://localhost:4000/projects/update/"+projectID, {
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.body_data)
      });
      const received_data = await response.json();
      this.fetch_all_projects();
    },
    async create_new_project(){
      const response = await fetch("http://localhost:4000/projects/addproject", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.body_data)
      });
      const received_data = await response.json();
      this.fetch_all_projects();
    },
    async fetch_sample(){
      const response = await fetch( url, { /* info about fetch */ });
    }
  },
  created(){
    this.fetch_all_projects();
  }
}
</script>