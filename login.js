import { useEffect, useState } from "react";
import SMinputs from "../components/input";
import SMbuttons from "../components/button";
import { Box } from "@mui/material";
import { logInUser } from "../config/firebase/firebasemethods";
import { useLocation, useNavigate } from "react-router-dom";



export default function Login() {

    const [userObj, setUserObj] = useState({});
    const [loaders, setLoaders] = useState(false)
    const [usree, setusree] = useState(false)
    const location = useLocation()
    const navigatee = useNavigate()



    useEffect(() => {
        if (location.state && location.state.usree) {
            navigatee("/login")
        } else {
            navigatee("/signuup")
        }
    }, [])


    let LoginUser = () => {

        if (!userObj.email) {
            alert("email is required")
            return
        }


        if (!userObj.password || userObj.password.length < 6) {
            alert("Password is required password must be greater then 6 characters")
            return
        }

        setLoaders(true)
        console.log(userObj);

        logInUser(userObj)
            .then((success) => {
                console.log(success);
                setLoaders(false)
                navigatee("/", { state: { user: true } })
                
            })
            .catch((errr) => {
                setLoaders(false)
                console.log(errr);
            })

    }

    const kssaasakskka = () => {
        navigatee("/signuup")


    }
    return (

        <Box id='signupmain'>

            <h1 id='signupword'>Login</h1>



            <Box className="signupinputs">
                <SMinputs id="inputss" onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} type='text' label='Email' />
            </Box>

            <Box className="signupinputs">
                <SMinputs id="inputss" onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} type='password' label='Password' />
            </Box>
            <Box className="signupinputs">
                <h4 className="sss" style={{ marginRight: "6px" }}> Create a new Account? </h4>
                <h4 className="sss" style={{ fontWeight: "bold", cursor: "pointer" }} onClick={kssaasakskka}> Sign Up</h4>
            </Box>
            <Box className="signupbutton">
                <SMbuttons loading={loaders} onClick={LoginUser} label="Login" />
            </Box>

        </Box>

    )
}