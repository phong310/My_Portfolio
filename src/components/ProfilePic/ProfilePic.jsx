import { Grid, Typography } from '@mui/material'
import avatarImage from '../../assets/images/IMG_0305.jpg';
import React from 'react'

export default function ProfilePic() {
  return (
      <Grid sx={{ position: 'relative', }}>
          <Typography sx={{ ...styleName }}>Đình Phong 👨‍💻</Typography>
          <img src={avatarImage} alt='avatar' style={styleImg} />
      </Grid>
  )
}

const styleImg = {
    height: "auto",
    position: 'relative',
    width: '100%'
}

const styleName = {
    whiteSpace: 'nowarp',
    fontSize: 18,
    fontWeight: 400,
    position: "absolute",
    bottom: 5,
    color: '#fff',
    textTransform: "uppercase",
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(0, 163, 225, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Playfair Display'
}