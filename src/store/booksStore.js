export default

 {
    state: () => ({
    books: [],
      
        
    }),
    actions: {
        addBook({commit}, book) {
        commit('pushBook', book)
        },
        
        deleteBook({commit}, deletedBook) {
            commit('delete', deletedBook)
        },

        updateList({commit}, dupa) {
            commit('updateBookList', dupa)
        }
    },

    mutations: {
        pushBook(state, book) {
            state.books.push(book)
            
            
        },
        delete(state, deletedBook) {
            const filtered = state.books.filter(book=> book.id !== deletedBook)
            state.books = filtered
            
        },
        updateBookList(state, dupa) {
            state.books = dupa
        }
    }

}