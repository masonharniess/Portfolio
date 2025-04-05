import { LastfmTrack } from "@/app/types/lastfm-track";
import styles from "./track-card.module.css";
import {roboto_bold} from "@/app/fonts/fonts";
import Image from "next/image";

interface TrackCardProps {
  track: LastfmTrack;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className={styles.track}>
      <Image
        className={styles.album_cover}
        src={track.albumImage}
        alt={`${track.album} cover`}
        width={75}
        height={75}
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
