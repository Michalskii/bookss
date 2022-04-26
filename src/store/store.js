import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  
  

    state:{
  
    genres: [],
    authors: [],
    genre: {},
    
},

actions: {
    addAuthor({commit}, author) {

        commit('pushAuthor', author)
    },
},
mutations: {
    pushAuthor(state, author) {
        state.authors.push(author)
        console.log(state.authors)
        
    },

    initialiseStore(state) {
        // Check if the ID exists
        if(localStorage.getItem('store')) {
            // Replace the state object with the stored item
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