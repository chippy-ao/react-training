import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://graphql.pokeapi.co/v1beta2',
  documents: ['./src/**/*.(tsx|ts)', './src/shared/api/graphql/query/*.graphql'],
  generates: {
    './src/shared/api/graphql/gen/': {
      preset: 'client',
      plugins: [],
    },
  },
  config: {
    enumsAsTypes: true,
  },
}

export default config
