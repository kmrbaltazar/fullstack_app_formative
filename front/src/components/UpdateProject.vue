<template>
    <div class="update_project_form">
        <span class="close_btn" @click="$emit('closeUpdate')">&#x2715</span>
        <div class="update_project_content">
            <h2>Update Project</h2>
            <br>
            <div class="input_div">
                <label>Project name:</label>
                <input type="text" v-model="updated_project_prop.projectName" placeholder="enter project name">
            </div>
            <div class="input_div">
                <label>Author name:</label>
                <input type="text" v-model="updated_project_prop.author" placeholder="enter author's full name">
            </div>
            <div class="input_div">
                <label>Project Thumbnail Link:</label>
                <input type="text" v-model="updated_project_prop.imageURL" placeholder="enter your project's image link">
            </div>
            <div class="input_div">
                <label>Link to Project:</label>
                <input type="text" v-model="updated_project_prop.projectURL" placeholder="enter project link">
            </div>
            <br>
            <MainButton :main_btn_prop="update_btn_txt" @click="$emit('updateInfo')" />
        </div>
    </div>

</template>

<style scoped>

.update_project_form {
        position: fixed;
        bottom: 90;
        top: 20%;
        left: 20%;
        right: 0;
        background-color: #f5d8bd;
        border: 1px solid #4F4F4F;
        z-index: 1000;
        width: 60%;
        filter: drop-shadow(3px 4px 2px rgba(0, 0, 0, 0.25));
        border-radius: 10px;
        color: #4F4F4F;
    }

    .close_parent {
        position: relative;
    }

    .close_btn {
        position: absolute;
        top: 10;
        right: 0;
        color: #4F4F4F;
        padding: 20px 30px 0 0;
        font-size: 25px;
    }

    .close_btn:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .input_div {
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    input {
        width: 50%;
        height: 30px;
        padding-left: 8px;
        
    }

    input::placeholder {
        font-size: 12px;
        font-style: italic;
        padding-left: 8px;
    }

    .update_project_content {
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
        padding: 5em 0;
    }

    @media (max-width: 62em) {
        .input_div {
            font-size: 12px;
            width: 80%;
        }

        input {
            width: 100%;
        }
    }
</style>

<script setup>
import MainButton from './buttons/MainButton.vue';

defineProps({
  updated_project_prop: {
    type: Object,
    required: true
  }
});

</script>

<script>
export default {
    data(){
        return {
            update_btn_txt: 'Update info'
        }
    }
}
</script>