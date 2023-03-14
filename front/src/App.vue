<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
</script>
<template>
TEST FRONTEND
<h1>{{ single_user.username }}</h1>
<h1 @click="create_user">[ADD NEW USER]</h1>
<div>
  <label>username:</label>
  <input type="text" placeholder="enter username" v-model="body_data.username">
</div>
<div>
  <label>firstname:</label>
  <input type="text" placeholder="enter firstname" v-model="body_data.fname">
</div>
<div>
  <label>lastname:</label>
  <input type="text" placeholder="enter lastname" v-model="body_data.lname">
</div>
{{ body_data }}
<h3 v-for="user in users_list">
  <span @click="fetch_single_user(user._id)">{{ user.username }}</span>
  <span @click="delete_user(user._id)">[DELETE]</span>
  <span @click="update_user(user._id)">[UPDATE]</span>
</h3>
<!-- Projects -->
<DataTable :value="products" tableStyle="min-width: 50rem">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
</template>
<style scoped>
</style>
<script>
export default {
  data(){
    return{
      users_list:[],
      single_user:{username:'',fname:'',lname:''},
      body_data:{username:'',fname:'',lname:''}
    }
  },
  methods:{
    async fetch_all_users(){
      const response = await fetch("http://localhost:4000/users/");
      const received_data = await response.json();
      this.users_list=received_data;
    },
    async fetch_single_user(userID){
      const response = await fetch("http://localhost:4000/users/getuser/"+userID);
      const received_data = await response.json();
      this.single_user=received_data;
    },
    async delete_user(userID){
      let fetch_url = 'http://localhost:4000/users/delete/'+userID;
      const response = await fetch(fetch_url, {method:"DELETE"});
      const received_data = await response.json();
      this.fetch_all_users();
    },
    async update_user(userID){
      const response = await fetch("http://localhost:4000/users/update/"+userID, {
        method:"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.body_data)
      });
      const received_data = await response.json();
      this.fetch_all_users();
    },
    async create_user(){
      const response = await fetch("http://localhost:4000/users/adduser", {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.body_data)
      });
      const received_data = await response.json();
      this.fetch_all_users();
    },
    async fetch_sample(){
      const response = await fetch( url, { /* info about fetch */ });
    }
  },
  created(){
    this.fetch_all_users();
  }
}
</script>