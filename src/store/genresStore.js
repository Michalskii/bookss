export default

 {
     namespaced: true,
    state: () => ({
    genres: [],
      
        
    }),
    actions: {
        addGenre({commit}, genre) {
        commit('pushGenre', genre)
        },
        deleteGenre({commit}, deletedGenre) {
            commit('delete', deletedGenre)
        }
    },

    mutations: {
        pushGenre(state, genre) {
            state.genres.push(genre)
            
            
        },
        delete(state, deletedGenre) {
            const filtered = state.genres.filter(genre=> genre.id !== deletedGenre)
            state.genres = filtered
        }
    }

}