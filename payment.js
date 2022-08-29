
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SMinputs from "../../components/input";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sendData } from "../../config/firebase/firebasemethods";
import SMbuttons from "../../components/button";


export default function Payments() {

    const [userObg, setUserObg] = useState({})

    const locatsas = useLocation()

    const [filter, setFilter] = useState({})
    console.log(userObg);

    console.log(locatsas.state.information.hotel.name);


    const AllDtaa = ({
        ...locatsas.state.information,
        userPayment: userObg

    })

    // console.log(filter);

    let jjkjkjkjkjkj = () => {

        sendData(AllDtaa, "User Bookings").then((res) => {
            console.log("sucessfully Send Booking");
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>


            <Grid container>


                <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                    <h1 >Book Now</h1>
                    <Box>

                        <Box>
                            <img width={340} src={locatsas.state.information.hotel.img} alt="" />

                        </Box>

                    </Box>

                    <table>
                        <tr>
                            Hotel Name : {locatsas.state.information.hotel.name}
                        </tr><tr>
                            City : {locatsas.state.information.hotel.city}
                        </tr>
                        <tr>
                            Price : {locatsas.state.information.hotel.price}
                        </tr>
                        <tr>
                            Rooms :{locatsas.state.information.hotel.rooms}
                        </tr>
                        <tr>
                            Services : {locatsas.state.information.hotel.services}
                        </tr>
                    </table>
                </Grid>




                <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box>

                        <Box>
                            <h5>Payment Deteals</h5>
                        </Box>

                        <Box>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel>Bank Name </InputLabel>
                                <Select label="Bank Name" onChange={(e) => setFilter({ ...filter, BankName: e.target.value })}>
                                    <MenuItem value="Bank aAlfallah">Bank aAlfallah</MenuItem>
                                    <MenuItem value="Bank Al Habib">Bank Al Habib</MenuItem>
                                </Select>
                            </FormControl>


                        </Box>
                        <Box>
                            <SMinputs type='number' onChange={(e) => setUserObg({ ...userObg, CreditCardNumber: e.target.value })} label='Credit Card Number' />
                        </Box>

                        <Box>
                            <SMinputs type='number' onChange={(e) => setUserObg({ ...userObg, CardCode: e.target.value })} label='Card Code' />
                        </Box>
                        <Box>
                            <SMinputs di="kasnanaaaaa" type='date' onChange={(e) => setUserObg({ ...userObg, CardExpiryDate: e.target.value })} />
                        </Box>

                        <Box>
                            <SMbuttons onClick={jjkjkjkjkjkj} label="Book Now" />
                        </Box>
                    </Box>
                </Grid>

            </Grid>

        </>
    )
}