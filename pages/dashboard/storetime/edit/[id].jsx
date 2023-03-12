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
const storeTimeEdit = ({ EditRes }) => {
  //console.log(EditRes, "EditRes");

  const router = useRouter();
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => {
    //console.log(newState, "newState");
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
  ////console.log(imagePath, "imagePath");
  const handleImage = (e) => {
    ////console.log(e.target.files);
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
        ////console.log(res.data.data);

        setImagePath(res.data.data[0]._id);
        setImageScreens(res.data.data[0].path);
      })
      .catch((error) => {
        ////console.log(error);
      });
  };

  // End images
  const [text, setText] = useState("");
  const [url, setUrl] = useState(EditRes.url);
  const [id, setID] = useState(EditRes._id);
  //console.log(text, "text");
  //console.log(url, "url");
  // start Partner
  const addSection = (e) => {
    e.preventDefault();

    //console.log(editorRef.current.getContent(), url, imagePath);
    axios
      .put(
        ` http://18.214.112.247:4000/dashboard/section/${id}`,
        {
          name: "retail-store",
          text: editorRef.current.getContent(),
          image: imagePath,
          url: url,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        //console.log("clicked");
        handleClick({
          vertical: "top",
          horizontal: "left",
        });

        router.push(`/dashboard/storetime`);
      })
      .catch((error) => {
        //console.log(error);
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
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              apiKey="8gxcb11g7m4xvisnyof1cbmu31sn3qt8ysggr7tkz7fq6ekh"
              initialValue={EditRes.text}
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor link lists",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount ",
                ],
                toolbar:
                  "undo redo | formatselect | lists" +
                  " fontsize fontfamily  | copy blockquote forecolor   backcolor  | strikethrough    " +
                  "bold italic  underline | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <TextField
              sx={{ my: 5, width: 500 }}
              id="outlined-basic"
              label="Add Store GoogleMap Location"
              value={url}
              variant="outlined"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Button
              onClick={addSection}
              sx={{ my: 1, width: 150 }}
              variant="contained"
              color="success"
            >
              Add Section
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";

  const EditRes = await axios.get(
    `http://18.214.112.247:4000/dashboard/section/retail-store`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      EditRes: EditRes.data.data,
    },
  };
};
export default storeTimeEdit;
