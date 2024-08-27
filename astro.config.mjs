import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import partytown from '@astrojs/partytown';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), partytown()],
  output: "server",
  adapter: netlify()
});