import { createFileRoute } from '@tanstack/react-router'
import { PokemonListPage } from '@/pages/pokemon/ui/PokemonListPage'

export const Route = createFileRoute('/pokemon')({
  component: PokemonListPage,
})
