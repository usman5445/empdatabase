import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditOutlined } from "@mui/icons-material";
import { deletData } from "../redux-setup/actions/fetchData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeaction } from "../redux-setup/reducers/handleUpdateReducer";
import { handleDeleteAction } from "../redux-setup/reducers/handleDeleteReducer";

export default function EmpCard({ k, name, email, imgurl, index }) {
  const theme = useTheme();
  const dis = useDispatch();
  const navigate = useNavigate();
  function handelEdit(index) {
    dis(changeaction(true, index));
    navigate("/add");
  }
  function handeldelet(id, index) {
    dis(deletData(id, index));
    dis(handleDeleteAction());
  }
  return (
    <Card
      key={k}
      sx={{
        display: "flex",
        width: "fit-content",
        padding: "10px",
        margin: "10px",
        boxShadow: "0 0 5px black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {email}
          </Typography>
        </CardContent>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => handeldelet(k, index)}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
          <Button
            onClick={() => handelEdit(index)}
            variant="contained"
            endIcon={<EditOutlined />}
          >
            Edit
          </Button>
        </Stack>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, marginLeft: "5px" }}
        image={imgurl}
        alt="Live from space album cover"
      />
    </Card>
  );
}
