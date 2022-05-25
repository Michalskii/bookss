export default {
	namespaced: true,
	state: () => ({
		genres: [],
	}),
	actions: {
		addGenre({ commit }, genre) {
			commit('pushGenre', genre);
		},
		deleteGenre({ commit }, deletedGenre) {
			commit('delete', deletedGenre);
		},
		tescik({ commit }, payload) {
			commit('jajko', payload);
		},
		pushFetched({ commit }, genres) {
			commit('fetch', genres);
		},
	},

	mutations: {
		pushGenre(state, genre) {
			state.genres.push(genre);
		},
		fetch(state, genres) {
			console.log(genres);
			state.genres = genres;
			console.log(state.genres);
		},
		delete(state, deletedGenre) {
			const filtered = state.genres.filter(
				(genre) => genre.slug !== deletedGenre
			);
			state.genres = filtered;
		},
		jajko(state, payload) {
			let a = payload.a;
			let b = payload.b;
			console.log(a, b);

			Object.assign(state.genres[a], b);
		},
	},
};
