import { withSidebar } from 'vitepress-sidebar';
import { defineConfig, UserConfig } from 'vitepress';
import { withI18n } from 'vitepress-i18n';
import type { VitePressI18nOptions } from 'vitepress-i18n/types';
import type { VitePressSidebarOptions } from 'vitepress-sidebar/types';
import { name, repository, description, homepage } from '../../package.json';

const defaultLocale: string = 'ko';

const vitePressI18nConfig: VitePressI18nOptions = {
	locales: [defaultLocale],
	rootLocale: defaultLocale,
	searchProvider: 'local',
	description: {
		ko: description
	}
};

const vitePressSidebarConfig: VitePressSidebarOptions = {
	documentRootPath: 'docs',
	collapseDepth: 2,
	capitalizeFirst: true,
	underscoreToSpace: true,
	manualSortFileNameByPriority: ['instructions.md'],
	useTitleFromFileHeading: true,
	useTitleFromFrontmatter: true
};

// Ref: https://vitepress.vuejs.org/config/introduction
const vitePressConfig: UserConfig = {
	title: name.toUpperCase(),
	lastUpdated: true,
	lang: 'ko-KR',
	outDir: '../dist',
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32.png' }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-16.png' }],
		['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
	],
	cleanUrls: true,
	metaChunk: true,
	rewrites: {
		'ko/:rest*': ':rest*'
	},
	sitemap: {
		hostname: homepage
	},
	themeConfig: {
		logo: { src: '/logo-32.png', width: 24, height: 24 },
		editLink: {
			pattern: 'https://github.com/jooy2/til/edit/master/docs/:path'
		},
		nav: [
			{
				text: 'Blog',
				link: 'https://jootc.com'
			}
		],
		socialLinks: [{ icon: 'github', link: repository.url.replace('.git', '') }],
		footer: {
			copyright: '© <a href="https://jooy2.com">Jooy2</a>'
		}
	}
};

export default defineConfig(
	withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)
);
