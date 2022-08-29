import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Link,
  Stack,
  CardActions,
  Button,
} from "@mui/material";


import { format, parseISO } from "date-fns";

const UpdateCard = ({ message }) => {
  return (
    <Box>
      <Box sx={{ display: "flex" }} alignItem="center" justifyContent="center">
        <Card
          sx={{
            width: "80%",
            "&:hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
          variant="elevation"
        >
          <CardContent sx={{ p: "8px 8px 0px 8px" }}>
            <Stack direction="row">
              <Avatar
                alt="Remy Sharp"
                variant="rounded"
                src={message.imgUrl}
                sx={{ width: 90, height: 90, borderRadius: 7 }}
              />
              <Stack>
                <Typography
                  mt={1}
                  ml={2}
                  mb={0}
                  pb={0}
                  fontSize="30px"
                  color="text.secondary"
                  gutterBottom
                >
                  {message.companyName}
                </Typography>
                <Stack direction="row">
                  <Typography
                    textTransform="capitalize"
                    ml={2}
                    fontSize="20px"
                    sx={{ color: "#8DA242" }}
                  >
                    {message.postedBy}
                  </Typography>
                  <Typography sx={{ ml: 2, mt: "5px" }} color="text.secondary">
                    {format(parseISO(message.messageDate), "do MMM Y")}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Typography
              variant="body1"
              component="div"
              color="primary"
              sx={{ textTransform: "Capitalize" }}
            >
              {message.Subject}
            </Typography>
            <hr />
          </CardContent>
          <CardActions sx={{ pt: 0, display: "flex" }}>
            <Button
              sx={{ ml: "auto", marginRight: "16px" }}
              color="secondary"
              variant="outlined"
            >
              Proceed
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default UpdateCard;
