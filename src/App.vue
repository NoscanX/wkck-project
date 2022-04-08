<template>
  <nav>
    <div class="nav-list">
      <router-link to="/" class="nav-list-item">Home</router-link> |
      <router-link to="/about" class="nav-list-item">About</router-link>
    </div>
    <div class="log-in-list">
            <div class="theme-slider-box">
                <h3>Włącz ciemny motyw</h3>
                <label class="switch">
                    <input type="checkbox switch-theme" @click="changeTheme()">
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
  </nav>
  <router-view/>
</template>

<script>
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

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.nav-list-item {
    margin: 0 1rem;
    padding: 0;
    font-size: 1.4rem;
    display: inline-block;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    font-weight: 700;
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

.nav-list-item:hover {
    color: var(--active-and-hover);
}

</style>
