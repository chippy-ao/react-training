import { GraphQLClient } from 'graphql-request'

const POKEAPI_GRAPHQL_ENDPOINT = 'https://graphql.pokeapi.co/v1beta2'

export const graphqlClient = new GraphQLClient(POKEAPI_GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
})
