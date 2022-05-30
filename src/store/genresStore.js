import { genresFetch } from '@/services/genresService';

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
		editGenre({ commit }, payload) {
			commit('saveEditedGenre', payload);
		},

		fetchGenres({ commit }) {
			genresFetch()
				.then((response) => response.json())
				.then((data) => commit('updateGenresList', data));
		},
	},

	mutations: {
		pushGenre(state, genre) {
			state.genres.push(genre);
		},
		updateGenresList(state, data) {
			state.genres = data;
		},

		delete(state, deletedGenre) {
			const filtered = state.genres.filter(
				(genre) => genre.slug !== deletedGenre
			);
			state.genres = filtered;
		},
		saveEditedGenre(state, payload) {
			let a = payload.a;
			let b = payload.b;

			Object.assign(state.genres[a], b);
		},
	},
};
