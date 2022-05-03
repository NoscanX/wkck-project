<template>
  <div class="content">
        
        <div class="list-box">
            <div class="list-header">
                <div class="header">
                    <h1>Twoja lista</h1>
                </div>
                <div class="fav-wrap">
                    <div class="fav-only">
                        <h3>Pokaż tylko ulubione</h3>
                    <label class="switch">
                        <input type="checkbox" @click="toggleShowAll">
                        <span class="slider round"></span>
                    </label>
                    </div>
                    <!-- <div>
                        <h1>Zaloguj sie lepiej</h1>
                        <button @click="toggleModal">sdasdas</button>
                    </div> -->
                </div>
            </div>
            <div class="category music">
                <h2>Kategoria: Muzyka <fa class="icon-header" icon="music"/></h2>
                <hr>
                <ul>
                    <li v-for="song in filteredSongs" :key="song.id" :class="{ fav: song.isFav }">
                        <div class="info">
                            <div class="title-box">
                                <p> {{ song.title }} </p>
                            </div>
                            <div class="description-box">
                                <p class="desc"> {{ song.description }} </p>
                            </div>
                            <div class="icons">
                                <fa class="icon" icon="trash" @click="deleteItem(song)"/>
                                <fa class="icon" icon="pen"/>
                                <fa class="icon" :class="{ favicon: song.isFav }" icon="heart" @click="toggleFav(song)"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="category books">
                <h2>Kategoria: Książki <fa class="icon-header" icon="book"/></h2>
                <hr>
                <ul>
                    <li v-for="book in filteredBooks" :key="book.id" :class="{ fav: book.isFav }">
                        <div class="info">
                            <div class="title-box">
                                <p> {{ book.title }} </p>
                            </div>
                            <div class="description-box">
                                <p class="desc"> {{ book.description }} </p>
                            </div>
                            <div class="icons">
                                <fa class="icon" icon="trash" @click="deleteItem(book)"/>
                                <fa class="icon" icon="pen"/>
                                <fa class="icon" :class="{ favicon: book.isFav }" icon="heart" @click="toggleFav(book)"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="category other">
                <h2>Kategoria: Inne <fa class="icon-header" icon="bookmark"/></h2>
                <hr>
                <ul>
                    <li v-for="other in filteredOthers" :key="other.id" :class="{ fav: other.isFav }">
                        <div class="info">
                            <div class="title-box">
                                <p> {{ other.title }} </p>
                            </div>
                            <div class="description-box">
                                <p class="desc"> {{ other.description }} </p>
                            </div>
                            <div class="icons">
                                <fa class="icon" icon="trash" @click="deleteItem(other)"/>
                                <fa class="icon" icon="pen"/>
                                <fa class="icon" :class="{ favicon: other.isFav }" icon="heart" @click="toggleFav(other)"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div v-if="showModal">
            <AddModalView theme="sale" @close="toggleModal">
            
            
            </AddModalView>
        </div>  
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import LoginView from "./LoginView.vue";
import AddModalView from "./AddModalView.vue";

export default {

    components: {
        LoginView,
        AddModalView
    },

    name: 'HomeView',
    data () {
        return {
            showAll: true,
            showModal: false,
            newTitle: '',
            newDescription: '',
            songs: [
                { 
                    title: 'Above & Beyond - Gratitude', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
                    isFav: true 
                },
                { 
                    title: 'Tinlicker - Be Here and Now', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est velit minus incidunt temporibus cumque nulla eum corrupti molestias atque ipsa excepturi, autem corporis ab, id perspiciatis libero accusamus deleniti aut vero impedit nemo. Accusantium perferendis cupiditate quae aut praesentium quidem.', isFav: true 
                },
                { 
                    title: 'gardenstate, Oliver Smith - By Your Side', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    isFav: false 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: true 
                },
            ],
            nextItem: '',

            books: [
                { 
                    title: 'Adam Mickiewicz - Dziady', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
                    isFav: true 
                },
                { 
                    title: 'Jeremy Clarkson - Świat według Clarksona', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    isFav: false 
                },
                { 
                    title: 'gardenstate, Oliver Smith - By Your Side', 
                    description: 'Lorem ipsum dolor sit amet. Fajna książka.', 
                    isFav: false 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: true 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: false 
                },
            ],

            others: [
                { 
                    title: 'Adam Mickiewicz - Dziady', 
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
                    isFav: true 
                },
                { 
                    title: 'Jeremy Clarkson - Świat według Clarksona', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    isFav: false 
                },
                { 
                    title: 'gardenstate, Oliver Smith - By Your Side', 
                    description: 'Lorem ipsum dolor sit amet. Fajna książka.', 
                    isFav: false 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: true 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: false 
                },
                { 
                    title: 'Jeremy Clarkson - Świat według Clarksona', 
                    description: 'Lorem ipsum dolor sit amet.', 
                    isFav: false 
                },
                { 
                    title: 'gardenstate, Oliver Smith - By Your Side', 
                    description: 'Lorem ipsum dolor sit amet. Fajna książka.', 
                    isFav: false 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: true 
                },
                { 
                    title: 'Above & Beyond - Believer', 
                    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, beatae?', 
                    isFav: false 
                },
            ],
        }
    },
    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
        },
        toggleFav(song) {
            song.isFav = !song.isFav;
        },
        toggleModal() {
            this.showModal = !this.showModal
        },
        deleteItem(listItem) {
            this.songs = this.songs.filter((item) => {
                return listItem != item
            })
            this.books = this.books.filter((item) => {
                return listItem != item
            })
            this.others = this.others.filter((item) => {
                return listItem != item
            })
        }
    },
    computed: {
        filteredSongs() {
            if(!this.showAll) {
                return this.songs.filter(song => song.isFav)
            }else {
                return this.songs;
            }
        },
        filteredBooks() {
            if(!this.showAll) {
                return this.books.filter(book => book.isFav)
            }else {
                return this.books;
            }
        },
        filteredOthers() {
            if(!this.showAll) {
                return this.others.filter(other => other.isFav)
            }else {
                return this.others;
            }
        }
    }
}
</script>

<style lang="css">



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
    margin: 5rem 0 2rem 0;
    outline: 2px solid var(--accents);
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
    align-items: center;
}

.fav-wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 80px;
}

.category {
    width: 100%;
    margin: 2rem;
}

.category ul {
    list-style-type: none;
    max-height: 400px;
    overflow-y: scroll;
}

.category ul li {
    padding: 1rem;
    border-radius: 20px;
    margin: 1.4rem 0;
    background-color: var(--list-background);
    box-shadow: 5px 5px 5px #252525;
    width: 98%;
}

.fav {
    background-image: linear-gradient(
        var(--primary-gradient),
        var(--secondary-gradient));
}

.favicon {
    color: red;
}

.info {
    display: flex;
    justify-content: space-between;
}

.title-box {
    width: 25%;
    display: flex;
    text-align: left;
}

.description-box {
    width: 50%;
    text-align: left;
}

.icons {
    display: flex;
    width: 10%;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
}

.icon {
    margin: 0 .2rem;
}

.icon:hover {
    cursor: pointer;
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