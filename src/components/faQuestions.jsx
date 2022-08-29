import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Box,
  Link,
  Stack,
  CardActions,
  Button,
} from "@mui/material";
import Bannery from "../constants/faqBanner.jpg";
import Paper from "@mui/material/Paper";
import { rgbToHex, styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Faqs } from "../data/Faqs";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
}

const FaQuestions = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const QuestionCard = ({ question }) => {
    return (
      <Accordion
        expanded={expanded === `panel${question.qnId}`}
        onChange={handleChange(`panel${question.qnId}`)}
      >
        <AccordionSummary
          aria-controls={`panel${question.qnId}d-content`}
          id={question.qnId}
        >
          <Typography fontWeight={600} textTransform="capitalize">
            {question.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };
  return (
    <Box>
      <Box position="relative">
        <Box
          style={{
            height: "300px",
            width: "100%",
            backgroundImage: `url(${Bannery})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: "brightness(40%)",
          }}
        ></Box>
        <Typography
          variant="h3"
          fontWeight="fontWeightBold"
          elevation={2}
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            left: "32%",
            position: "absolute",
            top: "30%",
            margin: "auto",

            color: "#FFFFF7",
          }}
        >
          Frequently Asked
          <br />
          Questions
        </Typography>
      </Box>

      <Box mt={4} p={4} backgroundColor="#F2F3F5">
        {Faqs.map((question) => (
          <QuestionCard question={question} />
        ))}
      </Box>
    </Box>
  );
};

export default FaQuestions;
