import { generateSidebar } from 'vitepress-sidebar';
import { name, description, repository, homepage } from '../../package.json';

// Ref: https://vitepress.vuejs.org/config/introduction
export default {
	title: name.toUpperCase(),
	description,
	outDir: '../dist',
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-16.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
	],
	cleanUrls: true,
	sitemap: {
		hostname: homepage
	},
	themeConfig: {
		sidebar: generateSidebar({
			documentRootPath: 'docs',
			collapseDepth: 2,
			capitalizeFirst: true,
			useTitleFromFileHeading: true
		}),
		search: {
			provider: 'local'
		},
		nav: [
			{
				text: 'Blog',
				link: 'https://jootc.com'
			}
		],
		socialLinks: [{ icon: 'github', link: repository.url.replace('.git', '') }]
	}
};
