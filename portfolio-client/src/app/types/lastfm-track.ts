export interface LastfmTrack {
  track: string;
  album: string;
  albumImage: string;
  artist: string;
  datePlayed: string;
  dateUts: number;
  isNowPlaying: boolean;
}

export interface LastFmRawTrack {
  name: string;
  album: { "#text": string };
  artist: { "#text": string };
  image: Array<{ size: string; "#text": string }>;
  date?: {
    uts?: string;
    "#text"?: string;
  };
  "@attr"?: { nowplaying?: string };
}
