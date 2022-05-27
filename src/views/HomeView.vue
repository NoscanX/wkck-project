<template>
  <div class="content">
        
        <div class="list-box" v-if="isLoggedInBuff">
            <div class="list-header">
                <div class="header">
                    <h1>Twoja lista</h1>
                    <h6>Zalogowano jako: {{ currentUserName }} </h6>
                </div>
                <div class="fav-wrap">
                    <div class="fav-only">
                        <h3>Pokaż tylko ulubione</h3>
                    <label class="switch">
                        <input type="checkbox" @click="toggleShowAll">
                        <span class="slider round"></span>
                    </label>
                    </div>
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
                                <fa class="icon" icon="pen" @click="toggleModal(song, 'SONGS')"/>
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
                                <fa class="icon" icon="pen" @click="toggleModal(book, 'BOOKS')"/>
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
                                <fa class="icon" icon="pen" @click="toggleModal(other, 'OTHERS')"/>
                                <fa class="icon" :class="{ favicon: other.isFav }" icon="heart" @click="toggleFav(other)"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div v-else class="error-login-box">
            <h1>Musisz się zalogować żeby zobaczyć listę!</h1>
            <img src="../assets/soczek.png" alt="soczek" class="juice-png">
        </div>
        
        <div v-if="showModal">
            <EditModalView @close="toggleModal" @reload="reloadHomeAfterUpdate">
            
            
            </EditModalView>
        </div>
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import LoginView from "./LoginView.vue";
import EditModalView from "./EditModalView.vue";
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getItem, setItem, deleteItemGlobal, updateFavGlobal, getIsLoggedIn, getUserName, getCurrentlyModified, setCurrentlyModified } from "./global.js";
import { useToast } from "vue-toastification";
const toast = useToast();

const songsBuff = ref([]);
const booksBuff = ref([]);
const othersBuff = ref([]);

const isLoggedInBuff = getIsLoggedIn();
const currentUserName = getUserName();

export default {

    setup() {

        const route = useRoute();
        const loginName = route.params.userName;

        getItem('SONGS').then((response)=>{
           songsBuff.value = response; 
        });
        getItem('BOOKS').then((response)=>{
           booksBuff.value = response; 
        });
        getItem('OTHERS').then((response)=>{
           othersBuff.value = response; 
        });

        return {
            loginName,
            isLoggedInBuff,
            currentUserName
        }
    },

    components: {
        LoginView,
        EditModalView
    },

    name: 'HomeView',
    data () {
        return {
            showAll: true,
            showModal: false,
            songs: songsBuff,
            books: booksBuff,
            others: othersBuff,
        }
    },
    methods: {
        toggleShowAll() {
            this.showAll = !this.showAll;
            if(this.showAll) {
                toast.success("Wyświetlono wszystkie pozycje z listy!", {
                    timeout: 2000
                });
            }
            else {
                toast.success("Wyświetlono ulubione elementy z listy!", {
                    timeout: 2000
                });
            }
        },

        toggleFav(listItem) {
            listItem.isFav = !listItem.isFav;
            songsBuff.value.forEach((item) => {
                if(listItem == item){
                    updateFavGlobal(item.id, 'SONGS', item);
                }
            })
            booksBuff.value.forEach((item) => {
                if(listItem == item){
                    updateFavGlobal(item.id, 'BOOKS', item);
                }
            })
            othersBuff.value.forEach((item) => {
                if(listItem == item){
                    updateFavGlobal(item.id, 'OTHERS', item);
                }
            })
            if(listItem.isFav) {
                toast.success("Pozycja dodana do ulubionych!", {
                    timeout: 2000
                });
            }
            else {
                toast.success("Pozycja usunięta z ulubionych!", {
                    timeout: 2000
                });
            }
        },

        toggleModal(itemToModify, setting) {
            setCurrentlyModified(itemToModify, setting);
            this.showModal = !this.showModal;
        },
        
        reloadHomeAfterUpdate() {
            getItem('SONGS').then((response)=>{
                songsBuff.value = response; 
            });
            getItem('BOOKS').then((response)=>{
                booksBuff.value = response; 
            });
            getItem('OTHERS').then((response)=>{
                othersBuff.value = response; 
            });
            this.showModal = !this.showModal;
        },

        deleteItem(listItem) {
            songsBuff.value = songsBuff.value.filter((item) => {
                if(listItem != item){
                    return true;
                }
                else {
                    deleteItemGlobal(item.id, 'SONGS')
                    return false;
                }
            })
            this.books = this.books.filter((item) => {
                if(listItem != item){
                    return true;
                }
                else {
                    deleteItemGlobal(item.id, 'BOOKS')
                    return false;
                }
            })
            this.others = this.others.filter((item) => {
                if(listItem != item){
                    return true;
                }
                else {
                    deleteItemGlobal(item.id, 'OTHERS')
                    return false;
                }
            })
            toast.success("Pozycja pomyślnie usunięta z listy!", {
                timeout: 2000
            });
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

.header {
    text-align: left;
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
    justify-content: center;
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

.error-login-box {
    margin-top: 10rem;
}

.juice-png {
    width: 200px;
    margin-top: 8rem;
}

</style>