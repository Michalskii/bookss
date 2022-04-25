import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
state:{
    fruits: [
        {name: 'banana', price : 20},
        {name :'arbuz' , price: 10}
    ],
    genres: [],
    authors: [],
    genre: {}
},


mutations: {

    updateGenres: state => {
        let genre = 'dsa'
        console.log(genre)
    }
}


})