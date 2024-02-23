import { Grid, Tooltip } from '@mui/material';
import React from 'react';
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactJpg from '/src/assets/images/pngwing.com.png'
import VuePng from '/src/assets/images/vue.png'
import LaravelPng from '/src/assets/images/Laravel.png'
import NodePng from '/src/assets/images/nodejs.png'
import ExPng from '/src/assets/images/express.png'
import MuiPng from '/src/assets/images/MUI.png'
import VuetifyPng from '/src/assets/images/Vuetify.png'
import BoostrapPng from '/src/assets/images/Boostrap.png'
import AntPng from '/src/assets/images/Ant.png'
import HerokuPng from '/src/assets/images/Heroku.png'
import NetlifyPng from '/src/assets/images/Netlify.png'
import FireBasePng from '/src/assets/images/FireBase.png'
import MongoDbPng from '/src/assets/images/Mongo.png'
import MysqlPng from '/src/assets/images/MySQL.png'
import GitLabPng from '/src/assets/images/GitLab.png'
import GitHubPng from '/src/assets/images/github2.png'
import NuxtPng from '/src/assets/images/nuxtjs.png'




const SliderLogo = () => {

    const TechPng = [
        {
            name: 'React',
            src:  ReactJpg 
        },
        {
            name: 'Vue',
            src: VuePng
        },
        {
            name: 'Laravel',
            src: LaravelPng
        },
        {
            name: 'Node',
            src: NodePng
        },
        {
            name: 'ExpressJS',
            src: ExPng
        },
        {
            name: 'Material UI',
            src: MuiPng
        },
        {
            name: 'Vuetify',
            src: VuetifyPng
        },
        {
            name: 'Boostrap',
            src: BoostrapPng
        },
        {
            name: 'Ant design',
            src: AntPng
        },
        {
            name: 'Heroku',
            src: HerokuPng
        },
        {
            name: 'Netlify',
            src: NetlifyPng
        },
        {
            name: 'Firebase',
            src: FireBasePng
        },
        {
            name: 'MongoDb',
            src: MongoDbPng
        },
        {
            name: 'MySql',
            src: MysqlPng
        },
        {
            name: 'GitLab',
            src: GitLabPng
        },
        {
            name: 'GitHub',
            src: GitHubPng
        },
        {
            name: 'NuxtJs',
            src: NuxtPng
        }
    ]
    return (
        <Grid style={{ maxWidth: 800 }}>
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

        </Grid>


    );
};

export default SliderLogo;

const styleGridContainer = {
    justifyContent:'center',
    bgcolor:'#242424'
}

