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
        },
        tescik({commit}, payload) {
            commit('jajko', payload)
        }
    },

    mutations: {
        pushBook(state, book) {
            state.books.push(book)
            
            
        },
        delete(state, deletedBook) {
            // const filtered = state.books.filter(book=> book.id !== deletedBook)
            // state.books = filtered

            state.books = state.books.filter(book=> book.id !== deletedBook)
            
            
        },
        update(state, bookList) {
            state.books = bookList
        },
        jajko(state,payload) {
            let a = payload.a
            let b = payload.b
            console.log(a, b)

            Object.assign(state.books[a], b);
            
      
        }
    }

}