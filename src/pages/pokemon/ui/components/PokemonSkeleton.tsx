import { Card, CardContent, CardHeader } from '@/shared/ui/components/Card/Card'
import { Skeleton } from '@/shared/ui/components/Skelton/Skeleton'

export function PokemonSkeleton() {
  return (
    <Card>
      <CardHeader className="text-center">
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-16 mx-auto" />
      </CardHeader>
      <CardContent className="text-center">
        <Skeleton className="h-24 w-24 mx-auto rounded-full" />
      </CardContent>
    </Card>
  )
}
