import Head from "next/head";
import {
  autocompleteClasses,
  Box,
  Breadcrumbs,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../../../components/dashboard-layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "./tabs/hotelTabs";
import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const Page = () => {
  const route = useRouter();
  const roomId = route.query.roomIdEdit;
  const [rowData, setRowData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  const getHotelDataById = async () => {
    const res = await fetch("http://localhost:5000/hotelier/" + roomId);
    const data = await res.json();
    setRowData(data);
  };

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  useEffect(() => {
    getHotelDataById();
  }, []);

  const imglist = [
    {
      id: 1,
      image: "https://picsum.photos/200/200",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/200",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/200",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
    {
      id: 4,
      image: "https://picsum.photos/200/200",
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda, velit explicabo non at consequuntur accusamus hic optio alias error nisi sunt sint veniam aperiam similique dolor fugit itaque minima!",
    },
  ];

  return (
    <>
      <Head>
        <title>Edit hotel | Pharmacy</title>
      </Head>

      <Box
        component="main"
        A
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Container maxWidth={false}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/hotels">
              Hotels
            </Link>
            <Typography color="text.primary">
              {rowData.name}({rowData._id})
            </Typography>
          </Breadcrumbs>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Edit Hotel - {rowData.name}
            </Typography>
          </Box>
        </Container>
        {/* {console.log(rowData.images)} */}

        <Container maxWidth="lg" sx={{ mx: 1 }}>
          <ImageList
            sx={{ width: autocompleteClasses, height: autocompleteClasses, mt: 4, mb: 2 }}
            cols={6}
            rowHeight={164}
          >
            {/* <div>

              {imglist.map((item, index) => (
                <>
                  <img
                    key={item.id}
                    src={`${item.image}?w=200&h=164&fit=cover&auto=format&dpr=2 2x`}
                    alt={item.title}
                    style={{ maxHeight: "80vh", maxWidth: "50vw" }}
                    onClick={() => {
                      lightBoxHandler(true, index);
                    }}
                  />
                </>
              ))}

            </div> */}
            
            {rowData.images
              ? rowData.images.map((item,index) => (
                  <ImageListItem key={item.images}>
                    <img
                      key={item}
                      src={`${item}?w=200&h=164&fit=cover&auto=format`}
                      srcSet={`${item}?w=200&h=164&fit=cover&auto=format&dpr=2 2x`}
                      alt={item}
                      loading="lazy"
                      onClick={() => {
                        lightBoxHandler(true, index);
                      }}
                    />
                  </ImageListItem>
                ))
              : "No Images provided"}
          </ImageList>
          <LightBox
              state={toggle}
              event={lightBoxHandler}
              data={rowData.images}
              imageWidth="60vw"
              imageHeight="60vh"
              thumbnailHeight={50}
              thumbnailWidth={50}
              setImageIndex={setSIndex}
              imageIndex={sIndex}
            />
          <Layout rowData={rowData} />
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
