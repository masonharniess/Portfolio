import { useState, useEffect } from "react";
import {LastFmRawTrack, LastfmTrack} from "../types/lastfm-track";

export function useLastfmTracks(user = "custardflan", limit = 3) {
  const [recentTracks, setRecentTracks] = useState<LastfmTrack[]>([]);

  useEffect(() => {
    async function fetchRecentTracks() {
      try {
        const res = await fetch(`/api/lastfm?user=${user}&limit=${limit}`);
        const data = await res.json();

        const tracks: LastFmRawTrack[] = data?.recenttracks?.track ?? [];

        const mappedTracks = tracks.map((track) => {
          const isNowPlaying =
            track["@attr"]?.nowplaying === "true";

          return {
            track: track.name,
            album: track.album["#text"],
            albumImage:
              track.image.find((img) => img.size === "extralarge")?.["#text"] ||
              track.image[0]?.["#text"] ||
              "",
            artist: track.artist["#text"],
            datePlayed: track.date?.["#text"] || "",
            isNowPlaying,
          } as LastfmTrack;
        });

        setRecentTracks(mappedTracks);
      } catch (error) {
        console.error("Error fetching Last.fm data:", error);
      }
    }

    fetchRecentTracks().catch((err) => console.error(err));
  }, [user, limit]);

  return recentTracks;
}
