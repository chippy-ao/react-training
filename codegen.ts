import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://graphql.pokeapi.co/v1beta2',
  documents: ['./src/**/*.(tsx|ts)'],
  generates: {
    './src/shared/api/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
  config: {
    enumsAsTypes: true,
  },
}

export default config
