import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './src/structure'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Web2EB',

  projectId: 'cj8je4w1',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },
})
