import { useLastfmTracks } from "@/app/hooks/use-lastfm-tracks";
import TrackCard from "@/app/components/music-card/tracks/track-card";
import DefaultCard from "@/app/components/default-card/default-card";
import {roboto_bold} from "@/app/fonts/fonts";
import styles from "./music-card.module.css";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

// import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

export default function MusicCard() {
  const { tracks, loading } = useLastfmTracks("custardflan", 3);

  return (
    <DefaultCard
      title="Recently Played Songs"
      titleClassName={roboto_bold.className}
      subheading={
        <a href={"https://www.last.fm/api"} target={"_blank"}>&nbsp;&nbsp;Built with Lastfm API <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{height: "13px", paddingBottom: "0.9px"}}/></a>
      }
      subheadingClassName={roboto_bold.className}
    >
      <div className={styles.music_list}>
        {loading ? (
          <>
            <SkeletonTrackCard/>
            <SkeletonTrackCard/>
            <SkeletonTrackCard/>
          </>
        ) : (
          tracks.map((track, index) => (
            <TrackCard key={index} track={track}/>
          ))
        )}
      </div>
    </DefaultCard>
  );
}
