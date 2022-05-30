import { authorsFetch } from '@/services/authorsService';

export default {
	namespaced: true,
	state: () => ({
		authors: [],
	}),

	actions: {
		addAuthor({ commit }, author) {
			commit('pushAuthor', author);
		},

		deleteAuthor({ commit }, deletedAuthor) {
			commit('delete', deletedAuthor);
		},
		tescik({ commit }, payload) {
			commit('jajko', payload);
		},
		pushFetched({ commit }, authors) {
			commit('fetch', authors);
		},
		fetchAuthors({ commit }) {
			authorsFetch()
				.then((response) => response.json())
				.then((data) => commit('FETCH_AUTHORS', data));
		},
	},

	mutations: {
		pushAuthor(state, author) {
			state.authors.push(author);
		},
		FETCH_AUTHORS(state, data) {
			state.authors = data;
		},
		fetch(state, authors) {
			state.authors = authors;
		},

		delete(state, deletedAuthor) {
			const filtered = state.authors.filter(
				(author) => author.slug !== deletedAuthor
			);
			state.authors = filtered;
		},
		jajko(state, payload) {
			let a = payload.a;
			let b = payload.b;

			Object.assign(state.authors[a], b);
		},
	},
};
