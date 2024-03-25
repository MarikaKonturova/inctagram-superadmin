import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: ['./src/shared/api/**/*.ts'],
  generates: {
    'src/shared/': {
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
    'src/shared/types.ts': { plugins: ['typescript'] },
  },
  ignoreNoDocuments: true, // for better experience with the watcher
  schema: 'http://localhost:4000/graphql', //need change on our schema
}

export default config
