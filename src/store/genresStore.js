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
        },
        tescik({commit}, payload) {
            commit('jajko', payload)
        }
    },

    mutations: {
        pushGenre(state, genre) {
            state.genres.push(genre)
            
            
        },
        delete(state, deletedGenre) {
            const filtered = state.genres.filter(genre=> genre.id !== deletedGenre)
            state.genres = filtered
        },
        jajko(state,payload) {
            let a = payload.a
            let b = payload.b
            console.log(a, b)

            Object.assign(state.genres[a], b);
            
      
        }
    }

}