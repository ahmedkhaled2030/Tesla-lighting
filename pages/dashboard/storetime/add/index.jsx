import Sidebar from "@/components/SideBarDashboard";
import { useEffect, useState } from "react";
import styles from "../../../../styles/DashboardHome.module.scss";
import Cookies from "js-cookie";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
const AddPromo = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
    
    // start images
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [imageScreens, setImageScreens] = useState("");
  const [uploading, setUploading] = useState(null);
console.log(imagePath , "imagePath")
  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };
  const uploadImages = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (var item of image) {
      formData.append("video", item);
    }

    axios
      .post("https://tesla-lightning.herokuapp.com/dashboard/section/upload-video", formData, {
        onUploadProgress: (data) => {
          setUploading(Math.round((data.loaded / data.total) * 100));
        },
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.data);
    
          setImagePath( res.data.data._id)          
          setImageScreens(res.data.data.path)
       
      })
      .catch((error) => {
        console.log(error);
      });
    };
    
        // End images
    const [text ,setText] = useState("")
    // start Partner
    const addVideo = (e) => {
        e.preventDefault();
    
        axios
          .post("https://tesla-lightning.herokuapp.com/dashboard/section", {
         "name": "video",
         "title": "video",
          "text": text,
          "image": imagePath 
        },{
            headers: {
              Authorization:token
               
            },
          })
          .then((res) => {
            alert("Video added successfully")
            setUploading(null)
            setText("")
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    // end Partner


    
  return (
    <div className={styles.home}>
      <Sidebar />
          <div className={styles.homeContainer}>
              <Box sx={{ mx: "auto", my: 2, width: 500,display: "flex" ,justifyContent: 'space-around' ,alignItems: 'center',flexDirection: 'column'}}>
              <Box sx={{ mx: "auto", my: 2, width: 500 }}>
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlined className={styles.icon} />
              </label>
              <input
                type="file"
                id="file"
                multiple
                onChange={handleImage}
                style={{ display: "none" }}
              />
               
                      <Button
            onClick={uploadImages}
            sx={{ my: 1,mx:5, width: 150 }}
            variant="contained"
            color="secondary"
          >
     Upload Video
          </Button>
              <Box sx={{ position: "relative", display: "inline-flex", mx: 5 }}>
                {uploading && (
                  <CircularProgress variant="determinate" value={uploading} />
                )}
                {uploading && (
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      color="text.secondary"
                    >
                      {uploading}%
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          <TextField
            sx={{ my: 5, width: 500 }}
            id="outlined-basic"
            label="Add Video Text"
            value={text}
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
          <Box sx={{ textAlign: 'center', }}>
          <Button
            onClick={addVideo}
            sx={{ my: 1, width: 150 }}
            variant="contained"
            color="success"
          >
         Add Video
          </Button>
               </Box>
       
        </Box>

      </div>
    </div>
  );
};

export default AddVideo;
