export default

 {
     namespaced:true,
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

        updateList({commit}, bookList) {
            commit('update', bookList)
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
        update(state, bookList) {
            state.books = bookList
        }
    }

}