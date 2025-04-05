import { LastfmTrack } from "@/app/types/lastfm-track";
import styles from "./track-card.module.css";
import {roboto_bold, roboto_light} from "@/app/fonts/fonts";
import Image from "next/image";

interface TrackCardProps {
  track: LastfmTrack;
}

export default function TrackCard({ track }: TrackCardProps) {
  let dateDisplay = "";
  if (track.isNowPlaying) {
    dateDisplay = "Currently playing...";
  } else {
    const [datePart, timePart] = track.datePlayed.split(",");
    if (datePart && timePart) {
      const timeStr = timePart.trim();     // "16:07"
      const dateStr = datePart.trim();     // "05 Apr 2025"
      dateDisplay = `${timeStr}, ${dateStr}`;
    } else {
      dateDisplay = track.datePlayed;
    }
  }

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
          <p className={styles.marqueeText}>{track.track}</p>
        </div>

        <div className={`${styles.track_info_sub} ${roboto_bold.className}`}>
          <p>{track.artist}</p>
          <p className={roboto_light.className}>{dateDisplay}</p>
        </div>
      </div>
    </div>
  );
}
