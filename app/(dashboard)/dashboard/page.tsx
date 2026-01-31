import { CropStageCard } from "@/components/dashboard/crop-stage-card"
import { TodayActionCard } from "@/components/dashboard/today-action-card"
import { WeatherWidget } from "@/components/dashboard/weather-widget"
import { LifecycleTimeline } from "@/components/dashboard/lifecycle-timeline"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Good Morning, Farmer</h2>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your wheat crop today.
        </p>
      </div>

      {/* Main grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Current Crop Stage */}
        <CropStageCard />

        {/* Today's Action - spans 2 columns on lg */}
        <div className="lg:col-span-2">
          <TodayActionCard />
        </div>

        {/* Weather Widget */}
        <WeatherWidget />

        {/* Lifecycle Timeline - spans 2 columns */}
        <div className="md:col-span-2">
          <LifecycleTimeline />
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />
    </div>
  )
}
