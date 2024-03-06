import React, { useEffect, useState } from 'react'
import { HeaderCommon } from '../Layout/HeaderCommon'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';


export default function Contacts() {
    const [contentPage, setContentPage] = useState(null);
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.up('sm'))
    const md = useMediaQuery(theme.breakpoints.up('md'))
    const lg = useMediaQuery(theme.breakpoints.up('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('xl'))
    const minWidth = sm ? 200 : (md ? 300 : (xl ? 400 : 500));

    useEffect(() => {
        setContentPage(
            <Box>
                <Grid container sx={{ ...styleTitle }}>
                    <h1 style={{ borderBottom: '2px solid #00A3E1' }}>Let's Talk</h1>
                </Grid>
                <Grid container sx={{ ...styleGridContainer }} spacing={3}>
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <TextField fullWidth label="Name" InputProps={{
                            style: { color: "#E1E1E1" },
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={4}>
                        <TextField fullWidth label="Email" InputProps={{
                            style: { color: "#E1E1E1" },
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item xs={12} md={10} lg={8}>
                        <TextField multiline rows={8} maxRows={8} fullWidth label="How can we help you?" InputProps={{
                            style: { color: "#E1E1E1",},
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center', mt:2}}>
                        <Button variant="outlined" sx={{ height: 40, color: '#00A3E1' }}>Send message</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ ...styleServiceContente }} spacing={3}>
                    <Grid item xs={12} sm={12} md={2} sx={{ ...styleModule }}>
                        <motion.div
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <SendOutlinedIcon sx={{ ...styleIcon }} />
                        </motion.div>
                        <Typography sx={{ ...styleServiceTitle }}>phamdinhphong12@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ ...styleModule }}>
                        <motion.div
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <LocationOnOutlinedIcon sx={{ ...styleIcon }} />
                        </motion.div>
                        <Typography sx={{ ...styleServiceTitle }}>218 Lac Long Quan, HN</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} sx={{ ...styleModule }}>
                        <motion.div
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <PhoneOutlinedIcon sx={{ ...styleIcon }} />
                        </motion.div>
                        <Typography sx={{ ...styleServiceTitle }}>(+84) 343061257</Typography>
                    </Grid>
                </Grid>
            </Box>
        )

    }, [])
    return (
        <Box>
            <HeaderCommon title="Contact Me." icon={MailOutlinedIcon} content={contentPage} />
        </Box>
    )
}

const styleTitle = {
    justifyContent: 'center',
    fontFamily: 'Playfair Display',
    textTransform: 'uppercase',
}

const styleGridContainer = {
    justifyContent: "center",
    alignItems: "center",
    alignContent:'center',
    textAlign:'center',
    mt: 2,
}

const styleTextField = {
    '& label': {
        color: 'gray',
        fontWeight: 'bold'
    },
    '& label.Mui-focused': {
        color: 'gray',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'gray',
            border: '2px solid'
        },
        '&:hover fieldset': {
            borderColor: 'gray',
            border: '2px solid'
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray',
            border: '2px solid'
        },
    }
}

const styleIcon = {
    fontSize: 40,
    color: '#00A3E1',
    mb: 1
}

const styleServiceTitle = {
    fontFamily: 'Playfair Display',
    fontSize: 16,
    fontWeight: 'bold',
    mb: 1
}

const styleServiceContente = {
    justifyContent: 'space-between',
    fontFamily: 'Playfair Display',
    alignItems: 'center',
    mt: 10,    
    px:5
}

const styleModule = {
    textAlign: 'center'
}

