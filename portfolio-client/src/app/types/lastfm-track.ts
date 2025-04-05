export interface LastfmTrack {
  track: string;
  album: string;
  albumImage: string;
  artist: string;
  datePlayed: string;
  isNowPlaying: boolean;
}

// Minimal representation of the raw Last.fm track data
export interface LastFmRawTrack {
  name: string;
  album: { "#text": string };
  artist: { "#text": string };
  image: Array<{ size: string; "#text": string }>;
  date?: { "#text"?: string };
  "@attr"?: { nowplaying?: string };
}