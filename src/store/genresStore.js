import { genresFetch } from '@/services/genresService';

export default {
	namespaced: true,
	state: () => ({
		genres: [],
		fetchedByGenres: [],
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
		fetchBookList({ commit }, genre) {
			fetch(`https://wolnelektury.pl/api/genres/${genre.slug}/books/`)
				.then((response) => response.json())
				.then((data) => commit('updateFetchedGenres', data));
		},
	},

	mutations: {
		pushGenre(state, genre) {
			state.genres.push(genre);
		},
		updateGenresList(state, data) {
			state.genres = data;
		},
		updateFetchedGenres(state, data) {
			state.fetchedByGenres = data;
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
