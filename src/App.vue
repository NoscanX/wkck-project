<template>
  <nav>
    <div class="nav-list">
      <router-link to="/" class="nav-list-item">Home</router-link>
      <router-link to="/login" class="nav-list-item" v-if="!isLoggedInBuff">Zaloguj</router-link>
      <router-link to="/register" class="nav-list-item" v-if="!isLoggedInBuff">Zarejestruj</router-link>
      <router-link to="/add" class="nav-list-item" v-if="isLoggedInBuff">Dodaj do listy</router-link>
      <router-link to="/help" class="nav-list-item">Pomoc</router-link>
    </div>
    <div class="log-in-list">
        <div class="theme-slider-box">
            <button v-if="isLoggedInBuff" class="logout-btn" @click="signOutUser()">Wyloguj się</button>
            <h3>Zmień motyw</h3>
            <label class="switch">
                <input type="checkbox" @click="changeTheme">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
import { getIsLoggedIn, signOutUser } from "./views/global.js";
const isLoggedInBuff = getIsLoggedIn();

export default {
    mounted(){
    if(localStorage.getItem('switch-theme') === 'dark-theme')
        {
            this.setTheme('dark-theme');
        }
        else
        {
            this.setTheme('light-theme');
        }
    },

    methods: {
		changeTheme(){
			if(localStorage.getItem('switch-theme') === 'dark-theme')
			{
				this.setTheme('light-theme');
			}
			else
			{
				this.setTheme('dark-theme');
			}
			
		},
		setTheme(themeName){
			localStorage.setItem('switch-theme', themeName);
    	    document.documentElement.className = themeName;
		},
	},
    data(){
        return {
            isLoggedInBuff,
            signOutUser
        }
    }
}
</script>

<style lang="css">


@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Roboto:wght@100;400;700&display=swap');
@import 'styles/themes';

*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

body {
    height: 100vh;
    background-color: var(--primary-background);
    color: var(--text-color);
    font-family: 'Open Sans', sans-serif;
}

body h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    background-color: var(--primary-background);
    z-index: 10;
}

.nav-list-item {
    margin: 0 1rem;
    padding: 0;
    font-size: 1.4rem;
    display: inline-block;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    font-weight: 400;
}

.nav-list-item::after {
    content: '';
    display: block;
    background: var(--active-and-hover);
    width: 0;
    height: 2px;
    transition: width .5s;
}

.nav-list-item:hover::after {
    width: 100%;
}

.nav-list a.router-link-exact-active {
    font-weight: 700;
    background-image: linear-gradient(
        var(--primary-gradient),
        var(--secondary-gradient));
    padding: 5px;
    border-radius: 10px;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--darker-accents);
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: var(--active-and-hover);
}

input:focus+.slider {
    box-shadow: 0 0 1px var(--active-and-hover);
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.theme-slider-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logout-btn {
    margin-right: 1rem;
    padding: 10px 10px;
    border: 3px solid var(--list-background);
    border-radius: 20px;
    font-weight: bold;
    background-color: var(--darker-accents);
    color: var(--text-color);
    text-transform: uppercase;
    transition: 300ms all;
    font-size: 1rem;
}

.logout-btn:hover{
    background-image: linear-gradient(
        var(--primary-gradient),
        var(--secondary-gradient));
    border: 3px solid var(--active-and-hover);
    color: var(--theme-hover-button-text);
    cursor: pointer;
}

</style>
