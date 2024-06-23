"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function RecentSongs() {
  const [songData, setSongData] = useState(); // this makes it so that the component is re-rendered when the variable songData changes, very cool stuff (technical react alalala)
  const recentSongs = songData;
  const [inputtedPageNUmber, setInputtedPageNumber] = useState();
  var [pageNumber, setPageNumber] = useState(1);

  function decreasePageNumber() {
    if (pageNumber > 1) {
      setPageNumber((pageNumber -= 1));
    }
  }
  function increasePageNumber() {
    setPageNumber((pageNumber += 1));
  }

  useEffect(() => {
    // useEffect is a function that runs code every time the component is hydrated (built). also ensures it only runs in the browser
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=rh35&api_key=a913164493401f53c8d45663376ac493&limit=10&page=${pageNumber}&format=json&extended=true`;

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
  }, [pageNumber]); // empty array at the end would be used to add dependencies, and, if they're changed, react will rerun this code when the values of the dpendencies change.

  return (
    <div className="flex-col flex-wrap items-center justify-center">
      <div className="flex items-center justify-between">
        <div>The last 10 songs I listened to</div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem className="cursor-pointer">
                <PaginationPrevious onClick={decreasePageNumber} />
              </PaginationItem>
              <PaginationItem className="cursor-pointer">
                <PaginationLink isActive>
                  <input
                    value={inputtedPageNUmber}
                    onChange={(e) => setPageNumber(e.target.value)}
                    className="w-10 h-10 text-center bg-transparent"
                    defaultValue={pageNumber}
                  ></input>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="cursor-pointer">
                <PaginationNext onClick={increasePageNumber} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      {recentSongs?.map((songData) => (
        <div
          key={songData}
          className=" light:bg-zinc-200/70 dark:bg-zinc-900/70 retro:bg-fuchsia-950/70 light:hover:bg-zinc-300/70 dark:hover:bg-zinc-800/70 retro:hover:bg-fuchsia-900/70 transition duration-125 h-16 w-full my-1"
        >
          {songData ? (
            <div className="flex h-full w-full items-center justify-between px-2">
              <div className="flex w-full space-x-3">
                <div className="flex shrink-0 h-12 w-12">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link
                          href={`${songData.artist.url}/${songData.album["#text"]}`}
                        >
                          <img
                            className=" h-12 w-12"
                            src={songData.image[3]["#text"]}
                            height={250}
                            width={250}
                            alt={songData.album["#text"]}
                            quality={100}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>{songData.album["#text"]}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex w-full">
                <div className="grid grid-flow-row grid-rows-2 grid-cols-1 lg:grid-flow-col lg:grid-rows-1 lg:grid-cols-2 w-full h-12 self-center md:text-lg font-semibold">
                  <div className="self-center text-fuchsia-600 hover:underline">
                    <Link
                      href={songData.url}>
                      <p className="truncate">{songData.name}</p>
                    </Link>
                  </div>
                  <div className="self-center">
                    <Link
                      href={songData.artist.url}>
                      <p className="truncate text-cyan-500 hover:underline">{songData.artist.name}</p>
                    </Link>
                  </div>
                </div>
                </div>
                <div className="w-36 self-center text-end text-xs text-nowrap hidden sm:block">
                  {songData["@attr"]?.nowplaying ? (
                    <span>Now Playing</span>
                  ) : (
                    <span>{songData.date["#text"]}</span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <span>loading...</span>
          )}
        </div>
      ))}
    </div>
  );
}
