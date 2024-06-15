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
  const [inputtedPageNUmber, setInputtedPageNumber] = useState()
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
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=rh35&api_key=a913164493401f53c8d45663376ac493&limit=10&page=${pageNumber}&format=json`;

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
      <div className="flex gap-4 items-center justify-between">
        <div>Recent Listens</div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem className="cursor-pointer">
                <PaginationPrevious onClick={decreasePageNumber} />
              </PaginationItem>
              <PaginationItem className="cursor-pointer">
                <PaginationLink isActive>
                  <input value={inputtedPageNUmber} onChange={(e) => setPageNumber(e.target.value)} onBlur={(e) => e.target.value = "" || !e.target.value && setInputtedPageNumber(pageNumber)} className="w-10 h-10 text-center bg-transparent" defaultValue={pageNumber}></input>
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
          className=" bg-zinc-200/70 dark:bg-zinc-900/70 hover:bg-zinc-300/70 dark:hover:bg-zinc-800/70 transition duration-125 h-16 w-full my-1"
        >
          {songData ? (
            <div className="flex h-full w-full  items-center justify-between px-2">
              <div className="flex md:justify-start space-x-4">
                <div className="shrink-0 h-12 w-12">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <img
                          className=" h-12 w-12"
                          src={songData.image[3]["#text"]}
                          height={250}
                          width={250}
                          alt={songData.album["#text"]}
                          quality={100}
                        />
                      </TooltipTrigger>
                      <TooltipContent>{songData.album["#text"]}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-col md:flex-row justify-center w-full items-start">
                  <div className="w-64 lg:w-96 md:self-center">
                    <Link
                      href={songData.url}
                      className="text-red-600 text-xs md:text-md lg:text-lg text-start font-semibold hover:underline"
                    >
                      {songData.name}
                    </Link>
                  </div>
                  <div className="flex md:w-40 lg:w-64 2xl:w-max text-zinc-400 text-xs lg:text-lg md:self-center font-semibold">
                    {songData.artist["#text"]}
                  </div>
                </div>
              </div>
              <div className="justify-end hidden sm:block">
                <div className="w-36 h-auto text-end text-xs">
                  {songData["@attr"]?.nowplaying ? (
                    <span className="text-wrap">Now Playing</span>
                  ) : (
                    <span className="text-wrap">{songData.date["#text"]}</span>
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
};