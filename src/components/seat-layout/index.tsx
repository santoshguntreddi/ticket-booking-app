import { Box, Button, Grid2, Typography } from "@mui/material";

interface SeatLayoutProps {
  selectedSeats: string[];
  handleSeatClick: (seat: string) => void;
}

export default function SeatLayout({
  selectedSeats,
  handleSeatClick,
}: SeatLayoutProps) {
  const rows = 5;
  const columns = 8;

  const getSeatNumber = (row: number, col: number) =>
    `${String.fromCharCode(65 + row)}${col + 1}`;

  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h6" mb={2}>
        Select your seats
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <Grid2 key={rowIndex} container spacing={1} justifyContent="center">
            {Array.from({ length: columns }).map((_, colIndex) => {
              const seat = getSeatNumber(rowIndex, colIndex);
              const isSelected = selectedSeats.includes(seat);

              return (
                <Grid2 key={seat}>
                  <Button
                    variant="contained"
                    onClick={() => handleSeatClick(seat)}
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: isSelected ? "primary.main" : "grey.300",
                      color: isSelected ? "white" : "black",
                      "&:hover": {
                        backgroundColor: isSelected
                          ? "primary.dark"
                          : "grey.400",
                      },
                    }}
                  >
                    {seat}
                  </Button>
                </Grid2>
              );
            })}
          </Grid2>
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          height: 30,
          backgroundColor: "grey.300",
          borderRadius: 1,
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" color="textSecondary">
          Screen
        </Typography>
      </Box>
    </Box>
  );
}
