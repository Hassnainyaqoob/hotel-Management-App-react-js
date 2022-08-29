import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/dashboardscreens/home';
import Contact from '../pages/dashboardscreens/contact';
import About from '../pages/dashboardscreens/about';
import { useNavigate } from "react-router-dom";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Profile from '../pages/dashboardscreens/profile';
import BungalowOutlinedIcon from '@mui/icons-material/BungalowOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import Divider from '@mui/material/Divider';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import InfoIcon from '@mui/icons-material/Info';
import BookingScreen from '../pages/dashboardscreens/BookingScreen';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getUserProfile, getUserProfileData } from '../config/firebase/firebasemethods';
import { useDispatch } from 'react-redux';
import BookingsCards from '../pages/dashboardscreens/bookings';
import Payments from '../pages/dashboardscreens/payment';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

}));

export default function MainLayout() {

    const dispatch = useDispatch()

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const naviagte = useNavigate()
    const location = useLocation()

    const [routeList, setRouteList] = React.useState([
        {
            routeName: "Home",
            route: "/",
            icon: <BungalowOutlinedIcon sx={{color:"black"}} />,

        }, {
            routeName: "Contact Us",
            route: "contact",
            icon: <PermContactCalendarOutlinedIcon sx={{color:"black"}} />,
        }, {
            routeName: "About Us",
            route: "about",
            icon: <InfoIcon sx={{color:"black"}} />,
        },
        {
            routeName: "Profile",
            route: "/profile",
            icon: <AccountBoxOutlinedIcon sx={{color:"black"}} />,
        }, {
            routeName: "Booking Cards",
            route: "/mycards",
            icon: <AccountBoxOutlinedIcon sx={{color:"black"}} />,
        }

    ])

    const handleDrawerOpen = () => {
        setOpen(true);
    };



    const handleDrawerClose = () => {
        setOpen(true);
    };

    let Nextriote = (route) => {
        naviagte(route)
        setOpen(false);

    }





    const getAllData = (id) => {

        if (id) {
            getUserProfile(`Users/${id}`).then((res) => {
                dispatch({
                    type: "DATAFROMDATABASE",
                    payload: res
                })
            }).catch((err) => {
                console.log(err)
            })
        }


    }

    React.useEffect(() => {
        // signOut(auth)
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                getUserProfileData(user.uid, dispatch)
            }
            // console.log(user.uid);
        })
        if (location.state && location.state.user) {
            naviagte("/")
        } else {
            naviagte("/signuup")
        }

    }, [])


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "orange" }} position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ color: "black" }} noWrap component="div">
                        HOTEL MANAGEMENT
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <div className='logo-hotel'>
                            <BedroomParentOutlinedIcon sx={{color:"black"}} id="bedroom" />

                        </div>

                        <div id='hoteWorlss'>
                            <spam id='hotel-words'>Hotel Management</spam>
                            {/* <CloseIcon sx={{color:"black"}} oncli /> */}
                        </div>


                    </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                    {routeList.map((text, index) => {
                        return <ListItem onClick={() => Nextriote(text.route)} key={index} disablePadding>

                            <ListItemButton>
                                <ListItemIcon>

                                    {text.icon}

                                </ListItemIcon>
                                <ListItemText primary={text.routeName} />
                            </ListItemButton>
                        </ListItem>

                    })}
                </List>
                {/* https://www.youtube.com/watch?v=VSsUlwpK_Xo */}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path="mycards" element={<BookingsCards />} />
                    <Route path='booking' element={<BookingScreen />} />
                    <Route path="payment" element={<Payments />} />


                </Routes>
            </Main>
        </Box>
    );
}
