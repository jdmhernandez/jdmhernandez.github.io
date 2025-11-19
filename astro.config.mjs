// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({

  site: 'https://jdmhernandez.github.io/',
  base: '/my-repo',


	integrations: [
		starlight({
			title: 'Justin Hernandez',
			social: [{ icon: 'github', label: 'GitHub', href: 'hhttps://github.com/jdmhernandez' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
