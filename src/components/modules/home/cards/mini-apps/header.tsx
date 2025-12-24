import { ChevronRight } from 'lucide-react'

export default function Hearer() {
  return (
    <div className="p-2 flex justify-between items-center">
      <div className="text-sm text-muted-foreground">
        Qi Exclusives
      </div>
      

      <div className="flex gap-1 items-center">
        <p>View All</p>
        <ChevronRight className="size-3" />
      </div>
    </div>
  )
}
