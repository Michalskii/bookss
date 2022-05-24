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
	},

	mutations: {
		pushAuthor(state, author) {
			state.authors.push(author);
		},

		delete(state, deletedAuthor) {
			const filtered = state.authors.filter(
				(author) => author.id !== deletedAuthor
			);
			state.authors = filtered;
		},
		jajko(state, payload) {
			let a = payload.a;
			let b = payload.b;
			console.log(a, b);

			Object.assign(state.authors[a], b);
		},
	},
};
