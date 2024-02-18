import { Divider, Grid, Typography } from '@mui/material'
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'

export const HeaderCommon = ({ title, icon: IconComponent, content }) => {
    const theme = useTheme()
    const sm = useMediaQuery(theme.breakpoints.up('sm'))
    const md = useMediaQuery(theme.breakpoints.up('md'))
    const lg = useMediaQuery(theme.breakpoints.up('lg'))


    return (
        <Grid sx={{ ...gridContainer, padding: lg ? '0 200px' : md ? '0 100px' : sm ? '0 50px' : '0 20px' }}>
            <Grid sx={{ ...styleWrappe }}>
                <Typography sx={{ ...styleTitle }}>{title}</Typography>
                {IconComponent && <IconComponent sx={{ ...styleIcon }} />}
            </Grid>
            <Divider sx={{ ...styleDashed }} />
            {content}
        </Grid>
    )
}

const gridContainer = {
    my: 5,
    mt: 8
}

const styleTitle = {
    fontSize: '36px',
    fontWeight: 700,
    textTransform: 'capitalize',
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'Playfair Display',
}

const styleIcon = {
    fontSize: '36px'
}

const styleWrappe = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#00A3E1'
}

const styleDashed = {
    borderStyle: 'dashed',
    borderWidth: '1px',
    borderColor: '#777777'
}