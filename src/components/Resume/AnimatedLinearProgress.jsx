import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { Grid, Typography } from '@mui/material';

export default function AnimatedLinearProgress({ progress }) {
    const [displayedProgress, setDisplayedProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayedProgress((prevProgress) => Math.min(prevProgress + 1, progress));
        }, 12);

        return () => clearInterval(interval);
    }, [progress]);

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 1,
        width: 400,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#00A3E1' : '#308fe8',
            animation: '$progressAnimation 1s ease-in-out forwards',
        },
        '@keyframes progressAnimation': {
            '0%': {
                width: 0,
            },
            '100%': {
                width: '100%',
            },
        },
    }));
    return (
        <Grid container sx={{ alignItems: 'center' }}>
            <Grid>
                <BorderLinearProgress
                    variant="determinate"
                    value={progress}
                    style={{
                        height: 8,
                        borderRadius: 1,
                        backgroundColor: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                    sx={{
                        '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            backgroundColor: '#00A3E1',
                            animation: 'progressAnimation 1s ease-in-out forwards',
                        },
                        width: { xs: 140, sm:300,md:400, lg: 400 },

                    }}
                />
            </Grid>
            <Grid sx={{ ml: 2 }}>
                <Typography sx={{ ...styleTypo }}>
                    {`${Math.round(displayedProgress)}%`}
                </Typography>
            </Grid>

        </Grid>

    )
}

const styleTypo = {
    fontSize: 18, 
    fontWeight: 'bold'
}