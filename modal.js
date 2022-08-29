import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SMinputs from './input';
import SMbuttons from './button';
import { editData } from '../config/firebase/firebasemethods';
import { useDispatch } from 'react-redux';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxHeight: 500,
    overflow: 'scroll',
    p: 4,
};

export default function Modals(props) {
    const dispatch = useDispatch()

    const { open, data, handleClose, rerenderData } = props

    const [userObg, setUserObg] = React.useState({})


    let editDaatae = (e) => {
        editData(userObg, "Users", data.id).then(() => {
            console.log("successfully Edit ");
            handleClose()
            rerenderData(data.id,dispatch)
            
        }).catch((arr) => {
            console.log(arr);
        })
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
                        <h1 id='kkkkk'>Edit Profile</h1>
                    </Box>
                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Name" onChange={(e) => setUserObg({ ...userObg, name: e.target.value })} />
                    </Box>
                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Password" onChange={(e) => setUserObg({ ...userObg, password: e.target.value })} />
                    </Box>
                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Email" onChange={(e) => setUserObg({ ...userObg, email: e.target.value })} />

                    </Box>
                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Contact #" onChange={(e) => setUserObg({ ...userObg, phone: e.target.value })} />

                    </Box>
                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="CNIC #" onChange={(e) => setUserObg({ ...userObg, cnic: e.target.value })} />
                    </Box>

                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="City" onChange={(e) => setUserObg({ ...userObg, city: e.target.value })} />
                    </Box>

                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "12px" }}>
                        <SMinputs id="inputss" label="Country" onChange={(e) => setUserObg({ ...userObg, country: e.target.value })} />
                    </Box>


                    <Box sx={{ padding: 1, margin: '13px', marginLeft: "120px", marginTop: "20px" }}>
                        <SMbuttons label="Edit" id="buttons" onClick={editDaatae} />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
