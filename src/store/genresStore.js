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
		tescik({ commit }, payload) {
			commit('jajko', payload);
		},
		pushFetched({ commit }, genres) {
			commit('fetch', genres);
		},
		fetchGenres({ commit }) {
			genresFetch()
				.then((response) => response.json())
				.then((data) => commit('FETCH_GENRES', data));
		},
	},

	mutations: {
		pushGenre(state, genre) {
			state.genres.push(genre);
		},
		FETCH_GENRES(state, data) {
			state.genres = data;
		},
		fetch(state, genres) {
			state.genres = genres;
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

			Object.assign(state.genres[a], b);
		},
	},
};
