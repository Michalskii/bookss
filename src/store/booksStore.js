export default {
	namespaced: true,
	state: () => ({
		books: [],
	}),
	actions: {
		addBook({ commit }, book) {
			commit('pushBook', book);
		},

		deleteBook({ commit }, deletedBook) {
			commit('delete', deletedBook);
		},

		updateList({ commit }, bookList) {
			commit('update', bookList);
		},
		tescik({ commit }, payload) {
			commit('jajko', payload);
		},
		pushFetched({ commit }, books) {
			commit('fetch', books);
		},
	},

	mutations: {
		pushBook(state, book) {
			state.books.push(book);
		},
		fetch(state, books) {
			console.log(books);
			state.books = books;
			console.log(state.books);
		},
		delete(state, deletedBook) {
			state.books = state.books.filter((book) => book.slug !== deletedBook);
		},
		update(state, bookList) {
			state.books = bookList;
		},
		jajko(state, payload) {
			let a = payload.a;
			let b = payload.b;
			console.log(a, b);

			Object.assign(state.books[a], b);
		},
	},
};
