import adapter from '@sveltejs/adapter-node';

export default {
	kit: {
		adapter: adapter(),
		paths: {
			base: '/dictionary-s96x',  // Ensure this matches the path in Render
		  },
	}
};