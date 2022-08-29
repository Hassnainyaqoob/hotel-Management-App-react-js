import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, ref, set, onValue, remove, push, get, child, onChildAdded, update } from "firebase/database";




export const auth = getAuth(app);
const database = getDatabase(app);



let signUpUser = (obj) => {

  return createUserWithEmailAndPassword(auth, obj.email, obj.password)

}


let logInUser = (obj) => {
  return signInWithEmailAndPassword(auth, obj.email, obj.password)

}








let logOutUser = () => {
  signOut(auth)
}


// let checkAuthUser = () => {

//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             const uid = user.uid;
//             // ...
//         } else {
//             // User is signed out
//             // ...
//         }
//     });
// }




/////// --------------- SENDDATA METHODS -----------------////////




let sendData = (obj, nodeName, id) => {
  if (!id) {
    // for id/key start
    let postListRef = ref(database, nodeName);
    obj.id = push(postListRef).key
    console.log(postListRef);
    // for id/key end
  }
  let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
  return set(newpostListRef, obj);
};




///////////////////------------------GetDatabase-----------------//////////////////////




let getDataa = (nodeName, id) => {
  const dbRef = ref(database)
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr;
          if (id) {
            arr = snapshot.val();
            resolve(arr);
          } else {
            arr = Object.values(snapshot.val())
            resolve(arr);
          }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

};




let getUserProfile = (nodeName, id) => {
  const dbRef = ref(database)
  return new Promise((resolve, reject) => {
    get(child(dbRef, `${nodeName}/${id ? id : ""}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let arr = []
          console.log(snapshot.val())
          arr.push(snapshot.val())
          resolve(arr);
          // // if (id) {
          // //   arr = snapshot.val();
          // //   resolve(arr);
          // // } else {
          // //   arr = Object.values(snapshot.val())
          // //   resolve(arr);
          // }
        } else {
          reject("No Data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

};



// update(ref(database, 'users/' + userId), {
//   username: name,
// });


///////-------------   DELETE METHODS   ---------------///////////



let DeleteDate = (nodeName, uid) => {
  const referencee = ref(database, `${nodeName}/${uid}`)
  return remove(referencee)
}





/////////////--------- EDIT METHODS  ----------/////////////////





let editData = (obj, nodeName, id) => {
  let newpostListRef = ref(database, `${nodeName}/${id ? id : obj.id}`);
  return update(newpostListRef, obj)
}







const getUserProfileData = (id, dispatch) => {

  if (id) {
    getUserProfile(`Users/${id}`).then((res) => {
      dispatch({
        type: "DATAFROMDATABASE",
        payload: res
      })
    }).catch((err) => {
      console.log(err)
    })
  }


}








export { signUpUser, logInUser, sendData, getDataa, DeleteDate, editData, getUserProfile, getUserProfileData, }