import { LastfmTrack } from "@/app/types/lastfm-track";
import styles from "./track-card.module.css";
import {roboto_bold} from "@/app/fonts/fonts";

interface TrackCardProps {
  track: LastfmTrack;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className={styles.track}>
      <img
        className={styles.album_cover}
        src={track.albumImage}
        alt={`${track.album} cover`}
      />
      <div className={styles.track_info}>
        <div className={`${styles.track_header} ${roboto_bold.className}`}>
          <span>{track.track}</span> | <span>{track.album}</span>
        </div>
        <div className={`${styles.track_info_sub} ${roboto_bold.className}`}>
          <p>{track.artist}</p>
          {/*{track.isNowPlaying && <p>Now playing!</p>}*/}
        </div>
      </div>
    </div>
  );
}
