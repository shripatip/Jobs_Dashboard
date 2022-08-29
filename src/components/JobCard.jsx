import React, { useEffect, useState } from "react";
import { Stack, Box } from "@mui/system";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Link,
  CardActions,
  Button,
} from "@mui/material";
import { format, parseISO } from "date-fns";

const JobCard = ({ details, setActiveLink }) => {
  const [rejectStatus, setrejectStatus] = useState(false);
  const steps = ["Applied", "Reviewed", "Accepted"];
  const rejectSteps = ["Applied", "Rejected"];
  const [stato, setStato] = useState(1);

  useEffect(() => {
    const active = () => {
      if (details.status === "Rejected") {
        setrejectStatus(true);
      }
      switch (details.status) {
        case "Applied": {
          setStato(1);
          break;
        }
        case "Reviewed": {
          setStato(2);
          break;
        }
        case "Accepted": {
          setStato(3);
          break;
        }
        case "Rejected": {
          setStato(2);
          break;
        }
      }
    };
    active();
    return () => {
      setrejectStatus(false);
    };
  });
  return (
    <div>
      <Card
        sx={{
          minWidth: "370px",
          flexBasis: "400px",
          m: 2,
          elevation: 5,
          "&:hover": {
            border: "1px solid #8DA242",
            boxShadow: "3px 3px 3px #ccc",
          },
        }}
      >
        <CardContent sx={{ padding: "8px" }}>
          <Stack direction="row">
            <Avatar
              alt="logo"
              variant="rounded"
              src={details.imgUrl}
              sx={{ width: 80, height: 80, borderRadius: 7 }}
            />
            <Typography
              mt={2}
              ml={1.3}
              fontSize="37px"
              color="text.secondary"
              gutterBottom
            >
              {details.companyName}
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            ml={1}
            mt={0.7}
            component="div"
            sx={{ textTransform: "capitalize", color: "#8DA242", opacity: 0.9 }}
          >
            {details.Role}
          </Typography>
          <Typography
            ml={1}
            sx={{ mb: 1.5, opacity: 0.8 }}
            color="text.secondary"
          >
            {format(parseISO(details.dateApplied), "do MMM Y")}
          </Typography>
          {rejectStatus && (
            <Stepper sx={{ opacity: 0.9 }} alternativeLabel activeStep={stato}>
              {rejectSteps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
          {!rejectStatus && (
            <Stepper sx={{ opacity: 0.9 }} alternativeLabel activeStep={stato}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          )}
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              setActiveLink("Updates");
            }}
            sx={{
              ml: 1.5,
              "&:hover": {
                backgroundColor: "#F2F3F5",
              },
            }}
            size="small"
          >
            Know more
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default JobCard;
