import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import BorderBottom from "@/components/Wrapper/BorderedBottom";
import Image from "next/image";

interface Props {
  text: string;
}
const Title = ({ text }: Props) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      gutterBottom
      sx={{ textAlign: { xs: "center", md: "left" } }}
    >
      {text}
    </Typography>
  );
};

const Desctription = ({ text }: Props) => {
  return (
    <Typography
      variant="h5"
      component="h3"
      sx={{ textAlign: { xs: "center", md: "left" } }}
    >
      {text}
    </Typography>
  );
};

const Features = () => {
  return (
    <>
      <Box sx={{ bgcolor: "common.black", color: "common.white" }}>
        <BorderBottom>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container alignItems="center" columnSpacing={12}>
              <Grid item xs={12} md={6}>
                <Title text="Enjoy on your TV." />
                <Desctription
                  text="Watch on Smart TVs, Playstation, XBox, Chromecast, Apple, TV,
                Blu-ray players, and more."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ positon: "relative" }}>
                  <Box sx={{ positon: "relative", zIndex: 2 }}>
                    <Image
                      src="/images/tv.png"
                      width={640}
                      height={480}
                      layout="intrinsic"
                      alt="TV"
                    />
                     <Box
                    sx={{
                      position: "absolute",
                      maxWidth: "50%",
                      maxHeight: "20%",
                      width:'100%',
                      height:'100%',
                      top: "100%",
                      left: "69%",
                      transform:'translate(-50%,-50%)'
                    
                    }}
                  >
                    <video
                      src="/videos/videotv.m4v"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      autoPlay
                      playsInline
                      muted
                      loop
                    ></video>
                  </Box>
                  </Box>
                 
                </Box>
              </Grid>
            </Grid>
          </Container>
        </BorderBottom>

        <BorderBottom>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container alignItems="center" columnSpacing={12}>
              <Grid item xs={12} md={6} sx={{ orders: { xs: 2, md: 1 } }}>
                <Box>
                  <Image
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    width={640}
                    height={480}
                    layout="intrinsic"
                    alt="Mobile"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ orders: { xs: 1, md: 2 } }}>
                <Title text="Download your shows to watch offline." />
                <Desctription text="Save your favorites easily and always have something to wathc." />
              </Grid>
            </Grid>
          </Container>
        </BorderBottom>

        <BorderBottom>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container alignItems="center" columnSpacing={12}>
              <Grid item xs={12} md={6}>
                <Title text="Watch everywhere." />
                <Desctription text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." />
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Image
                    src="/images/devices.png"
                    width={640}
                    height={480}
                    layout="intrinsic"
                    alt="Devices"
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </BorderBottom>

        <BorderBottom>
          <Container maxWidth="lg" sx={{ py: 6 }}>
            <Grid container alignItems="center" columnSpacing={12}>
              <Grid item xs={12} md={6} sx={{ orders: { xs: 2, md: 1 } }}>
                <Box>
                  <Image
                    src="/images/kids.png"
                    width={640}
                    height={480}
                    layout="intrinsic"
                    alt="Kids"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ orders: { xs: 1, md: 2 } }}>
                <Title text="Create profiles for kids." />
                <Desctription text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership.." />
              </Grid>
            </Grid>
          </Container>
        </BorderBottom>
      </Box>
    </>
  );
};

export default Features;
