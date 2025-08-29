import { useQuery } from '@tanstack/react-query'
import { graphql } from '@/shared/api/gen'
import { graphQLClient } from '@/shared/api/graphql-client'

const GET_POKEMON_LIST = graphql(`
  query GetPokemonList($limit: Int!, $offset: Int!) {
    pokemon(limit: $limit, offset: $offset) {
      id
      name
      pokemonsprites {
        sprites
      }
    }
  }
`)

// ポケモン一覧取得（名前と画像）
export function usePokemonList(page: number = 1, limit: number = 10) {
  const offset = (page - 1) * limit

  return useQuery({
    queryKey: ['pokemonList', page, limit],
    queryFn: () => {
      return graphQLClient.request(GET_POKEMON_LIST, {
        limit,
        offset,
      })
    },
  })
}
