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
const PromoSliderAdd = () => {
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



  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  // console.log(title, "title");

  const addSection = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://tesla-lightning.herokuapp.com/dashboard/section",
        {
          name: "promos",
  
           text:text,

  
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

 router.push(`/dashboard/promoslider`);
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
    
          <Box>
          <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Add section Title"
              value={text}
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
{/* 
            <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Add section Text"
              value={text}
              variant="outlined"
              onChange={(e) => setText(e.target.value)}
            />
                        <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Add section Url"
              value={url}
              variant="outlined"
              onChange={(e) => setUrl(e.target.value)}
            /> */}
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={addSection}
              sx={{ my: 1, width: 200 }}
              variant="contained"
              color="success"
      
            >
              Add  promo
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default PromoSliderAdd;
