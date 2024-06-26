import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { HeaderCommon } from '../Layout/HeaderCommon';
import { FullScreenLoading } from '../Loading/LoadingScreen';
import SliderLogo from './SliderLogo';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [contentPage, setContentPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    const username = 'phong310';
    const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    const apiUrl = `https://api.github.com/users/${username}/repos?access_token=${accessToken}`;

    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setProjects(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setContentPage(
      <Box sx={{ ...styleBoxContainer }}>
        {isLoading ? <FullScreenLoading /> :
          <Grid container spacing={2}>
            {projects.filter(project =>
              project.name === "Web_NoiThat" ||
              project.name === "Web-IvyModa" ||
              project.name === "Spotify-demo" ||
              project.name === "Web-Coffee" ||
              project.name === 'coffee-admin' ||
              project.name === 'Da-web-hrm' ||
              project.name === 'Da-api-hrm' ||
              project.name === 'My_Portfolio')
              .map(project => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
                  <Card sx={{ ...styleCard }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://i.pinimg.com/originals/63/45/fa/6345faf40421371e17f2340084440252.jpg"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {project.name} ⭐
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" size="small" href={project.html_url} sx={{ color: '#00A3E1' }}>
                        View on GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        }
        <Grid container sx={{ ...styleService }}>
          <h1 style={{ borderBottom: '2px solid #00A3E1' }}>Technologies used</h1>
        </Grid>
        <Grid container sx={{ ...styleService, mr: 6, mb: 2 }}>
          <SliderLogo />
        </Grid>
      </Box>
    )
  }, [projects, isLoading])

  return (
    <Box>
      <HeaderCommon title="Projects" icon={FolderOpenOutlinedIcon} content={contentPage} />
    </Box>
  );
}

const styleBoxContainer = {
  mt: 4,
  justifyContent: 'center'
};

const styleCard = {
  maxWidth: '100%',
  flex:'20%',
  transition: 'transform .3s, box-shadow .3s',
  ':hover': {
    cursor: 'pointer',
    boxShadow: '0 0 11px rgba(33,33,33,.2)',
    transform: 'scale(1.05)',
  },
};

const styleService = {
  justifyContent: 'center',
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  mt: 4,
};
