import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";


const SliderLogo = () => {

    const imagePath = process.env.REACT_APP_IMAGE_PATH;
    console.log(imagePath);

    const TechPng = [
        {
            name: 'React',
            src: `${imagePath}/pngwing.com.png`
        },
        {
            name: 'Vue',
            src: `${imagePath}/vue.png`
        },
        {
            name: 'Laravel',
            src: `${imagePath}/Laravel.png`
        },
        {
            name: 'Node',
            src: `${imagePath}/nodejs.png`
        },
        {
            name: 'ExpressJS',
            src: `${imagePath}/express.png`
        },
        {
            name: 'Material UI',
            src: `${imagePath}/MUI.png`
        },
        {
            name: 'Vuetify',
            src: `${imagePath}/Vuetify.png`
        },
        {
            name: 'Boostrap',
            src: `${imagePath}/Boostrap.png`
        },
        {
            name: 'Ant design',
            src: `${imagePath}/Ant.png`
        },
        {
            name: 'Heroku',
            src: `${imagePath}/Heroku.png`
        },
        {
            name: 'Netlify',
            src: `${imagePath}/Netlify.png`
        },
        {
            name: 'Firebase',
            src: `${imagePath}/FireBase.png`
        },
        {
            name: 'MongoDb',
            src: `${imagePath}/Mongo.png`
        },
        {
            name: 'MySql',
            src: `${imagePath}/MySQL.png`
        },
        {
            name: 'GitLab',
            src: `${imagePath}/GitLab.png`
        },
        {
            name: 'GitHub',
            src: `${imagePath}/github2.png`
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

