import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { HeaderCommon } from '../Layout/HeaderCommon'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AnimatedLinearProgress from './AnimatedLinearProgress';
import HtmlPng from '/src/assets/images/html.png'
import Css3Png from '/src/assets/images/css3.png'
import JsPng from '/src/assets/images/js.png'
import ReactJpg from '/src/assets/images/pngwing.com.png'
import LaravelPng from '/src/assets/images/Laravel.png'
import VuePng from '/src/assets/images/vue.png'
import NuxtPng from '/src/assets/images/nuxtjs.png'
import PsPng from '/src/assets/images/ps.png'
import CoralDrawPng from '/src/assets/images/Coraldraw.png'
import AiPng from '/src/assets/images/ai.png'
import NodePng from '/src/assets/images/nodejs.png'


export default function Resume() {
    const [contentPage, setContentPage] = useState(null)

    useEffect(() => {
        setContentPage(
            <>
                <Grid container sx={{ ...styleHeaderTitle }}>
                    <h1 style={{ ...styleH1Text }}>Education & Experience</h1>
                </Grid>
                <Grid container sx={{ ...styleGridTimeLine }}>
                    <Grid item xs={12} >
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2019
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ mb: 2, ...styleContent }}>College freshman</TimelineContent>
                            </TimelineItem>
                            <TimelineItem >
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2020
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ mb: 2, ...styleContent }}>Study majors, HTML, CSS, JS, PHP, database...</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2021
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ mb: 2, ...styleContent }}>Learn popular frameworks like React js, Laravel and use databases like mongo DB, mySql, master github, gitlab...</TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2022
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ mb: 2, ...styleContent }}>Internship at Xtel company for 3 months (participate in lms school management project)</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ mb: 2, ...styleContent }}>Worked at Solashi company for 6 months (participated in building an HRM employee management project)</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent sx={{ ...styleYear }}>
                                    2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot />
                                </TimelineSeparator>
                                <TimelineContent sx={{ ...styleContent }}>Graduate</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ ...gridProgressBar }}>
                    <Grid item lg={12} xl={6} sx={{ ...styleContentProgressBar }}>
                        <Grid container sx={{ ...styleBodyTitle }}>
                            <h1 style={{ ...styleH1Text }}>CODING SKILLS</h1>
                        </Grid>
                        <Grid sx={{ margin: '0 auto' }}>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>HTML5</Typography> */}
                                <img src={HtmlPng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={90} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>CSS3</Typography> */}
                                <img src={Css3Png} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={85} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>JAVASCRIPT</Typography> */}
                                <img src={JsPng} style={styleLogoPng}/>
                                <AnimatedLinearProgress progress={92} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>JAVASCRIPT</Typography> */}
                                <img src={NodePng} style={styleLogoPng}/>
                                <AnimatedLinearProgress progress={70} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} xl={6} sx={{ ...styleContentProgressBar, my: 4 }}>
                        <Grid container sx={{ ...styleBodyTitle }}>
                            <h1 style={{ ...styleH1Text }}>FRAMEWORKS SKILLS</h1>
                        </Grid>
                        <Grid sx={{ margin: '0 auto' }}>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>React JS/TS</Typography> */}
                                <img src={ReactJpg} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={90} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>Laravel</Typography> */}
                                <img src={LaravelPng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={70} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>Vue JS</Typography> */}
                                <img src={VuePng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={70} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>Nuxt JS</Typography> */}
                                <img src={NuxtPng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={50} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} xl={6} sx={{ ...styleContentProgressBar }}>
                        <Grid container sx={{ ...styleBodyTitle }}>
                            <h1 style={{ ...styleH1Text }}>DESIGN SKILLS</h1>
                        </Grid>
                        <Grid sx={{ margin: '0 auto' }}>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>CORAL DRAW</Typography> */}
                                <img src={CoralDrawPng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={50} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>PHOTOSHOP</Typography> */}
                                <img src={PsPng} style={styleLogoPng} />
                                <AnimatedLinearProgress progress={70} />
                            </Grid>
                            <Grid sx={{ ...styleGridIcon }}>
                                {/* <Typography sx={{ ...styleTextProgress }}>ILLUSTRATOR</Typography> */}
                                <img src={AiPng} style={styleLogoPng}/>
                                <AnimatedLinearProgress progress={70} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>

        )
    }, [])

    return (
        <Box>
            <HeaderCommon title="Resume" icon={ArticleOutlinedIcon} content={contentPage} />
        </Box>
    )
}

const styleYear = {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#00A3E1'
}

const styleContent = {
    color: '#E1E1E1',
    fontWeight: "500"
    // fontSize: 16
}

const styleHeaderTitle = {
    justifyContent: "center",
    mt: 4,
}

const styleH1Text = {
    borderBottom: '2px solid #00A3E1',
    fontFamily: 'Playfair Display',
}

const styleGridTimeLine = {
    textAlign: 'center',
    px: 10
}

const gridProgressBar = {
    justifyContent: "center",
    textAlign: 'center',
    alignItems: 'center',
}

const styleContentProgressBar = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
}

const styleBodyTitle = {
    justifyContent: "center",
    mb: 2
}

const styleTextProgress = {
    fontFamily: 'Playfair Display',
    textAlign: "left",
    fontSize: 18
}

const styleGridIcon = {
    mb: 3, 
    display: 'flex', 
    gap: 1, 
    alignItems: 'center',
    alignContents:'center'
}

const styleLogoPng = {
    width: 50,
    height: 50 
}