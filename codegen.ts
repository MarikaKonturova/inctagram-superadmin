import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/**/*.graphql'],

  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'shared/lib/apollo/schema.types.ts',
        extension: '.types.ts',
      },
    },
    'src/shared/lib/apollo/schema.types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true, // for better experience with the watcher
  schema: 'https://twin.cygan.lol/graphql',
}

export default config
