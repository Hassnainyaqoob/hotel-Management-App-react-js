import { Box, Container, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import SMbuttons from '../../components/button';
import Footer from '../../components/footers';
import SMinputs from '../../components/input';
import { sendData } from '../../config/firebase/firebasemethods';
import Payments from './payment';




export default function BookingScreen() {


    const [bookingData, setBookingData] = useState({})
    const [hotelRequirements, setHotelRequirements] = useState({})
    const [userObj, setUserObj] = useState({})
    const profileDate = useSelector(state => state.namee[0])
    const location = useLocation()
    const naviagte = useNavigate()


    console.log("Reduxx Dataaa", profileDate)
    console.log(location.state.data);







    let jhshbjhbnmkjhn = () => {
        const allDetails = ({
            ...bookingData,
            requirements: hotelRequirements,
            userDetails: userObj
        })

        naviagte("/payment", { state: { information: allDetails } })



        console.log(allDetails);
    }




    useEffect(() => {
        setBookingData({})
        if (location.state) {
            const dataObj = {
                userId: profileDate.id,
                hotel: location.state.data,


                // {userId:'hjhsjfjsdf',
                //     hotel:{

                //     },
                //     UserDetail:{

                //     },
                //     requirements:{
                //         noofroom 
                //         DynamicsCompressorNodeper
                //     }
            }

            setBookingData(dataObj)
        }


    }, [])



    return (
        <>
            <Container >
                <Grid container>



                    <Grid sx={{ marginTop: 1 }} xl={6} lg={6} md={6} sm={12} xs={12}>
                        <h1 >Book Now</h1>
                        <Box id="laksaskjaskj">

                            <Box>
                                <img width={340} src={location.state.data.img} alt="" />

                            </Box>

                        </Box>

                        <table>
                            <tr>
                                Hotel Name : {location.state.data.name}
                            </tr>
                            <tr>
                                City : {location.state.data.city}
                            </tr>
                            <tr>
                                Price : {location.state.data.price}
                            </tr>
                            <tr>
                                Rooms :{location.state.data.room}
                            </tr>
                            <tr>
                                Services : {location.state.data.services}
                            </tr>
                        </table>
                    </Grid>




                    <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box>

                            <Box>
                                <h5 id='personal-word'>Personal Deteals</h5>
                            </Box>
                            <div style={{ backgroundColor: "black", width: 27, height: 1.5,marginLeft:"12px" }}>

                            </div>
                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='text' id="lamsalsaaadwsww" onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} label='Name' />
                            </Box>

                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='text' id="lamsalsaaadwsww" onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label='Email' />
                            </Box>
                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='text' id="lamsalsaaadwsww" onChange={(e) => setUserObj({ ...userObj, Address: e.target.value })} label='Address' />
                            </Box>
                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='number' id="lamsalsaaadwsww" onChange={(e) => setUserObj({ ...userObj, ContactNumber: e.target.value })} label='Contact Number' />
                            </Box>

                            <Box className='lkjlkjlsasak' sx={{marginBottom:"20px"}}>
                                <SMinputs type='number' id="lamsalsaaadwsww" onChange={(e) => setUserObj({ ...userObj, Cnic: e.target.value })} label='Cnic' />
                            </Box>

                            <Box className='lkjlkjlsasak'>
                                <h5 id='hotel-worrrds'>Hotel Deteals</h5>
                            </Box>
                            <div style={{ backgroundColor: "black", width: 27, height: 2,marginLeft:"10px" }}>

                            </div>
                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='number' id="lamsalsaaadwsww" onChange={(e) => setHotelRequirements({ ...hotelRequirements, NoOfPerson: e.target.value })} label='No of Person' />
                            </Box>
                            <Box className='lkjlkjlsasak'>
                                <SMinputs type='number' id="lamsalsaaadwsww" onChange={(e) => setHotelRequirements({ ...hotelRequirements, NoOfDays: e.target.value })} label='No of Days' />
                            </Box>
                            <Box className='lkjlkjlsasak' >
                                <SMbuttons onClick={jhshbjhbnmkjhn} id='kjajabuttonssee' label="Next Step" />
                            </Box>

                        </Box>
                    </Grid>

                </Grid>

            </Container>

            <div>
                <Footer id="oterrr" />
            </div >
        </>
    )
}