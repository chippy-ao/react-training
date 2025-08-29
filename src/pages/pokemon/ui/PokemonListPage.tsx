import { useState } from 'react'
import { usePokemonList } from '../api/usePokemonList'
import { PokemonGrid } from './components/PokemonGrid'
import { PokemonPagination } from './components/PokemonPagination'

export function PokemonListPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const limit = 10

  const { data, isLoading, error } = usePokemonList(currentPage, limit)

  const totalPages = Math.ceil(1000 / limit) // ポケモンは約1000体いると仮定

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-foreground">ポケモン図鑑</h1>

        {error && (
          <div className="text-center mb-8">
            <p className="text-destructive text-xl">エラー: {error.message}</p>
          </div>
        )}

        <PokemonGrid pokemon={data?.pokemon} isLoading={isLoading} currentPage={currentPage} limit={limit} />

        {!error && (
          <PokemonPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </div>
  )
}
