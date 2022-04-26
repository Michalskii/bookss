export default

 {
    state: () => ({
    books: [],
      
        
    }),
    actions: {
        addBook({commit}, book) {
        commit('pushBook', book)
        },
    },

    mutations: {
        pushBook(state, book) {
            state.books.push(book)
            
            
        },
    }

}