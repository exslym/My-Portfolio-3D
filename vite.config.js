import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const DEFAULT_OPTIONS = {
	test: /\.(jpe?g|png|tiff|webp|svg|avif)$/i,
	exclude: undefined,
	include: undefined,
	includePublic: true,
	logStats: true,
	svg: {
		multipass: true,
		plugins: [
			{
				name: 'preset-default',
				params: {
					overrides: {
						cleanupNumericValues: false,
						removeViewBox: false, // https://github.com/svg/svgo/issues/1128
					},
					cleanupIDs: {
						minify: false,
						remove: false,
					},
					convertPathData: false,
				},
			},
			'sortAttrs',
			{
				name: 'addAttributesToSVGElement',
				params: {
					attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
				},
			},
		],
	},
	png: {
		quality: 100,
	},
	jpeg: {
		quality: 90,
	},
	jpg: {
		quality: 90,
	},
	tiff: {
		quality: 100,
	},
	gif: {},
	webp: {
		lossless: true,
	},
	avif: {
		lossless: true,
	},
};

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			DEFAULT_OPTIONS,
		}),
		ViteAliases(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
	],
	site: 'https://exslym.github.io',
	base: '/My-Portfolio-3D',
	build: {
		emptyOutDir: true,
		outDir: path.resolve(__dirname, './build'),
	},
	// server: {
	// 	port: 3000,
	// 	host: '0.0.0.0',
	// 	hmr: true,
	// },
});
