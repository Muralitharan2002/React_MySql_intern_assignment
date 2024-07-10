import { Button, Card, CardContent, Divider, ListItemButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import headphone from '../assets/headphone.svg'


function createData(program, referrer_bonus, referee_bonus) {
    return { program, referrer_bonus, referee_bonus };
}

const rows = [
    createData('Professional Certificate Program in Product Management', "7,000", "9,000"),
    createData('PG Certificate Program in Strategic Product Management', "9,000", "11,000"),
    createData('Executive Program in Data Driven Product Management', "10,000", "10,000"),
    createData('CuExecutive Program in Product Management and Digital Transformationpcake', "10,000", "10,000"),
    createData('GingExecutive Program in Product Managementerbread', "10,000", "10,000"),
    createData('Advanced Certification in Product Management', "10,000", "10,000",),
    createData('Executive Program in Product Management and Project Management', "10,000", "10,000",),
];

function ReferralBenefits() {

    const List = [
        "Product Management",
        "Strategy & Leadership",
        "Business Management",
        "Fintech",
        "Senior Management",
        "Data Science",
        "Digital Transformation",
        "Business Analytics"
    ]

    return (
        <div className='lg:px-16 md:px-5 px-2 mb-20'>
            <div>
                <h1 className='text-center font-bold text-3xl'> What Are The <span className='text-medium-blue'>Referral Benefits?</span></h1>
            </div>
            <div className=' mt-16 flex gap-3'>
                <Card
                    sx={{ minWidth: { lg: '260px', md: "260px", sm: "260px", xs: '150px' }, paddingBottom: 0, borderRadius: 3 }}
                >
                    {
                        List.map((item, index) => (
                            <CardContent key={index} sx={{ padding: 0, ":last-child": { paddingBottom: 0 }, paddingX: 0 }} className={`${index + 1 === 1 && "active1"}`}>
                                <ListItemButton sx={{ fontSize: "17px", padding: 2, display: 'flex', justifyContent: "space-between", }} >
                                    {item}
                                    <IoIosArrowDown className='-rotate-90' />
                                </ListItemButton>
                                {List.length !== index + 1 && <Divider />}
                            </CardContent>
                        ))
                    }

                </Card>


                <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#DDEAFC" }}>
                                <TableCell sx={{ color: 'darkblue', fontWeight: "bold", fontSize: "20px" }}>Programs</TableCell>
                                <TableCell sx={{ color: 'darkblue', fontWeight: "bold", fontSize: "20px" }} align="center">Referrer Bonus</TableCell>
                                <TableCell sx={{ color: 'darkblue', fontWeight: "bold", fontSize: "20px" }} align="center">Referee Bonus</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row" sx={{ fontSize: "16px", width: "410px" }}>
                                        {row.program}
                                    </TableCell>
                                    <TableCell align='center' sx={{ fontSize: "18px" }}>{row.referrer_bonus}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "18px" }}>{row.referee_bonus}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>



            <div className='bg-medium-blue text-[white] rounded-xl flex flex-wrap items-center lg:justify-between md:justify-between justify-center gap-10 px-10 py-16 my-36 relative overflow-hidden'>
                <div className='flex items-center gap-4 z-50'>
                    <div >
                        <img className='bg-[white] rounded p-1' src={headphone} alt="" />
                    </div>
                    <div>
                        <p className='text-2xl'>Want to delve deeper into the program?</p>
                        <p className='text-md'>Share your details to receive expert insights from our program team!</p>
                    </div>
                </div>
                <div className='z-50'>
                    <Button sx={{ backgroundColor: 'white', textTransform: 'none', fontWeight: "bold", fontSize: "19px", '&:hover': { backgroundColor: "white" } }}>
                        Get in touch?
                    </Button>
                </div>


                <div className='absolute right-0 lg:top-5 md:top-20 z-10'>
                    <div className='circle1 rounded-full flex items-center justify-center'>
                        <div className='circle2 rounded-full  flex items-center justify-center'>
                            <div className='circle3 rounded-full '></div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default ReferralBenefits