import { Box, Typography } from '@mui/material';
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import MovingComponent from 'react-moving-text'

export default function Home() {
    return (

        <Box sx={{ ...styleBoxContaier }}>
            <Typography sx={{ ...styleTypo }}>
                <MovingComponent
                    type="shadow"
                    duration="2500ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="infinite"
                    fillMode="none">
                    Phạm <span style={{ color: '#00A3E1' }}>Đình Phong</span>
                </MovingComponent>

            </Typography>
            <TypewriterComponent
                options={{
                    strings: [
                        `Hello Everyone 🙌`,
                        `I am a Web Developer 🔥`,
                        `I am a Web Designer ❤`,
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40,
                }}
            />
        </Box>

    );
}

const styleBoxContaier = {
    backgroundImage: 'url("https://cdn.dribbble.com/users/192276/screenshots/2500960/attachments/491748/midnightinthevalley-2560x1440.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
};

const styleTypo = {
    fontSize: 60,
    fontWeight: 600,
    textTransform: "uppercase",
    mb: 2,
    fontFamily: 'Playfair Display'
}