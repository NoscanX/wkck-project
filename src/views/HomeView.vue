<template>
  <div class="content">
        
        <div class="list-box">
            <div class="list-header">
                <div class="header">
                    <h1>Twoja lista</h1>
                </div>
                <div class="fav-only">
                    <h3>Pokaż tylko ulubione</h3>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div class="category music">
                <h2>Kategoria: muzyka <i class="fas fa-music"></i></h2>
                <hr>
                <ul>
                    <li>
                        <div class="info">
                            <p>Above & Beyond - Gratitude</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit minus incidunt temporibus cumque nulla eum corrupti molestias atque ipsa excepturi, autem corporis ab, id perspiciatis libero accusamus deleniti aut vero impedit nemo. Accusantium perferendis cupiditate quae aut praesentium quidem.</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </li>
                    <li class="fav">
                        <div class="info">
                            <p>Tinlicker - Be Here and Now</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facere porro quidem cumque est ducimus vero suscipit mollitia ullam numquam?</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart heart-fav"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="info">
                            <p>gardenstate, Oliver Smith - By Your Side</p>
                            <p class="desc">Lorem ipsum dolor sit amet.</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="info">
                            <p>Above & Beyond - Believer</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="category books">
                <h2>Kategoria: książki <i class="fas fa-book"></i></h2>
                <hr>
                <ul>
                    <li>
                        <div class="info">
                            <p>Above & Beyond - Gratitude</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit minus incidunt temporibus cumque nulla eum corrupti molestias atque ipsa excepturi, autem corporis ab, id perspiciatis libero accusamus deleniti aut vero impedit nemo. Accusantium perferendis cupiditate quae aut praesentium quidem.</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </li>
                    <li class="fav">
                        <div class="info">
                            <p>Tinlicker - Be Here and Now</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, facere porro quidem cumque est ducimus vero suscipit mollitia ullam numquam?</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart heart-fav"></i>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="info">
                            <p>gardenstate, Oliver Smith - By Your Side</p>
                            <p class="desc">Lorem ipsum dolor sit amet.</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart"></i>
                            </div>
                        </div>
                    </li>
                    <li class="fav">
                        <div class="info">
                            <p>Above & Beyond - Believer</p>
                            <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?</p>
                            <div class="icons">
                                <i class="far fa-trash-alt"></i>
                                <i class="fas fa-pen"></i>
                                <i class="fas fa-heart heart-fav"></i>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data () {
    return;
  }
}
</script>

<style lang="css">

body {
    height: 100vh;
    background-color: var(--primary-background);
    color: var(--text-color);
    font-family: 'Open Sans', sans-serif;
}

body h1, h2, h3 {
    font-family: 'Roboto', sans-serif;;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
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

/* .log-in-box {
    display: flex;
    justify-content: flex-end;
} */

.theme-slider-box h3,
.fav-only h3 {
    margin-right: .5rem;
}

.list-box {
    width: 70%;
    /* border: 2px solid springgreen; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    font-size: 1rem;
    background-color: var(--secondary-background);
    border-radius: 40px;
    box-shadow: 10px 10px 20px #1d1d1d;
    margin: 2rem 0;
    outline: 2px solid var(--secondary-gradient);
}

.list-box hr {
    height: 4px;
    color: var(--active-and-hover);
    background-color: var(--active-and-hover);
    margin: 1rem 0;
    border: 0;
}

.list-box i {
    font-size: 1.4rem;
}

.list-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fav-only {
    display: flex;
    justify-content: center;
    align-items: center;
}

.category {
    width: 100%;
    margin: 2rem;
}

.category ul {
    list-style-type: none;
}

.category ul li {
    padding: 1rem;
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: var(--list-background);
    box-shadow: 5px 5px 5px #252525;
}

.fav {
    background-image: linear-gradient(
        var(--primary-gradient),
        var(--secondary-gradient));
}

.info {
    display: flex;
    justify-content: space-between;
}

.desc {
    width: 40%;
}

.help-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.heart-fav {
    color: red;
}

</style>