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
	excludePublic: ['./public/**/*'],
	includePublic: false, //* 3D-models in public with lossless quality
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
		palette: true,
	},
	jpeg: {
		quality: 95,
	},
	jpg: {
		quality: 95,
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
	// site: 'https://01dev.ru',
	// base: '/',
	build: {
		emptyOutDir: true,
		outDir: path.resolve(__dirname, './build'),
	},
	server: {
		hmr: true,
		port: 5173,
		host: '0.0.0.0',
	},
});
