<template>
  <div class="content">
    <div class="login-panel">
      <h1>Logowanie</h1>
      <form @submit.prevent="checkLogin">
        <label>Login</label>
        <input type="text" v-model="login" required>
        <label>Hasło</label>
        <input type="password" v-model="password" required>
        <button class="btn-submit" type="submit">Zaloguj</button>
      </form>
    </div>
    <!-- <p>Login: {{ login }}</p>
    <p>Password: {{ password }}</p> -->
  </div>
</template>

<script>
import { loginUser } from './global';
import { useToast } from "vue-toastification";
const toast = useToast();

export default {

  name: 'LoginView',
  data () {
    return {
      login: '',
      password: '',
      userName: '',
    }
  },

  methods: {
    checkLogin() {
      loginUser(this.login, this.password).then(()=>{
        this.$router.push({name: 'home', params: {userName: this.login}});
        toast.success("Zalogowano pomyślnie!", {
          timeout: 3000
        });
      })
      .catch((error)=>{
        toast.error("Wprowadzono złe dane!", {
          timeout: 3000
        });
      })
    },
  }
}
</script>

<style lang="css">

.login-panel {
    text-align: center;
    width: 70%;
    margin-top: 10rem;
}

.login-panel form {
    display: flex;
    flex-direction: column;
    border-radius: 10px;   
    margin: 0 auto;
    width: 60%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 4rem 0;
    align-items: center;
    background-color: transparent;
    margin-top: 2rem;
    background-color: var(--secondary-background);
    outline: 2px solid var(--active-and-hover);
}

.login-panel label {
    font-size: 1.2rem;
}

.login-panel input{
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

.login-panel input:focus{
    outline: 3px solid var(--active-and-hover);
}

.login-panel button{
    margin-top: 10px;
    padding: 10px 50px;
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