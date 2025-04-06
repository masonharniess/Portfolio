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
  } else if (track.dateUts > 0) {
    const dateObj = new Date(track.dateUts * 1000);
    const timeStr = dateObj.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const dateStr = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    dateDisplay = `${timeStr}, ${dateStr}`;
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
