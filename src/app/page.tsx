import { Carousel } from "@/components/Carousel"
import { RomanticParticles } from "@/components/RomanticParticles"
import { LoveMessages } from "../components/LoveMessages"
import { Timer } from "../components/Timer"

export default async function Home() {
  const startDate = process.env.START_DATE

  if (!startDate) {
    console.error("Missing START_DATE environment variable")
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-red-50 flex flex-col lg:flex-row relative overflow-y-scroll overflow-x-hidden lg:overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl" />

      <div className="order-first lg:order-last lg:w-1/2 flex flex-col justify-center items-center space-y-8 p-4 lg:p-8 relative">
        {/* Heart decoration */}
        <div className="absolute -top-20 right-10 w-28 h-28 bg-red-200/30 rounded-full blur-xl" />
        <div className="absolute -bottom-20 left-10 w-28 h-28 bg-pink-200/30 rounded-full blur-xl" />

        <h1 className="text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent font-greatvibes">
          Nossa História de Amor
        </h1>

        <div className="p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 z-10">
          <Timer startDate={startDate} />
        </div>

        <div className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 border border-pink-100 relative z-10">
          {/* Heart icon decoration */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg">
            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <LoveMessages />
        </div>
      </div>

      <div className="order-last lg:order-first lg:w-1/2 h-[60vh] lg:h-screen relative mt-10 lg:mt-0">
        <Carousel />
      </div>

      {/* Romantic particles */}
      <RomanticParticles />
    </main>
  )
}
