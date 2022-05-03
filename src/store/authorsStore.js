export default

 {
    state: () => ({
    authors: [],
    
   
        
    }),
    actions: {
        addAuthor({commit}, author) {
        commit('pushAuthor', author)
        },
        deleteAuthor({commit}, deletedAuthor) {
            commit('delete', deletedAuthor)
        }
    },

    mutations: {
        pushAuthor(state, author) {
            state.authors.push(author)
        },

        delete(state, deletedAuthor) {
            const filtered = state.authors.filter(author=> author.id !== deletedAuthor)
            state.authors = filtered
        }
    
    } ,
    

}


