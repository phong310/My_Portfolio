import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";


const SliderLogo = () => {

    const imagePath = process.env.REACT_APP_IMAGE_PATH;

    const TechPng = [
        {
            name: 'React',
            src: `/pngwing.com.png`
        },
        {
            name: 'Vue',
            src: `/vue.png`
        },
        {
            name: 'Laravel',
            src: `/Laravel.png`
        },
        {
            name: 'Node',
            src: `/nodejs.png`
        },
        {
            name: 'ExpressJS',
            src: `/express.png`
        },
        {
            name: 'Material UI',
            src: `/MUI.png`
        },
        {
            name: 'Vuetify',
            src: `/Vuetify.png`
        },
        {
            name: 'Boostrap',
            src: `/Boostrap.png`
        },
        {
            name: 'Ant design',
            src: `/Ant.png`
        },
        {
            name: 'Heroku',
            src: `/Heroku.png`
        },
        {
            name: 'Netlify',
            src: `/Netlify.png`
        },
        {
            name: 'Firebase',
            src: `/FireBase.png`
        },
        {
            name: 'MongoDb',
            src: `/Mongo.png`
        },
        {
            name: 'MySql',
            src: `/MySQL.png`
        },
        {
            name: 'GitLab',
            src: `/GitLab.png`
        },
        {
            name: 'GitHub',
            src: `/github2.png`
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
                        <Grid container spacing={2} sx={{ ...styleGridContainer }}>
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

const styleGridContainer = {
    justifyContent:'center',
    bgcolor:'#242424'
}

