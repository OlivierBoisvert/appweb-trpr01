<script setup lang="ts">
defineProps<{ modelValue: string }>();
defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>
<template>
  <div class="input-group">
    <span class="input-group-text search-icon">
      <i class="bi bi-search"></i>
    </span>
    <input
      type="text"
      class="form-control search-input"
      placeholder="Rechercher un équipement..."
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>
<style scoped>
.search-input {
  background-color: #faf9ee;
  border-color: #c8c49a;
}
.search-input:focus {
  background-color: #fff;
  border-color: #4e4361;
  box-shadow: 0 0 0 0.2rem rgba(78, 67, 97, 0.2);
}
.search-icon {
  background-color: #4e4361;
  color: white;
  border-color: #4e4361;
}
.btn-clear {
  background-color: #c8c49a;
  border-color: #c8c49a;
  color: #4e4361;
}
.btn-clear:hover {
  background-color: #b0ac85;
}
</style>
