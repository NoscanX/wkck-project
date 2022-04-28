<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot>default content (if no slot passed in)</slot>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal {
    width: 500px;
    padding: 20px;
    margin: 200px auto;
    background: var(--secondary-background);
    border-radius: 10px;
  }
  .backdrop {
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
  }
  .modal h1 {
    color: var(--text-color);
    border: none;
    padding: 0;
  }

</style>