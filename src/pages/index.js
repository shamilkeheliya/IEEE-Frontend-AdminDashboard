import Head from "next/head";
import { Box, Container, Grid, TextField } from "@mui/material";
import { Sales } from "../components/dashboard/sales";
import { CheckIn } from "../components/dashboard/check-in";
import { ScheduleRooms } from "../components/dashboard/schedule-rooms";
import { CheckOuts } from "../components/dashboard/check-outs";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { NewBooking } from "../components/dashboard/new-booking";
import { useEffect } from "react";
import Router from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const Page = () => {
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Router.push("/login");
    }
  }, [localStorage.getItem("token")]);
  
  const logins = (values) => {
    console.log("value=>", values);
    axios
      .post("http://localhost:5000/api/v1/pharmacy/login", values)
      .then((res) => {
        if (res.data) {
          console.log("succe",res.data);
          // localStorage.setItem("token", res.data.token);
          // localStorage.setItem("username", res.data.data[0].name);
          toast.success("Login Successfuly", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setTimeout(() => {
            Router.push("/");
          }, 2000);
        } else {
          console.log("error=>", res.data);
        }
      })
      .catch((err) => {
        console.log("error=>", err);
      });
  };

  const formik = useFormik({
    initialValues: {
      drugs: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().trim("Must be a valid email").max(255).required("username is required"),
      password: Yup.string().max(255).required("password is required"),
    }),
    onSubmit: async (values, action) => {
      // const credentials = { username, password };
      // const user = await axios.post("", credentials);
      logins(values);
    },
  });

  return (
    <>
      <Head>
        <title>Admin Dashboard | Pharmacy Rome</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3} ml={1}>
            Pharmacy Information
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="add Drugs"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container spacing={3} mt={5} ml={1}>
            Pharmacy Information
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
                placeholder="Username"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
