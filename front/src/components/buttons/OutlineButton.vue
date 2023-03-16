<template>
  <div class="button-wrapper">
    <h5>{{ outline_btn_prop }}</h5>
  </div>
</template>

<style scoped>
.button-wrapper {
  padding: 7px 24px;
  background-color: #fff;
  color: #d6741b;
  height: 35px;
  width: 8rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d6741b;
}

.button-wrapper:hover {
  color: #ab5201;
  border: 2px solid #ab5201;
  background-color: #fff;
  filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>

<script setup>
defineProps({
  outline_btn_prop: {
    type: String,
    required: true,
  },
});
</script>
