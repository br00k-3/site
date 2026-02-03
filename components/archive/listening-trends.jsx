"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState, useEffect } from "react";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

const chartConfig = {
  playcount: {
    label: "playcount",
    color: "#c026d3",
  },
  label: {
    color: "#06b6d4",
  },
}


export default function ListeningTrends() {
  const [artistData, setArtistData] = useState();
  const topArtists = artistData;

  useEffect(() => {
    // useEffect is a function that runs code every time the component is hydrated (built). also ensures it only runs in the browser
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rh35&api_key=${process.env.NEXT_PUBLIC_LAST_FM_KEY}&limit=10&&format=json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data.topartists.artist);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("error while fetching data", error);
      });
  }, []); // empty array at the end would be used to add dependencies, and, if they're changed, react will rerun this code when the values of the dpendencies change.


  return (
    <div className="flex-col flex-wrap items-center justify-center">
      <div className="">The top 10 artists I listen to</div>
      <ChartContainer config={chartConfig} className="min-h-[500px] w-full">
          <BarChart
            accessibilityLayer
            data={artistData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="playcount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="playcount"
              layout="vertical"
              fill="var(--color-playcount)"
              radius={4}
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label] text-xs lg:text-lg"
                
              />
              <LabelList
                dataKey="playcount"
                position="right"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
    </div>
  );
}
