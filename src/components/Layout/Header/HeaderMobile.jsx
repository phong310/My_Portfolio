import { Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'

export default function HeaderMobile({ triggerSidebar }) {
    return (
        <Toolbar sx={{
            ...styleBoxContainer,
        }}>
            <Grid container sx={{justifyContent:'center', alignItems:'center'}}>
                <Grid item xs={11}>
                    <Typography variant="h6" component="div" sx={{ fontFamily: 'Playfair Display', fontSize: 24 }}>ĐÌNH PHONG</Typography>
                </Grid>
                <Grid item xs={1} sx={{ textAlign: 'right', }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={triggerSidebar}
                    >
                        <MenuIcon color="white" />
                    </IconButton>
                </Grid>

            </Grid>
        </Toolbar>
    )
}

const styleBoxContainer = {
    color: 'white',
    position:"fixed",
    textAlign: 'center',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor:"black",
    zIndex: 1
}
