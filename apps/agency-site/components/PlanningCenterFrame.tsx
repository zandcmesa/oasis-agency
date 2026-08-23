import { WorkFrame } from "./WorkFrame";

export function PlanningCenterFrame() {
  return (
    <WorkFrame title="cornerstonechurchma.com/groups">
      <div className="p-8 min-h-[600px]">
        {/* Header with unified nav */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ink rounded-lg"></div>
            <span className="font-bold text-ink">Cornerstone Church</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <span className="text-ink/50">Sermons</span>
            <span className="text-oasis-green font-medium">Groups</span>
            <span className="text-ink/50">Events</span>
            <span className="text-ink/50">Give</span>
          </nav>
        </div>

        {/* Page content */}
        <div>
          <h1 className="text-3xl font-bold text-ink mb-2">Growth Groups</h1>
          <p className="text-ink/60 mb-8">
            Life is better together. Find a group and go deeper.
          </p>

          <div className="space-y-4">
            {/* Group 1 */}
            <div className="bg-white border border-ink/10 rounded-xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-ink">Men's Bible Study</h3>
                  <p className="text-sm text-ink/50 mt-1">
                    Tuesdays at 6:30 AM · Room 104
                  </p>
                  <p className="text-sm text-ink/50">Led by David Chen</p>
                </div>
                <span className="text-xs bg-oasis-green/20 text-oasis-green px-2 py-1 rounded-full">
                  3 spots left
                </span>
              </div>
              <button className="mt-4 text-sm font-medium text-oasis-green">
                Request to join →
              </button>
            </div>

            {/* Group 2 */}
            <div className="bg-white border border-ink/10 rounded-xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-ink">Young Adults</h3>
                  <p className="text-sm text-ink/50 mt-1">
                    Fridays at 7:00 PM · The Loft
                  </p>
                  <p className="text-sm text-ink/50">Led by Sarah Mitchell</p>
                </div>
                <span className="text-xs bg-oasis-green/20 text-oasis-green px-2 py-1 rounded-full">
                  8 spots left
                </span>
              </div>
              <button className="mt-4 text-sm font-medium text-oasis-green">
                Request to join →
              </button>
            </div>

            {/* Group 3 */}
            <div className="bg-white border border-ink/10 rounded-xl p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-ink">Marriage & Family</h3>
                  <p className="text-sm text-ink/50 mt-1">
                    Thursdays at 7:00 PM · Room 201
                  </p>
                  <p className="text-sm text-ink/50">Led by Tom & Lisa Warren</p>
                </div>
                <span className="text-xs bg-oasis-green/20 text-oasis-green px-2 py-1 rounded-full">
                  2 spots left
                </span>
              </div>
              <button className="mt-4 text-sm font-medium text-oasis-green">
                Request to join →
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-oasis-green/10 border border-oasis-green/20 rounded-xl">
            <p className="text-sm text-ink/70">
              <span className="font-semibold text-oasis-green">One experience.</span>{" "}
              Notice: you never left cornerstonechurchma.com
            </p>
          </div>
        </div>
      </div>
    </WorkFrame>
  );
}
