import {
  Avatar,
  Dialog,
  DialogContent,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { format, parse } from "date-fns";
import { IMG_URL } from "../../utilities/variable";

interface TicketInfoProps {
  data: any;
  setData: (value: any) => void;
}

export default function TicketInfo({ data, setData }: TicketInfoProps) {
  const handleClose = () => {
    setData({});
  };

  return (
    <Dialog open={Boolean(Object.keys(data).length)} onClose={handleClose}>
      {Boolean(Object.keys(data).length) && (
        <DialogContent dividers>
          <Grid2 container spacing={2} alignItems="center">
            <Grid2>
              <Avatar
                src={IMG_URL + data.backdrop_path}
                variant="rounded"
                sx={{ width: 80, height: 120 }}
              />
            </Grid2>
            <Grid2>
              <Typography variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography color="textSecondary" variant="subtitle1">
                {data.tagline}
              </Typography>
            </Grid2>
          </Grid2>
          <Divider sx={{ my: 2 }} />
          <Grid2 container spacing={1}>
            <Grid2 size={6}>
              <Typography variant="body2" color="textSecondary">
                Showtime
              </Typography>
              <Typography variant="subtitle1">
                {format(
                  parse(data.slot, "dd/MM/yyyy h:mm a", new Date()),
                  "h:mm a"
                )}
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <Typography variant="body2" color="textSecondary">
                Date
              </Typography>
              <Typography variant="subtitle1">
                {format(
                  parse(data.slot, "dd/MM/yyyy h:mm a", new Date()),
                  "PPPP"
                )}
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <Typography variant="body2" color="textSecondary">
                Seat
              </Typography>
              <Typography variant="subtitle1">
                {data.seats?.join(", ")}
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <Typography variant="body2" color="textSecondary">
                Price
              </Typography>
              <Stack alignItems="center" direction="row">
                <CurrencyRupee fontSize="small" />
                <Typography variant="subtitle1">{data.price}</Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </DialogContent>
      )}
    </Dialog>
  );
}
