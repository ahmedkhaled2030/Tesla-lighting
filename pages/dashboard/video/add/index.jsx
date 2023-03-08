import Sidebar from "@/components/SideBarDashboard";
import { useEffect, useRef, useState } from "react";
import styles from "../../../../styles/DashboardHome.module.scss";
import Cookies from "js-cookie";
import {
  Alert,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { DriveFolderUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/router";
const videoAdd = () => {
  const router = useRouter();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    console.log(newState, "newState");
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const editorRef = useRef(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);

  // start images
  const [image, setImage] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [imageScreens, setImageScreens] = useState("");
  const [uploading, setUploading] = useState(null);
  //console.log(imagePath, "imagePath");
  const handleImage = (e) => {
    //console.log(e.target.files);
    setImage(e.target.files);
  };
  const uploadImages = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (var item of image) {
      formData.append("image", item);
    }

    axios
      .post("http://18.214.112.247:4000/product/upload", formData, {
        onUploadProgress: (data) => {
          setUploading(Math.round((data.loaded / data.total) * 100));
        },
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        //console.log(res.data.data);

        setImagePath(res.data.data[0]._id);
        setImageScreens(res.data.data[0].path);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  // End images

  const [text, setText] = useState("");

  // console.log(title, "title");

  const addSection = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://18.214.112.247:4000/dashboard/section",
        {
          name: "video",

          text: text,
          image: imagePath,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log("clicked");
        handleClick({
          vertical: "top",
          horizontal: "left",
        });

        router.push(`/dashboard/video`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // end Partner

  return (
    <div className={styles.home}>
      <Sidebar />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <div className={styles.homeContainer}>
        <Box
          sx={{
            mx: "auto",
            my: 2,
            width: 500,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mx: "auto", my: 2, width: 500 }}>
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlined className={styles.icon} />
            </label>
            <input
              type="file"
              id="file"
              onChange={handleImage}
              style={{ display: "none" }}
            />

            <Button
              onClick={uploadImages}
              sx={{ my: 1, mx: 5, width: 150 }}
              variant="contained"
              color="secondary"
              disabled={image.length == 0}
            >
              Upload Image
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
          <Box>
            <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Add section Text"
              value={text}
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={addSection}
              sx={{ my: 1, width: 150 }}
              variant="contained"
              color="success"
              disabled={!imagePath}
            >
              Add Video
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default videoAdd;
