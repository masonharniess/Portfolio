import { useLastfmTracks } from "@/app/hooks/use-lastfm-tracks";
import TrackCard from "@/app/components/lastfm/track/track-card";
import Card from "@/app/components/card/card";
import { roboto_bold } from "@/app/fonts/fonts";
import styles from "./lastfm-card.module.css";

function SkeletonTrackCard() {
  return (
    <div className={styles.skeleton_track}>
      <div className={styles.skeleton_image} />
      <div className={styles.skeleton_info}>
        <div className={styles.skeleton_header}/>
        <div className={`${styles.skeleton_line} ${styles.skeleton_line_1}`}/>
        <div className={`${styles.skeleton_line} ${styles.skeleton_line_2}`}/>
      </div>
    </div>
  );
}

export default function LastfmCard() {
  const { tracks, loading } = useLastfmTracks("custardflan", 3);

  return (
    <Card
      title="Recently Played Songs"
      titleClassName={roboto_bold.className}
    >
      <div className={styles.music_list}>
        {loading ? (
          <>
            <SkeletonTrackCard />
            <SkeletonTrackCard />
            <SkeletonTrackCard />
          </>
        ) : (
          tracks.map((track, index) => (
            <TrackCard key={index} track={track} />
          ))
        )}
      </div>
    </Card>
  );
}
