"use client";
import RecentSongs from "@/components/recent-songs";
import ListeningTrends from "@/components/listening-trends";

export default function page() {
  return (
    <div>
      <p className="text-3xl font-semibold">Music Stats</p>
      <p className="text-zinc-400">Data taken from Last.fm</p>
      <div className="w-full mt-1 md:w-auto">
        <RecentSongs />
      </div>
    </div>
  );
}
