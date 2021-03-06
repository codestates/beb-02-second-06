import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp(e) {
  const handleClose = () => {
    setSuccess(false);
    setError(false);
    if (success) {
      e.history.push("/login");
    }
  };

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // ------- 지갑 생성
  const Web3 = require("web3");
  var web3 = new Web3(new Web3.providers.HttpProvider());
  var account = web3.eth.accounts.create();
  console.log("account: ", account);
  console.log("-----------------------------------");
  console.log("account.address: ", account.address);
  console.log("account.privKey: ", account.privateKey);

  // -----

  const handleSubmit = (event) => {
    event.preventDefault();

    //   if (password !== confirmPassword) {
    //     setError(true);
    // }

    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    let body = {
      name: data.get("userName"),
      password: data.get("password"),
      address: data.get("address"),
      privateKey: data.get("privateKey"),
    };
    console.log(body);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                //   sm={6}
              >
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="userName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="confirm_password"
                  type="password"
                  id="corfirm_password"
                  autoComplete="current_password"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  Address : {account.address}
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address Confirm"
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1" variant="h6">
                  PrivateKey : {account.privateKey}
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="privateKey"
                  label="Privatekey Confirm"
                  name="privateKey"
                  //   autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Modal
          open={error}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              비밀번호를 확인해 주세요
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}
