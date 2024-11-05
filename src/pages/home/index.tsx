import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" sx={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardMedia
          component="img"
          image="/assets/tickets.png"
          alt="Movie tickets"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Book movie tickets
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Thank you for choosing us. Enjoy our website to book tickets for
            your faviroute movie.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate("/movies")}>
            Visit Movies
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Home;
