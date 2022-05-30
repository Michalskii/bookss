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
		tescik({ commit }, payload) {
			commit('jajko', payload);
		},
		pushFetched({ commit }, books) {
			commit('fetch', books);
		},
		fetchBooks({ commit }) {
			booksFetch()
				.then((response) => response.json())
				.then((data) => commit('FETCH_BOOKS', data));
		},
	},

	mutations: {
		pushBook(state, book) {
			state.books.push(book);
		},
		FETCH_BOOKS(state, data) {
			state.books = data;
		},
		fetch(state, books) {
			state.books = books;
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

			Object.assign(state.books[a], b);
		},
	},
};
