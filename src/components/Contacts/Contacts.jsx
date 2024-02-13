import React, { useEffect, useState } from 'react'
import { HeaderCommon } from '../Layout/HeaderCommon'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { motion } from 'framer-motion';


export default function Contacts() {
    const [contentPage, setContentPage] = useState(null);

    useEffect(() => {
        setContentPage(
            <Box>
                <Grid container sx={{ ...styleTitle }}>
                    <h1 style={{ borderBottom: '2px solid #00A3E1' }}>Let's Talk</h1>
                </Grid>
                <Grid container sx={{ ...styleGridContainer }} spacing={2}>
                    <Grid item >
                        <TextField label="Name" InputProps={{
                            style: { width: 400, color: "#E1E1E1" },
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item >
                        <TextField label="Email" InputProps={{
                            style: { width: 400, color: "#E1E1E1" },
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item sx={{ mt: 2 }}>
                        <TextField label="How can we help you?" InputProps={{
                            style: { width: 820, color: "#E1E1E1", height: 240, },
                        }} sx={{ ...styleTextField }} />
                    </Grid>
                    <Grid item xs={12} sx={{textAlign:'center', mt:2}}>
                        <Button variant="outlined" sx={{ height: 40, color: '#00A3E1' }}>Send message</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ ...styleServiceContente }}>
                    <Grid item xs={2} sx={{ ...styleModule }}>
                        <motion.div
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <SendOutlinedIcon sx={{ ...styleIcon }} />
                        </motion.div>
                        <Typography sx={{ ...styleServiceTitle }}>phamdinhphong12@gmail.com</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ ...styleModule }}>
                        <motion.div
                            whileHover={{ scale: 2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <LocationOnOutlinedIcon sx={{ ...styleIcon }} />
                        </motion.div>
                        <Typography sx={{ ...styleServiceTitle }}>218 Lac Long Quan, HN</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ ...styleModule }}>
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
    mt: 2
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

