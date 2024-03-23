'use client'
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { common, grey } from "@mui/material/colors";
const Header = () => {
  return (
    <Box sx={{borderBottom:`8px solid ${grey[900]}`}}>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          padding: "25px 20px",
          position:'absolute'
        }}
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              {/* <Image
                src="https://e7.pngegg.com/pngimages/241/697/png-clipart-netflix-full-logo-tech-companies-thumbnail.png"
                width={100}
                height={100}
                layout="intrinsic"
                alt="Netflix Logo"
              /> */}
             <Typography
              variant="h4"
               color={'red'}
              fontStyle={'unset'}
              fontFamily={'unset'}
              fontWeight={900}
              letterSpacing={3}
               >
                NETFLIX
               </Typography> 
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue={"EN"}
                sx={{
                  border:`2px solid #FFF`,
                  backgroundColor:'commun.white',
                  color:'common.white',
                  '&.MuiSelect-icon':{
                    color:'common.white',
                  },
                  '& .MuiOutlinedInput-notchedOutline':{
                    border:'none'
                  }
                }}
              >
                <MenuItem value="TR">Türkçe</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button color="primary" variant="contained">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          height: "745px",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            background: "rgb(0,0,0, 0.4)",
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0,0,0,0.8) 0,
            rgba(0,0,0,0.1) 60%,
            rgba(0,0,0,0.8) 100%,
            )`,
          },
        }}
      >
        <Box>
          <Image
            src="/backdrop.jpg"
            objectFit="cover"
            layout="fill"
            alt="Backdrop Netflix"
          />
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 9999 }}>
            <Typography
              variant="h2"
              component="h1"
              color="common.white"
              fontWeight="600"
              textAlign="center"
            >
              Unlimited movies, TV shows, and more.
            </Typography>

            <Typography
              variant="h5"
              component="p"
              color="common.white"
              fontWeight="600"
              textAlign="center"
              gutterBottom
            >
              Watch anywhere. Cancel anytime.
            </Typography>

            <Typography
              variant="h6"
              component="p"
              color="common.white"
              fontWeight="600"
              textAlign="center"
              sx={{ my: 3 }}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </Typography>
            <Grid container>
              <Grid item xs>
                <TextField
                  variant="filled"
                  label="Email Addres"
                  fullWidth
                  sx={{
                    bgcolor: "common.white",
                  }}
                />
              </Grid>

              <Grid item xs="auto">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{
                    height: "100%",
                    borderRadius: "2px",
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
