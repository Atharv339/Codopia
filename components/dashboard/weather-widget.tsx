import { Cloud, Droplets, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WeatherWidget() {
  return (
    <Card className="border-border/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Weather Forecast
        </CardTitle>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
          <Cloud className="h-4 w-4 text-blue-500" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold">28°C</div>
            <p className="text-sm text-muted-foreground">Partly Cloudy</p>
          </div>
          <div className="text-6xl opacity-80">🌤️</div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-border pt-4">
          <div className="flex flex-col items-center gap-1">
            <Droplets className="h-4 w-4 text-blue-500" />
            <span className="text-xs text-muted-foreground">Humidity</span>
            <span className="text-sm font-medium">65%</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Wind className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Wind</span>
            <span className="text-sm font-medium">12 km/h</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Thermometer className="h-4 w-4 text-orange-500" />
            <span className="text-xs text-muted-foreground">Feels</span>
            <span className="text-sm font-medium">30°C</span>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-amber-500/10 p-3">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
            Rain Expected Tomorrow
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            60% chance of rainfall, 15-20mm expected
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
