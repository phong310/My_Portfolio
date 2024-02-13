import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Social() {

  const openFacebookPage = () => {
    window.open('https://www.facebook.com/dinhphong.pham.75/', '_blank');
  };

  const openIgPage = () => {
    window.open('https://www.instagram.com/_thewiind/?hl=vi', '_blank');
  }

  const openGitHubPage = () => {
    window.open('https://github.com/phong310', '_blank');
  }

  const openLinkedInPage = () => {
    window.open('https://www.linkedin.com/in/ph%E1%BA%A1m-%C4%91%C3%ACnh-phong-undefined-645755262/', '_blank');
  }

  return (
    <>
        <Box sx={{ ...styleBox }}>
          <Grid sx={{ ...detail }} onClick={openFacebookPage}>
            <FacebookIcon sx={{ ...iconStyle }} />
          </Grid>
          <Grid sx={{ ...detail }} onClick={openIgPage}>
            <InstagramIcon sx={{ ...iconStyle }} />
          </Grid>
          <Grid sx={{ ...detail }} onClick={openGitHubPage}>
            <GitHubIcon sx={{ ...iconStyle }} />
          </Grid>
          <Grid sx={{ ...detail }} onClick={openLinkedInPage}>
            <LinkedInIcon sx={{ ...iconStyle }} />
          </Grid>
        </Box>
      <Typography sx={{ ...styleTypo }}>2024 © Made by The Wind ❤</Typography>
    </>

  )
}

const styleBox = {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 190,
}

const detail = {
  mx: 1
}

const iconStyle = {
  transition: 'color 0.3s',
}

iconStyle[':hover'] = {
  color: 'white',
  cursor: 'pointer'
};

const styleTypo = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: 12,
  my: 1,
}