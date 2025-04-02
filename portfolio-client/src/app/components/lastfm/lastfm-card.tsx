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
      <p className={`${styles.lastfm_card_title} ${roboto_bold.className}`}>Recently Played Songs</p>
      {recentTracks.map((track, index) => (
        <div key={index} className={styles.track}>
          <img className={styles.album_cover} src={track.albumImage} alt={`${track.album} cover`} />
          <div className={styles.track_info}>
            <div className={styles.track_header}>
              <span className={roboto_bold.className}>{track.track}</span> |
              <span className={roboto_bold.className}> {track.album}</span>
            </div>
            <div className={styles.track_info_sub}>
              <p>by {track.artist}</p>
              Played at: {new Date(track.datePlayed).toLocaleString()}
            </div>
            {track.isNowPlaying && <span>Now playing!</span>}
          </div>
        </div>
      ))}
    </div>
  );
}