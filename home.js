
import { Button, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import Cards from "../../components/cards";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BookingModal from "../../components/bookingmodal";
import Footer from "../../components/footers";
import Carousell from "../../components/carousel";
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import NavigationIcon from '@mui/icons-material/Navigation';




const hotelRooms = [
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Marriot Hotel',
    price: 5000,
    rooms: 4,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Museiam Hotel',
    price: 5000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Kolachi Hotel',
    price: 8000,
    rooms: 4,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Green Line Hotel',
    price: 5000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Nice Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Second Wife Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Luxury Hotel',
    price: 8000,
    rooms: 4,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Star Hotel',
    price: 10000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Five Star Hotel',
    price: 12000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Punjab Hotel',
    price: 12000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  }, {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Middle Hotel',
    price: 8000,
    rooms: 4,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  }, {
    img: 'https://www.hotel-online.com/wp-content/uploads/2019/04/Chamberlain_IsRoomServiceDead.jpg',
    name: 'Ten Star Hotel',
    price: 12000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
]



export default function Home() {


  const [filter, setFilter] = useState({ price: '5000' })
  const [dataArray, setDataArray] = useState(hotelRooms)



  const applyFilterHandle = () => {
    let filtered
    if (filter.price === '10000') {
      filtered = hotelRooms.filter((e) => e.price == 10000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())

    }
    else if (filter.price === '12000') {
      filtered = hotelRooms.filter((e) => e.price == 12000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }

    else if (filter.price === '8000') {
      filtered = hotelRooms.filter((e) => e.price == 8000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }


    else if (filter.price === '5000') {
      filtered = hotelRooms.filter((e) => e.price == 5000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }

    setDataArray(filtered)



    console.log('filtered', filtered);
  }

  return (
    <>

      <div>

        <Carousell />

        <Stack >


          <Stack direction='row' spacing={4} sx={{ marginBottom: 4, marginTop: 8, marginLeft: 35 }} >
            <FormControl id='Price' sx={{ minWidth: 200 }}>
              <InputLabel>Price </InputLabel>
              <Select label="Price" onChange={(e) => setFilter({ ...filter, price: e.target.value })}>
                <MenuItem value="12000">12000</MenuItem>
                <MenuItem value="10000">10000</MenuItem>
                <MenuItem value="8000">8000</MenuItem>
                <MenuItem value="5000">5000</MenuItem>

              </Select>
            </FormControl>

            <FormControl id='City' sx={{ minWidth: 200 }}>
              <InputLabel>City </InputLabel>
              <Select label="City" onChange={(e) => setFilter({ ...filter, city: e.target.value })}>
                <MenuItem value="Karachi">Karachi</MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
              </Select>
            </FormControl>


            <FormControl id='Rooms' sx={{ minWidth: 200 }}>
              <InputLabel>Rooms </InputLabel>
              <Select label="Rooms" onChange={(e) => setFilter({ ...filter, rooms: e.target.value })}>
                <MenuItem value='1' >1</MenuItem>
                <MenuItem value='2' >2</MenuItem>
                <MenuItem value='3' >3 </MenuItem>
                <MenuItem value='4' >4 </MenuItem>
              </Select>
            </FormControl>






          </Stack>
          <Stack direction="row" sx={{ textAlign: "center", marginLeft: 67, marginBottom: 6 }}>
            <Button variant="outlined" id="nsahquywhqj" onClick={applyFilterHandle}>
              Search Hotel
            </Button>
          </Stack>

          <Grid container spacing={15} >




            {
              dataArray.length > 0 && dataArray.map((room, index) => {
                return <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  <Cards data={room} key={{ index }} />
                </Grid>
              })
            }
          </Grid>


          <Stack direction="row" sx={{ textAlign: "center", marginLeft: 67, marginBottom: 6 }}>
            {/* <Button variant="outlined" id="nsahquywhqj" > */}
            {/* Search Hotel */}

            {/* </Button> */}

            <div id="knasnskn" style={{ backgroundColor: "orange", width: 76, borderRadius: "70%", height: 70, marginTop: 60, marginLeft: 54 }}>

              <a href="/#"><NavigationIcon sx={{ color: "black", fontSize: 40, textAlign: "center", marginTop: 1.4 }} /></a>
            </div>
            {/* <a href="mailto:husnainyaqoob321@gmail.com">link text</a> */}


          </Stack>


        </Stack>

        <Footer id="home-footerrrrer" />


      </div>

    </>
  )
}