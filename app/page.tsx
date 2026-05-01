import { Users, ArrowRight, CheckCircle2 } from "lucide-react"

function TargetLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="50" fill="#CC0000" />
      <circle cx="50" cy="50" r="35" fill="white" />
      <circle cx="50" cy="50" r="20" fill="#CC0000" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] flex flex-col items-center px-4 py-8">
      {/* Target Logo */}
      <TargetLogo className="w-16 h-16 mb-6" />

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Top Row: Online Badge (left) + Exclusive Offer (center) */}
        <div className="flex items-center justify-between mb-6">
          {/* Online Users Badge */}
          <div className="flex items-center gap-1.5 bg-gray-100 rounded-full px-2.5 py-1 border border-gray-200">
            <Users className="w-3 h-3 text-red-500" />
            <span className="flex items-center gap-1 text-xs font-medium text-gray-700">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              999+ online
            </span>
          </div>
          
          {/* Exclusive Offer Badge */}
          <div className="flex items-center gap-1.5 bg-red-50 text-red-600 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
            <span className="text-xs font-medium">Exclusive Offer</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4 text-balance">
          Get a <span className="text-red-600">$750</span> Target Gift Card Today
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          Users who complete all steps qualify for this limited $750 gift card opportunity.
        </p>

        {/* Steps */}
        <div className="text-left mb-8 space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
            <p className="text-gray-700 text-sm">{"Click on \"Get Started\" below."}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
            <p className="text-gray-700 text-sm">Enter your email and basic information.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
            <p className="text-gray-700 text-sm">Complete 4-5+ recommended deals.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold">4</span>
            <p className="text-gray-700 text-sm">Claim reward through email.</p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://linkthem.net/aff_c?offer_id=250&aff_id=177750"
          className="w-full bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-red-500/30 transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="flex items-center gap-1.5 text-gray-600 text-sm">
            <TargetLogo className="w-4 h-4" />
            Your One-Stop Shop.
          </div>
          <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4" />
            Verified Offer
          </div>
        </div>
        <p className="text-gray-500 text-sm">© Rewards Center 2026</p>
      </footer>
    </main>
  )
}
