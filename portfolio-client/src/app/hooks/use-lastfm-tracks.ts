import { useState, useEffect } from "react";
import { LastfmTrack } from "../types/lastfm-track";

export function useLastfmTracks(user = "custardflan", limit = 3) {
  const [recentTracks, setRecentTracks] = useState<LastfmTrack[]>([]);

  useEffect(() => {
    const fetchRecentTracks = async () => {
      try {
        // Call Next.js server route (app/api/lastfm/route.ts)
        const res = await fetch(`/api/lastfm?user=${user}&limit=${limit}`);
        const data = await res.json();
        const tracks = data?.recenttracks?.track ?? [];

        const mappedTracks: LastfmTrack[] = tracks.map((track: any) => {
          const isNowPlaying =
            track["@attr"]?.nowplaying === "true";

          return {
            track: track.name,
            album: track.album["#text"],
            albumImage:
              track.image.find((img: any) => img.size === "extralarge")?.["#text"] ||
              track.image[0]?.["#text"] ||
              "",
            artist: track.artist["#text"],
            datePlayed: track.date?.["#text"] || "",
            isNowPlaying,
          };
        });

        setRecentTracks(mappedTracks);
      } catch (error) {
        console.error("Error fetching Last.fm data:", error);
      }
    };

    fetchRecentTracks();
  }, [user, limit]);

  return recentTracks;
}
