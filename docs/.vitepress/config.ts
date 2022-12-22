import { generateSidebar } from 'vitepress-sidebar';
import { BUNDLED_LANGUAGES } from 'shiki';
import { name, description, repository } from '../../package.json';

// Ref: https://vitepress.vuejs.org/config/introduction

// @ts-ignore
BUNDLED_LANGUAGES.find((lang) => lang.id === 'json').aliases = ['json5'];

export default {
	title: name.toUpperCase(),
	description,
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	themeConfig: {
		sidebar: generateSidebar({
			root: 'docs',
			collapseDepth: 2,
			capitalizeFirst: true,
			useTitleFromFileHeading: true
		}),
		nav: [
			{
				text: 'Blog',
				link: 'https://jootc.com'
			}
		],
		socialLinks: [{ icon: 'github', link: repository.url.replace('.git', '') }]
	}
};
