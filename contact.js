
import React, { useState } from "react";
import SMbuttons from "../../components/button";
import Footer from "../../components/footers";
import SMinputs from "../../components/input";
import { sendData } from "../../config/firebase/firebasemethods";



export default function Contact() {
    const [userObj, setUserObj] = useState({})

    let databahjd = () => {
        sendData(userObj, "User Message").then((res) => {
            console.log("sucessfully Send");
        })

    }


    return (
        <>
            <div style={{marginLeft:295,marginBottom:20}}>
                <h1 id="kasuspiu" style={{ fontWeight: "bold" }}>Contact us</h1>
                <div style={{ backgroundColor: "black", width: 40, height: 3.5, marginLeft: "8px" }}>

                </div>

            </div>
            <div id="div-contact">

                <div>
                    <SMinputs id="asasasa" onChange={(e) => setUserObj({ ...userObj, Name: e.target.value })} label="Name" type="text" />
                </div>
                <div className="dyd">
                    <SMinputs id="asasasa" onChange={(e) => setUserObj({ ...userObj, Email: e.target.value })} label="Email" type="text" />

                </div>
                <div>
                    <textarea onChange={(e) => setUserObj({ ...userObj, Message: e.target.value })} name="comments" id="teactareaa" cols="90" rows="4" placeholder="Type Your message here"></textarea>

                </div>
                <div>
                    <SMbuttons id="contact-button" onClick={databahjd} label="SUBMIT DETAILS" />
                </div>
            </div>
            <Footer id="foooter" />
        </>

    )
}