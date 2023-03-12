import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/VideoHome.module.scss";

const VideoHome = ({ VideoResProps }) => {
  // //console.log(VideoResProps, "VideoResProps");
  const src = VideoResProps.image.path;

  return (
    <div className={styles.container}>
      {VideoResProps.image.path && (
        <Box>
          <div className={styles.overlay}></div>

          <div
            className={styles.video}
            dangerouslySetInnerHTML={{
              __html: `
  <video
    loop
    muted
    autoplay
title={VideoResProps.text}
    src="https://res.cloudinary.com/dsz4anlgs/video/upload/v1678127787/uploads/1678127630025.mp4" 
    className={styles.video} 
    style={{width: 100% !important;}}
  >

  </video>`,
            }}
          />

          <div className={styles.content}>
            <h1>{VideoResProps.text}</h1>
          </div>
        </Box>
      )}
    </div>
  );
};

export default VideoHome;
