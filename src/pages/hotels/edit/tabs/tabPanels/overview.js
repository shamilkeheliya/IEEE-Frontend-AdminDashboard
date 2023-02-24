import { Divider, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export default function OverviewTab(props) {
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
          <a target="_blank" href="https://goo.gl/maps/jwpofRWtGq7j74ka9">
            <Typography variant="body2" color="blue" ml={1}>
              See Map
            </Typography>
          </a>
        </Grid>
      </Grid>
      <Divider />

      {/* Description */}
      <Typography variant="body2" color="initial" mt={1}>
        The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as
        you please. Conveniently situated in the Palm Jumeirah part of Dubai, this property puts you
        close to attractions and interesting dining options. Don't leave before paying a visit to
        the famous Burj Khalifa. Rated with 4 stars, this high-quality property provides guests with
        access to fitness center, indoor pool and outdoor pool on-site.
      </Typography>
    </Box>
    ;{/* highlights */}
    <Box sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }} p={1} mt={2}>
      <Typography variant="h6" mb={1}>
        Highlights
      </Typography>
      <Grid container>
        <Grid item>
          <StarOutlineRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Rated highly by Couples
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <StarOutlineRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Private beach
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <StarOutlineRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Air conditioning
          </Typography>
        </Grid>
      </Grid>
    </Box>
    ;{/* facilities */}
    <Box sx={{ border: 1, borderColor: "grey.300", borderRadius: 1 }} p={1} mt={2}>
      <Typography variant="h6" mb={1}>
        Facilities
      </Typography>
      <Grid container>
        <Grid item>
          <DoneRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Front desk [24-hour]
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <DoneRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Fitness center
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <DoneRoundedIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography variant="body2" ml={1}>
            Free Wi-Fi in all rooms!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </>
}
