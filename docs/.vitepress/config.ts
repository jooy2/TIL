import { generateSidebar } from 'vitepress-sidebar';
import { defineConfig } from 'vitepress';
import { generateI18nLocale, generateI18nSearch } from 'vitepress-i18n';
import { name, repository, description, homepage } from '../../package.json';

const defaultLocale: string = 'ko';
const defineSupportLocales = [{ label: defaultLocale, translateLocale: defaultLocale }];

const editLinkPattern = 'https://github.com/jooy2/til/edit/master/docs/:path';

// Ref: https://vitepress.vuejs.org/config/introduction
export default defineConfig({
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
		sidebar: generateSidebar({
			documentRootPath: 'docs',
			collapseDepth: 2,
			capitalizeFirst: true,
			underscoreToSpace: true,
			useTitleFromFileHeading: true,
			useTitleFromFrontmatter: true
		}),
		search: generateI18nSearch({
			defineLocales: defineSupportLocales,
			rootLocale: defaultLocale,
			provider: 'local'
		}),
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
	},
	locales: generateI18nLocale({
		description: {
			ko: description
		},
		defineLocales: defineSupportLocales,
		rootLocale: defaultLocale,
		editLinkPattern
	})
});
