import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/VideoHome.module.scss";

const VideoHome = ({ VideoResProps }) => {
  //console.log(VideoResProps , 'VideoResProps')
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div
        className={styles.video}
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          preload="metadata"
          src={VideoResProps.image.path} 
          className={styles.video}
          style={{width: 100% !important;}}
        >

        </video>`,
        }}
      />

      <div className={styles.content}>
        <h1>{VideoResProps.text}</h1>
      </div>
    </div>
  );
};

export default VideoHome;
