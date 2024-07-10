import React from 'react'
import logo from '../assets/logo.svg'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function Header() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <div>

                <div className='lg:text-[17px] md:text-[14px] text-[11px] py-4 px-1 bg-light-blue text-center font-medium'>
                    <p>Navigate your ideal career path with tailored expert advice
                        <span className='text-medium-blue ps-3'>Contact Expert</span>
                    </p>
                </div>

                <div className='flex items-center justify-between  lg:px-16 md:px-5 px-2 py-4 '>

                    <div className=' flex items-center gap-8'>
                        <img src={logo} alt="accerdian logo" className='h-[35px]' />
                        <div className='lg:block md:block sm:block hidden'>
                            <Button variant='contained' sx={{ textTransform: "none", backgroundColor: "#1A73E8", paddingY: "6px", paddingX: "18px", fontSize: "17px", borderRadius: "6px" }}
                            >Courses
                                <IoIosArrowDown className='ms-1' />
                            </Button>
                        </div>
                    </div>

                    <div className='flex items-center gap-6 text-[#1A202C] font-medium'>
                        <div className='lg:flex gap-6 md:hidden hidden'>
                            <div>
                                <NavLink>Refer & Earn</NavLink>
                            </div>
                            <div>
                                <NavLink>Resources</NavLink>
                            </div>
                            <div>
                                <NavLink>About Us</NavLink>
                            </div>
                        </div>

                        <Button variant="text" sx={{ bgcolor: "#EAEDF1", color: 'black', textTransform: "none", paddingY: "6px", paddingX: "18px", fontSize: "16px", borderRadius: "6px", '&:hover': { bgcolor: '#EAEDF1' } }}
                        >Login</Button>

                        <div className='lg:block md:hidden hidden'>
                            <Button variant="contained" sx={{
                                bgcolor: "#1A73E8", color: 'white', textTransform: "none", paddingY: "6px", paddingX: "18px", fontSize: "16px", borderRadius: "6px",
                            }}>Try for free</Button>
                        </div>

                        <div className='text-3xl lg:hidden md:block block' onClick={toggleDrawer(true)}>
                            <HiOutlineMenuAlt3 />
                        </div>

                        <Drawer open={open} onClose={toggleDrawer(false)} className='lg:hidden md:block block'>
                            <Box sx={{ width: '250px', marginTop: "25px" }} role="presentation" onClick={toggleDrawer(false)}>
                                <div className='flex justify-center'>
                                    <img src={logo} alt="accerdian logo" className='h-[40px] w-full' />
                                </div>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Refer & Earn" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Resources" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="About Us" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding
                                        sx={{
                                            display: {
                                                lg: 'none',
                                                md: 'none',
                                                sm: 'none',
                                                xs: 'block',
                                            }
                                        }}
                                    >
                                        <ListItemButton>
                                            <ListItemText primary="Courses" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding sx={{ display: "flex", justifyContent: 'center', marginTop: '10px' }}>
                                        <Button variant="contained" sx={{
                                            bgcolor: "#1A73E8", color: 'white', textTransform: "none", paddingY: "6px", paddingX: "18px", fontSize: "16px", borderRadius: "6px",
                                        }}>Try for free</Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header