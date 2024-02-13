import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

export const HeaderCommon = ({ title, icon: IconComponent, content }) => {
    return (
        <Grid sx={{ ...gridContainer }}>
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
    padding: '0 260px',
    my: 5,
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