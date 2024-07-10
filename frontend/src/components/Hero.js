import { Alert, Box, Button, Dialog, DialogContent, DialogTitle, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import Anniversary from '../assets/Anniversary.svg'
import dollar1 from '../assets/dollar1.svg'
import dollar2 from '../assets/dollar2.svg'
import dollar3 from '../assets/dollar3.svg'
import dollar4 from '../assets/dollar4.svg'
import dollar5 from '../assets/dollar5.svg'

function Hero() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("" || []);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        courseName: '',
        referralName: '',
        relationToReferral: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formValues);

        await axios.post("http://localhost:8081/user/data", formValues, { withCredentials: true })
            .then((res) => {
                console.log(res)
                if (res.data.status === 'success') {
                    setMessage(res.data.message)
                } else if (res.data.status === 'warning') {
                    setMessage(res.data.message)
                } else if (res.data.status === 'formError') {
                    setMessage(res.data.errors)
                } else {
                    console.log(res.data)
                }
            })
            .catch((err) => {
                console.log("err", err)
            })


        // Add form submission logic here
    };

    return (
        <div>

            <div className='max-w-[700px] lg:mx-auto md:mx-auto mx-2 my-[30px] rounded-full bg-light-blue' >
                <nav className='flex justify-between lg:px-16 md:px-16 px-4 py-3 lg:text-[22px] md:text-[22px] text-[18px] text-[#4B4B4B]'>
                    <NavLink to={"/"} className={'text-medium-blue highlight relative'}>Refer</NavLink>
                    <NavLink to={"/"}>Benefits</NavLink>
                    <NavLink to={"/"}>FAQs</NavLink>
                    <NavLink to={"/"}>Support</NavLink>
                </nav>
            </div>

            <div className='relative lg:mx-16 md:mx-5 mx-2 my-10 px-8 py-8 rounded-3xl lg:max-h-[650px] md:min-h-[500px] bg-light-blue custom flex lg:flex-row md:flex-row flex-col items-center justify-between -z-20'>

                <span className='absolute lg:left-[46%] md:left-[46%] left-[7%] bottom-16  md:w-[12%] w-[20%]'><img src={dollar1} alt="" /></span>
                <span className='absolute lg:-top-4 md:-top-4 top-56 lg:left-[57%] md:left-[57%] left-[40%] -z-10 w-[20%]  md:w-[12%]'><img src={dollar2} alt="" /></span>
                <span className='absolute  right-0 bottom-[30%] -z-10 md:w-[12%] w-[20%]'><img src={dollar3} alt="" /></span>
                <span className='absolute top-0 left-0 -z-10 lg:w-full md:w-[12%] w-[20%]'><img src={dollar4} alt="" /></span>
                <span className='absolute right-0 top-0 -z-10 md:w-[12%]'><img src={dollar5} alt="" /></span>

                <div className=' max-w-[540px] min-w-[335px]'>
                    <div className=' flex flex-col lg:items-start md:items-start items-center justify-center gap-16 w-full maindiv'>
                        <div className='lg:text-[88px] md:text-[50px] text-[20px]  lg:text-left md:text-left text-center  font-bold leading-none maindiv-title'>
                            Let's Learn & Earn
                        </div>
                        <p className='lg:text-[40px] md:text-[25px] leading-tight maindiv-para'>
                            Get a chance to win <br /> up-to
                            <span className='lg:text-[54px] md:text-[35px] text-medium-blue font-bold maindiv-subpara'> Rs. 15,000</span>
                        </p>
                        <div className='z-50'>
                            <Button variant='contained' sx={{ backgroundColor: "#1A73E8", textTransform: 'none', fontSize: '18px', borderRadius: '8px', paddingX: '45px', paddingY: "9px" }}
                                onClick={handleClickOpen}>
                                Refer Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='lg:pt-0 md:pt-0 pt-10'>
                    <div className='max-w-[750px] lg:min-w-[530px] md:min-w-[300px] h-full'>
                        <img src={Anniversary} alt="Anniversary Accerdian" className='w-full h-full z-40' />
                    </div>
                </div>

            </div>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Referral Form
                </DialogTitle>
                <Button
                    variant='contained'
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                    }}
                >
                    Cancel
                </Button>
                <DialogContent dividers>
                    <Alert severity="error" >This is an error Alert.</Alert>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            width: "500px",
                            margin: '0 auto',
                            padding: 3,
                        }}
                    >

                        <TextField
                            label="Name"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Course Name"
                            name="courseName"
                            value={formValues.courseName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Referral Name"
                            name="referralName"
                            value={formValues.referralName}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                        <TextField
                            label="Relation to Referral"
                            name="relationToReferral"
                            select
                            value={formValues.relationToReferral}
                            onChange={handleChange}
                            fullWidth
                            required
                        >
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Colleague">Colleague</MenuItem>
                            <MenuItem value="Family member">Family Member</MenuItem>
                        </TextField>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </DialogContent>

            </Dialog>

        </div>
    )
}

export default Hero