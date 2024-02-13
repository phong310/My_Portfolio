import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";


const SliderLogo = () => {
    const TechPng = [
        {
            name: 'React',
            src: '/src/assets/images/pngwing.com.png'
        },
        {
            name: 'Vue',
            src: '/src/assets/images/vue.png'
        },
        {
            name: 'Laravel',
            src: '/src/assets/images/Laravel.png'
        },
        {
            name: 'Node',
            src: '/src/assets/images/nodejs.png'
        },
        {
            name: 'ExpressJS',
            src: '/src/assets/images/express.png'
        },
        {
            name: 'Material UI',
            src: '/src/assets/images/MUI.png'
        },
        {
            name: 'Vuetify',
            src: '/src/assets/images/Vuetify.png'
        },
        {
            name: 'Boostrap',
            src: '/src/assets/images/Boostrap.png'
        },
        {
            name: 'Ant design',
            src: '/src/assets/images/Ant.png'
        },
        {
            name: 'Heroku',
            src: '/src/assets/images/Heroku.png'
        },
        {
            name: 'Netlify',
            src: '/src/assets/images/Netlify.png'
        },
        {
            name: 'Firebase',
            src: '/src/assets/images/FireBase.png'
        },
        {
            name: 'MongoDb',
            src: '/src/assets/images/Mongo.png'
        },
        {
            name: 'MySql',
            src: '/src/assets/images/MySQL.png'
        },
        {
            name: 'GitLab',
            src: '/src/assets/images/GitLab.png'
        },
        {
            name: 'GitHub',
            src: '/src/assets/images/github2.png'
        }
    ]
    return (
        <div style={{ maxWidth: 800 }}>
            <Swiper
                slidesPerView={6}
                className="mySwiper"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {TechPng.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Grid  container spacing={2} sx={{ justifyContent: 'center', bgcolor: '#242424' }}>
                            <Grid item xs={2}>
                                <Tooltip title={item.name} placement="top" arrow>
                                    <img src={item.src} alt={item.name} style={{ width: 50, height: 50 }} />
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>


    );
};

export default SliderLogo;

