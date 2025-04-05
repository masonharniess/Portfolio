import { useLastfmTracks } from "@/app/hooks/use-lastfm-tracks";
import TrackCard from "@/app/components/lastfm/track/track-card";
import styles from "./lastfm-card.module.css";
import {roboto_bold} from "@/app/fonts/fonts";

export default function LastfmCard() {
  // Custom hook handles fetching
  const recentTracks = useLastfmTracks("custardflan", 3);

  return (
    <div className={styles.lastfm_card}>
      <h2 className={`${styles.title} ${roboto_bold.className}`}>Recently Played Songs</h2>
      {recentTracks.map((track, index) => (
        <TrackCard key={index} track={track} />
      ))}
    </div>
  );
}