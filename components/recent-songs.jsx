import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RecentSongs() {
  const [songData, setSongData] = useState(); // this makes it so that the component is re-rendered when the variable songData changes, very cool stuff (technical react alalala)
  const recentSongs = songData;

  useEffect(() => {
    // useEffect is a function that runs code every time the component is hydrated (built). also ensures it only runs in the browser
    const url =
      "https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=rh35&api_key=a913164493401f53c8d45663376ac493&limit=11&format=json";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSongData(data.recenttracks.track);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("error while fetching data", error);
      });
  }, []); // empty array at the end would be used to add dependencies, and, if they're changed, react will rerun this code when the values of the dpendencies change.

  return (
    <div className="flex flex-wrap items-center justify-center">
      {recentSongs?.map((songData) => (
        <div
          key={songData}
          className=" bg-zinc-200/70 dark:bg-zinc-900/70 h-96 w-72 rounded-lg m-1"
        >
          {songData ? (
            <div className="grid grid-col rounded-lg h-full items-center text-center justify-center">
              <div>
                <Image
                  className="rounded-lg"
                  src="/images/icon.png"
                  height={250}
                  width={250}
                  alt={songData.image.size}
                  quality={100}
                />
              </div>
              <div>
                <Link
                  href={songData.url}
                  className="text-red-600 text-xl font-semibold underline"
                >
                  {songData.name}
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
