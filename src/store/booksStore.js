import { booksFetch } from '@/services/booksService';

export default {
	namespaced: true,
	state: () => ({
		books: [],
		bbb: [],
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
		editBook({ commit }, payload) {
			commit('saveEditedBook', payload);
		},

		fetchBooks({ commit }) {
			booksFetch()
				.then((response) => response.json())
				.then((data) => commit('updateBooksList', data));
		},
	},

	mutations: {
		pushBook(state, book) {
			state.books.push(book);
		},
		updateBooksList(state, data) {
			state.books = data;
		},

		delete(state, deletedBook) {
			state.books = state.books.filter((book) => book.slug !== deletedBook);
		},
		update(state, bookList) {
			state.books = bookList;
		},
		saveEditedBook(state, payload) {
			let a = payload.a;
			let b = payload.b;

			Object.assign(state.books[a], b);
		},
	},
};
