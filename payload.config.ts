import sharp from 'sharp'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Projects } from './src/collections/Projects'
import { Media } from './src/collections/Media'
import { Users } from './src/collections/Users'

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Portfolio Admin',
    },
  },
  collections: [Users, Projects, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL_WITHOUT_SSL,
    },
  }),
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
})
