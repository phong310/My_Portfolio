import { Hidden } from '@mui/material'
import { default as Drawer, default as MuiDrawer } from '@mui/material/Drawer'
import { styled } from '@mui/material/styles'


export const drawerWidth = 200

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 140px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 140px)`
    }
})

const CustomDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        overflowY: 'auto',
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#111111',
            color: '#777777',
            overflowX: 'hidden',
        },
    })
)

const DrawerLeft = ({ children, open, setOpen }) => {
    return (
        <>
            <Hidden mdDown>{DesktopDrawer(children, open)}</Hidden>
            <Hidden mdUp>{MobileDrawer(children, open, setOpen)}</Hidden>
        </>
    )
}

const DesktopDrawer = (children, open) => {
    return (
        <>
            <CustomDrawer open={open} variant="permanent">
                    {children}
            </CustomDrawer>
        </>
    )
}

const MobileDrawer = (children, open, setOpen) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#111111',
                    color: '#777777',
                    overflowX:'hidden'
                },
            }}
            elevation={0}
            anchor="left"
            open={open}
            onClose={setOpen}
        >
            {children}
        </Drawer>
    )
}

export { DrawerLeft }

