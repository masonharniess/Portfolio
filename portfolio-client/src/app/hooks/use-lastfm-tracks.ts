import { useState, useEffect } from "react";
import { LastFmRawTrack, LastfmTrack } from "../types/lastfm-track";

export function useLastfmTracks(user = "custardflan", limit = 3) {
  const [tracks, setTracks] = useState<LastfmTrack[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecentTracks() {
      try {
        setLoading(true);
        const res = await fetch(`/api/lastfm?user=${user}&limit=${limit}`);
        const data = await res.json();

        const rawTracks: LastFmRawTrack[] = data?.recenttracks?.track ?? [];

        const mapped = rawTracks.map((raw) => {
          const isNowPlaying = raw["@attr"]?.nowplaying === "true";

          const utsValue = raw.date?.uts ? Number(raw.date.uts) : 0;

          return {
            track: raw.name,
            album: raw.album["#text"],
            albumImage:
              raw.image.find((img) => img.size === "extralarge")?.["#text"] ||
              raw.image[0]?.["#text"] ||
              "",
            artist: raw.artist["#text"],
            dateUts: utsValue,
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
