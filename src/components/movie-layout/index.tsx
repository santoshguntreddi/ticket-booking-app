import {
  Alert,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { IMG_URL } from "../../utilities/variable";

export default function MovieLayout({
  isLoading,
  isError,
  data,
  handleClickOpen,
}: any) {
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

      {data && (
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Box
                sx={{
                  backgroundImage: `url(${IMG_URL + data.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: 3,
                    borderRadius: 2,
                  }}
                >
                  <Typography sx={{ mt: 4 }} variant="h4" component="div">
                    {data.original_title}
                  </Typography>
                  <Typography variant="subtitle1">{data.tagline}</Typography>
                  <Typography variant="h6" sx={{ my: 1 }}>
                    Runtime: {data.runtime} min
                  </Typography>
                  <Typography variant="h6" sx={{ my: 1 }}>
                    Genres:{" "}
                    {data.genres.map((genre: any) => genre.name).join(", ")}
                  </Typography>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    Book tickets
                  </Button>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
          <Grid2 size={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
              About the movie
            </Typography>
            <Typography>{data.overview}</Typography>
          </Grid2>
        </Container>
      )}
    </Container>
  );
}
