import type { GetPokemonListQuery } from '@/shared/api/gen/graphql'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/components/Card/Card'

// スプライトデータの型定義
interface SpriteData {
  front_default?: string
  [key: string]: unknown
}

type Pokemon = GetPokemonListQuery['pokemon'][number]

interface PokemonCardProps {
  pokemon: Pokemon
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{pokemon.name}</CardTitle>
        <CardDescription>#{pokemon.id}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        {pokemon.pokemonsprites.length > 0 && (
          <img
            src={(pokemon.pokemonsprites[0]?.sprites as SpriteData)?.front_default}
            alt={pokemon.name}
            className="mx-auto w-24 h-24"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
      </CardContent>
    </Card>
  )
}
