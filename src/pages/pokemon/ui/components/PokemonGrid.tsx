import { useMemo } from 'react'
import type { GetPokemonListQuery } from '@/shared/api/gen/graphql'
import { PokemonCard } from './PokemonCard'
import { PokemonSkeleton } from './PokemonSkeleton'

type Pokemon = GetPokemonListQuery['pokemon'][number]

interface PokemonGridProps {
  pokemon?: Pokemon[]
  isLoading: boolean
  currentPage: number
  limit: number
}

export function PokemonGrid({ pokemon, isLoading, currentPage, limit }: PokemonGridProps) {
  // スケルトン用のユニークキーを事前生成
  const skeletonKeys = useMemo(
    () => Array.from({ length: limit }, (_, i) => `skeleton-${currentPage}-${Date.now()}-${i}`),
    [currentPage, limit],
  )

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skeletonKeys.map((key) => (
          <PokemonSkeleton key={key} />
        ))}
      </div>
    )
  }

  if (!pokemon || pokemon.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-xl">ポケモンが見つかりませんでした</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pokemon.map((pokemonItem) => (
        <PokemonCard key={pokemonItem.id} pokemon={pokemonItem} />
      ))}
    </div>
  )
}
