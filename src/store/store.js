import Vue from 'vue';
import Vuex from 'vuex';
import authorsStore from '../store/authorsStore'
import genresStore from '../store/genresStore'
import booksStore from '../store/booksStore'


Vue.use(Vuex);

export const store = new Vuex.Store({


    modules : {
        authorsStore,
        genresStore,
        booksStore
    },

    state: () => ({
    
    
    
}),
actions: {
  
},
mutations: {
  

    initialiseStore(state) {
        if(localStorage.getItem('store')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('store')))
            );
        }
    }
},


})


store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});