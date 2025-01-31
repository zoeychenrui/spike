import adapter from '@sveltejs/adapter-node';  // Import the Node adapter
import { defineConfig } from 'vite';

export default defineConfig({
  kit: {
    adapter: adapter(), // Use the Node adapter
    target: '#svelte',   // This is typically the default, ensuring SSR works
    // Additional configurations can go here
  },
});
