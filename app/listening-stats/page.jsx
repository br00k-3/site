"use client";
import RecentSongs from "@/components/recent-songs";
import ListeningTrends from "@/components/listening-trends";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <div>
      <p className="text-3xl font-semibold light:not-italic dark:not-italic retro:italic">Music Stats</p>
      <p className="light:text-zinc-400 dark:text-zinc-400 retro:text-green-500 text-lg">Data taken from Last.fm</p>
      <Tabs defaultValue="Recent Listens" className="h-full w-full">
        <TabsList>
          <TabsTrigger value="Recent Listens">Recent Listens</TabsTrigger>
          <TabsTrigger value="Trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="Recent Listens">
          <RecentSongs/>
        </TabsContent>
        <TabsContent value="Trends">
          <ListeningTrends/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
