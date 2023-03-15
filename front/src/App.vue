<script setup>

</script>

<template>
TEST FRONTEND
<!-- division to show all projects fetched -->
<!-- UI element to trigger the menu to post new projects -->
<!-- UI element on page to post new projects -->
</template>
<style scoped>
</style>
<script>
export default {
  data(){
    return{
      projects_list:[],
      single_project:{projectName:'',author:'',imageURL:'',projectURL:''},
      body_data:{projectName:'',author:'',imageURL:'',projectURL:''}
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