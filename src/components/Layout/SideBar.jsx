import * as React from 'react';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from '../About/AboutMe';
import Home from '../Home/Home';
import ProfilePic from '../ProfilePic/ProfilePic';
import Social from '../Social/Social';
import Projects from '../Projects/Projects';
import { motion } from 'framer-motion';
import Resume from '../Resume/Resume';
import Contacts from '../Contacts/Contacts';

const drawerWidth = 200;

const sideBarMenu = [
    {
        label: 'Home',
        path: '/',
        Icon: <HomeOutlinedIcon />,
        component: <Home />,
    },
    {
        label: 'About me',
        path: '/about',
        Icon: <PermIdentityOutlinedIcon />,
        component: <AboutMe />,
    },
    {
        label: 'Projects',
        path: '/projects',
        Icon: <FolderOpenOutlinedIcon />,
        component: <Projects />,
    },
    {
        label: 'Resume',
        path: '/resume',
        Icon: <ArticleOutlinedIcon />,
        component: <Resume/>
    },
    {
        label: 'Contact',
        path: '/contact',
        Icon: <MailOutlinedIcon />,
        component: <Contacts/>
    },
];

export default function SideBar() {
    const location = useLocation();
    return (
        <Box sx={{ ...styleBoxContainer }}>
            <CssBaseline />
            <Drawer
                sx={{
                    ...styleDrawer,
                }}
                variant="permanent"
                anchor="left"
            >
                <ProfilePic />
                <List>
                    {sideBarMenu.map((item, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ x: -drawerWidth }}
                                animate={{ x: 0 }}
                                exit={{ x: -drawerWidth }}
                                transition={{ type: 'tween', duration: 0.5 }}
                                whileHover={{ scale: 1.1, transition: { duration: 0.2 }}}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ListItem key={index} disablePadding> 
                                    <ListItemButton
                                        component={Link}
                                        to={item.path}
                                        sx={{
                                            ...styleList,
                                            color: location.pathname === item.path ? 'white' : '#777777',
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ...styleIcon,
                                                color: location.pathname === item.path ? 'white' : '#777777',
                                            }}
                                        >
                                            {item.Icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.label.toUpperCase()} />
                                    </ListItemButton>
                                </ListItem>
                            </motion.div>

                            <Divider sx={{ ...styleBackground }} />
                        </React.Fragment>
                    ))}
                </List>
                <Box sx={{ marginTop: 'auto' }}>
                    <Social />
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Routes>
                        {sideBarMenu.map((item, index) => (
                            <Route
                                key={index}
                                path={item.path}
                                element={item.component}
                            />
                        ))}
                    </Routes>
                </motion.div>
            </Box>
        </Box>
    );
}

const styleBoxContainer = {
    display: 'flex',
    bgcolor: '#242424',
    color: 'white',
};

const styleDrawer = {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#111111',
        color: '#777777',
    },
};

const styleIcon = {
    minWidth: 30,
    color: '#777777',
};

const styleBackground = {
    backgroundColor: '#777777',
};

const styleList = {
    transition: 'color 0.3s',

};

styleList[':hover'] = {
    cursor: 'pointer',
};
