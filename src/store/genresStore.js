export default

 {
    state: () => ({
    genres: [],
      
        
    }),
    actions: {
        addGenre({commit}, genre) {
        commit('pushGenre', genre)
        },
    },

    mutations: {
        pushGenre(state, genre) {
            state.genres.push(genre)
            
            
        },
    }

}