import { Photos } from "@/components/photos"

export const metadata = {
  title: "Photo Showcase",
};

export default function photos() {
  return (
    <div>
      <p className="text-3xl light:not-italic dark:not-italic retro:italic font-semibold">Gallery Time</p>
      <p className="light:text-zinc-400 dark:text-zinc-400 retro:text-green-500">Good (and bad) Photos I&apos;ve Taken</p>
      <Photos />
    </div>
  )
}