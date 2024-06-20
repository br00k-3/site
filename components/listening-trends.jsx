"use client";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { useState, useEffect } from "react";

export default function ListeningTrends() {
  const [artistData, setArtistData] = useState();
  const topArtists = artistData;

  
  useEffect(() => {
    // useEffect is a function that runs code every time the component is hydrated (built). also ensures it only runs in the browser
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=rh35&api_key=a913164493401f53c8d45663376ac493&limit=10&&format=json`;

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

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-zinc-200/90 dark:bg-zinc-900/90 p-2 rounded-lg">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <div className="flex-col flex-wrap items-center justify-center">
            <div>The top 10 artists I listen to</div>
      <ResponsiveContainer width="100%" aspect={2.5}>
      <BarChart width={1000} height={1000} data={artistData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className="text-xs"/>
        <YAxis className="text-xs" width={25}/>
        <Tooltip content={<CustomTooltip />} />
        <Bar name="artists" dataKey="playcount" className="fill-fuchsia-600"/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
