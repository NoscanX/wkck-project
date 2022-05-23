<template>
  <div class="content">
    <div class="add-panel">
      <h1>Dodaj nową pozycję do listy</h1>
      <form @submit.prevent>

        <label>Nazwa</label>
        <input type="text" v-model="titleInput" required>

        <label>Opis</label>
        <input type="text" v-model="descriptionInput" required>

        <label>Kategoria</label>
        <select v-model="categoryInput" required>
          <option value="category-music">Muzyka</option>
          <option value="category-book">Książki</option>
          <option value="category-other">Inne</option>
        </select>

        <button class="btn-submit" type="submit" @click="handleSubmit()">Dodaj</button>

      </form>
    </div>
    <!-- <p>Nazwa: {{ titleInput }}</p>
    <p>Opis: {{ descriptionInput }}</p>
    <p>Kategoria: {{ categoryInput }}</p> -->
  </div>
</template>

<script>
import { setItem } from './global';
import HomeView from "./HomeView.vue";
import { useToast } from "vue-toastification";
const toast = useToast();

export default {
  data() {
    return {
      titleInput: '',
      descriptionInput: '',
      categoryInput: '',

      songs: [],
      books: [],
      others: [],
    }
  },
  methods: {
    handleSubmit() {
      if(this.categoryInput == 'category-music') {
        this.songs = {title: this.titleInput, description: this.descriptionInput, isFav: false}
        setItem(this.songs, 'SONGS');
        this.$router.push({name: 'home'})
      }
      if(this.categoryInput == 'category-book') {
        this.books = {title: this.titleInput, description: this.descriptionInput, isFav: false}
        setItem(this.books, 'BOOKS');
        this.$router.push({name: 'home'})
      }
      if(this.categoryInput == 'category-other') {
        this.others = {title: this.titleInput, description: this.descriptionInput, isFav: false}
        setItem(this.others, 'OTHERS');
        this.$router.push({name: 'home'})
      }
      toast.success("Pozycja pomyślnie dodana do listy!", {
          timeout: 3000
      });
    }
  },
  components: {
    HomeView
  }
}
</script>

<style lang="css" scoped>

.add-panel {
  text-align: center;
  width: 70%;
  margin-top: 10rem;
}

.add-panel form {
  display: flex;
  flex-direction: column;
  border-radius: 10px;   
  margin: 0 auto;
  width: 60%;
  max-width: 1200px;
  padding: 4rem 0;
  align-items: center;
  background-color: transparent;
  margin-top: 2rem;
  background-color: var(--secondary-background);
  outline: 2px solid var(--active-and-hover);
}

.add-panel label {
    font-size: 1.2rem;
}

.add-panel input, select{
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

.add-panel input:focus, select:focus{
  outline: 3px solid var(--active-and-hover);
}

.add-panel button{
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