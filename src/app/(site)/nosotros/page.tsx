

import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { OurTeam } from "@/components/about/our-team"
import { History } from "@/components/about/history"



export default function NosotrosPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <AboutHero />
        <MissionVision />
        <OurTeam />
        <History />
      </main>
    </>
  )
}

