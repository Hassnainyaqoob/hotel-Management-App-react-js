import { useEffect, useState } from "react"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { auth, DeleteDate, getDataa, getUserProfile, getUserProfileData } from "../../config/firebase/firebasemethods";
import Modals from "../../components/modal";
import Button from '@mui/material/Button';
import Footer from "../../components/footers";
import { onAuthStateChanged, signOut } from "firebase/auth";




export default function Profile() {

    const [render, setRender] = useState([])
    const [user, setUsers] = useState(false)
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState('');

    const [editState, setEditState] = useState(null)


    const navigatee = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const dataaaa = useSelector(a => a.namee)



    console.log(dataaaa);

    const handleClose = () => {
        setOpen(false);
    }

    // useEffect(() => {

    //     // if (location.state && location.state.user) {
    //     //     navigatee("/")
    //     // } else if (location.state && location.state.ueser) {
    //     //     navigatee("/")

    //     // } else {
    //     //     navigatee("/login")
    //     // }

    // }, [])



    const getAllData = (id) => {

        if (id) {
            getUserProfile(`Users/${id}`).then((res) => {
                setRender(res)
                // console.log(render);
                console.log(res)
                setRender(res)
                dispatch({
                    type: "DATAFROMDATABASE",
                    payload: res
                })

            }).catch((err) => {
                console.log(err)
            })
        }


    }

    // const findAndRemove = (id) => {
    //     render.filter((user, ind) => {
    //         const filteredArray = user.id !== id
    //         return filteredArray
    //     })
    // }


    // let deleteRow = (uid) => {

    //     console.log(uid);
    //     DeleteDate("Users", uid).then(() => {
    //         setRender(findAndRemove(uid))
    //         console.log("delete successfully ");
    //     }).catch((errr) => {
    //         console.log(errr);
    //     })

    // }


    const handleEdit = (item) => {

        setOpen(true)
        console.log("fuction runings =====> open", open);
        setEditState(item)

    }

    useEffect(() => {
        // signOut(auth)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid)
                getAllData(user.uid)
            }
            // console.log(user.uid);
        })

    }, [])


    return (
        <div id="diiiv">
            <div>

                <h1 id="myacount" style={{ fontWeight: "bold" }}>Profile</h1>
                <div style={{ backgroundColor: "black", width: 40, height: 3.5, marginLeft: "597px" }}>
                </div>

            </div>
            <div>
                <table >

                    {render.map((e, i) => {
                        return (
                            <div id="mainnnnnn">

                                <tbody key={i}>
                                    <tr >
                                        Name : {e.name}

                                    </tr>
                                    {/* <tr >
                                        <th style={{ margin: "20px" }} className="word">Email : </th>
                                        <td>{e.password}</td>

                                    </tr> */}

                                    <tr>
                                        Email : {e.email}
                                    </tr>





                                    {/* <tr> */}

                                    {/* <td  ></td> */}
                                    {/* <td style={{ cursor: 'pointer' }} onClick={() => deleteRow(e.id)}><DeleteForeverOutlinedIcon /></td> */}
                                    {/* </tr> */}

                                </tbody>
                                <Button id="edit-button" style={{ cursor: 'pointer', backgroundColor: "orange", color: "black" }} variant="contained" onClick={() => handleEdit(e)}><ModeEditOutlineOutlinedIcon />  Edit Profile</Button>
                            </div>
                        )
                    })}

                </table>

                <Modals data={editState} open={open} handleClose={handleClose} rerenderData={getUserProfileData} />

            </div>
            <Footer id="profile-footerrr" />
        </div >
    )
}

// dispatch(getUserProfileData(user.uid))










