export default

 {
    state: () => ({
    authors: [],
    id: 0,
   
        
    }),
    actions: {
        addAuthor({commit}, author) {
        commit('pushAuthor', author)
        },
    },

    mutations: {
        pushAuthor(state, author) {
            state.authors.push(author)
            
        },
    
    } ,
    getters: {
 dupa () {
     return state.author
 }
    }

}


