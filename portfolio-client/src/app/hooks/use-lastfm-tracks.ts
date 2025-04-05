// hooks/use-lastfm-tracks.ts
import { useState, useEffect } from "react";
import { LastFmRawTrack, LastfmTrack } from "../types/lastfm-track";

interface UseLastfmTracksReturn {
  tracks: LastfmTrack[];
  loading: boolean;
}

export function useLastfmTracks(
  user = "custardflan",
  limit = 3
): UseLastfmTracksReturn {
  const [tracks, setTracks] = useState<LastfmTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecentTracks() {
      try {
        setLoading(true);
        const res = await fetch(`/api/lastfm?user=${user}&limit=${limit}`);
        const data = await res.json();

        const rawTracks: LastFmRawTrack[] = data?.recenttracks?.track ?? [];
        const mapped = rawTracks.map((track) => {
          const isNowPlaying = track["@attr"]?.nowplaying === "true";
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

        setTracks(mapped);
      } catch (error) {
        console.error("Error fetching Last.fm data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecentTracks().catch((err) => console.error(err));
  }, [user, limit]);

  return { tracks, loading };
}
