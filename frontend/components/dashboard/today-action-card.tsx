import { Zap, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TodayActionCard() {
  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-primary">
          <Zap className="h-4 w-4" />
          Today&apos;s Most Important Action
        </CardTitle>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          Updated 2 hours ago
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold">Apply Nitrogen Fertilizer</h3>
        <p className="mt-2 text-muted-foreground">
          Wait until the rainfall stops completely, then apply 50kg/hectare of urea. 
          Best time: Tomorrow morning between 6-8 AM when soil is still moist.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Fertilizer
          </span>
          <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
            Weather Dependent
          </span>
        </div>
        <div className="mt-4">
          <Button variant="outline" size="sm" className="gap-2 rounded-lg bg-transparent">
            View Details
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
