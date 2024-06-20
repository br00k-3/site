"use client";
import RecentSongs from "@/components/recent-songs";
import ListeningTrends from "@/components/listening-trends";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function page() {
  return (
    <div>
      <p className="text-3xl font-semibold">Music Stats</p>
      <p className="text-zinc-400">Data taken from Last.fm</p>
      <Tabs defaultValue="Recent Listens" className="w-full">
        <TabsList>
          <TabsTrigger value="Recent Listens">Recent Listens</TabsTrigger>
          <TabsTrigger value="Trends">Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="Recent Listens">
          <RecentSongs />
        </TabsContent>
        <TabsContent value="Trends">
          <ListeningTrends />
        </TabsContent>
      </Tabs>
    </div>
  );
}
