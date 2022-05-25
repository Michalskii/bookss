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
	},

	mutations: {
		pushAuthor(state, author) {
			state.authors.push(author);
			console.log(author);
			console.log(state.authors);
		},
		fetch(state, authors) {
			console.log(authors);
			state.authors = authors;
			console.log(state.authors);
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
			console.log(a, b);

			Object.assign(state.authors[a], b);
		},
	},
};
