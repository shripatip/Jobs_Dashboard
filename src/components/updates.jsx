import { Typography, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import List from "../data/jobs.json";

import UpdateCard from "./updateCard";
const Updates = () => {
  const [messages, SetMessages] = useState();

  useEffect(() => {
    const filterMessages = () => {
      const newList = List.AppliedJobs.filter(
        (job) => job.status != "Applied" && job.status != "Rejected"
      );
      console.log(newList);
      SetMessages(newList);
    };
    filterMessages();
  }, []);
  if (!messages) {
    return "Loading..";
  }
  return (
    <Box pb={2}>
      <Typography
        variant="h5"
        ml={3}
        mt={3}
        mb={3}
        sx={{ opacity: 0.8, color: "#000000" }}
      >
        You Have{" "}
        <Typography
          variant="h5"
          color="primary"
          sx={{ color: "#8DA242" }}
          component="span"
        >
          {messages.length}{" "}
        </Typography>
        Updates !
      </Typography>
      <Stack spacing={2}>
        {messages.map((message) => (
          <UpdateCard key={message.id} message={message} />
        ))}
      </Stack>
    </Box>
  );
};

export default Updates;
