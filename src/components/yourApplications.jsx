import { Typography, Pagination } from "@mui/material";
import { Box,  Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Appliedjobs from "../data/jobs.json";

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const YourApplications = ({ setActiveLink }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [targeto, setTargeto] = useState("All Jobs");
  const [aplJobs, setAplJobs] = useState();
  const handleChange = (event) => {
    setTargeto(event.target.value);
  };
  console.log(targeto);
  useEffect(() => {
    if (targeto === "All Jobs") {
      setAplJobs(Appliedjobs.AppliedJobs);
    } else {
      const NewList = Appliedjobs.AppliedJobs.filter(
        (job) => job.status === targeto
      );
      console.log(NewList);
      setAplJobs(NewList);
    }
  }, [aplJobs, targeto]);
  const Paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };
  const endIndex = currentPage * 7;
  const startIndex = endIndex - 7;
  let currentPageJobs = 0;
  if (aplJobs) {
    currentPageJobs = aplJobs.slice(startIndex, endIndex);
  }
  return (
    <Box mt={2}>
      <Stack
        sx={{ flexDirection: { sm: "column", md: "row", lg: "row" } }}
        justify
        justifyContent="space-between"
      >
        <Typography
          variant="h5"
          ml={3}
          mt={3}
          mb={3}
          sx={{ opacity: 0.8, color: "#000000" }}
        >
          All your applied jobs are visible here!
        </Typography>

        <FormControl sx={{ margin: "0 24px", minWidth: 300 }}>
          <Select
            mt={2}
            sx={{
              backgroundColor: "#FFFFFF",
              "&:before": {
                borderColor: "#8DA242",
              },
              "&:after": {
                borderColor: "#8DA242",
              },
              "&:not(.Mui-disabled):hover::before": {
                borderColor: "#8DA242",
              },
            }}
            value={targeto}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="All Jobs">
              <em>All Jobs</em>
            </MenuItem>
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Reviewed">Reviewed</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction="column">
        <Stack direction="row" justifyContent="center" flexWrap="wrap">
          {aplJobs &&
            currentPageJobs.map((details) => (
              <JobCard details={details} setActiveLink={setActiveLink} />
            ))}
        </Stack>
        <Stack m="50px 0px" alignItems="center">
          {aplJobs && (
            <Pagination
              color="standard"
              variant="outlined"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(aplJobs.length / 9)}
              page={currentPage}
              onChange={Paginate}
              size="large"
            ></Pagination>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default YourApplications;
