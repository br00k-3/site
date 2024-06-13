import { Showcase } from "@/components/showcase"

export default function showcase() {
  return (
    <div>
      <p className="text-3xl font-semibold">Gallery Time</p>
      <p className="text-zinc-400">Good (and bad) Photos I&apos;ve Taken</p>
      <Showcase />
    </div>
  )
}