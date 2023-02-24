import Head from "next/head";
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import { HotelListResults } from "../../components/hotels/hotel-list";
import { HotelListToolbar } from "../../components/hotels/hotel-list-toolbar";

const Page = () => (
  <>
    <Head>
      <title>Hotels | Pharmacy Rome</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <HotelListToolbar />
        <Box sx={{ mt: 3 }}>
          <HotelListResults />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
