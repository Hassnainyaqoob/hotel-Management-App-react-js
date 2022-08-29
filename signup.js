import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SMbuttons from "../components/button";
import SMinputs from "../components/input";
import { sendData, signUpUser } from "../config/firebase/firebasemethods";


export default function Signup() {

    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()


    let signupUser = () => {


        if (!userObj.email) {
            alert("email is required")
            return
        }


        if (!userObj.password || userObj.password.length < 6) {
            alert("Password is required password must be greater then 6 characters")
            return
        }

        setLoader(true)
        console.log(userObj);

        signUpUser(userObj).then((res) => {
            const userUid = res.user.uid
            userObj.id = userUid
            console.log(res.user.uid);
            setLoader(false)
            navigate('/login', { state: { usree: true } })

            sendData(userObj, "Users", userUid).then(() => {
                console.log("Successfullly Saved");
            })
        })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            });

    }

    const ksakskka = () => {
        navigate('/login', { state: { usree: true } })

    }

    return (

        <div>

            <Box id='signupmain'>

                <h1 id='signupword'>Sign Up</h1>

                <Box className="signupinputs">
                    <SMinputs type='text' id="inputss" onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} label='Name' />
                </Box>

                <Box className="signupinputs">
                    <SMinputs type='text' id="inputss" onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label='Email' />
                </Box>
                <Box className="signupinputs">
                    <SMinputs type='password' id="inputss" onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} label='password' />
                </Box>

                <Box className="signupinputs">
                    <h4 className="sss" style={{ marginRight: "6px" }}>Already have Account? </h4>
                    <h4 className="sss" style={{ fontWeight: "bold", cursor: "pointer" }} onClick={ksakskka}> Login</h4>
                </Box>

                <Box className="signupbutton">
                    <SMbuttons id="sjka" loading={loader} onClick={signupUser} label="Sign Up" />
                </Box>

            </Box>

        </div>
    )
}