import { defineConfig } from 'astro/config'
import db from '@astrojs/db'
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
	integrations: [db(), partytown()]
})
