import { ref } from 'vue'

const data = ref({songs:[], books:[], others:[]})

function getItem(){
    return data.value;
}

function setItem(item, setting){
    switch(setting) {
        case "SONGS":
            data.value.songs = [...data.value.songs, ...item];
            break;
        case "BOOKS":
            data.value.books = [...data.value.books, ...item];
            break;
        case "OTHERS":
            data.value.others = [...data.value.others, ...item];
            break;
    }
}

export {setItem, getItem};