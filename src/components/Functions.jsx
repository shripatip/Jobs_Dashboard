import React from "react";
import Updates from "./updates";
import YourApplications from "./yourApplications";
import Box from "@mui/material/Box";
const Functions = ({ linkName, setActiveLink }) => {
  console.log(linkName);
  return (
    <Box sx={{ backgroundColor: "#F2F3F5" }}>
      {linkName === "Your Applications" && (
        <YourApplications setActiveLink={setActiveLink} />
      )}
      {linkName === "Updates" && <Updates />}
    </Box>
  );
};

export default Functions;
