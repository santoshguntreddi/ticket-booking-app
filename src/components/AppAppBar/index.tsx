import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const pages = [
  { title: "Movies", path: "movies" },
  { title: "History", path: "/bookings" },
];

export default function AppAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Button
            variant="text"
            size="large"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "24px",
            }}
            onClick={() => navigate("/")}
          >
            Bookings
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
