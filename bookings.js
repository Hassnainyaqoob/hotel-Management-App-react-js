
import React, { useEffect, useState } from "react";
import SMbuttons from "../../components/button";
import Footer from "../../components/footers";
import { getDataa } from "../../config/firebase/firebasemethods";
import { useSelector } from "react-redux";


export default function BookingsCards() {


    const dataaaa = useSelector(a => a.namee[0])

    const [printData, setPrintData] = useState([])

    console.log(dataaaa);

    let ksonkdlsjmknxmlk = () => {
        getDataa("User Bookings").then((response) => {

            console.log("dataaa ===============", response);

            setPrintData(response)

            let userBookings;

            if (response.length) {
                userBookings = response.filter((e) => e.userId == dataaaa.id)
                setPrintData(userBookings)

            } else {
                setPrintData([])
            }



        }).catch((erorr) => {
            console.log(erorr);
        })


        console.log(printData);

    }


    useEffect(() => {
        ksonkdlsjmknxmlk()

    }, [])

    return (
        <>
            <div>
                <h3 style={{textAlign:"center",margin:20,fontWeight:"bold"}}>User Book Hotels</h3>
            </div>
            {/* <SMbuttons onClick={ksonkdlsjmknxmlk} label="Click Him" /> */}
            <table style={{ margin: "20px" }}>

                {printData.map((v, i) => {
                    return <tr key={i} >
                        <img src={v.hotel.img} width="350px" alt="hotel Name Image" />
                        <tr>
                            User Name : {v.userDetails.name}
                        </tr>
                        <tr>
                            Hotel Name : {v.hotel.name}
                        </tr>
                        <tr>

                            City :  {v.hotel.city}
                        </tr>
                        <tr>

                            Price : {v.hotel.price}
                        </tr>
                        <tr>
                            Rooms : {v.hotel.rooms}

                        </tr>
                        <tr>

                            Services :  {v.hotel.services}
                        </tr>
                        <tr>

                            NoOfDays : {v.requirements.NoOfDays}
                        </tr>
                        <tr>

                            NoOfPerson : {v.requirements.NoOfPerson}
                        </tr>



                    </tr>
                })}

            </table>
            <Footer id="footer" />

        </>
    )
}