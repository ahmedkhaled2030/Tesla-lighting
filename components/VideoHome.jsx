import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/VideoHome.module.scss";

const VideoHome = () => {
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
          src="/video/video.mp4" type="video/mp4"
          className={styles.video}
          style={{width: 100% !important;}}
        >

        </video>`
      }}
    />

      <div className={styles.content}>
        <h1>light up your life with us</h1>
      </div>
    </div>
  );
};

export default VideoHome;
