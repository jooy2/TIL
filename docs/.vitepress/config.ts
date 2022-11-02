import { generateSidebar } from 'vitepress-sidebar';
import { BUNDLED_LANGUAGES } from 'shiki';

// Ref: https://vitepress.vuejs.org/config/introduction

// @ts-ignore
BUNDLED_LANGUAGES.find((lang) => lang.id === 'json').aliases = ['json5'];

export default {
	title: 'TIL',
	description:
		"Jooy2's Today I Learned. 각종 분야에서 습득한 다양한 지식을 정리한 미니 블로그입니다.",
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
		socialLinks: [{ icon: 'github', link: 'https://github.com/jooy2/til' }]
	}
};
