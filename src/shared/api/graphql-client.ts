import { GraphQLClient } from 'graphql-request'

// ポケモンAPI GraphQL エンドポイント
const GRAPHQL_ENDPOINT = 'https://graphql.pokeapi.co/v1beta2'

// GraphQL クライアント
export const graphQLClient = new GraphQLClient(GRAPHQL_ENDPOINT)
