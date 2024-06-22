import { Showcase } from "@/components/showcase"

export default function showcase() {
  return (
    <div>
      <p className="text-3xl light:not-italic dark:not-italic retro:italic font-semibold">Gallery Time</p>
      <p className="light:text-zinc-400 dark:text-zinc-400 retro:text-green-500">Good (and bad) Photos I&apos;ve Taken</p>
      <Showcase />
    </div>
  )
}