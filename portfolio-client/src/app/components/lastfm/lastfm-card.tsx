"use client";
import {useEffect, useState} from "react";
import styles from "./lastfm.module.css";
import {roboto_bold} from "@/app/fonts/fonts";

interface LastfmTrack {
  track: string;
  album: string;
  albumImage: string;
  artist: string;
  datePlayed: string;
  isNowPlaying: boolean;
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function LastfmCard() {
  const [recentTracks, setRecentTracks] = useState<LastfmTrack[]>([]);



  useEffect(() => {
    const fetchUrl =
      "https://portfolio-server-hwfnahhbh0hqb2a8.uksouth-01.azurewebsites.net/api/lastfm/recent/custardflan?limit=5";

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setRecentTracks(data);
      })
      .catch((err) => {
        console.error("Error fetching Last.fm data:", err);
      });
  }, []);

  return (
    <div className={styles.lastfm_card}>
      <MyButton/>
      <MyButton/>
      <p className={roboto_bold.className}>Last.fm</p>
      <p>Recently played tracks:</p>
      {recentTracks.map((track, index) => (
        <div key={index} className={styles.track}>
          <img src={track.albumImage} alt={`${track.album} cover`} />
          <div className={styles.track_info}>
            <strong>{track.track}</strong> by {track.artist}
            <div>Album: {track.album}</div>
            <div>
              Played at: {new Date(track.datePlayed).toLocaleString()}
            </div>
            {track.isNowPlaying && <span>Now playing!</span>}
          </div>
        </div>
      ))}
    </div>
  );
}