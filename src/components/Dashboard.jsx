import React, { useState } from "react";
import { Stack, Box } from "@mui/system";
import { Card, CardContent, Typography, Avatar, Link } from "@mui/material";
import UserImage from "../constants/shrimg.JPG";
import Functions from "./Functions";
const Dashboard = () => {
  const [applicant, setApplicant] = useState({
    name: "Shrijan Sharma",
  });
  const [activeLink, setActiveLink] = useState("Your Applications");
  const DashLinks = [
    {
      name: "Your Applications",
      location: "#",
    },
    {
      name: "Updates",
      location: "#",
    },
  ];
  return (
    <div>
      <Stack mt={2} sx={{ borderBottom: "1px solid #231F20" }}>
        <Card>
          <CardContent>
            <Stack direction="row">
              <Avatar
                ml={2}
                alt="user Image"
                src={UserImage}
                sx={{ width: 90, height: 90 }}
              />
              <Stack>
                <Typography
                  variant="h5"
                  sx={{ color: "#8DA242" }}
                  component="div"
                  mt={1.6}
                  ml={2}
                >
                  {" "}
                  Hello,
                </Typography>
                <Typography variant="h5" component="div" ml={2}>
                  {applicant.name} !
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" mt={3} ml={1} spacing={2}>
              {DashLinks.map((link) => (
                <Link
                  href={link.location}
                  underline="hover"
                  fontSize={17}
                  onClick={() => {
                    setActiveLink(link.name);
                    console.log(link.name);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <Box>
        <Stack>
          <Functions linkName={activeLink} setActiveLink={setActiveLink} />
        </Stack>
      </Box>
    </div>
  );
};

export default Dashboard;
