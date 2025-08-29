import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/components/Pagination/Pagination'

interface PokemonPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function PokemonPagination({ currentPage, totalPages, onPageChange }: PokemonPaginationProps) {
  const handlePrevious = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  const handleNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  const handlePageClick = (page: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onPageChange(page)
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" size="default" onClick={handlePrevious} />
        </PaginationItem>

        {/* 簡単なページネーション表示 */}
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          const page = Math.max(1, currentPage - 2) + i
          if (page > totalPages) return null

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                size="default"
                isActive={currentPage === page}
                onClick={handlePageClick(page)}
                className={currentPage === page ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationNext href="#" size="default" onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
