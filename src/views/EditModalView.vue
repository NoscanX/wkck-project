<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <div class="content">
        <div class="edit-panel">
          <h1>Edytuj dane</h1>
          <form @submit.prevent>

            <label>Nazwa</label>
            <input type="text" v-model="editTitleInput" required>

            <label>Opis</label>
            <input type="text" v-model="editDescriptionInput" required>

            <label>Kategoria</label>
            <select v-model="editCategoryInput" required>
              <option value="category-music">Muzyka</option>
              <option value="category-book">Książki</option>
              <option value="category-other">Inne</option>
            </select>
            <button class="btn-submit" type="submit" @click="handleUpdate()">Zatwierdź zmiany</button>
            <button class="btn-submit" @click="closeModal">Anuluj</button>

          </form>
        </div>
        <!-- <p>Nazwa: {{ editTitleInput }}</p>
        <p>Opis: {{ editDescriptionInput }}</p>
        <p>Kategoria: {{ editCategoryInput }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { updateData } from "./global.js";

export default {
  methods: {
    closeModal() {
      this.$emit('close')
    },

    handleUpdate() {
      updateData(item.id, 'SONGS', item)
    }
  }
}
</script>

<style lang="css" scoped>
.modal {
  width: 700px;
  padding: 20px;
  margin: 120px auto;
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

.edit-panel {
  text-align: center;
  width: 90%;
  margin-top: 2rem;
}

.edit-panel form {
  display: flex;
  flex-direction: column;
  border-radius: 10px;   
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 4rem 0;
  align-items: center;
  background-color: transparent;
  margin-top: 2rem;
  background-color: var(--secondary-background);
  outline: 2px solid var(--active-and-hover);
}

.edit-panel label {
    font-size: 1.2rem;
}

.edit-panel input, select{
  width: 50%;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  outline: 0;
  margin: 10px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  outline: 1px solid var(--accents);
}

.edit-panel select{
  margin-bottom: 2rem;
}

.edit-panel input:focus, select:focus{
  outline: 3px solid var(--active-and-hover);
}

.edit-panel button{
  margin-top: 10px;
  padding: 10px 50px;
  border: 0;
  border: 3px solid var(--list-background);
  border-radius: 20px;
  font-weight: bold;
  background-color: var(--darker-accents);
  color: var(--text-color);
  text-transform: uppercase;
  transition: 300ms all;
  font-size: 1.2rem;
}

.btn-submit:hover{
  background-image: linear-gradient(
    var(--primary-gradient),
    var(--secondary-gradient));
  border: 3px solid var(--active-and-hover);
  color: var(--theme-hover-button-text);
  cursor: pointer;
}
</style>