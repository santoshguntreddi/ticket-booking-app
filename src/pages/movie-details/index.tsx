import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { useGetMovieByIdQuery } from "../../services/moviesApi";
import { addBooking } from "../../store/slices/bookingSlice";
import MovieLayout from "../../components/movie-layout";
import { TicketBookingDialog } from "../../components/ticket-booking-dialog";

export default function MovieDetails() {
  const ticketCost = 100;
  const [open, setOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetMovieByIdQuery([id, {}]);

  const totalPrice = ticketCost * selectedSeats.length;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((item) => item !== seat)
        : [...prevSelected, seat]
    );
  };

  const validateFields = () => {
    let message = "";
    if (!selectedTime.length) {
      message = "Please select slot time";
    } else if (!selectedSeats.length) {
      message = "Please select seats";
    } else {
    }

    setErrorMessage(message);
    return message;
  };

  const handleBookingSubmit = () => {
    if (!validateFields()) {
      dispatch(
        addBooking({
          slot: format(new Date(), "dd/MM/yyyy ") + selectedTime,
          seats: selectedSeats,
          price: totalPrice,
          ...data,
        })
      );
      navigate("/bookings");
    }
  };

  return (
    <>
      <MovieLayout
        data={data}
        isLoading={isLoading}
        isError={isError}
        handleClickOpen={handleClickOpen}
      />
      <TicketBookingDialog
        open={open}
        selectedTime={selectedTime}
        selectedSeats={selectedSeats}
        setSelectedTime={setSelectedTime}
        handleSeatClick={handleSeatClick}
        totalPrice={totalPrice}
        ticketCost={ticketCost}
        errorMessage={errorMessage}
        handleClose={handleClose}
        handleBookingSubmit={handleBookingSubmit}
      />
    </>
  );
}
