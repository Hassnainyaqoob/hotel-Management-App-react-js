import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SMinputs from './input';
import SMbuttons from './button';
import { useSelector } from 'react-redux';
// import { editData } from '../config/firebase/firebasemethods';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BookingModal(props) {

    const { open, data, handleClose, rerenderData } = props

    const [userObg, setUserObg] = React.useState({})


    const profileData = useSelector(state => state.namee)
    console.log(profileData);

    // console.log(state);


    // let editDaatae = (e) => {
    //     editData(userObg, "Users", data.id).then(() => {
    //         console.log("successfully Edit ");
    //         handleClose()
    //         rerenderData()
    //     }).catch((arr) => {
    //         console.log(arr);
    //     })
    // }



    const bookingHandle = () => {


        const userProfile = profileData

        delete userProfile.password
        delete userProfile.id

        const dataObj = { ...userProfile, ...userObg }

        // setUserObg({...userProfile,...userObg})


        console.log(dataObj)
    }




    let skndksgfus = () => {
        handleClose()

        bookingHandle()

    }



    return (
        <div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <h1 id='jjjj'>Book Hotel</h1>
                    </Box>



                    <Box sx={{ padding: 1, margin: '', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Number of Person" onChange={(e) => setUserObg({ ...userObg, NumberofPerson: e.target.value })} />

                    </Box>



                    <Box sx={{ padding: 1, margin: '', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Number of Days" onChange={(e) => setUserObg({ ...userObg, NumberofDays: e.target.value })} />

                    </Box>


                    <Box sx={{ padding: 1, margin: '', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Number of Rooms" onChange={(e) => setUserObg({ ...userObg, NumberofRooms: e.target.value })} />

                    </Box>

                    <Box sx={{ padding: 1, margin: '', marginLeft: "90px", marginTop: "20px" }}>
                        <SMbuttons label="Book Now" id="buttons" onClick={skndksgfus} />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
