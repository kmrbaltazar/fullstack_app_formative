<template>
    <div class="project_card_container" @click="selected = !selected">
        <div class="image_wrapper">
            <img :src="project_obj.imageURL" alt="Thumbnail of project">
        </div>
        <div class="project_info">
            <h3>{{ project_obj.projectName }}</h3>
            <h4>by {{ project_obj.author }}</h4>
        </div>
        <div class="button_options" v-if="selected">
            <a :href="project_obj.projectURL" target="_blank">
                <MainButton :main_btn_prop="view_source_txt" />
            </a>
            <OutlineButton :outline_btn_prop="update_txt" @click="$emit('update')" />
            <h5 class="delete" @click="$emit('delete')">Delete</h5>
        </div>
    </div>
</template>

<style scoped>
    .project_card_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: #fff;
        padding-bottom: 10px;
        width: 280px;
        gap: 10px;
        color: #4F4F4F;
        margin: 0 auto;
        height: fit-content;
    }

    .project_card_container:hover {
        cursor: pointer;
        
    }

    .delete {
        color: #4F4F4F;
        text-decoration: underline;
        text-align: center;
    }

    .delete:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    .project_info, .button_options {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
    }

    .image_wrapper {
        width: 100%;
        height: 170px;
    }

    img {
        border-radius: 10px 10px 0 0;
    }

    .project_info {
        margin: 5px 0;
        text-align: center;
    }

    h4 {
        font-style: italic;
        font-weight: 400;
    }


</style>

<script setup>
import MainButton from './buttons/MainButton.vue';
import OutlineButton from './buttons/OutlineButton.vue';

defineProps({
  project_obj: {
    type: Object,
    required: true
  }
});
</script>

<script>
export default {
    data(){
        return {
            view_source_txt: 'View source',
            update_txt: 'Update',
            selected: false
        }
    }
}
</script>