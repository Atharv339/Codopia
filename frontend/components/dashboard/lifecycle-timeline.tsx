import { Check, Sprout, Leaf, Flower2, Wheat, FileCheck } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stages = [
  { id: "planning", label: "Planning", icon: FileCheck, status: "completed", date: "Nov 15" },
  { id: "sowing", label: "Sowing", icon: Sprout, status: "completed", date: "Dec 1" },
  { id: "growth", label: "Growth", icon: Leaf, status: "current", date: "In Progress" },
  { id: "flowering", label: "Flowering", icon: Flower2, status: "upcoming", date: "Feb 15" },
  { id: "harvest", label: "Harvest", icon: Wheat, status: "upcoming", date: "Apr 1" },
]

export function LifecycleTimeline() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-lg">Crop Lifecycle Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-[22px] top-0 h-full w-0.5 bg-border" />
          <div className="absolute left-[22px] top-0 h-[40%] w-0.5 bg-primary" />

          <div className="space-y-6">
            {stages.map((stage) => (
              <div key={stage.id} className="relative flex items-center gap-4">
                <div
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                    stage.status === "completed"
                      ? "border-primary bg-primary text-primary-foreground"
                      : stage.status === "current"
                      ? "border-primary bg-background text-primary"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  {stage.status === "completed" ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <stage.icon className="h-5 w-5" />
                  )}
                </div>
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p
                      className={`font-medium ${
                        stage.status === "current" ? "text-primary" : ""
                      }`}
                    >
                      {stage.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{stage.date}</p>
                  </div>
                  {stage.status === "current" && (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Current Stage
                    </span>
                  )}
                  {stage.status === "completed" && (
                    <span className="text-xs text-muted-foreground">Completed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
