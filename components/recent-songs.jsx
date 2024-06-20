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
          className=" bg-zinc-200/70 dark:bg-zinc-900/70 hover:bg-zinc-300/70 dark:hover:bg-zinc-800/70 transition duration-125 h-16 w-full my-1"
        >
          {songData ? (
            <div className="flex h-full w-full items-center justify-between px-2">
              <div className="flex md:justify-start space-x-4">
                <div className="shrink-0 h-12 w-12">
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
                <div className="flex flex-col md:flex-row justify-center w-full items-start">
                  <div className="w-64 lg:w-96 md:self-center">
                    <Link
                      href={songData.url}
                      className="text-fuchsia-600 text-xs md:text-md lg:text-lg text-start font-semibold hover:underline"
                    >
                      {songData.name}
                    </Link>
                  </div>
                  <div className="flex md:w-40 lg:w-64 2xl:w-max text-zinc-400 text-xs lg:text-lg md:self-center font-semibold">
                    <Link
                      href={songData.artist.url}
                      className="text-cyan-600 text-xs md:text-md lg:text-lg text-start font-semibold hover:underline"
                    >
                      {songData.artist.name}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
              <div >
                {songData.loved === "1" ? (
                  <svg
                    className="h-6 w-6 fill-red-600"
                    height="800px"
                    width="800px"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.36129 3.46995C6.03579 3.16081 6.76287 3 7.50002 3C8.23718 3 8.96425 3.16081 9.63875 3.46995C10.3129 3.77893 10.9185 4.22861 11.4239 4.78788C11.7322 5.12902 12.2678 5.12902 12.5761 4.78788C13.5979 3.65726 15.0068 3.00001 16.5 3.00001C17.9932 3.00001 19.4021 3.65726 20.4239 4.78788C21.4427 5.91515 22 7.42425 22 8.9792C22 10.5342 21.4427 12.0433 20.4239 13.1705L14.2257 20.0287C13.0346 21.3467 10.9654 21.3467 9.77429 20.0287L3.57613 13.1705C3.07086 12.6115 2.67474 11.9531 2.40602 11.2353C2.13731 10.5175 2 9.75113 2 8.9792C2 8.20728 2.13731 7.44094 2.40602 6.72315C2.67474 6.00531 3.07086 5.34694 3.57613 4.78788C4.08157 4.22861 4.68716 3.77893 5.36129 3.46995Z"></path>
                  </svg>
                ) : (
                  <span />
                )}
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
            </div>
          ) : (
            <span>loading...</span>
          )}
        </div>
      ))}
    </div>
  );
}
