import {
  Alert,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CloseIcon from "@mui/icons-material/Close";
import SeatLayout from "../../components/seat-layout";

export function TicketBookingDialog({
  open,
  selectedTime,
  selectedSeats,
  setSelectedTime,
  handleSeatClick,
  totalPrice,
  ticketCost,
  errorMessage,
  handleClose,
  handleBookingSubmit,
}: any) {
  return (
    <Dialog open={open} maxWidth="lg">
      <DialogContent>
        <Grid2
          container
          sx={{ p: 4, display: "flex", flexDirection: "column" }}
        >
          <Grid2 sx={{ mb: 2 }}>
            <Typography variant="h6" mb={1}>
              Select your slots for Today
            </Typography>
            <ButtonGroup color="success">
              {["2:30 PM", "6:00 PM", "9:30PM"].map((slot) => (
                <Button
                  key={slot}
                  variant={selectedTime === slot ? "contained" : "outlined"}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </Button>
              ))}
            </ButtonGroup>
          </Grid2>
          <Grid2>
            <SeatLayout
              selectedSeats={selectedSeats}
              handleSeatClick={handleSeatClick}
            />
          </Grid2>
          <Grid2 size={6} sx={{ mt: 3 }}>
            <Grid2
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Typography variant="h6" color="textSecondary">
                Price
              </Typography>
              <Stack alignItems="center" direction="row">
                <CurrencyRupeeIcon fontSize="small" />
                <Typography variant="h6" color="textSecondary">
                  {totalPrice}
                </Typography>
              </Stack>
            </Grid2>
            <Grid2
              display="flex"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Stack alignItems="center" direction="row">
                <Typography variant="body2" color="textSecondary">
                  {selectedSeats.length}
                </Typography>
                <CloseIcon fontSize="small" />
                <Typography variant="body2" color="textSecondary">
                  @{ticketCost}
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row">
                <CurrencyRupeeIcon fontSize="small" />
                <Typography variant="body2" color="textSecondary">
                  {totalPrice}
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 mt={1}>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          </Grid2>
        </Grid2>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleBookingSubmit}>Book</Button>
      </DialogActions>
    </Dialog>
  );
}
