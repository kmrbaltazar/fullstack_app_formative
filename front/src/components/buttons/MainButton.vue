<template>
  <div class="button-wrapper">
    <h5>{{ main_btn_prop }}</h5>
  </div>
</template>

<style scoped>
.button-wrapper {
    padding: 7px 24px;
    background-color: #D6741B;
    color: #fff;
    height: 35px;
    width: 8rem;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-wrapper:hover {
    background-color: #AB5201;
}
</style>

<script setup>
defineProps({
  main_btn_prop: {
    type: String,
    required: true
  }
});
</script>
