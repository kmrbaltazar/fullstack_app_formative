<script setup>
import Header from "./components/Header.vue"
import Footer from './components/Footer.vue'
import MainButton from './components/buttons/MainButton.vue'
import OutlineButton from './components/buttons/OutlineButton.vue'
import AddProject from './components/AddProject.vue'
import ProjectCard from './components/Project.vue'
import UpdateProject from './components/UpdateProject.vue'
</script>

<template>
<Header />
<!-- division to show all projects fetched -->
<!-- UI element to trigger the menu to post new projects -->
<!-- UI element on page to post new projects -->
<AddProject v-if="add_project_menu_toggle" @close="add_project_menu_toggle=false" :add_project_prop="body_data" @submit="submitted"  />
<UpdateProject v-if="update_project_menu_toggle" :updated_project_prop="body_data" @updateInfo="updated" @closeUpdate="update_project_menu_toggle=false"  />

<section class="main-body">
  <div class="btn_left">
    <MainButton :main_btn_prop='add_project_txt' @click="add_project_menu_toggle=true;" />
  </div>

  <h1>Class Projects</h1>

  <div class="no_projects" v-if="!projects_list.length">
  <p>There are no projects added yet.</p>
  </div>

  <div class="projects_grid">
  <ProjectCard v-for="projectItem in projects_list" :project_obj="projectItem" @delete="delete_project(projectItem._id)" @update="update_project_menu_toggle=true; currently_updated_id=projectItem._id; body_data=projectItem" />
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

.no_projects {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} 

.projects_grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px,1fr));
  grid-auto-rows: minmax(325px,auto);
  place-content: center;
  place-items: center;
  width: 70vw;
  gap: 10px;
  margin: 0 auto;
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
      add_project_menu_toggle: false,
      update_project_menu_toggle: false,
      currently_updated_id: ''
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
    submitted(){
      this.create_new_project();
      this.add_project_menu_toggle=false;
    },
    updated(){
      this.update_project(this.currently_updated_id);
      this.update_project_menu_toggle=false;
    }
  },
  created(){
    this.fetch_all_projects();
  }
}
</script>