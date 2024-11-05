import { useNavigate } from "react-router-dom";
import {
  Alert,
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid2,
  Rating,
  Typography,
} from "@mui/material";
import { useGetMoviesQuery } from "../../services/moviesApi";
import { IMG_URL } from "../../utilities/variable";

const Movies = () => {
  const navigate = useNavigate();
  const {
    data: { results } = {},
    isLoading,
    isError,
  } = useGetMoviesQuery({ with_origin_country: "IN" });

  return (
    <Container>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {isError && (
        <Alert severity="error">Something went wrong. Please try later !</Alert>
      )}

      {results?.length ? (
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {results.map((item: any) => (
            <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={item.id}>
              <Card>
                <CardMedia
                  sx={{ height: 200 }}
                  image={IMG_URL + item.backdrop_path}
                  title={item.original_title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.original_title}
                  </Typography>
                  <Typography noWrap maxHeight={200}>
                    {item.overview}
                  </Typography>
                  <Grid2 sx={{ mt: 2 }}>
                    <Rating
                      name="read-only"
                      value={item.vote_average}
                      precision={0.5}
                      max={10}
                    />
                    <Typography>{item.vote_count} Votes</Typography>
                  </Grid2>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate(`/movies/${item.id}`)}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      ) : null}
    </Container>
  );
};

export default Movies;
