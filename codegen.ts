import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/shared/api/**/*.ts'],
  generates: {
    'src/': {
      config: {
        withHooks: true,
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
        extension: '.generated.tsx',
      },
    },
    'src/shared/types/types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true, // for better experience with the watcher
  schema: 'https://twin.cygan.lol/graphql',
}

export default config
