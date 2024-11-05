import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import { RootState } from "../../store/store";
import TicketInfo from "../../components/ticket-info";
import { IMG_URL } from "../../utilities/variable";

export default function BookingHistory() {
  const [selectedData, setSelectedData] = useState<any>({});
  const data = useSelector((state: RootState) => state.bookings.value);

  const handleView = (viewData: any = {}) => {
    setSelectedData(viewData);
  };

  return (
    <Box>
      <Typography sx={{ mb: 2 }} variant="h4" component="div">
        My Bookings
      </Typography>
      <Grid2 container spacing={2}>
        {data.map((item, index) => (
          <Grid2
            key={index}
            size={6}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              boxShadow: 4,
            }}
          >
            <Grid2
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src={IMG_URL + item.backdrop_path} />
              <Typography sx={{ ml: 2 }}>{item.title}</Typography>
            </Grid2>
            <Button variant="outlined" onClick={() => handleView(item)}>
              View
            </Button>
          </Grid2>
        ))}
      </Grid2>
      <TicketInfo data={selectedData} setData={setSelectedData} />
    </Box>
  );
}
