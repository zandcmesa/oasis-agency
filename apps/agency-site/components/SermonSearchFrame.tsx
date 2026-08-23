import { WorkFrame } from "./WorkFrame";

export function SermonSearchFrame() {
  return (
    <WorkFrame title="cornerstonechurchma.com/sermons">
      <div className="p-8 min-h-[600px]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-ink mb-2">Sermon Search</h1>
          <p className="text-ink/60">
            Search across 170+ sermons by topic, scripture, or keyword
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-8">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value="faith and perseverance"
            readOnly
            className="w-full pl-12 pr-4 py-4 text-lg border border-ink/20 rounded-xl bg-white text-ink"
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <p className="text-sm text-ink/60">3 sermons found</p>

          {/* Result 1 */}
          <div className="border border-ink/10 rounded-xl p-5 bg-white">
            <div className="flex gap-4">
              <div className="w-24 h-16 bg-soft-clay/30 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-ink">Walking in Faith</h3>
                <p className="text-sm text-ink/50 mt-1">January 14, 2024</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="bg-oasis-green/10 rounded-lg px-4 py-3">
                <p className="text-sm text-ink leading-relaxed">
                  "…Today we talk about <span className="font-semibold">faith and perseverance</span> through trials…"
                </p>
                <span className="text-xs text-oasis-green mt-1 inline-block">
                  Jump to 0:45 →
                </span>
              </div>
              <div className="bg-oasis-green/10 rounded-lg px-4 py-3">
                <p className="text-sm text-ink leading-relaxed">
                  "…God calls us to <span className="font-semibold">persevere</span> in faith even when we can't see the outcome…"
                </p>
                <span className="text-xs text-oasis-green mt-1 inline-block">
                  Jump to 12:30 →
                </span>
              </div>
            </div>
          </div>

          {/* Result 2 */}
          <div className="border border-ink/10 rounded-xl p-5 bg-white">
            <div className="flex gap-4">
              <div className="w-24 h-16 bg-soft-clay/30 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-ink">Trusting God in Trials</h3>
                <p className="text-sm text-ink/50 mt-1">March 3, 2024</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-oasis-green/10 rounded-lg px-4 py-3">
                <p className="text-sm text-ink leading-relaxed">
                  "…James teaches us about <span className="font-semibold">faith</span> tested through trials…"
                </p>
                <span className="text-xs text-oasis-green mt-1 inline-block">
                  Jump to 8:15 →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkFrame>
  );
}
