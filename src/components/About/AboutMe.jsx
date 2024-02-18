import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { HeaderCommon } from '../Layout/HeaderCommon'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { saveAs } from 'file-saver';
import LaptopOutlinedIcon from '@mui/icons-material/LaptopOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { motion } from 'framer-motion';
import cvFilePath from '/src/assets/CV_PhamDinhPhong.pdf'

export default function AboutMe() {
  const [contentPage, setContentPage] = useState(null)

  const handleDownloadCV = () => {
    saveAs(cvFilePath, 'CV_PhamDinhPhong.pdf');
  };

  useEffect(() => {
    setContentPage(
      <>
        <Grid container spacing={6} sx={{ ...titleHead }}>
          <Grid item md={12} lg={8}>
            <h1>Web Developer & Designer</h1>
            <Typography sx={{ ...styleText }}>
              Welcome to my portfolio page! I am Phong, a young programmer with a strong passion for technology and web development. At the age of 23, I just graduated from university majoring in Software Technology, where I refined and developed in-depth skills in the field of web development, especially Frontend, but I also have the ability to program. Significant backend, with proficiency in Node.js and PHP framework Laravel. <br /> <br />
              In addition to my professional skills, I am known as a cheerful, sociable person with a high spirit of learning. I am always curious and eager to constantly improve my knowledge, setting new challenges to develop my creativity and professional skills.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <img src='https://watson-vcard.netlify.app/img/signature-white.png' />
            </Box>
          </Grid>
          <Grid item md={12} lg={4}>
            <h1>Personal Information</h1>
            <Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Name:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>Phạm Đình Phong</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Age:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>22 Years</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Residence:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>Ha Noi</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Address:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>218 Lac Long Quan</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Email:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>phamdinhphong12@gmail.com</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Phone:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>(+84) 343061257</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mb: 1 }}>
                <Grid item>
                  <Typography sx={{ ...styleTitle }}>Freelance:</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ ...styleText }}>Available</Typography>
                </Grid>
              </Grid>
              <Grid sx={{ width: 250 }}>
                <Button variant="outlined" onClick={handleDownloadCV} sx={{ mt: 2, width: '100%', height: 40, color: '#00A3E1' }}>Download cv</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ ...styleService, mt:4 }}>
          <h1 style={{ borderBottom: '2px solid #00A3E1' }}>Services</h1>
        </Grid>
        <Grid container sx={{ ...styleServiceContente }} spacing={4}>
          <Grid item xs={12} md={6} lg={2} sx={{ ...styleModule }}>
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LaptopOutlinedIcon sx={{ ...styleIcon }} />
            </motion.div>
            <Typography sx={{ ...styleServiceTitle }}>Web Development</Typography>
            <Typography sx={{ ...styleDescript }}>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={2} sx={{ ...styleModule }}>
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <RemoveRedEyeOutlinedIcon sx={{ ...styleIcon }} />
            </motion.div>
            <Typography sx={{ ...styleServiceTitle }}>Web Design</Typography>
            <Typography sx={{ ...styleDescript }}>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={2} sx={{ ...styleModule }}>
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DevicesOutlinedIcon sx={{ ...styleIcon }} />
            </motion.div>
            <Typography sx={{ ...styleServiceTitle }}>Responesive Design</Typography>
            <Typography sx={{ ...styleDescript }}>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={2} sx={{ ...styleModule }}>
            <motion.div
              whileHover={{ scale: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <CameraAltOutlinedIcon sx={{ ...styleIcon }} />
            </motion.div>
            <Typography sx={{ ...styleServiceTitle }}>Photography</Typography>
            <Typography sx={{ ...styleDescript }}>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero</Typography>
          </Grid>
        </Grid>
      </>

    )
  }, [])

  return (
    <Box>
      <HeaderCommon title="About Me." icon={PermIdentityOutlinedIcon} content={contentPage} />
    </Box>
  )
}


const titleHead = {
  fontFamily: 'Playfair Display',
  mt: 1,
  fontWeight: 900,
}

const styleTitle = {
  textDecoration: 'underline',
  textDecorationColor: '#00A3E1',
  textDecorationThickness: '2px',
  fontSize: 16,
  fontWeight: 400,
}

const styleText = {
  fontSize: 16,
  color: '#E1E1E1'
}

const styleService = {
  justifyContent: 'center',
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
}

const styleServiceContente = {
  justifyContent: 'space-between',
  fontFamily: 'Playfair Display',
  alignItems: 'center',
  mt: 2,
}

const styleModule = {
  textAlign: 'center'

}

const styleIcon = {
  fontSize: 50,
  color: '#00A3E1',
  mb: 1
}

const styleServiceTitle = {
  fontFamily: 'Playfair Display',
  fontSize: 22,
  fontWeight: 'bold',
  mb: 1
}

const styleDescript = {
  color: '#E1E1E1'
}