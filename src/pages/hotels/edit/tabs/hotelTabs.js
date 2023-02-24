import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import OverviewTab from "./tabPanels/overview";
import { useState } from "react";
import { Divider, Grid, Rating, Typography } from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export default function Layout(props) {
  const [selectedTab, setSelectedTab] = useState("1");
  const [tabs, setTabs] = useState([]);
  const [panels, setPanels] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Overview" value="1" />
            <Tab label="Rooms" value="2" />
            <Tab label="Reviews Location" value="3" />
            <Tab label="Policies" value="4" />
          </TabList>
        </Box>

        <TabPanel value="1">
          {/* <OverviewTab rowData={props.rowData}/> */}

          <>
            <Box sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }} p={1}>
              {console.log(props.rowData.name)}
              <Grid container>
                <Grid item>
                  <Typography variant="h4">{props.rowData.name}</Typography>
                </Grid>
                <Grid item xs={0.3}></Grid>
                <Grid item>
                  <Rating name="hotel-rating" defaultValue={3.5} precision={0.5} readOnly />
                </Grid>
              </Grid>
              <Grid container mb={1}>
                <Grid item>
                  <Typography variant="body2" color="initial" mr={1}>
                    {props.rowData.address}
                  </Typography>
                </Grid>
                <Grid item> - </Grid>
                <Grid item>
                  <a target="_blank" href={props.rowData.map}>
                    <Typography variant="body2" color="blue" ml={1}>
                      See Map
                    </Typography>
                  </a>
                </Grid>
              </Grid>
              <Divider />

              {/* Description */}
              <Typography variant="body2" color="initial" mt={1}>
               {props.rowData.description}
              </Typography>
            </Box>
            {/* highlights */}
            <Box sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }} p={1} mt={2}>
              <Typography variant="h6" mb={1}>
                Highlights
              </Typography>
              {props.rowData.highlights ? props.rowData.highlights.map((item) => (
                <Grid container>
                  <Grid item>
                    <StarOutlineRoundedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" ml={1}>
                      {item}
                    </Typography>
                  </Grid>
                </Grid>
              )) : "No any Facilities"}     
            </Box>
            {/* facilities */}
            <Box sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }} p={1} mt={2}>
              <Typography variant="h6" mb={1}>
                Facilities
              </Typography>

              {console.log(props.rowData)}

              {props.rowData.facility ? props.rowData.facility.map((item) => (
                <Grid container>
                  <Grid item>
                    <DoneRoundedIcon color="primary" />
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" ml={1}>
                      {item}
                    </Typography>
                  </Grid>
                </Grid>
              )) : "No any Facilities"}
              
            </Box>
          </>
        </TabPanel>

        {/* rooms */}
        <TabPanel value="2">{props.rowData.name}</TabPanel>

        {/* reviews */}
        <TabPanel value="3">
          <Typography variant="h5">Reviews of {props.rowData.name}</Typography>
        </TabPanel>

        {/* policies */}
        <TabPanel value="4">
          <Typography variant="h5">Property policies</Typography>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
