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
		editAuthor({ commit }, payload) {
			commit('saveEditedAuthor', payload);
		},

		fetchAuthors({ commit }) {
			authorsFetch()
				.then((response) => response.json())
				.then((data) => commit('updateAuthorsList', data));
		},
	},

	mutations: {
		pushAuthor(state, author) {
			state.authors.push(author);
		},
		updateAuthorsList(state, data) {
			state.authors = data;
		},

		delete(state, deletedAuthor) {
			const filtered = state.authors.filter(
				(author) => author.slug !== deletedAuthor
			);
			state.authors = filtered;
		},
		saveEditedAuthor(state, payload) {
			let a = payload.a;
			let b = payload.b;

			Object.assign(state.authors[a], b);
		},
	},
};
