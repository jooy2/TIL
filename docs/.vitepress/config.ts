import { generateSidebar } from 'vitepress-sidebar';
import { name, description, repository } from '../../package.json';

// Ref: https://vitepress.vuejs.org/config/introduction
export default {
	title: name.toUpperCase(),
	description,
	outDir: '../dist',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	cleanUrls: true,
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
