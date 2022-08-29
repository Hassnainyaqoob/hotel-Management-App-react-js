import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import SMbuttons from './button';
import { useNavigate } from 'react-router-dom';
import BookingModal from './bookingmodal';


export default function Cards(props) {

    const { img, name, price, rooms, services, city } = props.data
    const [open, setOpen] = React.useState(false);

    const naviagate = useNavigate()


    const handleClose = () => {
        setOpen(false);

    }



    let Booookinf = () => {

        naviagate('/booking', { state: { data: props.data } })
        // setOpen(true)
        // console.log("fuction runings =====> open", open);

    }

    return (


        <div id="kasksnkaasaaaas" >


            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography >
                            Hotel Name : {name}
                        </Typography>
                        <Typography >
                            Price : {price}
                        </Typography>
                        <Typography >
                            Rooms : {rooms}
                        </Typography>
                        <Typography >
                            Sevices : {services}
                        </Typography>
                        <Typography >
                            City : {city}
                        </Typography>



                    </CardContent>
                </CardActionArea>
                <CardActions id='card-button'>
                    <SMbuttons id="buttons" onClick={Booookinf} label="Book Room" />
                </CardActions>
            </Card>

            {/* <BookingModal open={open} handleClose={handleClose} /> */}

        </div>
    );
}
